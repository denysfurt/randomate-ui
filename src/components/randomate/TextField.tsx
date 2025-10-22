import React, { useState, forwardRef } from 'react';
import { Eye, EyeOff, LucideIcon } from 'lucide-react';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helper?: string;
  prefixIcon?: LucideIcon;
  isPassword?: boolean;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, helper, prefixIcon: PrefixIcon, isPassword, className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    
    return (
      <div className="w-full">
        {label && (
          <label className="block mb-2 text-gray-900 dark:text-gray-900">
            {label}
          </label>
        )}
        <div className="relative">
          {PrefixIcon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
              <PrefixIcon size={20} />
            </div>
          )}
          <input
            ref={ref}
            type={isPassword && !showPassword ? 'password' : 'text'}
            className={`
              w-full px-4 py-3 
              ${PrefixIcon ? 'pl-12' : ''} 
              ${isPassword ? 'pr-12' : ''}
              bg-input text-input-foreground
              border-2 
              ${error ? 'border-error' : 'border-transparent'}
              rounded-[16px]
              placeholder:text-gray-500
              focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all
              ${className}
            `}
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          )}
        </div>
        {error && (
          <p className="mt-2 caption text-error">{error}</p>
        )}
        {helper && !error && (
          <p className="mt-2 caption text-gray-500">{helper}</p>
        )}
      </div>
    );
  }
);

TextField.displayName = 'TextField';
