import { PLACEHOLDERS } from '../servicesData'

export const gstFilingDetails = {
  theme: "default",
  
  seo: {
    title: "Monthly GST Return Filing Services | Taxpex",
    description: "Never miss a deadline. Accurate GSTR-1 and GSTR-3B filing to avoid penalties and claim maximum Input Tax Credit (ITC).",
  },

  hero: {
    headline: "Accurate, on-time GST Return Filing.",
    subheadline: "Avoid late fees and mismatch notices. We reconcile your sales and purchases to maximize your Input Tax Credit safely.",
    whatHappensNext: "1. Data Collection → 2. ITC Reconciliation → 3. GSTR-1 Filing → 4. GSTR-3B Filing"
  },

  deliverables: [
    "Monthly/Quarterly GSTR-1 Filing (Outward Supplies)",
    "Monthly GSTR-3B Filing (Summary and Tax Payment)",
    "GSTR-2A/2B vs Purchase Register Reconciliation",
    "Challan generation for tax payment",
    "Notification of missing ITC from vendors"
  ],

  timeline: [
    { title: "Data Collection (1st - 5th)", desc: "Share your sales and purchase invoices for the previous month." },
    { title: "Reconciliation (6th - 9th)", desc: "We match your purchases with GSTR-2B to calculate eligible ITC." },
    { title: "GSTR-1 Filing (11th)", desc: "Outward supply details filed. Your buyers get the ITC." },
    { title: "GSTR-3B Filing (20th)", desc: "Final tax liability calculated, challan generated, and return filed." }
  ],

  documents: [
    { name: "Sales Data", desc: "Invoices, credit/debit notes issued" },
    { name: "Purchase Data", desc: "Invoices from vendors to claim ITC" },
    { name: "Bank Statements", desc: "For reconciliation purposes" }
  ],

  risks: [
    { title: "Claiming Fake/Ineligible ITC", desc: "Claiming ITC without it reflecting in GSTR-2B will result in automatic demand notices and interest penalties." },
    { title: "Late Fees", desc: "Missing deadlines attracts late fees of ₹50/day and blocks your e-way bill generation." }
  ],

  faqs: [
    { q: "What happens if I have no sales in a month?", a: "You still must file a 'Nil Return'. Failing to do so attracts late fees." },
    { q: "What is the QRMP scheme?", a: "Quarterly Return Monthly Payment. Eligible small taxpayers can file returns quarterly but must pay taxes monthly." }
  ],

  relatedServices: ["gst-registration", "monthly-bookkeeping"]
}
