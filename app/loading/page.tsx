'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { generateLLCFilingInstructions, generateEINGuide, generateOperatingAgreement } from '@/lib/pdf-generator'

export default function LoadingPage() {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState('')
  const router = useRouter()

  useEffect(() => {
    const generateDocuments = async () => {
      try {
        console.log('[DEBUG] Starting document generation...')
        // Get current user
        const { data: { user } } = await supabase.auth.getUser()
        console.log('[DEBUG] Got user:', user)
        if (!user) {
          router.push('/onboarding')
          return
        }

        // Check if documents already exist for this user
        const { data: existingDocs } = await supabase
          .from('documents')
          .select('*')
          .eq('user_id', user.id)
        
        console.log('[DEBUG] Existing documents:', existingDocs)
        
        // If documents already exist, skip generation and go to dashboard
        if (existingDocs && existingDocs.length > 0) {
          console.log('[DEBUG] Documents already exist, redirecting to dashboard')
          router.push('/dashboard')
          return
        }

        // Get user data
        const { data: userData } = await supabase
          .from('users')
          .select('*')
          .eq('id', user.id)
          .single()
        console.log('[DEBUG] Got userData:', userData)
        if (!userData) {
          router.push('/onboarding')
          return
        }

        setCurrentStep('Generating LLC Filing Instructions...')
        setProgress(33)
        console.log('[DEBUG] Generating LLC Filing Instructions...')
        // Generate LLC Filing Instructions
        const llcUrl = await generateLLCFilingInstructions({
          fullName: userData.full_name,
          businessName: userData.business_name,
          state: userData.state,
          email: userData.email
        })
        console.log('[DEBUG] LLC Filing Instructions URL:', llcUrl)

        // Save to documents table
        const { error: llcInsertError } = await supabase.from('documents').insert({
          user_id: user.id,
          doc_type: 'LLC Filing Instructions',
          url: llcUrl
        })
        if (llcInsertError) console.error('[DEBUG] LLC Insert Error:', llcInsertError)
        else console.log('[DEBUG] LLC Filing Instructions inserted')

        setCurrentStep('Generating EIN Guide...')
        setProgress(66)
        console.log('[DEBUG] Generating EIN Guide...')
        // Generate EIN Guide
        const einUrl = await generateEINGuide({
          fullName: userData.full_name,
          businessName: userData.business_name,
          state: userData.state,
          email: userData.email
        })
        console.log('[DEBUG] EIN Guide URL:', einUrl)

        // Save to documents table
        const { error: einInsertError } = await supabase.from('documents').insert({
          user_id: user.id,
          doc_type: 'EIN Guide',
          url: einUrl
        })
        if (einInsertError) console.error('[DEBUG] EIN Insert Error:', einInsertError)
        else console.log('[DEBUG] EIN Guide inserted')

        setCurrentStep('Generating Operating Agreement...')
        setProgress(90)
        console.log('[DEBUG] Generating Operating Agreement...')
        // Generate Operating Agreement
        const agreementUrl = await generateOperatingAgreement({
          fullName: userData.full_name,
          businessName: userData.business_name,
          state: userData.state,
          email: userData.email
        })
        console.log('[DEBUG] Operating Agreement URL:', agreementUrl)

        // Save to documents table
        const { error: agreementInsertError } = await supabase.from('documents').insert({
          user_id: user.id,
          doc_type: 'Operating Agreement',
          url: agreementUrl
        })
        if (agreementInsertError) console.error('[DEBUG] Agreement Insert Error:', agreementInsertError)
        else console.log('[DEBUG] Operating Agreement inserted')

        setProgress(100)
        setCurrentStep('All done! Redirecting...')
        console.log('[DEBUG] All documents generated and inserted. Updating user status...')

        // Update user status
        const { error: userUpdateError } = await supabase
          .from('users')
          .update({ status: 'completed' })
          .eq('id', user.id)
        if (userUpdateError) console.error('[DEBUG] User update error:', userUpdateError)
        else console.log('[DEBUG] User status updated')

        // Redirect to dashboard
        setTimeout(() => {
          router.push('/dashboard')
        }, 1000)

      } catch (error) {
        console.error('Error generating documents:', error)
        router.push('/dashboard')
      }
    }

    generateDocuments()
  }, [router])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-4">
        <div className="bg-white py-12 px-8 shadow-lg rounded-2xl text-center">
          {/* Logo with Spinner Animation */}
          <div className="relative mb-8">
            {/* Spinner ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 border-4 border-gray-200 border-t-primary-600 rounded-full animate-spin"></div>
            </div>
            {/* Genie logo in center */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                <img 
                  src="/genie-preview.png" 
                  alt="Genie" 
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Setting up your custom dashboard...
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            {currentStep}
          </p>
          
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-primary-600 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="mt-2 text-xs text-gray-500 font-medium">
              {progress}% complete
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 