import { Metadata } from "next";
import SeoPageLayout from "../../components/SeoPageLayout";
import Navbar from "../../components/Navbar";

export const metadata: Metadata = {
  title: "How to Start an LLC in California (2025 Step-by-Step Guide)",
  description: "Ready to start an LLC in California? Our complete 2025 guide walks you through every step, from naming your business and filing paperwork to staying compliant. Learn how to form your CA LLC today!",
  keywords: "start LLC California, form LLC California, California LLC formation, CA LLC guide, California business formation, LLC filing California",
  openGraph: {
    title: "How to Start an LLC in California (2025 Step-by-Step Guide)",
    description: "Ready to start an LLC in California? Our complete 2025 guide walks you through every step, from naming your business and filing paperwork to staying compliant.",
    type: "article",
  },
};

export default function CaliforniaLLCGuidePage() {
  const steps = [
    {
      number: 1,
      title: "Choose a Unique and Compliant Business Name",
      description: "Your business name is your identity. In California, it must be unique and meet specific state requirements.",
      details: [
        "Your LLC's name must include 'Limited Liability Company,' 'LLC,' or 'L.L.C.'",
        "Check availability using the California Secretary of State's Business Search tool",
        "Reserve your name for up to 60 days if needed"
      ]
    },
    {
      number: 2,
      title: "Appoint an Agent for Service of Process",
      description: "California requires every LLC to designate an 'Agent for Service of Process' to accept legal documents.",
      details: [
        "Must be a California resident or qualified corporation",
        "Must have a physical street address in California",
        "Available during normal business hours"
      ]
    },
    {
      number: 3,
      title: "File Articles of Organization (Form LLC-1)",
      description: "This is the official step that creates your LLC. File Form LLC-1 with the California Secretary of State.",
      details: [
        "Filing fee: $70",
        "Include LLC name, principal office address, and agent information",
        "Specify management structure (member-managed or manager-managed)"
      ]
    },
    {
      number: 4,
      title: "Create an LLC Operating Agreement",
      description: "While not legally required to be filed, an Operating Agreement is critical for your business structure.",
      details: [
        "Prevents and resolves management disputes",
        "Solidifies your LLC's limited liability status",
        "Defines profit distribution and member responsibilities"
      ]
    },
    {
      number: 5,
      title: "Obtain an Employer Identification Number (EIN)",
      description: "An EIN is a nine-digit number assigned by the IRS to identify your business entity.",
      details: [
        "Required for hiring employees or opening business bank accounts",
        "Apply for free on the IRS website",
        "Essential for federal tax returns"
      ]
    },
    {
      number: 6,
      title: "File a Statement of Information (Form LLC-12)",
      description: "This mandatory filing is due within 90 days of forming your LLC.",
      details: [
        "Initial filing fee: $20",
        "Due within 90 days of formation",
        "Biennial filing required every two years thereafter"
      ]
    },
    {
      number: 7,
      title: "Address Ongoing Compliance and Taxes",
      description: "Forming your LLC is just the beginning. Meet ongoing state requirements to stay in good standing.",
      details: [
        "Annual franchise tax: $800 minimum",
        "Additional LLC fee if income exceeds $250,000",
        "Obtain required business licenses and permits"
      ]
    }
  ];

  const faqs = [
    {
      question: "How much does it cost to start an LLC in California?",
      answer: "The primary state filing fees are $70 for the Articles of Organization and $20 for the initial Statement of Information. The largest mandatory cost is the $800 annual minimum franchise tax."
    },
    {
      question: "How long does it take to form an LLC in California?",
      answer: "Processing times vary. Filing online through the California Secretary of State's bizfile Online portal is the fastest method, often taking just a few business days. Mail-in filings can take several weeks."
    },
    {
      question: "Do I need a lawyer to start an LLC in California?",
      answer: "No, you are not required to hire a lawyer. Many entrepreneurs successfully form their own LLCs by following the steps outlined in this guide. However, if you have a complex ownership structure or unique circumstances, consulting with a business attorney is recommended."
    },
    {
      question: "What is the difference between an S Corp and an LLC?",
      answer: "An LLC is a business structure, while an S Corp is a tax election. An LLC can choose to be taxed as an S Corp if it meets certain IRS criteria. This can potentially offer tax savings for some businesses, but it also comes with stricter administrative requirements, such as running payroll for owner-employees."
    }
  ];

  const benefits = [
    {
      title: "Liability Protection",
      description: "Protect your personal assets from business debts and legal claims"
    },
    {
      title: "Flexible Management",
      description: "Choose between member-managed or manager-managed structure"
    },
    {
      title: "Pass-Through Taxation",
      description: "Avoid double taxation with pass-through tax treatment"
    },
    {
      title: "Simple Compliance",
      description: "Fewer formalities compared to corporations"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8 pt-24">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            How to Start an LLC in California: A Step-by-Step Guide
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
            Changing your LLC name in California can seem daunting, but it doesn't have to be. Whether you're rebranding to better reflect your business values or simply switching to a more fitting name, our step-by-step guide will walk you through the process effortlessly.
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <p className="text-lg text-neutral-700 leading-relaxed mb-4">
            With the right information and a clear plan, you can navigate the legal requirements, avoid common pitfalls, and ensure a smooth transition. While established businesses rebrand for a fresh start, you're at the exciting beginning of that journey—creating a brand from scratch. Getting your business structure right from day one is crucial. This guide covers everything from choosing a powerful name to filing the necessary paperwork with the California Secretary of State. Say goodbye to confusion and hello to a fresh start! Let's dive in and simplify the steps you need to take to launch your California LLC with confidence and ease.
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed">
            A Limited Liability Company (LLC) is a popular business structure that combines the liability protection of a corporation with the operational flexibility and pass-through taxation of a sole proprietorship or partnership. Follow these steps to form your LLC in the Golden State.
          </p>
        </div>

        {/* Benefits Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            Why Choose an LLC in California?
          </h2>
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{benefit.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

                {/* Steps Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            Step-by-Step Guide to Form Your California LLC
          </h2>
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index}>
                <div className="flex items-start gap-6 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900">
                    {step.title}
                  </h3>
                </div>
                <div className="ml-14">
                  <p className="text-lg text-neutral-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-neutral-700">
                        • {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Important Notes */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-neutral-900 mb-6">
            Important California-Specific Requirements
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-neutral-900 mb-2">Timeline Requirements</h4>
              <p className="text-neutral-700">File your Statement of Information within 90 days of formation</p>
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 mb-2">Annual Costs</h4>
              <p className="text-neutral-700">$800 minimum franchise tax annually, plus additional fees for higher income levels</p>
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 mb-2">Ongoing Filings</h4>
              <p className="text-neutral-700">Biennial Statement of Information required every two years</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
} 