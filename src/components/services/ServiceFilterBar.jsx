import { Search, Filter, X } from 'lucide-react'
import { useState } from 'react'
import { CATEGORIES, AUDIENCES, PRICE_RANGES, URGENCY_RANGES } from '../../data/servicesData'
import styles from './ServiceFilterBar.module.css'

export default function ServiceFilterBar({ searchParams, setSearchParams, onCategorySelect }) {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

  const currentCategory = searchParams.get('category') || 'All'
  const currentQuery = searchParams.get('q') || ''
  const currentAudience = searchParams.get('audience') || 'All'
  const currentPrice = searchParams.get('price') || 'all'
  const currentUrgency = searchParams.get('urgency') || 'all'

  const updateParam = (key, value) => {
    const newParams = new URLSearchParams(searchParams)
    if (value === 'All' || value === 'all' || value === '') {
      newParams.delete(key)
    } else {
      newParams.set(key, value)
    }
    setSearchParams(newParams)
  }

  const handleCategoryClick = (cat) => {
    updateParam('category', cat)
    if (onCategorySelect) onCategorySelect(cat)
  }

  return (
    <>
      <div className={styles.stickyWrapper}>
        <div className={`container ${styles.container}`}>
          <div className={styles.topRow}>
            {/* Search Input */}
            <div className={styles.searchWrapper}>
              <Search className={styles.searchIcon} size={20} />
              <input 
                type="text" 
                className={styles.searchInput}
                placeholder="Search services, e.g. 'GSTIN' or 'Payroll'"
                value={currentQuery}
                onChange={(e) => updateParam('q', e.target.value)}
              />
              {currentQuery && (
                <button className={styles.clearBtn} onClick={() => updateParam('q', '')}>
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Mobile Filter Toggle */}
            <button className={styles.mobileFilterToggle} onClick={() => setIsMobileFilterOpen(true)}>
              <Filter size={20} />
              <span>Filters</span>
            </button>
          </div>

          {/* Desktop Categories & Filters */}
          <div className={styles.desktopFilters}>
            <div className={styles.categoryPills}>
              {CATEGORIES.slice(0, 6).map(cat => (
                <button 
                  key={cat} 
                  className={`${styles.pill} ${currentCategory === cat ? styles.activePill : ''}`}
                  onClick={() => handleCategoryClick(cat)}
                >
                  {cat}
                </button>
              ))}
              <select 
                className={styles.selectBox} 
                value={CATEGORIES.slice(6).includes(currentCategory) ? currentCategory : ''}
                onChange={(e) => handleCategoryClick(e.target.value)}
              >
                <option value="" disabled>More Categories</option>
                {CATEGORIES.slice(6).map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className={styles.advancedFilters}>
              <select className={styles.selectBox} value={currentAudience} onChange={(e) => updateParam('audience', e.target.value)}>
                <option value="All" disabled>Best For</option>
                {AUDIENCES.map(aud => <option key={aud} value={aud}>{aud}</option>)}
              </select>

              <select className={styles.selectBox} value={currentPrice} onChange={(e) => updateParam('price', e.target.value)}>
                <option value="all" disabled>Price Range</option>
                {PRICE_RANGES.map(p => <option key={p.id} value={p.id}>{p.label}</option>)}
              </select>

              <select className={styles.selectBox} value={currentUrgency} onChange={(e) => updateParam('urgency', e.target.value)}>
                <option value="all" disabled>Timeline</option>
                {URGENCY_RANGES.map(u => <option key={u.id} value={u.id}>{u.label}</option>)}
              </select>
            </div>
          </div>

          {/* Mobile Horizontal Categories */}
          <div className={styles.mobileCategories}>
            {CATEGORIES.map(cat => (
              <button 
                key={cat} 
                className={`${styles.pill} ${currentCategory === cat ? styles.activePill : ''}`}
                onClick={() => handleCategoryClick(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isMobileFilterOpen && (
        <div className={styles.mobileDrawerOverlay} onClick={() => setIsMobileFilterOpen(false)}>
          <div className={styles.mobileDrawer} onClick={e => e.stopPropagation()}>
            <div className={styles.drawerHeader}>
              <h3>Filters</h3>
              <button onClick={() => setIsMobileFilterOpen(false)} className={styles.closeDrawerBtn}><X size={24} /></button>
            </div>
            
            <div className={styles.drawerContent}>
              <div className={styles.filterGroup}>
                <label>Best For</label>
                <select className={styles.selectBoxFull} value={currentAudience} onChange={(e) => updateParam('audience', e.target.value)}>
                  {AUDIENCES.map(aud => <option key={aud} value={aud}>{aud}</option>)}
                </select>
              </div>

              <div className={styles.filterGroup}>
                <label>Price Range</label>
                <select className={styles.selectBoxFull} value={currentPrice} onChange={(e) => updateParam('price', e.target.value)}>
                  {PRICE_RANGES.map(p => <option key={p.id} value={p.id}>{p.label}</option>)}
                </select>
              </div>

              <div className={styles.filterGroup}>
                <label>Timeline</label>
                <select className={styles.selectBoxFull} value={currentUrgency} onChange={(e) => updateParam('urgency', e.target.value)}>
                  {URGENCY_RANGES.map(u => <option key={u.id} value={u.id}>{u.label}</option>)}
                </select>
              </div>

              <button className={styles.applyBtn} onClick={() => setIsMobileFilterOpen(false)}>
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
