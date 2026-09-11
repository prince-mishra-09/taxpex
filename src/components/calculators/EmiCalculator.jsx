import { useState, useMemo } from 'react'
import CalculatorLayout from './CalculatorLayout'
import styles from './Calculator.module.css'
import { calculateEmi } from '../../utils/calculators/emi'

export default function EmiCalculator({ toolData }) {
  const [principal, setPrincipal] = useState('2500000')
  const [rate, setRate] = useState('8.5')
  const [tenureYears, setTenureYears] = useState('20')

  const result = useMemo(() => {
    return calculateEmi({ principal, rate, tenureYears })
  }, [principal, rate, tenureYears])

  const formatCurrency = (val) => {
    if (val === undefined || val === null || isNaN(val)) return '₹0'
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val)
  }

  const inputs = (
    <>
      <div className={styles.inputGroup}>
        <span className={styles.inputLabel}>Loan Amount</span>
        <div className={styles.amountInputWrapper}>
          <span className={styles.currencySymbol}>₹</span>
          <input 
            type="number" 
            className={styles.amountInput}
            value={principal}
            onChange={(e) => e.target.value.length <= 12 && setPrincipal(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <span className={styles.inputLabel}>Interest Rate (% p.a.)</span>
        <div className={styles.amountInputWrapper}>
          <span className={styles.currencySymbol}>%</span>
          <input 
            type="number" 
            step="0.1"
            className={styles.amountInput}
            value={rate}
            onChange={(e) => e.target.value.length <= 5 && setRate(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <span className={styles.inputLabel}>Loan Tenure (Years)</span>
        <div className={styles.amountInputWrapper}>
          <span className={styles.currencySymbol}>Yrs</span>
          <input 
            type="number" 
            className={styles.amountInput}
            value={tenureYears}
            onChange={(e) => e.target.value.length <= 3 && setTenureYears(e.target.value)}
          />
        </div>
      </div>
    </>
  )

  const results = (
    <>
      <div className={styles.resultTitle}>Monthly EMI</div>
      <div className={styles.mainResult}>
        {formatCurrency(result.emi)}
      </div>

      <div className={styles.breakdownList}>
        <div className={styles.breakdownRow}>
          <span>Principal Amount</span>
          <span>{formatCurrency(result.principal)}</span>
        </div>
        <div className={styles.breakdownRow}>
          <span>Total Interest Payable</span>
          <span>{formatCurrency(result.totalInterest)}</span>
        </div>
        <div className={`${styles.breakdownRow} ${styles.highlight}`}>
          <span>Total Payment (Principal + Int)</span>
          <span>{formatCurrency(result.totalPayment)}</span>
        </div>
      </div>

      <div className={styles.formulaBox}>
        <code>EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)</code>
      </div>
    </>
  )

  return (
    <CalculatorLayout 
      title={toolData.name}
      benefit={toolData.benefit}
      inputs={inputs}
      results={results}
      serviceRecommendation={toolData.recommendService}
      disclaimer="EMI calculations are indicative. Actual bank terms may vary."
      currentToolId={toolData.id}
    />
  )
}
