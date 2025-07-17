'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { supabase } from '../../lib/supabase'
import { motion } from 'framer-motion'

interface ResetFormData {
  email: string
}

export default function ResetPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetFormData>()

  const onSubmit = async (data: ResetFormData) => {
    setIsLoading(true)
    setError('')
    setSuccess('')
    try {
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(data.email)
      if (resetError) throw resetError
      setSuccess('Check your inbox for a reset link.')
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center px-4 py-12">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="w-full max-w-md bg-white rounded-xl shadow-md p-8 flex flex-col gap-6"
      >
        <h1 className="font-semibold text-3xl text-neutral-900 text-center">Reset Your Password</h1>
        <p className="text-neutral-700 text-center">
          Enter your email and we'll send you a reset link.
        </p>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Email Address"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            error={errors.email?.message}
          />
          {error && <div className="text-red-600 text-sm">{error}</div>}
          {success && <div className="text-green-600 text-sm">{success}</div>}
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send reset link'}
          </Button>
        </form>
      </motion.section>
    </main>
  )
} 
 
 
 
 