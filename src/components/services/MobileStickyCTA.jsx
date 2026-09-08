import { MessageCircle, Phone } from 'lucide-react'
import styles from './MobileStickyCTA.module.css'

export default function MobileStickyCTA() {
  return (
    <div className={styles.stickyContainer}>
      <div className={styles.ctaWrapper}>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
          <MessageCircle size={20} />
          <span>WhatsApp</span>
        </a>
        <button className={styles.talkBtn}>
          <Phone size={20} />
          <span>Talk to a CA</span>
        </button>
      </div>
    </div>
  )
}
