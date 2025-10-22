import React, { useState, useEffect } from 'react';
import { Button } from '../randomate/Button';
import { MatchCard } from '../randomate/MatchCard';
import { PlaceCard } from '../randomate/PlaceCard';
import { MapPin, Clock } from 'lucide-react';

export function MatchFound() {
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col h-full p-6 bg-background">
      <div className="flex-1 overflow-auto">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
            Match Found!
          </div>
          <h1 className="mb-2">Meet Sarah</h1>
          <p className="text-gray-500">You both want to meet now</p>
        </div>

        <MatchCard
          name="Sarah"
          age={26}
          goals={['Friendship', 'Networking']}
          className="mb-6"
        />

        <div className="mb-6">
          <h3 className="mb-3">Suggested meeting place</h3>
          <PlaceCard
            name="Blue Bottle Coffee"
            type="Cafe"
            rating={4.5}
            distance="0.3 km"
          />
          <div className="flex items-center gap-4 mt-3 px-2">
            <span className="flex items-center gap-1 caption text-gray-500">
              <MapPin size={14} />
              5 min walk for you
            </span>
            <span className="flex items-center gap-1 caption text-gray-500">
              <Clock size={14} />
              4 min walk for Sarah
            </span>
          </div>
        </div>

        <div className="bg-warning/10 border border-warning/20 rounded-[16px] p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-warning">⏰ Respond quickly</span>
            <span className="text-warning font-semibold">{formatTime(timeLeft)}</span>
          </div>
          <p className="caption text-gray-700 dark:text-gray-700">
            This match expires in {formatTime(timeLeft)}. Accept to confirm your meetup!
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <Button variant="primary">
          Accept & Meet 🎉
        </Button>
        <Button variant="tertiary">
          Pass
        </Button>
      </div>
    </div>
  );
}
