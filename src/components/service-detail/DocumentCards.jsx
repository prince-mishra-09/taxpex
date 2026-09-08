import { FileText, Files } from 'lucide-react'
import styles from './ServiceModules.module.css'

export default function DocumentCards({ documents }) {
  if (!documents || documents.length === 0) return null

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>
        <Files className={styles.titleIcon} size={32} />
        Documents Required
      </h2>
      <div className={styles.documentGrid}>
        {documents.map((doc, idx) => (
          <div key={idx} className={styles.documentCard}>
            <div className={styles.docIconWrapper}>
              <FileText size={20} />
            </div>
            <div>
              <h4 className={styles.docName}>{doc.name}</h4>
              <p className={styles.docDesc}>{doc.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
