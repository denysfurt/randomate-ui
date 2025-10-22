import React, { useState } from 'react';
import { Map, List } from 'lucide-react';
import { Button } from '../randomate/Button';
import { PlaceCard } from '../randomate/PlaceCard';
import { NavBar } from '../randomate/NavBar';

export function HomeFind() {
  const [viewMode, setViewMode] = useState<'map' | 'list'>('list');

  const nearbyPlaces = [
    { name: 'Blue Bottle Coffee', type: 'Cafe', rating: 4.5, distance: '0.3 km' },
    { name: 'The Rooftop Bar', type: 'Bar', rating: 4.8, distance: '0.5 km' },
    { name: 'Central Park', type: 'Park', rating: 4.6, distance: '0.8 km' }
  ];

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="mb-1">Good afternoon, Alex 👋</h2>
            <p className="caption text-gray-500">Ready to meet someone new?</p>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex gap-2 bg-gray-100 dark:bg-gray-100 p-1 rounded-[12px] mb-6">
          <button
            onClick={() => setViewMode('list')}
            className={`flex-1 py-2 px-4 rounded-[10px] transition-all min-h-[44px] ${
              viewMode === 'list'
                ? 'bg-white dark:bg-card shadow-sm text-gray-900 dark:text-gray-900'
                : 'text-gray-500'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <List size={18} />
              List
            </span>
          </button>
          <button
            onClick={() => setViewMode('map')}
            className={`flex-1 py-2 px-4 rounded-[10px] transition-all min-h-[44px] ${
              viewMode === 'map'
                ? 'bg-white dark:bg-card shadow-sm text-gray-900 dark:text-gray-900'
                : 'text-gray-500'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <Map size={18} />
              Map
            </span>
          </button>
        </div>

        <Button variant="primary">
          Start Random Meet 🎲
        </Button>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-auto px-6">
        <h3 className="mb-4">Nearby places</h3>
        <div className="space-y-3 pb-6">
          {nearbyPlaces.map((place, index) => (
            <PlaceCard key={index} {...place} />
          ))}
        </div>
      </div>

      {/* Nav Bar */}
      <NavBar active="home" />
    </div>
  );
}
