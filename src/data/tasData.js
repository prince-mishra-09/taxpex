export const tasData = {
  hero: {
    headline: "Your business numbers. One calm dashboard.",
    subheadline: "Stop chasing invoices, reconciling bank statements, and wondering about your GST liability. TAS unifies your entire financial stack."
  },

  features: [
    {
      id: "billing",
      title: "GST Billing",
      desc: "Create E-invoices in seconds. Track views, payments, and overdue amounts automatically."
    },
    {
      id: "accounting",
      title: "Real-time Accounting",
      desc: "Bank sync and automated reconciliation means your books are always closed."
    },
    {
      id: "bookkeeping",
      title: "Expense Tracking",
      desc: "Snap a photo of a receipt. Our AI extracts the data and matches it to your bank feed."
    },
    {
      id: "tds",
      title: "TDS & Compliance",
      desc: "Auto-calculate TDS on vendor payments and file returns directly from the dashboard."
    },
    {
      id: "reports",
      title: "Financial Reports",
      desc: "P&L, Balance Sheet, and Cash Flow statements generated instantly, anytime."
    },
    {
      id: "advisory",
      title: "CA Advisory",
      desc: "Your data is instantly available to our CA partners for real-time strategic advice."
    }
  ],

  pipeline: [
    { step: 1, title: "Invoice Generated", desc: "You send a GST invoice via TAS." },
    { step: 2, title: "Payment Received", desc: "Client pays via payment gateway." },
    { step: 3, title: "Ledger Updated", desc: "Bank feed syncs and matches transaction." },
    { step: 4, title: "GST Computed", desc: "Tax liability is automatically calculated." },
    { step: 5, title: "Insight Delivered", desc: "Real-time P&L reflects the growth." }
  ],

  personas: [
    {
      id: "founder",
      title: "For Founders",
      headline: "Know your runway at a glance.",
      points: ["Real-time cash flow visibility", "No more asking 'what is my profit?'", "Investor-ready reports in one click"]
    },
    {
      id: "finance",
      title: "For Finance Managers",
      headline: "Automate the busywork.",
      points: ["Bulk E-invoicing & E-way bills", "Automated bank reconciliation", "Vendor payment scheduling"]
    },
    {
      id: "ca",
      title: "For CAs",
      headline: "Review, don't data-entry.",
      points: ["Zero data collection friction", "Pre-computed tax liabilities", "Direct filing integrations"]
    }
  ],

  pricing: [
    {
      tier: "Starter",
      price: "₹1,999",
      period: "/month",
      desc: "For freelancers and early-stage startups.",
      features: ["Up to 50 invoices/month", "Basic Bookkeeping", "GST Filing", "Email Support"],
      highlight: false
    },
    {
      tier: "Growth",
      price: "₹4,999",
      period: "/month",
      desc: "For scaling businesses with complex compliance.",
      features: ["Unlimited invoices", "Advanced Accounting", "TDS & Payroll", "Dedicated CA Partner"],
      highlight: true
    },
    {
      tier: "Enterprise",
      price: "Custom",
      period: "",
      desc: "For large operations needing custom workflows.",
      features: ["ERP Integrations", "Virtual CFO Services", "Audit Support", "24/7 Phone Support"],
      highlight: false
    }
  ]
}
