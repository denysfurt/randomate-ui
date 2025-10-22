import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Share2, AlertCircle, XCircle } from 'lucide-react';
import { Button } from '../randomate/Button';

export function MeetingDetails() {
  const [timeUntilMeet, setTimeUntilMeet] = useState(15 * 60); // 15 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeUntilMeet(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header with Timer */}
      <div className="bg-primary text-white px-6 py-6">
        <div className="text-center">
          <p className="caption mb-2 opacity-90">Meeting in</p>
          <h1 className="text-3xl mb-1">{formatTime(timeUntilMeet)}</h1>
          <p className="caption opacity-90">with Sarah at Blue Bottle Coffee</p>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-6">
        {/* Map Preview */}
        <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-100 rounded-[16px] mb-6 overflow-hidden border border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-success/10"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <MapPin size={24} className="text-white" />
            </div>
          </div>
          <div className="absolute top-4 right-4">
            <button className="bg-white dark:bg-card p-3 rounded-full shadow-lg hover:scale-105 transition-transform min-h-[44px] min-w-[44px]">
              <Navigation size={20} className="text-primary" />
            </button>
          </div>
        </div>

        <Button variant="primary" className="mb-6">
          <span className="flex items-center justify-center gap-2">
            <Navigation size={20} />
            Navigate to Blue Bottle Coffee
          </span>
        </Button>

        {/* Meeting Details */}
        <div className="bg-card border border-border rounded-[16px] p-4 mb-6">
          <h3 className="mb-3">Meeting details</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-gray-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-900">Blue Bottle Coffee</p>
                <p className="caption text-gray-500">123 Main St, Downtown</p>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Tools */}
        <div className="bg-card border border-border rounded-[16px] p-4">
          <h3 className="mb-3">Safety & Support</h3>
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-100 rounded-[12px] transition-colors min-h-[44px]">
              <Share2 size={20} className="text-gray-500" />
              <span className="text-gray-900 dark:text-gray-900">Share trip with emergency contact</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-100 rounded-[12px] transition-colors min-h-[44px]">
              <AlertCircle size={20} className="text-warning" />
              <span className="text-gray-900 dark:text-gray-900">Report no-show</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-100 rounded-[12px] transition-colors min-h-[44px]">
              <XCircle size={20} className="text-error" />
              <span className="text-gray-900 dark:text-gray-900">End meeting early</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
