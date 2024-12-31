// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var dex_v1_dex_pb = require('../../dex/v1/dex_pb.js');

function serialize_jax_v1_GetDexByStrikesRequest(arg) {
  if (!(arg instanceof dex_v1_dex_pb.GetDexByStrikesRequest)) {
    throw new Error('Expected argument of type jax.v1.GetDexByStrikesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_jax_v1_GetDexByStrikesRequest(buffer_arg) {
  return dex_v1_dex_pb.GetDexByStrikesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_jax_v1_GetDexRequest(arg) {
  if (!(arg instanceof dex_v1_dex_pb.GetDexRequest)) {
    throw new Error('Expected argument of type jax.v1.GetDexRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_jax_v1_GetDexRequest(buffer_arg) {
  return dex_v1_dex_pb.GetDexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_jax_v1_GetDexResponse(arg) {
  if (!(arg instanceof dex_v1_dex_pb.GetDexResponse)) {
    throw new Error('Expected argument of type jax.v1.GetDexResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_jax_v1_GetDexResponse(buffer_arg) {
  return dex_v1_dex_pb.GetDexResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// DexService provides endpoints for delta exposure calculations
var OptionServiceService = exports.OptionServiceService = {
  // GetDex returns the delta exposure calculations for given parameters
getDex: {
    path: '/jax.v1.OptionService/GetDex',
    requestStream: false,
    responseStream: false,
    requestType: dex_v1_dex_pb.GetDexRequest,
    responseType: dex_v1_dex_pb.GetDexResponse,
    requestSerialize: serialize_jax_v1_GetDexRequest,
    requestDeserialize: deserialize_jax_v1_GetDexRequest,
    responseSerialize: serialize_jax_v1_GetDexResponse,
    responseDeserialize: deserialize_jax_v1_GetDexResponse,
  },
  // GetDexByStrikes returns the delta exposure calculations for a specified number of strikes around the spot price
getDexByStrikes: {
    path: '/jax.v1.OptionService/GetDexByStrikes',
    requestStream: false,
    responseStream: false,
    requestType: dex_v1_dex_pb.GetDexByStrikesRequest,
    responseType: dex_v1_dex_pb.GetDexResponse,
    requestSerialize: serialize_jax_v1_GetDexByStrikesRequest,
    requestDeserialize: deserialize_jax_v1_GetDexByStrikesRequest,
    responseSerialize: serialize_jax_v1_GetDexResponse,
    responseDeserialize: deserialize_jax_v1_GetDexResponse,
  },
};

exports.OptionServiceClient = grpc.makeGenericClientConstructor(OptionServiceService);
