#!/bin/bash

# Create necessary directories
mkdir -p ./src/generated

# Clean up existing generated files
rm -rf ./src/generated/*

# Generate JavaScript code
grpc_tools_node_protoc \
  --js_out=import_style=commonjs:./src/generated \
  --grpc_out=grpc_js:./src/generated \
  --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
  -I ../../api/proto \
  ../../api/proto/option/v1/option.proto \
  ../../api/proto/market/v1/market.proto

# Generate TypeScript definitions
grpc_tools_node_protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --ts_out=grpc_js:./src/generated \
  -I ../../api/proto \
  ../../api/proto/option/v1/option.proto \
  ../../api/proto/market/v1/market.proto 