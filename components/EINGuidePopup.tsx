"use client";
import React, { useState, useEffect } from 'react';
import { FileText, Send, X, CheckCircle, Mail, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import PremiumButton from './ui/PremiumButton';

interface EINGuidePopupProps {
  isOpen: boolean;
  onClose: () => void;
  sourcePage: string;
  markEmailSubmitted?: () => void;
}

export default function EINGuidePopup({ isOpen, onClose, sourcePage, markEmailSubmitted }: EINGuidePopupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  console.log('EIN Popup Component: isOpen =', isOpen, 'sourcePage =', sourcePage);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      // Save to Supabase leads table
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          sourcePage,
          type: 'ein_guide'
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        if (markEmailSubmitted) markEmailSubmitted();
        setTimeout(() => {
          onClose();
          setIsSuccess(false);
          setEmail('');
        }, 5000); // Increased timeout for better UX
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save lead');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      
      // Handle specific error cases
      if (error instanceof Error) {
        if (error.message.includes('already submitted')) {
          alert('This email has already been submitted. Please check your inbox.');
        } else if (error.message.includes('Invalid email')) {
          alert('Please enter a valid email address.');
        } else {
          alert('Something went wrong. Please try again.');
        }
      } else {
        alert('Something went wrong. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 ease-out"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="backdrop-blur-lg bg-white/80 rounded-2xl shadow-2xl max-w-lg w-full relative border border-white/20">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
              >
                <X className="w-4 h-4" />
              </button>

              {!isSuccess ? (
                <div className="px-6 py-8 md:px-8">
                  {/* Genie Avatar */}
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <Image 
                        src="/genie-preview.png" 
                        alt="Genie" 
                        width={32} 
                        height={32} 
                        className="rounded-full drop-shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Header */}
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                    Want a free EIN guide?
                  </h2>

                  {/* Subtext */}
                  <div className="text-sm text-gray-600 flex items-start gap-2 mb-6 text-center justify-center">
                    <FileText className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>We'll send you a simple step-by-step guide to help you get your EIN — fast, clear, and easy.</span>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all text-sm"
                      />
                    </div>
                    
                    <PremiumButton
                      type="submit"
                      disabled={isSubmitting || !email}
                      className="w-full flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send the EIN Guide
                        </>
                      )}
                    </PremiumButton>
                  </form>
                </div>
              ) : (
                /* Enhanced Success message */
                <div className="px-6 py-8 md:px-8 text-center">
                  {/* Success Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                    </div>
                  </div>

                  {/* Success Header */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Guide sent successfully!
                  </h3>

                  {/* Success Message */}
                  <div className="text-gray-600 mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span className="text-sm">Check your inbox</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      We've sent your free EIN guide to <strong>{email}</strong>
                    </p>
                  </div>

                  {/* Next Steps */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">What's next?</h4>
                    <ul className="text-xs text-gray-600 space-y-1 text-left">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Open the email and click "View My EIN Guide"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Follow the step-by-step instructions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Get your EIN in minutes!</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 