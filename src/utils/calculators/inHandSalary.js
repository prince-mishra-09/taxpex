/**
 * In-Hand Salary Calculator Logic
 */

export function calculateInHandSalary({ ctcAnnual = 1200000, basicPercent = 50, bonusAnnual = 0, professionalTaxMonthly = 200 }) {
  const ctc = Math.max(0, parseFloat(ctcAnnual) || 0)
  const bonus = Math.max(0, parseFloat(bonusAnnual) || 0)
  const basicPct = Math.min(100, Math.max(10, parseFloat(basicPercent) || 50))
  const pTax = Math.max(0, parseFloat(professionalTaxMonthly) || 200)

  const ctcMonthly = ctc / 12
  const fixedCtcAnnual = Math.max(0, ctc - bonus)
  const basicAnnual = (fixedCtcAnnual * basicPct) / 100
  const basicMonthly = basicAnnual / 12

  // Employee PF (12% of Basic capped or uncapped)
  const employeePfMonthly = Math.min(basicMonthly * 0.12, 1800)
  const employerPfMonthly = employeePfMonthly

  // Estimated TDS monthly under New Regime (approximate)
  const taxableAnnual = Math.max(0, ctc - 75000)
  let annualTds = 0
  if (taxableAnnual > 700000) {
    if (taxableAnnual <= 1000000) {
      annualTds = 20000 + (taxableAnnual - 700000) * 0.10
    } else if (taxableAnnual <= 1200000) {
      annualTds = 50000 + (taxableAnnual - 1000000) * 0.15
    } else {
      annualTds = 80000 + (taxableAnnual - 1200000) * 0.20
    }
    annualTds = annualTds * 1.04
  }
  const tdsMonthly = annualTds / 12

  // Deductions from Gross
  const totalDeductionsMonthly = employeePfMonthly + pTax + tdsMonthly
  const grossMonthly = ctcMonthly - employerPfMonthly
  const inHandMonthly = Math.max(0, grossMonthly - totalDeductionsMonthly)

  return {
    ctcMonthly: Math.round(ctcMonthly),
    basicMonthly: Math.round(basicMonthly),
    grossMonthly: Math.round(grossMonthly),
    employeePfMonthly: Math.round(employeePfMonthly),
    pTaxMonthly: Math.round(pTax),
    tdsMonthly: Math.round(tdsMonthly),
    totalDeductionsMonthly: Math.round(totalDeductionsMonthly),
    inHandMonthly: Math.round(inHandMonthly),
    inHandAnnual: Math.round(inHandMonthly * 12)
  }
}
