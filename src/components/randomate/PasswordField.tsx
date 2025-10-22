import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Label } from '../ui/label';

interface PasswordFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
}

export function PasswordField({ 
  label, 
  value, 
  onChange, 
  error, 
  placeholder,
  disabled = false 
}: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <Label className="text-neutral-700">{label}</Label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full px-4 py-3 pr-12 rounded-xl border-2 transition-all
            ${error 
              ? 'border-red-500 focus:border-red-600' 
              : 'border-neutral-200 focus:border-indigo-500'
            }
            ${disabled ? 'bg-neutral-100 cursor-not-allowed' : 'bg-white'}
            outline-none
          `}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-700"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}
