import { PLACEHOLDERS } from '../servicesData'

export const llpRegistrationDetails = {
  theme: "default",
  
  seo: {
    title: "LLP Registration in India | Taxpex",
    description: "Register your Limited Liability Partnership. Get limited liability protection with lesser compliance burden than a Private Limited company.",
  },

  hero: {
    headline: "Setup your Limited Liability Partnership securely.",
    subheadline: "Get the protection of a Private Limited company with the flexibility and lower compliance of a partnership.",
    whatHappensNext: "1. Name Approval → 2. DSC Creation → 3. Incorporation Form → 4. LLP Agreement"
  },

  deliverables: [
    "Digital Signature Certificates (DSC) for Partners",
    "Designated Partner Identification Numbers (DPIN)",
    "LLP Name Approval",
    "Certificate of Incorporation",
    "Drafting of LLP Agreement",
    "PAN and TAN for the LLP"
  ],

  timeline: [
    { title: "DSC & Name Approval", desc: "We process your digital signatures and apply for your desired LLP name." },
    { title: "Incorporation Application", desc: "Filing of FiLLiP form with the Ministry of Corporate Affairs." },
    { title: "Issuance of COI", desc: "Government approves and issues your Incorporation Certificate." },
    { title: "LLP Agreement Filing", desc: "Drafting the legal partnership deed and filing Form 3 within 30 days." }
  ],

  documents: [
    { name: "PAN Card", desc: "Of all designated partners" },
    { name: "ID Proof", desc: "Aadhar/Voter ID/Passport of partners" },
    { name: "Address Proof", desc: "Recent bank statement or utility bill" },
    { name: "Office Proof", desc: "NOC and utility bill for registered office" }
  ],

  yourOptions: {
    taxpex: [
      "Custom LLP agreement drafted by legal experts",
      "Zero hidden fees",
      "Fast-tracked processing"
    ]
  },

  faqs: [
    { q: "Is an audit mandatory for an LLP?", a: "No. Audit is only required if annual turnover exceeds ₹40 Lakhs or capital contribution exceeds ₹25 Lakhs." },
    { q: "What is the difference between an LLP and a Pvt Ltd company?", a: "An LLP has fewer compliance requirements (no mandatory board meetings) and is easier to manage, but it cannot raise equity funding from Venture Capitalists." }
  ],

  relatedServices: ["monthly-bookkeeping", "trademark-registration"]
}
