import React from 'react';

interface EmptyStateProps {
  emoji: string;
  title: string;
  description: string;
}

export function EmptyState({ emoji, title, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 px-6">
      <div className="text-6xl mb-4">{emoji}</div>
      <div className="text-neutral-500">{description}</div>
    </div>
  );
}
