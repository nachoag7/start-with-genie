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
import Head from 'next/head'

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
    let timeoutId: NodeJS.Timeout | null = null;
    try {
      // Timeout fallback (10s)
      timeoutId = setTimeout(() => {
        setIsLoading(false);
        setError('Login is taking too long. Please try again.');
      }, 10000);

      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      })

      if (signInError) {
        throw signInError
      }

      // Get the current user
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (userError) {
        throw userError;
      }
      if (!user) {
        throw new Error('Could not get user session after login.');
      }

      // Check if user row exists in users table
      const { data: userRow, error: userRowError } = await supabase
        .from('users')
        .select('*')
        .eq('id', user.id)
        .single();
      if (userRowError) {
        throw userRowError;
      }
      if (!userRow) {
        // No user row, redirect to onboarding
        if (timeoutId) clearTimeout(timeoutId);
        setIsLoading(false);
        router.push('/onboarding');
        return;
      }

      // User row exists, redirect to dashboard
      if (timeoutId) clearTimeout(timeoutId);
      setIsLoading(false);
      router.push('/dashboard')
    } catch (err: any) {
      if (timeoutId) clearTimeout(timeoutId);
      setError(err.message || 'Invalid email or password.')
      setIsLoading(false)
      console.error('Login error:', err);
    }
  }

  return (
    <>
      <Head>
        <title>Sign In – Start With Genie</title>
        <meta name="description" content="Sign in to your Start With Genie dashboard to access your LLC setup, documents, and personalized guidance." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="min-h-screen bg-neutral-50 flex flex-col">
        {/* Back Home Button */}
        <button
          type="button"
          onClick={() => {
            if (window.history.length > 1) {
              router.back();
            } else {
              router.push("/");
            }
          }}
          className="absolute top-6 left-4 sm:top-8 sm:left-6 z-20 flex items-center text-gray-500 hover:text-blue-700 text-sm sm:text-base font-medium transition-colors gap-1 sm:gap-2 px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{ textDecoration: 'none', fontWeight: 500 }}
        >
          <span className="text-base sm:text-lg">←</span> Back
        </button>
        <main className="flex-1 flex flex-col items-center justify-center px-4 pt-16 pb-12">
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full max-w-md bg-white rounded-xl shadow-md p-8 flex flex-col gap-6 mt-4"
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
                  variant="secondary"
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
                <Link href="/checkout">
                  <Button className="w-full">
                    Get started
                  </Button>
                </Link>
              </div>
            </div>
          </motion.section>
        </main>
        <Footer />
      </div>
    </>
  )
} 
 

 
 
