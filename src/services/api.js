/**
 * A local mock for API services to allow for clean UI abstraction.
 * This can be replaced with real fetch/axios calls to a backend later.
 */

export const submitContactForm = async (formData) => {
  return new Promise((resolve, reject) => {
    // Simulate network latency
    setTimeout(() => {
      // Simulate basic server-side validation failure randomly for testing if needed
      // but for now, we'll assume it succeeds.
      console.log('API Call: submitContactForm payload:', formData)
      
      resolve({
        success: true,
        message: 'Form submitted successfully.',
        data: {
          id: Math.random().toString(36).substring(7),
          receivedAt: new Date().toISOString()
        }
      })
    }, 800)
  })
}

/**
 * Placeholder for analytics events.
 * Do not add third-party providers yet.
 */
export const logEvent = (eventName, eventData = {}) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[Analytics Event] ${eventName}:`, eventData)
  }
}
