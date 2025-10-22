import React from 'react';

interface EmptyStateProps {
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
      {/* Simple illustration with shapes */}
      <div className="mb-6 relative w-32 h-32">
        <div className="absolute inset-0 bg-primary/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary/30 rounded-full"></div>
      </div>
      <h3 className="mb-2 text-gray-900 dark:text-gray-900">{title}</h3>
      <p className="text-gray-500 mb-6">{description}</p>
      {action && (
        <button
          onClick={action.onClick}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-[16px] hover:bg-primary-hover transition-all min-h-[44px]"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
