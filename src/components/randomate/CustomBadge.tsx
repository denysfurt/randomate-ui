import React from 'react';

interface CustomBadgeProps {
  children: React.ReactNode;
}

export function CustomBadge({ children }: CustomBadgeProps) {
  return (
    <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700">
      {children}
    </div>
  );
}
