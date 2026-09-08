import { PLACEHOLDERS } from '../servicesData'

export const startupIndiaDetails = {
  theme: "default",
  
  seo: {
    title: "DPIIT Startup India Registration | Taxpex",
    description: "Get recognized by DPIIT to unlock tax holidays, angel tax exemptions, and government funding for your startup.",
  },

  hero: {
    headline: "Unlock tax benefits with DPIIT Startup India Recognition.",
    subheadline: "Get officially recognized by the government to claim 3-year tax holidays, fast-track IP registration, and angel tax exemptions.",
    whatHappensNext: "1. Eligibility Check → 2. Pitch Deck Review → 3. Application Filing → 4. DPIIT Certificate"
  },

  deliverables: [
    "Thorough eligibility assessment",
    "Review of your startup pitch deck/business model",
    "Filing of the DPIIT Recognition application",
    "Follow-up with the Ministry",
    "Official Startup India Certificate"
  ],

  timeline: [
    { title: "Review & Prep", desc: "We review your company details, website, and pitch deck to ensure it highlights innovation." },
    { title: "Application Drafting", desc: "Creating a compelling write-up on how your startup is innovative or scalable." },
    { title: "Submission", desc: "Filing on the Startup India portal." },
    { title: "Certificate Issuance", desc: "DPIIT reviews the application and issues the certificate." }
  ],

  documents: [
    { name: "Certificate of Incorporation", desc: "Company must be less than 10 years old" },
    { name: "Pitch Deck / Website link", desc: "Explaining the product/service and its innovation" },
    { name: "Director Details", desc: "Basic KYC of the founders" }
  ],

  risks: [
    { title: "Failing the 'Innovation' Test", desc: "Applications are often rejected if the write-up doesn't clearly demonstrate how the product is scalable or innovative. We know exactly what DPIIT looks for." }
  ],

  faqs: [
    { q: "Can a proprietorship apply for Startup India?", a: "No. Only Private Limited Companies, Registered Partnerships, and LLPs are eligible." },
    { q: "Does the certificate automatically grant a tax holiday?", a: "No. The DPIIT certificate is the first step. To get the 3-year income tax exemption (Section 80IAC), an additional application to the Inter-Ministerial Board (IMB) is required." }
  ],

  relatedServices: ["private-limited-incorporation", "trademark-registration"]
}
