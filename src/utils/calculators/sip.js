/**
 * SIP Calculator Logic
 * Formula: M = P * ({[1 + i]^n - 1} / i) * (1 + i)
 */

export function calculateSip({ monthlyInvestment = 5000, expectedReturnRate = 12, years = 10 }) {
  const p = Math.max(0, parseFloat(monthlyInvestment) || 0)
  const annualRate = Math.max(0, parseFloat(expectedReturnRate) || 0)
  const i = annualRate / 12 / 100
  const n = Math.max(1, (parseInt(years) || 1) * 12)

  const investedAmount = p * n

  if (p === 0) {
    return { investedAmount: 0, estimatedReturns: 0, totalValue: 0 }
  }

  if (i === 0) {
    return { investedAmount, estimatedReturns: 0, totalValue: investedAmount }
  }

  const totalValue = p * ((Math.pow(1 + i, n) - 1) / i) * (1 + i)
  const estimatedReturns = totalValue - investedAmount

  return {
    investedAmount: Math.round(investedAmount),
    estimatedReturns: Math.round(estimatedReturns),
    totalValue: Math.round(totalValue)
  }
}
