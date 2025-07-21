"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, FileText, Info, Briefcase, Wrench, ArrowRight } from "lucide-react";
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

export default function DoYouNeedOperatingAgreementPage() {
  return (
    <SeoPageLayout>
      <div id="do-you-need-an-operating-agreement">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Do You Need an Operating Agreement for Your LLC?
            </motion.h1>
            <motion.p
              className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              Why it matters—even if your state doesn’t require it—and what to include in yours.
            </motion.p>
          </div>
        </section>

        {/* What is an Operating Agreement? */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">What is an Operating Agreement?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                An Operating Agreement is a document that outlines how your LLC will be run. It’s basically the rulebook for your business.
              </p>
              <div className="mb-4">
                <span className="text-lg text-neutral-600 leading-relaxed">It covers:</span>
                <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mt-2">
                  <li>Who owns the LLC</li>
                  <li>How profits are handled</li>
                  <li>What happens if you close the business</li>
                  <li>How decisions are made</li>
                </ul>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Even if you’re the only owner, this document helps show the IRS and courts that your business is separate from you personally.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Is it legally required? */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-2xl font-semibold text-neutral-900">Is it legally required?</span>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Only a few states legally require an Operating Agreement. But here’s the truth:
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                You still need one—even if your state doesn’t.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Why? Because it protects your limited liability status. Without it, you’re at higher risk of:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>Legal confusion about how your business is structured</li>
                <li>Problems opening a business bank account</li>
                <li>Courts “piercing the corporate veil” and holding you personally liable</li>
              </ul>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                An Operating Agreement helps prove you’re operating a real, separate business—not just using a name.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What to include in your Operating Agreement */}
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
                <span className="text-2xl font-semibold text-neutral-900">What to include in your Operating Agreement</span>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">For single-member LLCs, a solid Operating Agreement should include:</p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>LLC name and address</li>
                <li>Purpose of the business</li>
                <li>Your name as the sole owner</li>
                <li>How profits and losses are treated</li>
                <li>What happens if the business closes</li>
                <li>How the agreement can be updated</li>
              </ul>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                It doesn’t need to be long. It just needs to be clear and consistent with your filings.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Do banks require it? */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-2xl font-semibold text-neutral-900">Do banks require it?</span>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">Yes—most business banks require an Operating Agreement to open an account.<br />Even if you’re the only member.</p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">They usually ask for:</p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>Your EIN</li>
                <li>Your LLC formation confirmation</li>
                <li>Your Operating Agreement</li>
              </ul>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">Having it ready makes opening a business bank account faster and easier.</p>
            </motion.div>
          </div>
        </section>

        {/* Can you write one yourself? */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-2xl font-semibold text-neutral-900">Can you write one yourself?</span>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">Yes. You don’t need a lawyer to create an Operating Agreement if you’re a single-member LLC.</p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">Just make sure you use a clean, professional template that matches your state requirements and shows that you’re following formal business practices.</p>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-neutral-700 text-lg font-medium">Start With Genie gives you a customizable, single-member Operating Agreement included with your setup.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Want to create yours today?
            </motion.h2>
            <motion.p
              className="text-xl text-neutral-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              Start With Genie includes a professional single-member Operating Agreement—plus step-by-step guidance for launching your LLC.
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
                  "Designed to meet bank and legal requirements",
                  "Genie Assistant included to help answer setup questions",
                  "Just $49, no upsells",
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
                Get started now
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </SeoPageLayout>
  );
} 