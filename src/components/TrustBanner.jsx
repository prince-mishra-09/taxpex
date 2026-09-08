import { ShieldCheck, Star, MapPin, Tag, Clock, Building2 } from 'lucide-react'
import styles from './TrustBanner.module.css'

export default function TrustBanner() {
  return (
    <div className={styles.banner}>
      <div className={`container ${styles.container}`}>
        <div className={styles.item}>
          <ShieldCheck size={20} className={styles.icon} />
          <span>CA-led Operations</span>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.item}>
          <Building2 size={20} className={styles.icon} />
          <span>5,000+ Businesses</span>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.item}>
          <Star size={20} className={styles.icon} fill="currentColor" />
          <span>4.9★ Rating</span>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.item}>
          <MapPin size={20} className={styles.icon} />
          <span>Pan-India</span>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.item}>
          <Tag size={20} className={styles.icon} />
          <span>Transparent Pricing</span>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.item}>
          <Clock size={20} className={styles.icon} />
          <span>3–7 Day SLAs</span>
        </div>
      </div>
    </div>
  )
}
