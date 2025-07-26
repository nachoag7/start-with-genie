'use client'

import React, { useState, useEffect } from 'react'
import EINGuidePopup from '../../components/EINGuidePopup'

export default function ForcePopupPage() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    // Force popup to show immediately
    setShowPopup(true)
  }, [])

  const closePopup = () => {
    setShowPopup(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Force Popup Test</h1>
        <p className="text-gray-600 mb-6">
          This page forces the popup to show immediately for testing.
        </p>
        
        <div className="space-y-4">
          <div className="text-sm text-gray-500">
            <strong>Popup state:</strong> {showPopup ? 'OPEN' : 'CLOSED'}
          </div>
          
          <button
            onClick={() => setShowPopup(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Show Popup Again
          </button>
        </div>
      </div>

      {/* EIN Guide Popup */}
      <EINGuidePopup 
        isOpen={showPopup} 
        onClose={closePopup} 
        sourcePage="force-test" 
      />
    </div>
  )
} 