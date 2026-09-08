import { useState } from 'react'
import { Sparkles, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getServiceRecommendations } from '../../services/GeminiService'
import styles from './ServiceDiscoveryHero.module.css'

const QUICK_SITUATIONS = [
  'I just hired my first employee',
  'I received an income tax notice',
  'I am raising startup funding',
  'My turnover crossed ₹20 Lakhs'
]

export default function ServiceDiscoveryHero({ servicesData }) {
  const [prompt, setPrompt] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [aiResult, setAiResult] = useState(null)
  const [error, setError] = useState(null)

  const handleAskAI = async (queryToRun) => {
    const finalQuery = typeof queryToRun === 'string' ? queryToRun : prompt
    if (!finalQuery.trim()) return

    setIsLoading(true)
    setError(null)
    setAiResult(null)

    try {
      const result = await getServiceRecommendations(finalQuery, servicesData)
      setAiResult(result)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickClick = (sit) => {
    setPrompt(sit)
    handleAskAI(sit)
  }

  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.splitLayout}>
          
          {/* Left Column: Headline and Input */}
          <div className={styles.leftCol}>
            <div className={styles.badge}>
              <Sparkles size={14} className={styles.badgeIcon} />
              <span>AI-Powered Discovery</span>
            </div>
            <h1 className={styles.title}>
              Everything your business needs to stay compliant and grow.
            </h1>
            <p className={styles.subtitle}>
              Discover CA-led solutions manually, or ask our AI to find exactly what you need based on your situation.
            </p>

            {error ? (
              <div className={styles.errorBlock}>
                <p className={styles.errorTextMain}>
                  Taxpex AI is currently not available. Please contact our CAs.
                </p>
                <div className={styles.errorActions}>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className={styles.waBtn}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className={styles.contactIcon} />
                    WhatsApp
                  </a>
                  <a href="tel:+919876543210" className={styles.callBtn}>
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" className={styles.contactIcon}>
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    Call Us
                  </a>
                </div>
                <button className={styles.retryBtn} onClick={() => setError(null)}>Try again later</button>
              </div>
            ) : (
              <div className={styles.inputWrapper}>
                <textarea 
                  className={styles.aiInput} 
                  placeholder="Ask Taxpex AI... (e.g. 'I want to start an ecommerce business, what do I need?')"
                  value={prompt}
                  onChange={e => setPrompt(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      handleAskAI()
                    }
                  }}
                />
                <button 
                  className={styles.askBtn} 
                  onClick={handleAskAI}
                  disabled={isLoading || !prompt.trim()}
                >
                  {isLoading ? <Loader2 size={18} className={styles.spin} /> : <Sparkles size={18} />}
                  <span>Ask AI</span>
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Dynamic Panel */}
          <div className={styles.rightCol}>
            <div className={styles.panel}>
              
              {/* Default State: Quick Situations */}
              {!isLoading && !aiResult && (
                <div className={styles.defaultState}>
                  <h3 className={styles.panelTitle}>Not sure what you need?</h3>
                  <p className={styles.panelDesc}>Select a common situation or type your own on the left.</p>
                  <div className={styles.chipGrid}>
                    {QUICK_SITUATIONS.map((sit, idx) => (
                      <button key={idx} className={styles.chip} onClick={() => handleQuickClick(sit)}>
                        {sit}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Loading State */}
              {isLoading && (
                <div className={styles.loadingState}>
                  <div className={styles.pulseRing}>
                    <Sparkles size={32} className={styles.pulseIcon} />
                  </div>
                  <h3 className={styles.panelTitle}>Analyzing your situation...</h3>
                  <p className={styles.panelDesc}>Matching you with the right CA-verified services.</p>
                </div>
              )}

              {/* Result State */}
              {!isLoading && aiResult && (
                <div className={styles.resultState}>
                  <h3 className={styles.panelTitle}>Here's what we recommend:</h3>
                  <p className={styles.aiExplanation}>{aiResult.explanation}</p>
                  
                  <div className={styles.recommendedServices}>
                    {aiResult.recommendedIds.map(recId => {
                      const service = servicesData.find(s => s.id === recId)
                      if (!service) return null
                      return (
                        <Link to={`/services/${service.slug}`} key={service.id} className={styles.recCard}>
                          <CheckCircle2 size={18} className={styles.checkIcon} />
                          <div>
                            <h4 className={styles.recTitle}>{service.name}</h4>
                            <span className={styles.recPrice}>Starting from {service.startingPriceLabel}</span>
                          </div>
                          <ArrowRight size={18} className={styles.arrowIcon} />
                        </Link>
                      )
                    })}
                    {aiResult.recommendedIds.length === 0 && (
                      <p className={styles.panelDesc}>No specific services matched. Please try rephrasing your situation.</p>
                    )}
                  </div>
                  
                  <button className={styles.resetBtn} onClick={() => { setAiResult(null); setPrompt(''); }}>
                    Ask something else
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
