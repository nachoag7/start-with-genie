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
      console.log("GoogleAnalytics component mounted");
      
      // Load Google Analytics script
      const loadGoogleAnalytics = () => {
        if (window.gtag) {
          console.log("Google Analytics already loaded");
          return; // prevent duplicate
        }
        
        console.log("Loading Google Analytics...");
        
        // Initialize dataLayer first
        window.dataLayer = window.dataLayer || [];
        
        // Create and append the gtag script
        const script = document.createElement("script");
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-RVEM4FWEJ3";
        script.async = true;
        
        // Wait for script to load before initializing gtag
        script.onload = () => {
          console.log("Google Analytics script loaded");
          window.gtag = function() {
            window.dataLayer!.push(arguments);
          };
          window.gtag('js', new Date());
          window.gtag('config', 'G-RVEM4FWEJ3');
          console.log("Google Analytics initialized with ID: G-RVEM4FWEJ3");
        };
        
        script.onerror = () => {
          console.error("Failed to load Google Analytics script");
        };
        
        document.head.appendChild(script);
      };

      // Load immediately if possible
      loadGoogleAnalytics();
    }
  }, []);

  return null; // This component doesn't render anything
} 