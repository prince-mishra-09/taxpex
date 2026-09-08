import styles from './AnimatedIllustration.module.css'

export default function AnimatedIllustration({ type }) {
  
  if (type === 'founder') {
    return (
      <div className={styles.illustrationWrapper}>
        <svg viewBox="0 0 200 200" className={styles.svg}>
          <circle cx="100" cy="100" r="80" fill="var(--c-off-white)" />
          {/* Rocket Body */}
          <path d="M100 40 C120 70 120 120 100 140 C80 120 80 70 100 40 Z" fill="var(--c-primary-blue)" className={styles.float} />
          {/* Window */}
          <circle cx="100" cy="80" r="10" fill="var(--c-pure-white)" className={styles.float} />
          {/* Wings */}
          <path d="M85 110 L60 140 L88 130 Z" fill="var(--c-electric-blue)" className={styles.float} />
          <path d="M115 110 L140 140 L112 130 Z" fill="var(--c-electric-blue)" className={styles.float} />
          {/* Fire */}
          <path d="M90 140 Q100 180 110 140 Z" fill="var(--c-warning-amber)" className={styles.pulse} />
        </svg>
      </div>
    )
  }

  if (type === 'freelancer') {
    return (
      <div className={styles.illustrationWrapper}>
        <svg viewBox="0 0 200 200" className={styles.svg}>
          <circle cx="100" cy="100" r="80" fill="var(--c-off-white)" />
          {/* Laptop Base */}
          <rect x="40" y="130" width="120" height="10" rx="5" fill="var(--c-deep-navy)" className={styles.laptopBase} />
          {/* Laptop Screen */}
          <rect x="50" y="70" width="100" height="60" rx="5" fill="var(--c-primary-blue)" className={styles.laptopScreen} />
          <rect x="55" y="75" width="90" height="50" rx="2" fill="var(--c-pure-white)" className={styles.laptopScreen} />
          {/* Code Lines */}
          <rect x="60" y="85" width="40" height="4" rx="2" fill="var(--c-electric-blue)" className={styles.codeLine1} />
          <rect x="60" y="95" width="60" height="4" rx="2" fill="var(--c-electric-blue)" className={styles.codeLine2} />
          <rect x="60" y="105" width="30" height="4" rx="2" fill="var(--c-mint)" className={styles.codeLine3} />
          {/* Coffee Cup */}
          <path d="M160 120 L160 135 C160 140 155 140 155 140 L140 140 L140 120 Z" fill="var(--c-warning-amber)" className={styles.floatSlow} />
        </svg>
      </div>
    )
  }

  if (type === 'creator') {
    return (
      <div className={styles.illustrationWrapper}>
        <svg viewBox="0 0 200 200" className={styles.svg}>
          <circle cx="100" cy="100" r="80" fill="var(--c-off-white)" />
          {/* Video Player */}
          <rect x="40" y="60" width="120" height="80" rx="10" fill="var(--c-primary-blue)" className={styles.videoPlayer} />
          {/* Play Button */}
          <polygon points="90,85 90,115 115,100" fill="var(--c-pure-white)" className={styles.playBtn} />
          {/* Floating Hearts */}
          <path d="M140 50 A10 10 0 0 0 150 40 A10 10 0 0 0 160 50 Q160 60 150 70 Q140 60 140 50 Z" fill="#ef4444" className={styles.heart1} />
          <path d="M30 70 A8 8 0 0 0 38 62 A8 8 0 0 0 46 70 Q46 78 38 86 Q30 78 30 70 Z" fill="#ef4444" className={styles.heart2} />
        </svg>
      </div>
    )
  }

  if (type === 'ecommerce') {
    return (
      <div className={styles.illustrationWrapper}>
        <svg viewBox="0 0 200 200" className={styles.svg}>
          <circle cx="100" cy="100" r="80" fill="var(--c-off-white)" />
          {/* Box Base */}
          <path d="M100 150 L50 120 L50 70 L100 100 Z" fill="var(--c-electric-blue)" className={styles.boxBase} />
          <path d="M100 150 L150 120 L150 70 L100 100 Z" fill="var(--c-primary-blue)" className={styles.boxBase} />
          <path d="M100 50 L50 70 L100 100 L150 70 Z" fill="var(--c-pure-white)" stroke="var(--c-primary-blue)" strokeWidth="2" className={styles.boxTop} />
          {/* Receipt / Invoice popping out */}
          <rect x="85" y="40" width="30" height="40" fill="var(--c-pure-white)" stroke="var(--c-border)" className={styles.receipt} />
          <line x1="90" y1="50" x2="110" y2="50" stroke="var(--c-mint)" strokeWidth="2" className={styles.receipt} />
          <line x1="90" y1="60" x2="105" y2="60" stroke="var(--c-mint)" strokeWidth="2" className={styles.receipt} />
        </svg>
      </div>
    )
  }

  // default 'sme'
  return (
    <div className={styles.illustrationWrapper}>
      <svg viewBox="0 0 200 200" className={styles.svg}>
        <circle cx="100" cy="100" r="80" fill="var(--c-off-white)" />
        {/* Storefront */}
        <rect x="50" y="100" width="100" height="50" fill="var(--c-deep-navy)" className={styles.storeBase} />
        <path d="M40 100 L160 100 L150 70 L50 70 Z" fill="var(--c-primary-blue)" className={styles.storeAwning} />
        <rect x="60" y="110" width="30" height="40" fill="var(--c-pure-white)" className={styles.storeDoor} />
        <rect x="110" y="110" width="30" height="20" fill="var(--c-electric-blue)" className={styles.storeWindow} />
        {/* Growth Chart */}
        <path d="M140 40 L160 20 L180 50" fill="none" stroke="var(--c-mint)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className={styles.growArrow} />
        <circle cx="180" cy="50" r="4" fill="var(--c-mint)" className={styles.growArrow} />
      </svg>
    </div>
  )
}
