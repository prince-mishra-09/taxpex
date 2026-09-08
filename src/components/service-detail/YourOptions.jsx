import { Scale, Check, X } from 'lucide-react'
import styles from './ServiceModules.module.css'

export default function YourOptions({ options }) {
  if (!options) return null

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>
        <Scale className={styles.titleIcon} size={32} />
        Your options
      </h2>
      <div className={styles.documentGrid}> {/* reusing grid from documentcards */}
        
        {options.taxpex && (
          <div className={styles.documentCard} style={{ borderColor: 'var(--theme-accent)' }}>
            <div>
              <h4 className={styles.docName} style={{ color: 'var(--theme-accent)' }}>With Taxpex</h4>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '12px' }}>
                {options.taxpex.map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '8px', marginBottom: '8px', fontSize: '0.9375rem' }}>
                    <Check size={16} color="var(--theme-accent)" style={{marginTop: '2px', flexShrink: 0}} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {(options.diy || options.inHouse) && (
          <div className={styles.documentCard}>
            <div>
              <h4 className={styles.docName}>{options.diy ? "DIY / Traditional CA" : "In-House"}</h4>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '12px' }}>
                {(options.diy || options.inHouse).map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '8px', marginBottom: '8px', fontSize: '0.9375rem', color: 'var(--c-muted-text)' }}>
                    <X size={16} color="var(--c-warning-amber)" style={{marginTop: '2px', flexShrink: 0}} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
