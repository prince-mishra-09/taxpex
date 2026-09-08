import styles from './IndustriesMarquee.module.css'

const INDUSTRIES = [
  'SaaS & Software', 'D2C Brands', 'Creator Economy', 'Fintech', 
  'Healthtech', 'Edtech', 'Real Estate', 'Logistics & Supply Chain', 
  'Consulting Firms', 'Manufacturing', 'Retail', 'Web3 & Crypto'
]

export default function IndustriesMarquee() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <p className={styles.label}>TRUSTED BY MODERN BUSINESSES ACROSS INDIA</p>
      </div>
      
      <div className={styles.marqueeContainer}>
        <div className={styles.marquee}>
          {INDUSTRIES.map((industry, idx) => (
            <div key={`ind1-${idx}`} className={styles.industryItem}>
              <span className={styles.dot}></span>
              {industry}
            </div>
          ))}
          {/* Duplicate for infinite scroll */}
          {INDUSTRIES.map((industry, idx) => (
            <div key={`ind2-${idx}`} className={styles.industryItem}>
              <span className={styles.dot}></span>
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
