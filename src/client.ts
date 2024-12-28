import * as grpc from '@grpc/grpc-js';
import { GetDexRequest, GetDexResponse, GetDexByStrikesRequest } from './generated/dex/v1/dex_pb';
import { GetLastTradeRequest, GetLastTradeResponse } from './generated/market/v1/market_pb';
import { DexServiceClient } from './generated/dex/v1/dex_grpc_pb';
import { MarketServiceClient } from './generated/market/v1/market_grpc_pb';
import { DexCache } from './cache/dexCache';

export interface ClientOptions {
  host: string;
}

export interface GetDexParams {
  underlyingAsset: string;
  startStrikePrice?: number;
  endStrikePrice?: number;
}

export interface GetLastTradeParams {
  ticker: string;
}

export interface GetDexByStrikesParams {
  underlyingAsset: string;
  numStrikes: number;
}

export class JaxClient {
  private dexClient: InstanceType<typeof DexServiceClient>;
  private marketClient: InstanceType<typeof MarketServiceClient>;
  private dexCache: DexCache;

  constructor(options: ClientOptions) {
    this.dexClient = new DexServiceClient(options.host, grpc.credentials.createInsecure());
    this.marketClient = new MarketServiceClient(options.host, grpc.credentials.createInsecure());
    this.dexCache = new DexCache();
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
    const cachedResponse = this.dexCache.get(
      params.underlyingAsset, 
      params.startStrikePrice, 
      params.endStrikePrice
    );
    if (cachedResponse) {
      return cachedResponse;
    }

    // If not in cache, make the API call
    return new Promise((resolve, reject) => {
      this.dexClient.getDex(request, {}, (err, response, details) => {
        if (err) {
          reject(err);
          return;
        }
        
        // Update cache with strike range
        const expiresAt = details?.metadata?.get('cache-expires-at')?.[0];
        if (expiresAt) {
          const ttl = (parseInt(expiresAt) * 1000) - Date.now();
          this.dexCache.set(
            params.underlyingAsset, 
            response, 
            ttl, 
            params.startStrikePrice, 
            params.endStrikePrice
          );
        } else {
          this.dexCache.set(
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

  async getLastTrade(params: GetLastTradeParams): Promise<GetLastTradeResponse> {
    const request = new GetLastTradeRequest();
    request.setTicker(params.ticker);

    return new Promise((resolve, reject) => {
      this.marketClient.getLastTrade(request, {}, (err, response) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(response);
      });
    });
  }

  async getDexByStrikes(params: GetDexByStrikesParams): Promise<GetDexResponse> {
    const request = new GetDexByStrikesRequest();
    request.setUnderlyingAsset(params.underlyingAsset);
    request.setNumStrikes(params.numStrikes);

    // Check cache first
    const cachedResponse = this.dexCache.get(params.underlyingAsset);
    if (cachedResponse) {
      return cachedResponse;
    }

    // If not in cache, make the API call
    return new Promise((resolve, reject) => {
      this.dexClient.getDexByStrikes(request, {}, (err, response, details) => {
        if (err) {
          reject(err);
          return;
        }
        
        // Update cache
        const expiresAt = details?.metadata?.get('cache-expires-at')?.[0];
        if (expiresAt) {
          const ttl = (parseInt(expiresAt) * 1000) - Date.now();
          this.dexCache.set(params.underlyingAsset, response, ttl);
        } else {
          this.dexCache.set(params.underlyingAsset, response);
        }
        resolve(response);
      });
    });
  }
}

// React hook for using the JAX client
export function useJaxClient(options: ClientOptions) {
  const client = new JaxClient(options);

  return {
    getDex: (params: GetDexParams) => client.getDex(params),
    getDexByStrikes: (params: GetDexByStrikesParams) => client.getDexByStrikes(params),
    getLastTrade: (params: GetLastTradeParams) => client.getLastTrade(params),
  };
} 