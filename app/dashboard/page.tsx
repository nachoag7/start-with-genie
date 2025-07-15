'use client'

import React, { useRef } from 'react'
import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { Download, MessageCircle, Mail, RefreshCw } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { supabase } from '../../lib/supabase'
import { generateLLCFilingInstructions, generateEINGuide, generateOperatingAgreement } from '../../lib/pdf-generator'
import GenieChat from '../../components/GenieChat'
import llcStates from '../../data/llc_states.json';
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
  const router = useRouter()
  const pathname = usePathname()

  // Add refs for each document section
  const llcRef = useRef<HTMLDivElement>(null)
  const einRef = useRef<HTMLDivElement>(null)
  const oaRef = useRef<HTMLDivElement>(null)

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

  // Robust scroll-to-top: on route change and after loading
  useEffect(() => {
    if (pathname === '/dashboard') {
      window.scrollTo(0, 0)
    }
  }, [pathname])
  useEffect(() => {
    if (!isLoading) {
      window.scrollTo(0, 0)
    }
  }, [isLoading])

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
        <p style={{ fontSize: '14px', marginBottom: '16px', color: '#374151' }}>This Operating Agreement ("Agreement") is made effective as of the date above by and among the Member(s) of {user.business_name}, a limited liability company formed under the laws of the State of {user.state}.</p>
        
        <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>2. Company Overview</h3>
        <ul className="list-disc ml-6" style={{ fontSize: '14px', marginBottom: '16px', color: '#374151', paddingLeft: '24px' }}>
          <li style={{ marginBottom: '4px' }}>Business Name: {user.business_name}</li>
          <li style={{ marginBottom: '4px' }}>State of Formation: {user.state}</li>
          <li style={{ marginBottom: '4px' }}>Effective Date: {new Date().toLocaleDateString()}</li>
          <li style={{ marginBottom: '4px' }}>Entity Type: Single-Member LLC</li>
          <li style={{ marginBottom: '4px' }}>Managed By: Member-managed</li>
          <li style={{ marginBottom: '4px' }}>Principal Address: {user.business_address || '[Not specified]'}</li>
        </ul>
        
        <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>3. Purpose of the LLC</h3>
        <p style={{ fontSize: '14px', marginBottom: '16px', color: '#374151' }}>The purpose of the LLC is to engage in any lawful business activity permitted under the laws of {user.state}. The Member(s) may modify the purpose as needed.</p>
        
        <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>4. Ownership</h3>
        <ul className="list-disc ml-6" style={{ fontSize: '14px', marginBottom: '16px', color: '#374151', paddingLeft: '24px' }}>
          <li style={{ marginBottom: '4px' }}>Member(s): {user.full_name}</li>
          <li style={{ marginBottom: '4px' }}>This is a Single-Member LLC, owned and operated by {user.full_name}.</li>
          <li style={{ marginBottom: '4px' }}>Each Member owns an equal share of the LLC unless otherwise agreed in writing.</li>
        </ul>
        
        <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>5. Capital Contributions</h3>
        <ul className="list-disc ml-6" style={{ fontSize: '14px', marginBottom: '16px', color: '#374151', paddingLeft: '24px' }}>
          <li style={{ marginBottom: '4px' }}>Initial contributions from Member(s): [Not specified]</li>
          <li style={{ marginBottom: '4px' }}>No additional contributions are required unless agreed in writing by all Members.</li>
        </ul>
        
        <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>6. Profit and Loss Allocation</h3>
        <p style={{ fontSize: '14px', marginBottom: '16px', color: '#374151' }}>All profits and losses will be distributed in proportion to ownership, unless otherwise agreed upon. Distributions will be made at the discretion of the Member(s).</p>
        
        <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>7. Management and Voting</h3>
        <p style={{ fontSize: '14px', marginBottom: '16px', color: '#374151' }}>The LLC is Member-managed. Major decisions (such as admitting new members or dissolving the LLC) require approval by all Member(s).</p>
        
        <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>8. Liability Protection</h3>
        <p style={{ fontSize: '14px', marginBottom: '16px', color: '#374151' }}>Member(s) are not personally liable for the debts or obligations of the LLC. The LLC will indemnify Member(s) to the extent permitted by law.</p>
        
        <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>9. Ownership Changes</h3>
        <p style={{ fontSize: '14px', marginBottom: '16px', color: '#374151' }}>No Member may transfer ownership without written consent from the other Member(s), unless required by law.</p>
        
        <h3 className="font-semibold text-lg mt-4" style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' }}>10. Dissolution</h3>
        <p style={{ fontSize: '14px', marginBottom: '16px', color: '#374151' }}>The LLC may be dissolved upon:<br/>- A majority vote by Member(s)<br/>- Completion of its business purpose<br/>- Only one Member remaining (if multi-member)<br/>Upon dissolution, assets will be distributed in this order:<br/>1. Creditors<br/>2. Taxes<br/>3. Members based on ownership</p>
        
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

  // Replace handleDownloadPDF to open PDF in new tab and add footer
  const handleDownloadPDF = async (sectionId: string, fileName: string) => {
    setIsGeneratingPDF(sectionId);
    try {
      const html2pdf = (await import('html2pdf.js')).default;
      let node: HTMLDivElement | null = null;
      switch (sectionId) {
        case 'llc-instructions-content':
          node = llcRef.current;
          break;
        case 'ein-guide-content':
          node = einRef.current;
          break;
        case 'operating-agreement-content':
          node = oaRef.current;
          break;
        default:
          setIsGeneratingPDF(null);
          return;
      }
      if (!node) {
        console.error('PDF source node not found for', sectionId);
        alert('PDF source not found.');
        setIsGeneratingPDF(null);
        return;
      }
      // Clone node to avoid mutating dashboard
      const clone = node.cloneNode(true) as HTMLElement;
      // Add PDF footer
      const footer = document.createElement('div');
      footer.style.textAlign = 'center';
      footer.style.fontSize = '12px';
      footer.style.color = '#888';
      footer.style.marginTop = '32px';
      footer.textContent = 'Generated by Start With Genie – https://startwithgenie.com';
      clone.appendChild(footer);
      // Wait for images/fonts to load
      await new Promise(resolve => setTimeout(resolve, 200));
      // Generate PDF as blob
      const opt = {
        margin: [0.5, 0.5, 0.5, 0.5],
        filename: fileName,
        html2canvas: {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff',
          logging: false,
        },
        jsPDF: {
          unit: 'in',
          format: 'letter',
          orientation: 'portrait',
          compress: true,
          precision: 16
        }
      };
      const worker = html2pdf().set(opt).from(clone);
      const pdfBlob: Blob = await worker.outputPdf('blob');
      const url = URL.createObjectURL(pdfBlob);
      window.open(url, '_blank');
      setTimeout(() => URL.revokeObjectURL(url), 10000);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('PDF generation failed. Please try again or contact support if the issue persists.');
    } finally {
      setIsGeneratingPDF(null);
    }
  };

  // Helper to get document URL by type
  const getDocUrl = (type: string) => documents.find(d => d.doc_type === type)?.url;

  // Collapsible state
  const [openSection, setOpenSection] = useState<string | null>(null)
  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id)
  }

  // Checklist collapsible state
  const [checklistOpen, setChecklistOpen] = useState(false)
  const handleChecklistToggle = () => setChecklistOpen((v) => !v)

  // Group documents into a single collapsible section
  const [documentsOpen, setDocumentsOpen] = useState(false)
  const handleDocumentsToggle = () => setDocumentsOpen((v) => !v)

  // Add error state
  const [pdfError, setPdfError] = useState<string | null>(null);

  // PDF download handlers
  // Remove handleDownloadOA, handleDownloadLLC, handleDownloadEIN (all @react-pdf/renderer usage)

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
              Your Setup Checklist
            </h3>
            <Button
              variant="outline"
              size="sm"
              className="ml-2 px-3 py-1 text-sm flex items-center gap-1"
              onClick={handleChecklistToggle}
              aria-expanded={checklistOpen}
              aria-controls="setup-checklist-content"
            >
              <span className={`transition-transform ${checklistOpen ? 'rotate-90' : ''}`}>▶</span>
              {checklistOpen ? 'Hide' : 'Show'}
            </Button>
          </div>
          {checklistOpen && (
            <div id="setup-checklist-content" className="space-y-4 transition-all duration-300">
              <ol className="list-decimal pl-6 text-gray-800">
                <li className="mb-2">
                  <span className="font-semibold">File your LLC in {user.state}</span>
                  <div className="text-gray-700 text-sm">This registers your business with the state and gives it legal status.</div>
                  <div className="text-gray-700 text-sm mt-1">We’ll give you exact steps once your documents are ready.</div>
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Apply for your EIN</span>
                  <div className="text-gray-700 text-sm">This is your business’s tax ID — required to open a bank account or hire employees.</div>
                  <div className="text-gray-700 text-sm mt-1">We’ll show you how to get it free from the IRS.</div>
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Sign your Operating Agreement</span>
                  <div className="text-gray-700 text-sm">This outlines how your LLC runs and protects you legally.</div>
                  <div className="text-gray-700 text-sm mt-1">Just review and save the one we generate for you.</div>
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

        {/* Documents Collapsible Section - updated style */}
        <div className="bg-white border-l-4 border-blue-500 rounded-xl shadow-sm p-4 mb-8">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              Your Documents
            </h3>
            <Button
              variant="outline"
              size="sm"
              className="ml-2 px-3 py-1 text-sm flex items-center gap-1"
              onClick={handleDocumentsToggle}
              aria-expanded={documentsOpen}
              aria-controls="your-documents-section"
            >
              <span className={`transition-transform ${documentsOpen ? 'rotate-90' : ''}`}>▶</span>
              {documentsOpen ? 'Hide' : 'Show'}
            </Button>
          </div>
          <div
            id="your-documents-section"
            className={`transition-all duration-300 overflow-hidden ${documentsOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
            style={{ willChange: 'max-height, opacity' }}
          >
            {/* LLC Filing Instructions */}
            <div className="bg-white rounded-lg shadow p-6 mb-6 border border-gray-100">
              <h3 className="text-lg font-semibold mb-2">LLC Filing Instructions</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <Button
                  size="lg"
                  className="font-bold w-full sm:w-auto text-base"
                  onClick={() => toggleSection('llc-instructions')}
                >
                  {openSection === 'llc-instructions' ? 'Hide' : 'Show More'}
                </Button>
                {getDocUrl('LLC Filing Instructions') ? (
                  <a
                    href={getDocUrl('LLC Filing Instructions')}
                    download
                    className="inline-flex items-center justify-center rounded-lg font-medium transition-colors transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none hover:scale-105 bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500 px-4 py-2 text-sm w-full sm:w-auto"
                    style={{ minWidth: 140, textAlign: 'center' }}
                  >
                    Download PDF
                  </a>
                ) : (
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full sm:w-auto"
                    onClick={() => handleDownloadPDF('llc-instructions-content', 'LLC_Filing_Instructions.pdf')}
                    disabled={isGeneratingPDF === 'llc-instructions-content'}
                  >
                    {isGeneratingPDF === 'llc-instructions-content' ? (
                      <span className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Generating PDF...
                      </span>
                    ) : (
                      'Download as PDF'
                    )}
                  </Button>
                )}
              </div>
              <div id="llc-instructions-content" className={`transition-all duration-300 px-6 py-4 ${openSection === 'llc-instructions' ? 'block' : 'hidden'}`}>{llcHtml}</div>
              <div style={{display:'none'}}><div ref={llcRef}>{llcHtml}</div></div>
            </div>
            {/* EIN Guide */}
            <div className="bg-white rounded-lg shadow p-6 mb-6 border border-gray-100">
              <h3 className="text-lg font-semibold mb-2">EIN Guide</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <Button
                  size="lg"
                  className="font-bold w-full sm:w-auto text-base"
                  onClick={() => toggleSection('ein-guide')}
                >
                  {openSection === 'ein-guide' ? 'Hide' : 'Show More'}
                </Button>
                {getDocUrl('EIN Guide') ? (
                  <a
                    href={getDocUrl('EIN Guide')}
                    download
                    className="inline-flex items-center justify-center rounded-lg font-medium transition-colors transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none hover:scale-105 bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500 px-4 py-2 text-sm w-full sm:w-auto"
                    style={{ minWidth: 140, textAlign: 'center' }}
                  >
                    Download PDF
                  </a>
                ) : (
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full sm:w-auto"
                    onClick={() => handleDownloadPDF('ein-guide-content', 'EIN_Guide.pdf')}
                    disabled={isGeneratingPDF === 'ein-guide-content'}
                  >
                    {isGeneratingPDF === 'ein-guide-content' ? (
                      <span className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Generating PDF...
                      </span>
                    ) : (
                      'Download as PDF'
                    )}
                  </Button>
                )}
              </div>
              <div id="ein-guide-content" className={`transition-all duration-300 px-6 py-4 ${openSection === 'ein-guide' ? 'block' : 'hidden'}`}>{einHtml}</div>
              <div style={{display:'none'}}><div ref={einRef}>{einHtml}</div></div>
            </div>
            {/* Operating Agreement */}
            <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
              <h3 className="text-lg font-semibold mb-2">Operating Agreement</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                <Button
                  size="lg"
                  className="font-bold w-full sm:w-auto text-base"
                  onClick={() => toggleSection('operating-agreement')}
                >
                  {openSection === 'operating-agreement' ? 'Hide' : 'Show More'}
                </Button>
                {getDocUrl('Operating Agreement') ? (
                  <a
                    href={getDocUrl('Operating Agreement')}
                    download
                    className="inline-flex items-center justify-center rounded-lg font-medium transition-colors transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none hover:scale-105 bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500 px-4 py-2 text-sm w-full sm:w-auto"
                    style={{ minWidth: 140, textAlign: 'center' }}
                  >
                    Download PDF
                  </a>
                ) : (
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full sm:w-auto"
                    onClick={async () => {
                      setIsGeneratingPDF('operating-agreement-content');
                      try {
                        const response = await fetch('/api/documents/operating-agreement', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify({
                            fullName: user?.full_name,
                            businessName: user?.business_name,
                            state: user?.state,
                            email: user?.email,
                          }),
                        });
                        if (!response.ok) {
                          throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        const blob = await response.blob();
                        const url = URL.createObjectURL(blob);
                        window.open(url, '_blank');
                        setTimeout(() => URL.revokeObjectURL(url), 10000);
                      } catch (error) {
                        console.error('Error generating Operating Agreement PDF:', error);
                        alert('PDF generation failed. Please try again or contact support if the issue persists.');
                      } finally {
                        setIsGeneratingPDF(null);
                      }
                    }}
                    disabled={isGeneratingPDF === 'operating-agreement-content'}
                  >
                    {isGeneratingPDF === 'operating-agreement-content' ? (
                      <span className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Generating PDF...
                      </span>
                    ) : (
                      'Download as PDF'
                    )}
                  </Button>
                )}
              </div>
              <div 
                id="operating-agreement-content" 
                className={`transition-all duration-300 px-6 py-4 ${
                  openSection === 'operating-agreement' 
                    ? 'block max-h-[70vh] overflow-y-auto' 
                    : 'hidden'
                }`}
                style={{ 
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#cbd5e0 #f7fafc'
                }}
              >
                <style jsx>{`
                  #operating-agreement-content::-webkit-scrollbar {
                    width: 8px;
                  }
                  #operating-agreement-content::-webkit-scrollbar-track {
                    background: #f7fafc;
                    border-radius: 4px;
                  }
                  #operating-agreement-content::-webkit-scrollbar-thumb {
                    background: #cbd5e0;
                    border-radius: 4px;
                  }
                  #operating-agreement-content::-webkit-scrollbar-thumb:hover {
                    background: #a0aec0;
                  }
                `}</style>
                {oaHtmlPDF}
              </div>
              <div style={{display:'none'}}><div ref={oaRef}>{oaHtml}</div></div>
            </div>
          </div>
        </div>

        {/* Add vertical spacing before support section */}
        <div className="mt-10 mb-8" />

        {/* Actions Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Genie Assistant Inline */}
          <div className="bg-white overflow-hidden shadow rounded-lg flex flex-col justify-between h-full min-h-[220px]">
            <div className="px-4 py-5 sm:p-6 flex-1 flex flex-col justify-between">
              <GenieChat avatarSrc="/genie-preview.png" />
            </div>
          </div>

          {/* Support - compact version */}
          <div className="bg-white overflow-hidden shadow rounded-lg flex flex-col items-start justify-start min-h-0 max-h-[180px] p-0">
            <div className="px-4 py-3 sm:px-4 sm:py-3 flex flex-col gap-2 w-full">
              <div className="flex items-center mb-1">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-2">
                  <h3 className="text-base font-medium text-gray-900 leading-tight">Need Help?</h3>
                  <p className="text-xs text-gray-500 mb-0 leading-tight">Contact our support team</p>
                </div>
              </div>
              <a 
                href="mailto:info@startwithgenie.com"
                className="block w-full mt-1"
                style={{ marginTop: 0 }}
              >
                <Button variant="outline" className="w-full text-xs py-1.5">
                  Contact Support
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 