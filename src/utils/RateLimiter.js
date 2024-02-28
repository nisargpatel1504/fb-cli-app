export default class RateLimiter {
  constructor(limitWindowMs) {
    this.limitWindowMs = limitWindowMs;
    this.lastCallTimestamp = 0;
  }

  async limit(fn) {
    const now = Date.now();
    if (now - this.lastCallTimestamp < this.limitWindowMs) {
      const delay = this.limitWindowMs - (now - this.lastCallTimestamp);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
    this.lastCallTimestamp = Date.now();
    return fn();
  }
}
