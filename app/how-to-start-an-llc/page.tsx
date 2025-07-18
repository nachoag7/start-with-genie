'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../../components/ui/Button'
import { FileText, ShieldCheck, UserCheck, Banknote, CheckCircle, ArrowRight, Building2, MapPin, User, FileSignature, CreditCard, Users } from 'lucide-react'
import Link from 'next/link'
import SeoPageLayout from '../../components/SeoPageLayout'

export default function HowToStartLLCPage() {
  const steps = [
    {
      number: '1',
      title: 'Pick your state',
      description: 'LLC rules vary by state. Most people file where they live. States like Delaware or Wyoming are sometimes chosen for extra privacy or legal advantages.',
      icon: <MapPin className="w-5 h-5" />
    },
    {
      number: '2',
      title: 'Name your business',
      description: 'Choose a unique name that includes "LLC." You can usually search your state\'s database to check availability.',
      icon: <Building2 className="w-5 h-5" />
    },
    {
      number: '3',
      title: 'Appoint a registered agent',
      description: 'This is someone who can legally receive mail for your LLC. You can be your own or hire a registered agent service.',
      icon: <User className="w-5 h-5" />
    },
    {
      number: '4',
      title: 'File your Articles of Organization',
      description: 'This document officially creates your LLC. It\'s filed with your state and typically costs $50–$200.',
      icon: <FileSignature className="w-5 h-5" />
    },
    {
      number: '5',
      title: 'Draft an Operating Agreement',
      description: 'Not always required, but strongly recommended. This document explains how your LLC operates and protects all members involved.',
      icon: <FileText className="w-5 h-5" />
    },
    {
      number: '6',
      title: 'Apply for an EIN (Employer ID Number)',
      description: 'This is like a Social Security number for your business. You\'ll need it to pay taxes and open a business bank account. It\'s free through the IRS.',
      icon: <CreditCard className="w-5 h-5" />
    },
    {
      number: '7',
      title: 'Open a business bank account',
      description: 'Separating business and personal finances protects your liability shield and makes tax time way easier.',
      icon: <Banknote className="w-5 h-5" />
    }
  ]

  const benefits = [
    'Limited liability protection',
    'Clean separation of personal and business finances',
    'Flexible tax options',
    'Easier access to banking and credit',
    'Looks more professional and legitimate'
  ]

  const genieFeatures = [
    'Personalized state filing instructions',
    'EIN walkthrough',
    'Operating Agreement',
    'Launch checklist',
    'Auto-filled documents',
    'Clean dashboard and PDF downloads'
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <SeoPageLayout>
      <div id="how-to-start-an-llc">
        {/* Hero Section */}
        <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            How to Start an LLC
          </motion.h1>
          <motion.p 
            className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            Everything you need to know to launch your business with confidence.
          </motion.p>
        </div>
      </section>

      {/* What is an LLC Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-semibold text-neutral-900 mb-6">What is an LLC?</h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              A Limited Liability Company (LLC) is one of the most efficient ways to protect your personal assets and legitimize your business. This guide walks you through the process—step by step—with no fluff or legal confusion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold text-neutral-900 mb-6">How to Start an LLC – Step by Step</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] rounded-lg flex items-center justify-center text-white font-semibold text-lg">
                  {step.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-[#3A8DFF]">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900">{step.title}</h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Why form an LLC?</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-neutral-700 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Genie CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Or skip the hassle</h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              Start With Genie gives you everything you need to set up your LLC without the overwhelm:
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 gap-6 mb-8"
          >
            {genieFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center gap-3"
              >
                <ShieldCheck className="w-5 h-5 text-[#3A8DFF] flex-shrink-0" />
                <span className="text-neutral-700">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <p className="text-lg text-neutral-600 mb-8">
              All for just $49 — with no hidden upsells or confusing legal jargon.
            </p>
            <Link href="/">
              <Button size="lg" className="text-lg bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-blue-400 focus:outline-none flex items-center justify-center gap-2 px-6 py-3">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      </div>
    </SeoPageLayout>
  )
} 
 

