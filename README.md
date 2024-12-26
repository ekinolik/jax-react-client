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