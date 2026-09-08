import { useState, useEffect, useMemo, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { useSearchParams, Link } from 'react-router-dom'
import { Search, Clock, ArrowRight, Activity, Frown } from 'lucide-react'
import { toolsData, categories } from '../data/toolsData'
import styles from './Tools.module.css'

export default function Tools() {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchInputRef = useRef(null)

  // URL State Sync
  const currentSearch = searchParams.get('search') || ''
  const currentCategory = searchParams.get('category') || 'All'

  // Handlers
  const handleSearchChange = (e) => {
    const val = e.target.value
    setSearchParams(prev => {
      if (val) prev.set('search', val)
      else prev.delete('search')
      return prev
    })
  }

  const handleCategoryChange = (cat) => {
    setSearchParams(prev => {
      if (cat !== 'All') prev.set('category', cat)
      else prev.delete('category')
      return prev
    })
  }

  // Filtering Logic
  const filteredTools = useMemo(() => {
    return toolsData.filter(tool => {
      // Category Match
      const matchesCategory = currentCategory === 'All' || tool.category === currentCategory
      
      // Search Match
      const searchLower = currentSearch.toLowerCase()
      const matchesSearch = !currentSearch || 
        tool.name.toLowerCase().includes(searchLower) ||
        tool.benefit.toLowerCase().includes(searchLower) ||
        tool.category.toLowerCase().includes(searchLower) ||
        tool.tags.some(tag => tag.toLowerCase().includes(searchLower))

      return matchesCategory && matchesSearch
    })
  }, [currentCategory, currentSearch])

  // A11y: Auto-focus search on load if not on mobile
  useEffect(() => {
    if (window.innerWidth > 768 && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [])

  return (
    <div className={styles.pageWrapper}>
      <Helmet>
        <title>Taxpex Tools | Calculate and Estimate Before You Act</title>
        <meta name="description" content="Know your numbers before you make the move. Use our premium financial utilities for GST, Income Tax, Salary, and Business valuation." />
      </Helmet>

      {/* Hero & Search */}
      <section className={styles.utilityHero}>
        <div className="container">
          <h1 className={styles.heroTitle}>Know your numbers before you make the move.</h1>
          <p className={styles.heroSubtitle}>Before you ask a CA, use our calculators and finders to get instant clarity.</p>

          <div className={styles.searchContainer}>
            <div className={styles.searchInputWrapper}>
              <Search className={styles.searchIcon} size={28} />
              <input 
                ref={searchInputRef}
                type="text" 
                className={styles.searchInput}
                placeholder="What do you want to calculate?"
                value={currentSearch}
                onChange={handleSearchChange}
                aria-label="Search tools and calculators"
              />
            </div>
            
            {/* Category Filter Chips */}
            <div className={styles.categoryFilterWrapper} role="tablist" aria-label="Tool Categories">
              {categories.map(cat => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={currentCategory === cat}
                  className={`${styles.categoryChip} ${currentCategory === cat ? styles.categoryChipActive : ''}`}
                  onClick={() => handleCategoryChange(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className={styles.toolsLayout}>
        <div className="container">
          
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {currentSearch ? 'Search Results' : (currentCategory === 'All' ? 'Popular Tools' : `${currentCategory} Tools`)}
            </h2>
            <div className={styles.resultCount} aria-live="polite">
              {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'}
            </div>
          </div>

          {filteredTools.length > 0 ? (
            <div className={styles.toolsGrid}>
              {filteredTools.map(tool => (
                <Link 
                  to={`/tools/${tool.slug}`} 
                  key={tool.id} 
                  className={styles.toolCard}
                  aria-label={`${tool.name} - ${tool.benefit}`}
                >
                  <div className={styles.cardHeader}>
                    <span className={styles.categoryLabel}>{tool.category}</span>
                    {tool.status === 'coming-soon' && (
                      <span className={`${styles.statusBadge} ${styles.statusSoon}`}>Coming Soon</span>
                    )}
                  </div>
                  
                  <h3 className={styles.toolName}>{tool.name}</h3>
                  <p className={styles.toolBenefit}>{tool.benefit}</p>
                  
                  <div className={styles.cardFooter}>
                    <div className={styles.timeToResult}>
                      <Clock size={16} />
                      {tool.timeToResult}
                    </div>
                    <div className={styles.cardAction}>
                      {tool.cta} <ArrowRight size={16} />
                    </div>
                  </div>

                  {/* Subtle popular viz */}
                  {tool.isPopular && (
                    <svg className={styles.popularViz} viewBox="0 0 100 50" preserveAspectRatio="none">
                      <path d="M0,50 L20,30 L40,40 L60,10 L80,20 L100,0 L100,50 Z" fill="currentColor" />
                    </svg>
                  )}
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <Frown size={48} className={styles.emptyIcon} />
              <h3 className={styles.emptyTitle}>No tool matched that search.</h3>
              <p className={styles.emptyText}>Try searching for a different term like "GST" or "Salary".</p>
              <Link to="/contact" className={styles.expertCta} style={{ marginTop: '16px' }}>
                Talk to a CA <ArrowRight size={18} />
              </Link>
            </div>
          )}

          {/* Expert Help Conversion Module */}
          <div className={styles.expertModule}>
            <h2 className={styles.expertTitle}>Need expert help analyzing your numbers?</h2>
            <p className={styles.expertText}>Our calculators give you the math. Our Chartered Accountants give you the strategy. Let us handle the complexity for you.</p>
            <Link to="/contact" className={styles.expertCta}>
              Book a Consultation <ArrowRight size={20} />
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}
