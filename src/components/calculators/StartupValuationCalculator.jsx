import { useState, useMemo } from 'react'
import CalculatorLayout from './CalculatorLayout'
import styles from './Calculator.module.css'
import { calculateStartupValuation } from '../../utils/calculators/startupValuation'

export default function StartupValuationCalculator({ toolData }) {
  const [arr, setArr] = useState('50000000')
  const [growthRate, setGrowthRate] = useState('80')
  const [multiple, setMultiple] = useState('6')

  const result = useMemo(() => {
    return calculateStartupValuation({ arr, growthRate, multiple })
  }, [arr, growthRate, multiple])

  const formatCurrency = (val) => {
    if (val === undefined || val === null || isNaN(val)) return '₹0'
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val)
  }

  const inputs = (
    <>
      <div className={styles.inputGroup}>
        <span className={styles.inputLabel}>Annual Recurring Revenue (ARR)</span>
        <div className={styles.amountInputWrapper}>
          <span className={styles.currencySymbol}>₹</span>
          <input 
            type="number" 
            className={styles.amountInput}
            value={arr}
            onChange={(e) => e.target.value.length <= 13 && setArr(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <span className={styles.inputLabel}>YoY Revenue Growth Rate (%)</span>
        <div className={styles.amountInputWrapper}>
          <span className={styles.currencySymbol}>%</span>
          <input 
            type="number" 
            className={styles.amountInput}
            value={growthRate}
            onChange={(e) => e.target.value.length <= 4 && setGrowthRate(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <span className={styles.inputLabel}>Revenue Valuation Multiple (x)</span>
        <div className={styles.amountInputWrapper}>
          <span className={styles.currencySymbol}>x</span>
          <input 
            type="number" 
            step="0.5"
            className={styles.amountInput}
            value={multiple}
            onChange={(e) => e.target.value.length <= 4 && setMultiple(e.target.value)}
          />
        </div>
      </div>
    </>
  )

  const results = (
    <>
      <div className={styles.resultTitle}>Estimated Enterprise Valuation</div>
      <div className={styles.mainResult}>
        {formatCurrency(result.estimatedValuation)}
      </div>

      <div className={styles.breakdownList}>
        <div className={styles.breakdownRow}>
          <span>Conservative Estimate (0.8x)</span>
          <span>{formatCurrency(result.lowerRange)}</span>
        </div>
        <div className={styles.breakdownRow}>
          <span>Aggressive Estimate (1.25x)</span>
          <span>{formatCurrency(result.upperRange)}</span>
        </div>
        <div className={`${styles.breakdownRow} ${styles.highlight}`}>
          <span>ARR Multiple Used</span>
          <span>{result.multipleUsed}x Revenue</span>
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
      disclaimer="Valuation estimate based on ARR multiples. Connect with our Virtual CFOs for formal valuation reports."
      currentToolId={toolData.id}
    />
  )
}
