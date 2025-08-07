import React from 'react'
import { Button } from '../../components/ui/Button'
import { CheckCircle, XCircle, AlertTriangle, User, ShieldCheck, Users, Briefcase, Hammer, Leaf, ArrowRight, DollarSign, Building, FileText, CreditCard, Lock, Unlock, TrendingUp, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import SeoPageLayout from '../../components/SeoPageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LLC vs Sole Proprietorship: Which is Better for Your Business?',
  description: 'Should you form an LLC or stay a sole proprietor? Compare liability protection, taxes, setup costs, and business credibility. Get expert advice for your situation.',
  openGraph: {
    title: 'LLC vs Sole Proprietorship: Which is Better for Your Business?',
    description: 'Should you form an LLC or stay a sole proprietor? Compare liability protection, taxes, setup costs, and business credibility.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LLC vs Sole Proprietorship: Which is Better for Your Business?',
    description: 'Should you form an LLC or stay a sole proprietor? Compare liability protection, taxes, setup costs, and business credibility.',
  },
}

export default function LLCvsSoleProprietorshipPage() {
  const comparisonData = [
    {
      feature: 'Personal Liability',
      soleProprietorship: { status: 'no', text: 'No protection' },
      llc: { status: 'yes', text: 'Protected' }
    },
    {
      feature: 'Tax Simplicity',
      soleProprietorship: { status: 'yes', text: 'Simplest' },
      llc: { status: 'yes', text: 'Flexible' }
    },
    {
      feature: 'Legal Setup',
      soleProprietorship: { status: 'yes', text: 'No filing needed' },
      llc: { status: 'warning', text: 'State filing required' }
    },
    {
      feature: 'Business Credibility',
      soleProprietorship: { status: 'warning', text: 'Less formal' },
      llc: { status: 'yes', text: 'More formal' }
    },
    {
      feature: 'Bank Accounts',
      soleProprietorship: { status: 'warning', text: 'Optional' },
      llc: { status: 'yes', text: 'Recommended separate account' }
    },
    {
      feature: 'Business Credit',
      soleProprietorship: { status: 'no', text: 'Uses personal credit' },
      llc: { status: 'yes', text: 'Can build separate credit' }
    },
    {
      feature: 'Privacy Protection',
      soleProprietorship: { status: 'no', text: 'Personal info exposed' },
      llc: { status: 'yes', text: 'Can use registered agent' }
    },
    {
      feature: 'Investor Appeal',
      soleProprietorship: { status: 'no', text: 'Less attractive' },
      llc: { status: 'yes', text: 'More professional' }
    }
  ]

  const soleProprietorshipBenefits = [
    'You\'re testing out a small solo project',
    'You want to keep things ultra-simple',
    'You\'re not too worried about liability',
    'You\'re earning under $10K annually',
    'You\'re working with minimal startup costs'
  ]

  const llcBenefits = [
    'You want personal asset protection',
    'You\'re working with business partners',
    'You\'re building long-term and want credibility',
    'You\'re earning significant income',
    'You want to build business credit'
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'yes':
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'no':
        return <XCircle className="w-5 h-5 text-red-500" />
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />
      default:
        return null
    }
  }

  return (
    <SeoPageLayout>
      <div id="llc-vs-sole-proprietorship">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 
              className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6"
            >
              LLC vs Sole Proprietorship: What's Right for You?
            </h1>
            <p 
              className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto"
            >
              Clear, side-by-side comparisons to help you choose confidently.
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <div>
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Not sure what to choose?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Most new founders start as sole proprietors or form an LLC—but each has pros and cons. This page walks you through the differences, no jargon.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                The choice between a sole proprietorship and an LLC is one of the most important decisions you'll make for your business. It affects everything from your personal liability to your tax situation, and even how customers and partners view your business. Understanding these differences can save you thousands of dollars and protect your personal assets.
              </p>
            </div>
          </div>
        </section>

        {/* What is a Sole Proprietorship Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div>
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">What is a Sole Proprietorship?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                A sole proprietorship is the simplest business structure available. It's essentially you doing business in your own name, with no legal separation between you and your business. You don't need to file any paperwork with the state to start operating as a sole proprietor.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                When you're a sole proprietor, you and your business are legally the same entity. This means all business income is your personal income, all business debts are your personal debts, and all business liabilities are your personal liabilities. You report everything on your personal tax return using Schedule C.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                While this structure is incredibly simple to set up and maintain, it offers no protection for your personal assets. If your business gets sued or goes into debt, your personal savings, home, and other assets are at risk.
              </p>
            </div>
          </div>
        </section>

        {/* What is an LLC Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <div>
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">What is an LLC?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                An LLC (Limited Liability Company) is a business structure that provides personal liability protection while maintaining flexibility in management and taxation. It's a hybrid structure that combines the benefits of a corporation with the simplicity of a partnership.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                When you form an LLC, you create a separate legal entity from yourself. This means the LLC can own property, enter into contracts, and be sued in its own name. Your personal assets are generally protected from business liabilities, debts, and lawsuits.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                LLCs offer flexible taxation options. By default, single-member LLCs are taxed as sole proprietorships, while multi-member LLCs are taxed as partnerships. However, LLCs can also elect to be taxed as corporations if it benefits their situation. This flexibility makes LLCs attractive to many business owners.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div>
              <h2 className="text-3xl font-semibold text-neutral-900 mb-8 text-center">
                Side-by-Side Comparison
              </h2>
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="grid grid-cols-3 border-b border-gray-200">
                  <div className="p-4 font-semibold text-gray-700 bg-gray-50">Feature</div>
                  <div className="p-4 font-semibold text-gray-700 bg-gray-50 text-center">Sole Proprietorship</div>
                  <div className="p-4 font-semibold text-gray-700 bg-gray-50 text-center">LLC</div>
                </div>
                {comparisonData.map((item, index) => (
                  <div key={index} className="grid grid-cols-3 border-b border-gray-200 last:border-b-0">
                    <div className="p-4 font-medium text-gray-900 border-r border-gray-200">
                      {item.feature}
                    </div>
                    <div className="p-4 text-center border-r border-gray-200">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        {getStatusIcon(item.soleProprietorship.status)}
                      </div>
                      <span className="text-sm text-gray-600">{item.soleProprietorship.text}</span>
                    </div>
                    <div className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        {getStatusIcon(item.llc.status)}
                      </div>
                      <span className="text-sm text-gray-600">{item.llc.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* When to Choose Each */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div>
              <h2 className="text-3xl font-semibold text-neutral-900 mb-8 text-center">
                When to Choose Each Structure
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-600" />
                    Choose Sole Proprietorship if:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    {soleProprietorshipBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Building className="w-5 h-5 text-green-600" />
                    Choose LLC if:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    {llcBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div>
              <h2 className="text-3xl font-semibold text-neutral-900 mb-8 text-center">
                Key Takeaways
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-500" />
                    Sole Proprietorship Reality Check
                  </h3>
                  <p className="text-gray-700 mb-4">
                    While sole proprietorships are simple to start, they offer zero liability protection. If your business gets sued, your personal assets are at risk.
                  </p>
                  <p className="text-gray-700">
                    This includes your home, car, savings, and other personal property. For most serious entrepreneurs, this risk is too high.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-green-600" />
                    LLC Protection Benefits
                  </h3>
                  <p className="text-gray-700 mb-4">
                    LLCs provide a legal shield between you and your business. If someone sues your business, they can only go after business assets, not your personal property.
                  </p>
                  <p className="text-gray-700">
                    This protection alone often makes the filing cost worthwhile, especially as your business grows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Ready to Form Your LLC?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Start With Genie makes LLC formation simple and affordable. Get everything you need for just $49.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/checkout">
                  <Button className="text-lg px-8 py-3">
                    Start Your LLC for $49 →
                  </Button>
                </Link>
                <Link href="/how-to-start-an-llc">
                  <Button variant="outline" className="text-lg px-8 py-3">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SeoPageLayout>
  )
} 