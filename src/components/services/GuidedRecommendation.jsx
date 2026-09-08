import { useState } from 'react'
import { ArrowRight, Lightbulb, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './GuidedRecommendation.module.css'

const SITUATIONS = [
  {
    id: 'hired-employee',
    label: 'I just hired my first employee',
    recommendations: ['payroll-processing'],
    desc: 'You need to set up payroll, generate payslips, and comply with PF/ESI regulations.'
  },
  {
    id: 'tax-notice',
    label: 'I received a tax notice',
    recommendations: ['tax-notice-reply'],
    desc: 'Don\'t panic. Our experts will review the notice and draft a legal response.'
  },
  {
    id: 'startup-funding',
    label: 'I am raising startup funding',
    recommendations: ['pvt-ltd-inc', 'startup-india', 'virtual-cfo'],
    desc: 'Investors require a Private Limited structure, DPIIT recognition for tax benefits, and clean financials.'
  },
  {
    id: 'cross-threshold',
    label: 'My turnover crossed ₹20 Lakhs',
    recommendations: ['gst-reg', 'gst-filing'],
    desc: 'You are now legally required to register for GST and file monthly returns.'
  }
]

export default function GuidedRecommendation({ servicesData }) {
  const [activeId, setActiveId] = useState(null)

  const activeSituation = SITUATIONS.find(s => s.id === activeId)

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <Lightbulb className={styles.icon} size={28} />
          <h2 className={styles.title}>Not sure what you need?</h2>
          <p className={styles.subtitle}>Select your current situation and we'll recommend the exact services you need.</p>
        </div>

        <div className={styles.layout}>
          <div className={styles.situationsList}>
            {SITUATIONS.map(sit => (
              <button 
                key={sit.id}
                className={`${styles.situationBtn} ${activeId === sit.id ? styles.activeBtn : ''}`}
                onClick={() => setActiveId(activeId === sit.id ? null : sit.id)}
              >
                {sit.label}
              </button>
            ))}
          </div>

          <div className={styles.recommendationPanel}>
            {!activeSituation ? (
              <div className={styles.emptyState}>
                Select a situation on the left to see our recommendations.
              </div>
            ) : (
              <div className={styles.activeState}>
                <p className={styles.recDesc}>{activeSituation.desc}</p>
                <div className={styles.recommendedServices}>
                  {activeSituation.recommendations.map(recId => {
                    const service = servicesData.find(s => s.id === recId)
                    if (!service) return null
                    return (
                      <Link to={`/services/${service.slug}`} key={service.id} className={styles.recCard}>
                        <CheckCircle2 size={18} className={styles.checkIcon} />
                        <div>
                          <h4 className={styles.recTitle}>{service.name}</h4>
                          <span className={styles.recPrice}>Starting from {service.startingPriceLabel}</span>
                        </div>
                        <ArrowRight size={18} className={styles.arrowIcon} />
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
