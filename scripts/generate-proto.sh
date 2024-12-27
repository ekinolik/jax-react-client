#!/bin/bash

# Create the output directory
mkdir -p src/generated

# Generate JavaScript code
protoc \
  --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
  --js_out=import_style=commonjs:src/generated \
  --grpc_out=grpc_js:src/generated \
  -I ../../api/proto \
  ../../api/proto/dex/v1/dex.proto \
  ../../api/proto/market/v1/market.proto 