# JAX React Client

A React client library for the JAX (Options Delta Exposure) service.

## Installation

Install the package directly from GitHub:

```bash
npm install git+https://github.com/ekinolik/jax-react-client.git#main
```

Or add it to your package.json:
```json
{
  "dependencies": {
    "@ekinolik/jax-react-client": "git+https://github.com/ekinolik/jax-react-client.git#main"
  }
}
```

## Setup

### 1. gRPC-Web Proxy Setup

The React client requires a gRPC-Web proxy (like Envoy) to communicate with the JAX service. Here's how to set up Envoy:

1. Install Envoy (using Docker):
```bash
docker pull envoyproxy/envoy:v1.28.0
```

2. Create an Envoy configuration file (`envoy.yaml`):
```yaml
static_resources:
  listeners:
  - name: listener_0
    address:
      socket_address: { address: 0.0.0.0, port_value: 8080 }
    filter_chains:
    - filters:
      - name: envoy.filters.network.http_connection_manager
        typed_config:
          "@type": type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager
          codec_type: auto
          stat_prefix: ingress_http
          route_config:
            name: local_route
            virtual_hosts:
            - name: local_service
              domains: ["*"]
              routes:
              - match: { prefix: "/" }
                route:
                  cluster: jax_service
                  timeout: 0s
                  max_stream_duration:
                    grpc_timeout_header_max: 0s
              cors:
                allow_origin_string_match:
                - prefix: "*"
                allow_methods: GET, PUT, DELETE, POST, OPTIONS
                allow_headers: keep-alive,user-agent,cache-control,content-type,content-transfer-encoding,x-accept-content-transfer-encoding,x-accept-response-streaming,x-user-agent,x-grpc-web,grpc-timeout
                max_age: "1728000"
                expose_headers: grpc-status,grpc-message
          http_filters:
          - name: envoy.filters.http.grpc_web
            typed_config:
              "@type": type.googleapis.com/envoy.extensions.filters.http.grpc_web.v3.GrpcWeb
          - name: envoy.filters.http.cors
            typed_config:
              "@type": type.googleapis.com/envoy.extensions.filters.http.cors.v3.Cors
          - name: envoy.filters.http.router
            typed_config:
              "@type": type.googleapis.com/envoy.extensions.filters.http.router.v3.Router
  clusters:
  - name: jax_service
    connect_timeout: 0.25s
    type: logical_dns
    http2_protocol_options: {}
    lb_policy: round_robin
    load_assignment:
      cluster_name: cluster_0
      endpoints:
        - lb_endpoints:
            - endpoint:
                address:
                  socket_address:
                    address: host.docker.internal
                    port_value: 50051
```

3. Run Envoy:
```bash
docker run -v "$(pwd)/envoy.yaml:/etc/envoy/envoy.yaml:ro" \
  -p 8080:8080 \
  envoyproxy/envoy:v1.28.0
```

### 2. React Setup

1. Install required dependencies:
```bash
npm install @improbable-eng/grpc-web google-protobuf
```

2. Configure CORS in your React app if needed:
```typescript
// In your React app configuration
{
  proxy: {
    '/dex.v1.DexService/*': {
      target: 'http://localhost:8080',
      changeOrigin: true
    }
  }
}
```

## Usage

### Using the React Hook

```tsx
import { useJaxClient } from '@ekinolik/jax-react-client';

function App() {
  const jaxClient = useJaxClient({
    host: 'http://localhost:8080', // Point to your Envoy proxy
  });

  const handleFetchData = async () => {
    try {
      const response = await jaxClient.getDex({
        underlyingAsset: 'AAPL',
        startStrikePrice: 170,
        endStrikePrice: 180,
      });
      console.log('DEX data:', response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <button onClick={handleFetchData}>
      Fetch DEX Data
    </button>
  );
}
```

### Using the DexViewer Component

```tsx
import { DexViewer } from '@ekinolik/jax-react-client';

function App() {
  return (
    <DexViewer
      host="http://localhost:8080" // Point to your Envoy proxy
      underlyingAsset="AAPL"
      startStrike={170}
      endStrike={180}
    />
  );
}
```

## Response Structure

The response includes:
- `spotPrice`: Current price of the underlying asset
- `strikePrices`: Map of strike prices to expiration dates and option types, with DEX values

Example response:
```json
{
  "spotPrice": 123.45,
  "strikePrices": {
    "170": {
      "expirationDates": {
        "2024-03-15": {
          "optionTypes": {
            "call": {
              "value": 12345.67
            },
            "put": {
              "value": -1234.56
            }
          }
        }
      }
    }
  }
}
```

## Development

1. Clone the repository:
```bash
git clone https://github.com/ekinolik/jax-react-client.git
```

2. Install dependencies:
```bash
npm install
```

3. Generate protobuf files:
```bash
npm run generate
```

4. Build the package:
```bash
npm run build
```

## Troubleshooting

1. **CORS Issues**: Make sure your Envoy proxy is properly configured with CORS headers as shown in the configuration above.

2. **Connection Refused**: Verify that both the JAX service (port 50051) and Envoy proxy (port 8080) are running.

3. **Type Errors**: If you encounter TypeScript errors, make sure you've generated the protobuf files (`npm run generate`) before building.

4. **gRPC-Web Errors**: Check that your Envoy proxy is properly forwarding requests to the JAX service. You can check Envoy logs for details. 
