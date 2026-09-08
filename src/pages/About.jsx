import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Server, Users, ShieldCheck, Zap, MonitorSmartphone, CheckCircle2, UserCircle2 } from 'lucide-react'
import { aboutData } from '../data/aboutData'
import styles from './About.module.css'

export default function About() {
  const [mousePos, setMousePos] = useState(null)
  const verifiedStats = aboutData.stats.filter(stat => stat.verified)
  const verifiedTeam = aboutData.team.filter(member => member.photoVerified)

  const getBeliefIcon = (id) => {
    switch (id) {
      case 'tech': return <Server size={32} />
      case 'expertise': return <Users size={32} />
      case 'transparency': return <MonitorSmartphone size={32} />
      case 'accessibility': return <Zap size={32} />
      default: return <ShieldCheck size={32} />
    }
  }

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <div className={styles.pageWrapper}>
      <Helmet>
        <title>About Us | Taxpex</title>
        <meta name="description" content="Taxpex is a technology-first financial operations partner for modern Indian businesses." />
      </Helmet>

      {/* Interactive Grid Wrapper for Hero + Story */}
      <div 
        className={styles.interactiveGridWrapper}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos(null)}
      >
        <div className={styles.gridPattern}></div>
        {mousePos && (
          <div 
            className={styles.gridGlow} 
            style={{
              '--mouse-x': `${mousePos.x}px`,
              '--mouse-y': `${mousePos.y}px`
            }}
          ></div>
        )}

        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={`container ${styles.heroContent}`}>
            <div className={styles.heroIconFloat}>
              <ShieldCheck size={120} strokeWidth={1} />
            </div>
            <h1 className={styles.heroTitle}>{aboutData.hero.headline}</h1>
            <p className={styles.heroSubtitle}>{aboutData.hero.subheadline}</p>
          </div>
        </section>

        {/* Fragmentation Story */}
        <section className={styles.section} style={{ paddingTop: 0, position: 'relative', zIndex: 1 }}>
          <div className="container">
            <div className={styles.storyGrid}>
              <h2 className={styles.storyTitle}>{aboutData.fragmentationStory.headline}</h2>
              <p className={styles.storyDesc}>{aboutData.fragmentationStory.description}</p>
            </div>

            <div className={styles.beliefsGrid}>
              {aboutData.beliefs.map(belief => (
                <div key={belief.id} className={styles.beliefCard}>
                  <div className={styles.beliefIcon}>
                    {getBeliefIcon(belief.id)}
                  </div>
                  <h3 className={styles.beliefTitle}>{belief.title}</h3>
                  <p className={styles.beliefDesc}>{belief.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Tech + Human (Dark Section) */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className="container">
          <div className={styles.techHumanContainer}>
            <div className={styles.techHumanText}>
              <h2 className={styles.title}>{aboutData.technologyVsHuman.headline}</h2>
              <p className={styles.desc}>{aboutData.technologyVsHuman.description}</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-6)' }}>
              <div>
                <h3 style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-4)', color: 'var(--c-primary-blue)' }}>Software handles:</h3>
                <div className={styles.featureList}>
                  {aboutData.technologyVsHuman.techFeatures.map((feat, idx) => (
                    <div key={idx} className={styles.featureBox}>
                      <MonitorSmartphone size={18} />
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-4)', color: 'var(--c-pure-white)' }}>Humans handle:</h3>
                <div className={styles.featureList}>
                  {aboutData.technologyVsHuman.humanFeatures.map((feat, idx) => (
                    <div key={idx} className={styles.featureBox}>
                      <Users size={18} />
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Comparison */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 className={styles.comparisonTitle}>{aboutData.workflowComparison.headline}</h2>
          
          <div className={styles.comparisonTable}>
            <div className={`${styles.compRow} ${styles.compHeader} desktopOnly`}>
              <div className={styles.compCell}>Workflow</div>
              <div className={styles.compCell}>Traditional Approach</div>
              <div className={styles.compCell}>The Taxpex Way</div>
            </div>
            
            {aboutData.workflowComparison.points.map((point, idx) => (
              <div key={idx} className={styles.compRow}>
                <div className={`${styles.compCell} ${styles.compDimension}`}>
                  {point.dimension}
                </div>
                <div className={`${styles.compCell} ${styles.compTrad}`}>
                  <span className={styles.mobileLabel}>Traditional</span>
                  {point.traditional}
                </div>
                <div className={`${styles.compCell} ${styles.compTaxpex}`}>
                  <span className={styles.mobileLabel}>Taxpex</span>
                  {point.taxpex}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - Only renders if there are verified stats */}
      {verifiedStats.length > 0 && (
        <section className={`${styles.section} ${styles.sectionLight}`} style={{ paddingTop: 0 }}>
          <div className="container">
            <div className={styles.statsGrid}>
              {verifiedStats.map((stat, idx) => (
                <div key={idx} className={styles.statItem}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Team */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.comparisonTitle}>Our Experts</h2>
          
          {verifiedTeam.length > 0 ? (
            <div className={styles.teamGrid}>
              {/* Future grid for real team profiles */}
            </div>
          ) : (
            <div className={styles.teamPlaceholder}>
              <UserCircle2 size={48} className={styles.teamPlaceholderIcon} />
              <h3 className={styles.teamPlaceholderTitle}>Team Profiles Coming Soon</h3>
              <p className={styles.teamPlaceholderDesc}>
                We are currently preparing verified profiles for our Senior CAs and advisory team.
                Check back soon to meet the experts powering Taxpex.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className="container">
          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>{aboutData.conversion.headline}</h2>
            <div className={styles.ctaButtons}>
              <Link to={aboutData.conversion.primaryCTA.link} className={styles.primaryBtn}>
                {aboutData.conversion.primaryCTA.text}
              </Link>
              <Link to={aboutData.conversion.secondaryCTA.link} className={styles.secondaryBtn}>
                {aboutData.conversion.secondaryCTA.text}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
