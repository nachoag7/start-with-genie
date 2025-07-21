"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, FileText, Info, MapPin, UserCheck, BookOpen, Banknote, HelpCircle, ArrowRight, XCircle } from "lucide-react";
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

export default function HowToStartUSLLCFromAbroadPage() {
  return (
    <SeoPageLayout>
      <div id="how-to-start-a-us-llc-from-outside-the-united-states">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              How to Start a U.S. LLC from Outside the United States
            </motion.h1>
            <motion.p
              className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              A modern, step-by-step guide for international founders who want to launch in the U.S. without expensive services or confusing paperwork.
            </motion.p>
          </div>
        </section>

        {/* Can non-U.S. residents start an LLC? */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Can non-U.S. residents start an LLC?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Yes—anyone can start a U.S. LLC. You don’t need to be a U.S. citizen, live in the U.S., or have a Social Security Number.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Many international founders form LLCs in the U.S. to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>Access payment platforms like Stripe, PayPal, and Wise</li>
                <li>Build trust with U.S. customers</li>
                <li>Limit personal liability</li>
                <li>Open a U.S. bank account</li>
                <li>Simplify global operations</li>
              </ul>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                You can do it yourself—if you know the steps.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What you’ll need */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">What you’ll need</h2>
              <ul className="list-none space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />A unique business name</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />A U.S. state to file in (like Delaware or Wyoming)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />A Registered Agent with a U.S. address</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />An EIN (Employer Identification Number)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />A formation fee (varies by state)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />An Operating Agreement (often required by banks)</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Step 1: Choose your state */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Step 1: Choose your state</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                You can form your LLC in any U.S. state, but most international founders choose:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>Delaware: Startup-friendly and well-known globally</li>
                <li>Wyoming: Low filing fees, no income tax, privacy benefits</li>
              </ul>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-neutral-700 text-lg font-medium">Start With Genie includes clear filing instructions for every U.S. state.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Step 2: Get a Registered Agent */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Step 2: Get a Registered Agent</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                You’ll need to list a Registered Agent with a physical U.S. address. This is required in all 50 states.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">Your options:</p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>Use a Registered Agent service (usually $100–$150/year)</li>
                <li>Choose a provider that offers mail forwarding or address privacy</li>
              </ul>
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-neutral-700 text-lg font-medium">Genie explains how to choose a Registered Agent and where to list them in your formation forms.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Step 3: File your LLC */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Step 3: File your LLC</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Once you’ve chosen your state and Registered Agent, you can file your LLC online through the state’s website.
              </p>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-neutral-700 text-lg font-medium">Start With Genie gives you direct links, clear instructions, and a checklist for what to include—so you don’t miss anything.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Step 4: Apply for your EIN */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Step 4: Apply for your EIN</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                You’ll need an EIN (Employer Identification Number) to open a bank account, use Stripe, and file taxes.
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>If you have a Social Security Number (SSN): You can apply online through the IRS</li>
                <li>If you don’t have an SSN: You’ll apply by fax or mail using Form SS-4</li>
              </ul>
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-neutral-700 text-lg font-medium">Start With Genie includes a modern EIN guide that explains both options and helps you avoid common mistakes.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Step 5: Create an Operating Agreement */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Step 5: Create an Operating Agreement</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Most banks, payment processors, and partners will ask for a copy—even if your state doesn’t require it.
              </p>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-neutral-700 text-lg font-medium">Start With Genie includes a clean, customizable Operating Agreement made for single-member LLCs.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Step 6: Open a U.S. bank account */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Step 6: Open a U.S. bank account</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                You don’t need to visit the U.S. to open a business account. Many international founders use:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>Mercury (remote-friendly banking for startups)</li>
                <li>Wise Business (multi-currency support)</li>
                <li>Payoneer, Revolut, or Stripe Atlas</li>
              </ul>
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-neutral-700 text-lg font-medium">Genie helps you gather the right documents to apply, including your EIN, Operating Agreement, and approval letter.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Do you owe U.S. taxes? */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Do you owe U.S. taxes?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Not necessarily.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                If you’re operating outside the U.S. and have no employees or U.S. income sources, you may not owe federal income tax—but you’ll still want to file properly.
              </p>
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-neutral-700 text-lg font-medium">Genie doesn’t give tax advice, but it helps you launch cleanly and understand where to go next.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How Start With Genie helps international founders */}
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              How Start With Genie helps international founders
            </motion.h2>
            <motion.p
              className="text-xl text-neutral-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              Start With Genie is a $49 assistant that gives you everything you need to launch a U.S. LLC—step-by-step, even if you’re outside the U.S.
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
                  "State-specific filing instructions",
                  "A modern EIN guide that explains how to apply with or without an SSN",
                  "A single-member Operating Agreement",
                  "Instant access to the Genie Assistant for help",
                  "No upsells, no bundles, no pressure",
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    {item === "No upsells, no bundles, no pressure" ? (
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    ) : (
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    )}
                    <span className="text-neutral-700 text-lg">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <Link href="/">
              <Button size="lg" className="bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] text-white shadow-md hover:brightness-110 px-8 py-4 text-lg font-semibold inline-flex items-center gap-2">
                Start your U.S. LLC for $49
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
import { CheckCircle, FileText, Info, MapPin, UserCheck, BookOpen, Banknote, HelpCircle, ArrowRight, XCircle } from "lucide-react";
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

export default function HowToStartUSLLCFromAbroadPage() {
  return (
    <SeoPageLayout>
      <div id="how-to-start-a-us-llc-from-outside-the-united-states">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              How to Start a U.S. LLC from Outside the United States
            </motion.h1>
            <motion.p
              className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              A modern, step-by-step guide for international founders who want to launch in the U.S. without expensive services or confusing paperwork.
            </motion.p>
          </div>
        </section>

        {/* Can non-U.S. residents start an LLC? */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Can non-U.S. residents start an LLC?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Yes—anyone can start a U.S. LLC. You don’t need to be a U.S. citizen, live in the U.S., or have a Social Security Number.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Many international founders form LLCs in the U.S. to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>Access payment platforms like Stripe, PayPal, and Wise</li>
                <li>Build trust with U.S. customers</li>
                <li>Limit personal liability</li>
                <li>Open a U.S. bank account</li>
                <li>Simplify global operations</li>
              </ul>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                You can do it yourself—if you know the steps.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What you’ll need */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">What you’ll need</h2>
              <ul className="list-none space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />A unique business name</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />A U.S. state to file in (like Delaware or Wyoming)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />A Registered Agent with a U.S. address</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />An EIN (Employer Identification Number)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />A formation fee (varies by state)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />An Operating Agreement (often required by banks)</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Step 1: Choose your state */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Step 1: Choose your state</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                You can form your LLC in any U.S. state, but most international founders choose:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>Delaware: Startup-friendly and well-known globally</li>
                <li>Wyoming: Low filing fees, no income tax, privacy benefits</li>
              </ul>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-neutral-700 text-lg font-medium">Start With Genie includes clear filing instructions for every U.S. state.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Step 2: Get a Registered Agent */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Step 2: Get a Registered Agent</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                You’ll need to list a Registered Agent with a physical U.S. address. This is required in all 50 states.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">Your options:</p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>Use a Registered Agent service (usually $100–$150/year)</li>
                <li>Choose a provider that offers mail forwarding or address privacy</li>
              </ul>
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-neutral-700 text-lg font-medium">Genie explains how to choose a Registered Agent and where to list them in your formation forms.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Step 3: File your LLC */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Step 3: File your LLC</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Once you’ve chosen your state and Registered Agent, you can file your LLC online through the state’s website.
              </p>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-neutral-700 text-lg font-medium">Start With Genie gives you direct links, clear instructions, and a checklist for what to include—so you don’t miss anything.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Step 4: Apply for your EIN */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Step 4: Apply for your EIN</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                You’ll need an EIN (Employer Identification Number) to open a bank account, use Stripe, and file taxes.
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>If you have a Social Security Number (SSN): You can apply online through the IRS</li>
                <li>If you don’t have an SSN: You’ll apply by fax or mail using Form SS-4</li>
              </ul>
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-neutral-700 text-lg font-medium">Start With Genie includes a modern EIN guide that explains both options and helps you avoid common mistakes.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Step 5: Create an Operating Agreement */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Step 5: Create an Operating Agreement</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Most banks, payment processors, and partners will ask for a copy—even if your state doesn’t require it.
              </p>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-neutral-700 text-lg font-medium">Start With Genie includes a clean, customizable Operating Agreement made for single-member LLCs.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Step 6: Open a U.S. bank account */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Step 6: Open a U.S. bank account</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                You don’t need to visit the U.S. to open a business account. Many international founders use:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>Mercury (remote-friendly banking for startups)</li>
                <li>Wise Business (multi-currency support)</li>
                <li>Payoneer, Revolut, or Stripe Atlas</li>
              </ul>
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-neutral-700 text-lg font-medium">Genie helps you gather the right documents to apply, including your EIN, Operating Agreement, and approval letter.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Do you owe U.S. taxes? */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Do you owe U.S. taxes?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Not necessarily.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                If you’re operating outside the U.S. and have no employees or U.S. income sources, you may not owe federal income tax—but you’ll still want to file properly.
              </p>
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-neutral-700 text-lg font-medium">Genie doesn’t give tax advice, but it helps you launch cleanly and understand where to go next.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How Start With Genie helps international founders */}
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              How Start With Genie helps international founders
            </motion.h2>
            <motion.p
              className="text-xl text-neutral-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              Start With Genie is a $49 assistant that gives you everything you need to launch a U.S. LLC—step-by-step, even if you’re outside the U.S.
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
                  "State-specific filing instructions",
                  "A modern EIN guide that explains how to apply with or without an SSN",
                  "A single-member Operating Agreement",
                  "Instant access to the Genie Assistant for help",
                  "No upsells, no bundles, no pressure",
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    {item === "No upsells, no bundles, no pressure" ? (
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    ) : (
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    )}
                    <span className="text-neutral-700 text-lg">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <Link href="/">
              <Button size="lg" className="bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] text-white shadow-md hover:brightness-110 px-8 py-4 text-lg font-semibold inline-flex items-center gap-2">
                Start your U.S. LLC for $49
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
import { CheckCircle, FileText, Info, MapPin, UserCheck, BookOpen, Banknote, HelpCircle, ArrowRight, XCircle } from "lucide-react";
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

export default function HowToStartUSLLCFromAbroadPage() {
  return (
    <SeoPageLayout>
      <div id="how-to-start-a-us-llc-from-outside-the-united-states">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              How to Start a U.S. LLC from Outside the United States
            </motion.h1>
            <motion.p
              className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              A modern, step-by-step guide for international founders who want to launch in the U.S. without expensive services or confusing paperwork.
            </motion.p>
          </div>
        </section>

        {/* Can non-U.S. residents start an LLC? */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Can non-U.S. residents start an LLC?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Yes—anyone can start a U.S. LLC. You don’t need to be a U.S. citizen, live in the U.S., or have a Social Security Number.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Many international founders form LLCs in the U.S. to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>Access payment platforms like Stripe, PayPal, and Wise</li>
                <li>Build trust with U.S. customers</li>
                <li>Limit personal liability</li>
                <li>Open a U.S. bank account</li>
                <li>Simplify global operations</li>
              </ul>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                You can do it yourself—if you know the steps.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What you’ll need */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">What you’ll need</h2>
              <ul className="list-none space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />A unique business name</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />A U.S. state to file in (like Delaware or Wyoming)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />A Registered Agent with a U.S. address</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />An EIN (Employer Identification Number)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />A formation fee (varies by state)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />An Operating Agreement (often required by banks)</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Step 1: Choose your state */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Step 1: Choose your state</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                You can form your LLC in any U.S. state, but most international founders choose:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>Delaware: Startup-friendly and well-known globally</li>
                <li>Wyoming: Low filing fees, no income tax, privacy benefits</li>
              </ul>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-neutral-700 text-lg font-medium">Start With Genie includes clear filing instructions for every U.S. state.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Step 2: Get a Registered Agent */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Step 2: Get a Registered Agent</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                You’ll need to list a Registered Agent with a physical U.S. address. This is required in all 50 states.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">Your options:</p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>Use a Registered Agent service (usually $100–$150/year)</li>
                <li>Choose a provider that offers mail forwarding or address privacy</li>
              </ul>
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-neutral-700 text-lg font-medium">Genie explains how to choose a Registered Agent and where to list them in your formation forms.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Step 3: File your LLC */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Step 3: File your LLC</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Once you’ve chosen your state and Registered Agent, you can file your LLC online through the state’s website.
              </p>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-neutral-700 text-lg font-medium">Start With Genie gives you direct links, clear instructions, and a checklist for what to include—so you don’t miss anything.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Step 4: Apply for your EIN */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Step 4: Apply for your EIN</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                You’ll need an EIN (Employer Identification Number) to open a bank account, use Stripe, and file taxes.
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>If you have a Social Security Number (SSN): You can apply online through the IRS</li>
                <li>If you don’t have an SSN: You’ll apply by fax or mail using Form SS-4</li>
              </ul>
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-neutral-700 text-lg font-medium">Start With Genie includes a modern EIN guide that explains both options and helps you avoid common mistakes.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Step 5: Create an Operating Agreement */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Step 5: Create an Operating Agreement</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Most banks, payment processors, and partners will ask for a copy—even if your state doesn’t require it.
              </p>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-neutral-700 text-lg font-medium">Start With Genie includes a clean, customizable Operating Agreement made for single-member LLCs.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Step 6: Open a U.S. bank account */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Step 6: Open a U.S. bank account</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                You don’t need to visit the U.S. to open a business account. Many international founders use:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>Mercury (remote-friendly banking for startups)</li>
                <li>Wise Business (multi-currency support)</li>
                <li>Payoneer, Revolut, or Stripe Atlas</li>
              </ul>
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-neutral-700 text-lg font-medium">Genie helps you gather the right documents to apply, including your EIN, Operating Agreement, and approval letter.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Do you owe U.S. taxes? */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Do you owe U.S. taxes?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Not necessarily.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                If you’re operating outside the U.S. and have no employees or U.S. income sources, you may not owe federal income tax—but you’ll still want to file properly.
              </p>
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-neutral-700 text-lg font-medium">Genie doesn’t give tax advice, but it helps you launch cleanly and understand where to go next.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How Start With Genie helps international founders */}
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              How Start With Genie helps international founders
            </motion.h2>
            <motion.p
              className="text-xl text-neutral-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              Start With Genie is a $49 assistant that gives you everything you need to launch a U.S. LLC—step-by-step, even if you’re outside the U.S.
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
                  "State-specific filing instructions",
                  "A modern EIN guide that explains how to apply with or without an SSN",
                  "A single-member Operating Agreement",
                  "Instant access to the Genie Assistant for help",
                  "No upsells, no bundles, no pressure",
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    {item === "No upsells, no bundles, no pressure" ? (
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    ) : (
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    )}
                    <span className="text-neutral-700 text-lg">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <Link href="/">
              <Button size="lg" className="bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] text-white shadow-md hover:brightness-110 px-8 py-4 text-lg font-semibold inline-flex items-center gap-2">
                Start your U.S. LLC for $49
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </SeoPageLayout>
  );
} 