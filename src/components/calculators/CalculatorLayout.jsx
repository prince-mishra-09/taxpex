import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react'
import { toolsData } from '../../data/toolsData'
import styles from './Calculator.module.css'

export default function CalculatorLayout({ 
  title, 
  benefit, 
  inputs, 
  results, 
  mobileSummary,
  serviceRecommendation,
  disclaimer,
  currentToolId = 'gst-calculator'
}) {
  // Pick suggested tools (exclude current tool)
  const suggestedTools = toolsData
    .filter(t => t.id !== currentToolId)
    .slice(0, 4)

  return (
    <div className={styles.calcWrapper}>
      <Helmet>
        <title>{title} | Taxpex Tools</title>
        <meta name="description" content={benefit} />
      </Helmet>

      <div className={styles.calcContainer}>
        <div className={styles.calcHeader}>
          <h1 className={styles.calcTitle}>{title}</h1>
          <p className={styles.calcBenefit}>{benefit}</p>
        </div>

        <div className={styles.calcGrid}>
          {/* Left Column: Inputs */}
          <div className={styles.inputCol}>
            <div className={styles.inputPanel}>
              {inputs}
            </div>
            
            {disclaimer && (
              <div className={styles.disclaimer}>
                * {disclaimer}
              </div>
            )}
          </div>

          {/* Right Column: Live Results */}
          <div className={styles.resultCol}>
            <div className={styles.resultPanel}>
              {results}
            </div>
          </div>
        </div>

        {/* Primary Tool Service CTA */}
        {serviceRecommendation && (
          <div className={styles.serviceUpsell}>
            <div className={styles.upsellBadge}>
              <Sparkles size={13} /> CA-Led Operations
            </div>
            <div className={styles.upsellContent}>
              <div className={styles.upsellText}>
                <h3>Need help acting on these numbers?</h3>
                <p>Get expert CA assistance with <strong>{serviceRecommendation.name}</strong>.</p>
              </div>
              <Link to={serviceRecommendation.link} className={styles.upsellBtn}>
                Get Started <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        )}

        {/* Suggested Tools & Calculators Section */}
        <div className={styles.suggestedSection}>
          <div className={styles.suggestedHeader}>
            <div>
              <h2 className={styles.suggestedTitle}>Suggested Tools & Calculators</h2>
              <p className={styles.suggestedSubtitle}>Explore other free financial utilities tailored for your business</p>
            </div>
            <Link to="/tools" className={styles.viewAllToolsLink}>
              All Tools <ChevronRight size={16} />
            </Link>
          </div>

          <div className={styles.suggestedGrid}>
            {suggestedTools.map(tool => (
              <div key={tool.id} className={styles.suggestedCard}>
                <div>
                  <div className={styles.suggestedCardHeader}>
                    <span className={styles.categoryBadge}>{tool.category}</span>
                    {tool.status === 'coming-soon' && (
                      <span className={styles.comingSoonBadge}>Soon</span>
                    )}
                  </div>
                  <h4 className={styles.suggestedCardTitle}>{tool.name}</h4>
                  <p className={styles.suggestedCardDesc}>{tool.benefit}</p>

                  {/* Related Service CTA badge */}
                  {tool.recommendService && (
                    <div className={styles.toolRelatedCta}>
                      <CheckCircle2 size={13} className={styles.ctaCheckIcon} />
                      <span>CTA: <strong>{tool.recommendService.name}</strong></span>
                    </div>
                  )}
                </div>

                <div className={styles.suggestedCardFooter}>
                  {tool.status === 'coming-soon' ? (
                    <span className={`${styles.toolCardBtn} ${styles.btnDisabled}`}>
                      Coming Soon
                    </span>
                  ) : (
                    <Link to={`/tools/${tool.slug}`} className={styles.toolCardBtn}>
                      Use Tool <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

