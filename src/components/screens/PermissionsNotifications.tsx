import React from 'react';
import { Bell } from 'lucide-react';
import { Button } from '../randomate/Button';

export function PermissionsNotifications() {
  return (
    <div className="flex flex-col h-full p-6">
      <div className="flex-1 flex flex-col justify-center">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
            <Bell size={36} className="text-primary" />
          </div>
          <h1 className="mb-2">Stay updated</h1>
          <p className="text-gray-500 px-4">
            Get notified when you have a match, meeting reminders, and important safety alerts.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3 p-4 bg-card border border-border rounded-[16px]">
            <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-lg">✨</span>
            </div>
            <div className="flex-1">
              <h4 className="mb-1">Match notifications</h4>
              <p className="caption text-gray-500">
                Know immediately when someone wants to meet
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-card border border-border rounded-[16px]">
            <div className="w-8 h-8 bg-warning/10 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-lg">⏰</span>
            </div>
            <div className="flex-1">
              <h4 className="mb-1">Meeting reminders</h4>
              <p className="caption text-gray-500">
                Never miss a confirmed meetup
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-card border border-border rounded-[16px]">
            <div className="w-8 h-8 bg-error/10 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-lg">🛡️</span>
            </div>
            <div className="flex-1">
              <h4 className="mb-1">Safety alerts</h4>
              <p className="caption text-gray-500">
                Important security and safety updates
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Button variant="primary">Enable Notifications</Button>
        <Button variant="tertiary">Maybe later</Button>
      </div>
    </div>
  );
}
