/**
 * EMI Calculator Logic
 * Formula: E = P * r * (1 + r)^n / ((1 + r)^n - 1)
 */

export function calculateEmi({ principal = 1000000, rate = 8.5, tenureYears = 5, tenureMonths = 0 }) {
  const p = Math.max(0, parseFloat(principal) || 0)
  const annualRate = Math.max(0, parseFloat(rate) || 0)
  const r = annualRate / 12 / 100
  const n = (parseInt(tenureYears) || 0) * 12 + (parseInt(tenureMonths) || 0)

  if (p === 0 || n === 0) {
    return { emi: 0, totalInterest: 0, totalPayment: 0 }
  }

  if (r === 0) {
    const emi = p / n
    return { emi: Math.round(emi), totalInterest: 0, totalPayment: p }
  }

  const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
  const totalPayment = emi * n
  const totalInterest = totalPayment - p

  return {
    emi: Math.round(emi),
    totalInterest: Math.round(totalInterest),
    totalPayment: Math.round(totalPayment),
    principal: p,
    tenureMonths: n
  }
}
