import React from 'react';
import { AlertCircle } from 'lucide-react';

interface InlineAlertProps {
  message: string;
}

export function InlineAlert({ message }: InlineAlertProps) {
  return (
    <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700">
      <AlertCircle size={16} />
      <span className="text-sm">{message}</span>
    </div>
  );
}
