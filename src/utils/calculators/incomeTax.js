/**
 * Income Tax Calculator Logic (FY 2024-25 / AY 2025-26)
 */

export function calculateIncomeTax({ annualIncome = 0, ageGroup = 'below60', deductions80C = 0, deductions80D = 0, hraExemption = 0, otherDeductions = 0, isSalaried = true }) {
  const gross = Math.max(0, parseFloat(annualIncome) || 0)
  const d80c = Math.min(150000, Math.max(0, parseFloat(deductions80C) || 0))
  const d80d = Math.max(0, parseFloat(deductions80D) || 0)
  const hra = Math.max(0, parseFloat(hraExemption) || 0)
  const other = Math.max(0, parseFloat(otherDeductions) || 0)

  // --- NEW REGIME (FY 2024-25) ---
  const newStdDeduction = isSalaried ? 75000 : 0
  const newTaxableIncome = Math.max(0, gross - newStdDeduction)
  
  let newTaxBeforeCess = 0
  if (newTaxableIncome > 300000) {
    if (newTaxableIncome <= 700000) {
      newTaxBeforeCess += (newTaxableIncome - 300000) * 0.05
    } else {
      newTaxBeforeCess += 400000 * 0.05 // 3L-7L (20k)
      if (newTaxableIncome <= 1000000) {
        newTaxBeforeCess += (newTaxableIncome - 700000) * 0.10
      } else {
        newTaxBeforeCess += 300000 * 0.10 // 7L-10L (30k)
        if (newTaxableIncome <= 1200000) {
          newTaxBeforeCess += (newTaxableIncome - 1000000) * 0.15
        } else {
          newTaxBeforeCess += 200000 * 0.15 // 10L-12L (30k)
          if (newTaxableIncome <= 1500000) {
            newTaxBeforeCess += (newTaxableIncome - 1200000) * 0.20
          } else {
            newTaxBeforeCess += 300000 * 0.20 // 12L-15L (60k)
            newTaxBeforeCess += (newTaxableIncome - 1500000) * 0.30 // Above 15L
          }
        }
      }
    }
  }

  // Section 87A Rebate in New Regime (Full tax rebate if taxable income <= 7,00,000)
  if (newTaxableIncome <= 700000) {
    newTaxBeforeCess = 0
  }
  const newCess = newTaxBeforeCess * 0.04
  const newTotalTax = Math.round(newTaxBeforeCess + newCess)

  // --- OLD REGIME ---
  const oldStdDeduction = isSalaried ? 50000 : 0
  const totalOldDeductions = oldStdDeduction + d80c + d80d + hra + other
  const oldTaxableIncome = Math.max(0, gross - totalOldDeductions)

  let basicExemption = 250000
  if (ageGroup === 'senior') basicExemption = 300000
  if (ageGroup === 'superSenior') basicExemption = 500000

  let oldTaxBeforeCess = 0
  if (oldTaxableIncome > basicExemption) {
    if (oldTaxableIncome <= 500000) {
      oldTaxBeforeCess += (oldTaxableIncome - basicExemption) * 0.05
    } else {
      oldTaxBeforeCess += (500000 - basicExemption) * 0.05
      if (oldTaxableIncome <= 1000000) {
        oldTaxBeforeCess += (oldTaxableIncome - 500000) * 0.20
      } else {
        oldTaxBeforeCess += 500000 * 0.20
        oldTaxBeforeCess += (oldTaxableIncome - 1000000) * 0.30
      }
    }
  }

  // Section 87A Rebate in Old Regime (Up to ₹12,500 if taxable income <= 5,00,000)
  if (oldTaxableIncome <= 500000) {
    oldTaxBeforeCess = 0
  }
  const oldCess = oldTaxBeforeCess * 0.04
  const oldTotalTax = Math.round(oldTaxBeforeCess + oldCess)

  const taxSavings = oldTotalTax - newTotalTax
  const recommendedRegime = newTotalTax <= oldTotalTax ? 'New Regime' : 'Old Regime'

  return {
    grossIncome: gross,
    newRegime: {
      taxableIncome: newTaxableIncome,
      stdDeduction: newStdDeduction,
      taxBeforeCess: newTaxBeforeCess,
      cess: newCess,
      totalTax: newTotalTax
    },
    oldRegime: {
      taxableIncome: oldTaxableIncome,
      totalDeductions: totalOldDeductions,
      taxBeforeCess: oldTaxBeforeCess,
      cess: oldCess,
      totalTax: oldTotalTax
    },
    taxSavings: Math.abs(taxSavings),
    recommendedRegime
  }
}
