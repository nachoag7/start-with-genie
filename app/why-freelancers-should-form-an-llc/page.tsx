"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";
import SeoPageLayout from "../../components/SeoPageLayout";
import { Button } from "../../components/ui/Button";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function WhyFreelancersShouldFormLLCPage() {
  return (
    <SeoPageLayout>
      <div id="why-freelancers-should-form-an-llc">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Why Freelancers Should Form an LLC
            </motion.h1>
            <motion.p
              className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              Make your business official, protect yourself, and unlock real advantages.
            </motion.p>
          </div>
        </section>

        {/* Freelancing is a business—treat it like one. */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Freelancing is a business—treat it like one.</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                You’re landing clients, sending invoices, and collecting payments.<br />But if you’re still operating under your own name, you’re missing out on protection, professionalism, and opportunities.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Here’s why thousands of freelancers are forming LLCs—and why it might be the smartest next step for you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The real benefits of forming an LLC as a freelancer */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">The real benefits of forming an LLC as a freelancer</h2>
              <ul className="list-none space-y-6 text-lg text-neutral-600 leading-relaxed mb-4">
                <li className="flex items-start gap-3"><span><span className="font-semibold text-neutral-900">Protect your personal assets</span><br />If a client sues you or there’s a contract issue, your personal savings could be at risk. An LLC separates your business legally—so your personal assets stay safe.</span></li>
                <li className="flex items-start gap-3"><span><span className="font-semibold text-neutral-900">Look more professional</span><br />Clients take you more seriously when your invoices and contracts come from a real business name. It helps you charge more—and win better work.</span></li>
                <li className="flex items-start gap-3"><span><span className="font-semibold text-neutral-900">Open a business bank account</span><br />No more mixing PayPal income with your personal checking. A business account keeps things clean and unlocks better financial tools.</span></li>
                <li className="flex items-start gap-3"><span><span className="font-semibold text-neutral-900">Make tax season easier (and smarter)</span><br />With an LLC, you can separate business income and expenses—making deductions easier and your accountant happier. You might even save money.</span></li>
                <li className="flex items-start gap-3"><span><span className="font-semibold text-neutral-900">Future-proof your business</span><br />An LLC makes it easier to grow, hire, and build real systems—whether you stay solo or scale up.</span></li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* But most freelancers don’t do it. Why? */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">But most freelancers don’t do it. Why?</h2>
              <ul className="list-disc ml-6 text-neutral-600 space-y-2 mb-4">
                <li>Legal sites are confusing or expensive</li>
                <li>Hiring a lawyer can cost over $1,000</li>
                <li>State websites are overwhelming</li>
                <li>You don’t know where to start</li>
              </ul>
              <p className="text-neutral-700">That’s where <span className="font-semibold">Start With Genie</span> comes in.</p>
            </motion.div>
          </div>
        </section>

        {/* Start With Genie gives freelancers a better way to launch their LLC */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Start With Genie gives freelancers a better way to launch their LLC</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">For just $49, Genie gives you a silent assistant to walk you through setup—without filing anything for you.</p>
              <ul className="list-none space-y-4 text-lg text-neutral-700 mb-8">
                <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-green-600 mt-1" /><span>State-specific LLC instructions</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-green-600 mt-1" /><span>Help applying for your EIN (Tax ID)</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-green-600 mt-1" /><span>A clean Operating Agreement</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-green-600 mt-1" /><span>A startup checklist</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-green-600 mt-1" /><span>Instant answers via your Genie Assistant</span></li>
              </ul>
              <p className="text-neutral-700 italic mb-2">No legal fees. No upsells. No stress.</p>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Ready to go from freelance to legit business?
            </motion.h2>
            <motion.p
              className="text-xl text-neutral-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              Start With Genie helps you launch your LLC the right way—without the overwhelm.<br />Clean documents, simple steps, and real clarity.
            </motion.p>
            <Link href="/checkout">
              <Button size="lg" className="bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] text-white shadow-md hover:brightness-110 px-8 py-4 text-lg font-semibold inline-flex items-center gap-2">
                Get Started for $49
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </SeoPageLayout>
  );
} 