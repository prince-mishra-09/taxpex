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
            <button className={styles.primaryBtn}>
              Get Started <ArrowRight size={18} />
            </button>
            <button className={styles.secondaryBtn}>
              Talk to a CA
            </button>
            <button className={styles.whatsappBtn}>
              <MessageCircle size={18} /> WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
