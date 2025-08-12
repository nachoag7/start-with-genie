"use client";

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function ConditionalNavbar() {
  const pathname = usePathname();
  
  // Hide navbar on dashboard, checkout, onboarding, and SEO/blog pages
  const hideNavbar = 
    pathname === '/dashboard' || 
    pathname === '/checkout' || 
    pathname === '/onboarding' ||
    pathname === '/onboarding-welcome' ||
    pathname === '/success' ||
    pathname === '/reset-password' ||
    pathname === '/loading' ||
    // SEO/Blog pages - hide navbar on pages with hyphens (most SEO pages)
    // But allow navbar on specific homepage-like pages
    (pathname.includes('-') && pathname !== '/llc-dropshippers') ||
    // Additional specific SEO pages that don't have hyphens
    pathname === '/about' ||
    pathname === '/contact' ||
    pathname === '/terms' ||
    pathname === '/privacy' ||
    pathname === '/disclaimer' ||
    pathname === '/refund';
  
  if (hideNavbar) {
    return null;
  }
  
  // Apply gray background for sample page to match the page color
  const isSamplePage = pathname === '/sample';
  const bgColor = isSamplePage ? 'bg-gray-50' : 'bg-white';
  
  return (
    <>
      <Navbar bgColor={bgColor} />
      <div className="h-14 sm:h-16" />
    </>
  );
}