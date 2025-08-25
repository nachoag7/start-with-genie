import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
}

// Memoize the button component to prevent unnecessary re-renders
export const Button = React.memo(function Button({ 
  className, 
  children, 
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  ...props 
}: ButtonProps) {
  // Memoize the class names to prevent recalculation on every render
  const buttonClasses = React.useMemo(() => {
    const baseClasses = 'inline-flex items-center justify-center font-medium transition-all ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] hover:scale-[1.02]';
    
    const variantClasses = {
      primary: 'bg-gradient-to-br from-[#3A8DFF] to-[#1F6BFF] text-white shadow-sm hover:shadow-md hover:brightness-110 focus:ring-blue-500',
      secondary: 'bg-white text-neutral-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 focus:ring-blue-500',
      outline: 'bg-transparent text-[#1E40AF] border border-[#1E40AF] hover:bg-[#1E40AF] hover:text-white focus:ring-[#1E40AF]',
      ghost: 'bg-transparent text-neutral-700 hover:bg-gray-100 focus:ring-blue-500'
    };
    
    const sizeClasses = {
      sm: 'px-3 py-2 text-sm rounded-lg h-9',
      md: 'px-4 py-2 text-sm rounded-lg h-10',
      lg: 'px-6 py-3 text-base rounded-lg h-12',
      xl: 'px-8 py-4 text-lg rounded-lg h-14'
    };
    
    const widthClasses = fullWidth ? 'w-full' : '';
    
    return cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      widthClasses,
      className
    );
  }, [variant, size, fullWidth, className]);
  
  return (
    <button
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
}); 
 