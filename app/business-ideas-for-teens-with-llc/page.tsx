"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, DollarSign, User, Building, AlertTriangle, Calculator, FileText, CreditCard, BookOpen, TrendingUp, Calendar, Receipt, Clock, FileDigit, Send, Zap, Smartphone, Heart, Users, Home, UserPlus, Monitor, Download, GraduationCap, Book, UserCheck, Users2, FileText as FileTextIcon, MapPin, Globe, Lock, Unlock, HelpCircle, AlertCircle, Users2 as Users2Icon, Settings, Shield as ShieldIcon, Handshake, FileCheck, CreditCard as CreditCardIcon, AlertTriangle as AlertTriangleIcon, UserCheck as UserCheckIcon, FileText as FileTextIcon2, Calendar as CalendarIcon, Users as UsersIcon, Shield as ShieldIcon2, AlertTriangle as AlertTriangleIcon2, Lightbulb, Monitor as MonitorIcon, Smartphone as SmartphoneIcon, Car, GraduationCap as GraduationCapIcon, PawPrint, Leaf, Wrench, ShoppingBag, TrendingUp as TrendingUpIcon, Target, Rocket, Star } from "lucide-react";
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

export default function BusinessIdeasForTeensWithLLCPage() {
  return (
    <SeoPageLayout>
      <div id="business-ideas-for-teens-with-llc">
        {/* Hero Section */}
        <section className="hero-section text-center px-4 py-16">
          <motion.h1 
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Best Business Ideas for Teens With an LLC
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Got an LLC as a teen? Here are smart, legal, and realistic business ideas you can actually launch under 18—with or without a parent.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <Link href="/checkout">
              <Button className="text-lg px-8 py-3">
                Need help getting started? Start With Genie gives you the exact steps →
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* How to Pick a Business That Works for You */}
        <motion.section 
          className="py-12 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              How to Pick a Business That Works for You
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-gray-700 mb-6">
                Here's a quick framework to make a smart pick:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-700">Skills</h3>
                      <p className="text-gray-600">What are you already good at?</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MonitorIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-700">Tools</h3>
                      <p className="text-gray-600">What tech do you have access to?</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-700">Time</h3>
                      <p className="text-gray-600">Can you run it around school or sports?</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-700">Support</h3>
                      <p className="text-gray-600">Will a parent help if needed?</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mt-6 font-medium">
                The best businesses are simple, profitable, and easy to test.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Online + Digital Ideas */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Online + Digital Ideas
            </h2>
            <p className="text-gray-700 text-center mb-8">
              Perfect if you've got a phone or computer and some curiosity.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <SmartphoneIcon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">UGC Content Creation</h3>
                <p className="text-gray-700">Short-form videos for brands</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <MonitorIcon className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">YouTube/TikTok Editing</h3>
                <p className="text-gray-700">Video editing services</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Zap className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">AI Automations</h3>
                <p className="text-gray-700">For small businesses</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <FileTextIcon className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Freelance Writing</h3>
                <p className="text-gray-700">Or logo design</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <ShoppingBag className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Print-on-Demand</h3>
                <p className="text-gray-700">Or Etsy shops</p>
              </div>
            </div>
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-blue-700 mb-4">
                These are low-cost and scale well—especially with a parent's help on platforms like Stripe or PayPal.
              </p>
              <Link href="/teen-business-workarounds" className="text-blue-600 hover:underline font-medium">
                Need platform workarounds? →
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Local Hustles That Still Work */}
        <motion.section 
          className="py-12 px-4 bg-green-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Local Hustles That Still Work
            </h2>
            <p className="text-gray-700 text-center mb-8">
              IRL still pays. Teens are making $500–$3,000/month with simple service businesses.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Car className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Car Detailing</h3>
                <p className="text-gray-700">Professional car cleaning services</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <GraduationCapIcon className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Tutoring</h3>
                <p className="text-gray-700">Younger kids</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <PawPrint className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Dog Walking</h3>
                <p className="text-gray-700">Pet sitting</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Leaf className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Lawn Care</h3>
                <p className="text-gray-700">Or snow shoveling</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Wrench className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Power Washing</h3>
                <p className="text-gray-700">Exterior cleaning services</p>
              </div>
            </div>
            <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border">
              <p className="text-gray-700">
                LLCs are useful here to protect yourself from liability and open a business bank account.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Reselling + Flipping */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Reselling + Flipping
            </h2>
            <p className="text-gray-700 text-center mb-8">
              Turn stuff into money.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <ShoppingBag className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Thrift Store Flips</h3>
                <p className="text-gray-700">On eBay or Depop</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <TrendingUpIcon className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Sneaker Reselling</h3>
                <p className="text-gray-700">Limited edition releases</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Star className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Collectibles</h3>
                <p className="text-gray-700">Sports cards, video games, etc.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Book className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Book Flipping</h3>
                <p className="text-gray-700">With Amazon Seller accounts</p>
              </div>
            </div>
            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <p className="text-yellow-700">
                These work well with adult help for account setups. Profit margins can be crazy high if you're patient.
              </p>
            </div>
          </div>
        </motion.section>

        {/* What to Set Up After Choosing */}
        <motion.section 
          className="py-12 px-4 bg-blue-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              What to Set Up After Choosing
            </h2>
            <p className="text-gray-700 text-center mb-8">
              Once you pick your idea:
            </p>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                  <h3 className="text-xl font-semibold">Finalize your LLC (with a parent if needed)</h3>
                </div>
                <Link href="/how-to-start-an-llc-if-youre-under-18" className="text-blue-600 hover:underline font-medium">
                  Here's how teens do it →
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                  <h3 className="text-xl font-semibold">Get an EIN and open a bank account</h3>
              </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                  <h3 className="text-xl font-semibold">Set up tools (Stripe, Shopify, Venmo, email)</h3>
              </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">4</div>
                  <h3 className="text-xl font-semibold">Build a simple landing page or form</h3>
              </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">5</div>
                  <h3 className="text-xl font-semibold">Make your first sale or client</h3>
                </div>
                <p className="text-gray-700">Doesn't need to be perfect—just real.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Start Small, Think Long-Term */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Start Small, Think Long-Term
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-lg text-gray-700 mb-6">
                Every big founder started small. The business you launch now might change later—but it teaches you how to:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Solve real problems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Talk to customers</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Handle money</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Stay consistent</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 mt-6 font-medium">
                And having an LLC at 16 or 17? That sets you apart.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Build Something You're Proud Of */}
        <motion.section 
          className="py-12 px-4 bg-green-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Build Something You're Proud Of
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
              <p className="text-lg text-gray-700 mb-6">
                Whether it's selling something online or mowing lawns on the weekend, what matters is that you start.
              </p>
              <Link href="/checkout">
                <Button className="text-lg px-8 py-3">
                  Start With Genie helps teens like you get legit—with every step mapped out. →
                </Button>
              </Link>
              <div className="mt-6">
                <Link href="/how-to-start-an-llc-if-youre-under-18" className="text-blue-600 hover:underline font-medium">
                  Back to the full guide →
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-16 px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Ready to Start Your Business?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Get everything you need to form your LLC in under 15 minutes. Step-by-step guidance, all documents included, and no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/checkout">
                <Button className="text-lg px-8 py-3">
                  Start My LLC for $49 →
                </Button>
              </Link>
              <Link href="/how-to-start-an-llc-if-youre-under-18">
                <Button variant="outline" className="text-lg px-8 py-3">
                  Under 18 Guide
                </Button>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <Footer />
      </div>
    </SeoPageLayout>
  );
} 