import { PLACEHOLDERS } from '../servicesData'

export const payrollProcessingDetails = {
  theme: "default",
  
  seo: {
    title: "Payroll & HR Compliance Services | Taxpex",
    description: "Automated salary calculation, secure payslips, and full compliance for PF, ESI, PT, and TDS.",
  },

  hero: {
    headline: "Automate your Payroll & HR Compliance.",
    subheadline: "On-time salary disbursements, secure payslip generation, and 100% compliance with PF, ESI, and Labour Laws.",
    whatHappensNext: "1. Employee Onboarding → 2. Attendance Sync → 3. Salary Computation → 4. Disbursement & Filing"
  },

  deliverables: [
    "Monthly salary computation (Basic, HRA, Allowances)",
    "Generation and distribution of secure e-payslips",
    "Calculation of PF, ESI, and Professional Tax (PT)",
    "Filing of monthly PF and ESI returns",
    "Full & Final (F&F) settlement for exiting employees"
  ],

  timeline: [
    { title: "Attendance Input", desc: "You share leave and attendance data by the cut-off date." },
    { title: "Processing", desc: "We calculate gross salary, standard deductions, and net payable." },
    { title: "Review & Approval", desc: "You review the final payroll sheet before disbursement." },
    { title: "Compliance Filing", desc: "We deposit PF/ESI dues and file the respective monthly returns." }
  ],

  documents: [
    { name: "Employee Details", desc: "KYC, PAN, Aadhar, Bank Accounts" },
    { name: "Attendance Data", desc: "Leave records for the month" },
    { name: "Investment Declarations", desc: "To calculate accurate TDS on salary" }
  ],

  yourOptions: {
    taxpex: [
      "Zero errors in PF/ESI calculations",
      "Automated tax slab adjustments",
      "Confidentiality of executive compensation"
    ],
    inHouse: [
      "Manual Excel errors leading to employee dissatisfaction",
      "Missed PF/ESI deadlines attracting heavy penalties",
      "Time-consuming"
    ]
  },

  faqs: [
    { q: "Is PF registration mandatory?", a: "Yes, if your company has 20 or more employees." },
    { q: "Do you help with employee investment proofs?", a: "Yes, we collect and verify 80C/HRA rent receipts at year-end to finalize TDS deductions." }
  ],

  relatedServices: ["tds-return-filing", "virtual-cfo"]
}
