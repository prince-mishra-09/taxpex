import { PackageCheck, CheckCircle2 } from 'lucide-react'
import styles from './ServiceModules.module.css'

export default function DeliverablesChecklist({ deliverables }) {
  if (!deliverables || deliverables.length === 0) return null

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>
        <PackageCheck className={styles.titleIcon} size={32} />
        What you get
      </h2>
      <div className={styles.deliverablesList}>
        {deliverables.map((item, idx) => (
          <div key={idx} className={styles.deliverableItem}>
            <CheckCircle2 color="var(--theme-accent)" size={24} style={{flexShrink: 0}} />
            <span className={styles.deliverableText}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
