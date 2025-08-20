import Link from 'next/link'

export default function TrustBadge() {
  return (
    <div 
      style={{
        maxWidth: '400px',
        margin: '24px auto',
        padding: '16px',
        textAlign: 'center',
        backgroundColor: '#f9fafb',
        border: '1px solid #e5e7eb',
        borderRadius: '8px'
      }}
    >
      <p style={{
        fontWeight: '600',
        fontSize: '16px',
        margin: '0'
      }}>
        Covered by <Link href="/refund" className="text-blue-600 hover:text-blue-800 underline">The Genie Policy</Link>
      </p>
      <p style={{
        fontSize: '14px',
        color: '#4b5563',
        marginTop: '4px',
        marginBottom: '0'
      }}>
        If our kit doesn't save you time and money, get a full refund. It's that simple.
      </p>
    </div>
  );
} 