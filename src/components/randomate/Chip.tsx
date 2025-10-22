import React from 'react';
import { Check } from 'lucide-react';

interface ChipProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Chip({ label, selected = false, onClick, className = '' }: ChipProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-[16px] transition-all min-h-[44px]
        ${selected 
          ? 'bg-primary text-primary-foreground' 
          : 'bg-gray-100 text-gray-700 dark:bg-gray-100 dark:text-gray-700'
        }
        hover:scale-105 active:scale-95
        ${className}
      `}
    >
      <span className="flex items-center gap-2">
        {selected && <Check size={16} />}
        {label}
      </span>
    </button>
  );
}
