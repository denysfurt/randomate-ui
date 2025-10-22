import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Chip } from '../randomate/Chip';
import { Button } from '../randomate/Button';
import { Slider } from '../ui/slider';

export function OnboardingPreferences() {
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
  const [radius, setRadius] = useState([2.5]);

  const placeTypes = ['Cafe', 'Bar', 'Park', 'Museum', 'Other'];
  const timeWindows = ['15 min', '30 min', '60 min'];

  const togglePlace = (place: string) => {
    setSelectedPlaces(prev =>
      prev.includes(place)
        ? prev.filter(p => p !== place)
        : [...prev, place]
    );
  };

  const toggleTime = (time: string) => {
    setSelectedTimes(prev =>
      prev.includes(time)
        ? prev.filter(t => t !== time)
        : [...prev, time]
    );
  };

  return (
    <div className="flex flex-col h-full p-6">
      <div className="flex items-center justify-between mb-8">
        <button className="flex items-center gap-2 text-gray-700 dark:text-gray-700 min-h-[44px]">
          <ArrowLeft size={20} />
        </button>
        <span className="caption text-gray-500">Step 2 of 3</span>
      </div>

      <div className="flex-1 space-y-8 overflow-auto">
        <div>
          <h1 className="mb-2">Set your preferences</h1>
          <p className="text-gray-500 mb-6">Choose your ideal meetup settings</p>
        </div>

        <div>
          <h3 className="mb-3">Preferred place types</h3>
          <div className="flex flex-wrap gap-2">
            {placeTypes.map(place => (
              <Chip
                key={place}
                label={place}
                selected={selectedPlaces.includes(place)}
                onClick={() => togglePlace(place)}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3>Search radius</h3>
            <span className="text-primary">{radius[0].toFixed(1)} km</span>
          </div>
          <Slider
            value={radius}
            onValueChange={setRadius}
            min={0.5}
            max={10}
            step={0.5}
            className="w-full"
          />
          <div className="flex justify-between caption text-gray-500 mt-2">
            <span>0.5 km</span>
            <span>10 km</span>
          </div>
        </div>

        <div>
          <h3 className="mb-3">Meeting time window</h3>
          <div className="flex flex-wrap gap-2">
            {timeWindows.map(time => (
              <Chip
                key={time}
                label={time}
                selected={selectedTimes.includes(time)}
                onClick={() => toggleTime(time)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-3 mt-6">
        <Button 
          variant="primary" 
          disabled={selectedPlaces.length === 0 || selectedTimes.length === 0}
        >
          Continue
        </Button>
        <Button variant="tertiary">Skip for now</Button>
      </div>
    </div>
  );
}
