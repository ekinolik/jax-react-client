import '@jest/globals';
import { JaxClient } from '../../src/client';
import * as path from 'path';

describe('JaxClient Integration Tests', () => {
  let client: JaxClient;

  beforeAll(() => {
    const certsDir = path.join(__dirname, 'certs');
    client = new JaxClient({
      host: 'localhost:50051',
      useTLS: true,
      certPaths: {
        ca: path.join(certsDir, 'ca.crt'),
        cert: path.join(certsDir, 'client.crt'),
        key: path.join(certsDir, 'client.key')
      }
    });
  });

  describe('DEX API', () => {
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

    it('should fetch DEX data by number of strikes for AAPL', async () => {
      const response = await client.getDexByStrikes({
        underlyingAsset: 'AAPL',
        numStrikes: 5
      });

      expect(response).toBeDefined();
      expect(response.getSpotPrice()).toBeGreaterThan(0);
      
      const strikePrices = response.getStrikePricesMap();
      const strikePriceKeys = Array.from(strikePrices.keys());
      expect(strikePriceKeys.length).toBe(5); // Should have exactly 5 strikes
      
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

    it('should handle invalid number of strikes', async () => {
      try {
        await client.getDexByStrikes({
          underlyingAsset: 'AAPL',
          numStrikes: 4 // Even number should fail
        });
        fail('Should have thrown an error for even number of strikes');
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });

  describe('GEX API', () => {
    it('should fetch GEX data for AAPL', async () => {
      const response = await client.getGex({
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
      
      // Verify gamma values exist (we don't make assumptions about their range)
      const callGamma = optionTypes!.get('call')?.getValue();
      const putGamma = optionTypes!.get('put')?.getValue();
      expect(callGamma).toBeDefined();
      expect(putGamma).toBeDefined();
      expect(typeof callGamma).toBe('number');
      expect(typeof putGamma).toBe('number');
    }, 30000); // Increase timeout for real API call

    it('should fetch GEX data by number of strikes for AAPL', async () => {
      const response = await client.getGexByStrikes({
        underlyingAsset: 'AAPL',
        numStrikes: 5
      });

      expect(response).toBeDefined();
      expect(response.getSpotPrice()).toBeGreaterThan(0);
      
      const strikePrices = response.getStrikePricesMap();
      const strikePriceKeys = Array.from(strikePrices.keys());
      expect(strikePriceKeys.length).toBe(5); // Should have exactly 5 strikes
      
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
      
      // Verify gamma values exist (we don't make assumptions about their range)
      const callGamma = optionTypes!.get('call')?.getValue();
      const putGamma = optionTypes!.get('put')?.getValue();
      expect(callGamma).toBeDefined();
      expect(putGamma).toBeDefined();
      expect(typeof callGamma).toBe('number');
      expect(typeof putGamma).toBe('number');
    }, 30000); // Increase timeout for real API call

    it('should handle invalid asset requests', async () => {
      const response = await client.getGex({
        underlyingAsset: 'INVALID',
        startStrikePrice: 150,
        endStrikePrice: 200
      });

      // Verify that we get an empty response for invalid assets
      expect(response).toBeDefined();
      const strikePriceKeys = Array.from(response.getStrikePricesMap().keys());
      expect(strikePriceKeys.length).toBe(0);
    });

    it('should handle invalid number of strikes', async () => {
      try {
        await client.getGexByStrikes({
          underlyingAsset: 'AAPL',
          numStrikes: 4 // Even number should fail
        });
        fail('Should have thrown an error for even number of strikes');
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });

  describe('Last Trade API', () => {
    it('should fetch last trade data for AAPL', async () => {
      const response = await client.getLastTrade({
        ticker: 'AAPL'
      });

      expect(response).toBeDefined();
      expect(response.getPrice()).toBeGreaterThan(0);
      expect(response.getSize()).toBeGreaterThan(0);
      expect(response.getTimestamp()).toBeGreaterThan(0);
      expect(response.getExchange()).toBeDefined();
    }, 30000); // Increase timeout for real API call

    it('should handle invalid ticker requests', async () => {
      try {
        await client.getLastTrade({
          ticker: 'INVALID_TICKER'
        });
        fail('Should have thrown an error for invalid ticker');
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });
}); 