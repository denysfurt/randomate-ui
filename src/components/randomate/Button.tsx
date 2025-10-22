import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  loading?: boolean;
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  loading = false, 
  children, 
  className = '',
  disabled,
  ...props 
}: ButtonProps) {
  const baseStyles = "w-full h-[52px] rounded-[16px] transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]";
  
  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-md",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-300 dark:bg-gray-100 dark:text-foreground dark:hover:bg-gray-300",
    tertiary: "bg-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-700 dark:hover:bg-gray-100"
  };
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <Loader2 className="animate-spin" size={20} />
          Loading...
        </span>
      ) : children}
    </button>
  );
}
