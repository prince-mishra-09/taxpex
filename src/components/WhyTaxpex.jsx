import { ShieldCheck, Zap, LineChart, HeadphonesIcon, FileCode, CheckCircle2 } from 'lucide-react'
import styles from './WhyTaxpex.module.css'

const STATEMENTS = [
  {
    icon: ShieldCheck,
    title: 'CA-Verified Accuracy',
    desc: 'Every filing is reviewed by a qualified Chartered Accountant before submission, eliminating errors and notices.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast Turnarounds',
    desc: 'Company incorporation in 7 days, GST in 3 days. We move at the speed of your business.'
  },
  {
    icon: LineChart,
    title: 'Proactive Tax Planning',
    desc: 'We don\'t just file taxes; we find legal deductions and optimize your structure to save you money.'
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Account Manager',
    desc: 'No bots or support tickets. Get direct WhatsApp and phone access to your assigned CA/CS.'
  },
  {
    icon: FileCode,
    title: 'One Unified Dashboard',
    desc: 'Your financials, compliances, and documents are centralized securely in the Taxpex App.'
  },
  {
    icon: CheckCircle2,
    title: 'No Hidden Fees',
    desc: '100% transparent pricing. You know exactly what you pay before we begin any service.'
  }
]

export default function WhyTaxpex() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Why top founders choose Taxpex</h2>
          <p className={styles.subtitle}>We combine elite CA expertise with cutting-edge software to make compliance invisible.</p>
        </div>

        <div className={styles.grid}>
          {STATEMENTS.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <Icon size={24} className={styles.icon} />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
