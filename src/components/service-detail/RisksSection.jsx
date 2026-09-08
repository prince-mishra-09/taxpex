import { AlertTriangle } from 'lucide-react'
import styles from './ServiceModules.module.css'

export default function RisksSection({ risks }) {
  if (!risks || risks.length === 0) return null

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>
        <AlertTriangle className={styles.titleIcon} size={32} color="var(--c-warning-amber)" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)' }} />
        Common Mistakes & Risks
      </h2>
      <div className={styles.deliverablesList}>
        {risks.map((risk, idx) => (
          <div key={idx} className={styles.deliverableItem} style={{ borderLeftColor: 'var(--c-warning-amber)' }}>
            <div>
              <h4 style={{ fontWeight: 600, color: 'var(--c-primary-ink)', marginBottom: '4px' }}>{risk.title}</h4>
              <p style={{ color: 'var(--c-muted-text)', fontSize: '0.9375rem', lineHeight: 1.5 }}>{risk.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
