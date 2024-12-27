// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var market_v1_market_pb = require('../../market/v1/market_pb.js');

function serialize_market_v1_GetLastTradeRequest(arg) {
  if (!(arg instanceof market_v1_market_pb.GetLastTradeRequest)) {
    throw new Error('Expected argument of type market.v1.GetLastTradeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_market_v1_GetLastTradeRequest(buffer_arg) {
  return market_v1_market_pb.GetLastTradeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_market_v1_GetLastTradeResponse(arg) {
  if (!(arg instanceof market_v1_market_pb.GetLastTradeResponse)) {
    throw new Error('Expected argument of type market.v1.GetLastTradeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_market_v1_GetLastTradeResponse(buffer_arg) {
  return market_v1_market_pb.GetLastTradeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MarketServiceService = exports.MarketServiceService = {
  getLastTrade: {
    path: '/market.v1.MarketService/GetLastTrade',
    requestStream: false,
    responseStream: false,
    requestType: market_v1_market_pb.GetLastTradeRequest,
    responseType: market_v1_market_pb.GetLastTradeResponse,
    requestSerialize: serialize_market_v1_GetLastTradeRequest,
    requestDeserialize: deserialize_market_v1_GetLastTradeRequest,
    responseSerialize: serialize_market_v1_GetLastTradeResponse,
    responseDeserialize: deserialize_market_v1_GetLastTradeResponse,
  },
};

exports.MarketServiceClient = grpc.makeGenericClientConstructor(MarketServiceService);
