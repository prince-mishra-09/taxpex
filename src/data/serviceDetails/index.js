import { SERVICES } from '../servicesData'
import { gstRegistrationDetails } from './gst-registration'
import { taxNoticeReplyDetails } from './tax-notice-reply'
import { virtualCfoDetails } from './virtual-cfo'
import { pvtLtdIncDetails } from './private-limited-incorporation'
import { itrFilingSalariedDetails } from './itr-filing-salaried'
import { llpRegistrationDetails } from './llp-registration'
import { startupIndiaDetails } from './startup-india-registration'
import { monthlyBookkeepingDetails } from './monthly-bookkeeping'
import { trademarkRegistrationDetails } from './trademark-registration'
import { gstFilingDetails } from './gst-filing'
import { tdsReturnFilingDetails } from './tds-return-filing'
import { payrollProcessingDetails } from './payroll-processing'

// Map slugs to their specific deep data
const detailsMap = {
  'gst-registration': gstRegistrationDetails,
  'tax-notice-reply': taxNoticeReplyDetails,
  'virtual-cfo': virtualCfoDetails,
  'private-limited-incorporation': pvtLtdIncDetails,
  'itr-filing-salaried': itrFilingSalariedDetails,
  'llp-registration': llpRegistrationDetails,
  'startup-india-registration': startupIndiaDetails,
  'monthly-bookkeeping': monthlyBookkeepingDetails,
  'trademark-registration': trademarkRegistrationDetails,
  'gst-filing': gstFilingDetails,
  'tds-return-filing': tdsReturnFilingDetails,
  'payroll-processing': payrollProcessingDetails
}

export function getServiceBySlug(slug) {
  const baseService = SERVICES.find(s => s.slug === slug)
  if (!baseService) return null

  const deepDetails = detailsMap[slug] || {
    theme: "default",
    seo: {
      title: `${baseService.name} | Taxpex`,
      description: baseService.outcome
    },
    hero: {
      headline: baseService.name,
      subheadline: baseService.outcome,
      whatHappensNext: "1. Sign up → 2. Upload Docs → 3. Processing → 4. Delivery"
    }
  }

  return {
    ...baseService,
    ...deepDetails
  }
}
