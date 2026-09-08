export const aboutData = {
  hero: {
    headline: "Built to make financial complexity feel simple.",
    subheadline: "We are a technology-first financial operations partner for modern Indian businesses."
  },

  fragmentationStory: {
    headline: "Financial work shouldn't feel fragmented.",
    description: "Traditionally, founders are forced to piece together their financial stack. You hire a CA for tax, a software for invoicing, another tool for payroll, and someone else for compliance. The result? Opaque processes, missed deadlines, and lost context. Taxpex exists to unify tax, compliance, and advisory onto a single platform backed by human expertise."
  },

  beliefs: [
    {
      id: "tech",
      title: "Technology",
      desc: "Software is better at tracking deadlines, reconciling data, and preventing math errors than humans."
    },
    {
      id: "expertise",
      title: "CA Expertise",
      desc: "Humans are better at interpreting ambiguous tax laws, structuring transactions, and giving strategic advice."
    },
    {
      id: "transparency",
      title: "Transparency",
      desc: "You should never have to ask 'What is the status of my filing?' It should be visible on your dashboard."
    },
    {
      id: "accessibility",
      title: "Accessibility",
      desc: "Premium financial advice shouldn't be locked behind opaque pricing and traditional gatekeepers."
    }
  ],

  technologyVsHuman: {
    headline: "Technology + Human Expertise",
    description: "We don't believe software can replace Chartered Accountants. We believe software empowers them. Our TAS dashboard handles the heavy lifting of data collection and tracking, allowing our CA partners to spend 100% of their time on review, compliance, and advisory judgment.",
    techFeatures: ["Automated Document Collection", "Real-time Status Tracking", "Secure Vault", "Integrated Billing"],
    humanFeatures: ["Strategic Tax Planning", "Scrutiny Notice Handling", "Complex Filing Review", "Compliance Audits"]
  },

  workflowComparison: {
    headline: "A different way to manage financial work",
    points: [
      {
        dimension: "Communication",
        traditional: "Emails, WhatsApp groups, and phone calls",
        taxpex: "Centralized TAS dashboard and dedicated Account Manager"
      },
      {
        dimension: "Document Storage",
        traditional: "Scattered across local hard drives and email threads",
        taxpex: "Secure, structured digital vault accessible 24/7"
      },
      {
        dimension: "Visibility",
        traditional: "Opaque status. You only know when it's done.",
        taxpex: "Step-by-step progress tracking for every service"
      },
      {
        dimension: "Pricing",
        traditional: "Variable, often determined post-service",
        taxpex: "Standardized, transparent pricing upfront"
      }
    ]
  },

  stats: [
    // Setting verified: false to demonstrate the strict constraint
    { label: "Tax Returns Filed", value: "10,000+", verified: false },
    { label: "Registered Businesses", value: "2,500+", verified: false },
    { label: "Active CA Partners", value: "50+", verified: false }
  ],

  team: [
    // Leaving empty to demonstrate the polished placeholder state as requested
  ],

  conversion: {
    headline: "Have a financial question?",
    primaryCTA: { text: "Talk to a CA", link: "/contact" },
    secondaryCTA: { text: "Explore Services", link: "/services" }
  }
}
