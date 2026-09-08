import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, MessageCircle, Phone, UserCircle, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { submitContactForm, logEvent } from '../services/api'
import styles from './Contact.module.css'

// Configuration for steps
const STEP_GOALS = [
  { id: 'start_business', label: 'Start a Business' },
  { id: 'file_taxes', label: 'File Taxes' },
  { id: 'manage_compliance', label: 'Manage GST & Compliance' },
  { id: 'bookkeeping', label: 'Accounting & Bookkeeping' },
  { id: 'not_sure', label: "I'm not sure" }
]

const STEP_AUDIENCES = [
  { id: 'individual', label: 'Individual' },
  { id: 'freelancer', label: 'Freelancer / Creator' },
  { id: 'startup', label: 'Startup' },
  { id: 'smb', label: 'Small / Medium Business' },
  { id: 'company', label: 'Company / LLP' },
  { id: 'other', label: 'Other' }
]

export default function Contact() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    goal: '',
    audience: '',
    service: '',
    name: '',
    phone: '',
    whatsapp: true
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    logEvent('step_started', { step })
  }, [step])

  const handleTileSelect = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Auto-advance
    setTimeout(() => {
      setStep(prev => prev + 1)
      logEvent('step_completed', { step, field, value })
    }, 200)
  }

  const goBack = () => {
    if (step > 1) setStep(prev => prev - 1)
  }

  const validatePhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/
    return phoneRegex.test(phone)
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    // Clear error on type
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validation
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      logEvent('form_error', { errors: newErrors })
      return
    }

    setIsSubmitting(true)
    
    try {
      const response = await submitContactForm(formData)
      if (response.success) {
        setIsSuccess(true)
        logEvent('form_submitted', { formData })
      }
    } catch (err) {
      logEvent('form_error', { error: 'Submission failed' })
      setErrors({ form: 'Something went wrong. Please try again or use WhatsApp.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  // --- Dynamic Content Rendering ---

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className={styles.stepContent}>
            <div className={styles.stepIndicator}>Step 1 of 3</div>
            <h2 className={styles.stepQuestion}>What do you need help with?</h2>
            <div className={styles.tilesGrid}>
              {STEP_GOALS.map(goal => (
                <button
                  key={goal.id}
                  className={styles.tile}
                  data-active={formData.goal === goal.id}
                  onClick={() => handleTileSelect('goal', goal.id)}
                >
                  <span className={styles.tileTitle}>{goal.label}</span>
                </button>
              ))}
            </div>
          </div>
        )
      case 2:
        return (
          <div className={styles.stepContent}>
            <div className={styles.stepIndicator}>
              <button className={styles.backBtn} onClick={goBack} aria-label="Go back">
                <ArrowLeft size={16} />
              </button>
              Step 2 of 3
            </div>
            <h2 className={styles.stepQuestion}>Who is this for?</h2>
            <div className={styles.tilesGrid}>
              {STEP_AUDIENCES.map(aud => (
                <button
                  key={aud.id}
                  className={styles.tile}
                  data-active={formData.audience === aud.id}
                  onClick={() => handleTileSelect('audience', aud.id)}
                >
                  <span className={styles.tileTitle}>{aud.label}</span>
                </button>
              ))}
            </div>
          </div>
        )
      case 3:
        return (
          <div className={styles.stepContent}>
            <div className={styles.stepIndicator}>
              <button className={styles.backBtn} onClick={goBack} aria-label="Go back">
                <ArrowLeft size={16} />
              </button>
              Final Step
            </div>
            <h2 className={styles.stepQuestion}>Where should we reach you?</h2>
            
            <form onSubmit={handleSubmit} className={styles.formFields}>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`${styles.input} ${errors.name ? styles.error : ''}`}
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Rahul Sharma"
                />
                {errors.name && <span className={styles.errorText}>{errors.name}</span>}
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={`${styles.input} ${errors.phone ? styles.error : ''}`}
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="98765 43210"
                  maxLength="10"
                />
                {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
              </div>

              <label className={styles.checkboxGroup}>
                <input
                  type="checkbox"
                  name="whatsapp"
                  className={styles.checkbox}
                  checked={formData.whatsapp}
                  onChange={handleInputChange}
                />
                <span className={styles.checkboxLabel}>Contact me via WhatsApp</span>
              </label>

              {errors.form && <div className={styles.errorText}>{errors.form}</div>}

              <div className={styles.submitWrapper}>
                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Request Consultation'}
                </button>
                <p className={styles.etaText}>We'll review your request and get back to you shortly.</p>
              </div>
            </form>
          </div>
        )
      default: return null
    }
  }

  return (
    <div className={styles.contactWrapper}>
      <Helmet>
        <title>Contact Us | Taxpex</title>
        <meta name="description" content="Get expert CA help for your business." />
      </Helmet>

      <div className="container">
        <div className={styles.layoutGrid}>
          
          {/* Left Column: Form Flow */}
          <div className={styles.leftCol}>
            <div className={styles.formHeader}>
              <h1 className={styles.title}>Tell us what you need.</h1>
              <p className={styles.subtitle}>We'll tell you exactly what to do next. Fast, secure, and CA-verified.</p>
              
              {!isSuccess && (
                <div className={styles.alternativesRow}>
                  <a href="https://wa.me/919876543210" className={styles.altCard} onClick={() => logEvent('whatsapp_clicked')}>
                    <span className={styles.altCardLabel}>Prefer WhatsApp?</span>
                    <span className={styles.altCardAction}>
                      <MessageCircle size={18} className={styles.whatsappIcon} /> Message Us
                    </span>
                  </a>
                  <a href="tel:+919876543210" className={styles.altCard} onClick={() => logEvent('call_clicked')}>
                    <span className={styles.altCardLabel}>Prefer a Call?</span>
                    <span className={styles.altCardAction}>
                      <Phone size={18} className={styles.phoneIcon} /> Book CA Call
                    </span>
                  </a>
                </div>
              )}
            </div>

            <div className={styles.formContainer}>
              {isSuccess ? (
                <div className={styles.successState}>
                  <CheckCircle2 size={64} className={styles.successIcon} />
                  <h2 className={styles.successTitle}>Request Received</h2>
                  <p className={styles.successDesc}>
                    Thanks for reaching out, {formData.name.split(' ')[0]}. We've successfully logged your request.
                  </p>
                  
                  <div className={styles.successSteps}>
                    <h4>What happens next?</h4>
                    <ul>
                      <li><CheckCircle2 size={16} /> A Taxpex expert will review your requirement.</li>
                      <li><CheckCircle2 size={16} /> You will receive a {formData.whatsapp ? 'WhatsApp message' : 'call'} on +91 {formData.phone} shortly.</li>
                      <li><CheckCircle2 size={16} /> We'll provide a clear action plan and pricing.</li>
                    </ul>
                  </div>
                </div>
              ) : (
                renderStep()
              )}
            </div>
          </div>

          {/* Right Column: Trust Signals */}
          <div className={styles.rightCol}>
            <div className={styles.trustPanel}>
              <div className={styles.trustList}>
                <div className={styles.trustItem}>
                  <UserCircle size={24} className={styles.trustIcon} />
                  <div className={styles.trustContent}>
                    <h4>Senior CA Assigned</h4>
                    <p>Every consultation is vetted by qualified Chartered Accountants.</p>
                  </div>
                </div>
                <div className={styles.trustItem}>
                  <MapPin size={24} className={styles.trustIcon} />
                  <div className={styles.trustContent}>
                    <h4>Pan-India Service</h4>
                    <p>We handle compliances seamlessly across all Indian states.</p>
                  </div>
                </div>
                <div className={styles.trustItem}>
                  <ShieldCheck size={24} className={styles.trustIcon} />
                  <div className={styles.trustContent}>
                    <h4>Secure & Confidential</h4>
                    <p>Your business data is strictly confidential. No spam, ever.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      {!isSuccess && (
        <div className={styles.mobileStickyCta}>
          <a href="https://wa.me/919876543210" className={`${styles.mobileBtn} ${styles.mobileWhatsApp}`} onClick={() => logEvent('whatsapp_clicked')}>
            <MessageCircle size={18} /> WhatsApp
          </a>
          <a href="tel:+919876543210" className={`${styles.mobileBtn} ${styles.mobileCall}`} onClick={() => logEvent('call_clicked')}>
            <Phone size={18} /> Call
          </a>
        </div>
      )}
    </div>
  )
}
