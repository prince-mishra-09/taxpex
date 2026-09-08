import { Route } from 'lucide-react'
import styles from './ServiceModules.module.css'

export default function TimelineSteps({ timeline }) {
  if (!timeline || timeline.length === 0) return null

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>
        <Route className={styles.titleIcon} size={32} />
        How it works
      </h2>
      <div className={styles.timeline}>
        {timeline.map((step, idx) => (
          <div key={idx} className={styles.timelineStep}>
            <div className={styles.stepNumber}></div>
            <div className={styles.stepContent}>
              <h4 className={styles.stepTitle}>Step {idx + 1}: {step.title}</h4>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
