import React from 'react';
import { Button } from '../randomate/Button';

export function Welcome() {
  return (
    <div className="flex flex-col h-full p-6 bg-gradient-to-b from-primary/5 to-background">
      <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-primary rounded-[24px] mx-auto mb-6 flex items-center justify-center shadow-lg">
            <span className="text-4xl">🎲</span>
          </div>
          <h1 className="mb-4">Welcome to Randomate</h1>
          <p className="text-gray-500 text-lg px-4">
            Meet someone new nearby in 15 minutes. Safe, spontaneous connections.
          </p>
        </div>

        <div className="space-y-6 mb-8">
          <div className="flex items-start gap-4 text-left bg-card p-4 rounded-[16px] border border-border">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xl">📍</span>
            </div>
            <div>
              <h3 className="mb-1">Find nearby matches</h3>
              <p className="caption text-gray-500">
                Connect with people within your chosen radius
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 text-left bg-card p-4 rounded-[16px] border border-border">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xl">⚡</span>
            </div>
            <div>
              <h3 className="mb-1">Meet in minutes</h3>
              <p className="caption text-gray-500">
                Quick 15-30 minute meetups at local spots
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 text-left bg-card p-4 rounded-[16px] border border-border">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xl">🛡️</span>
            </div>
            <div>
              <h3 className="mb-1">Stay safe</h3>
              <p className="caption text-gray-500">
                Public places, trip sharing, and reporting tools
              </p>
            </div>
          </div>
        </div>

        <Button variant="primary">Get Started</Button>
      </div>

      <p className="caption text-center text-gray-500 mt-6">
        By continuing, you agree to our{' '}
        <button className="text-primary">Terms</button> and{' '}
        <button className="text-primary">Privacy Policy</button>
      </p>
    </div>
  );
}
