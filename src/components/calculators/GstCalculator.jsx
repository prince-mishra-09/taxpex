import { useState, useEffect, useMemo } from 'react'
import CalculatorLayout from './CalculatorLayout'
import styles from './Calculator.module.css'
import { calculateGst } from '../../utils/calculators/gst'

export default function GstCalculator({ toolData }) {
  const [amountStr, setAmountStr] = useState('10000')
  const [mode, setMode] = useState('add') // 'add' | 'remove'
  const [type, setType] = useState('intra') // 'intra' | 'inter'
  const [rate, setRate] = useState(18) // 5, 12, 18, 28
  const [isUpdating, setIsUpdating] = useState(false)

  // Parse amount strictly
  const amount = parseFloat(amountStr)
  
  // Calculate whenever dependencies change
  const result = useMemo(() => {
    return calculateGst({ amount: isNaN(amount) ? 0 : amount, rate, mode, type })
  }, [amount, rate, mode, type])

  // Trigger pulse animation on change
  useEffect(() => {
    setIsUpdating(true)
    const t = setTimeout(() => setIsUpdating(false), 200)
    return () => clearTimeout(t)
  }, [result.totalAmount])

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(val || 0)
  }

  // --- Input UI ---
  const inputs = (
    <>
      {/* Operation Mode */}
      <div className={styles.inputGroup}>
        <span className={styles.inputLabel}>Calculation Mode</span>
        <div className={styles.segmentedControl}>
          <button 
            className={styles.segmentBtn} 
            data-active={mode === 'add'} 
            onClick={() => setMode('add')}
          >
            Add GST
          </button>
          <button 
            className={styles.segmentBtn} 
            data-active={mode === 'remove'} 
            onClick={() => setMode('remove')}
          >
            Remove GST
          </button>
        </div>
      </div>

      {/* Transaction Type */}
      <div className={styles.inputGroup}>
        <span className={styles.inputLabel}>Transaction Type</span>
        <div className={styles.segmentedControl}>
          <button 
            className={styles.segmentBtn} 
            data-active={type === 'intra'} 
            onClick={() => setType('intra')}
          >
            Intra-state (Same State)
          </button>
          <button 
            className={styles.segmentBtn} 
            data-active={type === 'inter'} 
            onClick={() => setType('inter')}
          >
            Inter-state (Other State)
          </button>
        </div>
      </div>

      {/* Amount Input */}
      <div className={styles.inputGroup}>
        <span className={styles.inputLabel}>
          {mode === 'add' ? 'Base Amount (before GST)' : 'Total Amount (including GST)'}
        </span>
        <div className={styles.amountInputWrapper}>
          <span className={styles.currencySymbol}>₹</span>
          <input 
            type="number"
            className={`${styles.amountInput} ${result.isValid === false && amountStr !== '' ? styles.error : ''}`}
            value={amountStr}
            onChange={(e) => setAmountStr(e.target.value)}
            placeholder="0.00"
          />
        </div>
        {result.isValid === false && amountStr !== '' && (
          <div className={styles.errorText}>Please enter a valid positive number.</div>
        )}
      </div>

      {/* Rate Selection */}
      <div className={styles.inputGroup}>
        <span className={styles.inputLabel}>GST Rate</span>
        <div className={styles.chipGrid}>
          {[5, 12, 18, 28].map(r => (
            <button 
              key={r}
              className={styles.rateChip}
              data-active={rate === r}
              onClick={() => setRate(r)}
            >
              {r}%
            </button>
          ))}
        </div>
      </div>
    </>
  )

  // --- Results UI ---
  const results = (
    <>
      <div className={styles.resultTitle}>
        {mode === 'add' ? 'Final Amount (Incl. GST)' : 'Base Amount (Excl. GST)'}
      </div>
      
      <div className={`${styles.mainResult} ${isUpdating ? styles.updating : ''}`}>
        {mode === 'add' ? formatCurrency(result.totalAmount) : formatCurrency(result.baseAmount)}
      </div>

      <div className={styles.breakdownList}>
        <div className={styles.breakdownRow}>
          <span>{mode === 'add' ? 'Base Amount' : 'Total Amount'}</span>
          <span>{mode === 'add' ? formatCurrency(result.baseAmount) : formatCurrency(result.totalAmount)}</span>
        </div>
        
        {type === 'intra' ? (
          <>
            <div className={styles.breakdownRow}>
              <span>CGST ({rate / 2}%)</span>
              <span>{formatCurrency(result.breakdown.cgst)}</span>
            </div>
            <div className={styles.breakdownRow}>
              <span>SGST ({rate / 2}%)</span>
              <span>{formatCurrency(result.breakdown.sgst)}</span>
            </div>
          </>
        ) : (
          <div className={styles.breakdownRow}>
            <span>IGST ({rate}%)</span>
            <span>{formatCurrency(result.breakdown.igst)}</span>
          </div>
        )}
        
        <div className={`${styles.breakdownRow} ${styles.highlight}`}>
          <span>Total GST Component</span>
          <span>{formatCurrency(result.gstAmount)}</span>
        </div>
      </div>

      <div className={styles.formulaBox}>
        <strong>How is this calculated?</strong><br/>
        {mode === 'add' 
          ? <><code>GST = (Base × Rate) / 100</code></>
          : <><code>GST = (Total × Rate) / (100 + Rate)</code><br/><code>Base = Total - GST</code></>
        }
      </div>
    </>
  )

  // Mobile Sticky Summary Config
  const mobileSummary = {
    label: mode === 'add' ? 'Final Amount:' : 'Base Amount:',
    value: mode === 'add' ? formatCurrency(result.totalAmount) : formatCurrency(result.baseAmount)
  }

  return (
    <CalculatorLayout 
      title={toolData.name}
      benefit={toolData.benefit}
      inputs={inputs}
      results={results}
      serviceRecommendation={toolData.recommendService}
      disclaimer="This calculator provides estimates for informational purposes only. Exact tax liabilities should be confirmed with your Chartered Accountant."
    />
  )
}
