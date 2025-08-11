import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Multi-Member LLC Operating Agreement Example + Free Download",
  description:
    "Free multi-member LLC operating agreement example in plain English. Includes a ready-to-fill PDF template. No sign-up. No fluff.",
  openGraph: {
    title: "Multi-Member LLC Operating Agreement Example + Free Download",
    description:
      "Free multi-member LLC operating agreement example in plain English. Includes a ready-to-fill PDF template. No sign-up. No fluff.",
    images: [{ url: "/og/og-llc-multimember.jpg", width: 1200, height: 630 }],
    type: "article",
    url: "https://startwithgenie.com/resources/multi-member-llc-operating-agreement-example",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-Member LLC Operating Agreement Example + Free Download",
    description:
      "Free multi-member LLC operating agreement example in plain English. Includes a ready-to-fill PDF template. No sign-up. No fluff.",
    images: ["/og/og-llc-multimember.jpg"],
  },
};

const PDF_URL  = "/templates/multi-member-llc-operating-agreement-example.pdf";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold tracking-tight text-neutral-900">{title}</h2>
      <div className="mt-3 text-[15px] leading-7 text-neutral-700">{children}</div>
    </section>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with StartWithGenie branding */}
      <header className="relative overflow-hidden bg-white pt-20 pb-16">
        {/* mesh wave background */}
        <div className="absolute inset-0 pointer-events-none bg-wave md:bg-center bg-top" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/genie-preview.png"
                  alt="Start With Genie"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full"
                  priority
                />
                <span className="text-lg font-semibold text-gray-900">Start With Genie</span>
              </Link>
            </div>
            
            <p className="text-xs text-neutral-500">Free template • Plain English</p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
              Multi-Member LLC Operating Agreement Example
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
              This page uses simple words. It explains what this paper is. It shows the parts.
              You can download a blank file. You can also see a filled example.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href={PDF_URL}
                className="inline-flex items-center justify-center rounded-full h-12 px-8 border border-gray-300 text-gray-900 hover:bg-gray-50 transition text-sm font-medium tracking-tight"
              >
                View Filled Example (.pdf)
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Free to use. No email needed. Not legal advice.
            </p>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-3xl px-6 py-12 lg:max-w-4xl">
        <Section title="What is this?">
          <p>
            A multi-member LLC operating agreement is a written plan for how your LLC works
            when there are two or more owners. It shows who owns what. It shows who makes
            choices. It shows how money is shared. It also says what happens if someone leaves
            or if the business closes.
          </p>
        </Section>

        <Section title="Who should use this?">
          <ul className="mt-2 list-disc pl-5">
            <li>Two or more people own the LLC.</li>
            <li>You want a clear plan everyone signs.</li>
            <li>You want fewer problems later.</li>
          </ul>
        </Section>

        <Section title="Key parts (simple notes)">
          <ol className="mt-2 space-y-2">
            <li><strong>Members and shares:</strong> Owners and each person's share.</li>
            <li><strong>Money in and money out:</strong> How profit and loss are split.</li>
            <li><strong>Votes and choices:</strong> How you decide big things.</li>
            <li><strong>Manager or members:</strong> Who runs daily work.</li>
            <li><strong>New members or someone leaves:</strong> What must happen and how.</li>
            <li><strong>Records and bank rules:</strong> Keep books. Keep money separate.</li>
            <li><strong>Ending the LLC:</strong> How to close the business the right way.</li>
            <li><strong>Law and changes:</strong> Which state law. How to update later.</li>
          </ol>
        </Section>

        <Section title="How to fill the template">
          <ol className="mt-2 space-y-2">
            <li>Open the .docx file.</li>
            <li>Type your LLC name, state, and date.</li>
            <li>List each member and their share (like 60% and 40%).</li>
            <li>Pick who runs the LLC (members or a manager).</li>
            <li>Write how you vote on big things.</li>
            <li>Write what happens if someone wants to leave or a new member joins.</li>
            <li>Save as PDF. Have all members sign. Keep a copy for your records.</li>
          </ol>
        </Section>

        <Section title="Common mistakes">
          <ul className="mt-2 list-disc pl-5">
            <li>Using a one-owner form for many owners.</li>
            <li>Not writing how voting works.</li>
            <li>No plan for someone leaving or joining.</li>
            <li>Mixing business money with personal money.</li>
          </ul>
        </Section>

        <Section title="Quick answers">
          <details className="rounded-lg border border-black/10 bg-white p-4">
            <summary className="cursor-pointer font-medium text-neutral-900">Is this legal advice?</summary>
            <p className="mt-2">No. This is general info. Talk to a lawyer for legal advice in your state.</p>
          </details>
          <details className="mt-3 rounded-lg border border-black/10 bg-white p-4">
            <summary className="cursor-pointer font-medium text-neutral-900">Can I use this in any state?</summary>
            <p className="mt-2">Yes. But states have different rules. Change parts if needed. Ask a lawyer if unsure.</p>
          </details>
          <details className="mt-3 rounded-lg border border-black/10 bg-white p-4">
            <summary className="cursor-pointer font-medium text-neutral-900">Do all members need to sign?</summary>
            <p className="mt-2">Yes. Everyone should sign and keep a copy.</p>
          </details>
        </Section>

        <footer className="mt-12 border-top border-neutral-200/70 pt-6 text-[13px] leading-6 text-neutral-600">
          This page is here to help. It uses simple words on purpose. It does not replace a lawyer.
        </footer>
      </main>
    </div>
  );
} 