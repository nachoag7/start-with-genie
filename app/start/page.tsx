'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function StartPage() {
  const router = useRouter()
  
  useEffect(() => {
    router.push('/checkout')
  }, [router])
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting to checkout...</p>
    </div>
  )
}