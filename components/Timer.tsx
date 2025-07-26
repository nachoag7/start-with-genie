'use client'

import React, { useState, useEffect } from 'react'
import { Clock } from 'lucide-react'

interface TimerProps {
  className?: string
}

export default function Timer({ className = '' }: TimerProps) {
  const [timeSpent, setTimeSpent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSpent(prev => prev + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    
    if (minutes === 0) {
      return `${remainingSeconds}s`
    }
    
    return `${minutes}m ${remainingSeconds}s`
  }

  return (
    <div className={`flex flex-col md:flex-row items-center justify-center gap-2 text-gray-500 text-sm text-center ${className}`}>
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4" />
        <span>You've spent {formatTime(timeSpent)} here</span>
      </div>
      <span className="text-xs md:text-sm">— most Genie users finish in under 15 minutes.</span>
    </div>
  )
} 