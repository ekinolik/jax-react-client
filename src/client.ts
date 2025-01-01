import * as grpc from '@grpc/grpc-js';
import { GetDexRequest, GetDexResponse, GetDexByStrikesRequest } from './generated/option/v1/dex_pb';
import { GetLastTradeRequest, GetLastTradeResponse } from './generated/market/v1/market_pb';
import { OptionServiceClient } from './generated/option/v1/dex_grpc_pb';
import { MarketServiceClient } from './generated/market/v1/market_grpc_pb';

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

export interface GetGexParams {
  underlyingAsset: string;
  startStrikePrice?: number;
  endStrikePrice?: number;
}

export interface GetGexByStrikesParams {
  underlyingAsset: string;
  numStrikes: number;
}

export class JaxClient {
  private optionClient: InstanceType<typeof OptionServiceClient>;
  private marketClient: InstanceType<typeof MarketServiceClient>;

  constructor(options: ClientOptions) {
    this.optionClient = new OptionServiceClient(options.host, grpc.credentials.createInsecure());
    this.marketClient = new MarketServiceClient(options.host, grpc.credentials.createInsecure());
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
      this.optionClient.getDex(request, {}, (err, response) => {
        if (err) {
          reject(err);
          return;
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

    return new Promise((resolve, reject) => {
      this.optionClient.getDexByStrikes(request, {}, (err, response) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(response);
      });
    });
  }

  async getGex(params: GetGexParams): Promise<GetDexResponse> {
    const request = new GetDexRequest();
    request.setUnderlyingAsset(params.underlyingAsset);
    
    if (params.startStrikePrice !== undefined) {
      request.setStartStrikePrice(params.startStrikePrice);
    }
    if (params.endStrikePrice !== undefined) {
      request.setEndStrikePrice(params.endStrikePrice);
    }

    return new Promise((resolve, reject) => {
      this.optionClient.getGex(request, {}, (err, response) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(response);
      });
    });
  }

  async getGexByStrikes(params: GetGexByStrikesParams): Promise<GetDexResponse> {
    const request = new GetDexByStrikesRequest();
    request.setUnderlyingAsset(params.underlyingAsset);
    request.setNumStrikes(params.numStrikes);

    return new Promise((resolve, reject) => {
      this.optionClient.getGexByStrikes(request, {}, (err, response) => {
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
export function useJaxClient(options: ClientOptions) {
  const client = new JaxClient(options);

  return {
    getDex: (params: GetDexParams) => client.getDex(params),
    getDexByStrikes: (params: GetDexByStrikesParams) => client.getDexByStrikes(params),
    getGex: (params: GetGexParams) => client.getGex(params),
    getGexByStrikes: (params: GetGexByStrikesParams) => client.getGexByStrikes(params),
    getLastTrade: (params: GetLastTradeParams) => client.getLastTrade(params),
  };
} 