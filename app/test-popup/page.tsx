'use client'

import React from 'react'
import EINGuidePopup from '../../components/EINGuidePopup'
import { useEINPopup } from '../../hooks/useEINPopup'

export default function TestPopupPage() {
  const { showPopup, closePopup } = useEINPopup()

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">EIN Popup Test</h1>
        <p className="text-gray-600 mb-6">
          This page tests the EIN popup functionality. The popup should appear after 1 second.
        </p>
        
        <div className="space-y-4">
          <div className="text-sm text-gray-500">
            <strong>Current popup state:</strong> {showPopup ? 'OPEN' : 'CLOSED'}
          </div>
          
          <button
            onClick={() => {
              localStorage.removeItem('einPopupShown')
              window.location.reload()
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Reset Popup (Clear localStorage)
          </button>
        </div>
      </div>

      {/* EIN Guide Popup */}
      <EINGuidePopup 
        isOpen={showPopup} 
        onClose={closePopup} 
        sourcePage="test" 
      />
    </div>
  )
} 