import { PLACEHOLDERS } from '../servicesData'

export const itrFilingSalariedDetails = {
  theme: "default",
  
  seo: {
    title: "Income Tax Return (ITR) Filing for Salaried Individuals | Taxpex",
    description: "File your ITR accurately with CA assistance. Maximize deductions under Section 80C, HRA, and prevent income tax notices.",
  },

  hero: {
    headline: "File your Income Tax Return accurately & maximize refunds.",
    subheadline: "Upload your Form 16. Our CAs will compute your taxes, claim all eligible deductions, and file your return directly with the IT portal.",
    whatHappensNext: "1. Upload Form 16 → 2. CA Computation → 3. Review → 4. Filed & Verified"
  },

  deliverables: [
    "Tax Computation Sheet",
    "Expert advice on Old vs New Tax Regime",
    "Filing of ITR-1 or ITR-2",
    "E-verification of the return",
    "ITR-V (Acknowledgment receipt)"
  ],

  timeline: [
    { title: "Upload Documents", desc: "Simply upload your Form 16 and investment proofs." },
    { title: "CA Review & Computation", desc: "Our experts analyze AIS/TIS and calculate maximum possible tax savings." },
    { title: "Approval", desc: "Review the computation sheet before we submit to the government." },
    { title: "E-filing & Verification", desc: "Return is filed securely and e-verified via Aadhar OTP." }
  ],

  documents: [
    { name: "Form 16", desc: "Part A & Part B from your employer" },
    { name: "PAN & Aadhar", desc: "Linked to each other" },
    { name: "Bank Statements", desc: "For interest income calculation" },
    { name: "Investment Proofs", desc: "LIC, PPF, ELSS, 80G donations (if not in Form 16)" }
  ],

  risks: [
    { title: "Mismatched AIS/TIS Data", desc: "Not declaring income showing in your Annual Information Statement guarantees a notice." },
    { title: "Claiming Fake Deductions", desc: "The IT department uses AI to catch fraudulent 80C/80G claims, leading to 200% penalties." },
    { title: "Late Filing", desc: "Filing after the July 31st deadline attracts late fees up to ₹5,000." }
  ],

  faqs: [
    { q: "Which regime is better for me?", a: "It depends on your deductions. If your total deductions (80C, HRA, etc.) exceed ₹3.75L (approx), the Old Regime might be better. Our CAs will calculate both and pick the best one for you." },
    { q: "What if I have multiple Form 16s?", a: "No problem. We will consolidate income from all your previous employers for the financial year." }
  ],

  relatedServices: ["tax-notice-reply"]
}
