import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../../components/Navbar";

export const metadata: Metadata = {
  title: "How to Apply for an EIN Without a Social Security Number",
  description:
    "Step-by-step guide to getting an EIN from the IRS without an SSN or ITIN. Simple instructions, clear examples, and all the details you need to succeed.",
  openGraph: {
    title: "How to Apply for an EIN Without a Social Security Number",
    description:
      "Step-by-step guide to getting an EIN from the IRS without an SSN or ITIN. Simple instructions, clear examples, and all the details you need to succeed.",
    images: [{ url: "/og/og-ein-guide.jpg", width: 1200, height: 630 }],
    type: "article",
    url: "https://startwithgenie.com/resources/how-to-apply-for-ein-without-ssn",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Apply for an EIN Without a Social Security Number",
    description:
      "Step-by-step guide to getting an EIN from the IRS without an SSN or ITIN. Simple instructions, clear examples, and all the details you need to succeed.",
    images: ["/og/og-ein-guide.jpg"],
  },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">{title}</h2>
      <div className="text-base leading-7 text-gray-700 space-y-4">{children}</div>
    </section>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />
      
      {/* Header with StartWithGenie branding */}
      <header className="bg-white pt-20 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs text-neutral-500">Free guide • Plain English</p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
              How to Apply for an EIN Without a Social Security Number
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
              If you don't have a Social Security Number (SSN), you can still get an Employer Identification Number (EIN) from the IRS. This guide walks you through exactly how to do it, step-by-step, in plain English. You don't need a lawyer or a filing company — just the right form, the right answers, and the right mailing address.
            </p>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-2xl px-6 py-12">
        <Section title="What an EIN Is and Why You Might Need One">
          <p>
            An EIN (Employer Identification Number) is like a Social Security Number for your business. It's a nine-digit number that the IRS uses to identify your business for tax purposes.
          </p>
          
          <p>You might need an EIN for these reasons:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Opening a business bank account</strong> - Most banks require an EIN to open a business account</li>
            <li><strong>Hiring employees</strong> - You need an EIN to pay employees and file employment taxes</li>
            <li><strong>Filing business taxes</strong> - The IRS uses your EIN to track your business income and taxes</li>
          </ul>
        </Section>

        <Section title="How It Works Without an SSN">
          <p>
            The IRS has a special process for people who don't have a Social Security Number. Instead of using an SSN, you'll use a different approach that the IRS accepts.
          </p>
          
          <p>The process is simple:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Fill out Form SS-4 (the EIN application form)</li>
            <li>Write "Foreign" on the SSN line where it asks for your Social Security Number</li>
            <li>Send it to the IRS by mail or fax (you cannot apply online without an SSN)</li>
          </ol>
        </Section>

        <Section title="Step-by-Step Instructions">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 1 – Download Form SS-4</h3>
              <p>
                Download the official IRS Form SS-4 from the IRS website. You can find it at{" "}
                <a href="https://www.irs.gov/pub/irs-pdf/fss4.pdf" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">
                  irs.gov/pub/irs-pdf/fss4.pdf
                </a>
                . Print it out so you can fill it out by hand.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 2 – Fill Out Your Business Information</h3>
              <p>Here are the most important lines to fill out on Form SS-4:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Line 1</strong> - Your business name (exactly as you want it to appear)</li>
                <li><strong>Line 2</strong> - Your business address</li>
                <li><strong>Line 4a</strong> - Your name (the person applying)</li>
                <li><strong>Line 4b</strong> - Your title (Owner, President, etc.)</li>
                <li><strong>Line 7a</strong> - Your home address</li>
                <li><strong>Line 7b</strong> - Your phone number</li>
                <li><strong>Line 9a</strong> - Your country of citizenship</li>
                <li><strong>Line 10</strong> - Your country of residence</li>
                <li><strong>Line 18</strong> - The reason you need an EIN (check the appropriate box)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 3 – Write "Foreign"</h3>
              <p>
                On <strong>Line 7b</strong> where it asks for your Social Security Number, write <strong>"FOREIGN"</strong> in capital letters. This tells the IRS that you don't have an SSN and are applying as a foreign person.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 4 – Send the Form</h3>
              <p>You have two options for sending your form:</p>
              
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">By Fax (Faster):</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Fax to: (855) 641-6935<br />
                    You'll get your EIN within 4 business days
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900">By Mail (Slower):</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Internal Revenue Service<br />
                    Attn: EIN Operation<br />
                    Cincinnati, OH 45999<br />
                    You'll get your EIN within 4-6 weeks
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 5 – Wait for Your EIN</h3>
              <p>
                If you faxed the form, the IRS will call you with your EIN within 4 business days. Make sure to answer your phone when they call. If you mailed the form, you'll receive a letter with your EIN in 4-6 weeks.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Tips for Success">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Use the correct mailing address</strong> - The IRS has specific addresses for EIN applications</li>
            <li><strong>Keep a copy of your form</strong> - Make a copy before sending it in case you need to reference it later</li>
            <li><strong>Write clearly</strong> - Use black ink and print clearly to avoid delays</li>
            <li><strong>Include your phone number</strong> - The IRS may need to call you with questions</li>
            <li><strong>Be patient</strong> - Processing times can vary, especially during busy periods</li>
          </ul>
        </Section>

        <Section title="Common Questions">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I need an ITIN to get an EIN?</h3>
              <p>No. If you don't have an ITIN (Individual Taxpayer Identification Number), you can still apply for an EIN. Just write "Foreign" on the SSN line of Form SS-4.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I apply online without an SSN?</h3>
              <p>No. The IRS website requires an SSN or ITIN for online applications. You must apply by mail or fax if you don't have either of these numbers.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Will I be taxed if I get an EIN?</h3>
              <p>The EIN itself doesn't create tax obligations. Whether you owe taxes depends on your business type, income, and other factors. The EIN is just an identification number for your business.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long is my EIN valid?</h3>
              <p>Your EIN is valid for the life of your business. You don't need to renew it unless you change your business structure or the IRS specifically requests it.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I use my EIN to open a bank account?</h3>
              <p>Yes, most banks will accept your EIN to open a business bank account. You may also need to provide additional documentation like your business formation documents.</p>
            </div>
          </div>
        </Section>

        <footer className="mt-16 pt-8 border-t border-gray-200 text-sm text-gray-600">
          <p>
            This guide is provided for informational purposes only. For the most current information, always refer to the official IRS website or consult with a tax professional. The IRS may update their procedures, so check their website for any recent changes.
          </p>
        </footer>
      </main>
    </div>
  );
} 