"use client";

import * as React from "react";
import { motion, AnimatePresence } from 'framer-motion';

type StepKey = "llc" | "ein" | "oa" | "operate";

export type ChecklistLinks = {
  llcUrl: string;    // link to LLC Filing Instructions view
  einUrl: string;    // link to EIN Guide view
  oaUrl: string;     // link to Operating Agreement view
};

type Props = {
  userId?: string | null;          // supabase auth id if available
  links: ChecklistLinks;
};

const STORAGE_KEY = (uid?: string|null) => `genie_checklist_${uid ?? "anon"}`;

const DEFAULT_STEPS: Record<StepKey, boolean> = {
  llc: false,
  ein: false,
  oa: false,
  operate: false,
};

export default function ProgressChecklist({ userId, links }: Props) {
  const [steps, setSteps] = React.useState<Record<StepKey, boolean>>(DEFAULT_STEPS);
  const [showCelebration, setShowCelebration] = React.useState(false);
  const hasCelebratedRef = React.useRef(false);

  // load from storage
  React.useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY(userId));
      if (raw) setSteps({ ...DEFAULT_STEPS, ...JSON.parse(raw) });
    } catch {}
  }, [userId]);

  // Listen for storage events to update when helper function marks steps
  React.useEffect(() => {
    const handleStorageChange = () => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY(userId));
        if (raw) setSteps({ ...DEFAULT_STEPS, ...JSON.parse(raw) });
      } catch {}
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [userId]);

  // persist to storage
  React.useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY(userId), JSON.stringify(steps));
      // TODO: if supabase is available, upsert to a `profiles.progress` column or a new `checklists` table
    } catch {}
  }, [steps, userId]);

  const completed = Object.values(steps).filter(Boolean).length;
  const total = Object.keys(steps).length;

  // Check for completion and trigger celebration
  React.useEffect(() => {
    if (completed === total && completed > 0 && !hasCelebratedRef.current) {
      hasCelebratedRef.current = true;
      setShowCelebration(true);
    }
  }, [completed, total]);

  function toggle(key: StepKey, value: boolean) {
    setSteps(prev => ({ ...prev, [key]: value }));
  }

  const item = (key: StepKey, label: React.ReactNode) => (
    <li className="flex items-start gap-3">
      <button
        onClick={() => toggle(key, !steps[key])}
        className={`mt-0.5 h-5 w-5 sm:h-4 sm:w-4 rounded border-2 transition-all duration-200 flex items-center justify-center ${
          steps[key] 
            ? 'bg-blue-500 border-blue-500 text-white' 
            : 'border-gray-300 hover:border-blue-400'
        }`}
      >
        {steps[key] && (
          <svg className="h-3 w-3 sm:h-2.5 sm:w-2.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
      </button>
      <label 
        onClick={() => toggle(key, !steps[key])}
        className="text-sm sm:text-sm leading-6 cursor-pointer text-gray-700 hover:text-gray-900 transition-colors flex-1 min-w-0"
      >
        {label}
      </label>
    </li>
  );

  return (
    <section className="mb-6 rounded-2xl border border-gray-200 bg-white p-4 md:p-5 shadow-sm relative">
      <AnimatePresence>
        {showCelebration && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border-2 border-green-200 flex items-center justify-center z-10"
          >
            <button
              onClick={() => setShowCelebration(false)}
              className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-gray-800 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-center px-4"
            >
              <div className="text-base sm:text-lg font-semibold text-green-700 mb-2">You're all set!</div>
              <div className="text-sm text-green-600 mb-4">Your LLC formation is complete!</div>
              <div className="text-xs text-gray-500 mb-3">Help others start their business journey</div>
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    const text = "Just formed my LLC with @startwithgenie - they made it so simple! No lawyers, no confusion, just $49 for everything you need. Check them out: https://startwithgenie.com";
                    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
                    window.open(url, '_blank');
                  }}
                  className="px-3 py-2 sm:px-4 bg-blue-500 text-white text-xs sm:text-sm rounded-full hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  Share on
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base md:text-lg font-semibold text-gray-900">Your Progress</h2>
        <span className="text-xs md:text-sm text-gray-500">{completed} of {total} done</span>
      </div>
      
      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div 
          className={`h-2 rounded-full transition-all duration-300 ease-out ${
            completed === total && total > 0 
              ? 'bg-gradient-to-r from-green-500 to-blue-500 animate-pulse' 
              : 'bg-blue-500'
          }`}
          style={{ width: `${(completed / total) * 100}%` }}
        />
      </div>

      <ul className="space-y-3">
        {item("llc", <>File your LLC with the state</>)}
        {item("ein", <>Apply for your EIN</>)}
        {item("oa", <>Sign and Print your Operating Agreement</>)}
        {item("operate", <>Start operating your business (bank account, payments, clients)</>)}
      </ul>
    </section>
  );
} 