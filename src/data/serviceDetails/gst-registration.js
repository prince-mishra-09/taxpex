import { PLACEHOLDERS } from '../servicesData'

export const gstRegistrationDetails = {
  theme: "compliance",
  
  seo: {
    title: "GST Registration Services in India | Taxpex",
    description: "Get your business GSTIN legally and quickly. Expert-assisted GST registration with Taxpex. Transparent pricing, no hidden fees.",
  },

  hero: {
    headline: "Get your GST Registration accurately and start billing.",
    subheadline: "End-to-end assistance by compliance experts. We handle the paperwork, you focus on business.",
    whatHappensNext: "1. Upload Docs → 2. We File → 3. Get ARN → 4. Receive GSTIN"
  },

  deliverables: [
    "Government ARN (Application Reference Number)",
    "Official GST Certificate (GSTIN)",
    "Login credentials for the GST Portal",
    "Post-registration compliance advisory session"
  ],

  timeline: [
    { title: "Document Collection", desc: "Upload PAN, Aadhar, and business proof via our secure portal." },
    { title: "Application Drafting", desc: "Our team verifies and drafts the application to prevent rejections." },
    { title: "Filing & ARN Generation", desc: "Application filed on the GST portal. ARN shared with you immediately." },
    { title: "GSTIN Issuance", desc: "Government officer approves and issues your unique GST number." }
  ],

  documents: [
    { name: "PAN Card", desc: "Of the proprietor/directors" },
    { name: "Aadhar Card", desc: "For e-verification" },
    { name: "Business Proof", desc: "Rent agreement or electricity bill" },
    { name: "Bank Details", desc: "Cancelled cheque or statement" }
  ],

  yourOptions: {
    taxpex: [
      "Expert pre-verification to prevent rejection",
      "End-to-end tracking",
      "Post-registration advisory included"
    ],
    diy: [
      "High chance of rejection due to minor errors",
      "No guidance on HSN/SAC codes",
      "Time-consuming"
    ]
  },

  risks: [
    { title: "Incorrect Jurisdiction", desc: "Filing under the wrong ward can delay approval by weeks." },
    { title: "Invalid Address Proof", desc: "The #1 reason for GST rejection. We ensure your NOCs are perfectly formatted." },
    { title: "Wrong HSN Codes", desc: "Selecting wrong product codes can lead to incorrect tax rates and future notices." }
  ],

  faqs: [
    { q: "Is GST mandatory for my business?", a: "Generally, yes, if your turnover exceeds ₹40 Lakhs (₹20 Lakhs for services), or if you sell online." },
    { q: "How long does the government take to approve?", a: PLACEHOLDERS.TIMELINE },
    { q: "Do I need a commercial space for GST?", a: "No, you can register GST from your residential address with proper NOC." }
  ],

  relatedServices: ["gst-filing", "monthly-bookkeeping"]
}
