import React from 'react';
import { Button } from '../randomate/Button';

export function Searching() {
  return (
    <div className="flex flex-col h-full p-6 bg-background">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        {/* Animated Search Indicator */}
        <div className="relative w-32 h-32 mb-8">
          <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping"></div>
          <div className="absolute inset-4 bg-primary/20 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute inset-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-4xl">🎲</span>
          </div>
        </div>

        <h1 className="mb-2">Finding your match</h1>
        <p className="text-gray-500 mb-8 px-4">
          Looking for someone nearby who wants to meet now
        </p>

        {/* Animated Dots */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>

        <p className="caption text-gray-500 mb-12">
          Average wait time: <span className="text-primary">2-5 minutes</span>
        </p>

        <div className="bg-primary/5 border border-primary/20 rounded-[16px] p-4 mb-8 max-w-sm">
          <p className="caption text-gray-700 dark:text-gray-700">
            💡 <span className="font-medium">Tip:</span> Stay on this screen to be matched faster. We'll notify you when we find someone!
          </p>
        </div>
      </div>

      <Button variant="tertiary">Cancel</Button>
    </div>
  );
}
