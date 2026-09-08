import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, AlertCircle, Clock, TrendingUp, ShieldCheck } from 'lucide-react'
import styles from './Hero.module.css'

const INTENTS = [
  {
    id: 'start',
    label: 'Start a Business',
    title: 'Launch your business with confidence',
    desc: 'Get your company registered, licenses sorted, and bank accounts opened in days, not weeks.',
    services: ['Private Limited', 'LLP', 'Proprietorship', 'Startup India'],
    cta: 'Register Your Business',
    metrics: {
      score: 98,
      status: 'Ready to Register',
      revenue: '₹0',
      deadline: 'None',
      ca: 'Pending Assignment',
      chart: [10, 20, 30, 40, 50]
    }
  },
  {
    id: 'taxes',
    label: 'File My Taxes',
    title: 'Maximize your returns, minimize your stress',
    desc: 'Expert CA-assisted tax filing for individuals, freelancers, and businesses. Never miss a deduction.',
    services: ['ITR-1 to ITR-7', 'Tax Planning', 'TDS Return', 'Capital Gains'],
    cta: 'File Taxes Now',
    metrics: {
      score: 85,
      status: 'Filing Due',
      revenue: '₹12.4L',
      deadline: 'July 31',
      ca: 'Ankit Sharma, CA',
      chart: [40, 30, 60, 45, 80]
    }
  },
  {
    id: 'gst',
    label: 'Manage GST',
    title: 'Automated, error-free GST compliance',
    desc: 'End-to-end GST registration, monthly filing, and reconciliation handled by top-tier professionals.',
    services: ['GST Registration', 'GSTR-1 & 3B', 'LUT Filing', 'E-Way Bills'],
    cta: 'Get GST Compliant',
    metrics: {
      score: 100,
      status: 'Filed (GSTR-3B)',
      revenue: '₹4.2L (This Month)',
      deadline: '20th of Month',
      ca: 'Priya Desai, CA',
      chart: [30, 45, 60, 50, 75]
    }
  },
  {
    id: 'compliance',
    label: 'Stay Compliant',
    title: 'Your corporate secretarial co-pilot',
    desc: 'ROC filings, board minutes, and annual compliance managed seamlessly on one platform.',
    services: ['Annual Filing', 'Director KYC', 'Share Transfer', 'PF/ESI'],
    cta: 'Audit My Compliance',
    metrics: {
      score: 92,
      status: 'Good Standing',
      revenue: 'N/A',
      deadline: 'Sep 30 (AOC-4)',
      ca: 'Vikram Singh, CS',
      chart: [90, 92, 95, 95, 92]
    }
  },
  {
    id: 'notice',
    label: 'I Received a Tax Notice',
    title: 'Expert representation for tax notices',
    desc: 'Don\'t panic. Our senior tax experts will analyze the notice and draft a precise, legal response.',
    services: ['Income Tax Scrutiny', 'GST Notice', 'TDS Default', 'Appeal Filing'],
    cta: 'Upload Notice',
    metrics: {
      score: 45,
      status: 'Action Required',
      revenue: 'Disputed',
      deadline: '15 Days Left',
      ca: 'Senior Tax Counsel',
      chart: [20, 20, 20, 20, 20]
    }
  }
]

export default function Hero() {
  const [activeIntent, setActiveIntent] = useState(INTENTS[0])
  const [isAnimating, setIsAnimating] = useState(false)
  const [chartData, setChartData] = useState(INTENTS[0].metrics.chart)

  const handleIntentChange = (intent) => {
    if (intent.id === activeIntent.id) return
    setIsAnimating(true)
    setTimeout(() => {
      setActiveIntent(intent)
      setChartData(intent.metrics.chart)
      setIsAnimating(false)
    }, 250)
  }

  // Simulate live data changes
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(currentData => 
        currentData.map(val => {
          // Adjust value randomly between -15 and +15, keeping it between 10 and 95
          const change = Math.floor(Math.random() * 31) - 15
          return Math.max(10, Math.min(95, val + change))
        })
      )
    }, 1500)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.leftCol}>
          <h1 className={styles.heading}>What do you need help with?</h1>
          
          <div className={styles.intentSelector}>
            {INTENTS.map((intent) => (
              <button 
                key={intent.id}
                className={`${styles.intentBtn} ${activeIntent.id === intent.id ? styles.activeBtn : ''}`}
                onClick={() => handleIntentChange(intent)}
              >
                {intent.label}
              </button>
            ))}
          </div>

          <div className={`${styles.dynamicContent} ${isAnimating ? styles.fading : ''}`}>
            <h2 className={styles.dynamicTitle}>{activeIntent.title}</h2>
            <p className={styles.dynamicDesc}>{activeIntent.desc}</p>
            
            <div className={styles.servicesGrid}>
              {activeIntent.services.map((service, idx) => (
                <div key={idx} className={styles.servicePill}>
                  <ArrowRight size={14} className={styles.serviceIcon} />
                  {service}
                </div>
              ))}
            </div>

            <div className={styles.ctaGroup}>
              <Link to="/contact" className={styles.primaryCta}>
                {activeIntent.cta} <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className={styles.secondaryCta}>
                Talk to a CA
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.rightCol}>
          <div className={styles.dashboardMockup}>
            <div className={styles.mockupHeader}>
              <div className={styles.dots}>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
              </div>
              <div className={styles.mockupTitle}>TAXPEX Command Center</div>
            </div>
            
            <div className={`${styles.mockupBody} ${isAnimating ? styles.fading : ''}`}>
              <div className={styles.metricRow}>
                <div className={styles.metricCard}>
                  <div className={styles.metricLabel}>Compliance Score</div>
                  <div className={styles.metricValueWrapper}>
                    <span className={styles.metricValue}>{activeIntent.metrics.score}</span>
                    <span className={styles.metricMax}>/100</span>
                  </div>
                  <div className={styles.progressTrack}>
                    <div className={styles.progressBar} style={{ width: `${activeIntent.metrics.score}%`, backgroundColor: activeIntent.metrics.score > 80 ? 'var(--c-mint)' : activeIntent.metrics.score > 50 ? 'var(--c-warning-amber)' : '#ef4444' }}></div>
                  </div>
                </div>

                <div className={styles.metricCard}>
                  <div className={styles.metricLabel}>Current Status</div>
                  <div className={styles.statusBadgeWrapper}>
                    {activeIntent.metrics.score > 80 ? (
                      <CheckCircle2 size={18} color="var(--c-mint)" />
                    ) : (
                      <AlertCircle size={18} color="var(--c-warning-amber)" />
                    )}
                    <span className={styles.statusText}>{activeIntent.metrics.status}</span>
                  </div>
                </div>
              </div>

              <div className={styles.dataRow}>
                <div className={styles.dataItem}>
                  <TrendingUp size={16} className={styles.dataIcon} />
                  <div>
                    <div className={styles.dataLabel}>Financials</div>
                    <div className={styles.dataValue}>{activeIntent.metrics.revenue}</div>
                  </div>
                </div>
                <div className={styles.dataItem}>
                  <Clock size={16} className={styles.dataIcon} />
                  <div>
                    <div className={styles.dataLabel}>Next Deadline</div>
                    <div className={styles.dataValue}>{activeIntent.metrics.deadline}</div>
                  </div>
                </div>
                <div className={styles.dataItem}>
                  <ShieldCheck size={16} className={styles.dataIcon} />
                  <div>
                    <div className={styles.dataLabel}>Assigned Expert</div>
                    <div className={styles.dataValue}>{activeIntent.metrics.ca}</div>
                  </div>
                </div>
              </div>
              
              {/* Fake Chart */}
              <div className={styles.chartContainer}>
                <div className={styles.chartBars}>
                  {chartData.map((height, i) => (
                    <div key={i} className={styles.bar} style={{ height: `${height}%` }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
