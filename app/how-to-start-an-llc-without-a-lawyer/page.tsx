"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, FileText, UserCheck, BookOpen, Banknote, HelpCircle, ArrowRight, XCircle, Users, Shield, Clock, AlertCircle } from "lucide-react";
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

export default function HowToStartLLCWithoutLawyerPage() {
  return (
    <SeoPageLayout>
      <div id="how-to-start-an-llc-without-a-lawyer">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              How to Start an LLC Without a Lawyer
            </motion.h1>
            <motion.p
              className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              A clear, step-by-step guide—no legal team or expensive middlemen required.
            </motion.p>
          </div>
        </section>

        {/* Can You Start an LLC Without a Lawyer? */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Can You Start an LLC Without a Lawyer?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Yes. In almost every case, you don't need a lawyer to start an LLC. Most states let you file online, the IRS gives out EINs for free, and the documents you need are simple to understand when explained clearly.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                You just need the right steps—and a little confidence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What You Actually Need */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">What You Actually Need</h2>
              <ul className="list-none space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />A business name that's available in your state</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />A state to register in</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />A registered agent (this can be you)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />An EIN (free from the IRS)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />An operating agreement</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />A plan to keep your LLC compliant</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Step-by-Step: How to Start an LLC Without a Lawyer */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-8">Step-by-Step: How to Start an LLC Without a Lawyer</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Pick Your Business Name</h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">Make sure it includes "LLC" or "Limited Liability Company" and is available in your state. Most states have a search tool on their business filing website.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Choose Your State</h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">You can form your LLC in any state, but most people register where they live or operate. Each state has a filing fee, online portal, and different processing times.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">File Your Articles of Organization</h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">This is the document that officially forms your LLC. You'll file it with your Secretary of State—usually online—in about 15–30 minutes.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">4</div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Get an EIN (Employer Identification Number)</h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">The IRS issues EINs for free. You can apply online and receive it instantly. It acts like a Social Security Number for your business.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">5</div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Write an Operating Agreement</h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">This document explains how your LLC is structured. Even if not required by your state, it's helpful for legal clarity and opening a business bank account.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">6</div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Open a Business Bank Account</h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">Keep your business and personal finances separate. Most banks will ask for your Articles of Organization, EIN, and operating agreement.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">7</div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Stay Compliant</h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">You may need to file an annual report, pay a state renewal fee, and keep your registered agent and contact info up to date. Visit your state's site for exact rules.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What Lawyers Usually Do (That You Don't Need) */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">What Lawyers Usually Do (That You Don't Need)</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Lawyers typically fill out forms, create generic documents, and charge $500–$2,000 for something you can do yourself online. Unless you have complex ownership or investors, you probably don't need one.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Easier Way: Start With Genie */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">The Easier Way: Start With Genie</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                If you want a faster, more confident way to launch your LLC—without lawyers, upsells, or confusing packages—Start With Genie gives you everything you need in one place:
              </p>
              <ul className="list-none space-y-2 text-lg text-neutral-600 leading-relaxed mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />State-specific filing instructions</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />EIN application help</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />Operating agreement</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />Clean dashboard with your documents</li>
              </ul>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Just $49. One-time. No surprises.
              </p>
              <Link href="/checkout">
                <Button size="lg" className="bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] text-white shadow-md hover:brightness-110 px-8 py-4 text-lg font-semibold inline-flex items-center gap-2">
                  Get started now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-8">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Do I need a lawyer to start an LLC?</h3>
                  <p className="text-lg text-neutral-600 leading-relaxed">No. Most people can do it themselves online. A lawyer may be useful if you have complex ownership, legal disputes, or investors—but for most small businesses, it's unnecessary.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Is it safe to file my own LLC?</h3>
                  <p className="text-lg text-neutral-600 leading-relaxed">Yes. As long as you follow your state's steps and stay compliant, it's 100% legitimate and secure.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">What if I mess something up?</h3>
                  <p className="text-lg text-neutral-600 leading-relaxed">Most filing mistakes can be fixed. Start With Genie gives you clear steps to help avoid common errors.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">What's the fastest way to do all this?</h3>
                  <p className="text-lg text-neutral-600 leading-relaxed">Use a step-by-step system like Start With Genie. It gives you all the instructions and documents you need in one place.</p>
                </div>
              </div>
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
              Ready to start your LLC?
            </motion.h2>
            <motion.p
              className="text-xl text-neutral-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              Get everything you need to launch your LLC—step-by-step instructions, documents, and support.
            </motion.p>
            <Link href="/">
              <Button size="lg" className="bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] text-white shadow-md hover:brightness-110 px-8 py-4 text-lg font-semibold inline-flex items-center gap-2">
                Start your LLC for $49
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
import { CheckCircle, FileText, UserCheck, BookOpen, Banknote, HelpCircle, ArrowRight, XCircle, Users, Shield, Clock, AlertCircle } from "lucide-react";
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

export default function HowToStartLLCWithoutLawyerPage() {
  return (
    <SeoPageLayout>
      <div id="how-to-start-an-llc-without-a-lawyer">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              How to Start an LLC Without a Lawyer
            </motion.h1>
            <motion.p
              className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              A clear, step-by-step guide—no legal team or expensive middlemen required.
            </motion.p>
          </div>
        </section>

        {/* Can You Start an LLC Without a Lawyer? */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Can You Start an LLC Without a Lawyer?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Yes. In almost every case, you don't need a lawyer to start an LLC. Most states let you file online, the IRS gives out EINs for free, and the documents you need are simple to understand when explained clearly.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                You just need the right steps—and a little confidence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What You Actually Need */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">What You Actually Need</h2>
              <ul className="list-none space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />A business name that's available in your state</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />A state to register in</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />A registered agent (this can be you)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />An EIN (free from the IRS)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />An operating agreement</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />A plan to keep your LLC compliant</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Step-by-Step: How to Start an LLC Without a Lawyer */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-8">Step-by-Step: How to Start an LLC Without a Lawyer</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Pick Your Business Name</h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">Make sure it includes "LLC" or "Limited Liability Company" and is available in your state. Most states have a search tool on their business filing website.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Choose Your State</h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">You can form your LLC in any state, but most people register where they live or operate. Each state has a filing fee, online portal, and different processing times.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">File Your Articles of Organization</h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">This is the document that officially forms your LLC. You'll file it with your Secretary of State—usually online—in about 15–30 minutes.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">4</div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Get an EIN (Employer Identification Number)</h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">The IRS issues EINs for free. You can apply online and receive it instantly. It acts like a Social Security Number for your business.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">5</div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Write an Operating Agreement</h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">This document explains how your LLC is structured. Even if not required by your state, it's helpful for legal clarity and opening a business bank account.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">6</div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Open a Business Bank Account</h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">Keep your business and personal finances separate. Most banks will ask for your Articles of Organization, EIN, and operating agreement.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">7</div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Stay Compliant</h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">You may need to file an annual report, pay a state renewal fee, and keep your registered agent and contact info up to date. Visit your state's site for exact rules.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What Lawyers Usually Do (That You Don't Need) */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">What Lawyers Usually Do (That You Don't Need)</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Lawyers typically fill out forms, create generic documents, and charge $500–$2,000 for something you can do yourself online. Unless you have complex ownership or investors, you probably don't need one.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Easier Way: Start With Genie */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">The Easier Way: Start With Genie</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                If you want a faster, more confident way to launch your LLC—without lawyers, upsells, or confusing packages—Start With Genie gives you everything you need in one place:
              </p>
              <ul className="list-none space-y-2 text-lg text-neutral-600 leading-relaxed mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />State-specific filing instructions</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />EIN application help</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />Operating agreement</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />Clean dashboard with your documents</li>
              </ul>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Just $49. One-time. No surprises.
              </p>
              <Link href="/checkout">
                <Button size="lg" className="bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] text-white shadow-md hover:brightness-110 px-8 py-4 text-lg font-semibold inline-flex items-center gap-2">
                  Get started now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-8">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Do I need a lawyer to start an LLC?</h3>
                  <p className="text-lg text-neutral-600 leading-relaxed">No. Most people can do it themselves online. A lawyer may be useful if you have complex ownership, legal disputes, or investors—but for most small businesses, it's unnecessary.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Is it safe to file my own LLC?</h3>
                  <p className="text-lg text-neutral-600 leading-relaxed">Yes. As long as you follow your state's steps and stay compliant, it's 100% legitimate and secure.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">What if I mess something up?</h3>
                  <p className="text-lg text-neutral-600 leading-relaxed">Most filing mistakes can be fixed. Start With Genie gives you clear steps to help avoid common errors.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">What's the fastest way to do all this?</h3>
                  <p className="text-lg text-neutral-600 leading-relaxed">Use a step-by-step system like Start With Genie. It gives you all the instructions and documents you need in one place.</p>
                </div>
              </div>
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
              Ready to start your LLC?
            </motion.h2>
            <motion.p
              className="text-xl text-neutral-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              Get everything you need to launch your LLC—step-by-step instructions, documents, and support.
            </motion.p>
            <Link href="/">
              <Button size="lg" className="bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] text-white shadow-md hover:brightness-110 px-8 py-4 text-lg font-semibold inline-flex items-center gap-2">
                Start your LLC for $49
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
import { CheckCircle, FileText, UserCheck, BookOpen, Banknote, HelpCircle, ArrowRight, XCircle, Users, Shield, Clock, AlertCircle } from "lucide-react";
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

export default function HowToStartLLCWithoutLawyerPage() {
  return (
    <SeoPageLayout>
      <div id="how-to-start-an-llc-without-a-lawyer">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              How to Start an LLC Without a Lawyer
            </motion.h1>
            <motion.p
              className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              A clear, step-by-step guide—no legal team or expensive middlemen required.
            </motion.p>
          </div>
        </section>

        {/* Can You Start an LLC Without a Lawyer? */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Can You Start an LLC Without a Lawyer?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Yes. In almost every case, you don't need a lawyer to start an LLC. Most states let you file online, the IRS gives out EINs for free, and the documents you need are simple to understand when explained clearly.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                You just need the right steps—and a little confidence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What You Actually Need */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">What You Actually Need</h2>
              <ul className="list-none space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />A business name that's available in your state</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />A state to register in</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />A registered agent (this can be you)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />An EIN (free from the IRS)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />An operating agreement</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />A plan to keep your LLC compliant</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Step-by-Step: How to Start an LLC Without a Lawyer */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-8">Step-by-Step: How to Start an LLC Without a Lawyer</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Pick Your Business Name</h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">Make sure it includes "LLC" or "Limited Liability Company" and is available in your state. Most states have a search tool on their business filing website.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Choose Your State</h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">You can form your LLC in any state, but most people register where they live or operate. Each state has a filing fee, online portal, and different processing times.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">File Your Articles of Organization</h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">This is the document that officially forms your LLC. You'll file it with your Secretary of State—usually online—in about 15–30 minutes.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">4</div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Get an EIN (Employer Identification Number)</h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">The IRS issues EINs for free. You can apply online and receive it instantly. It acts like a Social Security Number for your business.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">5</div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Write an Operating Agreement</h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">This document explains how your LLC is structured. Even if not required by your state, it's helpful for legal clarity and opening a business bank account.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">6</div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Open a Business Bank Account</h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">Keep your business and personal finances separate. Most banks will ask for your Articles of Organization, EIN, and operating agreement.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">7</div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Stay Compliant</h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">You may need to file an annual report, pay a state renewal fee, and keep your registered agent and contact info up to date. Visit your state's site for exact rules.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What Lawyers Usually Do (That You Don't Need) */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">What Lawyers Usually Do (That You Don't Need)</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Lawyers typically fill out forms, create generic documents, and charge $500–$2,000 for something you can do yourself online. Unless you have complex ownership or investors, you probably don't need one.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Easier Way: Start With Genie */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">The Easier Way: Start With Genie</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                If you want a faster, more confident way to launch your LLC—without lawyers, upsells, or confusing packages—Start With Genie gives you everything you need in one place:
              </p>
              <ul className="list-none space-y-2 text-lg text-neutral-600 leading-relaxed mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />State-specific filing instructions</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />EIN application help</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />Operating agreement</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" />Clean dashboard with your documents</li>
              </ul>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Just $49. One-time. No surprises.
              </p>
              <Link href="/checkout">
                <Button size="lg" className="bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] text-white shadow-md hover:brightness-110 px-8 py-4 text-lg font-semibold inline-flex items-center gap-2">
                  Get started now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-8">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Do I need a lawyer to start an LLC?</h3>
                  <p className="text-lg text-neutral-600 leading-relaxed">No. Most people can do it themselves online. A lawyer may be useful if you have complex ownership, legal disputes, or investors—but for most small businesses, it's unnecessary.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Is it safe to file my own LLC?</h3>
                  <p className="text-lg text-neutral-600 leading-relaxed">Yes. As long as you follow your state's steps and stay compliant, it's 100% legitimate and secure.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">What if I mess something up?</h3>
                  <p className="text-lg text-neutral-600 leading-relaxed">Most filing mistakes can be fixed. Start With Genie gives you clear steps to help avoid common errors.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">What's the fastest way to do all this?</h3>
                  <p className="text-lg text-neutral-600 leading-relaxed">Use a step-by-step system like Start With Genie. It gives you all the instructions and documents you need in one place.</p>
                </div>
              </div>
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
              Ready to start your LLC?
            </motion.h2>
            <motion.p
              className="text-xl text-neutral-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              Get everything you need to launch your LLC—step-by-step instructions, documents, and support.
            </motion.p>
            <Link href="/">
              <Button size="lg" className="bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] text-white shadow-md hover:brightness-110 px-8 py-4 text-lg font-semibold inline-flex items-center gap-2">
                Start your LLC for $49
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </SeoPageLayout>
  );
} 