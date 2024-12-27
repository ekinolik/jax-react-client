import { GetDexResponse } from '../generated/dex/v1/dex_pb';

interface CacheEntry {
  data: GetDexResponse;
  timestamp: number;
  ttl?: number;
}

interface CacheKey {
  underlying: string;
  startStrike?: number;
  endStrike?: number;
}

export class DexCache {
  private cache: Map<string, CacheEntry>;
  private readonly TTL_MS = 15 * 60 * 1000; // 15 minutes in milliseconds

  constructor() {
    this.cache = new Map();
  }

  private generateKey(underlying: string, startStrike?: number, endStrike?: number): string {
    return JSON.stringify({ underlying, startStrike, endStrike });
  }

  set(underlying: string, data: GetDexResponse, ttl?: number, startStrike?: number, endStrike?: number): void {
    const key = this.generateKey(underlying, startStrike, endStrike);
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl: ttl || this.TTL_MS,
    });
  }

  get(underlying: string, startStrike?: number, endStrike?: number): GetDexResponse | null {
    const key = this.generateKey(underlying, startStrike, endStrike);
    const entry = this.cache.get(key);
    
    if (!entry) {
      return null;
    }

    if (Date.now() - entry.timestamp > (entry.ttl || this.TTL_MS)) {
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  clear(): void {
    this.cache.clear();
  }
} 