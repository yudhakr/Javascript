import { describe, it } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

describe('sum', () => {
  it('should return the sum of two positive numbers', () => {
    assert.strictEqual(sum(2, 3), 5);
  });

  it('should return 0 if the first argument is not a number', () => {
    assert.strictEqual(sum('a', 3), 0);
  });

  it('should return 0 if the second argument is not a number', () => {
    assert.strictEqual(sum(2, 'b'), 0);
  });

  it('should return 0 if both arguments are not numbers', () => {
    assert.strictEqual(sum('a', 'b'), 0);
  });

  it('should return 0 if the first argument is negative', () => {
    assert.strictEqual(sum(-1, 5), 0);
  });

  it('should return 0 if the second argument is negative', () => {
    assert.strictEqual(sum(3, -2), 0);
  });

  it('should return 0 if both arguments are negative', () => {
    assert.strictEqual(sum(-1, -2), 0);
  });

  it('should return the sum when first argument is zero', () => {
    assert.strictEqual(sum(0, 5), 5);
  });

  it('should return the sum when second argument is zero', () => {
    assert.strictEqual(sum(5, 0), 5);
  });

  it('should return 0 when both arguments are zero', () => {
    assert.strictEqual(sum(0, 0), 0);
  });
});
