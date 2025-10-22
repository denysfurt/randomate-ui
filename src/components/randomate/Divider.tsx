import React from 'react';

export function Divider({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 my-6">
      <div className="flex-1 h-px bg-neutral-300"></div>
      <span className="text-neutral-500 text-sm">{text}</span>
      <div className="flex-1 h-px bg-neutral-300"></div>
    </div>
  );
}
