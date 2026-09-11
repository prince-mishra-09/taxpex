import { useState, useMemo } from 'react'
import CalculatorLayout from './CalculatorLayout'
import styles from './Calculator.module.css'
import { calculateIncomeTax } from '../../utils/calculators/incomeTax'

export default function IncomeTaxCalculator({ toolData }) {
  const [annualIncome, setAnnualIncome] = useState('1200000')
  const [ageGroup, setAgeGroup] = useState('below60')
  const [deductions80C, setDeductions80C] = useState('150000')
  const [deductions80D, setDeductions80D] = useState('25000')
  const [hraExemption, setHraExemption] = useState('100000')

  const result = useMemo(() => {
    return calculateIncomeTax({
      annualIncome,
      ageGroup,
      deductions80C,
      deductions80D,
      hraExemption,
      isSalaried: true
    })
  }, [annualIncome, ageGroup, deductions80C, deductions80D, hraExemption])

  const formatCurrency = (val) => {
    if (val === undefined || val === null || isNaN(val)) return '₹0'
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val)
  }

  const inputs = (
    <>
      <div className={styles.inputGroup}>
        <span className={styles.inputLabel}>Annual Gross Salary / Income</span>
        <div className={styles.amountInputWrapper}>
          <span className={styles.currencySymbol}>₹</span>
          <input 
            type="number" 
            className={styles.amountInput}
            value={annualIncome}
            onChange={(e) => e.target.value.length <= 14 && setAnnualIncome(e.target.value)}
            placeholder="e.g. 1200000"
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <span className={styles.inputLabel}>Age Group</span>
        <div className={styles.segmentedControl}>
          <button className={styles.segmentBtn} data-active={ageGroup === 'below60'} onClick={() => setAgeGroup('below60')}>
            Below 60
          </button>
          <button className={styles.segmentBtn} data-active={ageGroup === 'senior'} onClick={() => setAgeGroup('senior')}>
            60 - 80 Yrs
          </button>
          <button className={styles.segmentBtn} data-active={ageGroup === 'superSenior'} onClick={() => setAgeGroup('superSenior')}>
            80+ Yrs
          </button>
        </div>
      </div>

      <div className={styles.inputGroup}>
        <span className={styles.inputLabel}>Section 80C Deductions (Max ₹1.5L)</span>
        <div className={styles.amountInputWrapper}>
          <span className={styles.currencySymbol}>₹</span>
          <input 
            type="number" 
            className={styles.amountInput}
            value={deductions80C}
            onChange={(e) => e.target.value.length <= 10 && setDeductions80C(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <span className={styles.inputLabel}>Section 80D Health Insurance</span>
        <div className={styles.amountInputWrapper}>
          <span className={styles.currencySymbol}>₹</span>
          <input 
            type="number" 
            className={styles.amountInput}
            value={deductions80D}
            onChange={(e) => e.target.value.length <= 10 && setDeductions80D(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <span className={styles.inputLabel}>HRA Exemption Claimed</span>
        <div className={styles.amountInputWrapper}>
          <span className={styles.currencySymbol}>₹</span>
          <input 
            type="number" 
            className={styles.amountInput}
            value={hraExemption}
            onChange={(e) => e.target.value.length <= 10 && setHraExemption(e.target.value)}
          />
        </div>
      </div>
    </>
  )

  const results = (
    <>
      <div className={styles.resultTitle}>Recommended Choice</div>
      <div className={styles.mainResult} style={{ color: '#38bdf8' }}>
        {result.recommendedRegime}
      </div>

      <div className={styles.breakdownList}>
        <div className={styles.breakdownRow}>
          <span>New Regime Tax</span>
          <span>{formatCurrency(result.newRegime.totalTax)}</span>
        </div>
        <div className={styles.breakdownRow}>
          <span>Old Regime Tax</span>
          <span>{formatCurrency(result.oldRegime.totalTax)}</span>
        </div>
        <div className={`${styles.breakdownRow} ${styles.highlight}`}>
          <span>Tax Difference</span>
          <span>{formatCurrency(result.taxSavings)}</span>
        </div>
      </div>

      <div className={styles.formulaBox}>
        <strong>Tax Regime Summary</strong><br/>
        New Regime standard deduction ₹75,000 applied automatically.
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
      disclaimer="Income tax estimates based on Union Budget 2024 slabs. Confirm exact tax filing with your CA."
      currentToolId={toolData.id}
    />
  )
}
