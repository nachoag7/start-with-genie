'use client'

import { motion } from 'framer-motion'

export default function LoadingPage() {
  return (
    <main className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center px-4 py-12">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="w-full max-w-md bg-white rounded-xl shadow-md p-8 flex flex-col gap-6 items-center"
      >
        <h1 className="font-semibold text-2xl text-neutral-900 text-center">Loading...</h1>
        {/* ...existing loading spinner or animation... */}
      </motion.section>
    </main>
  )
} 