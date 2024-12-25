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

Install required dependencies:
```bash
npm install @improbable-eng/grpc-web google-protobuf
```

## Usage

### Using the React Hook

```tsx
import { useJaxClient } from '@ekinolik/jax-react-client';

function App() {
  const jaxClient = useJaxClient({
    host: 'your-jax-service-url:50051', // Your JAX service URL and port
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
      host="your-jax-service-url:50051" // Your JAX service URL and port
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

1. **Connection Refused**: Verify that the JAX service is running and accessible at the specified URL and port.

2. **Type Errors**: If you encounter TypeScript errors, make sure you've generated the protobuf files (`npm run generate`) before building.

3. **gRPC Errors**: Check that your JAX service URL is correct and that the service is running. 
