import React from 'react';

interface ChipProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export function Chip({ children, active = false, onClick }: ChipProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full border-2 transition-all
        ${active 
          ? 'bg-indigo-600 text-white border-indigo-600' 
          : 'bg-white text-neutral-700 border-neutral-300 hover:border-indigo-400'
        }
      `}
    >
      {children}
    </button>
  );
}
