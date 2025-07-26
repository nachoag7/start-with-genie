'use client'

import React, { useState, useEffect } from 'react'
import EINGuidePopup from '../../components/EINGuidePopup'
import { useEINPopup } from '../../hooks/useEINPopup'

export default function TestPopupPage() {
  const { showPopup, closePopup, markEmailSubmitted } = useEINPopup()
  const [forceShow, setForceShow] = useState(false)

  // Force show popup after 2 seconds for testing
  useEffect(() => {
    const timer = setTimeout(() => {
      setForceShow(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">EIN Popup Test</h1>
        <p className="text-gray-600 mb-6">
          This page tests the EIN popup functionality. The popup should appear after 2 seconds.
        </p>
        
        <div className="space-y-4">
          <div className="text-sm text-gray-500">
            <strong>Current popup state:</strong> {showPopup || forceShow ? 'OPEN' : 'CLOSED'}
          </div>
          
          <button
            onClick={() => {
              localStorage.removeItem('einGuideEmailSubmitted')
              sessionStorage.removeItem('einPopupShown')
              window.location.reload()
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Reset Popup (Clear all storage)
          </button>

          <button
            onClick={() => setForceShow(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Force Show Popup Now
          </button>
        </div>
      </div>

      {/* EIN Guide Popup */}
      <EINGuidePopup 
        isOpen={showPopup || forceShow} 
        onClose={() => {
          closePopup()
          setForceShow(false)
        }} 
        sourcePage="test"
        markEmailSubmitted={markEmailSubmitted}
      />
    </div>
  )
} 