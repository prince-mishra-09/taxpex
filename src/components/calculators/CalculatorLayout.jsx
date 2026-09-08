import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import styles from './Calculator.module.css'

export default function CalculatorLayout({ 
  title, 
  benefit, 
  inputs, 
  results, 
  mobileSummary,
  serviceRecommendation,
  disclaimer
}) {
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

        {/* Upsell Module */}
        {serviceRecommendation && (
          <div className={styles.serviceUpsell}>
            <div className={styles.upsellText}>
              <h3>Need help acting on these numbers?</h3>
              <p>Explore our {serviceRecommendation.name} services.</p>
            </div>
            <Link to={serviceRecommendation.link} className={styles.upsellBtn}>
              Learn More
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
