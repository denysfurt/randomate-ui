import React from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '../randomate/Button';

export function PermissionsLocation() {
  return (
    <div className="flex flex-col h-full p-6">
      <div className="flex items-center justify-between mb-8">
        <div></div>
        <span className="caption text-gray-500">Step 3 of 3</span>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
            <MapPin size={36} className="text-primary" />
          </div>
          <h1 className="mb-2">Enable location</h1>
          <p className="text-gray-500 px-4">
            We need your location to find nearby matches and suggest meeting places. Your exact location is never shared with other users.
          </p>
        </div>

        {/* Map Preview */}
        <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-100 rounded-[16px] mb-8 overflow-hidden border border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-success/10"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <MapPin size={28} className="text-white" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent"></div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-[16px] p-4 mb-6">
          <p className="caption text-gray-700 dark:text-gray-700">
            <span className="text-primary">🔒 Privacy:</span> Your location is used only to calculate distances and suggest venues. We never share your exact coordinates.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <Button variant="primary">Allow Location Access</Button>
        <Button variant="tertiary">Not now</Button>
      </div>
    </div>
  );
}
