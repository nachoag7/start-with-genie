"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
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

export default function HowToFileLLCWithoutLawyerPage() {
  return (
    <SeoPageLayout>
      <div id="how-to-file-your-llc-without-a-lawyer">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              How to File Your LLC Without a Lawyer
            </motion.h1>
            <motion.p
              className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              A simple guide to forming your LLC on your own—without wasting time, money, or energy.
            </motion.p>
          </div>
        </section>

        {/* Section 1 */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Do I need a lawyer to start an LLC?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                No—you don’t need a lawyer to file an LLC.<br />
                In every U.S. state, you can file your LLC on your own by submitting a few basic forms and paying a filing fee. Most of the process is online, and it only takes about 10–20 minutes once you know what to do.<br />
                A lawyer might charge $500–$2,000+ to handle it for you. But unless your business has complex legal needs or multiple partners with a formal operating structure, you probably don’t need one.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 2 - Steps */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-12"
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">What are the actual steps?</h2>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-8"
            >
              {[
                {
                  number: 1,
                  title: "Choose your state",
                  description:
                    "Where you file your LLC determines your fees, paperwork, and rules. Most people file in the state they live or work in.",
                },
                {
                  number: 2,
                  title: "Pick an LLC name",
                  description:
                    "It needs to be unique and follow your state’s naming rules (like ending in “LLC”).",
                },
                {
                  number: 3,
                  title: "File Articles of Organization",
                  description:
                    "This is the official document that forms your LLC. Every state has its own form and filing fee.",
                },
                {
                  number: 4,
                  title: "Appoint a Registered Agent",
                  description:
                    "This is the person or company who receives legal documents for your LLC. You can often list yourself.",
                },
                {
                  number: 5,
                  title: "Create an Operating Agreement",
                  description:
                    "Optional but recommended. It outlines how your LLC will operate.",
                },
                {
                  number: 6,
                  title: "Get an EIN",
                  description:
                    "Like a Social Security Number for your business. Needed to open a bank account and file taxes. Free from the IRS.",
                },
              ].map((step, idx) => (
                <motion.div
                  key={step.number}
                  variants={fadeInUp}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-700 font-semibold text-lg">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">{step.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section 3 - Is it hard? */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Is it hard to file an LLC on your own?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                It can feel confusing the first time. You’re dealing with state websites, legal-sounding forms, and a lot of little decisions—like whether you need an Operating Agreement or a registered agent service.<br />
                That’s why we built <span className="font-semibold text-blue-700">Start With Genie</span>—a simple $49 assistant that walks you through the entire process, step by step. You still file everything directly with your state—but you’ll have clarity at every step.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 4 - What does Genie include? */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-8"
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">What does Start With Genie include?</h2>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4"
            >
              {[
                "Personalized LLC filing instructions",
                "EIN guide to get your tax ID",
                "Customizable operating agreement",
                "Stay compliant checklist",
                "A Genie assistant to answer your questions",
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
        </section>

        {/* Section 5 - Can I file today? */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Can I file today?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Yes. Most states let you file online in under 20 minutes. Genie gives you everything you need to do it confidently and correctly—without needing to talk to a lawyer or spend hours Googling.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Start your LLC with confidence—not confusion.
            </motion.h2>
            <motion.p
              className="text-xl text-neutral-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              Everything you need. $49, flat. No upsells.
            </motion.p>
            <Link href="/">
              <Button size="lg" className="bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] text-white shadow-md hover:brightness-110 px-8 py-4 text-lg font-semibold inline-flex items-center gap-2">
                Get Started
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
import { CheckCircle, ArrowRight } from "lucide-react";
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

export default function HowToFileLLCWithoutLawyerPage() {
  return (
    <SeoPageLayout>
      <div id="how-to-file-your-llc-without-a-lawyer">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              How to File Your LLC Without a Lawyer
            </motion.h1>
            <motion.p
              className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              A simple guide to forming your LLC on your own—without wasting time, money, or energy.
            </motion.p>
          </div>
        </section>

        {/* Section 1 */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Do I need a lawyer to start an LLC?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                No—you don’t need a lawyer to file an LLC.<br />
                In every U.S. state, you can file your LLC on your own by submitting a few basic forms and paying a filing fee. Most of the process is online, and it only takes about 10–20 minutes once you know what to do.<br />
                A lawyer might charge $500–$2,000+ to handle it for you. But unless your business has complex legal needs or multiple partners with a formal operating structure, you probably don’t need one.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 2 - Steps */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-12"
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">What are the actual steps?</h2>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-8"
            >
              {[
                {
                  number: 1,
                  title: "Choose your state",
                  description:
                    "Where you file your LLC determines your fees, paperwork, and rules. Most people file in the state they live or work in.",
                },
                {
                  number: 2,
                  title: "Pick an LLC name",
                  description:
                    "It needs to be unique and follow your state’s naming rules (like ending in “LLC”).",
                },
                {
                  number: 3,
                  title: "File Articles of Organization",
                  description:
                    "This is the official document that forms your LLC. Every state has its own form and filing fee.",
                },
                {
                  number: 4,
                  title: "Appoint a Registered Agent",
                  description:
                    "This is the person or company who receives legal documents for your LLC. You can often list yourself.",
                },
                {
                  number: 5,
                  title: "Create an Operating Agreement",
                  description:
                    "Optional but recommended. It outlines how your LLC will operate.",
                },
                {
                  number: 6,
                  title: "Get an EIN",
                  description:
                    "Like a Social Security Number for your business. Needed to open a bank account and file taxes. Free from the IRS.",
                },
              ].map((step, idx) => (
                <motion.div
                  key={step.number}
                  variants={fadeInUp}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-700 font-semibold text-lg">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">{step.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section 3 - Is it hard? */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Is it hard to file an LLC on your own?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                It can feel confusing the first time. You’re dealing with state websites, legal-sounding forms, and a lot of little decisions—like whether you need an Operating Agreement or a registered agent service.<br />
                That’s why we built <span className="font-semibold text-blue-700">Start With Genie</span>—a simple $49 assistant that walks you through the entire process, step by step. You still file everything directly with your state—but you’ll have clarity at every step.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 4 - What does Genie include? */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-8"
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">What does Start With Genie include?</h2>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4"
            >
              {[
                "Personalized LLC filing instructions",
                "EIN guide to get your tax ID",
                "Customizable operating agreement",
                "Stay compliant checklist",
                "A Genie assistant to answer your questions",
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
        </section>

        {/* Section 5 - Can I file today? */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Can I file today?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Yes. Most states let you file online in under 20 minutes. Genie gives you everything you need to do it confidently and correctly—without needing to talk to a lawyer or spend hours Googling.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Start your LLC with confidence—not confusion.
            </motion.h2>
            <motion.p
              className="text-xl text-neutral-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              Everything you need. $49, flat. No upsells.
            </motion.p>
            <Link href="/">
              <Button size="lg" className="bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] text-white shadow-md hover:brightness-110 px-8 py-4 text-lg font-semibold inline-flex items-center gap-2">
                Get Started
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
import { CheckCircle, ArrowRight } from "lucide-react";
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

export default function HowToFileLLCWithoutLawyerPage() {
  return (
    <SeoPageLayout>
      <div id="how-to-file-your-llc-without-a-lawyer">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              How to File Your LLC Without a Lawyer
            </motion.h1>
            <motion.p
              className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              A simple guide to forming your LLC on your own—without wasting time, money, or energy.
            </motion.p>
          </div>
        </section>

        {/* Section 1 */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Do I need a lawyer to start an LLC?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                No—you don’t need a lawyer to file an LLC.<br />
                In every U.S. state, you can file your LLC on your own by submitting a few basic forms and paying a filing fee. Most of the process is online, and it only takes about 10–20 minutes once you know what to do.<br />
                A lawyer might charge $500–$2,000+ to handle it for you. But unless your business has complex legal needs or multiple partners with a formal operating structure, you probably don’t need one.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 2 - Steps */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-12"
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">What are the actual steps?</h2>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-8"
            >
              {[
                {
                  number: 1,
                  title: "Choose your state",
                  description:
                    "Where you file your LLC determines your fees, paperwork, and rules. Most people file in the state they live or work in.",
                },
                {
                  number: 2,
                  title: "Pick an LLC name",
                  description:
                    "It needs to be unique and follow your state’s naming rules (like ending in “LLC”).",
                },
                {
                  number: 3,
                  title: "File Articles of Organization",
                  description:
                    "This is the official document that forms your LLC. Every state has its own form and filing fee.",
                },
                {
                  number: 4,
                  title: "Appoint a Registered Agent",
                  description:
                    "This is the person or company who receives legal documents for your LLC. You can often list yourself.",
                },
                {
                  number: 5,
                  title: "Create an Operating Agreement",
                  description:
                    "Optional but recommended. It outlines how your LLC will operate.",
                },
                {
                  number: 6,
                  title: "Get an EIN",
                  description:
                    "Like a Social Security Number for your business. Needed to open a bank account and file taxes. Free from the IRS.",
                },
              ].map((step, idx) => (
                <motion.div
                  key={step.number}
                  variants={fadeInUp}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-700 font-semibold text-lg">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">{step.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section 3 - Is it hard? */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Is it hard to file an LLC on your own?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                It can feel confusing the first time. You’re dealing with state websites, legal-sounding forms, and a lot of little decisions—like whether you need an Operating Agreement or a registered agent service.<br />
                That’s why we built <span className="font-semibold text-blue-700">Start With Genie</span>—a simple $49 assistant that walks you through the entire process, step by step. You still file everything directly with your state—but you’ll have clarity at every step.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 4 - What does Genie include? */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-8"
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">What does Start With Genie include?</h2>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4"
            >
              {[
                "Personalized LLC filing instructions",
                "EIN guide to get your tax ID",
                "Customizable operating agreement",
                "Stay compliant checklist",
                "A Genie assistant to answer your questions",
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
        </section>

        {/* Section 5 - Can I file today? */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Can I file today?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Yes. Most states let you file online in under 20 minutes. Genie gives you everything you need to do it confidently and correctly—without needing to talk to a lawyer or spend hours Googling.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Start your LLC with confidence—not confusion.
            </motion.h2>
            <motion.p
              className="text-xl text-neutral-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              Everything you need. $49, flat. No upsells.
            </motion.p>
            <Link href="/">
              <Button size="lg" className="bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] text-white shadow-md hover:brightness-110 px-8 py-4 text-lg font-semibold inline-flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </SeoPageLayout>
  );
} 