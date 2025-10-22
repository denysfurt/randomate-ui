import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Chip } from '../randomate/Chip';
import { Button } from '../randomate/Button';

export function OnboardingGoal() {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const goals = ['Friendship', 'Romance', 'Networking', 'Other'];

  const toggleGoal = (goal: string) => {
    setSelectedGoals(prev =>
      prev.includes(goal)
        ? prev.filter(g => g !== goal)
        : [...prev, goal]
    );
  };

  return (
    <div className="flex flex-col h-full p-6">
      <div className="flex items-center justify-between mb-8">
        <button className="flex items-center gap-2 text-gray-700 dark:text-gray-700 min-h-[44px]">
          <ArrowLeft size={20} />
        </button>
        <span className="caption text-gray-500">Step 1 of 3</span>
      </div>

      <div className="flex-1">
        <h1 className="mb-2">What are you looking for?</h1>
        <p className="text-gray-500 mb-8">Select all that apply</p>

        <div className="flex flex-wrap gap-3">
          {goals.map(goal => (
            <Chip
              key={goal}
              label={goal}
              selected={selectedGoals.includes(goal)}
              onClick={() => toggleGoal(goal)}
            />
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <Button variant="primary" disabled={selectedGoals.length === 0}>
          Continue
        </Button>
        <Button variant="tertiary">Skip for now</Button>
      </div>
    </div>
  );
}
