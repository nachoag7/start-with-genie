'use client'

import React, { useState, useEffect } from 'react'
import EINGuidePopup from '../../components/EINGuidePopup'
import { useEINPopup } from '../../hooks/useEINPopup'

export default function DebugPopupPage() {
  const { showPopup, closePopup } = useEINPopup()
  const [localStorageValue, setLocalStorageValue] = useState<string | null>(null)
  const [currentPath, setCurrentPath] = useState<string>('')

  useEffect(() => {
    setLocalStorageValue(localStorage.getItem('einPopupShown'))
    setCurrentPath(window.location.pathname)
  }, [])

  const resetPopup = () => {
    localStorage.removeItem('einPopupShown')
    setLocalStorageValue(null)
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Popup Debug</h1>
        
        <div className="space-y-4 text-sm">
          <div>
            <strong>Current path:</strong> {currentPath}
          </div>
          
          <div>
            <strong>Popup state:</strong> {showPopup ? 'OPEN' : 'CLOSED'}
          </div>
          
          <div>
            <strong>localStorage einPopupShown:</strong> {localStorageValue || 'null'}
          </div>
          
          <div>
            <strong>Window width:</strong> {typeof window !== 'undefined' ? window.innerWidth : 'N/A'}
          </div>
          
          <div>
            <strong>Is mobile:</strong> {typeof window !== 'undefined' ? (window.innerWidth <= 768 ? 'Yes' : 'No') : 'N/A'}
          </div>
        </div>
        
        <div className="mt-6 space-y-2">
          <button
            onClick={resetPopup}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Reset Popup (Clear localStorage)
          </button>
          
          <button
            onClick={() => {
              localStorage.setItem('einPopupShown', 'true')
              setLocalStorageValue('true')
            }}
            className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            Set Popup as Shown
          </button>
        </div>
      </div>

      {/* EIN Guide Popup */}
      <EINGuidePopup 
        isOpen={showPopup} 
        onClose={closePopup} 
        sourcePage="debug" 
      />
    </div>
  )
} 