"use client";

import { usePathname } from 'next/navigation';
import { useModal } from './ModalContext';
import Navbar from './Navbar';

export default function ConditionalNavbar() {
  const pathname = usePathname();
  
  // Try to use modal context, but don't fail if not available
  let isAnyModalOpen = false;
  try {
    const modalContext = useModal();
    isAnyModalOpen = modalContext.isAnyModalOpen;
  } catch {
    // Modal context not available, continue without it
  }
  
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
    (pathname.includes('-') && pathname !== '/llc-dropshippers' && pathname !== '/how-it-works' && pathname !== '/preview') ||
    // Additional specific SEO pages that don't have hyphens
    pathname === '/about' ||
    pathname === '/contact' ||
    pathname === '/terms' ||
    pathname === '/privacy' ||
    pathname === '/disclaimer' ||
    pathname === '/refund' ||
    // Hide navbar when any modal is open
    isAnyModalOpen;
  
  if (hideNavbar) {
    return null;
  }
  
  const bgColor = 'bg-white';
  
  return (
    <>
      <Navbar bgColor={bgColor} />
      <div className="h-14 sm:h-16" />
    </>
  );
}