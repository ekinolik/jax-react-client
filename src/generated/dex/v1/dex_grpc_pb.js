// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var dex_v1_dex_pb = require('../../dex/v1/dex_pb.js');

function serialize_dex_v1_GetDexByStrikesRequest(arg) {
  if (!(arg instanceof dex_v1_dex_pb.GetDexByStrikesRequest)) {
    throw new Error('Expected argument of type dex.v1.GetDexByStrikesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dex_v1_GetDexByStrikesRequest(buffer_arg) {
  return dex_v1_dex_pb.GetDexByStrikesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dex_v1_GetDexRequest(arg) {
  if (!(arg instanceof dex_v1_dex_pb.GetDexRequest)) {
    throw new Error('Expected argument of type dex.v1.GetDexRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dex_v1_GetDexRequest(buffer_arg) {
  return dex_v1_dex_pb.GetDexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dex_v1_GetDexResponse(arg) {
  if (!(arg instanceof dex_v1_dex_pb.GetDexResponse)) {
    throw new Error('Expected argument of type dex.v1.GetDexResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dex_v1_GetDexResponse(buffer_arg) {
  return dex_v1_dex_pb.GetDexResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// DexService provides endpoints for delta exposure calculations
var DexServiceService = exports.DexServiceService = {
  // GetDex returns the delta exposure calculations for given parameters
getDex: {
    path: '/dex.v1.DexService/GetDex',
    requestStream: false,
    responseStream: false,
    requestType: dex_v1_dex_pb.GetDexRequest,
    responseType: dex_v1_dex_pb.GetDexResponse,
    requestSerialize: serialize_dex_v1_GetDexRequest,
    requestDeserialize: deserialize_dex_v1_GetDexRequest,
    responseSerialize: serialize_dex_v1_GetDexResponse,
    responseDeserialize: deserialize_dex_v1_GetDexResponse,
  },
  // GetDexByStrikes returns the delta exposure calculations for a specified number of strikes around the spot price
getDexByStrikes: {
    path: '/dex.v1.DexService/GetDexByStrikes',
    requestStream: false,
    responseStream: false,
    requestType: dex_v1_dex_pb.GetDexByStrikesRequest,
    responseType: dex_v1_dex_pb.GetDexResponse,
    requestSerialize: serialize_dex_v1_GetDexByStrikesRequest,
    requestDeserialize: deserialize_dex_v1_GetDexByStrikesRequest,
    responseSerialize: serialize_dex_v1_GetDexResponse,
    responseDeserialize: deserialize_dex_v1_GetDexResponse,
  },
};

exports.DexServiceClient = grpc.makeGenericClientConstructor(DexServiceService);
