'use client'

import React, { useRef } from 'react'
import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { Download, MessageCircle, Mail, RefreshCw, FileText, Building2, CreditCard, CheckCircle, ChevronRight, HelpCircle, X, Bot, BadgeDollarSign, BookOpen, Clock, Eye, Download as DownloadIcon, ScrollText, Send } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { supabase } from '../../lib/supabase'
import { generateLLCFilingInstructions, generateEINGuide, generateOperatingAgreement } from '../../lib/pdf-generator'
import GenieChat from '../../components/GenieChat'
import ContactSupportModal from '../../components/ContactSupportModal'
import llcStates from '../../data/llc_states.json';
import HelpWidget from '../../components/HelpWidget';
import { motion, AnimatePresence } from 'framer-motion'
// Remove all @react-pdf/renderer and jsPDF imports
// Remove: import { pdf } from '@react-pdf/renderer';
// Remove: import { OperatingAgreementPDF } from '../../components/pdf/OperatingAgreementPDF';
// Remove: import { LLCInstructionsPDF } from '../../components/pdf/LLCInstructionsPDF';
// Remove: import { EINGuidePDF } from '../../components/pdf/EINGuidePDF';

interface User {
  id: string
  full_name: string
  business_name: string
  email: string
  state: string
  status: string
  business_address: string // ADDED
  is_solo_owner: string // "yes" or "no"
  partner_name?: string // optional, if partner
  ownership_primary?: string // NEW
  ownership_partner?: string // NEW
  checklist_status?: boolean[] // NEW
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
  const [isGeneratingPDF, setIsGeneratingPDF] = useState<string | null>(null)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const [showGenie, setShowGenie] = useState(false)

  // Add refs for each document section
  const llcRef = useRef<HTMLDivElement>(null)
  const einRef = useRef<HTMLDivElement>(null)
  const oaRef = useRef<HTMLDivElement>(null)

  // Checklist state
  const [checklist, setChecklist] = useState([false, false, false])
  const [isChecklistLoading, setIsChecklistLoading] = useState(true)
  const [showCongrats, setShowCongrats] = useState(false)
  
  // UI state
  const [openSection, setOpenSection] = useState<string | null>(null)
  const [checklistOpen, setChecklistOpen] = useState(false)
  const [documentsOpen, setDocumentsOpen] = useState(false)

  // Get current date and time for welcome message
  const [currentDateTime, setCurrentDateTime] = useState('')
  
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      }
      setCurrentDateTime(now.toLocaleDateString('en-US', options))
    }
    
    updateDateTime()
    const interval = setInterval(updateDateTime, 60000) // Update every minute
    
    return () => clearInterval(interval)
  }, [])

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

  // Remove auto-scrolling behavior - let users stay where they are

  // Fetch checklist status from Supabase after user is loaded
  useEffect(() => {
    if (user) {
      const status = Array.isArray(user.checklist_status)
        ? user.checklist_status
        : (typeof user.checklist_status === 'string' ? JSON.parse(user.checklist_status) : [false, false, false])
      setChecklist(status)
      setShowCongrats(status.every(Boolean))
      setIsChecklistLoading(false)
    }
  }, [user])

  // Update checklist in Supabase
  const updateChecklist = async (newChecklist: boolean[]) => {
    setChecklist(newChecklist)
    setShowCongrats(newChecklist.every(Boolean))
    if (user) {
      await supabase.from('users').update({ checklist_status: newChecklist }).eq('id', user.id)
    }
  }

  // Progress calculation
  const completedCount = checklist.filter(Boolean).length
  const progress = completedCount / 3

  // Checklist step data
  const checklistSteps = [
    {
      title: `File your LLC in ${user?.state || '[State]'}`,
      description: 'This legally registers your business and gives it the authority to operate. Once filed, you\'ll receive your official registration documents.'
    },
    {
      title: 'Apply for your EIN',
      description: 'Your Employer Identification Number (EIN) is your business’s tax ID — required to open a bank account, hire employees, or file taxes. It’s free through the IRS.'
    },
    {
      title: 'Print and Sign Your Operating Agreement',
      description: 'We’ve prepared one for you. Just download it, print, review, and sign. Most banks require a signed Operating Agreement to open an account, and it helps clearly define how your LLC runs.'
    }
  ]

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
  // Remove scrollToSection and any scroll logic

  // Helper function to generate clean HTML content for PDF
  // Remove generatePDFContent and all usage of ReactDOMServer.renderToString
  // Only use DOM nodes for html2pdf.js

  // Helper to render OA content with/without signature section
  const renderOAContent = (user: User, isPDF: boolean) => {
    const isSingleMember = user.is_solo_owner === 'yes';
    const memberNames = isSingleMember
      ? user.full_name
      : `${user.full_name} and ${user.partner_name || '[Partner Name]'}`;
    const ownershipPrimary = user.ownership_primary || '50';
    const ownershipPartner = user.ownership_partner || '50';
    return (
      <div className="space-y-6" style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
        <h2 className="text-2xl font-bold text-gray-900" style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>Operating Agreement for {user.business_name}</h2>
        <div className="text-gray-700" style={{ fontSize: '16px', marginBottom: '16px' }}>
          <strong>Company Overview</strong><br />
          <b>Business Name:</b> {user.business_name}<br />
          <b>Principal Address:</b> {user.business_address || '[Not specified]'}<br />
          <b>State:</b> {user.state}
        </div>
        <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>1. Introduction</h3>
        <p style={{ fontSize: '14px', marginBottom: '16px', color: '#374151' }}>
          This Operating Agreement ("Agreement") is made effective as of the date above by and among the Member{isSingleMember ? '' : 's'} of {user.business_name}, a limited liability company formed under the laws of the State of {user.state}.
        </p>
        <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>2. Company Overview</h3>
        <ul className="list-disc ml-6" style={{ fontSize: '14px', marginBottom: '16px', color: '#374151', paddingLeft: '24px' }}>
          <li style={{ marginBottom: '4px' }}>Business Name: {user.business_name}</li>
          <li style={{ marginBottom: '4px' }}>State of Formation: {user.state}</li>
          <li style={{ marginBottom: '4px' }}>Effective Date: {new Date().toLocaleDateString()}</li>
          <li style={{ marginBottom: '4px' }}>Entity Type: {isSingleMember ? 'Single-Member LLC' : 'Multi-Member LLC'}</li>
          <li style={{ marginBottom: '4px' }}>Managed By: Member-managed</li>
          <li style={{ marginBottom: '4px' }}>Principal Address: {user.business_address || '[Not specified]'}</li>
        </ul>
        <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>3. Purpose of the LLC</h3>
        <p style={{ fontSize: '14px', marginBottom: '16px', color: '#374151' }}>The purpose of the LLC is to engage in any lawful business activity permitted under the laws of {user.state}. The Member{isSingleMember ? '' : 's'} may modify the purpose as needed.</p>
        <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>4. Ownership</h3>
        <ul className="list-disc ml-6" style={{ fontSize: '14px', marginBottom: '16px', color: '#374151', paddingLeft: '24px' }}>
          <li style={{ marginBottom: '4px' }}>Member{isSingleMember ? '' : 's'}: {memberNames}</li>
          {isSingleMember ? (
            <li style={{ marginBottom: '4px' }}>This is a Single-Member LLC, owned and operated by {user.full_name}.</li>
          ) : (
            <>
              <li style={{ marginBottom: '4px' }}>{user.full_name}: {ownershipPrimary}% ownership</li>
              <li style={{ marginBottom: '4px' }}>{user.partner_name || '[Partner Name]'}: {ownershipPartner}% ownership</li>
              <li style={{ marginBottom: '4px' }}>This is a Multi-Member LLC, owned and operated by both members.</li>
            </>
          )}
          <li style={{ marginBottom: '4px' }}>Each Member owns an equal share of the LLC unless otherwise agreed in writing.</li>
        </ul>
        <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>5. Capital Contributions</h3>
        <ul className="list-disc ml-6" style={{ fontSize: '14px', marginBottom: '16px', color: '#374151', paddingLeft: '24px' }}>
          <li style={{ marginBottom: '4px' }}>Initial contributions from Member{isSingleMember ? '' : 's'}: [Not specified]</li>
          <li style={{ marginBottom: '4px' }}>No additional contributions are required unless agreed in writing by all Member{isSingleMember ? '' : 's'}.</li>
        </ul>
        <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>6. Profit and Loss Allocation</h3>
        <p style={{ fontSize: '14px', marginBottom: '16px', color: '#374151' }}>
          All profits and losses will be distributed in proportion to ownership, unless otherwise agreed upon. Distributions will be made at the discretion of the Member{isSingleMember ? '' : 's'}.
        </p>
        <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>7. Management and Voting</h3>
        <p style={{ fontSize: '14px', marginBottom: '16px', color: '#374151' }}>
          The LLC is Member-managed. Major decisions (such as admitting new members or dissolving the LLC) require approval by all Member{isSingleMember ? '' : 's'}.
          {isSingleMember ? '' : ' Each member’s voting power is proportional to their ownership percentage.'}
        </p>
        <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>8. Liability Protection</h3>
        <p style={{ fontSize: '14px', marginBottom: '16px', color: '#374151' }}>Member{isSingleMember ? '' : 's'} are not personally liable for the debts or obligations of the LLC. The LLC will indemnify Member{isSingleMember ? '' : 's'} to the extent permitted by law.</p>
        <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>9. Ownership Changes</h3>
        <p style={{ fontSize: '14px', marginBottom: '16px', color: '#374151' }}>No Member may transfer ownership without written consent from the other Member{isSingleMember ? '' : 's'}, unless required by law.</p>
        <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>10. Dissolution</h3>
        <p style={{ fontSize: '14px', marginBottom: '16px', color: '#374151' }}>The LLC may be dissolved upon:<br/>- A majority vote by Member{isSingleMember ? '' : 's'}<br/>- Completion of its business purpose<br/>- Only one Member remaining (if multi-member)<br/>Upon dissolution, assets will be distributed in this order:<br/>1. Creditors<br/>2. Taxes<br/>3. Members based on ownership</p>
        <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>11. Governing Law</h3>
        <p style={{ fontSize: '14px', marginBottom: '16px', color: '#374151' }}>This Agreement is governed by the laws of the State of {user.state}.</p>
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded" style={{ marginTop: '24px', padding: '16px', backgroundColor: '#fef3c7', border: '1px solid #f59e0b', borderRadius: '8px' }}>
          <strong style={{ fontWeight: '600' }}>Disclaimer:</strong> This document is for informational and educational purposes only. It is not legal, tax, or financial advice. Start With Genie is not a law firm and does not provide legal services. You should consult a qualified attorney, accountant, or advisor to ensure this document is appropriate for your specific situation.
        </div>
        <div className="text-xs text-gray-400 mt-2" style={{ fontSize: '12px', color: '#9ca3af', marginTop: '8px' }}>Generated by Start With Genie</div>
        {/* Signature section for PDF only */}
        {isPDF && (
          <div style={{ marginTop: 48 }}>
            {isSingleMember ? (
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', gap: 64, marginBottom: 32 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 220 }}>
                  <div style={{ borderBottom: '1px solid #222', width: 200, height: 32 }} />
                  <div style={{ fontSize: 14, marginTop: 8 }}>Member Signature</div>
                  <div style={{ fontSize: 13, marginTop: 2 }}>{user.full_name}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 220 }}>
                  <div style={{ borderBottom: '1px solid #222', width: 200, height: 32 }} />
                  <div style={{ fontSize: 14, marginTop: 8 }}>Date</div>
                </div>
              </div>
            ) : (
              <>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', gap: 64, marginBottom: 32 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 220 }}>
                    <div style={{ borderBottom: '1px solid #222', width: 200, height: 32 }} />
                    <div style={{ fontSize: 14, marginTop: 8 }}>Member 1 Signature</div>
                    <div style={{ fontSize: 13, marginTop: 2 }}>{user.full_name}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 220 }}>
                    <div style={{ borderBottom: '1px solid #222', width: 200, height: 32 }} />
                    <div style={{ fontSize: 14, marginTop: 8 }}>Date</div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', gap: 64, marginBottom: 32 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 220 }}>
                    <div style={{ borderBottom: '1px solid #222', width: 200, height: 32 }} />
                    <div style={{ fontSize: 14, marginTop: 8 }}>Member 2 Signature</div>
                    <div style={{ fontSize: 13, marginTop: 2 }}>{user.partner_name || '[Partner Name]'}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 220 }}>
                    <div style={{ borderBottom: '1px solid #222', width: 200, height: 32 }} />
                    <div style={{ fontSize: 14, marginTop: 8 }}>Date</div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    );
  };

  // 1. Remove the handleDownloadPDF function entirely.
  // 2. Remove any Button or UI element that references handleDownloadPDF or PDF download for any document.
  // 3. Ensure only the Print / Save as PDF button remains for the Operating Agreement section.
  // 4. Remove any import or usage of html2pdf.js or related PDF logic.

  // Helper to get document URL by type
  const getDocUrl = (type: string) => documents.find(d => d.doc_type === type)?.url;

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id)
  }

  const handleChecklistToggle = () => setChecklistOpen((v) => !v)

  const handleDocumentsToggle = () => setDocumentsOpen((v) => !v)

  // Add error state
  const [pdfError, setPdfError] = useState<string | null>(null);

  // PDF download handlers
  // Remove handleDownloadOA, handleDownloadLLC, handleDownloadEIN (all @react-pdf/renderer usage)

  // 1. Add handlePrintOperatingAgreement function:
  const handlePrintOperatingAgreement = () => {
    // Render the OA content as HTML string
    const oaHtmlString = document.getElementById('printable-operating-agreement-hidden')?.innerHTML || '';
    const printWindow = window.open('', '_blank', 'width=900,height=1200');
    if (!printWindow) return;
    printWindow.document.write(`
      <html>
        <head>
          <title>Operating Agreement</title>
          <style>
            body { font-family: Arial, sans-serif; color: #222; background: white; margin: 0; padding: 32px; }
            h2, h3 { color: #1f2937; }
            ul, ol { margin-left: 1.5em; }
            .text-gray-700 { color: #374151; }
            .text-gray-900 { color: #1f2937; }
            .text-xs { font-size: 12px; }
            .bg-yellow-50 { background: #fef3c7; }
            .border-yellow-200 { border-color: #f59e0b; }
            .rounded { border-radius: 8px; }
            .font-bold { font-weight: bold; }
            .font-semibold { font-weight: 600; }
            .mt-4 { margin-top: 24px; }
            .mb-2 { margin-bottom: 8px; }
            .mb-4 { margin-bottom: 16px; }
            .mb-6 { margin-bottom: 24px; }
            .p-4 { padding: 16px; }
            .list-disc { list-style-type: disc; }
            .ml-6 { margin-left: 24px; }
            .signature-line { border-bottom: 1px solid #222; width: 200px; height: 32px; margin-bottom: 8px; }
            @media print {
              body { margin: 0; padding: 0; }
            }
          </style>
        </head>
        <body>
          ${oaHtmlString}
          <script>window.onload = function() { window.print(); window.onafterprint = function() { window.close(); }; };</script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  // Print handlers for each document
  const handlePrintLLCInstructions = () => {
    const llcHtmlString = document.getElementById('printable-llc-instructions-hidden')?.innerHTML || '';
    const printWindow = window.open('', '_blank', 'width=900,height=1200');
    if (!printWindow) return;
    printWindow.document.write(`
      <html>
        <head>
          <title>LLC Filing Instructions</title>
          <style>
            body { font-family: Arial, sans-serif; color: #222; background: white; margin: 0; padding: 32px; }
            h2, h3 { color: #1f2937; }
            ul, ol { margin-left: 1.5em; }
            .text-gray-700 { color: #374151; }
            .text-gray-900 { color: #1f2937; }
            .text-xs { font-size: 12px; }
            .bg-yellow-50 { background: #fef3c7; }
            .border-yellow-200 { border-color: #f59e0b; }
            .rounded { border-radius: 8px; }
            .font-bold { font-weight: bold; }
            .font-semibold { font-weight: 600; }
            .mt-4 { margin-top: 24px; }
            .mb-2 { margin-bottom: 8px; }
            .mb-4 { margin-bottom: 16px; }
            .mb-6 { margin-bottom: 24px; }
            .p-4 { padding: 16px; }
            .list-disc { list-style-type: disc; }
            .ml-6 { margin-left: 24px; }
            @media print { body { margin: 0; padding: 0; } }
          </style>
        </head>
        <body>
          ${llcHtmlString}
          <script>window.onload = function() { window.print(); window.onafterprint = function() { window.close(); }; };</script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  const handlePrintEINGuide = () => {
    const einHtmlString = document.getElementById('printable-ein-guide-hidden')?.innerHTML || '';
    const printWindow = window.open('', '_blank', 'width=900,height=1200');
    if (!printWindow) return;
    printWindow.document.write(`
      <html>
        <head>
          <title>EIN Guide</title>
          <style>
            body { font-family: Arial, sans-serif; color: #222; background: white; margin: 0; padding: 32px; }
            h2, h3 { color: #1f2937; }
            ul, ol { margin-left: 1.5em; }
            .text-gray-700 { color: #374151; }
            .text-gray-900 { color: #1f2937; }
            .text-xs { font-size: 12px; }
            .bg-yellow-50 { background: #fef3c7; }
            .border-yellow-200 { border-color: #f59e0b; }
            .rounded { border-radius: 8px; }
            .font-bold { font-weight: bold; }
            .font-semibold { font-weight: 600; }
            .mt-4 { margin-top: 24px; }
            .mb-2 { margin-bottom: 8px; }
            .mb-4 { margin-bottom: 16px; }
            .mb-6 { margin-bottom: 24px; }
            .p-4 { padding: 16px; }
            .list-disc { list-style-type: disc; }
            .ml-6 { margin-left: 24px; }
            @media print { body { margin: 0; padding: 0; } }
          </style>
        </head>
        <body>
          ${einHtmlString}
          <script>window.onload = function() { window.print(); window.onafterprint = function() { window.close(); }; };</script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

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
  // Find state info for the user's state abbreviation
  const stateInfo = llcStates.find(row => row.Abbreviation?.toUpperCase() === user.state?.toUpperCase());
  const filingFee = stateInfo?.['Avg Filing Fee'] ? `$${stateInfo['Avg Filing Fee']}` : 'Unavailable – please check your state’s website';
  const processingTime = stateInfo?.['Processing Time'] || 'Unavailable – please check your state’s website';
  const filingUrl = stateInfo?.['Filing URL'] || 'Unavailable – please check your state’s website';

  // --- HTML content for each doc ---
  const llcHtml = (
    <div className="space-y-6" style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2 className="text-2xl font-bold text-gray-900" style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>LLC Filing Instructions for {user.business_name}</h2>
      <div className="text-gray-700" style={{ fontSize: '16px', color: '#374151', marginBottom: '8px' }}>Prepared for {user.full_name} | Forming in {user.state}</div>
      <div className="text-gray-500 text-sm mb-2" style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}>Start With Genie – Your silent assistant for setup</div>
      <div className="text-gray-500 text-sm mb-4" style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>Effective Date: {today}</div>
      
      <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>1. Why This Step Matters</h3>
      <p style={{ fontSize: '14px', marginBottom: '16px', color: '#374151' }}>Filing your Articles of Organization is what officially creates your LLC with the state. Once approved, your business becomes legally recognized and ready to operate.</p>
      
      <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>2. What You'll Need</h3>
      <ul className="list-disc ml-6" style={{ fontSize: '14px', marginBottom: '16px', color: '#374151', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '4px' }}>Business name: {user.business_name}</li>
        <li style={{ marginBottom: '4px' }}>Owner name(s): {user.full_name}</li>
        <li style={{ marginBottom: '4px' }}>Business address: {user.business_address}</li>
        <li style={{ marginBottom: '4px' }}>Registered Agent (you or someone else in {user.state})</li>
        <li style={{ marginBottom: '4px' }}>Management structure: Member-managed</li>
        <li style={{ marginBottom: '4px' }}>Filing website login (some states require creating an account)</li>
      </ul>
      
      <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>3. Filing Details for {user.state}</h3>
      <ul className="list-disc ml-6" style={{ fontSize: '14px', marginBottom: '16px', color: '#374151', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '4px' }}>Filing Fee: {filingFee}</li>
        <li style={{ marginBottom: '4px' }}>Processing Time: {processingTime}</li>
        <li style={{ marginBottom: '4px' }}>Where to File: <a href={filingUrl} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>{filingUrl}</a></li>
      </ul>
      
      {/* Step-by-Step Instructions - PDF formatting fix */}
      <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: 600, marginTop: 24, marginBottom: 12, color: '#1f2937' }}>4. Step-by-Step Instructions</h3>
      <ol
        className="list-decimal ml-6"
        style={{
          fontSize: '14px',
          marginBottom: '16px',
          color: '#374151',
          paddingLeft: '28px',
          lineHeight: 1.7,
          textAlign: 'left',
          maxWidth: '100%',
          wordBreak: 'break-word',
          overflowWrap: 'anywhere',
        }}
      >
        <li style={{ marginBottom: '10px' }}>Go to the link above and create an account (if required)</li>
        <li style={{ marginBottom: '10px' }}>Select "Form a New LLC" or "Articles of Organization"</li>
        <li style={{ marginBottom: '10px' }}>Enter your business and owner information</li>
        <li style={{ marginBottom: '10px' }}>Add your Registered Agent</li>
        <li style={{ marginBottom: '10px' }}>Pay the filing fee online</li>
        <li style={{ marginBottom: '10px' }}>Submit the application and wait for approval</li>
      </ol>
      
      <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>5. After You File</h3>
      <p style={{ fontSize: '14px', marginBottom: '16px', color: '#374151' }}>Once approved, you'll receive a confirmation document or certificate from the state. Save this — you'll need it for your EIN, bank account, and taxes.<br/>Next step: Apply for your EIN and sign your Operating Agreement.</p>
      
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded" style={{ marginTop: '24px', padding: '16px', backgroundColor: '#fef3c7', border: '1px solid #f59e0b', borderRadius: '8px' }}>
        <strong style={{ fontWeight: '600' }}>Disclaimer:</strong> This document is for informational and educational purposes only. It is not legal, tax, or financial advice. Start With Genie is not a law firm and does not provide legal services. You should consult a qualified attorney, accountant, or advisor to ensure this document is appropriate for your specific situation.
      </div>
      <div className="text-xs text-gray-400 mt-2" style={{ fontSize: '12px', color: '#9ca3af', marginTop: '8px' }}>Generated by Start With Genie</div>
    </div>
  )

  const einHtml = (
    <div className="space-y-6" style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2 className="text-2xl font-bold text-gray-900" style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>EIN Instructions for {user.business_name}</h2>
      <div className="text-gray-700" style={{ fontSize: '16px', color: '#374151', marginBottom: '8px' }}>Prepared for {user.full_name} | Formed in {user.state}</div>
      <div className="text-gray-500 text-sm mb-2" style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}>Start With Genie – Your silent assistant for setup</div>
      <div className="text-gray-500 text-sm mb-4" style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>Effective Date: {today}</div>
      
      <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>1. What Is an EIN?</h3>
      <p style={{ fontSize: '14px', marginBottom: '16px', color: '#374151' }}>An EIN (Employer Identification Number) is a unique ID issued by the IRS. Think of it as your business's Social Security Number — it's required to:<br/>- Open a business bank account<br/>- File taxes<br/>- Hire employees<br/>- Apply for business credit<br/>Even if you're the only owner, most banks and services will ask for your EIN.</p>
      
      <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>2. Do You Need One?</h3>
      <p style={{ fontSize: '14px', marginBottom: '16px', color: '#374151' }}>Most LLCs do need an EIN. Even if you're a single-member LLC with no employees, you'll likely need it for banking, taxes, or applying for licenses.<br/>Good news: getting an EIN is completely free and only takes a few minutes.</p>
      
      <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>3. How to Apply Online (Recommended)</h3>
      <ul className="list-disc ml-6" style={{ fontSize: '14px', marginBottom: '16px', color: '#374151', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '4px' }}>The IRS provides a free online application for EINs.</li>
        <li style={{ marginBottom: '4px' }}>Where to apply: <a href="https://irs.gov/ein" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>https://irs.gov/ein</a></li>
        <li style={{ marginBottom: '4px' }}>When: Monday through Friday, 7:00 AM – 10:00 PM EST</li>
        <li style={{ marginBottom: '4px' }}>What you'll need: your name ({user.full_name}), your business name ({user.business_name}), business address, business structure: LLC, whether you are the owner</li>
        <li style={{ marginBottom: '4px' }}>The application takes about 10 minutes. You'll receive your EIN immediately after submission.</li>
      </ul>
      
      <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>4. After You Apply</h3>
      <ul className="list-disc ml-6" style={{ fontSize: '14px', marginBottom: '16px', color: '#374151', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '4px' }}>Save the confirmation letter (CP 575) — this is your proof of EIN</li>
        <li style={{ marginBottom: '4px' }}>You'll need it to open a business bank account, file taxes, and set up payroll</li>
        <li style={{ marginBottom: '4px' }}>Come back to your Genie Dashboard to download your Operating Agreement</li>
      </ul>
      
      <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>5. Alternate Filing (Mail or Fax)</h3>
      <ul className="list-disc ml-6" style={{ fontSize: '14px', marginBottom: '16px', color: '#374151', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '4px' }}>If you don't have a Social Security Number or can't use the online form: download Form SS-4, fill it out and send it by mail or fax to the IRS</li>
        <li style={{ marginBottom: '4px' }}>This method takes longer, but works for non-U.S. residents and others with special cases.</li>
      </ul>
      
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded" style={{ marginTop: '24px', padding: '16px', backgroundColor: '#fef3c7', border: '1px solid #f59e0b', borderRadius: '8px' }}>
        <strong style={{ fontWeight: '600' }}>Disclaimer:</strong> This document is for informational and educational purposes only. It is not legal, tax, or financial advice. Start With Genie is not a law firm and does not provide legal services. You should consult a qualified attorney, accountant, or advisor to ensure this document is appropriate for your specific situation.
      </div>
      <div className="text-xs text-gray-400 mt-2" style={{ fontSize: '12px', color: '#9ca3af', marginTop: '8px' }}>Generated by Start With Genie</div>
    </div>
  )

  // For dashboard preview:
  const oaHtml = renderOAContent(user!, false);

  // For PDF generation:
  const oaHtmlPDF = renderOAContent(user!, true);

  // Define instructions for LLC and EIN PDFs
  const llcInstructions = [
    'Go to the link above and create an account (if required)',
    'Select "Form a New LLC" or "Articles of Organization"',
    'Enter your business name and address',
    'Add your Registered Agent',
    'Pay the filing fee online',
    'Submit the application and wait for approval',
  ];
  const einGuideSteps = [
    'Go to https://irs.gov/ein and start the online application',
    'Enter your business and personal information',
    'Select LLC as your business structure',
    'Complete the application and submit',
    'Download and save your EIN confirmation letter',
  ];
  // --- END HTML content ---

  return (
    <div className="min-h-screen bg-[#f9fafb] font-inter flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-[#f2f2f2]">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/genie-preview.png" alt="Start With Genie" className="w-8 h-8" />
              <h1 className="text-lg font-semibold text-[#1d1d1f]">Dashboard</h1>
            </div>
            <div className="text-sm text-[#8e8e93]">
              {user?.business_name} • {user?.state}
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-8"
          >
            <h2 className="text-xl font-medium text-[#1c1c1e] mb-1">
              Welcome back, {user?.full_name?.split(' ')[0]} 👋
            </h2>
            <p className="text-sm text-[#8e8e93] flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {currentDateTime}
            </p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white rounded-xl shadow-sm border border-[#f2f2f2] p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-[#1d1d1f]">Get Set Up</h2>
              <span className="text-sm font-medium text-[#8e8e93]">{Math.round(progress * 100)}% complete</span>
            </div>
            <div className="relative w-full h-1.5 bg-[#f2f2f2] rounded-full overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress * 100}%` }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>

          {/* Checklist Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-white rounded-xl shadow-sm border border-[#f2f2f2] p-6"
          >
            <div className="space-y-4">
              {checklistSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex items-start space-x-4 p-4 rounded-lg border transition-all duration-200 ${
                    checklist[idx] 
                      ? 'bg-green-50 border-green-200' 
                      : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center">
                    {checklist[idx] ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                      >
                        <CheckCircle className="w-4 h-4 text-white" />
                      </motion.div>
                    ) : (
                      <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                        <Clock className="w-4 h-4 text-gray-500" />
                      </div>
                    )}
                  </div>
                  <div className={`flex-1 transition-all ${checklist[idx] ? 'opacity-70' : 'opacity-100'}`}>
                    <div className={`font-semibold text-[#1d1d1f] ${checklist[idx] ? 'line-through' : ''}`}>
                      {step.title}
                    </div>
                    <div className="text-sm text-[#8e8e93] mt-1">
                      {step.description}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      const updated = [...checklist]
                      updated[idx] = !updated[idx]
                      updateChecklist(updated)
                    }}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      checklist[idx]
                        ? 'bg-green-100 text-green-700 hover:bg-green-200'
                        : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                    }`}
                  >
                    {checklist[idx] ? 'Completed' : 'Mark Complete'}
                  </button>
                </motion.div>
              ))}
              <AnimatePresence>
                {showCongrats && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-[#1d1d1f] text-lg">🎉 All Set!</div>
                        <div className="text-sm text-[#8e8e93] mt-1">
                          Your business is now fully set up and ready to operate.
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Documents Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-white rounded-xl shadow-sm border border-[#f2f2f2] p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-[#1d1d1f] flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-500" /> Your Documents
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* LLC Filing Instructions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="bg-white rounded-xl border border-[#f2f2f2] shadow-sm p-5 flex flex-col justify-between h-48 transition-all duration-200 hover:shadow-md hover:scale-[1.01]"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-medium text-lg text-[#1c1c1e] mb-1">LLC Filing Instructions</h3>
                  <p className="text-sm text-[#8e8e93]">Step-by-step guide</p>
                </div>
                <div className="flex gap-2 mt-6">
                  <button
                    onClick={() => toggleSection('llc-instructions')}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </button>
                  <button
                    onClick={handlePrintLLCInstructions}
                    className="flex-1 bg-[#f2f2f7] text-[#1d1d1f] hover:bg-[#e5e5ea] rounded-md text-sm font-medium transition-all duration-200 flex items-center justify-center px-4 py-2"
                  >
                    <DownloadIcon className="w-4 h-4 mr-2" />
                    PDF
                  </button>
                </div>
                <AnimatePresence>
                  {openSection === 'llc-instructions' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 p-4 bg-gray-50 rounded-lg text-sm"
                    >
                      {llcHtml}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* EIN Guide */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="bg-white rounded-xl border border-[#f2f2f2] shadow-sm p-5 flex flex-col justify-between h-48 transition-all duration-200 hover:shadow-md hover:scale-[1.01]"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                    <Building2 className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-medium text-lg text-[#1c1c1e] mb-1">EIN Guide</h3>
                  <p className="text-sm text-[#8e8e93]">Tax ID application</p>
                </div>
                <div className="flex gap-2 mt-6">
                  <button
                    onClick={() => toggleSection('ein-guide')}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </button>
                  <button
                    onClick={handlePrintEINGuide}
                    className="flex-1 bg-[#f2f2f7] text-[#1d1d1f] hover:bg-[#e5e5ea] rounded-md text-sm font-medium transition-all duration-200 flex items-center justify-center px-4 py-2"
                  >
                    <DownloadIcon className="w-4 h-4 mr-2" />
                    PDF
                  </button>
                </div>
                <AnimatePresence>
                  {openSection === 'ein-guide' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 p-4 bg-gray-50 rounded-lg text-sm"
                    >
                      {einHtml}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Operating Agreement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="bg-white rounded-xl border border-[#f2f2f2] shadow-sm p-5 flex flex-col justify-between h-48 transition-all duration-200 hover:shadow-md hover:scale-[1.01]"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
                    <ScrollText className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="font-medium text-lg text-[#1c1c1e] mb-1">Operating Agreement</h3>
                  <p className="text-sm text-[#8e8e93]">Legal document</p>
                </div>
                <div className="flex gap-2 mt-6">
                  <button
                    onClick={() => toggleSection('operating-agreement')}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </button>
                  <button
                    onClick={handlePrintOperatingAgreement}
                    className="flex-1 bg-[#f2f2f7] text-[#1d1d1f] hover:bg-[#e5e5ea] rounded-md text-sm font-medium transition-all duration-200 flex items-center justify-center px-4 py-2"
                  >
                    <DownloadIcon className="w-4 h-4 mr-2" />
                    PDF
                  </button>
                </div>
                <AnimatePresence>
                  {openSection === 'operating-agreement' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 p-4 bg-gray-50 rounded-lg text-sm"
                    >
                      {oaHtmlPDF}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>

          {/* Genie Assistant Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="bg-white rounded-xl shadow-sm border border-[#f2f2f2] p-6 max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <img src="/genie-preview.png" alt="Genie" className="w-10 h-10 rounded-full" />
              <div>
                <h2 className="text-xl font-medium text-gray-900">Your Genie Assistant</h2>
                <p className="text-sm text-gray-500">Ask anything about your LLC setup — we'll guide you step-by-step.</p>
              </div>
            </div>

            {/* Smart Prompt Suggestions */}
            <div className="flex flex-wrap gap-2 mb-4">
              <button 
                onClick={() => {
                  // Trigger a predefined question
                  const input = document.getElementById('genie-input') as HTMLInputElement;
                  if (input) {
                    input.value = "How do I get my EIN?";
                    input.dispatchEvent(new Event('input', { bubbles: true }));
                  }
                }}
                className="rounded-full bg-[#f1f1f1] text-sm px-4 py-2 hover:bg-[#e5e5e5] transition-all duration-200"
              >
                How do I get my EIN?
              </button>
              <button 
                onClick={() => {
                  const input = document.getElementById('genie-input') as HTMLInputElement;
                  if (input) {
                    input.value = "Where do I file my LLC?";
                    input.dispatchEvent(new Event('input', { bubbles: true }));
                  }
                }}
                className="rounded-full bg-[#f1f1f1] text-sm px-4 py-2 hover:bg-[#e5e5e5] transition-all duration-200"
              >
                Where do I file my LLC?
              </button>
              <button 
                onClick={() => {
                  const input = document.getElementById('genie-input') as HTMLInputElement;
                  if (input) {
                    input.value = "What's an Operating Agreement?";
                    input.dispatchEvent(new Event('input', { bubbles: true }));
                  }
                }}
                className="rounded-full bg-[#f1f1f1] text-sm px-4 py-2 hover:bg-[#e5e5e5] transition-all duration-200"
              >
                What's an Operating Agreement?
              </button>
            </div>

            {/* Chat Interface */}
            <div className="min-h-[300px] max-h-[400px] overflow-y-auto">
              <GenieChat avatarSrc="/genie-preview.png" />
            </div>
          </motion.div>
        </motion.div>


      </main>

      {/* Help Widget */}
      <div className="fixed bottom-6 right-6 z-40">
        <HelpWidget />
      </div>

      {/* Sticky Minimal Footer */}
      <footer className="sticky bottom-0 w-full bg-white/80 backdrop-blur-md border-t border-[#f2f2f2] py-4 flex items-center justify-center text-sm text-[#8e8e93] z-30">
        <Link href="/contact" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium">
          <HelpCircle className="w-4 h-4" />
          Need help? Contact Support
        </Link>
      </footer>
    </div>
  )
} 