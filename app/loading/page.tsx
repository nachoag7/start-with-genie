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
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
            <h2 className="mt-6 text-2xl font-bold text-gray-900">
              Setting up your custom dashboard...
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {currentStep}
            </p>
            
            <div className="mt-6">
              <div className="bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                {progress}% complete
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 