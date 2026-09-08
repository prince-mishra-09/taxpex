// Primary Audiences
export const PRIMARY_AUDIENCES = [
  {
    id: "startups",
    name: "Startups",
    scenario: "Managing burn rate, scaling quickly, and dealing with investors.",
    problems: [
      "Structuring founders' equity and ESOPs correctly.",
      "Keeping books clean for due diligence and VC funding.",
      "Navigating complex DPIIT and Angel Tax exemptions."
    ],
    primaryServices: ["private-limited-incorporation", "virtual-cfo"],
    secondaryServices: ["startup-india-registration", "payroll-processing", "monthly-bookkeeping", "trademark-registration"],
    tools: [],
    resources: [],
    recommendedCTA: { text: "Talk to a Startup Advisor", link: "/contact" }
  },
  {
    id: "creators",
    name: "Creators",
    scenario: "Managing multiple income streams from YouTube, Brand Deals, and Patreon.",
    problems: [
      "Tracking global income and dealing with 18% GST on brand deals.",
      "Filing ITR-4 or ITR-3 accurately as a freelancer.",
      "Claiming expenses (cameras, travel) against business income."
    ],
    primaryServices: ["itr-filing-salaried", "gst-registration"],
    secondaryServices: ["trademark-registration", "tax-notice-reply"],
    tools: [],
    resources: [],
    recommendedCTA: { text: "Get your Creator Tax Audit", link: "/contact" }
  },
  {
    id: "freelancers",
    name: "Freelancers",
    scenario: "Working independently with clients across the globe.",
    problems: [
      "Filing income tax under the 44ADA presumptive taxation scheme.",
      "Understanding when GST registration is mandatory (LUT for export).",
      "Tracking inward remittances and managing foreign exchange."
    ],
    primaryServices: ["itr-filing-salaried", "gst-registration"],
    secondaryServices: ["gst-filing"],
    tools: [],
    resources: [],
    recommendedCTA: { text: "Consult a Freelancer Tax Expert", link: "/contact" }
  },
  {
    id: "ecommerce",
    name: "E-commerce Sellers",
    scenario: "Selling on Amazon, Flipkart, Shopify, or Instagram.",
    problems: [
      "Reconciling thousands of small transactions across gateways.",
      "Managing complex GST rules for inter-state supply and TCS.",
      "Filing monthly GSTR-1 and GSTR-3B accurately."
    ],
    primaryServices: ["gst-filing", "monthly-bookkeeping"],
    secondaryServices: ["gst-registration", "trademark-registration"],
    tools: [],
    resources: [],
    recommendedCTA: { text: "Automate E-commerce GST", link: "/services/gst-filing" }
  },
  {
    id: "smes",
    name: "SMEs",
    scenario: "Running an established small-to-medium enterprise.",
    problems: [
      "Ensuring timely payroll processing and PF/ESI compliance.",
      "Managing vendor payments and deducting correct TDS.",
      "Preparing MIS reports for bank loans or overdrafts."
    ],
    primaryServices: ["payroll-processing", "monthly-bookkeeping"],
    secondaryServices: ["gst-filing", "tds-return-filing", "llp-registration"],
    tools: [],
    resources: [],
    recommendedCTA: { text: "Outsource your compliance", link: "/contact" }
  },
  {
    id: "professionals",
    name: "Professionals",
    scenario: "Consultants, Architects, Lawyers, and IT Professionals.",
    problems: [
      "Maximizing deductions under Section 44ADA.",
      "Timely invoicing and GST collection from corporate clients.",
      "Planning investments to save taxes."
    ],
    primaryServices: ["itr-filing-salaried", "gst-registration"],
    secondaryServices: ["gst-filing", "tax-notice-reply"],
    tools: [],
    resources: [],
    recommendedCTA: { text: "Optimize your Professional Taxes", link: "/contact" }
  }
];

// Secondary Audiences
export const SECONDARY_AUDIENCES = [
  {
    id: "doctors",
    name: "Doctors",
    scenario: "Managing a private clinic or consulting at multiple hospitals.",
    problems: [
      "Handling cash receipts and maintaining books of accounts.",
      "Filing complex ITR considering both salary and professional receipts.",
      "Understanding GST exemptions on healthcare services."
    ],
    primaryServices: ["itr-filing-salaried", "monthly-bookkeeping"],
    secondaryServices: ["payroll-processing"],
    tools: [],
    resources: [],
    recommendedCTA: { text: "Consult our Healthcare Tax Expert", link: "/contact" }
  },
  {
    id: "restaurants",
    name: "Restaurants",
    scenario: "Running a cafe, fine dining, or cloud kitchen.",
    problems: [
      "Navigating the 5% GST (without ITC) rule vs 18% GST.",
      "Managing FSSAI compliance alongside GST.",
      "Tracking daily sales across Zomato, Swiggy, and dine-in."
    ],
    primaryServices: ["gst-filing", "monthly-bookkeeping"],
    secondaryServices: ["payroll-processing", "private-limited-incorporation"],
    tools: [],
    resources: [],
    recommendedCTA: { text: "Streamline Restaurant Compliance", link: "/contact" }
  },
  {
    id: "manufacturers",
    name: "Manufacturers",
    scenario: "Operating a factory, managing inventory and heavy machinery.",
    problems: [
      "Claiming Input Tax Credit (ITC) on capital goods.",
      "Filing GST returns while managing E-way bills for dispatch.",
      "Maintaining statutory registers and payroll for factory workers."
    ],
    primaryServices: ["gst-filing", "payroll-processing"],
    secondaryServices: ["virtual-cfo", "tds-return-filing"],
    tools: [],
    resources: [],
    recommendedCTA: { text: "Speak to a Manufacturing Compliance Expert", link: "/contact" }
  },
  {
    id: "exporters",
    name: "Exporters",
    scenario: "Exporting goods or services outside India.",
    problems: [
      "Filing Letter of Undertaking (LUT) to export without paying IGST.",
      "Claiming GST refunds on accumulated Input Tax Credit.",
      "Managing Foreign Inward Remittance Certificates (FIRC)."
    ],
    primaryServices: ["gst-filing", "tax-notice-reply"],
    secondaryServices: ["virtual-cfo"],
    tools: [],
    resources: [],
    recommendedCTA: { text: "Get Export GST Assistance", link: "/contact" }
  },
  {
    id: "companies",
    name: "Companies",
    scenario: "Large incorporated entities requiring statutory audits.",
    problems: [
      "Filing AOC-4 and MGT-7 with the ROC annually.",
      "Conducting statutory and internal audits.",
      "Managing secretarial compliances and board resolutions."
    ],
    primaryServices: ["virtual-cfo", "private-limited-incorporation"],
    secondaryServices: ["tds-return-filing", "payroll-processing"],
    tools: [],
    resources: [],
    recommendedCTA: { text: "Explore Corporate Services", link: "/services/virtual-cfo" }
  },
  {
    id: "hni",
    name: "HNI / Individuals",
    scenario: "High Net-Worth Individuals managing capital gains and wealth.",
    problems: [
      "Calculating capital gains from stocks, mutual funds, and real estate.",
      "Managing advanced tax liabilities.",
      "Responding to scrutiny notices from the IT department."
    ],
    primaryServices: ["itr-filing-salaried", "tax-notice-reply"],
    secondaryServices: ["virtual-cfo"],
    tools: [],
    resources: [],
    recommendedCTA: { text: "Private Wealth Tax Planning", link: "/contact" }
  }
];

export const ALL_AUDIENCES = [...PRIMARY_AUDIENCES, ...SECONDARY_AUDIENCES];
