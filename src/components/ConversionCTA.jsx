import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'
import styles from './ConversionCTA.module.css'

export default function ConversionCTA() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>Stop managing compliance.<br/>Start running your business.</h2>
          <p className={styles.subtitle}>Join 5,000+ modern Indian businesses that trust Taxpex for their financial operations.</p>
          
          <div className={styles.btnGroup}>
            <Link to="/contact" className={styles.primaryBtn}>
              Get Started <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className={styles.secondaryBtn}>
              Talk to a CA
            </Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className={styles.whatsappBtn}>
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
