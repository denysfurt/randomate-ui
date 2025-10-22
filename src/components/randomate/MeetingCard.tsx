import React from 'react';
import { Copy, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface MeetingCardProps {
  emoji: string;
  partnerNickname: string;
  placeName: string;
  address: string;
  slotTime: string;
  priceLevel: 1 | 2 | 3;
  task?: string;
}

export function MeetingCard({
  emoji,
  partnerNickname,
  placeName,
  address,
  slotTime,
  priceLevel,
  task
}: MeetingCardProps) {
  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    toast.success('Address copied to clipboard!');
  };

  const priceDisplay = 'Kč'.repeat(priceLevel);

  return (
    <div className="bg-white border-2 border-neutral-200 rounded-2xl p-5 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="text-4xl">{emoji}</span>
        <div>
          <div className="text-neutral-500 text-sm">Meeting with</div>
          <div>{partnerNickname}</div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-start gap-2">
          <Clock size={20} className="text-neutral-500 mt-0.5 flex-shrink-0" />
          <div>
            <div className="text-neutral-500 text-sm">When</div>
            <div>{slotTime}</div>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <MapPin size={20} className="text-neutral-500 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <div className="text-neutral-500 text-sm">Where</div>
            <div>{placeName}</div>
            <div className="text-neutral-600 text-sm">{address}</div>
          </div>
          <button 
            onClick={copyAddress}
            className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
          >
            <Copy size={18} className="text-neutral-600" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <div className="text-neutral-500 text-sm">Price level:</div>
          <div className="text-indigo-600">{priceDisplay}</div>
        </div>
      </div>

      {task ? (
        <div className="bg-indigo-50 p-3 rounded-xl">
          <div className="text-neutral-500 text-sm">Task</div>
          <div className="text-indigo-900">{task}</div>
        </div>
      ) : (
        <div className="bg-neutral-50 p-3 rounded-xl text-neutral-600 text-sm">
          Arrive on time.
        </div>
      )}
    </div>
  );
}
