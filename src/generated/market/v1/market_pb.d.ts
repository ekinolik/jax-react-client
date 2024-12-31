// package: jax.v1
// file: market/v1/market.proto

import * as jspb from "google-protobuf";

export class GetLastTradeRequest extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLastTradeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLastTradeRequest): GetLastTradeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  setPrice(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getExchange(): string;
  setExchange(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLastTradeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLastTradeResponse): GetLastTradeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

