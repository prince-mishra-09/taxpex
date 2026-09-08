export const CATEGORIES = [
  'All',
  'Tax',
  'GST',
  'Business Setup',
  'Compliance',
  'Accounting',
  'Licences',
  'Payroll',
  'Finance',
  'Advisory'
];

export const AUDIENCES = [
  'All',
  'Founders',
  'Freelancers',
  'Creators',
  'E-commerce',
  'SME'
];

export const PRICE_RANGES = [
  { id: 'all', label: 'Any Price' },
  { id: 'under-1k', label: 'Under ₹1k' },
  { id: '1k-2.5k', label: '₹1k – ₹2.5k' },
  { id: '2.5k-5k', label: '₹2.5k – ₹5k' },
  { id: '5k-plus', label: '₹5k+' }
];

export const URGENCY_RANGES = [
  { id: 'all', label: 'Any Timeline' },
  { id: 'need-now', label: 'Need it now' },
  { id: 'within-week', label: 'Within a week' },
  { id: 'no-rush', label: 'No rush' }
];

// Placeholder constants as requested
export const PLACEHOLDERS = {
  PRICE: "[Price Pending]",
  TIMELINE: "[Timeline Pending]",
  VERIFIED: "[Verified Status Pending]"
};

export const SERVICES = [
  {
    id: "gst-reg",
    slug: "gst-registration",
    name: "GST Registration",
    aliases: ["gstin", "tax id", "indirect tax", "gst registration"],
    category: "GST",
    outcome: "Get your GSTIN issued legally and quickly to start billing.",
    startingPriceLabel: PLACEHOLDERS.PRICE,
    timelineLabel: PLACEHOLDERS.TIMELINE,
    priceRange: "under-1k",
    urgencyRange: "within-week",
    bestFor: ["Founders", "Freelancers", "SME", "E-commerce"],
    caVerifiedLabel: PLACEHOLDERS.VERIFIED,
    featured: true
  },
  {
    id: "pvt-ltd-inc",
    slug: "private-limited-incorporation",
    name: "Private Limited Incorporation",
    aliases: ["pvt ltd", "company registration", "startup registration", "incorporation"],
    category: "Business Setup",
    outcome: "Register your company with MCA and get your Certificate of Incorporation.",
    startingPriceLabel: PLACEHOLDERS.PRICE,
    timelineLabel: PLACEHOLDERS.TIMELINE,
    priceRange: "5k-plus",
    urgencyRange: "no-rush",
    bestFor: ["Founders"],
    caVerifiedLabel: PLACEHOLDERS.VERIFIED,
    featured: true
  },
  {
    id: "itr-filing-salaried",
    slug: "itr-filing-salaried",
    name: "ITR Filing for Salaried",
    aliases: ["income tax", "itr", "tax return", "salary tax"],
    category: "Tax",
    outcome: "File your annual income tax return accurately and maximize deductions.",
    startingPriceLabel: PLACEHOLDERS.PRICE,
    timelineLabel: PLACEHOLDERS.TIMELINE,
    priceRange: "under-1k",
    urgencyRange: "need-now",
    bestFor: ["Freelancers", "Creators"],
    caVerifiedLabel: PLACEHOLDERS.VERIFIED,
    featured: false
  },
  {
    id: "llp-reg",
    slug: "llp-registration",
    name: "LLP Registration",
    aliases: ["llp", "limited liability partnership", "firm registration"],
    category: "Business Setup",
    outcome: "Set up a Limited Liability Partnership with MCA compliance.",
    startingPriceLabel: PLACEHOLDERS.PRICE,
    timelineLabel: PLACEHOLDERS.TIMELINE,
    priceRange: "2.5k-5k",
    urgencyRange: "within-week",
    bestFor: ["Founders", "SME"],
    caVerifiedLabel: PLACEHOLDERS.VERIFIED,
    featured: false
  },
  {
    id: "startup-india",
    slug: "startup-india-registration",
    name: "DPIIT Startup India Registration",
    aliases: ["dpiit", "startup india", "tax exemption", "angel tax"],
    category: "Licences",
    outcome: "Get recognized by DPIIT to unlock 3-year tax holidays and angel tax exemptions.",
    startingPriceLabel: PLACEHOLDERS.PRICE,
    timelineLabel: PLACEHOLDERS.TIMELINE,
    priceRange: "5k-plus",
    urgencyRange: "no-rush",
    bestFor: ["Founders"],
    caVerifiedLabel: PLACEHOLDERS.VERIFIED,
    featured: true
  },
  {
    id: "monthly-bookkeeping",
    slug: "monthly-bookkeeping",
    name: "Monthly Bookkeeping & Accounting",
    aliases: ["bookkeeping", "accounting", "ledger", "tally", "zoho"],
    category: "Accounting",
    outcome: "Maintain accurate ledgers, reconcile banks, and keep your books audit-ready.",
    startingPriceLabel: PLACEHOLDERS.PRICE,
    timelineLabel: PLACEHOLDERS.TIMELINE,
    priceRange: "1k-2.5k",
    urgencyRange: "within-week",
    bestFor: ["SME", "E-commerce", "Founders"],
    caVerifiedLabel: PLACEHOLDERS.VERIFIED,
    featured: true
  },
  {
    id: "trademark",
    slug: "trademark-registration",
    name: "Trademark Registration",
    aliases: ["tm", "brand registration", "ip", "intellectual property", "logo registration"],
    category: "Licences",
    outcome: "Protect your brand name and logo legally across India.",
    startingPriceLabel: PLACEHOLDERS.PRICE,
    timelineLabel: PLACEHOLDERS.TIMELINE,
    priceRange: "5k-plus",
    urgencyRange: "no-rush",
    bestFor: ["Founders", "E-commerce", "Creators"],
    caVerifiedLabel: PLACEHOLDERS.VERIFIED,
    featured: true
  },
  {
    id: "gst-filing",
    slug: "gst-filing",
    name: "Monthly GST Filing",
    aliases: ["gstr 1", "gstr 3b", "gst returns", "gst filing"],
    category: "GST",
    outcome: "File your GSTR-1 and GSTR-3B on time to avoid penalties.",
    startingPriceLabel: PLACEHOLDERS.PRICE,
    timelineLabel: PLACEHOLDERS.TIMELINE,
    priceRange: "1k-2.5k",
    urgencyRange: "need-now",
    bestFor: ["SME", "E-commerce", "Founders", "Freelancers"],
    caVerifiedLabel: PLACEHOLDERS.VERIFIED,
    featured: false
  },
  {
    id: "tds-return",
    slug: "tds-return-filing",
    name: "TDS Return Filing",
    aliases: ["tds", "tax deducted at source", "quarterly return"],
    category: "Compliance",
    outcome: "Calculate, deposit, and file quarterly TDS returns effortlessly.",
    startingPriceLabel: PLACEHOLDERS.PRICE,
    timelineLabel: PLACEHOLDERS.TIMELINE,
    priceRange: "2.5k-5k",
    urgencyRange: "within-week",
    bestFor: ["SME", "Founders"],
    caVerifiedLabel: PLACEHOLDERS.VERIFIED,
    featured: false
  },
  {
    id: "payroll-processing",
    slug: "payroll-processing",
    name: "Payroll & HR Compliance",
    aliases: ["salary", "pf", "esi", "pt", "payslips"],
    category: "Payroll",
    outcome: "Automate salary calculation, payslips, and PF/ESI contributions.",
    startingPriceLabel: PLACEHOLDERS.PRICE,
    timelineLabel: PLACEHOLDERS.TIMELINE,
    priceRange: "5k-plus",
    urgencyRange: "within-week",
    bestFor: ["SME", "Founders"],
    caVerifiedLabel: PLACEHOLDERS.VERIFIED,
    featured: false
  },
  {
    id: "virtual-cfo",
    slug: "virtual-cfo",
    name: "Virtual CFO Services",
    aliases: ["cfo", "financial modeling", "fundraising", "mis"],
    category: "Finance",
    outcome: "Get strategic financial leadership for growth, MIS reporting, and fundraising.",
    startingPriceLabel: PLACEHOLDERS.PRICE,
    timelineLabel: PLACEHOLDERS.TIMELINE,
    priceRange: "5k-plus",
    urgencyRange: "no-rush",
    bestFor: ["Founders", "SME"],
    caVerifiedLabel: PLACEHOLDERS.VERIFIED,
    featured: true
  },
  {
    id: "tax-notice",
    slug: "tax-notice-reply",
    name: "Tax Notice Management",
    aliases: ["notice", "department reply", "scrutiny", "income tax notice"],
    category: "Advisory",
    outcome: "Expert drafting and representation for Income Tax and GST notices.",
    startingPriceLabel: PLACEHOLDERS.PRICE,
    timelineLabel: PLACEHOLDERS.TIMELINE,
    priceRange: "2.5k-5k",
    urgencyRange: "need-now",
    bestFor: ["Founders", "Freelancers", "Creators", "SME", "E-commerce"],
    caVerifiedLabel: PLACEHOLDERS.VERIFIED,
    featured: false
  }
];
