import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ShieldCheck, Lock, Users, Server, Database, FileKey, ArrowRight, ArrowRightCircle } from 'lucide-react'
import styles from './Security.module.css'

export default function Security() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={styles.wrapper}>
      <Helmet>
        <title>Security & Privacy | Taxpex</title>
        <meta name="description" content="Enterprise-grade security for your financial data. Learn how Taxpex protects your business." />
      </Helmet>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.badge}>Security Architecture</div>
          <h1 className={styles.title}>Your financial data deserves more than a password.</h1>
          <p className={styles.subtitle}>
            We treat your compliance data, bank statements, and tax returns with the same strict security protocols used by modern fintech institutions and banks.
          </p>
        </div>
      </section>

      {/* Main Layout */}
      <section className="container">
        <div className={styles.layout}>
          
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <h3>Contents</h3>
            <nav className={styles.navLinks}>
              <button className={styles.navLink} onClick={() => scrollTo('encryption')} style={{textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit'}}>Data Encryption</button>
              <button className={styles.navLink} onClick={() => scrollTo('access')} style={{textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit'}}>Access Control</button>
              <button className={styles.navLink} onClick={() => scrollTo('payments')} style={{textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit'}}>Secure Payments</button>
              <button className={styles.navLink} onClick={() => scrollTo('infrastructure')} style={{textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit'}}>Infrastructure & SLA</button>
            </nav>
          </aside>

          {/* Content */}
          <main className={styles.mainContent}>
            
            {/* 1. Encryption */}
            <div id="encryption" className={styles.section}>
              <div className={styles.sectionHeader}>
                <div className={styles.iconBox}><Lock size={24} /></div>
                <h2 className={styles.sectionTitle}>Data Encryption</h2>
              </div>
              <p className={styles.sectionDesc}>
                All data moving between your browser and our servers is encrypted in transit using industry-standard TLS 1.2 or higher. Once it reaches our servers, your documents and financial records are encrypted at rest.
              </p>

              {/* Technical Diagram */}
              <div className={styles.diagramVault}>
                <div className={styles.diagramNode}>
                  <div className={styles.nodeBox}>Client Browser</div>
                </div>
                <div className={styles.diagramPath}>
                  <span className={styles.pathLabel}>TLS 1.3</span>
                  <div className={styles.pathLine}></div>
                </div>
                <div className={styles.diagramNode}>
                  <div className={styles.nodeBox}>Taxpex API</div>
                </div>
                <div className={styles.diagramPath}>
                  <span className={styles.pathLabel}>AES-256</span>
                  <div className={styles.pathLine}></div>
                </div>
                <div className={styles.diagramNode}>
                  <div className={`${styles.nodeBox} ${styles.secure}`}>Encrypted Vault</div>
                </div>
              </div>

              <div className={styles.featureGrid}>
                <div className={styles.featureCard}>
                  <h4>Encryption at Rest</h4>
                  <p>Sensitive documents (PAN, Aadhar, Bank Statements) are encrypted using AES-256 before being written to our storage buckets.</p>
                </div>
                <div className={styles.featureCard}>
                  <h4>Encryption in Transit</h4>
                  <p>We enforce HTTPS on all endpoints. Non-secure HTTP requests are automatically redirected or rejected.</p>
                </div>
              </div>
            </div>

            {/* 2. Access Control */}
            <div id="access" className={styles.section}>
              <div className={styles.sectionHeader}>
                <div className={styles.iconBox}><Users size={24} /></div>
                <h2 className={styles.sectionTitle}>Role-Based Access Control (RBAC)</h2>
              </div>
              <p className={styles.sectionDesc}>
                Not every employee at Taxpex can see your data. We operate on a strict principle of least privilege, meaning data is only accessible to the specific professionals handling your case.
              </p>

              <div className={styles.featureGrid}>
                <div className={styles.featureCard}>
                  <h4>CA-Only Access</h4>
                  <p>Your sensitive financial records (ledgers, tax files) are restricted to the verified Chartered Accountant or Company Secretary assigned to your mandate.</p>
                </div>
                <div className={styles.featureCard}>
                  <h4>Audit Trails</h4>
                  <p>Every read, write, or modification to a client record is logged immutably. We know exactly who accessed what, and when.</p>
                </div>
                <div className={styles.featureCard}>
                  <h4>MFA Enforced</h4>
                  <p>All internal Taxpex staff are required to use Multi-Factor Authentication (MFA) to access internal administrative tools.</p>
                </div>
                <div className={styles.featureCard}>
                  <h4>Automated Revocation</h4>
                  <p>Once a service mandate is completed, active access tokens for specific financial documents expire automatically.</p>
                </div>
              </div>
            </div>

            {/* 3. Secure Payments */}
            <div id="payments" className={styles.section}>
              <div className={styles.sectionHeader}>
                <div className={styles.iconBox}><ShieldCheck size={24} /></div>
                <h2 className={styles.sectionTitle}>Secure Payments</h2>
              </div>
              <p className={styles.sectionDesc}>
                Taxpex does not store or process raw credit card data or UPI PINs on our servers. All payment processing is offloaded to RBI-compliant, PCI-DSS certified payment gateways.
              </p>
              <div className={styles.featureGrid}>
                <div className={styles.featureCard}>
                  <h4>PCI-DSS Compliant</h4>
                  <p>Our payment partners adhere to the highest level of Payment Card Industry Data Security Standards.</p>
                </div>
                <div className={styles.featureCard}>
                  <h4>No Card Data Stored</h4>
                  <p>We only store secure, non-reversible payment tokens provided by the gateway to verify transaction status.</p>
                </div>
              </div>
            </div>

            {/* 4. Infrastructure & SLA */}
            <div id="infrastructure" className={styles.section}>
              <div className={styles.sectionHeader}>
                <div className={styles.iconBox}><Server size={24} /></div>
                <h2 className={styles.sectionTitle}>Infrastructure & Resilience</h2>
              </div>
              <p className={styles.sectionDesc}>
                Built on top-tier cloud providers with redundant systems to ensure your business operations never halt due to platform downtime.
              </p>
              
              <div className={styles.featureGrid}>
                <div className={styles.featureCard}>
                  <h4>Automated Backups</h4>
                  <p>Client data and databases are backed up automatically at regular intervals, encrypted, and stored in geographically isolated zones.</p>
                </div>
                <div className={styles.featureCard}>
                  <h4>Incident Response</h4>
                  <p>We maintain an active incident response protocol. While we strive for 100% uptime, our team is immediately alerted to anomalies via automated monitoring.</p>
                </div>
                <div className={styles.featureCard}>
                  <h4>Data Isolation</h4>
                  <p>Client data is logically separated at the database level to ensure zero cross-contamination of financial records.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className={styles.ctaBox}>
              <h2>Focus on growth, not security headaches.</h2>
              <p>Leave the compliance and data security to the experts.</p>
              <Link to="/contact" className={styles.primaryBtn}>
                Talk to a CA <ArrowRight size={18} />
              </Link>
            </div>

          </main>
        </div>
      </section>
    </div>
  )
}
