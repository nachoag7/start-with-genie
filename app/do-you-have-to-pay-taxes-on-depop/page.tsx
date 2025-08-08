import React from 'react'
import Link from 'next/link'
import SeoPageLayout from '../../components/SeoPageLayout'
import { Button } from '../../components/ui/Button'
import Footer from '../../components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Depop Taxes & 1099-K Explained (2025) | Seller Guide',
  description: 'Confused about Depop taxes? Learn if you have to pay taxes on your sales, understand the 1099-K form, and discover deductible expenses to lower your bill.',
  openGraph: {
    title: 'Depop Taxes & 1099-K Explained (2025) | Seller Guide',
    description: 'Confused about Depop taxes? Learn if you have to pay taxes on your sales, understand the 1099-K form, and discover deductible expenses to lower your bill.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Depop Taxes & 1099-K Explained (2025) | Seller Guide',
    description: 'Confused about Depop taxes? Learn if you have to pay taxes on your sales, understand the 1099-K form, and discover deductible expenses to lower your bill.',
  },
}

export default function DoYouHaveToPayTaxesOnDepopPage() {
  return (
    <>
      <SeoPageLayout>
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Do You Have to Pay Taxes on Depop? The 2025 Guide for Sellers
            </h1>
            <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
              The "cha-ching" of a Depop sale is one of the best sounds. You sourced a great piece, took killer photos, and now someone loves it. But as those sales add up, a less exciting thought might pop into your head: Wait, do I have to pay taxes on this?
            </p>
            <Link href="/checkout">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Start Your LLC with Genie →
              </Button>
            </Link>
          </section>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p>
              If you're feeling a little panicked, take a breath. You're not alone. Understanding taxes is a big step in turning your Depop hustle into a real business.
            </p>
            <p>
              The short answer is: <strong>Yes, the money you make on Depop is generally considered taxable income.</strong> But it's not as scary as it sounds. Let's break down what you actually need to know, without the complicated IRS jargon.
            </p>

            <h2>It's About Profit, Not Just Sales</h2>
            <p>
              This is the most important thing to remember. You don't pay tax on the total amount of money a buyer sends you. You pay tax on your <strong>profit</strong>.
            </p>
            <p>
              The formula is simple:
            </p>
            <p className="text-center font-semibold text-lg bg-gray-50 p-4 rounded-lg">
              Sales - Expenses = Profit
            </p>
            <p>
              For example: You sell a vintage jacket for $50.
            </p>
            <ul>
              <li>You originally bought it at a thrift store for $10 (this is your Cost of Goods Sold).</li>
              <li>You spent $5 on a poly mailer and shipping label.</li>
              <li>Your Depop and payment processing fees were about $6.</li>
            </ul>
            <p>
              Your total expenses are $10 + $5 + $6 = $21.
            </p>
            <p>
              Your taxable profit is $50 (Sale) - $21 (Expenses) = <strong>$29</strong>. You owe tax on the $29, not the full $50.
            </p>

            <h2>Understanding the $600 Form 1099-K Rule</h2>
            <p>
              You've probably seen people talking about a "$600 tax rule." This refers to Form 1099-K.
            </p>
            <p>
              A 1099-K is an information form that payment processors (like Depop Payments or PayPal) send to both you and the IRS. It reports your gross sales for the year.
            </p>
            <p>
              For the 2024 tax year (which you file in 2025), the IRS has set the reporting threshold at <strong>$20,000 in sales AND over 200 transactions</strong>. The previously planned $600 threshold has been delayed again.
            </p>
            <p>
              <strong>Two critical things to know about the 1099-K:</strong>
            </p>
            <ol>
              <li><strong>You Owe Tax Even If You Don't Get a Form:</strong> If you made a profit, you are legally required to report that income, whether you made $400 or $40,000. The 1099-K is just a reporting tool; it does not create your tax obligation. Your profit creates the obligation.</li>
              <li><strong>The 1099-K Shows Gross Sales:</strong> The number on the form will be your total sales volume, NOT your profit. Don't panic when you see it. It doesn't account for your expenses, fees, or refunds. It's your job to report those expenses to lower your taxable income.</li>
            </ol>

            <h2>How to Lower Your Tax Bill: Track Your Expenses!</h2>
            <p>
              This is how you take control of your taxes. Every dollar you spend on your Depop shop is a potential tax deduction that lowers your profit. You need to become an expert receipt keeper.
            </p>
            <p>
              Common deductible expenses for Depop sellers include:
            </p>
            <ul>
              <li><strong>Cost of Goods Sold:</strong> The price you paid for the clothes and items you sell.</li>
              <li><strong>Platform Fees:</strong> Depop fees, PayPal fees, Stripe fees.</li>
              <li><strong>Shipping Costs:</strong> Postage, shipping labels, mailers, boxes, tape, and bubble wrap.</li>
              <li><strong>Supplies:</strong> Stain remover, a sewing kit for repairs, fabric shavers, a steamer.</li>
              <li><strong>Equipment:</strong> A ring light, backdrops, or even a portion of your phone bill if you use your phone primarily for Depop photos and listings.</li>
              <li><strong>Marketing:</strong> Any costs for promoting your shop.</li>
              <li><strong>Mileage:</strong> The miles you drive to the thrift store, consignment shops, or the post office. Use an app to track this!</li>
              <li><strong>Home Office:</strong> If you have a dedicated space in your home just for your Depop business (storing inventory, packing orders), you may be able to deduct a portion of your rent or mortgage.</li>
            </ul>

            <h2>Okay, So How Do I Actually Pay the Taxes?</h2>
            <p>
              When you earn money as a Depop seller, the IRS views you as a small business owner. This means you're responsible for a couple of types of tax on your <em>profit</em>.
            </p>
            <ul>
              <li><strong>Self Employment Tax:</strong> This covers your Social Security and Medicare contributions, since you don't have an employer paying them for you. It's about 15.3% of your net profit.</li>
              <li><strong>Income Tax:</strong> This is the standard federal and state tax that everyone pays on their income. The rate depends on your total income and tax bracket.</li>
            </ul>
            <p>
              You'll report all your Depop income and expenses on a <strong>Schedule C (Form 1040), Profit or Loss from Business</strong>. The final profit from your Schedule C is then included in your main 1040 tax return.
            </p>

            <h2>Simple Steps to Get Ready for Tax Time</h2>
            <p>
              Don't wait until next April to panic. Start now.
            </p>
            <ol>
              <li><strong>Open a Separate Bank Account.</strong> Seriously. Do this today. Have all your Depop payouts go into this account and pay for all business expenses from it. This makes tracking everything a thousand times easier.</li>
              <li><strong>Track Everything.</strong> Use a simple spreadsheet or a bookkeeping app. Every time you make a sale, log it. Every time you buy mailers or go thrifting, log the expense and keep the receipt.</li>
              <li><strong>Think About Quarterly Taxes.</strong> If you expect to owe more than $1,000 in taxes for the year, you're technically supposed to pay taxes quarterly. This is something to be aware of as your shop grows.</li>
            </ol>
            <p>
              Paying taxes isn't a punishment; it's a sign that you're succeeding. By keeping clean records and understanding the basics, you can confidently manage your finances and continue growing your Depop empire. You got this.
            </p>

            <h2>Take Your Depop Business to the Next Level</h2>
            <p>
              If your Depop sales are growing and you're serious about turning this into a real business, it might be time to consider forming an LLC. An LLC can help protect your personal assets, make tax filing easier, and give your business more credibility with suppliers and customers.
            </p>
            <p>
              Plus, having a separate business entity makes tracking those expenses we talked about much cleaner. Everything business-related flows through your LLC, making tax time way less stressful.
            </p>
            <div className="text-center mt-8 bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Ready to Protect Your Growing Business?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Start With Genie makes forming an LLC simple and affordable. Get step-by-step guidance, all the documents you need, and turn your side hustle into a legitimate business.
              </p>
              <Link href="/checkout">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Form Your LLC for $49 →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </SeoPageLayout>
      <Footer />
    </>
  )
}