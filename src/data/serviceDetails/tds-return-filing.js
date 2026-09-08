import { PLACEHOLDERS } from '../servicesData'

export const tdsReturnFilingDetails = {
  theme: "default",
  
  seo: {
    title: "TDS Return Filing Services | Taxpex",
    description: "Ensure timely calculation, deduction, and quarterly filing of TDS returns (Form 24Q, 26Q) without errors.",
  },

  hero: {
    headline: "Flawless Quarterly TDS Return Filing.",
    subheadline: "Avoid severe ₹200/day late fees. We calculate tax deductions accurately, generate challans, and file Form 24Q/26Q on time.",
    whatHappensNext: "1. Data Collection → 2. Calculation → 3. Challan Generation → 4. FVU & Filing"
  },

  deliverables: [
    "Calculation of TDS to be deducted",
    "Generation of TDS payment challans (ITNS 281)",
    "Filing of Form 24Q (Salaries) or Form 26Q (Non-Salaries)",
    "Generation of Form 16 / 16A for deductees",
    "Correction statement filing (if needed)"
  ],

  timeline: [
    { title: "Monthly Deduction", desc: "You deduct TDS from payments and deposit it by the 7th of the next month." },
    { title: "Data Prep", desc: "At quarter-end, we compile PAN details and payment data of all vendors/employees." },
    { title: "Validation", desc: "Data is run through the FVU (File Validation Utility) tool to catch errors." },
    { title: "Filing", desc: "Return is uploaded to the TRACES portal before the 31st." }
  ],

  documents: [
    { name: "TAN Certificate", desc: "Tax Deduction Account Number is mandatory" },
    { name: "Payment Details", desc: "Ledger showing vendor payments, dates, and amounts" },
    { name: "Deductee PAN", desc: "PAN cards of employees/vendors. Missing PAN means 20% higher deduction." },
    { name: "Challan Copies", desc: "Proofs of monthly TDS deposits made" }
  ],

  risks: [
    { title: "Late Filing Fees", desc: "Under Section 234E, a strict penalty of ₹200 per day is levied until the return is filed." },
    { title: "Incorrect PAN", desc: "Filing with a wrong vendor PAN invalidates their credit, causing vendor disputes." }
  ],

  faqs: [
    { q: "Is TAN mandatory for deducting TDS?", a: "Yes, you cannot deduct or deposit TDS without a valid TAN (except in a few specific property transactions)." },
    { q: "When do I need to issue Form 16/16A?", a: "Form 16/16A certificates must be issued to deductees within 15 days of filing the quarterly return." }
  ],

  relatedServices: ["payroll-processing", "monthly-bookkeeping"]
}
