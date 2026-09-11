export const categories = [
  "All",
  "GST",
  "Income Tax",
  "TDS/TCS",
  "Business",
  "Salary",
  "Loans",
  "Investment",
  "HSN/SAC"
];

export const toolsData = [
  {
    id: "gst-calculator",
    slug: "gst-calculator",
    name: "GST Calculator",
    category: "GST",
    benefit: "Add or remove GST from any amount instantly.",
    timeToResult: "< 1 min",
    cta: "Calculate",
    tags: ["tax", "goods and services", "invoice", "billing"],
    status: "live",
    isPopular: true,
    recommendService: {
      name: "GST Registration & Return Filing",
      link: "/services/gst-registration"
    }
  },
  {
    id: "income-tax-calculator",
    slug: "income-tax-calculator",
    name: "Income Tax Calculator",
    category: "Income Tax",
    benefit: "Estimate your tax liability under old and new regimes.",
    timeToResult: "3 mins",
    cta: "Estimate",
    tags: ["itr", "salary", "deductions", "regime"],
    status: "live",
    isPopular: true,
    recommendService: {
      name: "ITR Filing & Tax Planning",
      link: "/services/itr-filing"
    }
  },
  {
    id: "emi-calculator",
    slug: "emi-calculator",
    name: "EMI Calculator",
    category: "Loans",
    benefit: "Plan your loan repayment schedule.",
    timeToResult: "< 1 min",
    cta: "Calculate",
    tags: ["home loan", "car loan", "personal loan", "interest"],
    status: "live",
    isPopular: true,
    recommendService: {
      name: "Project Finance Advisory",
      link: "/contact"
    }
  },
  {
    id: "sip-calculator",
    slug: "sip-calculator",
    name: "SIP Calculator",
    category: "Investment",
    benefit: "Calculate wealth creation through mutual funds.",
    timeToResult: "< 1 min",
    cta: "Estimate",
    tags: ["mutual funds", "returns", "cagr", "future value"],
    status: "live",
    isPopular: true,
    recommendService: {
      name: "Wealth Advisory",
      link: "/contact"
    }
  },
  {
    id: "in-hand-salary",
    slug: "in-hand-salary",
    name: "In-Hand Salary Calculator",
    category: "Salary",
    benefit: "Know your actual take-home pay after PF and TDS.",
    timeToResult: "2 mins",
    cta: "Calculate",
    tags: ["ctc", "take home", "pf", "epf", "net salary"],
    status: "live",
    isPopular: false,
    recommendService: {
      name: "Individual Tax Planning",
      link: "/services/itr-filing"
    }
  },
  {
    id: "hra-calculator",
    slug: "hra-calculator",
    name: "HRA Exemption Calculator",
    category: "Salary",
    benefit: "Find out your maximum tax-free rent allowance.",
    timeToResult: "1 min",
    cta: "Calculate",
    tags: ["rent", "house rent allowance", "tax deduction"],
    status: "live",
    isPopular: false,
    recommendService: {
      name: "Tax Planning Services",
      link: "/services/itr-filing"
    }
  },
  {
    id: "hsn-sac-finder",
    slug: "hsn-sac-finder",
    name: "HSN/SAC Code Finder",
    category: "HSN/SAC",
    benefit: "Search standard codes and tax rates for your products.",
    timeToResult: "< 1 min",
    cta: "Find",
    tags: ["product code", "service code", "gst rate"],
    status: "live",
    isPopular: true,
    recommendService: {
      name: "GST Advisory",
      link: "/services/gst-registration"
    }
  },
  {
    id: "cagr-calculator",
    slug: "cagr-calculator",
    name: "CAGR Calculator",
    category: "Investment",
    benefit: "Calculate the compounded annual growth rate.",
    timeToResult: "< 1 min",
    cta: "Compare",
    tags: ["growth", "annual return", "portfolio"],
    status: "live",
    isPopular: false,
    recommendService: {
      name: "Business Valuation",
      link: "/contact"
    }
  },
  {
    id: "startup-valuation",
    slug: "startup-valuation",
    name: "Startup Valuation Tool",
    category: "Business",
    benefit: "Estimate your company's worth using multiple methods.",
    timeToResult: "5 mins",
    cta: "Estimate",
    tags: ["equity", "funding", "dcf", "vc"],
    status: "live",
    isPopular: false,
    recommendService: {
      name: "Virtual CFO & Advisory",
      link: "/services/virtual-cfo"
    }
  }
];
