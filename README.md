# JAX React Client

A React client for the JAX (Options Delta and Gamma Exposure) service. This client provides a simple interface to interact with the JAX gRPC service.

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
const dexResponse = await client.getDex({
  underlyingAsset: 'AAPL',
  startStrikePrice: 150,
  endStrikePrice: 200
});

// Access DEX data
const spotPrice = dexResponse.getSpotPrice();
const strikePrices = dexResponse.getStrikePricesMap();

// Fetch DEX data by number of strikes
const dexByStrikesResponse = await client.getDexByStrikes({
  underlyingAsset: 'AAPL',
  numStrikes: 5  // Returns 5 strikes centered around spot price
});

// Fetch GEX data
const gexResponse = await client.getGex({
  underlyingAsset: 'AAPL',
  startStrikePrice: 150,
  endStrikePrice: 200
});

// Access GEX data
const gexSpotPrice = gexResponse.getSpotPrice();
const gexStrikePrices = gexResponse.getStrikePricesMap();

// Fetch GEX data by number of strikes
const gexByStrikesResponse = await client.getGexByStrikes({
  underlyingAsset: 'AAPL',
  numStrikes: 5  // Returns 5 strikes centered around spot price
});

// Fetch last trade data
const lastTradeResponse = await client.getLastTrade({
  ticker: 'AAPL'
});

// Access last trade data
const price = lastTradeResponse.getPrice();
const size = lastTradeResponse.getSize();
const timestamp = new Date(lastTradeResponse.getTimestamp() * 1000);
const exchange = lastTradeResponse.getExchange();
```

### React Hook

For React applications, we provide a convenient hook:

```typescript
import { useJaxClient } from '@ekinolik/jax-react-client';

function MyComponent() {
  const jax = useJaxClient({
    host: 'localhost:50051'
  });

  const fetchDexData = async () => {
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

  const fetchDexByStrikes = async () => {
    try {
      const response = await jax.getDexByStrikes({
        underlyingAsset: 'AAPL',
        numStrikes: 5  // Returns 5 strikes centered around spot price
      });
      
      // Handle the response
      console.log('Spot price:', response.getSpotPrice());
    } catch (error) {
      console.error('Error fetching DEX data:', error);
    }
  };

  const fetchGexData = async () => {
    try {
      const response = await jax.getGex({
        underlyingAsset: 'AAPL',
        startStrikePrice: 150,
        endStrikePrice: 200
      });
      
      // Handle the response
      console.log('Spot price:', response.getSpotPrice());
    } catch (error) {
      console.error('Error fetching GEX data:', error);
    }
  };

  const fetchGexByStrikes = async () => {
    try {
      const response = await jax.getGexByStrikes({
        underlyingAsset: 'AAPL',
        numStrikes: 5  // Returns 5 strikes centered around spot price
      });
      
      // Handle the response
      console.log('Spot price:', response.getSpotPrice());
    } catch (error) {
      console.error('Error fetching GEX data:', error);
    }
  };

  const fetchLastTrade = async () => {
    try {
      const response = await jax.getLastTrade({
        ticker: 'AAPL'
      });
      
      console.log('Last trade:', {
        price: response.getPrice(),
        size: response.getSize(),
        timestamp: new Date(response.getTimestamp() * 1000),
        exchange: response.getExchange()
      });
    } catch (error) {
      console.error('Error fetching last trade:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchDexData}>
        Fetch DEX Data
      </button>
      <button onClick={fetchDexByStrikes}>
        Fetch DEX Data by Strikes
      </button>
      <button onClick={fetchGexData}>
        Fetch GEX Data
      </button>
      <button onClick={fetchGexByStrikes}>
        Fetch GEX Data by Strikes
      </button>
      <button onClick={fetchLastTrade}>
        Fetch Last Trade
      </button>
    </div>
  );
}
```

## Response Structures

### DEX/GEX Response

The response from `getDex`, `getDexByStrikes`, `getGex`, and `getGexByStrikes` contains the following structure:

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
  getValue(): number;  // DEX or GEX value depending on the endpoint
}
```

### Last Trade Response

The response from `getLastTrade` contains the following structure:

```typescript
interface LastTradeResponse {
  getPrice(): number;      // Last trade price
  getSize(): number;       // Last trade size
  getTimestamp(): number;  // Unix timestamp in seconds
  getExchange(): string;   // Exchange identifier
}
```

## Error Handling

The client handles errors gracefully:

- Network or service errors are thrown and should be caught using try/catch
- Invalid parameters (e.g., invalid ticker) will result in an error
- For getDexByStrikes, if fewer strikes are available than requested, it returns all available strikes

Example error handling:

```typescript
try {
  const response = await client.getLastTrade({
    ticker: 'AAPL'
  });
  // Process response...
} catch (error) {
  console.error('Error fetching last trade:', error);
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

The client interacts with the server's caching mechanism:

### DEX Data
- Server caches DEX data for 15 minutes by default
- Cache duration is configurable via server's `JAX_DEX_CACHE_TTL` environment variable
- Cache expiration time is communicated via gRPC metadata

### Last Trade Data
- Server caches last trade data for 1 second by default
- Cache duration is configurable via server's `JAX_MARKET_CACHE_TTL` environment variable
- No client-side caching for last trade data to ensure freshness

## Using mTLS Authentication

The client supports mutual TLS (mTLS) authentication. To use it:

1. Request client certificates from your JAX server administrator. They will provide you with three files:
   - `ca.crt`: The Certificate Authority (CA) certificate
   - `client.crt`: Your client certificate
   - `client.key`: Your client private key

2. Create a directory in your project for the certificates:
```bash
mkdir -p certs
```

3. Copy the certificate files to your project, ensuring secure handling of the private key:
```bash
# Example - adjust paths according to where you received the files
cp /path/to/received/ca.crt certs/
cp /path/to/received/client.crt certs/
cp /path/to/received/client.key certs/

# Set proper permissions
chmod 600 certs/client.key
chmod 644 certs/ca.crt certs/client.crt
```

4. Initialize the client with the certificate paths:
```typescript
const client = new JaxClient({
  host: 'your-server:50051',
  useTLS: true,
  certPaths: {
    ca: './certs/ca.crt',
    cert: './certs/client.crt',
    key: './certs/client.key'
  }
});
```

### Security Notes

1. Never commit certificates or private keys to version control
2. Keep your client private key secure and never share it
3. Use environment variables or a secure secret management system for certificate paths in production
4. Ensure certificates are properly secured with appropriate file permissions
5. Request new certificates from your server administrator when they expire

### Development Environment

For development environments, you might want to add the certificate paths to your `.env` file:

```bash
JAX_CA_CERT=./certs/ca.crt
JAX_CLIENT_CERT=./certs/client.crt
JAX_CLIENT_KEY=./certs/client.key
```

Then use them in your client initialization:
```typescript
const client = new JaxClient({
  host: process.env.JAX_HOST || 'localhost:50051',
  useTLS: true,
  certPaths: {
    ca: process.env.JAX_CA_CERT!,
    cert: process.env.JAX_CLIENT_CERT!,
    key: process.env.JAX_CLIENT_KEY!
  }
});
```

Remember to add these paths to your `.gitignore`:
```
# Certificate files
certs/
*.crt
*.key
```