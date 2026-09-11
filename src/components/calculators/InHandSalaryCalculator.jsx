import { useState, useMemo } from 'react'
import CalculatorLayout from './CalculatorLayout'
import styles from './Calculator.module.css'
import { calculateInHandSalary } from '../../utils/calculators/inHandSalary'

export default function InHandSalaryCalculator({ toolData }) {
  const [ctcAnnual, setCtcAnnual] = useState('1200000')
  const [basicPercent, setBasicPercent] = useState('50')
  const [bonusAnnual, setBonusAnnual] = useState('0')

  const result = useMemo(() => {
    return calculateInHandSalary({ ctcAnnual, basicPercent, bonusAnnual })
  }, [ctcAnnual, basicPercent, bonusAnnual])

  const formatCurrency = (val) => {
    if (val === undefined || val === null || isNaN(val)) return '₹0'
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val)
  }

  const inputs = (
    <>
      <div className={styles.inputGroup}>
        <span className={styles.inputLabel}>Annual CTC (Cost to Company)</span>
        <div className={styles.amountInputWrapper}>
          <span className={styles.currencySymbol}>₹</span>
          <input 
            type="number" 
            className={styles.amountInput}
            value={ctcAnnual}
            onChange={(e) => e.target.value.length <= 12 && setCtcAnnual(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <span className={styles.inputLabel}>Basic Salary (% of CTC)</span>
        <div className={styles.amountInputWrapper}>
          <span className={styles.currencySymbol}>%</span>
          <input 
            type="number" 
            className={styles.amountInput}
            value={basicPercent}
            onChange={(e) => e.target.value.length <= 3 && setBasicPercent(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <span className={styles.inputLabel}>Annual Performance Bonus</span>
        <div className={styles.amountInputWrapper}>
          <span className={styles.currencySymbol}>₹</span>
          <input 
            type="number" 
            className={styles.amountInput}
            value={bonusAnnual}
            onChange={(e) => e.target.value.length <= 10 && setBonusAnnual(e.target.value)}
          />
        </div>
      </div>
    </>
  )

  const results = (
    <>
      <div className={styles.resultTitle}>Monthly In-Hand Salary</div>
      <div className={styles.mainResult}>
        {formatCurrency(result.inHandMonthly)}
      </div>

      <div className={styles.breakdownList}>
        <div className={styles.breakdownRow}>
          <span>Gross Monthly CTC</span>
          <span>{formatCurrency(result.ctcMonthly)}</span>
        </div>
        <div className={styles.breakdownRow}>
          <span>Employee PF (Monthly)</span>
          <span>-{formatCurrency(result.employeePfMonthly)}</span>
        </div>
        <div className={styles.breakdownRow}>
          <span>Professional Tax (Monthly)</span>
          <span>-{formatCurrency(result.pTaxMonthly)}</span>
        </div>
        <div className={styles.breakdownRow}>
          <span>Est. TDS Tax (Monthly)</span>
          <span>-{formatCurrency(result.tdsMonthly)}</span>
        </div>
        <div className={`${styles.breakdownRow} ${styles.highlight}`}>
          <span>Annual In-Hand Pay</span>
          <span>{formatCurrency(result.inHandAnnual)}</span>
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
      disclaimer="Estimated net take-home salary based on standard Indian payroll rules."
      currentToolId={toolData.id}
    />
  )
}
