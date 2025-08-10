"use client";

import React from "react";
import { cn } from "../../lib/utils";

interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
}

export function PremiumButton({ 
  size = "md", 
  children, 
  className,
  type = "button",
  ...props 
}: PremiumButtonProps) {
  const sizeClasses = {
    sm: "h-10 px-6 text-sm",
    md: "h-12 px-8 text-base",
    lg: "h-14 px-10 text-lg"
  };

  return (
    <button
      type={type}
      className={cn(
        // Base styles
        "inline-flex items-center justify-center",
        "rounded-full font-medium tracking-tight",
        "text-white select-none",
        
        // Gradient background
        "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600",
        
        // Shadow and depth
        "shadow-sm shadow-black/10",
        
        // Transitions
        "transition-all duration-200 ease-out",
        
        // Hover states
        "hover:brightness-105 hover:shadow-md hover:shadow-black/15",
        
        // Active states
        "active:translate-y-[1px] active:brightness-95 active:shadow-none",
        
        // Focus states
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50 focus-visible:ring-offset-2",
        
        // Disabled states
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:brightness-100 disabled:hover:shadow-sm",
        
        // Size classes
        sizeClasses[size],
        
        // Custom classes
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

// Export for easier imports
export default PremiumButton;