import { useState } from 'react'
import { HelpCircle, ChevronDown } from 'lucide-react'
import styles from './ServiceModules.module.css'

export default function FAQAccordion({ faqs }) {
  const [openIdx, setOpenIdx] = useState(0)

  if (!faqs || faqs.length === 0) return null

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>
        <HelpCircle className={styles.titleIcon} size={32} />
        Frequently Asked Questions
      </h2>
      <div className={styles.deliverablesList}>
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx
          return (
            <div 
              key={idx} 
              className={styles.deliverableItem} 
              style={{ 
                flexDirection: 'column', 
                cursor: 'pointer',
                borderLeftColor: isOpen ? 'var(--theme-accent)' : 'transparent',
                backgroundColor: isOpen ? 'var(--theme-bg)' : 'transparent',
                border: isOpen ? 'none' : '1px solid var(--c-off-white)'
              }}
              onClick={() => setOpenIdx(isOpen ? -1 : idx)}
              data-analytics-event="faq-expand"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                <h4 style={{ fontWeight: 600, color: 'var(--c-primary-ink)', fontSize: '1.0625rem' }}>{faq.q}</h4>
                <ChevronDown 
                  size={20} 
                  style={{ 
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', 
                    transition: 'transform 0.2s ease',
                    color: 'var(--c-muted-text)'
                  }} 
                />
              </div>
              {isOpen && (
                <p style={{ marginTop: '12px', color: 'var(--c-muted-text)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  {faq.a}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
