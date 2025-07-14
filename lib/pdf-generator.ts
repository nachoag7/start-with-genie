import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { supabase } from './supabase'
import { getStateLLCFilingInfoFromExcel } from './utils'

export interface DocumentData {
  fullName: string
  businessName: string
  state: string
  email: string
}

// State-specific LLC filing information
const stateLLCInfo = {
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

export interface StateLLCInfo {
  fee?: string | number;
  time?: string;
  url?: string;
  notes?: string;
}

async function uploadPDFToSupabase(pdfBlob: Blob, fileName: string, userId: string): Promise<string> {
  try {
    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from('documents')
      .upload(`${userId}/${fileName}`, pdfBlob, {
        contentType: 'application/pdf'
      })

    if (error) {
      console.error('Error uploading PDF:', error)
      throw error
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('documents')
      .getPublicUrl(`${userId}/${fileName}`)

    return urlData.publicUrl
  } catch (error) {
    console.error('Error in uploadPDFToSupabase:', error)
    throw error
  }
}

// Helper function to add text with automatic page breaks
function addTextWithPageBreak(doc: jsPDF, text: string, x: number, y: number, maxWidth: number = 170): number {
  const lines = doc.splitTextToSize(text, maxWidth)
  let currentY = y
  
  for (const line of lines) {
    if (currentY > 280) { // Check if we need a new page
      doc.addPage()
      currentY = 20 // Reset Y position for new page
    }
    doc.text(line, x, currentY)
    currentY += 7 // Line height
  }
  
  return currentY
}

export async function generateLLCFilingInstructions(data: DocumentData & {
  managerType?: string
}): Promise<string> {
  const doc = new jsPDF()
  const today = new Date().toLocaleDateString()
  const managerType = data.managerType || 'Member-managed'
  // Prefer Excel-based lookup if available
  let stateInfo: StateLLCInfo = {}
  try {
    const excelLookup = getStateLLCFilingInfoFromExcel()
    stateInfo = excelLookup[data.state] || {}
  } catch (e) {
    stateInfo = {}
  }
  if (!stateInfo || Object.keys(stateInfo).length === 0) {
    stateInfo = stateLLCInfo[data.state as keyof typeof stateLLCInfo] || {}
  }
  // Use spreadsheet values or fallback
  const filingFee = stateInfo.fee ? (typeof stateInfo.fee === 'string' ? stateInfo.fee : `$${stateInfo.fee}`) : 'Unavailable – please check your state’s website'
  const filingTime = stateInfo.time || 'Unavailable – please check your state’s website'
  const filingUrl = stateInfo.url || 'Unavailable – please check your state’s website'

  let y = 20
  doc.setFontSize(16)
  doc.setFont('helvetica', 'bold')
  doc.text(`LLC Filing Instructions for ${data.businessName}`, 20, y)
  y += 10
  doc.setFontSize(11)
  doc.setFont('helvetica', 'normal')
  doc.text(`Prepared for ${data.fullName} | Forming in ${data.state}`, 20, y)
  y += 7
  doc.text('Start With Genie – Your silent assistant for setup', 20, y)
  y += 7
  doc.text(`Effective Date: ${today}`, 20, y)
  y += 10

  doc.setFontSize(12)
  doc.setFont('helvetica', 'bold')
  doc.text('1. Why This Step Matters', 20, y)
  y += 7
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  y = addTextWithPageBreak(doc, 'Filing your Articles of Organization is what officially creates your LLC with the state. Once approved, your business becomes legally recognized and ready to operate.', 20, y)
  y += 7

  doc.setFont('helvetica', 'bold')
  doc.text('2. What You’ll Need', 20, y)
  y += 7
  doc.setFont('helvetica', 'normal')
  y = addTextWithPageBreak(doc, `Business name: ${data.businessName}\n\nOwner name(s): ${data.fullName}\n\nBusiness address\n\nRegistered Agent (you or someone else in ${data.state})\n\nManagement structure: ${managerType}\n\nFiling website login (some states require creating an account)`, 20, y)
  y += 7

  doc.setFont('helvetica', 'bold')
  doc.text(`3. Filing Details for ${data.state}`, 20, y)
  y += 7
  doc.setFont('helvetica', 'normal')
  y = addTextWithPageBreak(doc, `Here’s what you need to know to file your LLC:\n\nFiling Fee: ${filingFee}\n\nProcessing Time: ${filingTime}\n\nWhere to File:\n${filingUrl}\n(This is the official Secretary of State or business portal for ${data.state})`, 20, y)
  y += 10

  doc.setFont('helvetica', 'bold')
  doc.text('4. Step-by-Step Instructions', 20, y)
  y += 7
  doc.setFont('helvetica', 'normal')
  y = addTextWithPageBreak(doc, 'Go to the link above and create an account (if required)\n\nSelect “Form a New LLC” or “Articles of Organization”\n\nEnter your business and owner information\n\nAdd your Registered Agent\n\nPay the filing fee online\n\nSubmit the application and wait for approval', 20, y)
  y += 7

  doc.setFont('helvetica', 'bold')
  doc.text('5. After You File', 20, y)
  y += 7
  doc.setFont('helvetica', 'normal')
  y = addTextWithPageBreak(doc, 'Once approved, you’ll receive a confirmation document or certificate from the state. Save this — you’ll need it for your EIN, bank account, and taxes.\n\nNext step: Apply for your EIN and sign your Operating Agreement.', 20, y)
  y += 7

  // Add universal disclaimer before footer
  y = addTextWithPageBreak(doc, 'Disclaimer\n\nThis document is for informational and educational purposes only. It is not legal, tax, or financial advice.\n\nStart With Genie is not a law firm and does not provide legal services.\n\nYou should consult a qualified attorney, accountant, or advisor to ensure this document is appropriate for your specific situation.', 20, y)
  // Footer
  doc.setFontSize(8)
  doc.text('Generated by Start With Genie', 20, 280)

  const pdfBlob = doc.output('blob')

  // Get current user ID for file naming
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    throw new Error('User not authenticated')
  }

  const fileName = `LLC-Filing-Instructions-llc-filing-instructions-${Date.now()}.pdf`
  return await uploadPDFToSupabase(pdfBlob, fileName, user.id)
}

export async function generateEINGuide(data: DocumentData & {
  einStatus?: string,
  llcType?: string
}): Promise<string> {
  const doc = new jsPDF()
  const today = new Date().toLocaleDateString()
  const einStatus = data.einStatus || 'Yes, you need an EIN.'
  const llcType = data.llcType || 'LLC'

  let y = 20
  doc.setFontSize(16)
  doc.setFont('helvetica', 'bold')
  doc.text(`EIN Instructions for ${data.businessName}`, 20, y)
  y += 10
  doc.setFontSize(11)
  doc.setFont('helvetica', 'normal')
  doc.text(`Prepared for ${data.fullName} | Formed in ${data.state}`, 20, y)
  y += 7
  doc.text('Start With Genie – Your silent assistant for setup', 20, y)
  y += 7
  doc.text(`Effective Date: ${today}`, 20, y)
  y += 10

  doc.setFontSize(12)
  doc.setFont('helvetica', 'bold')
  doc.text('1. What Is an EIN?', 20, y)
  y += 7
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  y = addTextWithPageBreak(doc, `An EIN (Employer Identification Number) is a unique ID issued by the IRS.\nThink of it as your business's Social Security Number — it’s required to:\n\n- Open a business bank account\n- File taxes\n- Hire employees\n- Apply for business credit\n\nEven if you're the only owner, most banks and services will ask for your EIN.`, 20, y)
  y += 7

  doc.setFont('helvetica', 'bold')
  doc.text('2. Do You Need One?', 20, y)
  y += 7
  doc.setFont('helvetica', 'normal')
  y = addTextWithPageBreak(doc, `Based on your answers: ${einStatus}\n\nMost LLCs do need an EIN. Even if you're a single-member LLC with no employees, you'll likely need it for banking, taxes, or applying for licenses.\n\nGood news: getting an EIN is completely free and only takes a few minutes.`, 20, y)
  y += 7

  doc.setFont('helvetica', 'bold')
  doc.text('3. How to Apply Online (Recommended)', 20, y)
  y += 7
  doc.setFont('helvetica', 'normal')
  y = addTextWithPageBreak(doc, `The IRS provides a free online application for EINs.\n\nWhere to apply:\nhttps://irs.gov/ein\n\nWhen:\nMonday through Friday, 7:00 AM – 10:00 PM EST\n\nWhat you'll need:\n\nYour name: ${data.fullName}\n\nYour business name: ${data.businessName}\n\nBusiness address\n\nBusiness structure: ${llcType}\n\nWhether you are the owner\n\nWhat to expect:\nThe application takes about 10 minutes. You'll receive your EIN immediately after submission.`, 20, y)
  y += 7

  doc.setFont('helvetica', 'bold')
  doc.text('4. After You Apply', 20, y)
  y += 7
  doc.setFont('helvetica', 'normal')
  y = addTextWithPageBreak(doc, `Once you get your EIN:\n\n- Save the confirmation letter (CP 575) — this is your proof of EIN\n- You'll need it to open a business bank account, file taxes, and set up payroll\n- Come back to your Genie Dashboard to download your Operating Agreement`, 20, y)
  y += 7

  doc.setFont('helvetica', 'bold')
  doc.text('5. Alternate Filing (Mail or Fax)', 20, y)
  y += 7
  doc.setFont('helvetica', 'normal')
  y = addTextWithPageBreak(doc, `If you don’t have a Social Security Number or can’t use the online form:\n\n- Download Form SS-4\n- Fill it out and send it by mail or fax to the IRS\n\nThis method takes longer, but works for non-U.S. residents and others with special cases.`, 20, y)
  // Add universal disclaimer before footer
  y = addTextWithPageBreak(doc, 'Disclaimer\n\nThis document is for informational and educational purposes only. It is not legal, tax, or financial advice.\n\nStart With Genie is not a law firm and does not provide legal services.\n\nYou should consult a qualified attorney, accountant, or advisor to ensure this document is appropriate for your specific situation.', 20, y)
  // Footer
  doc.setFontSize(8)
  doc.text('Generated by Start With Genie', 20, 280)

  const pdfBlob = doc.output('blob')

  // Get current user ID for file naming
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    throw new Error('User not authenticated')
  }

  const fileName = `EIN-Guide-ein-guide-${Date.now()}.pdf`
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
  const memberList = data.memberList || data.fullName
  const contributionSummary = data.contributionSummary || '[Not specified]'
  const votingRules = data.votingRules || 'all Member(s)'
  const optionalAdditionalMembers = data.optionalAdditionalMembers || ''
  const isSingleMember = llcType.toLowerCase().includes('single')

  let y = 20
  doc.setFontSize(16)
  doc.setFont('helvetica', 'bold')
  doc.text(`Operating Agreement for ${data.businessName}`, 20, y)
  y += 10
  doc.setFontSize(11)
  doc.setFont('helvetica', 'normal')
  doc.text(`