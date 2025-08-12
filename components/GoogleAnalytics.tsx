"use client";

import { useEffect } from "react";

// Extend Window interface to include gtag property
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export default function GoogleAnalytics() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Load Google Analytics script
      const loadGoogleAnalytics = () => {
        if (window.gtag) return; // prevent duplicate
        
        // Create and append the gtag script
        const script = document.createElement("script");
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-RVEM4FWEJ3";
        script.async = true;
        document.head.appendChild(script);

        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        window.gtag = function() {
          window.dataLayer!.push(arguments);
        };
        window.gtag('js', new Date());
        window.gtag('config', 'G-RVEM4FWEJ3');
      };

      if (document.readyState === "complete") {
        loadGoogleAnalytics(); // if already ready
      } else {
        window.addEventListener("load", loadGoogleAnalytics); // wait for full load
      }
    }
  }, []);

  return null; // This component doesn't render anything
} 