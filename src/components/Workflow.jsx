import { Upload, FileCheck, Send, CheckCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import styles from './Workflow.module.css'

const STEPS = [
  {
    id: 1,
    title: 'Share Documents',
    desc: 'Securely upload your documents to our platform in one click.',
    icon: Upload
  },
  {
    id: 2,
    title: 'CA Review',
    desc: 'An assigned expert reviews and prepares your file for accuracy.',
    icon: FileCheck
  },
  {
    id: 3,
    title: 'Filing & Processing',
    desc: 'We handle the complex submission with the relevant government body.',
    icon: Send
  },
  {
    id: 4,
    title: 'Delivered',
    desc: 'Get your certificates and acknowledgements instantly on your dashboard.',
    icon: CheckCircle
  }
]

export default function Workflow() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let animationFrameId;
    let startTime = performance.now();
    const duration = 4000; // 4 seconds to fill the line
    const pause = 2000; // 2 seconds pause at the end before looping

    const animate = (time) => {
      const elapsed = time - startTime;
      const totalCycle = duration + pause;
      const cycleTime = elapsed % totalCycle;

      if (cycleTime < duration) {
        setProgress((cycleTime / duration) * 100);
      } else {
        setProgress(100); // Hold at 100% during the pause
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [])

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>How Taxpex Works</h2>
          <p className={styles.subtitle}>Zero physical visits. Zero paperwork. Total transparency.</p>
        </div>

        <div className={styles.workflowGrid}>
          {/* Continuous Progress Line */}
          <div className={styles.lineTrack}>
            <div 
              className={styles.lineProgress} 
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {STEPS.map((step, index) => {
            const Icon = step.icon
            // Calculate at what percentage this step should activate (0%, 33.3%, 66.6%, 100%)
            const stepThreshold = (index / (STEPS.length - 1)) * 100;
            // Activate exactly when the progress line reaches this step's threshold
            const isActive = progress >= stepThreshold;
            
            // Current card is the one that just got activated
            const nextThreshold = ((index + 1) / (STEPS.length - 1)) * 100;
            const isCurrent = progress >= stepThreshold && progress < nextThreshold;
            
            return (
              <div key={step.id} className={`${styles.stepCard} ${isActive ? styles.activeCard : ''} ${isCurrent ? styles.currentCard : ''}`}>
                <div className={styles.iconWrapper}>
                  <Icon size={24} className={styles.icon} />
                  <div className={styles.stepNumber}>{step.id}</div>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
