import React from 'react';
import { MapPin, Star, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface PlaceCardProps {
  image?: string;
  name: string;
  type: string;
  rating: number;
  distance: string;
  className?: string;
}

export function PlaceCard({ image, name, type, rating, distance, className = '' }: PlaceCardProps) {
  return (
    <div className={`bg-card rounded-[16px] overflow-hidden shadow-md border border-border ${className}`}>
      <div className="relative h-40 bg-gray-100 dark:bg-gray-100">
        {image && (
          <ImageWithFallback 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 dark:text-gray-900 mb-1">{name}</h3>
            <p className="caption text-gray-500">{type}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 caption text-gray-700 dark:text-gray-700">
              <Star size={14} className="fill-warning text-warning" />
              {rating.toFixed(1)}
            </span>
            <span className="flex items-center gap-1 caption text-gray-500">
              <MapPin size={14} />
              {distance}
            </span>
          </div>
          <button className="text-primary hover:text-primary-hover transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
            <ExternalLink size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
