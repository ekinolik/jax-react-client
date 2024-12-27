# JAX React Client

A React client for the JAX (Options Delta Exposure) service. This client provides a simple interface to interact with the JAX gRPC service.

## Installation

Install the package directly from GitHub:

```bash
npm install github:ekinolik/jax-react-client
```

Or add it to your package.json:
```json
{
  "dependencies": {
    "@ekinolik/jax-react-client": "github:ekinolik/jax-react-client"
  }
}
```

## Development

### Initial Setup

When cloning the repository for development, make sure to initialize the submodules:

```bash
git clone https://github.com/ekinolik/jax-react-client.git
cd jax-react-client
git submodule update --init --recursive
```

### Building

```bash
npm install
npm run build
```

### Generating Proto Files

The proto files are included as a Git submodule. After cloning and initializing submodules:

```bash
npm run generate
```

This will generate the necessary gRPC client code from the proto definitions.

## Requirements

- Node.js >= 14.0.0
- A running JAX gRPC service

## Usage

### Basic Usage

```typescript
import { JaxClient } from '@ekinolik/jax-react-client';

const client = new JaxClient({
  host: 'localhost:50051'  // Your JAX gRPC service address
});

// Fetch DEX data
const response = await client.getDex({
  underlyingAsset: 'AAPL',
  startStrikePrice: 150,
  endStrikePrice: 200
});

// Access the data
const spotPrice = response.getSpotPrice();
const strikePrices = response.getStrikePricesMap();
```

### React Hook

For React applications, we provide a convenient hook:

```typescript
import { useJaxClient } from '@ekinolik/jax-react-client';

function MyComponent() {
  const jax = useJaxClient({
    host: 'localhost:50051'
  });

  const fetchData = async () => {
    try {
      const response = await jax.getDex({
        underlyingAsset: 'AAPL',
        startStrikePrice: 150,
        endStrikePrice: 200
      });
      
      // Handle the response
      console.log('Spot price:', response.getSpotPrice());
    } catch (error) {
      console.error('Error fetching DEX data:', error);
    }
  };

  return (
    <button onClick={fetchData}>
      Fetch DEX Data
    </button>
  );
}
```

## Response Structure

The response from `getDex` contains the following structure:

```typescript
interface DexResponse {
  getSpotPrice(): number;
  getStrikePricesMap(): Map<string, ExpirationDateMap>;
}

interface ExpirationDateMap {
  getExpirationDatesMap(): Map<string, OptionTypeMap>;
}

interface OptionTypeMap {
  getOptionTypesMap(): Map<string, DexValue>;
}

interface DexValue {
  getValue(): number;
}
```

Example of accessing nested data:

```typescript
const response = await client.getDex({ underlyingAsset: 'AAPL' });

// Get spot price
const spotPrice = response.getSpotPrice();

// Get all strike prices
const strikePrices = response.getStrikePricesMap();

// For a specific strike price, get expiration dates
const expDates = strikePrices.get('180')?.getExpirationDatesMap();

// For a specific expiration date, get option types
const optionTypes = expDates?.get('2024-03-15')?.getOptionTypesMap();

// Get delta values for calls and puts
const callDelta = optionTypes?.get('call')?.getValue();
const putDelta = optionTypes?.get('put')?.getValue();
```

## Error Handling

The client handles errors gracefully:

- For invalid assets, the service returns an empty response (empty strike prices map)
- Network or service errors are thrown and should be caught using try/catch
- Invalid parameters (e.g., invalid strike price range) will result in an error

Example error handling:

```typescript
try {
  const response = await client.getDex({
    underlyingAsset: 'AAPL',
    startStrikePrice: 150,
    endStrikePrice: 200
  });
  
  if (Array.from(response.getStrikePricesMap().keys()).length === 0) {
    console.log('No data available for the given parameters');
    return;
  }
  
  // Process response...
} catch (error) {
  console.error('Error fetching DEX data:', error);
}
```

## Development

To build the client locally:

```bash
npm install
npm run build
```

To run tests:

```bash
# Unit tests
npm test

# Integration tests (requires running JAX service)
npm run test:integration
``` 


## Caching

The client implements a two-level caching strategy to minimize API calls and improve performance:

### Server-Side Cache
- The server maintains a 15-minute cache for each underlying asset
- All strike prices for an asset are cached, regardless of requested ranges
- Cache entries include spot price and full option chain data
- Cache expiration time is communicated to clients via gRPC metadata

### Client-Side Cache
- Caches responses based on underlying asset AND strike price range
- Cache duration automatically syncs with server's remaining TTL
- Different strike price ranges for the same asset are cached separately
- Default TTL is 15 minutes if server doesn't provide expiration time
- Cache is cleared on page refresh (in-memory cache)

Example of how caching works:
```typescript
// First request - hits server, caches result
await client.getDex({ underlyingAsset: 'SPY', startStrikePrice: 400, endStrikePrice: 450 });
// Second request with same parameters - returns cached data
await client.getDex({ underlyingAsset: 'SPY', startStrikePrice: 400, endStrikePrice: 450 });
// Different strike range - hits server but may use server's cache
await client.getDex({ underlyingAsset: 'SPY', startStrikePrice: 450, endStrikePrice: 500 });```