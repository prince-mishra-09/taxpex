import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styles from './NotFound.module.css'

export default function NotFound() {
  const [digits, setDigits] = useState(['-', '-', '-'])

  useEffect(() => {
    // Reveal 404 with a slight stagger
    const timer1 = setTimeout(() => setDigits(prev => ['4', prev[1], prev[2]]), 400)
    const timer2 = setTimeout(() => setDigits(prev => ['4', '0', prev[2]]), 800)
    const timer3 = setTimeout(() => setDigits(prev => ['4', '0', '4']), 1200)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <Helmet>
        <title>404 Not Found | Taxpex</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className={styles.content}>
        
        <div className={styles.calcBox}>
          <div className={styles.calcFormula}>
            (Income + Deductions) / 0 =
          </div>
          <div className={styles.errorNumber}>
            <span className={styles.scrambleDigit}>{digits[0]}</span>
            <span className={styles.scrambleDigit}>{digits[1]}</span>
            <span className={styles.scrambleDigit}>{digits[2]}</span>
          </div>
        </div>

        <h1 className={styles.title}>Looks like this calculation went somewhere else.</h1>
        <p className={styles.desc}>
          The page or tool you're looking for doesn't exist, has been moved, or is currently undergoing maintenance by our CA team.
        </p>

        <div className={styles.btnGroup}>
          <Link to="/" className={styles.primaryBtn}>
            Go Home
          </Link>
          <Link to="/services" className={styles.secondaryBtn}>
            Find a Service
          </Link>
          <Link to="/contact" className={styles.secondaryBtn}>
            Talk to a CA
          </Link>
        </div>
      </div>
    </div>
  )
}
