import React from 'react';
import { User } from 'lucide-react';

interface MatchCardProps {
  avatar?: string;
  name: string;
  age: number;
  goals: string[];
  className?: string;
}

export function MatchCard({ avatar, name, age, goals, className = '' }: MatchCardProps) {
  return (
    <div className={`bg-card rounded-[16px] p-6 shadow-md border border-border ${className}`}>
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full bg-gray-100 dark:bg-gray-100 flex items-center justify-center mb-4 overflow-hidden">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          ) : (
            <User size={40} className="text-gray-500" />
          )}
        </div>
        <h3 className="mb-1">
          {name} <span className="text-gray-500">• {age}</span>
        </h3>
        <div className="flex flex-wrap gap-2 justify-center mt-3">
          {goals.map((goal, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full caption"
            >
              {goal}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
