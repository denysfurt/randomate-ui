import React from 'react';
import { Loader2 } from 'lucide-react';

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit';
}

export function CustomButton({ 
  children, 
  onClick, 
  variant = 'primary', 
  disabled = false,
  loading = false,
  fullWidth = false,
  type = 'button'
}: CustomButtonProps) {
  const baseStyles = "px-6 py-3 rounded-xl transition-all font-medium";
  
  const variantStyles = {
    primary: `bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`,
    secondary: `bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 active:bg-indigo-100 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`,
    tertiary: `bg-transparent text-indigo-600 hover:bg-indigo-50 active:bg-indigo-100 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''}`}
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
