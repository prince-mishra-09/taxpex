import { CheckCircle2, MessageCircle, ShieldCheck, PlayCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './ServiceDetailHero.module.css'

export default function ServiceDetailHero({ service }) {
  return (
    <div className={styles.heroContent}>
      <div className={styles.categoryBadge}>{service.category}</div>
      
      {/* SEO H1 */}
      <h1 className={styles.headline}>{service.hero.headline}</h1>
      <p className={styles.subheadline}>{service.hero.subheadline}</p>
      
      {/* Trust Signals */}
      <div className={styles.trustSignals}>
        <div className={styles.signal}>
          <CheckCircle2 size={16} className={styles.signalIcon} />
          <span>CA Verified</span>
        </div>
        <div className={styles.signal}>
          <ShieldCheck size={16} className={styles.signalIcon} />
          <span>Bank-Grade Security</span>
        </div>
      </div>
      
      <div className={styles.ctaGroup}>
        <Link to="/contact" className={styles.primaryBtn}>
          Get Started
        </Link>
        <button className={styles.secondaryBtn}>
          <PlayCircle size={20} /> Watch Video
        </button>
      </div>

      {/* Enhanced What Happens Next */}
      {service.hero.whatHappensNext && (
        <div className={styles.nextStepContainer}>
          <span className={styles.nextStepTitle}>What happens next:</span>
          <div className={styles.nextStepFlow}>
            {service.hero.whatHappensNext.split('→').map((step, idx, arr) => {
              const cleanStep = step.replace(/^\d+\.\s*/, '').trim()
              return (
                <div key={idx} style={{ display: 'flex', alignItems: 'center' }}>
                  <div className={styles.stepPill}>
                    <span className={styles.stepNumber}>{idx + 1}</span>
                    {cleanStep}
                  </div>
                  {idx < arr.length - 1 && (
                    <span className={styles.stepArrow}>→</span>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Action CTAs (Mobile primary, desktop secondary to card) */}
      <div className={styles.mobileActions}>
        <button className={styles.primaryBtn} data-analytics-event="hero-cta-click">
          Get Started
        </button>
        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className={styles.waBtn} data-analytics-event="whatsapp-click">
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </div>
  )
}
