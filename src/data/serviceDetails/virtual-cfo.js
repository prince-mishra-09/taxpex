import { PLACEHOLDERS } from '../servicesData'

export const virtualCfoDetails = {
  theme: "advisory",
  
  seo: {
    title: "Virtual CFO Services for Startups & SMEs | Taxpex",
    description: "Strategic financial leadership, MIS reporting, and fundraising support for growing businesses. Premium Virtual CFO services.",
  },

  hero: {
    headline: "Strategic financial leadership to scale your business.",
    subheadline: "Get the expertise of a Chief Financial Officer at a fraction of the cost. Focused on growth, cashflow, and compliance.",
    whatHappensNext: "1. Consultation → 2. Financial Audit → 3. Goal Setting → 4. Monthly Strategy"
  },

  deliverables: [
    "Monthly MIS (Management Information System) Reports",
    "Cashflow forecasting and runway analysis",
    "Unit economics and profitability modeling",
    "Fundraising support (Pitch deck financials)",
    "Direct strategic advisory sessions"
  ],

  timeline: [
    { title: "Discovery", desc: "Deep dive into your current business model, goals, and bottlenecks." },
    { title: "Health Check", desc: "Audit of current accounting practices and compliance status." },
    { title: "System Setup", desc: "Implementing automated MIS and KPI tracking." },
    { title: "Ongoing Strategy", desc: "Monthly board-level reviews to drive financial decisions." }
  ],

  documents: [
    { name: "Historical Financials", desc: "Past P&L and Balance Sheets" },
    { name: "Current Cap Table", desc: "Details of equity distribution" },
    { name: "Business Plan", desc: "Current projections and targets" }
  ],

  yourOptions: {
    taxpex: [
      "Access to a multi-disciplinary team of experts",
      "Scalable engagement (pay for what you need)",
      "Unbiased, data-driven advice"
    ],
    inHouse: [
      "High fixed cost (₹15L+ per annum)",
      "Risk of single point of failure",
      "May lack diverse industry exposure"
    ]
  },

  faqs: [
    { q: "When should a startup hire a Virtual CFO?", a: "Typically when revenue crosses ₹1Cr, or when you are preparing for institutional fundraising." },
    { q: "Is this replacing my accountant?", a: "No. Your accountant records history. A CFO predicts and shapes the future. We work alongside your accounting team." }
  ],

  relatedServices: ["monthly-bookkeeping", "payroll-processing"]
}
