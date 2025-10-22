import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Button } from '../randomate/Button';

export function MeetingNoShow() {
  return (
    <div className="flex flex-col h-full p-6 bg-background">
      <div className="flex-1 flex flex-col justify-center">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-warning/10 rounded-full mx-auto mb-6 flex items-center justify-center">
            <AlertCircle size={36} className="text-warning" />
          </div>
          <h1 className="mb-2">Report no-show</h1>
          <p className="text-gray-500 px-4">
            Did Sarah not show up to the meeting? Let us know so we can take appropriate action.
          </p>
        </div>

        <div className="bg-card border border-border rounded-[16px] p-4 mb-6">
          <h3 className="mb-3">What happens next?</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <p className="text-gray-700 dark:text-gray-700">
                We'll record this no-show on Sarah's account
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <p className="text-gray-700 dark:text-gray-700">
                Multiple no-shows may result in account restrictions
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <p className="text-gray-700 dark:text-gray-700">
                You won't be matched with Sarah again
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-warning/10 border border-warning/20 rounded-[16px] p-4 mb-6">
          <p className="caption text-gray-700 dark:text-gray-700">
            <span className="text-warning font-medium">Note:</span> Only report if the other person genuinely didn't show up. False reports may affect your account.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <Button variant="primary">
          Confirm No-Show
        </Button>
        <Button variant="tertiary">
          Cancel
        </Button>
      </div>
    </div>
  );
}
