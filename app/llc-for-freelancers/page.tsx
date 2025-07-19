"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, UserCheck, Shield, FileText, ArrowRight, Users, Briefcase, Star } from "lucide-react";
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

export default function LLCForFreelancers() {
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
            Should Freelancers Start an LLC?
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 leading-relaxed"
            variants={fadeInUp}
          >
            If you're working for yourself—on Upwork, Fiverr, or your own clients—forming an LLC can be a smart move. It protects your personal assets and makes your business feel more official.
          </motion.p>
        </div>
      </motion.section>

      {/* Why an LLC Makes Sense for Freelancers */}
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
            <Briefcase className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Why an LLC Makes Sense for Freelancers
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
              <span className="text-gray-700">Separates your business and personal finances</span>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={fadeInUp}
            >
              <Shield className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Limits your personal liability if something goes wrong</span>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={fadeInUp}
            >
              <Star className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Makes you look more professional to clients</span>
            </motion.li>
          </motion.ul>
        </div>
      </motion.section>

      {/* What It Takes to Start One */}
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
            <FileText className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              What It Takes to Start One
            </h2>
          </motion.div>
          
          <motion.p
            className="text-gray-700 leading-relaxed mb-6"
            variants={fadeInUp}
          >
            Starting an LLC is easier than most freelancers think. In most cases, you don't need a lawyer—and you can do it all online.
          </motion.p>
          
          <motion.p
            className="text-gray-700 leading-relaxed mb-6"
            variants={fadeInUp}
          >
            We wrote a full guide to walk you through it step by step:
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