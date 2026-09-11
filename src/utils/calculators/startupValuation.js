/**
 * Startup Valuation Tool Logic
 */

export function calculateStartupValuation({ arr = 50000000, growthRate = 80, multiple = 6, sector = 'SaaS' }) {
  const annualRevenue = Math.max(0, parseFloat(arr) || 0)
  const growth = Math.max(0, parseFloat(growthRate) || 0)
  const mult = Math.max(1, parseFloat(multiple) || 5)

  const estimatedValuation = annualRevenue * mult
  const lowerRange = estimatedValuation * 0.8
  const upperRange = estimatedValuation * 1.25

  return {
    estimatedValuation: Math.round(estimatedValuation),
    lowerRange: Math.round(lowerRange),
    upperRange: Math.round(upperRange),
    multipleUsed: mult
  }
}
