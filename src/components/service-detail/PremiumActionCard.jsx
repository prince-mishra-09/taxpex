import { Clock, ShieldCheck, ArrowRight } from 'lucide-react'
import styles from './PremiumActionCard.module.css'

export default function PremiumActionCard({ service }) {
  if (!service) return null

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.actionCard}>
        <div className={styles.cardHeader}>
          <span className={styles.priceLabel}>Starting from</span>
          <h2 className={styles.priceValue}>{service.startingPriceLabel}</h2>
          <span className={styles.govFee}>+ Gov. Fee: [Pending]</span>
        </div>

        <div className={styles.cardBody}>
          <div className={styles.turnaround}>
            <Clock size={16} />
            <span>Typical Turnaround: {service.timelineLabel}</span>
          </div>

          <div className={styles.inclusions}>
            <h4>What's included:</h4>
            <ul>
              <li>Dedicated Account Manager</li>
              <li>Document pre-verification</li>
              <li>Drafting & Filing</li>
            </ul>
          </div>
        </div>

        <div className={styles.cardFooter}>
          <button className={styles.cardCta} data-analytics-event="card-cta-click">
            Start Process <ArrowRight size={16} />
          </button>
          <p className={styles.secureText}>
            <ShieldCheck size={14} /> Safe & Secure Checkout
          </p>
        </div>
      </div>
    </div>
  )
}
