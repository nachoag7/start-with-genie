import React from 'react';

interface User {
  id: string;
  full_name: string;
  business_name: string;
  email: string;
  state: string;
  status: string;
  business_address: string;
  is_solo_owner: string;
  partner_name?: string;
  ownership_primary?: string;
  ownership_partner?: string;
}

interface DocumentContentProps {
  type: 'llc-instructions' | 'ein-guide' | 'operating-agreement';
  user: User;
  stateInfo?: any;
  isPDF?: boolean;
}

// Shared styles for consistent document formatting
const documentStyles = {
  container: { fontFamily: 'Arial, sans-serif', lineHeight: '1.6' },
  heading: { fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' },
  subheading: { fontSize: '16px', color: '#374151', marginBottom: '8px' },
  subtitle: { fontSize: '14px', color: '#6b7280', marginBottom: '8px' },
  sectionHeading: { fontSize: '18px', fontWeight: '600', marginTop: '24px', marginBottom: '12px', color: '#1f2937' },
  paragraph: { fontSize: '14px', marginBottom: '16px', color: '#374151' },
  list: { fontSize: '14px', marginBottom: '16px', color: '#374151', paddingLeft: '24px' },
  listItem: { marginBottom: '4px' },
  orderedList: { fontSize: '14px', marginBottom: '16px', color: '#374151', paddingLeft: '28px', lineHeight: 1.7, textAlign: 'left' as const, maxWidth: '100%', wordBreak: 'break-word' as const, overflowWrap: 'anywhere' as const },
  orderedListItem: { marginBottom: '10px' },
  link: { color: '#2563eb', textDecoration: 'underline' }
};

export function DocumentContent({ type, user, stateInfo, isPDF = false }: DocumentContentProps) {
  const isSingleMember = user.is_solo_owner === 'yes';
  const filingFee = stateInfo?.fee ? (typeof stateInfo.fee === 'string' ? stateInfo.fee : `$${stateInfo.fee}`) : 'Unavailable – please check your state\'s website';
  const processingTime = stateInfo?.time || 'Unavailable – please check your state\'s website';
  const filingUrl = stateInfo?.url || 'Unavailable – please check your state\'s website';

  const renderLLCInstructions = () => (
    <div className="space-y-6" style={documentStyles.container}>
      <h2 className="text-2xl font-bold text-gray-900" style={documentStyles.heading}>
        Guided LLC Registration for {user.business_name}
      </h2>
      <div className="text-gray-700" style={documentStyles.subheading}>
        Prepared for {user.full_name} | Forming in {user.state}
      </div>
      <div className="text-gray-500 text-sm mb-2" style={documentStyles.subtitle}>
        Genie LLC
      </div>
      <div className="text-gray-500 text-sm mb-4" style={documentStyles.subtitle}>
        Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      </div>
      
      <h3 className="font-semibold text-lg mt-4" style={documentStyles.sectionHeading}>
        1. Why This Step Matters
      </h3>
      <p style={documentStyles.paragraph}>
        Filing your Articles of Organization is what officially creates your LLC with the state. Once approved, your business becomes legally recognized and ready to operate.
      </p>
      
      <h3 className="font-semibold text-lg mt-4" style={documentStyles.sectionHeading}>
        2. What You'll Need
      </h3>
      <ul className="list-disc ml-6" style={documentStyles.list}>
        <li style={documentStyles.listItem}>Business name: {user.business_name} (your official name must include "LLC," "L.L.C.," or "Limited Liability Company")</li>
        <li style={documentStyles.listItem}>Owner name(s): {user.full_name}</li>
        <li style={documentStyles.listItem}>Business address</li>
        <li style={documentStyles.listItem}><strong>Address Tip:</strong> You can usually use your home address, but it must be a physical location — no PO Boxes. If you want privacy, a virtual office address may be an option.</li>
        <li style={documentStyles.listItem}>Registered Agent (you or someone else in {user.state})</li>
        <li style={documentStyles.listItem}><strong>What's a Registered Agent?</strong> This is the person or business responsible for receiving legal documents on behalf of your LLC. You can be your own agent if you're a {user.state} resident with a physical address.</li>
        <li style={documentStyles.listItem}>Management structure: Member-managed</li>
        <li style={documentStyles.listItem}>Filing website login (some states require creating an account)</li>
      </ul>
      
      <h3 className="font-semibold text-lg mt-4" style={documentStyles.sectionHeading}>
        3. Filing Details for {user.state}
      </h3>
      <ul className="list-disc ml-6" style={documentStyles.list}>
        <li style={documentStyles.listItem}>Filing Fee: {filingFee}</li>
        <li style={documentStyles.listItem}>Processing Time: {processingTime}</li>
        <li style={documentStyles.listItem}>Where to File: <a href={filingUrl} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer" style={documentStyles.link}>{filingUrl}</a></li>
      </ul>
      
      <h3 className="font-semibold text-lg mt-4" style={documentStyles.sectionHeading}>
        4. Step-by-Step Instructions
      </h3>
      <ol className="list-decimal ml-6" style={documentStyles.orderedList}>
        <li style={documentStyles.orderedListItem}>Go to the link above and create an account (if required)</li>
        <li style={documentStyles.orderedListItem}>Select "Form a New LLC" or "Articles of Organization"</li>
        <li style={documentStyles.orderedListItem}>Enter your business and owner information:
          <ul className="list-disc ml-6 mt-2" style={{ paddingLeft: '20px' }}>
            <li>For <strong>Business Name</strong>, enter "{user.business_name}"</li>
            <li>Under <strong>Principal Office Address</strong>, use your business address</li>
            <li>For <strong>Organizers</strong>, list your name and title (e.g., "{user.full_name}, Member")</li>
            <li>For <strong>Management Type</strong>, choose "Member-managed"</li>
          </ul>
        </li>
        <li style={documentStyles.orderedListItem}>Add your Registered Agent information</li>
        <li style={documentStyles.orderedListItem}>Pay the filing fee online</li>
        <li style={documentStyles.orderedListItem}>Submit the application and wait for approval</li>
      </ol>
      
      <h3 className="font-semibold text-lg mt-4" style={documentStyles.sectionHeading}>
        5. After You File
      </h3>
      <p style={documentStyles.paragraph}>
        Once approved, you'll receive a confirmation document or certificate from the state. Save this — you'll need it for your EIN, bank account, and taxes.<br/>Next step: Apply for your EIN and sign your Operating Agreement.
      </p>
    </div>
  );

  const renderEINGuide = () => (
    <div className="space-y-6" style={documentStyles.container}>
      <h2 className="text-2xl font-bold text-gray-900" style={documentStyles.heading}>
        Guided EIN Application for {user.business_name}
      </h2>
      <div className="text-gray-700" style={documentStyles.subheading}>
        Prepared for {user.full_name} | Formed in {user.state}
      </div>
      <div className="text-gray-500 text-sm mb-2" style={documentStyles.subtitle}>
        Genie LLC
      </div>
      <div className="text-gray-500 text-sm mb-4" style={documentStyles.subtitle}>
        Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      </div>
      
      <h3 className="font-semibold text-lg mt-4" style={documentStyles.sectionHeading}>
        1. What Is an EIN?
      </h3>
      <p style={documentStyles.paragraph}>
        An EIN (Employer Identification Number) is a unique ID issued by the IRS. Think of it as your business's Social Security Number — it's required to:<br/>- Open a business bank account<br/>- File taxes<br/>- Hire employees<br/>- Apply for business credit<br/>Even if you're the only owner, most banks and services will ask for your EIN.
      </p>
      
      <h3 className="font-semibold text-lg mt-4" style={documentStyles.sectionHeading}>
        2. Do You Need One?
      </h3>
      <p style={documentStyles.paragraph}>
        Most LLCs do need an EIN. Even if you're a single-member LLC with no employees, you'll likely need it for banking, taxes, or applying for licenses.<br/>Good news: getting an EIN is completely free and only takes a few minutes.
      </p>
      
      <h3 className="font-semibold text-lg mt-4" style={documentStyles.sectionHeading}>
        3. When Can You Apply?
      </h3>
      <p style={documentStyles.paragraph}>
        You can only apply for an EIN after your LLC has been officially approved by your state.<br/><br/>Once the Secretary of State confirms your LLC, you can complete the EIN application the same day.<br/><br/>This ensures the IRS links your EIN to your legal business name correctly.
      </p>
      
      <h3 className="font-semibold text-lg mt-4" style={documentStyles.sectionHeading}>
        4. How to Apply Online (Recommended)
      </h3>
      <ul className="list-disc ml-6" style={documentStyles.list}>
        <li style={documentStyles.listItem}>The IRS provides a free online application for EINs.</li>
        <li style={documentStyles.listItem}>Where to apply: <a href="https://irs.gov/ein" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer" style={documentStyles.link}>https://irs.gov/ein</a></li>
        <li style={documentStyles.listItem}>When: Monday through Friday, 7:00 AM – 10:00 PM EST</li>
        <li style={documentStyles.listItem}>What you'll need: your name ({user.full_name}), your business name ({user.business_name}), business address, business structure: LLC, whether you are the owner</li>
        <li style={documentStyles.listItem}>The application takes about 10 minutes. You'll receive your EIN immediately after submission.</li>
      </ul>
      
      <h3 className="font-semibold text-lg mt-4" style={documentStyles.sectionHeading}>
        5. After You Apply
      </h3>
      <ul className="list-disc ml-6" style={documentStyles.list}>
        <li style={documentStyles.listItem}>Save your EIN confirmation - you'll need it for banking and taxes</li>
        <li style={documentStyles.listItem}>Your EIN is immediately active and ready to use</li>
        <li style={documentStyles.listItem}>Next step: Sign your Operating Agreement and open a business bank account</li>
      </ul>
    </div>
  );

  const renderOperatingAgreement = () => (
    <div className="space-y-6" style={{ ...documentStyles.container, position: 'relative', minHeight: isPDF ? '1100px' : undefined }}>
      <h2 className="text-2xl font-bold text-gray-900" style={documentStyles.heading}>
        Operating Agreement for {user.business_name}
      </h2>
      <div className="text-gray-700" style={{ fontSize: '16px', marginBottom: '16px' }}>
        <strong>Company Overview</strong><br />
        <b>Business Name:</b> {user.business_name}<br />
        <b>Principal Address:</b> {user.business_address || '[Not specified]'}<br />
        <b>State:</b> {user.state}
      </div>
      
      <h3 className="font-semibold text-lg mt-4" style={documentStyles.sectionHeading}>
        1. Introduction
      </h3>
      <p style={documentStyles.paragraph}>
        This Operating Agreement ("Agreement") is made effective as of the date above by and among the Member{isSingleMember ? '' : 's'} of {user.business_name}, a limited liability company formed under the laws of the State of {user.state}.
      </p>
      
      <h3 className="font-semibold text-lg mt-4" style={documentStyles.sectionHeading}>
        2. Company Overview
      </h3>
      <ul className="list-disc ml-6" style={documentStyles.list}>
        <li style={documentStyles.listItem}>Business Name: {user.business_name}</li>
        <li style={documentStyles.listItem}>State of Formation: {user.state}</li>
        <li style={documentStyles.listItem}>Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</li>
        <li style={documentStyles.listItem}>Entity Type: {isSingleMember ? 'Single-Member LLC' : 'Multi-Member LLC'}</li>
        <li style={documentStyles.listItem}>Managed By: Member-managed</li>
        <li style={documentStyles.listItem}>Principal Address: {user.business_address || '[Not specified]'}</li>
      </ul>
      
      <h3 className="font-semibold text-lg mt-4" style={documentStyles.sectionHeading}>
        3. Purpose of the LLC
      </h3>
      <p style={documentStyles.paragraph}>
        The purpose of the LLC is to engage in any lawful business activity permitted under the laws of {user.state}. The Member{isSingleMember ? '' : 's'} may modify the purpose as needed.
      </p>
      
      <h3 className="font-semibold text-lg mt-4" style={documentStyles.sectionHeading}>
        4. Ownership
      </h3>
      <ul className="list-disc ml-6" style={documentStyles.list}>
        <li style={documentStyles.listItem}>Member{isSingleMember ? '' : 's'}: {isSingleMember ? user.full_name : `${user.full_name} and ${user.partner_name || '[Partner Name]'}`}</li>
        {isSingleMember ? (
          <li style={documentStyles.listItem}>This is a Single-Member LLC, owned and operated by {user.full_name}.</li>
        ) : (
          <>
            <li style={documentStyles.listItem}>{user.full_name}: {user.ownership_primary || '50'}% ownership</li>
            <li style={documentStyles.listItem}>{user.partner_name || '[Partner Name]'}: {user.ownership_partner || '50'}% ownership</li>
            <li style={documentStyles.listItem}>This is a Multi-Member LLC, owned and operated by both members.</li>
          </>
        )}
        <li style={documentStyles.listItem}>Each Member owns an equal share of the LLC unless otherwise agreed in writing.</li>
      </ul>
      
      <h3 className="font-semibold text-lg mt-4" style={documentStyles.sectionHeading}>
        5. Capital Contributions
      </h3>
      <ul className="list-disc ml-6" style={documentStyles.list}>
        <li style={documentStyles.listItem}>Initial contributions from Member{isSingleMember ? '' : 's'}: [Not specified]</li>
        <li style={documentStyles.listItem}>No additional contributions are required unless agreed in writing by all Member{isSingleMember ? '' : 's'}.</li>
      </ul>
      
      <div style={{
        pageBreakBefore: isPDF ? 'always' : undefined,
        breakBefore: isPDF ? 'page' : undefined,
        paddingTop: isPDF ? 32 : undefined,
        marginBottom: isPDF ? 24 : '16px',
        background: 'none',
      }}>
        <h3 className="font-semibold text-lg mt-4" style={{
          ...documentStyles.sectionHeading,
          lineHeight: 1.3,
          clear: 'both',
          display: 'block',
        }}>
          6. Profit and Loss Allocation
        </h3>
        <p style={{
          fontSize: '14px',
          marginBottom: 0,
          color: '#374151',
          lineHeight: 1.7,
          marginTop: 0,
          textAlign: 'left',
          display: 'block',
        }}>
          All profits and losses will be distributed in proportion to ownership, unless otherwise agreed upon in writing. Distributions will be made at the discretion of the Member{isSingleMember ? '' : 's'}.
        </p>
      </div>
      
      <h3 className="font-semibold text-lg mt-4" style={documentStyles.sectionHeading}>
        7. Management and Voting
      </h3>
      <p style={documentStyles.paragraph}>
        The LLC is Member-managed. Major decisions (such as admitting new members or dissolving the LLC) require approval by all Member{isSingleMember ? '' : 's'}.
        {isSingleMember ? '' : ' Each member\'s voting power is proportional to their ownership percentage.'}
      </p>
      
      <h3 className="font-semibold text-lg mt-4" style={documentStyles.sectionHeading}>
        8. Liability Protection
      </h3>
      <p style={documentStyles.paragraph}>
        Member{isSingleMember ? '' : 's'} are not personally liable for the debts or obligations of the LLC. The LLC will indemnify Member{isSingleMember ? '' : 's'} to the extent permitted by law.
      </p>
      
      <h3 className="font-semibold text-lg mt-4" style={documentStyles.sectionHeading}>
        9. Ownership Changes
      </h3>
      <p style={documentStyles.paragraph}>
        No Member may transfer ownership without written consent from the other Member{isSingleMember ? '' : 's'}, unless required by law.
      </p>
      
      <h3 className="font-semibold text-lg mt-4" style={documentStyles.sectionHeading}>
        10. Dissolution
      </h3>
      <p style={documentStyles.paragraph}>
        The LLC may be dissolved upon:<br/>- A majority vote by Member{isSingleMember ? '' : 's'}<br/>- Completion of its business purpose<br/>- Only one Member remaining (if multi-member)<br/>Upon dissolution, assets will be distributed in this order:<br/>1. Creditors<br/>2. Taxes<br/>3. Members based on ownership
      </p>
      
      <h3 className="font-semibold text-lg mt-4" style={documentStyles.sectionHeading}>
        11. Governing Law
      </h3>
      <p style={documentStyles.paragraph}>
        This Agreement is governed by the laws of the State of {user.state}.
      </p>
      
      {isPDF && (
        <div style={{ marginTop: '60px', marginBottom: '56px', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '40px', width: '100%' }}>
              <span style={{ fontSize: '13px', color: '#888', minWidth: 90 }}>Signature:</span>
              <span style={{ borderBottom: '1.5px solid #bbb', flex: 1, height: 0, marginRight: 24 }}></span>
              <span style={{ fontSize: '13px', color: '#888', minWidth: 40, marginLeft: 24 }}>Date:</span>
              <span style={{ borderBottom: '1.5px solid #bbb', width: 120, height: 0 }}></span>
            </div>
            <div style={{ fontSize: '13px', color: '#888', marginTop: 10, marginLeft: 0 }}>Printed Name: <span style={{ color: '#222', fontWeight: 500 }}>{user.full_name}</span></div>
          </div>
        </div>
      )}
    </div>
  );

  switch (type) {
    case 'llc-instructions':
      return renderLLCInstructions();
    case 'ein-guide':
      return renderEINGuide();
    case 'operating-agreement':
      return renderOperatingAgreement();
    default:
      return null;
  }
} 