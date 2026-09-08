import { Outlet, Link } from 'react-router-dom'
import { Menu, X, ChevronDown, ArrowRight, Briefcase, FileText, Calculator, BadgeCheck } from 'lucide-react'
import { useState, useEffect } from 'react'
import styles from './Layout.module.css'

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={styles.wrapper}>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.headerContainer}`}>
          <Link to="/" className={styles.logo}>
            TAXPEX<span className={styles.dot}>.</span>
          </Link>
          
          <nav className={styles.desktopNav}>
            <div className={styles.navItem}>
              <Link to="/services" className={styles.navLink}>Services <ChevronDown size={14} /></Link>
              
              <div className={styles.megaMenu}>
                <div className={styles.megaMenuInner}>
                  {/* Left 25% - Most Used (Using 25% because 20% is very narrow for text) */}
                  <div className={styles.megaMenuSidebar}>
                    <h4 className={styles.megaMenuTitle}>Most Used</h4>
                    <ul className={styles.megaMenuList}>
                      <li>
                        <Link to="/services/gst-registration" className={styles.megaMenuItem}>
                          <div className={styles.megaMenuIconWrapper}><Briefcase size={16} /></div>
                          <span>GST Registration</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/private-limited-incorporation" className={styles.megaMenuItem}>
                          <div className={styles.megaMenuIconWrapper}><FileText size={16} /></div>
                          <span>Pvt Ltd Incorporation</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/monthly-bookkeeping" className={styles.megaMenuItem}>
                          <div className={styles.megaMenuIconWrapper}><Calculator size={16} /></div>
                          <span>Monthly Bookkeeping</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/trademark-registration" className={styles.megaMenuItem}>
                          <div className={styles.megaMenuIconWrapper}><BadgeCheck size={16} /></div>
                          <span>Trademark Registration</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Right 75% - All Services grouped */}
                  <div className={styles.megaMenuMain}>
                    <h4 className={styles.megaMenuTitle}>All Services</h4>
                    <div className={styles.megaMenuGrid}>
                      
                      <div className={styles.megaMenuGroup}>
                        <h5>Tax & GST</h5>
                        <Link to="/services/gst-registration">GST Registration</Link>
                        <Link to="/services/gst-filing">Monthly GST Filing</Link>
                        <Link to="/services/itr-filing-salaried">ITR Filing</Link>
                      </div>

                      <div className={styles.megaMenuGroup}>
                        <h5>Business Setup</h5>
                        <Link to="/services/private-limited-incorporation">Pvt Ltd Incorporation</Link>
                        <Link to="/services/llp-registration">LLP Registration</Link>
                      </div>

                      <div className={styles.megaMenuGroup}>
                        <h5>Accounting & Finance</h5>
                        <Link to="/services/monthly-bookkeeping">Monthly Bookkeeping</Link>
                        <Link to="/services/virtual-cfo">Virtual CFO</Link>
                        <Link to="/services/payroll-processing">Payroll Processing</Link>
                      </div>

                      <div className={styles.megaMenuGroup}>
                        <h5>Compliance & Licences</h5>
                        <Link to="/services/tds-return-filing">TDS Return Filing</Link>
                        <Link to="/services/startup-india-registration">Startup India (DPIIT)</Link>
                        <Link to="/services/trademark-registration">Trademark Registration</Link>
                        <Link to="/services/tax-notice-reply">Tax Notice Reply</Link>
                      </div>
                      
                    </div>
                    
                    <div className={styles.megaMenuFooter}>
                      <Link to="/services" className={styles.viewAllBtn}>
                        Explore all services <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/tas" className={styles.navLink}>TAS</Link>
            <Link to="/tools" className={styles.navLink}>Tools</Link>
            <Link to="/insights" className={styles.navLink}>Insights</Link>
          </nav>
          
          <div className={styles.headerActions}>
            <Link to="/login" className={styles.loginLink}>Log in</Link>
            <Link to="/contact" className={styles.ctaButton}>Get Started</Link>
            <button className={styles.mobileMenuBtn} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <nav className={styles.mobileNav}>
              <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link to="/tas" onClick={() => setMobileMenuOpen(false)}>TAS Product</Link>
              <Link to="/tools" onClick={() => setMobileMenuOpen(false)}>Tools</Link>
              <Link to="/insights" onClick={() => setMobileMenuOpen(false)}>Insights</Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Log in</Link>
            </nav>
          </div>
        )}
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <div className={`container ${styles.footerGrid}`}>
          <div className={styles.footerBrand}>
            <Link to="/" className={styles.footerLogo}>TAXPEX</Link>
            <p className={styles.footerDesc}>Technology-first CA-led financial operations partner for modern Indian businesses.</p>
          </div>
          
          <div className={styles.footerCol}>
            <h4>Platform</h4>
            <Link to="/tas">TAS Dashboard</Link>
            <Link to="/tools">Calculators</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/security">Security</Link>
          </div>
          
          <div className={styles.footerCol}>
            <h4>Services</h4>
            <Link to="/services">Tax & GST</Link>
            <Link to="/services">Business Setup</Link>
            <Link to="/services">Accounting</Link>
            <Link to="/services">Payroll</Link>
          </div>
          
          <div className={styles.footerCol}>
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
        
        <div className={`container ${styles.footerBottom}`}>
          <div className={styles.footerBottomContent}>
            <p>© {new Date().getFullYear()} Taxpex. All rights reserved.</p>
            <div className={styles.footerSocials}>
              {/* Add social icons here if needed */}
              <span>Made in India</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
