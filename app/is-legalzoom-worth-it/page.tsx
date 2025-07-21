"use client";

import React from "react";
import { motion } from "framer-motion";
import { Info, CheckCircle, AlertTriangle, Layers, Timer, ArrowRight, XCircle, BookOpen, UserCheck, FileText, HelpCircle, Target } from "lucide-react";
import Link from "next/link";
import SeoPageLayout from "../../components/SeoPageLayout";
import { Button } from "../../components/ui/Button";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function IsLegalZoomWorthItPage() {
  return (
    <SeoPageLayout>
      <div id="is-legalzoom-worth-it">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Is LegalZoom Worth It?
            </motion.h1>
            <motion.p
              className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              A clear-eyed comparison to help you launch your LLC without confusion, upsells, or delays.
            </motion.p>
          </div>
        </section>

        {/* What is LegalZoom? */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">What is LegalZoom?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                LegalZoom is one of the biggest names in online business formation. They’ve helped thousands of people file LLCs, corporations, and trademarks.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                But if you’re a solo founder or small business owner just trying to launch fast and stay lean, it’s worth asking:
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4 font-semibold">
                Are you paying for clarity—or complexity?
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                This page breaks down what LegalZoom actually includes, where the real costs come from, and whether it’s the right choice for your business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The hidden cost of convenience */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                <span className="text-2xl font-semibold text-neutral-900">The hidden cost of convenience</span>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                At first glance, LegalZoom looks simple—start your LLC for $0 + state fees.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                But here’s what that actually means:
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-[340px] w-full text-left border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-4 font-semibold text-gray-700">Feature</th>
                      <th className="py-2 px-4 font-semibold text-gray-700">LegalZoom</th>
                      <th className="py-2 px-4 font-semibold text-gray-700">What You Get</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">LLC Filing</td>
                      <td className="py-2 px-4 border-t border-gray-200">$0 + state fee</td>
                      <td className="py-2 px-4 border-t border-gray-200">Only includes submitting the Articles of Organization</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">Registered Agent</td>
                      <td className="py-2 px-4 border-t border-gray-200">$249/year</td>
                      <td className="py-2 px-4 border-t border-gray-200">Auto-renews unless canceled</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">EIN</td>
                      <td className="py-2 px-4 border-t border-gray-200">$79+</td>
                      <td className="py-2 px-4 border-t border-gray-200">IRS provides this for free</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">Operating Agreement</td>
                      <td className="py-2 px-4 border-t border-gray-200">$99+</td>
                      <td className="py-2 px-4 border-t border-gray-200">Often bundled into mid/high-tier packages</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">Compliance Reminders</td>
                      <td className="py-2 px-4 border-t border-gray-200">$280+/year</td>
                      <td className="py-2 px-4 border-t border-gray-200">Includes alerts you could set in your calendar</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-neutral-700 text-lg font-medium">The actual price of a full setup can be $300–$600+, and many users report being upsold or confused mid-process.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The “package problem” */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-5 h-5 text-gray-700 flex-shrink-0" />
                <span className="text-2xl font-semibold text-neutral-900">The “package problem”</span>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                LegalZoom offers multiple pricing tiers, like:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>Economy</li>
                <li>Standard</li>
                <li>Premium</li>
              </ul>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Each one includes a different mix of features, delivery speeds, and documents—but you often don’t know what’s essential vs optional.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Most new business owners don’t need everything in the top-tier plan. But that’s often what they end up buying.
              </p>
            </motion.div>
          </div>
        </section>

        {/* How long does it take? */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Timer className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-2xl font-semibold text-neutral-900">How long does it take?</span>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Many LegalZoom users experience delays because:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>Their paperwork goes through internal processing before it’s filed</li>
                <li>They get stuck choosing between package tiers</li>
                <li>They’re waiting on documents that were promised in higher-tier bundles</li>
              </ul>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Filing through your state directly is often faster—if you know what you’re doing.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The alternative: Start With Genie */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-2xl font-semibold text-neutral-900">The alternative: Start With Genie</span>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Start With Genie is not a filing service. It’s a $49 assistant that gives you everything you need to launch your LLC yourself—without the confusion, delays, or upsells.
              </p>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4 mt-8">What you get with Genie:</h3>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-[340px] w-full text-left border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-4 font-semibold text-gray-700">Included</th>
                      <th className="py-2 px-4 font-semibold text-gray-700">Genie</th>
                      <th className="py-2 px-4 font-semibold text-gray-700">LegalZoom</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">LLC filing instructions</td>
                      <td className="py-2 px-4 border-t border-gray-200"><CheckCircle className="inline w-5 h-5 text-green-600 align-middle" /></td>
                      <td className="py-2 px-4 border-t border-gray-200"><CheckCircle className="inline w-5 h-5 text-green-600 align-middle" /></td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">EIN guide (free, direct from IRS)</td>
                      <td className="py-2 px-4 border-t border-gray-200"><CheckCircle className="inline w-5 h-5 text-green-600 align-middle" /></td>
                      <td className="py-2 px-4 border-t border-gray-200"><XCircle className="inline w-5 h-5 text-red-500 align-middle" /> <span className="ml-1 text-xs">(often $79+)</span></td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">Single-member Operating Agreement</td>
                      <td className="py-2 px-4 border-t border-gray-200"><CheckCircle className="inline w-5 h-5 text-green-600 align-middle" /></td>
                      <td className="py-2 px-4 border-t border-gray-200"><XCircle className="inline w-5 h-5 text-red-500 align-middle" /> <span className="ml-1 text-xs">($99+ or bundled)</span></td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">Compliance overview</td>
                      <td className="py-2 px-4 border-t border-gray-200"><CheckCircle className="inline w-5 h-5 text-green-600 align-middle" /></td>
                      <td className="py-2 px-4 border-t border-gray-200"><XCircle className="inline w-5 h-5 text-red-500 align-middle" /> <span className="ml-1 text-xs">(bundled w/ alerts)</span></td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">Genie Assistant for help</td>
                      <td className="py-2 px-4 border-t border-gray-200"><CheckCircle className="inline w-5 h-5 text-green-600 align-middle" /></td>
                      <td className="py-2 px-4 border-t border-gray-200"><XCircle className="inline w-5 h-5 text-red-500 align-middle" /></td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">Upsells</td>
                      <td className="py-2 px-4 border-t border-gray-200"><XCircle className="inline w-5 h-5 text-red-500 align-middle" /></td>
                      <td className="py-2 px-4 border-t border-gray-200"><CheckCircle className="inline w-5 h-5 text-green-600 align-middle" /></td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">Flat price</td>
                      <td className="py-2 px-4 border-t border-gray-200">$49</td>
                      <td className="py-2 px-4 border-t border-gray-200">Varies ($0 → $600+)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                You still file directly with your state—but Genie shows you exactly how to do it and gives you the documents banks and partners require.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                No bundles. No confusion. Just clarity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* So… is LegalZoom worth it? */}
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              So… is LegalZoom worth it?
            </motion.h2>
            <motion.p
              className="text-xl text-neutral-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              If you want someone else to do the entire filing for you and don’t mind paying more:<br />
              LegalZoom is a recognizable option with customer support and name recognition.
              <br /><br />
              But if you want to save time, avoid upsells, and stay in control:<br />
              Start With Genie is a leaner, smarter way to launch.
            </motion.p>
            <div className="mb-8">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-2"
              >
                {[
                  "Step-by-step state filing instructions",
                  "Clean EIN guide",
                  "Operating Agreement included",
                  "Instant answers with the Genie Assistant",
                  "$49, flat",
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-neutral-700 text-lg">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <Link href="/">
              <Button size="lg" className="bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] text-white shadow-md hover:brightness-110 px-8 py-4 text-lg font-semibold inline-flex items-center gap-2">
                Launch your LLC with clarity
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </SeoPageLayout>
  );
} 
 

import React from "react";
import { motion } from "framer-motion";
import { Info, CheckCircle, AlertTriangle, Layers, Timer, ArrowRight, XCircle, BookOpen, UserCheck, FileText, HelpCircle, Target } from "lucide-react";
import Link from "next/link";
import SeoPageLayout from "../../components/SeoPageLayout";
import { Button } from "../../components/ui/Button";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function IsLegalZoomWorthItPage() {
  return (
    <SeoPageLayout>
      <div id="is-legalzoom-worth-it">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Is LegalZoom Worth It?
            </motion.h1>
            <motion.p
              className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              A clear-eyed comparison to help you launch your LLC without confusion, upsells, or delays.
            </motion.p>
          </div>
        </section>

        {/* What is LegalZoom? */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">What is LegalZoom?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                LegalZoom is one of the biggest names in online business formation. They’ve helped thousands of people file LLCs, corporations, and trademarks.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                But if you’re a solo founder or small business owner just trying to launch fast and stay lean, it’s worth asking:
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4 font-semibold">
                Are you paying for clarity—or complexity?
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                This page breaks down what LegalZoom actually includes, where the real costs come from, and whether it’s the right choice for your business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The hidden cost of convenience */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                <span className="text-2xl font-semibold text-neutral-900">The hidden cost of convenience</span>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                At first glance, LegalZoom looks simple—start your LLC for $0 + state fees.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                But here’s what that actually means:
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-[340px] w-full text-left border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-4 font-semibold text-gray-700">Feature</th>
                      <th className="py-2 px-4 font-semibold text-gray-700">LegalZoom</th>
                      <th className="py-2 px-4 font-semibold text-gray-700">What You Get</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">LLC Filing</td>
                      <td className="py-2 px-4 border-t border-gray-200">$0 + state fee</td>
                      <td className="py-2 px-4 border-t border-gray-200">Only includes submitting the Articles of Organization</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">Registered Agent</td>
                      <td className="py-2 px-4 border-t border-gray-200">$249/year</td>
                      <td className="py-2 px-4 border-t border-gray-200">Auto-renews unless canceled</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">EIN</td>
                      <td className="py-2 px-4 border-t border-gray-200">$79+</td>
                      <td className="py-2 px-4 border-t border-gray-200">IRS provides this for free</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">Operating Agreement</td>
                      <td className="py-2 px-4 border-t border-gray-200">$99+</td>
                      <td className="py-2 px-4 border-t border-gray-200">Often bundled into mid/high-tier packages</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">Compliance Reminders</td>
                      <td className="py-2 px-4 border-t border-gray-200">$280+/year</td>
                      <td className="py-2 px-4 border-t border-gray-200">Includes alerts you could set in your calendar</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-neutral-700 text-lg font-medium">The actual price of a full setup can be $300–$600+, and many users report being upsold or confused mid-process.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The “package problem” */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-5 h-5 text-gray-700 flex-shrink-0" />
                <span className="text-2xl font-semibold text-neutral-900">The “package problem”</span>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                LegalZoom offers multiple pricing tiers, like:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>Economy</li>
                <li>Standard</li>
                <li>Premium</li>
              </ul>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Each one includes a different mix of features, delivery speeds, and documents—but you often don’t know what’s essential vs optional.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Most new business owners don’t need everything in the top-tier plan. But that’s often what they end up buying.
              </p>
            </motion.div>
          </div>
        </section>

        {/* How long does it take? */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Timer className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-2xl font-semibold text-neutral-900">How long does it take?</span>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Many LegalZoom users experience delays because:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>Their paperwork goes through internal processing before it’s filed</li>
                <li>They get stuck choosing between package tiers</li>
                <li>They’re waiting on documents that were promised in higher-tier bundles</li>
              </ul>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Filing through your state directly is often faster—if you know what you’re doing.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The alternative: Start With Genie */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-2xl font-semibold text-neutral-900">The alternative: Start With Genie</span>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Start With Genie is not a filing service. It’s a $49 assistant that gives you everything you need to launch your LLC yourself—without the confusion, delays, or upsells.
              </p>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4 mt-8">What you get with Genie:</h3>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-[340px] w-full text-left border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-4 font-semibold text-gray-700">Included</th>
                      <th className="py-2 px-4 font-semibold text-gray-700">Genie</th>
                      <th className="py-2 px-4 font-semibold text-gray-700">LegalZoom</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">LLC filing instructions</td>
                      <td className="py-2 px-4 border-t border-gray-200"><CheckCircle className="inline w-5 h-5 text-green-600 align-middle" /></td>
                      <td className="py-2 px-4 border-t border-gray-200"><CheckCircle className="inline w-5 h-5 text-green-600 align-middle" /></td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">EIN guide (free, direct from IRS)</td>
                      <td className="py-2 px-4 border-t border-gray-200"><CheckCircle className="inline w-5 h-5 text-green-600 align-middle" /></td>
                      <td className="py-2 px-4 border-t border-gray-200"><XCircle className="inline w-5 h-5 text-red-500 align-middle" /> <span className="ml-1 text-xs">(often $79+)</span></td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">Single-member Operating Agreement</td>
                      <td className="py-2 px-4 border-t border-gray-200"><CheckCircle className="inline w-5 h-5 text-green-600 align-middle" /></td>
                      <td className="py-2 px-4 border-t border-gray-200"><XCircle className="inline w-5 h-5 text-red-500 align-middle" /> <span className="ml-1 text-xs">($99+ or bundled)</span></td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">Compliance overview</td>
                      <td className="py-2 px-4 border-t border-gray-200"><CheckCircle className="inline w-5 h-5 text-green-600 align-middle" /></td>
                      <td className="py-2 px-4 border-t border-gray-200"><XCircle className="inline w-5 h-5 text-red-500 align-middle" /> <span className="ml-1 text-xs">(bundled w/ alerts)</span></td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">Genie Assistant for help</td>
                      <td className="py-2 px-4 border-t border-gray-200"><CheckCircle className="inline w-5 h-5 text-green-600 align-middle" /></td>
                      <td className="py-2 px-4 border-t border-gray-200"><XCircle className="inline w-5 h-5 text-red-500 align-middle" /></td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">Upsells</td>
                      <td className="py-2 px-4 border-t border-gray-200"><XCircle className="inline w-5 h-5 text-red-500 align-middle" /></td>
                      <td className="py-2 px-4 border-t border-gray-200"><CheckCircle className="inline w-5 h-5 text-green-600 align-middle" /></td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">Flat price</td>
                      <td className="py-2 px-4 border-t border-gray-200">$49</td>
                      <td className="py-2 px-4 border-t border-gray-200">Varies ($0 → $600+)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                You still file directly with your state—but Genie shows you exactly how to do it and gives you the documents banks and partners require.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                No bundles. No confusion. Just clarity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* So… is LegalZoom worth it? */}
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              So… is LegalZoom worth it?
            </motion.h2>
            <motion.p
              className="text-xl text-neutral-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              If you want someone else to do the entire filing for you and don’t mind paying more:<br />
              LegalZoom is a recognizable option with customer support and name recognition.
              <br /><br />
              But if you want to save time, avoid upsells, and stay in control:<br />
              Start With Genie is a leaner, smarter way to launch.
            </motion.p>
            <div className="mb-8">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-2"
              >
                {[
                  "Step-by-step state filing instructions",
                  "Clean EIN guide",
                  "Operating Agreement included",
                  "Instant answers with the Genie Assistant",
                  "$49, flat",
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-neutral-700 text-lg">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <Link href="/">
              <Button size="lg" className="bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] text-white shadow-md hover:brightness-110 px-8 py-4 text-lg font-semibold inline-flex items-center gap-2">
                Launch your LLC with clarity
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </SeoPageLayout>
  );
} 