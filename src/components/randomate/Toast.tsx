import React from 'react';
import { CheckCircle, AlertCircle, AlertTriangle, X } from 'lucide-react';

interface ToastProps {
  type: 'success' | 'error' | 'warning';
  message: string;
  onClose?: () => void;
}

export function Toast({ type, message, onClose }: ToastProps) {
  const icons = {
    success: <CheckCircle size={20} />,
    error: <AlertCircle size={20} />,
    warning: <AlertTriangle size={20} />
  };

  const styles = {
    success: 'bg-success text-white',
    error: 'bg-error text-white',
    warning: 'bg-warning text-white'
  };

  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-[16px] shadow-lg ${styles[type]}`}>
      {icons[type]}
      <p className="flex-1">{message}</p>
      {onClose && (
        <button onClick={onClose} className="hover:opacity-80 min-h-[44px] min-w-[44px] flex items-center justify-center -mr-2">
          <X size={20} />
        </button>
      )}
    </div>
  );
}

interface InlineAlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  className?: string;
}

export function InlineAlert({ type, message, className = '' }: InlineAlertProps) {
  const icons = {
    success: <CheckCircle size={20} />,
    error: <AlertCircle size={20} />,
    warning: <AlertTriangle size={20} />,
    info: <AlertCircle size={20} />
  };

  const styles = {
    success: 'bg-success/10 text-success border-success/20',
    error: 'bg-error/10 text-error border-error/20',
    warning: 'bg-warning/10 text-warning border-warning/20',
    info: 'bg-primary/10 text-primary border-primary/20'
  };

  return (
    <div className={`flex items-start gap-3 px-4 py-3 rounded-[16px] border-2 ${styles[type]} ${className}`}>
      <span className="mt-0.5">{icons[type]}</span>
      <p className="flex-1">{message}</p>
    </div>
  );
}
