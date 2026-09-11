import { useState, useMemo } from 'react'
import CalculatorLayout from './CalculatorLayout'
import styles from './Calculator.module.css'
import { calculateSip } from '../../utils/calculators/sip'

export default function SipCalculator({ toolData }) {
  const [monthlyInvestment, setMonthlyInvestment] = useState('10000')
  const [expectedReturnRate, setExpectedReturnRate] = useState('12')
  const [years, setYears] = useState('10')

  const result = useMemo(() => {
    return calculateSip({ monthlyInvestment, expectedReturnRate, years })
  }, [monthlyInvestment, expectedReturnRate, years])

  const formatCurrency = (val) => {
    if (val === undefined || val === null || isNaN(val)) return '₹0'
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val)
  }

  const inputs = (
    <>
      <div className={styles.inputGroup}>
        <span className={styles.inputLabel}>Monthly SIP Investment</span>
        <div className={styles.amountInputWrapper}>
          <span className={styles.currencySymbol}>₹</span>
          <input 
            type="number" 
            className={styles.amountInput}
            value={monthlyInvestment}
            onChange={(e) => e.target.value.length <= 10 && setMonthlyInvestment(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <span className={styles.inputLabel}>Expected Annual Return (% p.a.)</span>
        <div className={styles.amountInputWrapper}>
          <span className={styles.currencySymbol}>%</span>
          <input 
            type="number" 
            step="0.5"
            className={styles.amountInput}
            value={expectedReturnRate}
            onChange={(e) => e.target.value.length <= 4 && setExpectedReturnRate(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <span className={styles.inputLabel}>Investment Period (Years)</span>
        <div className={styles.amountInputWrapper}>
          <span className={styles.currencySymbol}>Yrs</span>
          <input 
            type="number" 
            className={styles.amountInput}
            value={years}
            onChange={(e) => e.target.value.length <= 3 && setYears(e.target.value)}
          />
        </div>
      </div>
    </>
  )

  const results = (
    <>
      <div className={styles.resultTitle}>Total Expected Maturity Value</div>
      <div className={styles.mainResult}>
        {formatCurrency(result.totalValue)}
      </div>

      <div className={styles.breakdownList}>
        <div className={styles.breakdownRow}>
          <span>Invested Amount</span>
          <span>{formatCurrency(result.investedAmount)}</span>
        </div>
        <div className={styles.breakdownRow}>
          <span>Est. Returns</span>
          <span>{formatCurrency(result.estimatedReturns)}</span>
        </div>
        <div className={`${styles.breakdownRow} ${styles.highlight}`}>
          <span>Wealth Gain</span>
          <span>+{formatCurrency(result.estimatedReturns)}</span>
        </div>
      </div>

      <div className={styles.formulaBox}>
        <code>M = P × ({`{[1 + i]^n - 1}`} / i) × (1 + i)</code>
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
      disclaimer="Mutual fund investments are subject to market risks."
      currentToolId={toolData.id}
    />
  )
}
