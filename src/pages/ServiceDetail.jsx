import { useEffect, useState, lazy, Suspense } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { getServiceBySlug } from '../data/serviceDetails'
import styles from './ServiceDetail.module.css'
import ServiceDetailHero from '../components/service-detail/ServiceDetailHero'

// Lazy load modules below the fold for performance
const DeliverablesChecklist = lazy(() => import('../components/service-detail/DeliverablesChecklist'))
const TimelineSteps = lazy(() => import('../components/service-detail/TimelineSteps'))
const DocumentCards = lazy(() => import('../components/service-detail/DocumentCards'))
const YourOptions = lazy(() => import('../components/service-detail/YourOptions'))
const RisksSection = lazy(() => import('../components/service-detail/RisksSection'))
const FAQAccordion = lazy(() => import('../components/service-detail/FAQAccordion'))
const RelatedServices = lazy(() => import('../components/service-detail/RelatedServices'))
const MobileStickyCTA = lazy(() => import('../components/service-detail/MobileStickyCTA'))
const PremiumActionCard = lazy(() => import('../components/service-detail/PremiumActionCard'))

export default function ServiceDetail() {
  const { slug } = useParams()
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    const data = getServiceBySlug(slug)
    setService(data)
    setLoading(false)
  }, [slug])

  if (loading) {
    return <div className={styles.loaderContainer}><div className={styles.spinner}></div></div>
  }

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const themeClass = styles[`theme-${service.theme}`] || styles['theme-default']

  return (
    <div className={`${styles.servicePage} ${themeClass}`}>
      <Helmet>
        <title>{service.seo?.title || `${service.name} | Taxpex`}</title>
        <meta name="description" content={service.seo?.description || service.outcome} />
        <link rel="canonical" href={`https://taxpex.com/services/${slug}`} />
      </Helmet>

      {/* Absolute Hero Background */}
      <div className={styles.heroBackground}></div>

      {/* Master Layout Grid */}
      <div className={`container ${styles.contentGrid}`}>
        
        {/* Left Column: Hero Text + Content Modules */}
        <div className={styles.mainContent}>
          <ServiceDetailHero service={service} />
          
          <Suspense fallback={<div className={styles.loaderContainer}><div className={styles.spinner}></div></div>}>
            <DeliverablesChecklist deliverables={service.deliverables} />
            <TimelineSteps timeline={service.timeline} />
            <DocumentCards documents={service.documents} />
            <YourOptions options={service.yourOptions} />
            <RisksSection risks={service.risks} />
            <FAQAccordion faqs={service.faqs} />
            <RelatedServices relatedIds={service.relatedServices} />
          </Suspense>
        </div>
        
        {/* Right Column: Sticky Action Card */}
        <div className={styles.sidebarColumn}>
          <Suspense fallback={null}>
            <PremiumActionCard service={service} />
          </Suspense>
        </div>

      </div>

      <Suspense fallback={null}>
        <MobileStickyCTA />
      </Suspense>

    </div>
  )
}
