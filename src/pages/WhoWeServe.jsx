import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ChevronDown, ArrowRight, AlertTriangle } from 'lucide-react'
import { PRIMARY_AUDIENCES, SECONDARY_AUDIENCES, ALL_AUDIENCES } from '../data/audienceData'
import { SERVICES } from '../data/servicesData'
import styles from './WhoWeServe.module.css'

export default function WhoWeServe() {
  const [activeId, setActiveId] = useState(PRIMARY_AUDIENCES[0].id)
  const [showMore, setShowMore] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)

  // Find active audience data
  const activeAudience = ALL_AUDIENCES.find(a => a.id === activeId) || PRIMARY_AUDIENCES[0]

  // Re-trigger CSS animation whenever active audience changes
  useEffect(() => {
    setAnimationKey(prev => prev + 1)
  }, [activeId])

  // Helper to map slugs to actual Service objects
  const mapServices = (slugs) => {
    if (!slugs) return []
    return slugs.map(slug => SERVICES.find(s => s.slug === slug)).filter(Boolean)
  }

  const primaryServices = mapServices(activeAudience.primaryServices)
  const secondaryServices = mapServices(activeAudience.secondaryServices)
  const totalServices = primaryServices.length + secondaryServices.length

  return (
    <div className={styles.pageWrapper}>
      <Helmet>
        <title>Who We Serve | Taxpex</title>
        <meta name="description" content="Discover how Taxpex helps Startups, Creators, SMEs and more with tailored financial and tax solutions." />
      </Helmet>

      <div className={`container`}>
        <div className={styles.header}>
          <h1 className={styles.title}>Financial systems for the way you actually work.</h1>
          <p className={styles.subtitle}>Select your business type to see the exact challenges we solve and the tools we recommend for you.</p>
        </div>

        <div className={styles.layoutGrid}>
          {/* Selector Sidebar (Desktop) & Chips (Mobile) */}
          <div>
            {/* Mobile Horizontal Chips */}
            <div className={styles.mobileChips}>
              {PRIMARY_AUDIENCES.map(aud => (
                <button
                  key={aud.id}
                  className={`${styles.mobileChip} ${activeId === aud.id ? styles.active : ''}`}
                  onClick={() => setActiveId(aud.id)}
                >
                  {aud.name}
                </button>
              ))}
              <select 
                className={`${styles.mobileChip} ${styles.mobileSelect}`}
                value={SECONDARY_AUDIENCES.some(a => a.id === activeId) ? activeId : ""}
                onChange={(e) => {
                  if(e.target.value) setActiveId(e.target.value)
                }}
              >
                <option value="" disabled>More Audiences...</option>
                {SECONDARY_AUDIENCES.map(aud => (
                  <option key={aud.id} value={aud.id}>{aud.name}</option>
                ))}
              </select>
            </div>

            {/* Desktop Sidebar */}
            <div className={styles.desktopSidebar}>
              <div className={styles.selectorSidebar}>
                <div className={styles.selectorTitle}>Primary Audiences</div>
                <div className={styles.audienceList}>
                  {PRIMARY_AUDIENCES.map(aud => (
                    <button
                      key={aud.id}
                      className={`${styles.audienceBtn} ${activeId === aud.id ? styles.active : ''}`}
                      onClick={() => setActiveId(aud.id)}
                    >
                      {aud.name}
                      {activeId === aud.id && <ArrowRight size={16} />}
                    </button>
                  ))}
                </div>

                <button 
                  className={styles.exploreMoreBtn}
                  onClick={() => setShowMore(!showMore)}
                >
                  Explore more <ChevronDown size={16} style={{ transform: showMore ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
                </button>

                {showMore && (
                  <div className={styles.dropdownList}>
                    {SECONDARY_AUDIENCES.map(aud => (
                      <button
                        key={aud.id}
                        className={`${styles.audienceBtn} ${activeId === aud.id ? styles.active : ''}`}
                        onClick={() => setActiveId(aud.id)}
                      >
                        {aud.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Dynamic Content Area */}
          <div className={styles.contentArea} key={animationKey}>
            {/* Stage 0: Scenario */}
            <div className={styles.stage0}>
              <div className={styles.summaryBadge}>
                Recommended for {activeAudience.name} &middot; {totalServices} services mapped
                {activeAudience.tools && activeAudience.tools.length > 0 && ` \u00B7 ${activeAudience.tools.length} tools`}
              </div>
              
              <h2 className={styles.scenarioTitle}>
                {activeAudience.scenario}
              </h2>
            </div>

            {/* Stage 1: Problems */}
            <div className={styles.stage1}>
              <div className={styles.sectionTitle}>Top Financial Challenges</div>
              <div className={styles.problemsList}>
                {activeAudience.problems.map((prob, idx) => (
                  <div key={idx} className={styles.problemItem}>
                    <AlertTriangle size={18} className={styles.problemIcon} />
                    <span>{prob}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stage 2: Taxpex Solutions */}
            <div className={styles.stage2}>
              <div className={styles.sectionTitle}>Recommended Services</div>
              
              <div className={styles.servicesGrid}>
                {primaryServices.map(service => (
                  <Link to={`/services/${service.slug}`} key={service.id} className={styles.primaryCard}>
                    <h4 className={styles.cardName}>{service.name}</h4>
                    <p className={styles.cardDesc}>{service.outcome}</p>
                    <ArrowRight className={styles.cardArrow} size={20} />
                  </Link>
                ))}
              </div>

              {secondaryServices.length > 0 && (
                <div className={styles.servicesGrid} style={{ marginTop: 'var(--spacing-4)' }}>
                  {secondaryServices.map(service => (
                    <Link to={`/services/${service.slug}`} key={service.id} className={styles.secondaryCard}>
                      <h4 className={styles.cardName}>{service.name}</h4>
                      <ArrowRight className={styles.cardArrow} size={16} />
                    </Link>
                  ))}
                </div>
              )}

              {/* Tools & Resources (Only render if they exist) */}
              {activeAudience.tools && activeAudience.tools.length > 0 && (
                <div style={{ marginTop: 'var(--spacing-8)' }}>
                  <div className={styles.sectionTitle}>Recommended Tools</div>
                  {/* Map tools here if any exist */}
                </div>
              )}

              {/* Action CTA */}
              {activeAudience.recommendedCTA && (
                <div className={styles.ctaBox} style={{ marginTop: 'var(--spacing-12)' }}>
                  <span className={styles.ctaText}>Ready to simplify your finances?</span>
                  <Link to={activeAudience.recommendedCTA.link} className={styles.ctaBtn}>
                    {activeAudience.recommendedCTA.text} <ArrowRight size={16} />
                  </Link>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
