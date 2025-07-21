"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, UserCheck, Users, FileText, ArrowRight, HelpCircle, Shield } from "lucide-react";
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

export default function DoYouNeedALawyerLLC() {
  return (
    <SeoPageLayout>
      {/* Hero Section */}
      <motion.section
        className="py-16 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            variants={fadeInUp}
          >
            Do You Need a Lawyer to Start an LLC?
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 leading-relaxed"
            variants={fadeInUp}
          >
            For most people, the answer is no. Starting an LLC is a legal process, but not one that requires a lawyer in most states.
          </motion.p>
        </div>
      </motion.section>

      {/* When You Don't Need a Lawyer */}
      <motion.section
        className="py-16 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex items-center mb-8"
            variants={fadeInUp}
          >
            <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              When You Don't Need a Lawyer
            </h2>
          </motion.div>
          
          <motion.ul
            className="space-y-4 mb-8"
            variants={staggerContainer}
          >
            <motion.li
              className="flex items-start"
              variants={fadeInUp}
            >
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">You're a solo founder or freelancer</span>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={fadeInUp}
            >
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">You're not raising money or bringing on investors</span>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={fadeInUp}
            >
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">You're forming an LLC in your home state</span>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={fadeInUp}
            >
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">You want to keep things simple and move fast</span>
            </motion.li>
          </motion.ul>
          
          <motion.p
            className="text-gray-700 leading-relaxed"
            variants={fadeInUp}
          >
            In these cases, you can file everything yourself online and use templates for the documents you need.
          </motion.p>
        </div>
      </motion.section>

      {/* When You Might Want a Lawyer */}
      <motion.section
        className="py-16 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex items-center mb-8"
            variants={fadeInUp}
          >
            <HelpCircle className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              When You Might Want a Lawyer
            </h2>
          </motion.div>
          
          <motion.ul
            className="space-y-4 mb-8"
            variants={staggerContainer}
          >
            <motion.li
              className="flex items-start"
              variants={fadeInUp}
            >
              <Users className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">You're starting a multi-member LLC with complex ownership</span>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={fadeInUp}
            >
              <FileText className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">You need legal advice or custom agreements</span>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={fadeInUp}
            >
              <Shield className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">You're planning to raise investment capital</span>
            </motion.li>
          </motion.ul>
          
          <motion.p
            className="text-gray-700 leading-relaxed"
            variants={fadeInUp}
          >
            Even then, many founders still start with a DIY setup and hire a lawyer later if needed.
          </motion.p>
        </div>
      </motion.section>

      {/* Internal Link Section */}
      <motion.section
        className="py-16 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
            variants={fadeInUp}
          >
            <motion.p
              className="text-gray-700 leading-relaxed mb-6"
              variants={fadeInUp}
            >
              If you want a complete step-by-step guide to forming your LLC without a lawyer, check out our full walkthrough:
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
            >
              <Link
                href="/how-to-start-an-llc-without-a-lawyer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                How to Start an LLC Without a Lawyer
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        className="py-16 bg-gray-900"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            variants={fadeInUp}
          >
            Ready to Start Your LLC?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Get step-by-step guidance, legal templates, and everything you need to form your LLC without expensive lawyers.
          </motion.p>
          <motion.div
            variants={fadeInUp}
          >
            <Link href="/checkout">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </SeoPageLayout>
  );
} 

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, UserCheck, Users, FileText, ArrowRight, HelpCircle, Shield } from "lucide-react";
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

export default function DoYouNeedALawyerLLC() {
  return (
    <SeoPageLayout>
      {/* Hero Section */}
      <motion.section
        className="py-16 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            variants={fadeInUp}
          >
            Do You Need a Lawyer to Start an LLC?
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 leading-relaxed"
            variants={fadeInUp}
          >
            For most people, the answer is no. Starting an LLC is a legal process, but not one that requires a lawyer in most states.
          </motion.p>
        </div>
      </motion.section>

      {/* When You Don't Need a Lawyer */}
      <motion.section
        className="py-16 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex items-center mb-8"
            variants={fadeInUp}
          >
            <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              When You Don't Need a Lawyer
            </h2>
          </motion.div>
          
          <motion.ul
            className="space-y-4 mb-8"
            variants={staggerContainer}
          >
            <motion.li
              className="flex items-start"
              variants={fadeInUp}
            >
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">You're a solo founder or freelancer</span>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={fadeInUp}
            >
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">You're not raising money or bringing on investors</span>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={fadeInUp}
            >
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">You're forming an LLC in your home state</span>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={fadeInUp}
            >
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">You want to keep things simple and move fast</span>
            </motion.li>
          </motion.ul>
          
          <motion.p
            className="text-gray-700 leading-relaxed"
            variants={fadeInUp}
          >
            In these cases, you can file everything yourself online and use templates for the documents you need.
          </motion.p>
        </div>
      </motion.section>

      {/* When You Might Want a Lawyer */}
      <motion.section
        className="py-16 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex items-center mb-8"
            variants={fadeInUp}
          >
            <HelpCircle className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              When You Might Want a Lawyer
            </h2>
          </motion.div>
          
          <motion.ul
            className="space-y-4 mb-8"
            variants={staggerContainer}
          >
            <motion.li
              className="flex items-start"
              variants={fadeInUp}
            >
              <Users className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">You're starting a multi-member LLC with complex ownership</span>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={fadeInUp}
            >
              <FileText className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">You need legal advice or custom agreements</span>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={fadeInUp}
            >
              <Shield className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">You're planning to raise investment capital</span>
            </motion.li>
          </motion.ul>
          
          <motion.p
            className="text-gray-700 leading-relaxed"
            variants={fadeInUp}
          >
            Even then, many founders still start with a DIY setup and hire a lawyer later if needed.
          </motion.p>
        </div>
      </motion.section>

      {/* Internal Link Section */}
      <motion.section
        className="py-16 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
            variants={fadeInUp}
          >
            <motion.p
              className="text-gray-700 leading-relaxed mb-6"
              variants={fadeInUp}
            >
              If you want a complete step-by-step guide to forming your LLC without a lawyer, check out our full walkthrough:
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
            >
              <Link
                href="/how-to-start-an-llc-without-a-lawyer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                How to Start an LLC Without a Lawyer
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        className="py-16 bg-gray-900"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            variants={fadeInUp}
          >
            Ready to Start Your LLC?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Get step-by-step guidance, legal templates, and everything you need to form your LLC without expensive lawyers.
          </motion.p>
          <motion.div
            variants={fadeInUp}
          >
            <Link href="/checkout">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </SeoPageLayout>
  );
} 

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, UserCheck, Users, FileText, ArrowRight, HelpCircle, Shield } from "lucide-react";
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

export default function DoYouNeedALawyerLLC() {
  return (
    <SeoPageLayout>
      {/* Hero Section */}
      <motion.section
        className="py-16 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            variants={fadeInUp}
          >
            Do You Need a Lawyer to Start an LLC?
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 leading-relaxed"
            variants={fadeInUp}
          >
            For most people, the answer is no. Starting an LLC is a legal process, but not one that requires a lawyer in most states.
          </motion.p>
        </div>
      </motion.section>

      {/* When You Don't Need a Lawyer */}
      <motion.section
        className="py-16 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex items-center mb-8"
            variants={fadeInUp}
          >
            <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              When You Don't Need a Lawyer
            </h2>
          </motion.div>
          
          <motion.ul
            className="space-y-4 mb-8"
            variants={staggerContainer}
          >
            <motion.li
              className="flex items-start"
              variants={fadeInUp}
            >
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">You're a solo founder or freelancer</span>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={fadeInUp}
            >
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">You're not raising money or bringing on investors</span>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={fadeInUp}
            >
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">You're forming an LLC in your home state</span>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={fadeInUp}
            >
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">You want to keep things simple and move fast</span>
            </motion.li>
          </motion.ul>
          
          <motion.p
            className="text-gray-700 leading-relaxed"
            variants={fadeInUp}
          >
            In these cases, you can file everything yourself online and use templates for the documents you need.
          </motion.p>
        </div>
      </motion.section>

      {/* When You Might Want a Lawyer */}
      <motion.section
        className="py-16 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex items-center mb-8"
            variants={fadeInUp}
          >
            <HelpCircle className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              When You Might Want a Lawyer
            </h2>
          </motion.div>
          
          <motion.ul
            className="space-y-4 mb-8"
            variants={staggerContainer}
          >
            <motion.li
              className="flex items-start"
              variants={fadeInUp}
            >
              <Users className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">You're starting a multi-member LLC with complex ownership</span>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={fadeInUp}
            >
              <FileText className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">You need legal advice or custom agreements</span>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={fadeInUp}
            >
              <Shield className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">You're planning to raise investment capital</span>
            </motion.li>
          </motion.ul>
          
          <motion.p
            className="text-gray-700 leading-relaxed"
            variants={fadeInUp}
          >
            Even then, many founders still start with a DIY setup and hire a lawyer later if needed.
          </motion.p>
        </div>
      </motion.section>

      {/* Internal Link Section */}
      <motion.section
        className="py-16 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
            variants={fadeInUp}
          >
            <motion.p
              className="text-gray-700 leading-relaxed mb-6"
              variants={fadeInUp}
            >
              If you want a complete step-by-step guide to forming your LLC without a lawyer, check out our full walkthrough:
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
            >
              <Link
                href="/how-to-start-an-llc-without-a-lawyer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                How to Start an LLC Without a Lawyer
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        className="py-16 bg-gray-900"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            variants={fadeInUp}
          >
            Ready to Start Your LLC?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Get step-by-step guidance, legal templates, and everything you need to form your LLC without expensive lawyers.
          </motion.p>
          <motion.div
            variants={fadeInUp}
          >
            <Link href="/checkout">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </SeoPageLayout>
  );
} 