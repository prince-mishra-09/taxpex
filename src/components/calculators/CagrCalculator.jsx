import { useState, useMemo } from 'react'
import CalculatorLayout from './CalculatorLayout'
import styles from './Calculator.module.css'
import { calculateCagr } from '../../utils/calculators/cagr'

export default function CagrCalculator({ toolData }) {
  const [initialValue, setInitialValue] = useState('100000')
  const [finalValue, setFinalValue] = useState('250000')
  const [years, setYears] = useState('5')

  const result = useMemo(() => {
    return calculateCagr({ initialValue, finalValue, years })
  }, [initialValue, finalValue, years])

  const formatCurrency = (val) => {
    if (val === undefined || val === null || isNaN(val)) return '₹0'
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val)
  }

  const inputs = (
    <>
      <div className={styles.inputGroup}>
        <span className={styles.inputLabel}>Initial Investment Value</span>
        <div className={styles.amountInputWrapper}>
          <span className={styles.currencySymbol}>₹</span>
          <input 
            type="number" 
            className={styles.amountInput}
            value={initialValue}
            onChange={(e) => e.target.value.length <= 12 && setInitialValue(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <span className={styles.inputLabel}>Final Investment Value</span>
        <div className={styles.amountInputWrapper}>
          <span className={styles.currencySymbol}>₹</span>
          <input 
            type="number" 
            className={styles.amountInput}
            value={finalValue}
            onChange={(e) => e.target.value.length <= 12 && setFinalValue(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <span className={styles.inputLabel}>Duration (Years)</span>
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
      <div className={styles.resultTitle}>Compounded Annual Growth (CAGR)</div>
      <div className={styles.mainResult}>
        {result.cagrPercent}%
      </div>

      <div className={styles.breakdownList}>
        <div className={styles.breakdownRow}>
          <span>Initial Capital</span>
          <span>{formatCurrency(initialValue)}</span>
        </div>
        <div className={styles.breakdownRow}>
          <span>Final Value</span>
          <span>{formatCurrency(finalValue)}</span>
        </div>
        <div className={styles.breakdownRow}>
          <span>Total Absolute Gain</span>
          <span>+{formatCurrency(result.totalGain)}</span>
        </div>
        <div className={`${styles.breakdownRow} ${styles.highlight}`}>
          <span>Absolute Return %</span>
          <span>+{result.absoluteReturnPercent}%</span>
        </div>
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
      disclaimer="Compounded annual growth rate formula applied for multi-year investments."
      currentToolId={toolData.id}
    />
  )
}
