import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FileText, Calculator, Receipt, ShieldAlert, BarChart3, Users, CheckCircle2, ArrowRight, Lock, MonitorSmartphone } from 'lucide-react'
import { tasData } from '../data/tasData'
import styles from './TasProduct.module.css'

export default function TasProduct() {
  const [activeTab, setActiveTab] = useState(tasData.personas[0].id)
  
  // Ticking and fluctuating numbers for interactive dashboard
  const [metrics, setMetrics] = useState({
    revenue: 1463783,
    pending: 342000,
    gst: 185400
  })
  
  // Array of 12 numbers for the vertical bar chart (representing months or weeks)
  const [bars, setBars] = useState(Array.from({length: 12}, () => Math.floor(Math.random() * 60) + 20))
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Fluctuate main metrics
      setMetrics(prev => ({
        revenue: prev.revenue + (Math.random() > 0.2 ? 1 : -0.5) * Math.floor(Math.random() * 8000),
        pending: Math.max(100000, prev.pending + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 25000)),
        gst: Math.max(50000, prev.gst + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 5000))
      }))
      
      // Fluctuate the bars up and down randomly to simulate active data processing
      setBars(prev => prev.map(val => Math.max(10, Math.min(100, val + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 25)))))
      
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const getFeatureIcon = (id) => {
    switch(id) {
      case 'billing': return <FileText size={32} />
      case 'accounting': return <Calculator size={32} />
      case 'bookkeeping': return <Receipt size={32} />
      case 'tds': return <ShieldAlert size={32} />
      case 'reports': return <BarChart3 size={32} />
      case 'advisory': return <Users size={32} />
      default: return <CheckCircle2 size={32} />
    }
  }

  const formatCurrency = (num) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(num)
  }

  const renderPersonaVisual = (id) => {
    switch(id) {
      case 'founder':
        return (
          <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="var(--c-primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.animFloat}>
            <path d="M3 3v18h18" stroke="rgba(37, 99, 235, 0.2)" strokeWidth="1" />
            <path d="M3 9h18M3 15h18M9 3v18M15 3v18" stroke="rgba(37, 99, 235, 0.1)" strokeWidth="1" />
            <path className={styles.animDrawLine} d="M3 17l6-6 4 4 8-8" />
            <circle cx="21" cy="7" r="1.5" fill="var(--c-primary-blue)" className={styles.animPulse} />
          </svg>
        )
      case 'finance':
        return (
          <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="var(--c-primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path className={styles.animSpin} d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" className={styles.animPulse} />
          </svg>
        )
      case 'ca':
        return (
          <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="var(--c-primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.animFloat}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="rgba(37, 99, 235, 0.4)" fill="rgba(37, 99, 235, 0.05)" />
            <path className={styles.animDrawLine} d="M9 12l2 2 4-4" strokeWidth="2" />
          </svg>
        )
      default: return null
    }
  }

  return (
    <div className={styles.pageWrapper}>
      <Helmet>
        <title>TAS | The Taxpex Accounting System</title>
        <meta name="description" content="One calm dashboard for all your business numbers. Billing, accounting, compliance, and CA advisory." />
      </Helmet>

      {/* Hero Section */}
      <section className={`${styles.section} ${styles.hero}`}>
        <div className={styles.heroBg}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(37, 99, 235, 0.1)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <g>
              {Array.from({ length: 20 }).map((_, rowIndex) =>
                Array.from({ length: 60 }).map((_, colIndex) => (
                  <rect
                    key={`${rowIndex}-${colIndex}`}
                    x={colIndex * 50}
                    y={rowIndex * 50}
                    width="50"
                    height="50"
                    fill="transparent"
                    className={styles.gridCell}
                  />
                ))
              )}
            </g>
          </svg>
        </div>
        <div className="container">
          <h1 className={styles.heroTitle}>
            Your business numbers.<br/>
            <span className={styles.gradientText}>One calm dashboard.</span>
          </h1>
          <p className={styles.heroSubtitle}>{tasData.hero.subheadline}</p>

          {/* Interactive CSS Dashboard Mockup with iPad Frame */}
          <div className={styles.dashboardWrapper}>
            <div className={styles.ipadFrame}>
              <div className={styles.ipadCamera}></div>
              <div className={styles.dashboardMockup}>
                <div className={styles.dashHeader}>
                  <div className={styles.dashTitle}>TAS Financial Overview</div>
                  <div className={styles.liveIndicator}>
                    <span className={styles.liveDot}></span> Live Syncing
                  </div>
                </div>
                <div className={styles.dashGrid}>
                  {/* Metrics */}
                  <div className={styles.dashCard}>
                    <div className={styles.dashCardLabel}>Monthly Revenue</div>
                    <div className={styles.dashCardValue}>
                      {formatCurrency(metrics.revenue)}
                      <span className={styles.dashCardTrend}>+12.5%</span>
                    </div>
                  </div>
                  <div className={styles.dashCard}>
                    <div className={styles.dashCardLabel}>Pending Invoices</div>
                    <div className={styles.dashCardValue}>
                      {formatCurrency(metrics.pending)}
                      <span className={styles.dashCardTrend} style={{background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444'}}>Overdue</span>
                    </div>
                  </div>
                  <div className={styles.dashCard}>
                    <div className={styles.dashCardLabel}>Estimated GST Due</div>
                    <div className={styles.dashCardValue}>
                      {formatCurrency(metrics.gst)}
                    </div>
                  </div>
                  
                  {/* Animated Vertical Bar Chart Area */}
                  <div className={styles.dashChartArea}>
                    <div className={styles.chartHeader}>
                      <div className={styles.chartTitle}>Revenue vs Expenses</div>
                      <div className={styles.chartSubtitle}>Trailing 12 Months</div>
                    </div>
                    <div className={styles.barChartContainer}>
                      {bars.map((val, idx) => (
                        <div key={idx} className={styles.barWrapper}>
                          <div className={styles.barFill} style={{ height: `${val}%` }}></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Everything in one place */}
      <section className={`${styles.section} ${styles.sectionBorderBottom}`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>Everything in one place.</h2>
            <p style={{ color: '#94a3b8', fontSize: '1.125rem', marginTop: '16px' }}>Replace 5 different fragmented tools with TAS.</p>
          </div>
          <div className={styles.featuresGrid}>
            {tasData.features.map(f => (
              <div key={f.id} className={styles.featureCard}>
                <div className={styles.featureIcon}>{getFeatureIcon(f.id)}</div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className={`${styles.section} ${styles.sectionBorderBottom}`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>From invoice to insight.</h2>
            <p style={{ color: '#94a3b8', fontSize: '1.125rem', marginTop: '16px' }}>Watch how data flows seamlessly through the platform.</p>
          </div>
          <div className={styles.pipelineContainer}>
            <div className={styles.pipelineLine}></div>
            <div className={styles.pipelineLineActive}></div>
            {tasData.pipeline.map(step => (
              <div key={step.step} className={styles.pipelineStep}>
                <div className={styles.pipelineDot}>{step.step}</div>
                <h4 className={styles.pipelineTitle}>{step.title}</h4>
                <p className={styles.pipelineDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personas */}
      <section className={`${styles.section} ${styles.sectionBorderBottom}`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>Built for your entire team.</h2>
          </div>
          
          <div className={styles.tabsContainer}>
            {tasData.personas.map(p => (
              <button 
                key={p.id}
                className={`${styles.tabBtn} ${activeTab === p.id ? styles.tabBtnActive : ''}`}
                onClick={() => setActiveTab(p.id)}
              >
                {p.title}
              </button>
            ))}
          </div>

          <div className={styles.tabContent}>
            {tasData.personas.map(p => (
              p.id === activeTab && (
                <div key={p.id} style={{ display: 'contents' }}>
                  <div className={styles.tabText}>
                    <h3 className={styles.tabHeadline}>{p.headline}</h3>
                    <div className={styles.tabPoints}>
                      {p.points.map((point, idx) => (
                        <div key={idx} className={styles.tabPoint}>
                          <CheckCircle2 size={20} color="#3b82f6" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={styles.tabVisual}>
                    {renderPersonaVisual(p.id)}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Security & Multi-platform (Simple combined section) */}
      <section className={`${styles.section} ${styles.sectionBorderBottom}`}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px' }}>
            <div>
              <Lock size={48} color="#3b82f6" style={{ marginBottom: '24px' }} />
              <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '16px' }}>Bank-grade Security.</h2>
              <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>Your financial data is protected with 256-bit AES encryption. We implement strict role-based access control so your team only sees what they need to see.</p>
            </div>
            <div>
              <MonitorSmartphone size={48} color="#3b82f6" style={{ marginBottom: '24px' }} />
              <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '16px' }}>Any device, anywhere.</h2>
              <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>TAS is fully responsive. Approve vendor payments from your phone while at the airport, or run complex P&L reports from your desktop in the office.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className={styles.section}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>Simple, transparent pricing.</h2>
            <p style={{ color: '#94a3b8', fontSize: '1.125rem', marginTop: '16px' }}>No hidden fees. No surprise charges.</p>
          </div>

          <div className={styles.pricingGrid}>
            {tasData.pricing.map(tier => (
              <div key={tier.tier} className={`${styles.pricingCard} ${tier.highlight ? styles.pricingCardHighlight : ''}`}>
                <h3 className={styles.pricingTier}>{tier.tier}</h3>
                <div className={styles.pricingAmount}>
                  {tier.price}<span className={styles.pricingPeriod}>{tier.period}</span>
                </div>
                <p className={styles.pricingDesc}>{tier.desc}</p>
                
                <ul className={styles.pricingFeatures}>
                  {tier.features.map((f, idx) => (
                    <li key={idx} className={styles.pricingFeature}>
                      <CheckCircle2 size={16} className={styles.pricingFeatureIcon} />
                      {f}
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact" className={`${styles.pricingBtn} ${tier.highlight ? styles.pricingBtnHighlight : ''}`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.section} style={{ paddingBottom: '160px' }}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Ready to unify your finances?</h2>
          <div className={styles.ctaBtnWrapper}>
            <Link to="/contact" className={styles.mainCtaBtn}>
              See TAS in action <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
