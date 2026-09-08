import { useState } from 'react'
import { Search, ArrowRight, FileText, Building, Calculator, Scale, Briefcase, Landmark } from 'lucide-react'
import styles from './FeaturedServices.module.css'

const CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'setup', label: 'Business Setup' },
  { id: 'tax', label: 'Tax & GST' },
  { id: 'compliance', label: 'Compliance' },
  { id: 'accounting', label: 'Accounting' }
]

const SERVICES = [
  {
    id: 1,
    category: 'setup',
    title: 'Private Limited Company Registration',
    desc: 'Register your startup as a Pvt Ltd company. Get incorporation certificate, PAN, TAN, and bank account in 7-10 days.',
    icon: Building,
    price: '₹7,999'
  },
  {
    id: 2,
    category: 'setup',
    title: 'Limited Liability Partnership (LLP)',
    desc: 'Perfect for professional firms. Lower compliance burden with the benefits of limited liability.',
    icon: Briefcase,
    price: '₹5,999'
  },
  {
    id: 3,
    category: 'tax',
    title: 'Comprehensive GST Registration',
    desc: 'Mandatory if your turnover exceeds the threshold. Get your GSTIN quickly without the paperwork hassle.',
    icon: FileText,
    price: '₹1,499'
  },
  {
    id: 4,
    category: 'tax',
    title: 'Income Tax Return (ITR) Filing',
    desc: 'CA-assisted filing for freelancers, professionals, and businesses. Maximize deductions and avoid penalties.',
    icon: Landmark,
    price: 'Starts at ₹999'
  },
  {
    id: 5,
    category: 'accounting',
    title: 'Virtual CFO & Bookkeeping',
    desc: 'Monthly accounting, payroll management, and MIS reporting for growing startups and SMEs.',
    icon: Calculator,
    price: 'Custom'
  },
  {
    id: 6,
    category: 'compliance',
    title: 'ROC Annual Filing',
    desc: 'Mandatory annual compliance for Pvt Ltd companies. AOC-4, MGT-7, and director KYC managed end-to-end.',
    icon: Scale,
    price: '₹4,999'
  }
]

export default function FeaturedServices() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredServices = SERVICES.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.desc.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Find your service in seconds</h2>
            <p className={styles.subtitle}>Our CA-led expert solutions tailored for your business needs.</p>
          </div>
          
          <div className={styles.searchWrapper}>
            <Search size={20} className={styles.searchIcon} />
            <input 
              type="text" 
              placeholder="Search for GST, ITR, Company Registration..." 
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.categoryTabs}>
          {CATEGORIES.map(category => (
            <button
              key={category.id}
              className={`${styles.tabBtn} ${activeCategory === category.id ? styles.activeTab : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className={styles.servicesGrid}>
          {filteredServices.map((service, idx) => {
            const Icon = service.icon
            return (
              <div key={service.id} className={styles.serviceCard} style={{ animationDelay: `${idx * 0.05}s` }}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>
                    <Icon size={24} className={styles.cardIcon} />
                  </div>
                  <div className={styles.priceTag}>{service.price}</div>
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
                <button className={styles.cardBtn}>
                  Learn more <ArrowRight size={16} />
                </button>
              </div>
            )
          })}
        </div>
        
        {filteredServices.length === 0 && (
          <div className={styles.noResults}>
            <p>No services found matching your criteria.</p>
            <button className={styles.resetBtn} onClick={() => {setSearchQuery(''); setActiveCategory('all');}}>
              View all services
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
