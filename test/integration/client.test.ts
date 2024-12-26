import { JaxClient } from '../../src/client';

describe('JaxClient Integration Tests', () => {
  let client: JaxClient;

  beforeAll(() => {
    client = new JaxClient({
      host: 'localhost:50051'
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
    
    const strikePrices = response.getStrikePricesMap();
    const strikePriceKeys = Array.from(strikePrices.keys());
    expect(strikePriceKeys.length).toBeGreaterThan(0);
    
    // Get first strike price entry
    const firstStrike = strikePriceKeys[0];
    const expDates = strikePrices.get(firstStrike)?.getExpirationDatesMap();
    expect(expDates).toBeDefined();
    const expDateKeys = Array.from(expDates!.keys());
    expect(expDateKeys.length).toBeGreaterThan(0);
    
    // Get first expiration date entry
    const firstExpDate = expDateKeys[0];
    const optionTypes = expDates!.get(firstExpDate)?.getOptionTypesMap();
    expect(optionTypes).toBeDefined();
    expect(Array.from(optionTypes!.keys()).includes('call')).toBe(true);
    expect(Array.from(optionTypes!.keys()).includes('put')).toBe(true);
    
    // Verify delta values exist (we don't make assumptions about their range)
    const callDelta = optionTypes!.get('call')?.getValue();
    const putDelta = optionTypes!.get('put')?.getValue();
    expect(callDelta).toBeDefined();
    expect(putDelta).toBeDefined();
    expect(typeof callDelta).toBe('number');
    expect(typeof putDelta).toBe('number');
  }, 30000); // Increase timeout for real API call

  it('should handle invalid asset requests', async () => {
    const response = await client.getDex({
      underlyingAsset: 'INVALID',
      startStrikePrice: 150,
      endStrikePrice: 200
    });

    // Verify that we get an empty response for invalid assets
    expect(response).toBeDefined();
    const strikePriceKeys = Array.from(response.getStrikePricesMap().keys());
    expect(strikePriceKeys.length).toBe(0);
  });
}); 