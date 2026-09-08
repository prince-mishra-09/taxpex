import ServiceCard from './ServiceCard'
import { CATEGORIES } from '../../data/servicesData'
import styles from './ServiceGrid.module.css'

export default function ServiceGrid({ services }) {
  if (!services || services.length === 0) {
    return (
      <div className={styles.emptyState}>
        <h3>No services found</h3>
        <p>Try adjusting your search or filters to see more results.</p>
      </div>
    )
  }

  // Feature logic: top 6 featured items
  const featuredServices = services.filter(s => s.featured).slice(0, 6)
  const remainingServices = services.filter(s => !featuredServices.includes(s))

  // Group remaining by category
  const groupedServices = CATEGORIES.reduce((acc, cat) => {
    if (cat === 'All') return acc
    const catServices = remainingServices.filter(s => s.category === cat)
    if (catServices.length > 0) {
      acc[cat] = catServices
    }
    return acc
  }, {})

  return (
    <div className={styles.gridContainer}>
      {/* Featured Section */}
      {featuredServices.length > 0 && (
        <section className={styles.categorySection}>
          <h2 className={styles.sectionTitle}>Featured for you</h2>
          <div className={styles.grid}>
            {featuredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>
      )}

      {/* Grouped Categories */}
      {Object.entries(groupedServices).map(([category, catServices]) => (
        <section key={category} id={`category-${category.toLowerCase().replace(/\s+/g, '-')}`} className={styles.categorySection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{category}</h2>
            <div className={styles.sectionDivider}></div>
          </div>
          <div className={styles.grid}>
            {catServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
