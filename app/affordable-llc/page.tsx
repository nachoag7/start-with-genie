"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, FileCheck, FileLock, ArrowRight } from "lucide-react";
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

export default function AffordableLLCPage() {
  return (
    <SeoPageLayout>
      <div id="affordable-llc">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center gap-4 mb-6"
            >
              <img src="/genie-preview.png" alt="Genie Logo" className="w-24 h-24 md:w-28 md:h-28 object-contain drop-shadow-lg mb-2 opacity-90" />
              <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight">
                Form Your LLC for $49 – Everything Included!
              </h1>
              <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
                Get everything you need to set up your LLC right now—no hidden fees, no upsells.
              </p>
              <Link href="/checkout">
                <Button size="lg" className="mt-6 px-8 py-3 text-lg bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-blue-400 focus:outline-none flex items-center gap-2">
                  Get Started for $49
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* What You Get for $49 */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              What You Get for $49
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div variants={fadeInUp} className="flex flex-col items-center text-center gap-3">
                <FileText className="w-8 h-8 text-blue-600 mb-1" />
                <div className="font-semibold text-lg text-neutral-900">Personalized State-Specific Filing Instructions</div>
                <div className="text-neutral-600 text-base">Step-by-step, clear, and tailored to your state.</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex flex-col items-center text-center gap-3">
                <FileCheck className="w-8 h-8 text-blue-600 mb-1" />
                <div className="font-semibold text-lg text-neutral-900">Step-by-Step Guide to Get Your EIN</div>
                <div className="text-neutral-600 text-base">Get your federal tax ID fast, with no confusion.</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex flex-col items-center text-center gap-3">
                <FileLock className="w-8 h-8 text-blue-600 mb-1" />
                <div className="font-semibold text-lg text-neutral-900">Personalized Operating Agreement</div>
                <div className="text-neutral-600 text-base">Ready for your LLC, easy to customize and print.</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* How Start With Genie Works */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              How Start With Genie Works
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="font-semibold text-lg text-neutral-900">We don’t file your LLC for you.</div>
                <div className="text-neutral-600 text-base">You stay in control and avoid unnecessary fees.</div>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="font-semibold text-lg text-neutral-900">We provide clear, step-by-step instructions tailored to your state.</div>
                <div className="text-neutral-600 text-base">No confusion, no upsells, just clarity.</div>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="font-semibold text-lg text-neutral-900">You get a personalized operating agreement ready for your LLC.</div>
                <div className="text-neutral-600 text-base">Easy to use, ready to sign, and included for free.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals / Testimonials */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">What Our Users Are Saying</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-zinc-50 rounded-xl border border-gray-200 p-6 flex flex-col items-center">
                <p className="text-gray-700 italic text-base mb-3">“I set up my LLC in under an hour. Everything was super clear.”</p>
                <span className="text-xs text-gray-500">Online Boutique – California</span>
              </div>
              <div className="bg-zinc-50 rounded-xl border border-gray-200 p-6 flex flex-col items-center">
                <p className="text-gray-700 italic text-base mb-3">“No hidden fees or surprise upsells. Just what I needed.”</p>
                <span className="text-xs text-gray-500">Mobile Notary – Florida</span>
              </div>
              <div className="bg-zinc-50 rounded-xl border border-gray-200 p-6 flex flex-col items-center">
                <p className="text-gray-700 italic text-base mb-3">“The operating agreement was ready instantly. Saved me time.”</p>
                <span className="text-xs text-gray-500">Freelance Developer – New York</span>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Ready to Start Your LLC?
            </motion.h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              Get everything you need for just $49. No hidden fees, no upsells.
            </p>
            <Link href="/checkout">
              <div className="flex justify-center">
                <Button size="lg" className="px-8 py-3 text-lg bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-blue-400 focus:outline-none flex items-center gap-2">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </SeoPageLayout>
  )
} 