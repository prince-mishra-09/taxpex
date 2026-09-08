import { ArrowRight, Clock, Users, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './ServiceCard.module.css'

export default function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.slug}`} className={styles.card}>
      {/* Hidden by default, reveals on hover */}
      <div className={styles.categoryBadge}>{service.category}</div>
      
      <div className={styles.header}>
        <h3 className={styles.title}>{service.name}</h3>
        {service.caVerifiedLabel && (
          <div className={styles.verifiedBadge}>
            <ShieldCheck size={14} className={styles.verifiedIcon} />
            {service.caVerifiedLabel}
          </div>
        )}
      </div>

      <p className={styles.outcome}>{service.outcome}</p>

      <div className={styles.metadata}>
        <div className={styles.metaRow}>
          <span className={styles.metaLabel}>Starting from</span>
          <span className={styles.metaValueHighlight}>{service.startingPriceLabel}</span>
        </div>
        <div className={styles.metaRow}>
          <Clock size={14} className={styles.metaIcon} />
          <span className={styles.metaLabel}>Typical timeline:</span>
          <span className={styles.metaValue}>{service.timelineLabel}</span>
        </div>
        <div className={styles.metaRow}>
          <Users size={14} className={styles.metaIcon} />
          <span className={styles.metaLabel}>Best for:</span>
          <span className={styles.metaValue}>{service.bestFor.join(', ')}</span>
        </div>
      </div>

      <div className={styles.footer}>
        <span className={styles.learnMore}>Learn more</span>
        <div className={styles.ctaWrapper}>
          <div className={styles.ctaCircle}>
            <ArrowRight size={18} />
          </div>
        </div>
      </div>
    </Link>
  )
}
