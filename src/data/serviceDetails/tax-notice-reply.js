import { PLACEHOLDERS } from '../servicesData'

export const taxNoticeReplyDetails = {
  theme: "emergency",
  
  seo: {
    title: "Income Tax & GST Notice Reply | Taxpex",
    description: "Received a tax notice? Don't panic. Our expert CAs will analyze the scrutiny and draft a legally sound response.",
  },

  hero: {
    headline: "Expert representation for Tax and GST Notices.",
    subheadline: "Act fast. Our experts will analyze your scrutiny notice and draft a legally robust response.",
    whatHappensNext: "1. Upload Notice → 2. CA Analysis → 3. Draft Preparation → 4. Online Submission"
  },

  deliverables: [
    "Detailed analysis of the department's query",
    "Drafting of the legal reply/submission",
    "Filing of the response on the Income Tax/GST portal",
    "Representation (if hearing is scheduled)"
  ],

  timeline: [
    { title: "Upload Notice", desc: "Securely share your notice. Time is critical." },
    { title: "Expert Analysis", desc: "A senior CA reviews the facts and your past returns." },
    { title: "Drafting", desc: "We prepare a legally sound, fact-based response." },
    { title: "Submission", desc: "Reply is filed on the portal within the stipulated deadline." }
  ],

  documents: [
    { name: "The Notice", desc: "Copy of the exact notice/order received" },
    { name: "Past Returns", desc: "ITR or GST returns for the relevant year" },
    { name: "Financials", desc: "Bank statements or ledger copies if demanded" }
  ],

  risks: [
    { title: "Ignoring the Deadline", desc: "Failure to reply leads to unilateral heavy penalties or bank attachment." },
    { title: "Admitting Incorrect Liability", desc: "A poorly drafted reply can act as an admission of guilt." },
    { title: "Missing Attachments", desc: "Replies without supporting documentary evidence are often rejected." }
  ],

  faqs: [
    { q: "Why did I receive this notice?", a: "Notices are often triggered by data mismatches (e.g., AIS/TIS vs ITR), late filing, or random scrutiny." },
    { q: "What happens if I miss the deadline?", a: "The assessing officer may pass a best-judgment assessment, demanding higher tax and imposing penalties." }
  ],

  relatedServices: ["itr-filing-salaried", "virtual-cfo"]
}
