import { JaxClient } from '../src/client';
import { grpc } from '@improbable-eng/grpc-web';
import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport';

describe('JaxClient Integration Tests', () => {
  let client: JaxClient;

  beforeAll(() => {
    client = new JaxClient({
      host: 'http://localhost:50051',
      transport: NodeHttpTransport()
    });
  });

  it('should fetch DEX data for AAPL', async () => {
    const response = await client.getDex({
      underlyingAsset: 'AAPL',
      startStrikePrice: 150,
      endStrikePrice: 200
    });

    expect(response).toBeDefined();
    expect(response.getSpotPrice()).toBeGreaterThan(0);
    expect(Array.from(response.getStrikePricesMap().keys())).toHaveLength(1);
  });

  it('should handle errors for invalid asset', async () => {
    await expect(client.getDex({
      underlyingAsset: 'INVALID',
      startStrikePrice: 150,
      endStrikePrice: 200
    })).rejects.toThrow();
  });
}); 