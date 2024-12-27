import * as jspb from 'google-protobuf'



export class GetLastTradeRequest extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): GetLastTradeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLastTradeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLastTradeRequest): GetLastTradeRequest.AsObject;
  static serializeBinaryToWriter(message: GetLastTradeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLastTradeRequest;
  static deserializeBinaryFromReader(message: GetLastTradeRequest, reader: jspb.BinaryReader): GetLastTradeRequest;
}

export namespace GetLastTradeRequest {
  export type AsObject = {
    ticker: string,
  }
}

export class GetLastTradeResponse extends jspb.Message {
  getPrice(): number;
  setPrice(value: number): GetLastTradeResponse;

  getSize(): number;
  setSize(value: number): GetLastTradeResponse;

  getTimestamp(): number;
  setTimestamp(value: number): GetLastTradeResponse;

  getExchange(): string;
  setExchange(value: string): GetLastTradeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLastTradeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLastTradeResponse): GetLastTradeResponse.AsObject;
  static serializeBinaryToWriter(message: GetLastTradeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLastTradeResponse;
  static deserializeBinaryFromReader(message: GetLastTradeResponse, reader: jspb.BinaryReader): GetLastTradeResponse;
}

export namespace GetLastTradeResponse {
  export type AsObject = {
    price: number,
    size: number,
    timestamp: number,
    exchange: string,
  }
}

