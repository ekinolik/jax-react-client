import * as grpc from '@grpc/grpc-js';
import { GetDexRequest, GetDexResponse } from './generated/dex/v1/dex_pb';
import { DexServiceClient } from './generated/dex/v1/dex_grpc_pb';
import { DexCache } from './cache/dexCache';

export interface DexOptions {
  host: string;
}

export interface GetDexParams {
  underlyingAsset: string;
  startStrikePrice?: number;
  endStrikePrice?: number;
}

export class JaxClient {
  private client: InstanceType<typeof DexServiceClient>;
  private cache: DexCache;

  constructor(options: DexOptions) {
    this.client = new DexServiceClient(options.host, grpc.credentials.createInsecure());
    this.cache = new DexCache();
  }

  async getDex(params: GetDexParams): Promise<GetDexResponse> {
    const request = new GetDexRequest();
    request.setUnderlyingAsset(params.underlyingAsset);
    
    if (params.startStrikePrice !== undefined) {
      request.setStartStrikePrice(params.startStrikePrice);
    }
    if (params.endStrikePrice !== undefined) {
      request.setEndStrikePrice(params.endStrikePrice);
    }

    // Check cache first with strike range
    const cachedResponse = this.cache.get(
      params.underlyingAsset, 
      params.startStrikePrice, 
      params.endStrikePrice
    );
    if (cachedResponse) {
      return cachedResponse;
    }

    // If not in cache, make the API call
    return new Promise((resolve, reject) => {
      this.client.getDex(request, {}, (err, response, details) => {
        if (err) {
          reject(err);
          return;
        }
        
        // Update cache with strike range
        const expiresAt = details?.metadata?.get('cache-expires-at')?.[0];
        if (expiresAt) {
          const ttl = (parseInt(expiresAt) * 1000) - Date.now();
          this.cache.set(
            params.underlyingAsset, 
            response, 
            ttl, 
            params.startStrikePrice, 
            params.endStrikePrice
          );
        } else {
          this.cache.set(
            params.underlyingAsset, 
            response, 
            undefined, 
            params.startStrikePrice, 
            params.endStrikePrice
          );
        }
        resolve(response);
      });
    });
  }
}

// React hook for using the JAX client
export function useJaxClient(options: DexOptions) {
  const client = new JaxClient(options);

  return {
    getDex: (params: GetDexParams) => client.getDex(params),
  };
} 