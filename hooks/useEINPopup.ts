import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useEINPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Never show if user already submitted email
    if (typeof window !== 'undefined' && localStorage.getItem('einGuideEmailSubmitted')) {
      return;
    }
    // Only show once per session
    if (typeof window !== 'undefined' && sessionStorage.getItem('einPopupShown')) {
      return;
    }

    let timer25s: NodeJS.Timeout;
    let timer30s: NodeJS.Timeout;
    let scrollListener: any;
    let exitIntentListener: any;
    let triggered = false;

    // Helper to show and mark as shown for session
    const triggerPopup = () => {
      if (triggered) return;
      setShowPopup(true);
      sessionStorage.setItem('einPopupShown', 'true');
      triggered = true;
    };

    // Scroll trigger (70%)
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent >= 70) {
        triggerPopup();
        window.removeEventListener('scroll', handleScroll);
      }
    };

    // Exit intent (desktop only)
    const handleExitIntent = (e: MouseEvent) => {
      if (e.clientY <= 50) {
        triggerPopup();
        document.removeEventListener('mouseleave', handleExitIntent);
      }
    };

    // Main logic
    timer25s = setTimeout(() => {
      // After 25s, start listening for scroll
      window.addEventListener('scroll', handleScroll);
    }, 25000);

    // Desktop: exit intent after 30s if not already shown
    if (window.innerWidth > 768) {
      timer30s = setTimeout(() => {
        document.addEventListener('mouseleave', handleExitIntent);
      }, 30000);
    }

    // Clean up
    return () => {
      clearTimeout(timer25s);
      clearTimeout(timer30s);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleExitIntent);
    };
  }, []);

  // Close handler: mark as shown for session
  const closePopup = () => {
    setShowPopup(false);
    sessionStorage.setItem('einPopupShown', 'true');
  };

  // Call this on successful submit in the popup component
  const markEmailSubmitted = () => {
    localStorage.setItem('einGuideEmailSubmitted', 'true');
    sessionStorage.setItem('einPopupShown', 'true');
    setShowPopup(false);
  };

  return {
    showPopup,
    closePopup,
    markEmailSubmitted,
  };
} 