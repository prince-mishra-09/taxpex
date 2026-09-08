/**
 * Calculates GST based on given parameters.
 * 
 * @param {Object} params
 * @param {number} params.amount - The input amount (base or inclusive)
 * @param {number} params.rate - The GST percentage (e.g., 5, 12, 18, 28)
 * @param {'add' | 'remove'} params.mode - Whether to calculate GST on top of the amount, or extract it from an inclusive amount.
 * @param {'intra' | 'inter'} params.type - Intra-state (CGST+SGST) or Inter-state (IGST)
 * @returns {Object} Calculation result containing baseAmount, gstAmount, totalAmount, and breakdown (cgst, sgst, igst).
 */
export function calculateGst({ amount, rate, mode, type }) {
  // Handle invalid/edge case inputs
  if (amount === undefined || amount === null || isNaN(amount) || amount < 0) {
    return {
      isValid: false,
      error: 'Invalid amount',
      baseAmount: 0,
      gstAmount: 0,
      totalAmount: 0,
      breakdown: { cgst: 0, sgst: 0, igst: 0 }
    };
  }

  let baseAmount = 0;
  let gstAmount = 0;
  let totalAmount = 0;

  if (mode === 'add') {
    baseAmount = amount;
    gstAmount = (amount * rate) / 100;
    totalAmount = baseAmount + gstAmount;
  } else if (mode === 'remove') {
    totalAmount = amount;
    // Formula: GST Amount = (Inclusive Amount * Rate) / (100 + Rate)
    gstAmount = (amount * rate) / (100 + rate);
    baseAmount = totalAmount - gstAmount;
  }

  // Round values to 2 decimal places to prevent floating point errors
  baseAmount = Math.round(baseAmount * 100) / 100;
  gstAmount = Math.round(gstAmount * 100) / 100;
  totalAmount = Math.round(totalAmount * 100) / 100;

  const breakdown = {
    cgst: 0,
    sgst: 0,
    igst: 0
  };

  if (type === 'intra') {
    // Round split to avoid mismatch, ensure total sum is exactly gstAmount
    breakdown.cgst = Math.round((gstAmount / 2) * 100) / 100;
    breakdown.sgst = gstAmount - breakdown.cgst; // Ensures cgst + sgst === gstAmount exactly
  } else {
    breakdown.igst = gstAmount;
  }

  return {
    isValid: true,
    error: null,
    baseAmount,
    gstAmount,
    totalAmount,
    breakdown
  };
}
