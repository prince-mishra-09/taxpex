import styles from './ServiceDiscoveryHero.module.css'

export default function ServiceDiscoveryHero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <h1 className={styles.title}>Everything your business needs to stay compliant and grow.</h1>
        <p className={styles.subtitle}>
          Discover CA-led solutions for Tax, GST, Business Setup, and Financial Operations.
        </p>
      </div>
    </section>
  )
}
