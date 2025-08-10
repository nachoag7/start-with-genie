"use client";

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function ConditionalNavbar() {
  const pathname = usePathname();
  
  // Hide navbar on dashboard, checkout, onboarding and any other routes where it shouldn't appear
  const hideNavbar = pathname === '/dashboard' || pathname === '/checkout' || pathname === '/onboarding';
  
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