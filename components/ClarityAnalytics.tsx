"use client";

import { useEffect } from "react";

// Extend Window interface to include clarity property
declare global {
  interface Window {
    clarity?: any;
  }
}

export default function ClarityAnalytics() {
  useEffect(() => {
    if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
      const loadClarity = () => {
        if (window.clarity) return; // prevent duplicate
        const script = document.createElement("script");
        script.src = "https://www.clarity.ms/tag/skr02qq71k";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      };

      if (document.readyState === "complete") {
        loadClarity(); // if already ready
      } else {
        window.addEventListener("load", loadClarity); // wait for full load
      }
    }
  }, []);

  return null; // This component doesn't render anything
} 