import { useState, useMemo } from 'react'
import CalculatorLayout from './CalculatorLayout'
import styles from './Calculator.module.css'
import { calculateHra } from '../../utils/calculators/hra'

export default function HraCalculator({ toolData }) {
  const [basicSalaryAnnual, setBasicSalaryAnnual] = useState('600000')
  const [hraReceivedAnnual, setHraReceivedAnnual] = useState('300000')
  const [rentPaidAnnual, setRentPaidAnnual] = useState('240000')
  const [isMetro, setIsMetro] = useState(true)

  const result = useMemo(() => {
    return calculateHra({ basicSalaryAnnual, hraReceivedAnnual, rentPaidAnnual, isMetro })
  }, [basicSalaryAnnual, hraReceivedAnnual, rentPaidAnnual, isMetro])

  const formatCurrency = (val) => {
    if (val === undefined || val === null || isNaN(val)) return '₹0'
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val)
  }

  const inputs = (
    <>
      <div className={styles.inputGroup}>
        <span className={styles.inputLabel}>Basic Salary (Annual)</span>
        <div className={styles.amountInputWrapper}>
          <span className={styles.currencySymbol}>₹</span>
          <input 
            type="number" 
            className={styles.amountInput}
            value={basicSalaryAnnual}
            onChange={(e) => e.target.value.length <= 12 && setBasicSalaryAnnual(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <span className={styles.inputLabel}>HRA Received (Annual)</span>
        <div className={styles.amountInputWrapper}>
          <span className={styles.currencySymbol}>₹</span>
          <input 
            type="number" 
            className={styles.amountInput}
            value={hraReceivedAnnual}
            onChange={(e) => e.target.value.length <= 12 && setHraReceivedAnnual(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <span className={styles.inputLabel}>Total Rent Paid (Annual)</span>
        <div className={styles.amountInputWrapper}>
          <span className={styles.currencySymbol}>₹</span>
          <input 
            type="number" 
            className={styles.amountInput}
            value={rentPaidAnnual}
            onChange={(e) => e.target.value.length <= 12 && setRentPaidAnnual(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <span className={styles.inputLabel}>City Type</span>
        <div className={styles.segmentedControl}>
          <button className={styles.segmentBtn} data-active={isMetro} onClick={() => setIsMetro(true)}>
            Metro (Delhi, Mumbai, Kol, Chn)
          </button>
          <button className={styles.segmentBtn} data-active={!isMetro} onClick={() => setIsMetro(false)}>
            Non-Metro
          </button>
        </div>
      </div>
    </>
  )

  const results = (
    <>
      <div className={styles.resultTitle}>Exempted HRA Amount</div>
      <div className={styles.mainResult} style={{ color: '#38bdf8' }}>
        {formatCurrency(result.exemptHra)}
      </div>

      <div className={styles.breakdownList}>
        <div className={styles.breakdownRow}>
          <span>Taxable HRA Amount</span>
          <span>{formatCurrency(result.taxableHra)}</span>
        </div>
        <div className={styles.breakdownRow}>
          <span>Actual HRA Received</span>
          <span>{formatCurrency(result.hraReceived)}</span>
        </div>
        <div className={styles.breakdownRow}>
          <span>Rent Paid - 10% Basic</span>
          <span>{formatCurrency(result.limit3)}</span>
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
      disclaimer="HRA exemption rules under Section 10(13A) of Income Tax Act."
      currentToolId={toolData.id}
    />
  )
}
