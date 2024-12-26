import * as grpc from '@grpc/grpc-js';
import { GetDexRequest, GetDexResponse } from './generated/dex/v1/dex_pb';
import { DexServiceClient } from './generated/dex/v1/dex_grpc_pb';

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

  constructor(options: DexOptions) {
    this.client = new DexServiceClient(options.host, grpc.credentials.createInsecure());
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

    return new Promise((resolve, reject) => {
      this.client.getDex(request, (err: Error | null, response: GetDexResponse) => {
        if (err) {
          reject(err);
          return;
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