import jsPDF from 'jspdf'
import { supabase } from './supabase'
import { getStateLLCFilingInfoFromExcel } from './utils'

export interface DocumentData {
  fullName: string
  businessName: string
  state: string
  email: string
}

// State-specific LLC filing information
const stateLLCInfo: Record<string, { url: string; fee: number; time: string; notes: string }> = {
  'Alabama': { url: 'https://www.sos.alabama.gov/business-entities', fee: 200, time: '1-2 weeks', notes: 'Online filings via Secretary of State' },
  'Alaska': { url: 'https://www.commerce.alaska.gov/web/cbpl/Corporations.aspx', fee: 250, time: '2-3 weeks', notes: 'File Articles of Organization online' },
  'Arizona': { url: 'https://ecorp.azcc.gov/', fee: 50, time: '3-5 business days', notes: 'Arizona requires LLC publication after formation' },
  'Arkansas': { url: 'https://www.sos.arkansas.gov/business-commercial-services-bcs', fee: 45, time: '1 week', notes: 'Online business services available' },
  'California': { url: 'https://bizfileonline.sos.ca.gov/', fee: 70, time: '5-10 business days', notes: 'Annual $20 Statement of Information required' },
  'Colorado': { url: 'https://www.sos.state.co.us/biz/FileDoc.do', fee: 50, time: '2-3 business days', notes: 'File online through Secretary of State' },
  'Connecticut': { url: 'https://portal.ct.gov/SOTS/Business-Services/Business-Services', fee: 120, time: '3-5 business days', notes: 'Form online with Business Services Division' },
  'Delaware': { url: 'https://corp.delaware.gov/', fee: 90, time: '3-5 business days', notes: 'Known for favorable business laws' },
  'Florida': { url: 'https://dos.myflorida.com/sunbiz/start-business/', fee: 125, time: '1-2 business days', notes: 'Online filing system Sunbiz is quick and reliable' },
  'Georgia': { url: 'https://ecorp.sos.ga.gov/', fee: 100, time: '5-7 business days', notes: 'Name reservation optional but recommended' },
  'Hawaii': { url: 'https://hbe.ehawaii.gov/', fee: 50, time: '2-3 business days', notes: 'Use Hawaii Business Express portal' },
  'Idaho': { url: 'https://sosbiz.idaho.gov/', fee: 100, time: '2-3 business days', notes: 'LLC setup available fully online' },
  'Illinois': { url: 'https://www.ilsos.gov/corporatellc/', fee: 150, time: '3-5 business days', notes: 'Filing via Secretary of State' },
  'Indiana': { url: 'https://inbiz.in.gov/', fee: 100, time: '1-2 business days', notes: 'Use INBiz portal for all filings' },
  'Iowa': { url: 'https://sos.iowa.gov/business/', fee: 50, time: '3-5 business days', notes: 'Annual Report required every two years' },
  'Kansas': { url: 'https://www.kansas.gov/businesscenter/', fee: 165, time: '3-5 business days', notes: 'Annual report fee due each year' },
  'Kentucky': { url: 'https://onestop.ky.gov/Pages/default.aspx', fee: 40, time: '3-5 business days', notes: 'One Stop Business Portal for registrations' },
  'Louisiana': { url: 'https://geauxbiz.sos.la.gov/', fee: 100, time: '5-10 business days', notes: 'Use GeauxBiz for filings and licensing' },
  'Maine': { url: 'https://www.maine.gov/sos/cec/corp/index.html', fee: 175, time: '3-5 business days', notes: 'Filing by mail or via third-party service' },
  'Maryland': { url: 'https://egov.maryland.gov/BusinessExpress', fee: 100, time: '2-3 business days', notes: 'Annual reports required after formation' },
  'Massachusetts': { url: 'https://corp.sec.state.ma.us/corpweb/CorpSearch/CorpSearch.aspx', fee: 500, time: '3-5 business days', notes: 'Online and in-person options available' },
  'Michigan': { url: 'https://www.michigan.gov/lara/bureau-list/cscl', fee: 50, time: '2-3 business days', notes: 'File through Michigan LARA system' },
  'Minnesota': { url: 'https://mblsportal.sos.state.mn.us/', fee: 50, time: '3-5 business days', notes: 'Quickest filing is online' },
  'Mississippi': { url: 'https://corp.sos.ms.gov/', fee: 50, time: '3-5 business days', notes: 'Annual report is free but required' },
  'Missouri': { url: 'https://bsd.sos.mo.gov/', fee: 50, time: '3-5 business days', notes: 'No annual LLC fee in Missouri' },
  'Montana': { url: 'https://biz.sosmt.gov/', fee: 100, time: '1 week', notes: 'Annual report required each year' },
  'Nebraska': { url: 'https://sos.nebraska.gov/business-services/start-business', fee: 100, time: '3-5 business days', notes: 'Publication of formation required' },
  'Nevada': { url: 'https://www.nvsilverflume.gov/', fee: 75, time: '3-5 business days', notes: 'Higher-than-average fees and initial list required' },
  'New Hampshire': { url: 'https://www.sos.nh.gov/corporation-division', fee: 100, time: '3-5 business days', notes: 'File online or by mail' },
  'New Jersey': { url: 'https://www.nj.gov/treasury/revenue/', fee: 125, time: '3-5 business days', notes: 'Filing handled through Department of Treasury' },
  'New Mexico': { url: 'https://portal.sos.state.nm.us/BFS/online/Account', fee: 50, time: '3-5 business days', notes: 'No annual reports required' },
  'New York': { url: 'https://www.dos.ny.gov/corps/llccorp.html', fee: 200, time: '3-5 business days', notes: 'Must publish formation in two newspapers' },
  'North Carolina': { url: 'https://www.sosnc.gov/Guides/launching_a_business', fee: 125, time: '2-3 business days', notes: 'File Articles of Organization online' },
  'North Dakota': { url: 'https://firststop.sos.nd.gov/', fee: 125, time: '3-5 business days', notes: 'File via FirstStop portal' },
  'Ohio': { url: 'https://bsportal.ohiosos.gov/', fee: 135, time: '2-3 business days', notes: 'Expedited filing options available' },
  'Oklahoma': { url: 'https://www.sos.ok.gov/corp/filing.aspx', fee: 99, time: '3-5 business days', notes: 'Online and paper forms accepted' },
  'Oregon': { url: 'https://sos.oregon.gov/business/pages/register.aspx', fee: 100, time: '1-2 weeks', notes: 'Annual report and renewal fee required' },
  'Pennsylvania': { url: 'https://www.dos.pa.gov/BusinessCharities/Business/Pages/default.aspx', fee: 125, time: '2-3 business days', notes: 'Filing is online and affordable' },
  'Rhode Island': { url: 'https://www.sos.ri.gov/divisions/business-services', fee: 150, time: '3-5 business days', notes: 'Annual reports required' },
  'South Carolina': { url: 'https://sos.sc.gov/', fee: 125, time: '2-3 business days', notes: 'Use Business Entities Online portal' },
  'South Dakota': { url: 'https://sosenterprise.sd.gov/BusinessServices/', fee: 150, time: '2-3 business days', notes: 'Quickest processing via online system' },
  'Tennessee': { url: 'https://tnbear.tn.gov/Ecommerce/', fee: 300, time: '5-7 business days', notes: 'Filing fee based on number of members' },
  'Texas': { url: 'https://www.sos.state.tx.us/corp/llc.shtml', fee: 70, time: '2-3 business days', notes: 'File Form 205 online via SOSDirect' },
  'Utah': { url: 'https://corporations.utah.gov/', fee: 125, time: '3-5 business days', notes: 'Fast online processing through state portal' },
  'Vermont': { url: 'https://sos.vermont.gov/corporations/', fee: 100, time: '2-3 business days', notes: 'Annual report due every year' },
  'Virginia': { url: 'https://cis.scc.virginia.gov/', fee: 100, time: '3-5 business days', notes: 'Use Clerk\'s Information System (CIS)' },
  'Washington': { url: 'https://www.sos.wa.gov/corps/llc/', fee: 200, time: '3-5 business days', notes: 'Separate state and city filings may apply' },
  'West Virginia': { url: 'https://business4.wv.gov/Pages/default.aspx', fee: 100, time: '3-5 business days', notes: 'One Stop Business Portal simplifies filing' },
  'Wisconsin': { url: 'https://www.wdfi.org/corporations/', fee: 100, time: '2-3 business days', notes: 'Register online through DFI site' },
  'Wyoming': { url: 'https://wyobiz.wyo.gov/', fee: 100, time: '3-5 business days', notes: 'Low fees and no state income tax' }
}

async function uploadPDFToSupabase(pdfBlob: Blob, fileName: string, userId: string): Promise<string> {
  try {
    const { data, error } = await supabase.storage
      .from('documents')
      .upload(`${userId}/${fileName}`, pdfBlob, {
        contentType: 'application/pdf'
      })

    if (error) {
      console.error('Error uploading PDF:', error)
      throw error
    }

    const { data: urlData } = supabase.storage
      .from('documents')
      .getPublicUrl(`${userId}/${fileName}`)

    return urlData.publicUrl
  } catch (error) {
    console.error('Error in uploadPDFToSupabase:', error)
    throw error
  }
}

// Apple-level PDF generation helpers
function setAppleFont(doc: jsPDF, weight: 'normal' | 'bold' = 'normal') {
  // Use Helvetica as it's widely supported and clean
  doc.setFont('helvetica', weight)
}

function addAppleText(doc: jsPDF, text: string, x: number, y: number, options: {
  fontSize?: number
  maxWidth?: number
  align?: 'left' | 'center' | 'right'
  color?: number
  spacing?: number
} = {}) {
  const {
    fontSize = 12,
    maxWidth = 140,
    align = 'left',
    color = 30,
    spacing = 6
  } = options

  doc.setFontSize(fontSize)
  doc.setTextColor(color)
  
  const lines = doc.splitTextToSize(text, maxWidth)
  let currentY = y
  
  for (const line of lines) {
    if (currentY > 250) {
      doc.addPage()
      currentY = 40
    }
    doc.text(line, x, currentY, { maxWidth, align })
    currentY += spacing
  }
  
  doc.setTextColor(30)
  return currentY
}

function addAppleHeading(doc: jsPDF, text: string, x: number, y: number, fontSize: number = 18) {
  setAppleFont(doc, 'bold')
  doc.setFontSize(fontSize)
  doc.text(text, x, y)
  return y + fontSize + 8
}

function addAppleSignatureSection(doc: jsPDF, y: number, fullName: string): number {
  // Add generous spacing before signature section
  y += 24
  
  // Signature line with dotted underline
  setAppleFont(doc, 'normal')
  doc.setFontSize(12)
  doc.text('Signature: ___________________________', 40, y)
  y += 20
  
  // Printed name
  doc.text(`Printed Name: ${fullName}`, 40, y)
  y += 20
  
  // Date
  const today = new Date().toLocaleDateString()
  doc.text(`Date: ${today}`, 40, y)
  y += 24
  
  return y
}

function addAppleFooter(doc: jsPDF) {
  const pageCount = doc.getNumberOfPages()
  doc.setPage(pageCount)
  
  const pageWidth = doc.internal.pageSize.getWidth()
  const y = 270
  
  setAppleFont(doc, 'normal')
  doc.setFontSize(9)
  doc.setTextColor(120)
  doc.text('Generated by Start With Genie · Your personal LLC assistant', pageWidth / 2, y, { align: 'center' })
  doc.setTextColor(30)
}

function addAppleDisclaimer(doc: jsPDF) {
  const pageCount = doc.getNumberOfPages()
  doc.setPage(pageCount)
  
  const pageWidth = doc.internal.pageSize.getWidth()
  const y = 260
  
  setAppleFont(doc, 'normal')
  doc.setFontSize(10)
  doc.setTextColor(120)
  doc.text('This document was generated as a helpful reference by Start With Genie. It is not a substitute for legal advice.', pageWidth / 2, y, { maxWidth: pageWidth - 80, align: 'center' })
  doc.setTextColor(30)
}

export async function generateLLCFilingInstructions(data: DocumentData & { managerType?: string }): Promise<string> {
  const doc = new jsPDF()
  const today = new Date().toLocaleDateString()
  const managerType = data.managerType || 'Member-managed'
  
  // Get state info
  const normalizedState = (data.state || '').trim()
  let stateInfo: any = {}
  try {
    const excelLookup = getStateLLCFilingInfoFromExcel()
    stateInfo = excelLookup[normalizedState] || stateLLCInfo[normalizedState] || {}
  } catch (e) {
    stateInfo = stateLLCInfo[normalizedState] || {}
  }
  
  const filingFee = stateInfo.fee ? (typeof stateInfo.fee === 'string' ? stateInfo.fee : `$${stateInfo.fee}`) : 'Unavailable - please check your state\'s website'
  const filingTime = stateInfo.time || 'Unavailable - please check your state\'s website'
  const filingUrl = stateInfo.url || 'Unavailable - please check your state\'s website'

  // Apple-level layout with generous spacing
  let y = 40
  
  // Title
  y = addAppleHeading(doc, `LLC Filing Instructions for ${data.businessName}`, 40, y, 22)
  
  // Subtitle
  setAppleFont(doc, 'normal')
  doc.setFontSize(14)
  doc.text(`Prepared for ${data.fullName} | Forming in ${data.state}`, 40, y)
  y += 8
  doc.text('Start With Genie – Your personal LLC assistant', 40, y)
  y += 8
  doc.text(`Effective Date: ${today}`, 40, y)
  y += 24

  // Section 1
  y = addAppleHeading(doc, '1. Why This Step Matters', 40, y)
  y = addAppleText(doc, 'Filing your Articles of Organization is what officially creates your LLC with the state. Once approved, your business becomes legally recognized and ready to operate.', 40, y, { spacing: 8 })
  y += 16

  // Section 2
  y = addAppleHeading(doc, '2. What You\'ll Need', 40, y)
  y = addAppleText(doc, `Business name: ${data.businessName} (your official name must include "LLC," "L.L.C.," or "Limited Liability Company")
Owner name(s): ${data.fullName}
Business address
Address Tip: You can usually use your home address, but it must be a physical location — no PO Boxes. If you want privacy, a virtual office address may be an option.

Registered Agent (you or someone else in ${data.state})
What's a Registered Agent? This is the person or business responsible for receiving legal documents on behalf of your LLC. You can be your own agent if you're a ${data.state} resident with a physical address.

Management structure: ${managerType}
Filing website login (some states require creating an account)`, 40, y, { spacing: 8 })
  y += 16

  // Section 3
  y = addAppleHeading(doc, `3. Filing Details for ${data.state}`, 40, y)
  y = addAppleText(doc, `Here's what you need to know to file your LLC:\nFiling Fee: ${filingFee}\nProcessing Time: ${filingTime}\nWhere to File: ${filingUrl}\n(This is the official Secretary of State or business portal for ${data.state})`, 40, y, { spacing: 8 })
  y += 16

  // Section 4
  y = addAppleHeading(doc, '4. Step-by-Step Instructions', 40, y)
  y = addAppleText(doc, `Go to the link above and create an account (if required)

Select "Form a New LLC" or "Articles of Organization"

Enter your business and owner information:
- For Business Name, enter "${data.businessName}"
- Under Principal Office Address, use your business address
- For Organizers, list your name and title (e.g., "${data.fullName}, Member")
- For Management Type, choose "${managerType}"

Add your Registered Agent information

Pay the filing fee online

Submit the application and wait for approval`, 40, y, { spacing: 8 })
  y += 16

  // Section 5
  y = addAppleHeading(doc, '5. After You File', 40, y)
  y = addAppleText(doc, 'Once approved, you\'ll receive a confirmation document or certificate from the state. Save this — you\'ll need it for your EIN, bank account, and taxes.\n\nNext step: Apply for your EIN and sign your Operating Agreement.', 40, y, { spacing: 8 })
  
  // Footer and disclaimer (no signature section)
  addAppleDisclaimer(doc)
  addAppleFooter(doc)
  await addGenieWatermark(doc)
  
  const pdfBlob = doc.output('blob')
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('User not authenticated')
  
  const fileName = `LLC-Filing-Instructions-${data.businessName.replace(/[^a-zA-Z0-9]/g, '-')}.pdf`
  return await uploadPDFToSupabase(pdfBlob, fileName, user.id)
}

export async function generateEINGuide(data: DocumentData & { einStatus?: string, llcType?: string }): Promise<string> {
  const doc = new jsPDF()
  const today = new Date().toLocaleDateString()
  const einStatus = data.einStatus || 'Yes, you need an EIN.'
  const llcType = data.llcType || 'LLC'

  let y = 40
  
  // Title
  y = addAppleHeading(doc, `EIN Instructions for ${data.businessName}`, 40, y, 22)
  
  // Subtitle
  setAppleFont(doc, 'normal')
  doc.setFontSize(14)
  doc.text(`Prepared for ${data.fullName} | Formed in ${data.state}`, 40, y)
  y += 8
  doc.text('Start With Genie – Your personal LLC assistant', 40, y)
  y += 8
  doc.text(`Effective Date: ${today}`, 40, y)
  y += 24

  // Section 1
  y = addAppleHeading(doc, '1. What Is an EIN and Why It Matters', 40, y)
  y = addAppleText(doc, `An EIN (Employer Identification Number) is a unique ID issued by the IRS.\nIt works like a Social Security Number for your business, and it's required for:\n\n- Opening a business bank account\n- Filing taxes\n- Hiring employees\n- Applying for business credit\n\nEven if you're a single-member LLC, most banks and services will still require an EIN.`, 40, y, { spacing: 8 })
  y += 16

  // Section 2
  y = addAppleHeading(doc, '2. Who Needs an EIN', 40, y)
  y = addAppleText(doc, `Based on your answers: ${einStatus}\n\nMost LLCs need an EIN. Even if you don't plan to hire employees, you'll likely need one to:\n\n- Open a business bank account\n- File federal or state taxes\n- Apply for licenses, loans, or payment processors\n\nGetting an EIN is completely free and only takes a few minutes online.`, 40, y, { spacing: 8 })
  y += 16

  // Section 3
  y = addAppleHeading(doc, '3. How to Apply for an EIN Online', 40, y)
  y = addAppleText(doc, `The IRS provides a free online application for LLCs.\n\nWhere to apply:\nhttps://irs.gov/ein\n\nWhen:\nMonday–Friday, 7:00 AM – 10:00 PM EST\n\nWhat you'll need:\n- Your name: ${data.fullName}\n- Your business name: ${data.businessName}\n- Business address\n- Business structure: ${llcType}\n- Confirmation that you are the owner\n\nWhat to expect:\nThe application takes about 10 minutes. Once submitted, your EIN is issued immediately.\n\nYou don't need a lawyer or any advanced paperwork. Just answer honestly, and save your confirmation.`, 40, y, { spacing: 8 })
  y += 16

  // Section 4
  y = addAppleHeading(doc, '4. What to Do After You Get Your EIN', 40, y)
  y = addAppleText(doc, `Once you receive your EIN:\n\n- Download and save your confirmation letter (Form CP 575)\n- Use it to open your business bank account\n- You'll need it for taxes, payroll setup, and applying for credit\n- Come back to your Genie Dashboard to download your Operating Agreement`, 40, y, { spacing: 8 })
  y += 16

  // Section 5
  y = addAppleHeading(doc, '5. Alternate Filing Options (Mail or Fax)', 40, y)
  y = addAppleText(doc, `If you don't have a Social Security Number or can't use the online application:\n\n1. Download IRS Form SS-4:\n   https://www.irs.gov/forms-pubs/about-form-ss-4\n2. Complete the form using your LLC details\n   (Leave the SSN field blank if you're a non-U.S. resident)\n3. Submit the form to the IRS by:\n   - Fax: 855-641-6935\n   - Mail:\n     Internal Revenue Service\n     Attn: EIN Operation\n     Cincinnati, OH 45999\n\nThis method typically takes 2–4 weeks.`, 40, y, { spacing: 8 })
  
  // Footer and disclaimer (no signature section)
  addAppleDisclaimer(doc)
  addAppleFooter(doc)
  await addGenieWatermark(doc)
  
  const pdfBlob = doc.output('blob')
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('User not authenticated')
  
  const fileName = `EIN-Guide-${data.businessName.replace(/[^a-zA-Z0-9]/g, '-')}.pdf`
  return await uploadPDFToSupabase(pdfBlob, fileName, user.id)
}

export async function generateOperatingAgreement(data: DocumentData & {
  llcType?: string,
  managerType?: string,
  principalAddress?: string,
  memberList?: string,
  contributionSummary?: string,
  votingRules?: string,
  optionalAdditionalMembers?: string
}): Promise<string> {
  const doc = new jsPDF()
  const today = new Date().toLocaleDateString()
  const llcType = data.llcType || 'Single-Member LLC'
  const managerType = data.managerType || 'Member-managed'
  const principalAddress = data.principalAddress || '[Not specified]'
  const contributionSummary = data.contributionSummary || '[Not specified]'

  let y = 40
  
  // Title
  y = addAppleHeading(doc, `Operating Agreement for ${data.businessName}`, 40, y, 22)
  
  // Subtitle
  setAppleFont(doc, 'normal')
  doc.setFontSize(14)
  doc.text(`Prepared for ${data.fullName} | Formed in ${data.state}`, 40, y)
  y += 8
  doc.text('Start With Genie – Your personal LLC assistant', 40, y)
  y += 8
  doc.text(`Effective Date: ${today}`, 40, y)
  y += 24

  // Section 1
  y = addAppleHeading(doc, '1. Introduction', 40, y)
  y = addAppleText(doc, `This Operating Agreement ("Agreement") is made effective as of the date above by and between ${data.fullName} (the "Member") of ${data.businessName}, a limited liability company formed under the laws of the State of ${data.state}.`, 40, y, { spacing: 8 })
  y += 16

  // Section 2
  y = addAppleHeading(doc, '2. Company Overview', 40, y)
  y = addAppleText(doc, `Business Name: ${data.businessName}\nState of Formation: ${data.state}\nEffective Date: ${today}\nEntity Type: Single-Member LLC\nManaged By: ${managerType}\nPrincipal Address: ${principalAddress}`, 40, y, { spacing: 8 })
  y += 16

  // Section 3
  y = addAppleHeading(doc, '3. Purpose of the LLC', 40, y)
  y = addAppleText(doc, `The purpose of the LLC is to engage in any lawful business activity permitted under the laws of ${data.state}. The Member may modify the purpose as needed.`, 40, y, { spacing: 8 })
  y += 16

  // Section 4
  y = addAppleHeading(doc, '4. Ownership', 40, y)
  y = addAppleText(doc, `Member: ${data.fullName}\n\nThis is a Single-Member LLC, owned and operated by ${data.fullName}.\n\nThe Member owns 100% of the LLC.`, 40, y, { spacing: 8 })
  y += 16

  // Section 5
  y = addAppleHeading(doc, '5. Capital Contributions', 40, y)
  y = addAppleText(doc, `Initial contribution from Member: ${contributionSummary}\n\nNo additional contributions are required unless agreed in writing by the Member.`, 40, y, { spacing: 8 })
  y += 16

  // Section 6
  y = addAppleHeading(doc, '6. Profit and Loss Allocation', 40, y)
  y = addAppleText(doc, 'All profits and losses will be allocated to the Member. Distributions will be made at the discretion of the Member.', 40, y, { spacing: 8 })
  y += 16

  // Section 7
  y = addAppleHeading(doc, '7. Management and Voting', 40, y)
  y = addAppleText(doc, `The LLC is ${managerType}. Major decisions (such as dissolving the LLC) are made by the Member.`, 40, y, { spacing: 8 })
  y += 16

  // Section 8
  y = addAppleHeading(doc, '8. Liability Protection', 40, y)
  y = addAppleText(doc, 'The Member is not personally liable for the debts or obligations of the LLC. The LLC will indemnify the Member to the extent permitted by law.', 40, y, { spacing: 8 })
  y += 16

  // Section 9
  y = addAppleHeading(doc, '9. Ownership Changes', 40, y)
  y = addAppleText(doc, 'The Member may not transfer ownership without written consent from the Member, unless required by law.', 40, y, { spacing: 8 })
  y += 16

  // Section 10
  y = addAppleHeading(doc, '10. Dissolution', 40, y)
  y = addAppleText(doc, 'The LLC may be dissolved upon: (1) a written decision by the Member, or (2) completion of its business purpose. Upon dissolution, assets will be distributed in this order: 1. Creditors 2. Taxes 3. The Member.', 40, y, { spacing: 8 })
  y += 16

  // Section 11
  y = addAppleHeading(doc, '11. Governing Law', 40, y)
  y = addAppleText(doc, `This Agreement is governed by the laws of the State of ${data.state}.`, 40, y, { spacing: 8 })
  
  // Signature section
  y = addAppleSignatureSection(doc, y, data.fullName)
  
  // Footer and disclaimer
  addAppleDisclaimer(doc)
  addAppleFooter(doc)
  await addGenieWatermark(doc)
  
  const pdfBlob = doc.output('blob')
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('User not authenticated')
  
  const fileName = `Operating-Agreement-${data.businessName.replace(/[^a-zA-Z0-9]/g, '-')}.pdf`
  return await uploadPDFToSupabase(pdfBlob, fileName, user.id)
}
// Helper to add watermark to all pages
async function addGenieWatermark(doc: jsPDF) {
  const response = await fetch('/genie-preview.png')
  const blob = await response.blob()
  const reader = new FileReader()
  return new Promise<void>((resolve) => {
    reader.onloadend = function () {
      const imgData = reader.result as string
      const pageCount = doc.getNumberOfPages()
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i)
        // Set opacity if supported
        if (typeof doc.setGState === 'function' && typeof doc.GState === 'function') {
          doc.setGState(doc.GState({ opacity: 0.2 }))
        }
        const pageWidth = doc.internal.pageSize.getWidth()
        const pageHeight = doc.internal.pageSize.getHeight()
        const imgWidth = 40
        const imgHeight = 40
        doc.addImage(imgData, 'PNG', pageWidth - imgWidth - 10, pageHeight - imgHeight - 10, imgWidth, imgHeight)
        if (typeof doc.setGState === 'function') {
          if (typeof doc.GState === 'function') {
            doc.setGState(doc.GState({ opacity: 1 })) // Reset to full opacity
          }
        }
      }
      resolve()
    }
    reader.readAsDataURL(blob)
  })
} 
 
 
 
