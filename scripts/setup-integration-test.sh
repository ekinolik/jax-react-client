#!/bin/bash

# Check if certificates exist
if [ ! -f "test/integration/certs/ca.crt" ] || [ ! -f "test/integration/certs/client.crt" ] || [ ! -f "test/integration/certs/client.key" ]; then
    echo "Setting up test certificates..."
    chmod +x scripts/setup-test-certs.sh
    ./scripts/setup-test-certs.sh
fi

# Install Envoy for gRPC-Web proxy
if ! command -v envoy &> /dev/null; then
    echo "Installing Envoy..."
    if [[ "$OSTYPE" == "darwin"* ]]; then
        brew install envoy
    else
        echo "Please install Envoy manually for your OS"
        exit 1
    fi
fi

# Create test directory if it doesn't exist
mkdir -p test/integration

# Start Envoy proxy in background
envoy -c test/integration/envoy.yaml &
ENVOY_PID=$!

# Cleanup function
cleanup() {
    echo "Cleaning up..."
    kill $ENVOY_PID
}

# Set trap for cleanup
trap cleanup EXIT 