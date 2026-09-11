/**
 * CAGR Calculator Logic
 * Formula: CAGR = (Final Value / Initial Value)^(1 / n) - 1
 */

export function calculateCagr({ initialValue = 100000, finalValue = 200000, years = 5 }) {
  const init = Math.max(0, parseFloat(initialValue) || 0)
  const fin = Math.max(0, parseFloat(finalValue) || 0)
  const n = Math.max(0.1, parseFloat(years) || 1)

  if (init === 0 || fin === 0) {
    return { cagrPercent: 0, totalGain: 0, absoluteReturnPercent: 0 }
  }

  const cagr = (Math.pow(fin / init, 1 / n) - 1) * 100
  const totalGain = fin - init
  const absoluteReturn = ((fin - init) / init) * 100

  return {
    cagrPercent: parseFloat(cagr.toFixed(2)),
    totalGain: Math.round(totalGain),
    absoluteReturnPercent: parseFloat(absoluteReturn.toFixed(2))
  }
}
