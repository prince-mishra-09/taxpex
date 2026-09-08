import test from 'node:test';
import assert from 'node:assert';
import { calculateGst } from './gst.js';

test('GST Calculator Logic', async (t) => {
  await t.test('Add GST - Intra State (18%)', () => {
    const res = calculateGst({ amount: 1000, rate: 18, mode: 'add', type: 'intra' });
    assert.strictEqual(res.isValid, true);
    assert.strictEqual(res.baseAmount, 1000);
    assert.strictEqual(res.gstAmount, 180);
    assert.strictEqual(res.totalAmount, 1180);
    assert.strictEqual(res.breakdown.cgst, 90);
    assert.strictEqual(res.breakdown.sgst, 90);
    assert.strictEqual(res.breakdown.igst, 0);
  });

  await t.test('Remove GST - Inter State (18%)', () => {
    const res = calculateGst({ amount: 1180, rate: 18, mode: 'remove', type: 'inter' });
    assert.strictEqual(res.baseAmount, 1000);
    assert.strictEqual(res.gstAmount, 180);
    assert.strictEqual(res.totalAmount, 1180);
    assert.strictEqual(res.breakdown.cgst, 0);
    assert.strictEqual(res.breakdown.sgst, 0);
    assert.strictEqual(res.breakdown.igst, 180);
  });

  await t.test('Decimal rounding check - Remove GST (12%)', () => {
    const res = calculateGst({ amount: 56.55, rate: 12, mode: 'remove', type: 'intra' });
    assert.strictEqual(res.totalAmount, 56.55);
    // GST = (56.55 * 12) / 112 = 6.0589... -> 6.06
    assert.strictEqual(res.gstAmount, 6.06);
    // Base = 56.55 - 6.06 = 50.49
    assert.strictEqual(res.baseAmount, 50.49);
    assert.strictEqual(res.breakdown.cgst, 3.03);
    assert.strictEqual(res.breakdown.sgst, 3.03);
  });

  await t.test('Zero value', () => {
    const res = calculateGst({ amount: 0, rate: 5, mode: 'add', type: 'intra' });
    assert.strictEqual(res.baseAmount, 0);
    assert.strictEqual(res.gstAmount, 0);
    assert.strictEqual(res.totalAmount, 0);
  });

  await t.test('Negative value validation', () => {
    const res = calculateGst({ amount: -500, rate: 18, mode: 'add', type: 'intra' });
    assert.strictEqual(res.isValid, false);
    assert.strictEqual(res.error, 'Invalid amount');
  });

  await t.test('Large value formatting check', () => {
    const res = calculateGst({ amount: 10000000, rate: 28, mode: 'add', type: 'inter' });
    assert.strictEqual(res.baseAmount, 10000000);
    assert.strictEqual(res.gstAmount, 2800000);
    assert.strictEqual(res.totalAmount, 12800000);
    assert.strictEqual(res.breakdown.igst, 2800000);
  });

  await t.test('Invalid inputs (null/NaN)', () => {
    let res = calculateGst({ amount: null, rate: 5, mode: 'add', type: 'intra' });
    assert.strictEqual(res.isValid, false);
    
    res = calculateGst({ amount: 'abc', rate: 5, mode: 'add', type: 'intra' });
    assert.strictEqual(res.isValid, false);
  });
});
