/**
 * HRA Exemption Calculator Logic
 * HRA Exemption is minimum of:
 * 1. Actual HRA received
 * 2. 50% of Basic (Metro) or 40% of Basic (Non-Metro)
 * 3. Rent paid minus 10% of Basic Salary
 */

export function calculateHra({ basicSalaryAnnual = 600000, hraReceivedAnnual = 300000, rentPaidAnnual = 240000, isMetro = true }) {
  const basic = Math.max(0, parseFloat(basicSalaryAnnual) || 0)
  const hraRec = Math.max(0, parseFloat(hraReceivedAnnual) || 0)
  const rent = Math.max(0, parseFloat(rentPaidAnnual) || 0)

  const limit1 = hraRec
  const limit2 = isMetro ? basic * 0.50 : basic * 0.40
  const limit3 = Math.max(0, rent - basic * 0.10)

  const exemptHra = Math.min(limit1, limit2, limit3)
  const taxableHra = Math.max(0, hraRec - exemptHra)

  return {
    exemptHra: Math.round(exemptHra),
    taxableHra: Math.round(taxableHra),
    hraReceived: Math.round(hraRec),
    limit1: Math.round(limit1),
    limit2: Math.round(limit2),
    limit3: Math.round(limit3)
  }
}
