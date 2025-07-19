"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, FileText, ShieldCheck, MapPin, Info, ArrowRight } from "lucide-react";
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

export default function WhatIsARegisteredAgentPage() {
  return (
    <SeoPageLayout>
      <div id="what-is-a-registered-agent">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              What Is a Registered Agent?
            </motion.h1>
            <motion.p
              className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              A clear guide to what they do, why you need one, and how to choose the right setup for your LLC.
            </motion.p>
          </div>
        </section>

        {/* What even is a Registered Agent? */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">What even is a Registered Agent?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Every LLC is legally required to list a Registered Agent when filing. But most first-time founders don’t know what that actually means.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Here’s the short version:
              </p>
              <div className="flex items-start gap-3 mb-4">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-neutral-700 text-lg">A Registered Agent is a person or company responsible for receiving legal documents on behalf of your LLC.</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>Government notices</li>
                <li>Tax documents</li>
                <li>Lawsuits or official correspondence</li>
              </ul>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                They need to be available during normal business hours at a physical address in your state.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why it matters */}
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
                <span className="text-2xl font-semibold text-neutral-900">Why it matters</span>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Your Registered Agent is how the state—and the court system—contacts your business.
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>If someone sues your LLC and your agent isn’t reachable, you could:</li>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Miss a court notice</li>
                  <li>Get hit with late penalties</li>
                  <li>Fall out of compliance with your state</li>
                </ul>
                <li>States can even dissolve your LLC if your agent can’t be reached.</li>
              </ul>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">This is why you can’t just skip it.</p>
            </motion.div>
          </div>
        </section>

        {/* Can you be your own Registered Agent? */}
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
                <span className="text-2xl font-semibold text-neutral-900">Can you be your own Registered Agent?</span>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">Yes. In most states, you can be your own Registered Agent if:</p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>You’re over 18</li>
                <li>You live in the state where your LLC is formed</li>
                <li>You’re available during normal business hours</li>
                <li>You’re comfortable listing your address publicly</li>
              </ul>
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <span className="text-neutral-700 text-lg font-medium">Heads up: The address you list becomes part of the public record. That’s one reason some founders prefer to use a service instead.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* When to use a Registered Agent service */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-2xl font-semibold text-neutral-900">When to use a Registered Agent service</span>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">Here’s when it makes sense to use a professional service instead of doing it yourself:</p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>You work from home and don’t want your address public</li>
                <li>You’re not always at one location during business hours</li>
                <li>You formed your LLC in a different state than where you live</li>
                <li>You want a little more privacy or formality</li>
              </ul>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">Services typically cost $100–$150/year and come with reminders for compliance and renewals.</p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>Northwest Registered Agent</li>
                <li>Incfile</li>
                <li>ZenBusiness</li>
              </ul>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">But if you’re filing on a budget and meet the requirements, being your own agent is perfectly fine.</p>
            </motion.div>
          </div>
        </section>

        {/* Where to list your agent when filing */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-2xl font-semibold text-neutral-900">Where to list your agent when filing</span>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">Most LLC formation forms (online or paper) have a required section for:</p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-600 leading-relaxed mb-4">
                <li>Registered Agent Name</li>
                <li>Registered Agent Address</li>
                <li>Consent to serve as agent (some states)</li>
              </ul>
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <span className="text-neutral-700 text-lg font-medium">Don’t overthink it—just make sure the address is real, physical, and monitored. PO Boxes are usually not allowed.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Need help choosing? CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Need help choosing?
            </motion.h2>
            <motion.p
              className="text-xl text-neutral-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              Start With Genie gives you clear, modern guidance on whether to list yourself or use a service.
            </motion.p>
            <div className="mb-8">
              <div className="text-lg text-neutral-700 font-medium mb-2">Included with Genie:</div>
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-2"
              >
                {[
                  "Plain-English explanation of Registered Agents",
                  "State-specific instructions that show where to enter agent info",
                  "The Genie Assistant to answer questions instantly as you go",
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