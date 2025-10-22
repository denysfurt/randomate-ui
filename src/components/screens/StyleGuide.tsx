import React from 'react';
import { Button } from '../randomate/Button';
import { Chip } from '../randomate/Chip';

export function StyleGuide() {
  return (
    <div className="p-6 space-y-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary rounded-[20px] mx-auto mb-4 flex items-center justify-center">
          <span className="text-2xl">🎲</span>
        </div>
        <h1 className="mb-2">Randomate</h1>
        <p className="text-gray-500">Meet someone new nearby in 15 minutes</p>
      </div>

      {/* Colors */}
      <div>
        <h2 className="mb-4">Colors</h2>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <div className="h-16 bg-primary rounded-[12px] mb-2"></div>
            <p className="caption text-gray-500">Primary</p>
            <p className="caption text-gray-700 dark:text-gray-700">#8B5CF6</p>
          </div>
          <div>
            <div className="h-16 bg-success rounded-[12px] mb-2"></div>
            <p className="caption text-gray-500">Success</p>
            <p className="caption text-gray-700 dark:text-gray-700">#22C55E</p>
          </div>
          <div>
            <div className="h-16 bg-error rounded-[12px] mb-2"></div>
            <p className="caption text-gray-500">Error</p>
            <p className="caption text-gray-700 dark:text-gray-700">#EF4444</p>
          </div>
        </div>
      </div>

      {/* Typography */}
      <div>
        <h2 className="mb-4">Typography</h2>
        <div className="space-y-3">
          <div>
            <h1>Heading 1 - 28/36</h1>
          </div>
          <div>
            <h2>Heading 2 - 22/28</h2>
          </div>
          <div>
            <p>Body Text - 16/24</p>
          </div>
          <div>
            <p className="caption">Caption - 12/16</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div>
        <h2 className="mb-4">Buttons</h2>
        <div className="space-y-3">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="tertiary">Tertiary Button</Button>
          <Button variant="primary" loading>Loading...</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </div>

      {/* Chips */}
      <div>
        <h2 className="mb-4">Chips</h2>
        <div className="flex flex-wrap gap-2">
          <Chip label="Friendship" selected />
          <Chip label="Romance" />
          <Chip label="Networking" />
        </div>
      </div>

      {/* Spacing */}
      <div>
        <h2 className="mb-4">Spacing Scale (8pt)</h2>
        <div className="space-y-2">
          {[8, 16, 24, 32, 40, 48].map(size => (
            <div key={size} className="flex items-center gap-3">
              <div className="w-12 caption text-gray-500">{size}px</div>
              <div className="h-4 bg-primary rounded" style={{ width: size }}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Border Radius */}
      <div>
        <h2 className="mb-4">Border Radius</h2>
        <div className="grid grid-cols-4 gap-3">
          {[8, 12, 16, 20].map(radius => (
            <div key={radius}>
              <div 
                className="h-16 bg-primary/20 mb-2" 
                style={{ borderRadius: radius }}
              ></div>
              <p className="caption text-center text-gray-500">{radius}px</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
