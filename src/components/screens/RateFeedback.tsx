import React, { useState } from 'react';
import { Star, ThumbsUp, MessageCircle, Clock, Sparkles } from 'lucide-react';
import { Button } from '../randomate/Button';
import { Chip } from '../randomate/Chip';

export function RateFeedback() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [feedback, setFeedback] = useState('');

  const quickTags = [
    { label: 'Great talk', icon: '💬' },
    { label: 'Kind', icon: '😊' },
    { label: 'Funny', icon: '😄' },
    { label: 'Interesting', icon: '✨' },
    { label: 'Awkward', icon: '😅' },
    { label: 'Late', icon: '⏰' }
  ];

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="flex flex-col h-full p-6 bg-background">
      <div className="flex-1 overflow-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-success/10 rounded-full mx-auto mb-4 flex items-center justify-center">
            <ThumbsUp size={28} className="text-success" />
          </div>
          <h1 className="mb-2">How was your meet?</h1>
          <p className="text-gray-500">Tell us about your experience with Sarah</p>
        </div>

        {/* Star Rating */}
        <div className="mb-8">
          <h3 className="text-center mb-4">Rate your experience</h3>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map(star => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="transition-transform hover:scale-110 min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <Star
                  size={36}
                  className={
                    star <= (hoveredRating || rating)
                      ? 'fill-warning text-warning'
                      : 'text-gray-300'
                  }
                />
              </button>
            ))}
          </div>
        </div>

        {/* Quick Tags */}
        <div className="mb-6">
          <h3 className="mb-3">Quick feedback</h3>
          <div className="flex flex-wrap gap-2">
            {quickTags.map(tag => (
              <button
                key={tag.label}
                onClick={() => toggleTag(tag.label)}
                className={`
                  px-4 py-2 rounded-[16px] transition-all min-h-[44px]
                  ${selectedTags.includes(tag.label)
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-gray-100 text-gray-700 dark:bg-gray-100 dark:text-gray-700'
                  }
                `}
              >
                <span className="flex items-center gap-2">
                  <span>{tag.icon}</span>
                  {tag.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Text Feedback */}
        <div className="mb-6">
          <h3 className="mb-3">Additional comments (optional)</h3>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Share more about your experience..."
            className="w-full h-32 px-4 py-3 bg-input text-input-foreground border-2 border-transparent rounded-[16px] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
          />
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-[16px] p-4">
          <p className="caption text-gray-700 dark:text-gray-700">
            🔒 Your feedback helps keep Randomate safe and improves matching quality. It's kept confidential.
          </p>
        </div>
      </div>

      <div className="space-y-3 mt-6">
        <Button variant="primary" disabled={rating === 0}>
          Submit Feedback
        </Button>
        <Button variant="tertiary">
          Skip
        </Button>
      </div>
    </div>
  );
}
