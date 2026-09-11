import { useState, useMemo } from 'react'
import CalculatorLayout from './CalculatorLayout'
import styles from './Calculator.module.css'
import { hsnSacDatabase } from '../../utils/calculators/hsnSacData'

export default function HsnSacFinder({ toolData }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterType, setFilterType] = useState('All') // 'All' | 'HSN' | 'SAC'

  const filteredResults = useMemo(() => {
    const query = searchQuery.toLowerCase().trim()
    return hsnSacDatabase.filter(item => {
      const matchType = filterType === 'All' || item.type === filterType
      const matchQuery = !query || 
        item.code.toLowerCase().includes(query) || 
        item.desc.toLowerCase().includes(query) || 
        item.category.toLowerCase().includes(query)
      return matchType && matchQuery
    })
  }, [searchQuery, filterType])

  const inputs = (
    <>
      <div className={styles.inputGroup}>
        <span className={styles.inputLabel}>Search HSN / SAC Code or Commodity</span>
        <input 
          type="text" 
          className={styles.amountInput}
          style={{ paddingLeft: '16px', fontSize: '1.1rem' }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="e.g. 998311, Accounting, Software, Laptops..."
        />
      </div>

      <div className={styles.inputGroup}>
        <span className={styles.inputLabel}>Filter Code Type</span>
        <div className={styles.segmentedControl}>
          <button className={styles.segmentBtn} data-active={filterType === 'All'} onClick={() => setFilterType('All')}>
            All Codes
          </button>
          <button className={styles.segmentBtn} data-active={filterType === 'HSN'} onClick={() => setFilterType('HSN')}>
            HSN (Goods)
          </button>
          <button className={styles.segmentBtn} data-active={filterType === 'SAC'} onClick={() => setFilterType('SAC')}>
            SAC (Services)
          </button>
        </div>
      </div>
    </>
  )

  const results = (
    <>
      <div className={styles.resultTitle}>Found {filteredResults.length} GST Codes</div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px', maxHeight: '280px', overflowY: 'auto' }}>
        {filteredResults.map(item => (
          <div key={item.code} style={{ background: 'rgba(255,255,255,0.06)', padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <span style={{ fontWeight: '700', fontSize: '1.1rem', color: '#38bdf8' }}>
                {item.type} {item.code}
              </span>
              <span style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '600' }}>
                {item.gstRate}% GST
              </span>
            </div>
            <div style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: '1.3' }}>
              {item.desc}
            </div>
          </div>
        ))}
        {filteredResults.length === 0 && (
          <div style={{ padding: '20px', textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>
            No matching HSN/SAC codes found. Try another search term.
          </div>
        )}
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
      disclaimer="Standard HSN and SAC codes as specified by GST Council of India."
      currentToolId={toolData.id}
    />
  )
}
