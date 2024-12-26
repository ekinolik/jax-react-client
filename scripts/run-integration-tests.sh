#!/bin/bash

# Start the gRPC server in the background
cd ../../cmd/server
go run main.go &
SERVER_PID=$!

# Wait for server to start
sleep 5

# Run the integration tests
cd ../../clients/react
npm run test:integration
TEST_EXIT_CODE=$?

# Kill the server
kill $SERVER_PID

# Exit with the test exit code
exit $TEST_EXIT_CODE 