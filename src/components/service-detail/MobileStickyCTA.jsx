import { MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './ServiceModules.module.css'

export default function MobileStickyCTA() {
  return (
    <div className={styles.mobileStickyBar}>
      <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className={styles.stickyWa} data-analytics-event="whatsapp-click-mobile">
        <MessageCircle size={20} />
      </a>
      <Link to="/contact" className={styles.stickyPrimary} data-analytics-event="hero-cta-click-mobile">
        Get Started
      </Link>
    </div>
  )
}
