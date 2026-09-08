import { PLACEHOLDERS } from '../servicesData'

export const monthlyBookkeepingDetails = {
  theme: "default",
  
  seo: {
    title: "Monthly Bookkeeping & Accounting Services | Taxpex",
    description: "Keep your books accurate and audit-ready. Cloud-based accounting, bank reconciliation, and financial reporting.",
  },

  hero: {
    headline: "Flawless Monthly Bookkeeping & Accounting.",
    subheadline: "Outsource your accounting to experts. We maintain your ledgers, reconcile banks, and ensure you're always ready for tax season.",
    whatHappensNext: "1. Connect Bank/Invoices → 2. Monthly Data Entry → 3. Reconciliation → 4. Monthly Reports"
  },

  deliverables: [
    "Recording of all sales and purchase invoices",
    "Expense categorization",
    "Monthly Bank & Credit Card Reconciliation",
    "Accounts Payable and Receivable tracking",
    "Monthly Profit & Loss (P&L) and Balance Sheet generation"
  ],

  timeline: [
    { title: "Onboarding", desc: "We set up your chart of accounts on a cloud accounting software." },
    { title: "Data Collection", desc: "You securely share your monthly bank statements and invoices." },
    { title: "Ledger Entry", desc: "Our accountants categorize every transaction accurately." },
    { title: "Reporting", desc: "Receive clean financial statements by the 10th of every month." }
  ],

  documents: [
    { name: "Bank Statements", desc: "For the reporting month" },
    { name: "Sales & Purchase Invoices", desc: "Soft copies or portal access" },
    { name: "Expense Receipts", desc: "For proper categorization" }
  ],

  yourOptions: {
    taxpex: [
      "Access to experienced, supervised accountants",
      "Cloud-based software integration",
      "No employee overhead (PF, leave, setup costs)"
    ],
    inHouse: [
      "High fixed salary cost",
      "Risk of data loss or sudden resignations",
      "May require separate CA oversight"
    ]
  },

  faqs: [
    { q: "Which accounting software do you use?", a: "We are flexible. Our team is proficient in Tally, Zoho Books, QuickBooks, and Xero." },
    { q: "Is my financial data secure?", a: "Absolutely. We follow strict data confidentiality protocols and bank-grade encryption for document sharing." }
  ],

  relatedServices: ["gst-filing", "virtual-cfo"]
}
