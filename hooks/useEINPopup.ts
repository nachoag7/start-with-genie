import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useEINPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log('EIN Popup Hook: Initializing...');
    
    // For testing - show popup immediately after 1 second (reduced from 3)
    const testTimeout = setTimeout(() => {
      console.log('EIN Popup Hook: Test timeout triggered');
      setShowPopup(true);
      localStorage.setItem('einPopupShown', 'true');
    }, 1000); // Reduced from 3000ms to 1000ms for faster testing

    // TEMPORARILY DISABLE localStorage check for testing
    // const popupShown = localStorage.getItem('einPopupShown');
    // console.log('EIN Popup Hook: Popup shown before?', popupShown);
    // if (popupShown) {
    //   console.log('EIN Popup Hook: Popup already shown, clearing timeout');
    //   clearTimeout(testTimeout);
    //   return;
    // }

    // Don't show on restricted pages
    const pathname = window.location.pathname;
    const restrictedPages = ['/dashboard', '/checkout'];
    if (restrictedPages.some(page => pathname.startsWith(page))) {
      console.log('EIN Popup Hook: On restricted page, clearing timeout');
      clearTimeout(testTimeout);
      return;
    }

    // Check if user is logged in (you can modify this logic based on your auth system)
    const isLoggedIn = false; // Replace with your auth check
    if (isLoggedIn) {
      console.log('EIN Popup Hook: User logged in, clearing timeout');
      clearTimeout(testTimeout);
      return;
    }

    console.log('EIN Popup Hook: Setting up popup triggers...');

    let timeoutId: NodeJS.Timeout;
    let scrollTimeoutId: NodeJS.Timeout;

    const handleExitIntent = (e: MouseEvent) => {
      if (e.clientY <= 50) {
        console.log('EIN Popup Hook: Exit intent triggered');
        setShowPopup(true);
        localStorage.setItem('einPopupShown', 'true');
        clearTimeout(testTimeout);
      }
    };

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent >= 60) {
        console.log('EIN Popup Hook: Scroll trigger activated');
        setShowPopup(true);
        localStorage.setItem('einPopupShown', 'true');
        clearTimeout(testTimeout);
      }
    };

    const handleMobileTimer = () => {
      timeoutId = setTimeout(() => {
        console.log('EIN Popup Hook: Mobile timer triggered');
        setShowPopup(true);
        localStorage.setItem('einPopupShown', 'true');
        clearTimeout(testTimeout);
      }, 25000); // 25 seconds
    };

    // Desktop: Exit intent
    if (window.innerWidth > 768) {
      console.log('EIN Popup Hook: Setting up desktop exit intent');
      document.addEventListener('mouseleave', handleExitIntent);
    } else {
      // Mobile: Timer and scroll
      console.log('EIN Popup Hook: Setting up mobile triggers');
      handleMobileTimer();
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      document.removeEventListener('mouseleave', handleExitIntent);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
      clearTimeout(scrollTimeoutId);
      clearTimeout(testTimeout);
    };
  }, []);

  const closePopup = () => {
    console.log('EIN Popup Hook: Closing popup');
    setShowPopup(false);
    // Mark as shown for this session
    localStorage.setItem('einPopupShown', 'true');
  };

  return {
    showPopup,
    closePopup,
  };
} 