'use client'

import React from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Download, MessageCircle, Mail, RefreshCw } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { supabase } from '../../lib/supabase'
import { generateLLCFilingInstructions, generateEINGuide, generateOperatingAgreement } from '../../lib/pdf-generator'
import GenieChat from '../../components/GenieChat'

interface User {
  id: string
  full_name: string
  business_name: string
  email: string
  state: string
  status: string
}

interface Document {
  id: string
  doc_type: string
  url: string
  created_at: string
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [documents, setDocuments] = useState<Document[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isRegenerating, setIsRegenerating] = useState(false)
  const router = useRouter()

  const fetchUserData = async () => {
    try {
      // Check if user is authenticated
      const { data: { user: authUser } } = await supabase.auth.getUser()
      if (!authUser) {
        router.push('/onboarding')
        return
      }

      // Get user data
      const { data: userData } = await supabase
        .from('users')
        .select('*')
        .eq('id', authUser.id)
        .single()

      if (!userData) {
        router.push('/onboarding')
        return
      }

      setUser(userData)

      // Get user documents
      const { data: docs } = await supabase
        .from('documents')
        .select('*')
        .eq('user_id', authUser.id)
        .order('created_at', { ascending: false })

      setDocuments(docs || [])
    } catch (error) {
      console.error('Error fetching user data:', error)
      router.push('/onboarding')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [router])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  const handleRegenerateDocuments = async () => {
    if (!user) return
    
    setIsRegenerating(true)
    try {
      // Delete existing documents
      const { data: { user: authUser } } = await supabase.auth.getUser()
      if (!authUser) return

      // Delete from database
      await supabase
        .from('documents')
        .delete()
        .eq('user_id', authUser.id)

      // Delete from storage (optional - Supabase will handle orphaned files)
      
      // Regenerate documents
      console.log('[DEBUG] Regenerating documents...')
      
      // Generate LLC Filing Instructions
      const llcUrl = await generateLLCFilingInstructions({
        fullName: user.full_name,
        businessName: user.business_name,
        state: user.state,
        email: user.email
      })

      await supabase.from('documents').insert({
        user_id: authUser.id,
        doc_type: 'LLC Filing Instructions',
        url: llcUrl
      })

      // Generate EIN Guide
      const einUrl = await generateEINGuide({
        fullName: user.full_name,
        businessName: user.business_name,
        state: user.state,
        email: user.email
      })

      await supabase.from('documents').insert({
        user_id: authUser.id,
        doc_type: 'EIN Guide',
        url: einUrl
      })

      // Generate Operating Agreement
      const agreementUrl = await generateOperatingAgreement({
        fullName: user.full_name,
        businessName: user.business_name,
        state: user.state,
        email: user.email
      })

      await supabase.from('documents').insert({
        user_id: authUser.id,
        doc_type: 'Operating Agreement',
        url: agreementUrl
      })

      // Refresh the documents list
      await fetchUserData()
      
    } catch (error) {
      console.error('Error regenerating documents:', error)
    } finally {
      setIsRegenerating(false)
    }
  }

  // Helper: Anchor scroll
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // PDF download handler
  const handleDownloadPDF = async (sectionId: string, fileName: string) => {
    const html2pdf = (await import('html2pdf.js')).default;
    const element = document.getElementById(sectionId)
    if (!element) return
    html2pdf().set({
      margin: 0.5,
      filename: fileName,
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    }).from(element).save()
  }

  // Collapsible state
  const [openSection, setOpenSection] = useState<string | null>(null)
  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id)
  }

  // Checklist collapsible state
  const [checklistOpen, setChecklistOpen] = useState(true)
  const handleChecklistToggle = () => setChecklistOpen((v) => !v)

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    )
  }
  if (!user) return null

  // Anchor links
  const docAnchors = [
    { id: 'llc-instructions', label: 'LLC Instructions' },
    { id: 'ein-guide', label: 'EIN Guide' },
    { id: 'operating-agreement', label: 'Operating Agreement' }
  ]

  // Document HTML content generators (match PDF logic, but HTML)
  const today = new Date().toLocaleDateString()
  const stateLLCInfo = {
    'Alabama': { url: 'https://www.sos.alabama.gov/business-entities', fee: 200, time: '1-2 weeks', notes: 'Online filings via Secretary of State' },
    'Alaska': { url: 'https://www.commerce.alaska.gov/web/cbpl/Corporations.aspx', fee: 250, time: '2-3 weeks', notes: 'File Articles of Organization online' },
    'Arizona': { url: 'https://ecorp.azcc.gov/', fee: 50, time: '3-5 business days', notes: 'Arizona requires LLC publication after formation' },
    // ... (copy all state info from pdf-generator.ts) ...
    'Wyoming': { url: 'https://wyobiz.wyo.gov/', fee: 100, time: '3-5 business days', notes: 'Low fees and no state income tax' }
  }
  const stateInfo = stateLLCInfo[user.state as keyof typeof stateLLCInfo] || {}
  const filingFee = stateInfo.fee ? (typeof stateInfo.fee === 'string' ? stateInfo.fee : `$${stateInfo.fee}`) : 'Unavailable – please check your state’s website'
  const filingTime = stateInfo.time || 'Unavailable – please check your state’s website'
  const filingUrl = stateInfo.url || 'Unavailable – please check your state’s website'

  // --- HTML content for each doc ---
  const llcHtml = (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">LLC Filing Instructions for {user.business_name}</h2>
      <div className="text-gray-700">Prepared for {user.full_name} | Forming in {user.state}</div>
      <div className="text-gray-500 text-sm mb-2">Start With Genie – Your silent assistant for setup</div>
      <div className="text-gray-500 text-sm mb-4">Effective Date: {today}</div>
      <h3 className="font-semibold text-lg mt-4">1. Why This Step Matters</h3>
      <p>Filing your Articles of Organization is what officially creates your LLC with the state. Once approved, your business becomes legally recognized and ready to operate.</p>
      <h3 className="font-semibold text-lg mt-4">2. What You’ll Need</h3>
      <ul className="list-disc ml-6">
        <li>Business name: {user.business_name}</li>
        <li>Owner name(s): {user.full_name}</li>
        <li>Business address</li>
        <li>Registered Agent (you or someone else in {user.state})</li>
        <li>Management structure: Member-managed</li>
        <li>Filing website login (some states require creating an account)</li>
      </ul>
      <h3 className="font-semibold text-lg mt-4">3. Filing Details for {user.state}</h3>
      <ul className="list-disc ml-6">
        <li>Filing Fee: {filingFee}</li>
        <li>Processing Time: {filingTime}</li>
        <li>Where to File: <a href={filingUrl} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">{filingUrl}</a></li>
      </ul>
      <h3 className="font-semibold text-lg mt-4">4. Step-by-Step Instructions</h3>
      <ol className="list-decimal ml-6">
        <li>Go to the link above and create an account (if required)</li>
        <li>Select “Form a New LLC” or “Articles of Organization”</li>
        <li>Enter your business and owner information</li>
        <li>Add your Registered Agent</li>
        <li>Pay the filing fee online</li>
        <li>Submit the application and wait for approval</li>
      </ol>
      <h3 className="font-semibold text-lg mt-4">5. After You File</h3>
      <p>Once approved, you’ll receive a confirmation document or certificate from the state. Save this — you’ll need it for your EIN, bank account, and taxes.<br/>Next step: Apply for your EIN and sign your Operating Agreement.</p>
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <strong>Disclaimer:</strong> This document is for informational and educational purposes only. It is not legal, tax, or financial advice. Start With Genie is not a law firm and does not provide legal services. You should consult a qualified attorney, accountant, or advisor to ensure this document is appropriate for your specific situation.
      </div>
      <div className="text-xs text-gray-400 mt-2">Generated by Start With Genie</div>
    </div>
  )

  const einHtml = (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">EIN Instructions for {user.business_name}</h2>
      <div className="text-gray-700">Prepared for {user.full_name} | Formed in {user.state}</div>
      <div className="text-gray-500 text-sm mb-2">Start With Genie – Your silent assistant for setup</div>
      <div className="text-gray-500 text-sm mb-4">Effective Date: {today}</div>
      <h3 className="font-semibold text-lg mt-4">1. What Is an EIN?</h3>
      <p>An EIN (Employer Identification Number) is a unique ID issued by the IRS. Think of it as your business's Social Security Number — it’s required to:<br/>- Open a business bank account<br/>- File taxes<br/>- Hire employees<br/>- Apply for business credit<br/>Even if you're the only owner, most banks and services will ask for your EIN.</p>
      <h3 className="font-semibold text-lg mt-4">2. Do You Need One?</h3>
      <p>Most LLCs do need an EIN. Even if you're a single-member LLC with no employees, you'll likely need it for banking, taxes, or applying for licenses.<br/>Good news: getting an EIN is completely free and only takes a few minutes.</p>
      <h3 className="font-semibold text-lg mt-4">3. How to Apply Online (Recommended)</h3>
      <ul className="list-disc ml-6">
        <li>The IRS provides a free online application for EINs.</li>
        <li>Where to apply: <a href="https://irs.gov/ein" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://irs.gov/ein</a></li>
        <li>When: Monday through Friday, 7:00 AM – 10:00 PM EST</li>
        <li>What you'll need: your name ({user.full_name}), your business name ({user.business_name}), business address, business structure: LLC, whether you are the owner</li>
        <li>The application takes about 10 minutes. You'll receive your EIN immediately after submission.</li>
      </ul>
      <h3 className="font-semibold text-lg mt-4">4. After You Apply</h3>
      <ul className="list-disc ml-6">
        <li>Save the confirmation letter (CP 575) — this is your proof of EIN</li>
        <li>You'll need it to open a business bank account, file taxes, and set up payroll</li>
        <li>Come back to your Genie Dashboard to download your Operating Agreement</li>
      </ul>
      <h3 className="font-semibold text-lg mt-4">5. Alternate Filing (Mail or Fax)</h3>
      <ul className="list-disc ml-6">
        <li>If you don’t have a Social Security Number or can’t use the online form: download Form SS-4, fill it out and send it by mail or fax to the IRS</li>
        <li>This method takes longer, but works for non-U.S. residents and others with special cases.</li>
      </ul>
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <strong>Disclaimer:</strong> This document is for informational and educational purposes only. It is not legal, tax, or financial advice. Start With Genie is not a law firm and does not provide legal services. You should consult a qualified attorney, accountant, or advisor to ensure this document is appropriate for your specific situation.
      </div>
      <div className="text-xs text-gray-400 mt-2">Generated by Start With Genie</div>
    </div>
  )

  const oaHtml = (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Operating Agreement for {user.business_name}</h2>
      <div className="text-gray-700">Prepared for {user.full_name} | Formed in {user.state}</div>
      <div className="text-gray-500 text-sm mb-2">Start With Genie – Your silent assistant for setup</div>
      <div className="text-gray-500 text-sm mb-4">Effective Date: {today}</div>
      <h3 className="font-semibold text-lg mt-4">1. Introduction</h3>
      <p>This Operating Agreement ("Agreement") is made effective as of the date above by and among the Member(s) of {user.business_name}, a limited liability company formed under the laws of the State of {user.state}.</p>
      <h3 className="font-semibold text-lg mt-4">2. Company Overview</h3>
      <ul className="list-disc ml-6">
        <li>Business Name: {user.business_name}</li>
        <li>State of Formation: {user.state}</li>
        <li>Effective Date: {today}</li>
        <li>Entity Type: Single-Member LLC</li>
        <li>Managed By: Member-managed</li>
        <li>Principal Address: [Not specified]</li>
      </ul>
      <h3 className="font-semibold text-lg mt-4">3. Purpose of the LLC</h3>
      <p>The purpose of the LLC is to engage in any lawful business activity permitted under the laws of {user.state}. The Member(s) may modify the purpose as needed.</p>
      <h3 className="font-semibold text-lg mt-4">4. Ownership</h3>
      <ul className="list-disc ml-6">
        <li>Member(s): {user.full_name}</li>
        <li>This is a Single-Member LLC, owned and operated by {user.full_name}.</li>
        <li>Each Member owns an equal share of the LLC unless otherwise agreed in writing.</li>
      </ul>
      <h3 className="font-semibold text-lg mt-4">5. Capital Contributions</h3>
      <ul className="list-disc ml-6">
        <li>Initial contributions from Member(s): [Not specified]</li>
        <li>No additional contributions are required unless agreed in writing by all Members.</li>
      </ul>
      <h3 className="font-semibold text-lg mt-4">6. Profit and Loss Allocation</h3>
      <p>All profits and losses will be distributed in proportion to ownership, unless otherwise agreed upon. Distributions will be made at the discretion of the Member(s).</p>
      <h3 className="font-semibold text-lg mt-4">7. Management and Voting</h3>
      <p>The LLC is Member-managed. Major decisions (such as admitting new members or dissolving the LLC) require approval by all Member(s).</p>
      <h3 className="font-semibold text-lg mt-4">8. Liability Protection</h3>
      <p>Member(s) are not personally liable for the debts or obligations of the LLC. The LLC will indemnify Member(s) to the extent permitted by law.</p>
      <h3 className="font-semibold text-lg mt-4">9. Ownership Changes</h3>
      <p>No Member may transfer ownership without written consent from the other Member(s), unless required by law.</p>
      <h3 className="font-semibold text-lg mt-4">10. Dissolution</h3>
      <p>The LLC may be dissolved upon:<br/>- A majority vote by Member(s)<br/>- Completion of its business purpose<br/>- Only one Member remaining (if multi-member)<br/>Upon dissolution, assets will be distributed in this order:<br/>1. Creditors<br/>2. Taxes<br/>3. Members based on ownership</p>
      <h3 className="font-semibold text-lg mt-4">11. Governing Law</h3>
      <p>This Agreement is governed by the laws of the State of {user.state}.</p>
      <h3 className="font-semibold text-lg mt-4">12. Signatures</h3>
      <p>By signing below, the Member(s) agree to the terms outlined above.<br/>Signed on: {today}<br/>Member(s): {user.full_name}</p>
      <h3 className="font-semibold text-lg mt-4">Need Help?</h3>
      <p>If your business changes, you can revise and re-sign this agreement at any time. Have questions? Email us at info@startwithgenie.com — we’re happy to help.</p>
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <strong>Disclaimer:</strong> This document is for informational and educational purposes only. It is not legal, tax, or financial advice. Start With Genie is not a law firm and does not provide legal services. You should consult a qualified attorney, accountant, or advisor to ensure this document is appropriate for your specific situation.
      </div>
      <div className="text-xs text-gray-400 mt-2">Generated by Start With Genie</div>
    </div>
  )

  // --- END HTML content ---

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-xl font-bold text-gray-900">Start With Genie</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="bg-white overflow-hidden shadow rounded-lg mb-6">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome back, {user.full_name}!
            </h2>
            <p className="text-gray-600">
              Your business: <span className="font-semibold">{user.business_name}</span> in {user.state}
            </p>
          </div>
        </div>

        {/* Setup Checklist */}
        <div className="bg-white border-l-4 border-blue-500 rounded-xl shadow-sm p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              🧾 Your Setup Checklist
            </h3>
            <Button
              variant="outline"
              size="sm"
              className="ml-2 px-3 py-1 text-sm"
              onClick={handleChecklistToggle}
            >
              {checklistOpen ? 'Hide checklist' : 'Show checklist'}
            </Button>
          </div>
          {checklistOpen && (
            <div className="space-y-4">
              <ol className="list-decimal pl-6 text-gray-800">
                <li className="mb-2">
                  <span className="font-semibold">File your LLC in {user.state}</span>
                  <div className="text-gray-500 text-sm">This registers your business with the state and gives it legal status.</div>
                  <div className="text-blue-600 text-sm mt-1">We’ll give you exact steps once your documents are ready.</div>
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Apply for your EIN</span>
                  <div className="text-gray-500 text-sm">This is your business’s tax ID — required to open a bank account or hire employees.</div>
                  <div className="text-blue-600 text-sm mt-1">We’ll show you how to get it free from the IRS.</div>
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Sign your Operating Agreement</span>
                  <div className="text-gray-500 text-sm">This outlines how your LLC runs and protects you legally.</div>
                  <div className="text-blue-600 text-sm mt-1">Just review and save the one we generate for you.</div>
                </li>
              </ol>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                <div className="text-green-700 font-medium mb-1">
                  Once you complete these three steps, your business is fully set up and ready to operate. You’ll find all the documents and instructions you need below — no downloads required.
                </div>
                <div className="text-green-700 text-sm">
                  You’ll be able to open a bank account, accept payments, file taxes, and start working under your business name.
                </div>
              </div>
              <div className="text-gray-500 text-xs mt-2">
                You can view your documents right here in your dashboard.
              </div>
            </div>
          )}
        </div>

        {/* Inline Documents Section */}
        <div className="space-y-10">
          {/* LLC Filing Instructions */}
          <section id="llc-instructions" className="bg-white shadow rounded-lg p-0">
            <div className="px-4 py-3 border-b flex flex-col gap-2">
              <h3 className="text-lg font-semibold mb-2">LLC Filing Instructions</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <Button
                  size="lg"
                  className="font-bold w-full sm:w-auto text-base"
                  onClick={() => toggleSection('llc-instructions')}
                >
                  {openSection === 'llc-instructions' ? 'Hide' : 'Show More'}
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full sm:w-auto"
                  onClick={() => handleDownloadPDF('llc-instructions-content', 'LLC-Filing-Instructions.pdf')}
                >
                  Download as PDF
                </Button>
              </div>
            </div>
            <div id="llc-instructions-content" className={`transition-all duration-300 px-6 py-4 ${openSection === 'llc-instructions' ? 'block' : 'hidden'}`}>{llcHtml}</div>
          </section>

          {/* EIN Guide */}
          <section id="ein-guide" className="bg-white shadow rounded-lg p-0">
            <div className="px-4 py-3 border-b flex flex-col gap-2">
              <h3 className="text-lg font-semibold mb-2">EIN Guide</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <Button
                  size="lg"
                  className="font-bold w-full sm:w-auto text-base"
                  onClick={() => toggleSection('ein-guide')}
                >
                  {openSection === 'ein-guide' ? 'Hide' : 'Show More'}
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full sm:w-auto"
                  onClick={() => handleDownloadPDF('ein-guide-content', 'EIN-Guide.pdf')}
                >
                  Download as PDF
                </Button>
              </div>
            </div>
            <div id="ein-guide-content" className={`transition-all duration-300 px-6 py-4 ${openSection === 'ein-guide' ? 'block' : 'hidden'}`}>{einHtml}</div>
          </section>

          {/* Operating Agreement */}
          <section id="operating-agreement" className="bg-white shadow rounded-lg p-0">
            <div className="px-4 py-3 border-b flex flex-col gap-2">
              <h3 className="text-lg font-semibold mb-2">Operating Agreement</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <Button
                  size="lg"
                  className="font-bold w-full sm:w-auto text-base"
                  onClick={() => toggleSection('operating-agreement')}
                >
                  {openSection === 'operating-agreement' ? 'Hide' : 'Show More'}
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full sm:w-auto"
                  onClick={() => handleDownloadPDF('operating-agreement-content', 'Operating-Agreement.pdf')}
                >
                  Download as PDF
                </Button>
              </div>
            </div>
            <div id="operating-agreement-content" className={`transition-all duration-300 px-6 py-4 ${openSection === 'operating-agreement' ? 'block' : 'hidden'}`}>{oaHtml}</div>
          </section>
        </div>

        {/* Add vertical spacing before support section */}
        <div className="mt-10 mb-8" />

        {/* Actions Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Genie Assistant Inline */}
          <div className="bg-white overflow-hidden shadow rounded-lg mt-10">
            <div className="px-4 py-5 sm:p-6">
              <GenieChat avatarSrc="/ChatGPT Image Jul 9, 2025, 06_22_31 PM.png" />
            </div>
          </div>

          {/* Support */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Mail className="h-8 w-8 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Need Help?</h3>
                  <p className="text-sm text-gray-500">
                    Contact our support team
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <a 
                  href="mailto:info@startwithgenie.com"
                  className="block w-full"
                >
                  <Button variant="outline" className="w-full">
                    Contact Support
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 