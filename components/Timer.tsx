'use client'

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
  className?: string;
  startTime?: number;
  updateInterval?: number;
}

export default function Timer({ 
  className = '', 
  startTime = Date.now(),
  updateInterval = 1000 
}: TimerProps) {
  const [timeSpent, setTimeSpent] = useState(0);

  // Memoize the format function to prevent recreation on every render
  const formatTime = useCallback((seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    if (minutes === 0) {
      return `${remainingSeconds}s`;
    }
    
    return `${minutes}m ${remainingSeconds}s`;
  }, []);

  // Memoize the formatted time to prevent unnecessary re-renders
  const formattedTime = useMemo(() => formatTime(timeSpent), [timeSpent, formatTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSpent(prev => {
        const newTime = Math.floor((Date.now() - startTime) / 1000);
        return newTime;
      });
    }, updateInterval);

    return () => clearInterval(interval);
  }, [startTime, updateInterval]);

  return (
    <div className={`flex flex-col md:flex-row items-center justify-center gap-2 text-gray-500 text-sm text-center ${className}`}>
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4" />
        <span>You've spent {formattedTime} here</span>
      </div>
      <span className="text-xs md:text-sm">Most Genie users finish in under 15 minutes.</span>
    </div>
  );
} 