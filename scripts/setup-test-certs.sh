#!/bin/bash

# Create test certificates directory
TEST_CERTS_DIR="test/integration/certs"
mkdir -p "$TEST_CERTS_DIR"

# Check if we're in the React client directory
if [ ! -f "package.json" ]; then
    echo "Error: This script must be run from the React client directory"
    exit 1
fi

# Get the absolute path of the script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

# Find the root project directory (where the server is)
ROOT_DIR="$( cd "$SCRIPT_DIR/../../.." &> /dev/null && pwd )"
if [ ! -f "$ROOT_DIR/scripts/generate-client-cert.sh" ]; then
    echo "Error: Could not find the server's generate-client-cert.sh script at $ROOT_DIR/scripts/generate-client-cert.sh"
    echo "Current directory: $(pwd)"
    echo "Script directory: $SCRIPT_DIR"
    echo "Root directory: $ROOT_DIR"
    exit 1
fi

# First ensure the server has its certificates
if [ ! -f "$ROOT_DIR/certs/ca/ca.crt" ] || [ ! -f "$ROOT_DIR/certs/ca/ca.key" ]; then
    echo "Setting up server certificates first..."
    (cd "$ROOT_DIR" && chmod +x scripts/generate-certs.sh && ./scripts/generate-certs.sh)
fi

# Generate test client certificates
(cd "$ROOT_DIR" && chmod +x scripts/generate-client-cert.sh && ./scripts/generate-client-cert.sh test-client)

# Copy the certificates to the test directory
cp "$ROOT_DIR/client-certs/test-client/ca.crt" "$TEST_CERTS_DIR/"
cp "$ROOT_DIR/client-certs/test-client/client.crt" "$TEST_CERTS_DIR/"
cp "$ROOT_DIR/client-certs/test-client/client.key" "$TEST_CERTS_DIR/"

echo "Test certificates have been set up in $TEST_CERTS_DIR/" 