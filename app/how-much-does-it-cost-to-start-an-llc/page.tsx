"use client";

import React from "react";
import { motion } from "framer-motion";
import { DollarSign, Info, FileText, CheckCircle, Wrench, MapPin, Banknote, AlertTriangle, Target, ArrowRight, UserCheck, BookOpen, Folder, ShieldCheck } from "lucide-react";
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

export default function HowMuchDoesItCostToStartLLCPage() {
  return (
    <SeoPageLayout>
      <div id="how-much-does-it-cost-to-start-an-llc">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              How Much Does It Cost to Start an LLC?
            </motion.h1>
            <motion.p
              className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              A clear breakdown of state fees, hidden costs, and how to launch smart—without overspending.
            </motion.p>
          </div>
        </section>

        {/* The real cost of starting an LLC */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">The real cost of starting an LLC</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Filing an LLC can cost anywhere from $40 to $500+, depending on your state and how you go about it.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                This guide breaks it all down—so you know exactly what you’ll pay, what to avoid, and how to keep it lean without cutting corners.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 1. State filing fee */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-2xl font-semibold text-neutral-900">1. State filing fee</span>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                This is the mandatory cost to officially register your LLC. You pay it directly to your Secretary of State when submitting your Articles of Organization.
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-[340px] w-full text-left border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-4 font-semibold text-gray-700">State</th>
                      <th className="py-2 px-4 font-semibold text-gray-700">Filing Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">Kentucky</td>
                      <td className="py-2 px-4 border-t border-gray-200">$40</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">California</td>
                      <td className="py-2 px-4 border-t border-gray-200">$70</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">Florida</td>
                      <td className="py-2 px-4 border-t border-gray-200">$125</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">Texas</td>
                      <td className="py-2 px-4 border-t border-gray-200">$300</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">Massachusetts</td>
                      <td className="py-2 px-4 border-t border-gray-200">$500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-neutral-700 text-lg font-medium">Each state sets its own price. Genie shows you the exact fee during setup based on your state.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. Registered Agent (optional) */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-2xl font-semibold text-neutral-900">2. Registered Agent (optional)</span>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Every LLC must list a Registered Agent—someone who can receive legal mail during business hours.
              </p>
              <div className="mb-4">
                <span className="text-lg text-neutral-600 leading-relaxed font-medium">Cost:</span>
                <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mt-2">
                  <li>Free (if you list yourself)</li>
                  <li>$100–$150/year (if you use a service)</li>
                </ul>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="w-5 h-5 text-gray-700 flex-shrink-0" />
                <span className="text-neutral-700 text-lg font-medium">Genie explains when you can list yourself and when a service makes sense—no upsells.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. EIN (Employer Identification Number) */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-2xl font-semibold text-neutral-900">3. EIN (Employer Identification Number)</span>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                An EIN is your business’s tax ID. You need one to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>Open a bank account</li>
                <li>File taxes</li>
                <li>Hire employees</li>
              </ul>
              <div className="mb-4">
                <span className="text-lg text-neutral-600 leading-relaxed font-medium">Cost:</span>
                <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mt-2">
                  <li>Free if you apply directly through the IRS</li>
                  <li>$75–$200 if you get tricked by a third-party service</li>
                </ul>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-neutral-700 text-lg font-medium">Genie includes a free, step-by-step EIN guide with direct IRS links. No fluff.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4. Operating Agreement */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-2xl font-semibold text-neutral-900">4. Operating Agreement</span>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Most states don’t require an Operating Agreement—but most banks do.
              </p>
              <div className="mb-4">
                <span className="text-lg text-neutral-600 leading-relaxed font-medium">Cost:</span>
                <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mt-2">
                  <li>Free to $300 depending on where you get it</li>
                  <li>$0 with Genie (single-member template included)</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 5. Business licenses or permits */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Folder className="w-5 h-5 text-gray-700 flex-shrink-0" />
                <span className="text-2xl font-semibold text-neutral-900">5. Business licenses or permits (depends on your work)</span>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Some industries or cities require an extra business license to operate legally.
              </p>
              <div className="mb-4">
                <span className="text-lg text-neutral-600 leading-relaxed font-medium">Examples:</span>
                <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mt-2">
                  <li>Local business license</li>
                  <li>Reseller’s permit</li>
                  <li>Professional certification (like for contractors)</li>
                </ul>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-neutral-700 text-lg font-medium">Genie includes links to check this based on your state—but you’ll apply separately.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 6. Business bank account */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Banknote className="w-5 h-5 text-green-700 flex-shrink-0" />
                <span className="text-2xl font-semibold text-neutral-900">6. Business bank account</span>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Opening a dedicated business checking account is essential for liability protection and tax separation.
              </p>
              <div className="mb-4">
                <span className="text-lg text-neutral-600 leading-relaxed font-medium">Cost:</span>
                <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mt-2">
                  <li>Free at some online banks (Novo, Bluevine)</li>
                  <li>$10–$20/month at traditional banks (can often be waived)</li>
                </ul>
              </div>
              <div className="mb-4">
                <span className="text-lg text-neutral-600 leading-relaxed font-medium">You’ll typically need:</span>
                <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mt-2">
                  <li>Your LLC formation approval</li>
                  <li>EIN</li>
                  <li>Operating Agreement</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Where most people overspend */}
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
                <span className="text-2xl font-semibold text-neutral-900">Where most people overspend</span>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Here’s where the costs add up fast with typical filing services:
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-[340px] w-full text-left border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-4 font-semibold text-gray-700">Add-on</th>
                      <th className="py-2 px-4 font-semibold text-gray-700">Average Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">Registered Agent</td>
                      <td className="py-2 px-4 border-t border-gray-200">$150/year</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">EIN Service</td>
                      <td className="py-2 px-4 border-t border-gray-200">$99</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">Operating Agreement</td>
                      <td className="py-2 px-4 border-t border-gray-200">$125</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200">“Compliance alerts”</td>
                      <td className="py-2 px-4 border-t border-gray-200">$199/year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-neutral-700 text-lg font-medium">Most of this can be done free or included when you know where to look. That’s the Genie difference.</span>
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
              Want a smarter way to launch?
            </motion.h2>
            <motion.p
              className="text-xl text-neutral-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              Start With Genie gives you everything you need to start your LLC—without overspending.
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
                  "LLC filing instructions",
                  "EIN guide",
                  "Single-member Operating Agreement",
                  "State-specific checklists",
                  "Genie Assistant to answer questions as you go",
                  "Just $49, flat",
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