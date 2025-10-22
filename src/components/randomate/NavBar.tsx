import React from 'react';
import { Home, Users, User } from 'lucide-react';

interface NavBarProps {
  active: 'home' | 'matches' | 'profile';
  onNavigate?: (tab: 'home' | 'matches' | 'profile') => void;
}

export function NavBar({ active, onNavigate }: NavBarProps) {
  const tabs = [
    { id: 'home' as const, icon: Home, label: 'Home' },
    { id: 'matches' as const, icon: Users, label: 'Matches' },
    { id: 'profile' as const, icon: User, label: 'Profile' }
  ];

  return (
    <nav className="bg-card border-t border-border px-4 py-2 safe-area-bottom">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {tabs.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onNavigate?.(id)}
            className={`flex flex-col items-center gap-1 py-2 px-6 rounded-[12px] transition-all min-h-[44px] min-w-[44px]
              ${active === id 
                ? 'text-primary' 
                : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
              }
            `}
          >
            <Icon size={24} strokeWidth={active === id ? 2.5 : 2} />
            <span className="caption">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
