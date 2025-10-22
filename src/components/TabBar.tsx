import React from 'react';
import { Home, User } from 'lucide-react';

interface TabBarProps {
  active: 'home' | 'profile';
  onNavigate: (tab: 'home' | 'profile') => void;
}

export function TabBar({ active, onNavigate }: TabBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 safe-area-bottom">
      <div className="flex items-center justify-around h-16 max-w-md mx-auto">
        <button
          onClick={() => onNavigate('home')}
          className={`flex flex-col items-center gap-1 flex-1 py-2 ${
            active === 'home' ? 'text-indigo-600' : 'text-neutral-500'
          }`}
        >
          <Home size={24} />
          <span className="text-xs">Home</span>
        </button>
        <button
          onClick={() => onNavigate('profile')}
          className={`flex flex-col items-center gap-1 flex-1 py-2 ${
            active === 'profile' ? 'text-indigo-600' : 'text-neutral-500'
          }`}
        >
          <User size={24} />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </div>
  );
}
