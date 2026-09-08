import { Link } from 'react-router-dom'
import { Grid, ArrowRight } from 'lucide-react'
import { SERVICES } from '../../data/servicesData'
import styles from './ServiceModules.module.css'

export default function RelatedServices({ relatedIds }) {
  if (!relatedIds || relatedIds.length === 0) return null

  const related = relatedIds.map(id => SERVICES.find(s => s.id === id || s.slug === id)).filter(Boolean)

  if (related.length === 0) return null

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>
        <Grid className={styles.titleIcon} size={32} />
        Related Services
      </h2>
      <div className={styles.relatedGrid}>
        {related.map(service => (
          <Link 
            to={`/services/${service.slug}`} 
            key={service.id} 
            className={styles.relatedCard}
          >
            <div className={styles.relatedContent}>
              <h4 className={styles.relatedName}>{service.name}</h4>
              <p className={styles.relatedDesc}>{service.outcome}</p>
            </div>
            <div className={styles.relatedArrow}>
              <ArrowRight size={20} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
