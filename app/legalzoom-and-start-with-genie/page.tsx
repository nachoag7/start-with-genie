"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import SeoPageLayout from "../../components/SeoPageLayout";
import { Button } from "../../components/ui/Button";
import Footer from "../../components/Footer";

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

export default function LegalZoomAndStartWithGeniePage() {
  return (
    <SeoPageLayout>
      <div id="legalzoom-and-start-with-genie">
        {/* Hero Section (restored) */}
        <section className="hero-section text-center px-4 py-16">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Thought About Using LegalZoom?
          </h1>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            You’re not alone — we were there too. Until we realized there was a simpler way to start our LLC.
          </p>
        </section>

        {/* Familiar LegalZoom Hesitations */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              If you’re hesitating on LegalZoom, this might sound familiar:
            </motion.h2>
            <motion.ul
              className="list-disc list-inside space-y-3 text-lg text-neutral-700 pl-2"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              {["Wait… why is something that said $0 now $249?", "Do I really need all these add-ons?", "I just want to start my business — why does this feel like I’m hiring a law firm?"].map((item, idx) => (
                <motion.li key={idx} variants={fadeInUp}>{item}</motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* Why Genie Section */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.p
              className="text-lg text-neutral-600 leading-relaxed mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              That’s exactly why we built Start With Genie — the $49 assistant that gives you everything you need to launch your LLC without the confusion, upsells, or legal pressure.
            </motion.p>
          </div>
        </section>

        {/* What you get with Genie */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              What you get with Start With Genie — for just $49:
            </motion.h2>
            <motion.ul
              className="list-disc list-inside space-y-3 text-lg text-neutral-700 pl-2"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              {["State-specific filing instructions", "Step-by-step EIN guidance", "A customizable operating agreement", "A built-in AI assistant to answer questions as you go", "Instant access — no upsells, no subscriptions, no lawyers"].map((item, idx) => (
                <motion.li key={idx} variants={fadeInUp} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* Honest Comparison Table */}
        <section className="comparison-section py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-2xl md:text-3xl font-bold text-neutral-900 mb-2 text-center">Start With Genie vs LegalZoom</h2>
            <p className="section-subtitle text-lg text-neutral-600 mb-8 text-center">An honest breakdown of what’s included—so you can choose what fits you best.</p>
            {/* Desktop Table */}
            <div className="hidden md:block">
              <table className="comparison-table w-full text-base border-separate border-spacing-0 rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 font-semibold text-gray-700 text-left">Feature</th>
                    <th className="py-3 px-4 font-semibold text-gray-700 text-center">LegalZoom</th>
                    <th className="py-3 px-4 font-semibold text-gray-700 text-center" style={{ background: '#f3fafe' }}>Start With Genie</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-neutral-800">Total Cost</td>
                    <td className="py-4 px-4 text-center">$199+</td>
                    <td className="py-4 px-4 text-center" style={{ background: '#f3fafe' }}>$49</td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-neutral-800">EIN Help</td>
                    <td className="py-4 px-4 text-center"><Check className="text-green-500 w-6 h-6 mx-auto" /></td>
                    <td className="py-4 px-4 text-center" style={{ background: '#f3fafe' }}><Check className="text-green-500 w-6 h-6 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-neutral-800">Operating Agreement</td>
                    <td className="py-4 px-4 text-center"><Check className="text-green-500 w-6 h-6 mx-auto" /></td>
                    <td className="py-4 px-4 text-center" style={{ background: '#f3fafe' }}><Check className="text-green-500 w-6 h-6 mx-auto" /></td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-neutral-800">State-Specific Filing Steps</td>
                    <td className="py-4 px-4 text-center"><X className="text-red-500 w-6 h-6 mx-auto" /></td>
                    <td className="py-4 px-4 text-center" style={{ background: '#f3fafe' }}><Check className="text-green-500 w-6 h-6 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-neutral-800">Lawyer Help</td>
                    <td className="py-4 px-4 text-center"><Check className="text-green-500 w-6 h-6 mx-auto" /></td>
                    <td className="py-4 px-4 text-center" style={{ background: '#f3fafe' }}><X className="text-red-500 w-6 h-6 mx-auto" /></td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-neutral-800">Smart Help Tool (AI Assistant)</td>
                    <td className="py-4 px-4 text-center"><X className="text-red-500 w-6 h-6 mx-auto" /></td>
                    <td className="py-4 px-4 text-center" style={{ background: '#f3fafe' }}><Check className="text-green-500 w-6 h-6 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-neutral-800">Control + Flexibility</td>
                    <td className="py-4 px-4 text-center"><X className="text-red-500 w-6 h-6 mx-auto" /></td>
                    <td className="py-4 px-4 text-center" style={{ background: '#f3fafe' }}><Check className="text-green-500 w-6 h-6 mx-auto" /></td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-neutral-800">Upsells</td>
                    <td className="py-4 px-4 text-center"><Check className="text-green-500 w-6 h-6 mx-auto" /></td>
                    <td className="py-4 px-4 text-center" style={{ background: '#f3fafe' }}><X className="text-red-500 w-6 h-6 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-neutral-800">Instant Access</td>
                    <td className="py-4 px-4 text-center"><X className="text-red-500 w-6 h-6 mx-auto" /></td>
                    <td className="py-4 px-4 text-center" style={{ background: '#f3fafe' }}><Check className="text-green-500 w-6 h-6 mx-auto" /></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-4 font-medium text-neutral-800">Best For</td>
                    <td className="py-4 px-4 text-center">People who want everything done for them</td>
                    <td className="py-4 px-4 text-center font-semibold" style={{ background: '#f3fafe' }}>Founders who want clarity and control</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Mobile stacked version */}
            <div className="md:hidden flex flex-col gap-4 mt-8">
              {[
                { feature: "Total Cost", lz: "$199+", genie: "$49" },
                { feature: "EIN Help", lz: <Check className="text-green-500 w-6 h-6 mx-auto" />, genie: <Check className="text-green-500 w-6 h-6 mx-auto" /> },
                { feature: "Operating Agreement", lz: <Check className="text-green-500 w-6 h-6 mx-auto" />, genie: <Check className="text-green-500 w-6 h-6 mx-auto" /> },
                { feature: "State-Specific Filing Steps", lz: <X className="text-red-500 w-6 h-6 mx-auto" />, genie: <Check className="text-green-500 w-6 h-6 mx-auto" /> },
                { feature: "Lawyer Help", lz: <Check className="text-green-500 w-6 h-6 mx-auto" />, genie: <X className="text-red-500 w-6 h-6 mx-auto" /> },
                { feature: "Smart Help Tool (AI Assistant)", lz: <X className="text-red-500 w-6 h-6 mx-auto" />, genie: <Check className="text-green-500 w-6 h-6 mx-auto" /> },
                { feature: "Control + Flexibility", lz: <X className="text-red-500 w-6 h-6 mx-auto" />, genie: <Check className="text-green-500 w-6 h-6 mx-auto" /> },
                { feature: "Upsells", lz: <Check className="text-green-500 w-6 h-6 mx-auto" />, genie: <X className="text-red-500 w-6 h-6 mx-auto" /> },
                { feature: "Instant Access", lz: <X className="text-red-500 w-6 h-6 mx-auto" />, genie: <Check className="text-green-500 w-6 h-6 mx-auto" /> },
                { feature: "Best For", lz: "People who want everything done for them", genie: <span className="font-semibold">Founders who want clarity and control</span> },
              ].map((row, idx) => (
                <div key={row.feature} className={`rounded-xl border border-gray-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                  <div className="py-3 px-4 font-medium text-neutral-800 border-b border-gray-100 text-left">{row.feature}</div>
                  <div className="flex">
                    <div className="w-1/2 py-4 px-4 text-center border-r border-gray-100">
                      <div className="text-xs text-gray-500 mb-1 font-semibold">LegalZoom</div>
                      <div>{row.lz}</div>
                    </div>
                    <div className="w-1/2 py-4 px-4 text-center" style={{ background: '#f3fafe' }}>
                      <div className="text-xs text-blue-700 mb-1 font-semibold">Start With Genie</div>
                      <div>{row.genie}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* No Lawyer Needed Section (replaced with new fade-in section) */}
        <motion.section
          className="hero-section text-center px-4 py-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            You don’t need a lawyer to figure this out
          </h1>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            Everything you need to start your business for $49. Step-by-step. Instant access.
          </p>
          <div className="mt-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              <Link href="/checkout">
                <Button className="mt-6 px-8 py-3 text-lg">
                  Start for $49 &rarr;
                </Button>
              </Link>
              <p className="mt-4 text-sm text-gray-500 text-center">Everything you need. One price.</p>
            </motion.div>
          </div>
        </motion.section>
        {/* Footer */}
        <Footer />
      </div>
    </SeoPageLayout>
  );
} 