import { describe, it } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

describe('sum', () => {
  it('should add two positive numbers correctly', () => {
    assert.strictEqual(sum(2, 3), 5);
  });

  it('should add a positive and a negative number correctly', () => {
    assert.strictEqual(sum(5, -3), 2);
  });

  it('should add two negative numbers correctly', () => {
    assert.strictEqual(sum(-2, -3), -5);
  });

  it('should add zero correctly', () => {
    assert.strictEqual(sum(0, 5), 5);
    assert.strictEqual(sum(5, 0), 5);
  });
});
