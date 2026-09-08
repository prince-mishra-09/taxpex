import { useState } from 'react'
import { Rocket, Laptop, Video, ShoppingBag, Store, GraduationCap, Building2, ArrowRight } from 'lucide-react'
import AnimatedIllustration from './AnimatedIllustration'
import styles from './AudienceSelector.module.css'

const AUDIENCES = [
  {
    id: 'founder',
    label: 'Founder',
    icon: Rocket,
    title: 'The Startup Stack',
    desc: 'Focus on product-market fit. We\'ll handle your incorporation, cap table, bookkeeping, and investor reporting.',
    features: ['Company Incorporation', 'DPIIT Startup India Registration', 'ESOP Structuring', 'Virtual CFO'],
    img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'freelancer',
    label: 'Freelancer',
    icon: Laptop,
    title: 'The Solo Pro Stack',
    desc: 'Keep more of what you earn. Optimized tax filing under Section 44ADA and simple GST compliance for service exports.',
    features: ['ITR-4 Filing', 'LUT for Zero-rated Exports', 'TDS Advisory', 'Foreign Inward Remittance'],
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'creator',
    label: 'Creator',
    icon: Video,
    title: 'The Creator Stack',
    desc: 'Monetize without tax anxiety. Structuring brand deals, managing international payments, and saving taxes efficiently.',
    features: ['Brand Deal GST Invoicing', 'Advance Tax Planning', 'Expense Tracking', 'Ad Revenue Compliance'],
    img: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ecommerce',
    label: 'E-commerce',
    icon: ShoppingBag,
    title: 'The E-comm Stack',
    desc: 'Scale your D2C brand or Amazon business with automated reconciliation, multi-state GST, and inventory accounting.',
    features: ['E-commerce GST Return', 'Marketplace Reconciliation', 'TCS / TDS Management', 'Inventory Audits'],
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sme',
    label: 'SME',
    icon: Store,
    title: 'The Growth Stack',
    desc: 'End-to-end financial operations for growing businesses. Payroll, vendor payments, and monthly MIS.',
    features: ['Complete Bookkeeping', 'Payroll Processing', 'Vendor TDS Return', 'Working Capital Advisory'],
    img: 'https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
]

export default function AudienceSelector() {
  const [activeAudience, setActiveAudience] = useState(AUDIENCES[0])
  const [isAnimating, setIsAnimating] = useState(false)

  const handleAudienceChange = (audience) => {
    if (audience.id === activeAudience.id) return
    setIsAnimating(true)
    setTimeout(() => {
      setActiveAudience(audience)
      setIsAnimating(false)
    }, 250)
  }

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>Built for your kind of work</h2>
        <p className={styles.subtitle}>We understand that a creator's compliance needs are vastly different from a D2C brand's.</p>
        
        <div className={styles.tabsWrapper}>
          {AUDIENCES.map(aud => {
            const Icon = aud.icon
            return (
              <button
                key={aud.id}
                className={`${styles.tabBtn} ${activeAudience.id === aud.id ? styles.activeTab : ''}`}
                onClick={() => handleAudienceChange(aud)}
              >
                <Icon size={18} className={styles.tabIcon} />
                <span>{aud.label}</span>
              </button>
            )
          })}
        </div>

        <div className={`${styles.contentCard} ${isAnimating ? styles.fading : ''}`}>
          <div className={styles.contentLeft}>
            <div className={styles.pill}>{activeAudience.label}</div>
            <h3 className={styles.contentTitle}>{activeAudience.title}</h3>
            <p className={styles.contentDesc}>{activeAudience.desc}</p>
            
            <ul className={styles.featureList}>
              {activeAudience.features.map((feat, idx) => (
                <li key={idx} className={styles.featureItem}>
                  <div className={styles.checkIcon}></div>
                  {feat}
                </li>
              ))}
            </ul>
            
            <button className={styles.ctaBtn}>
              See solutions for {activeAudience.label} <ArrowRight size={16} />
            </button>
          </div>
          
          <div className={styles.contentRight}>
            <AnimatedIllustration type={activeAudience.id} />
          </div>
        </div>
        
      </div>
    </section>
  )
}
