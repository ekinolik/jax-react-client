#!/bin/bash

# Create the output directory
mkdir -p src/generated

# Clean up existing generated files
rm -rf src/generated/*

# Generate JavaScript code
protoc \
  --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
  --js_out=import_style=commonjs:src/generated \
  --grpc_out=grpc_js:src/generated \
  -I ../../api/proto \
  ../../api/proto/dex/v1/dex.proto \
  ../../api/proto/market/v1/market.proto

# Generate TypeScript definitions
protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --ts_out=src/generated \
  -I ../../api/proto \
  ../../api/proto/dex/v1/dex.proto \
  ../../api/proto/market/v1/market.proto 