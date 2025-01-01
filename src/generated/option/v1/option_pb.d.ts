// package: jax.v1
// file: option/v1/option.proto

import * as jspb from "google-protobuf";

export class GetDexRequest extends jspb.Message {
  getUnderlyingAsset(): string;
  setUnderlyingAsset(value: string): void;

  hasStartStrikePrice(): boolean;
  clearStartStrikePrice(): void;
  getStartStrikePrice(): number;
  setStartStrikePrice(value: number): void;

  hasEndStrikePrice(): boolean;
  clearEndStrikePrice(): void;
  getEndStrikePrice(): number;
  setEndStrikePrice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDexRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDexRequest): GetDexRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDexRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDexRequest;
  static deserializeBinaryFromReader(message: GetDexRequest, reader: jspb.BinaryReader): GetDexRequest;
}

export namespace GetDexRequest {
  export type AsObject = {
    underlyingAsset: string,
    startStrikePrice: number,
    endStrikePrice: number,
  }
}

export class GetDexByStrikesRequest extends jspb.Message {
  getUnderlyingAsset(): string;
  setUnderlyingAsset(value: string): void;

  getNumStrikes(): number;
  setNumStrikes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDexByStrikesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDexByStrikesRequest): GetDexByStrikesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDexByStrikesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDexByStrikesRequest;
  static deserializeBinaryFromReader(message: GetDexByStrikesRequest, reader: jspb.BinaryReader): GetDexByStrikesRequest;
}

export namespace GetDexByStrikesRequest {
  export type AsObject = {
    underlyingAsset: string,
    numStrikes: number,
  }
}

export class GetDexResponse extends jspb.Message {
  getSpotPrice(): number;
  setSpotPrice(value: number): void;

  getStrikePricesMap(): jspb.Map<string, ExpirationDateMap>;
  clearStrikePricesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDexResponse): GetDexResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDexResponse;
  static deserializeBinaryFromReader(message: GetDexResponse, reader: jspb.BinaryReader): GetDexResponse;
}

export namespace GetDexResponse {
  export type AsObject = {
    spotPrice: number,
    strikePricesMap: Array<[string, ExpirationDateMap.AsObject]>,
  }
}

export class ExpirationDateMap extends jspb.Message {
  getExpirationDatesMap(): jspb.Map<string, OptionTypeMap>;
  clearExpirationDatesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExpirationDateMap.AsObject;
  static toObject(includeInstance: boolean, msg: ExpirationDateMap): ExpirationDateMap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExpirationDateMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExpirationDateMap;
  static deserializeBinaryFromReader(message: ExpirationDateMap, reader: jspb.BinaryReader): ExpirationDateMap;
}

export namespace ExpirationDateMap {
  export type AsObject = {
    expirationDatesMap: Array<[string, OptionTypeMap.AsObject]>,
  }
}

export class OptionTypeMap extends jspb.Message {
  getOptionTypesMap(): jspb.Map<string, DexValue>;
  clearOptionTypesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OptionTypeMap.AsObject;
  static toObject(includeInstance: boolean, msg: OptionTypeMap): OptionTypeMap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OptionTypeMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OptionTypeMap;
  static deserializeBinaryFromReader(message: OptionTypeMap, reader: jspb.BinaryReader): OptionTypeMap;
}

export namespace OptionTypeMap {
  export type AsObject = {
    optionTypesMap: Array<[string, DexValue.AsObject]>,
  }
}

export class DexValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DexValue.AsObject;
  static toObject(includeInstance: boolean, msg: DexValue): DexValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DexValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DexValue;
  static deserializeBinaryFromReader(message: DexValue, reader: jspb.BinaryReader): DexValue;
}

export namespace DexValue {
  export type AsObject = {
    value: number,
  }
}

