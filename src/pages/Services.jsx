import { useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SERVICES } from '../data/servicesData'
import ServiceDiscoveryHero from '../components/services/ServiceDiscoveryHero'
import ServiceFilterBar from '../components/services/ServiceFilterBar'
import ServiceGrid from '../components/services/ServiceGrid'
import MobileStickyCTA from '../components/services/MobileStickyCTA'

export default function Services() {
  const [searchParams, setSearchParams] = useSearchParams()

  const currentCategory = searchParams.get('category') || 'All'
  const currentQuery = searchParams.get('q') || ''
  const currentAudience = searchParams.get('audience') || 'All'
  const currentPrice = searchParams.get('price') || 'all'
  const currentUrgency = searchParams.get('urgency') || 'all'

  // Filter Logic
  const filteredServices = useMemo(() => {
    return SERVICES.filter(service => {
      // Search Text
      if (currentQuery) {
        const query = currentQuery.toLowerCase()
        const matchesName = service.name.toLowerCase().includes(query)
        const matchesOutcome = service.outcome.toLowerCase().includes(query)
        const matchesAlias = service.aliases?.some(alias => alias.toLowerCase().includes(query))
        
        if (!matchesName && !matchesOutcome && !matchesAlias) return false
      }

      // Category
      if (currentCategory !== 'All' && service.category !== currentCategory) {
        return false
      }

      // Audience
      if (currentAudience !== 'All' && !service.bestFor.includes(currentAudience)) {
        return false
      }

      // Price
      if (currentPrice !== 'all' && service.priceRange !== currentPrice) {
        return false
      }

      // Urgency
      if (currentUrgency !== 'all' && service.urgencyRange !== currentUrgency) {
        return false
      }

      return true
    }).sort((a, b) => {
      if (a.featured === b.featured) return 0
      return a.featured ? -1 : 1
    })
  }, [currentQuery, currentCategory, currentAudience, currentPrice, currentUrgency])

  const handleCategorySelect = (category) => {
    if (category !== 'All') {
      const elementId = `category-${category.toLowerCase().replace(/\s+/g, '-')}`
      const element = document.getElementById(elementId)
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 140; 
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <ServiceDiscoveryHero servicesData={SERVICES} />
      <ServiceFilterBar 
        searchParams={searchParams} 
        setSearchParams={setSearchParams} 
        onCategorySelect={handleCategorySelect}
      />
      <main className="container" style={{ paddingBottom: '100px' }}>
        <ServiceGrid services={filteredServices} />
      </main>
      <MobileStickyCTA />
    </>
  )
}
