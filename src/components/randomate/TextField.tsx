import React from 'react';
import { Label } from '../ui/label';

interface TextFieldProps {
  label: string;
  type?: 'text' | 'email';
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
}

export function TextField({ 
  label, 
  type = 'text', 
  value, 
  onChange, 
  error, 
  placeholder,
  disabled = false 
}: TextFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label className="text-neutral-700">{label}</Label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={`
          px-4 py-3 rounded-xl border-2 transition-all
          ${error 
            ? 'border-red-500 focus:border-red-600' 
            : 'border-neutral-200 focus:border-indigo-500'
          }
          ${disabled ? 'bg-neutral-100 cursor-not-allowed' : 'bg-white'}
          outline-none
        `}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}
