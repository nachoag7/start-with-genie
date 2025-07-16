'use client'

import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { supabase } from '../../lib/supabase'
import { motion } from 'framer-motion'
import Footer from '../../components/Footer'

interface LoginFormData {
  email: string
  password: string
}

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>()

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)
    setError('')

    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      })

      if (signInError) {
        throw signInError
      }

      // Get the current user
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error('Could not get user session after login.')
      }

      // Check if user row exists in users table
      const { data: userRow } = await supabase
        .from('users')
        .select('*')
        .eq('id', user.id)
        .single();

      if (!userRow) {
        // No user row, redirect to onboarding
        router.push('/onboarding');
        return;
      }

      // User row exists, redirect to dashboard
      router.push('/dashboard')
    } catch (err: any) {
      setError(err.message || 'Invalid email or password.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-full max-w-md bg-white rounded-xl shadow-md p-8 flex flex-col gap-6"
        >
          <h1 className="font-semibold text-3xl text-neutral-900 text-center">Sign In to Genie</h1>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Email Address"
              type="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              error={errors.email?.message}
            />

            <Input
              label="Password"
              type="password"
              {...register('password', { required: 'Password is required' })}
              error={errors.password?.message}
            />

            <div className="flex justify-end">
              <Link href="/reset-password" className="text-sm text-blue-600 hover:underline font-medium">Forgot your password?</Link>
            </div>

            {error && (
              <div className="text-red-600 text-sm">{error}</div>
            )}

            <div>
              <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
              </Button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Don't have an account?
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Link href="/onboarding">
                <Button variant="outline" className="w-full">
                  Get started
                </Button>
              </Link>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  )
} 