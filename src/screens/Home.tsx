import React, { useState } from 'react';
import { UserData } from './OnboardingQuestions';
import { CustomButton } from '../components/randomate/CustomButton';
import { CustomBadge } from '../components/randomate/CustomBadge';
import { EmptyState } from '../components/randomate/EmptyState';
import { MeetingCard } from '../components/randomate/MeetingCard';
import { Textarea } from '../components/ui/textarea';
import { TabBar } from '../components/TabBar';
import { Label } from '../components/ui/label';
import { Slider } from '../components/ui/slider';

interface HomeProps {
  userData: UserData;
  successfulMeets: number;
  onTabNavigate: (tab: 'home' | 'profile') => void;
  onMeetingConfirmed: () => void;
  onUpdateUserData: (data: Partial<UserData>) => void;
}

type HomeState = 'idle' | 'waiting' | 'assigned' | 'confirm';

const ANIMAL_EMOJIS = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔', '🦄', '🐢', '🐙', '🐬', '🐳'];

export function Home({ userData, successfulMeets, onTabNavigate, onMeetingConfirmed, onUpdateUserData }: HomeProps) {
  const [homeState, setHomeState] = useState<HomeState>('idle');
  const [isAvailable, setIsAvailable] = useState(false);
  const [meetingNote, setMeetingNote] = useState('');
  const [craziness, setCraziness] = useState(userData.craziness);
  const [budget, setBudget] = useState([userData.budget]);

  const handleToggleAvailability = () => {
    if (!isAvailable) {
      // Update user data before becoming available
      onUpdateUserData({ craziness, budget: budget[0] });
      setIsAvailable(true);
      setHomeState('waiting');
      // Simulate matching after 2 seconds
      setTimeout(() => {
        setHomeState('assigned');
        // Simulate meeting time after 3 more seconds
        setTimeout(() => {
          setHomeState('confirm');
        }, 20000);
      }, 4000);
    } else {
      setIsAvailable(false);
      setHomeState('idle');
    }
  };

  const handleConfirmMeeting = (didMeet: boolean) => {
    if (didMeet) {
      onMeetingConfirmed();
    }
    setIsAvailable(false);
    setHomeState('idle');
    setMeetingNote('');
  };

  return (
    <div className="min-h-screen bg-neutral-50 pb-24">
      <div className="px-6 py-8 max-w-md mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-neutral-900 mb-2">Hi, {userData.nickname}</h1>
          <CustomBadge>Successful meets: {successfulMeets}</CustomBadge>
        </div>

        {/* Availability Toggle */}
        <div className="mb-6">
          <CustomButton
            onClick={handleToggleAvailability}
            disabled={homeState === 'assigned' || homeState === 'confirm'}
            fullWidth
          >
            {homeState === 'assigned' || homeState === 'confirm' 
              ? 'Active meeting' 
              : isAvailable 
                ? "I'm available at weekends (ON)" 
                : "I'm available at weekends"}
          </CustomButton>
        </div>

        {/* State-specific content */}
        <div className="mb-6">
          {homeState === 'idle' && (
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-2xl border border-neutral-200 p-5">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <Label className="text-neutral-700">Craziness level</Label>
                    <div className="flex flex-wrap gap-2">
                      {['Sane', 'Crazy', 'Supercrazy'].map((c) => (
                        <button
                          key={c}
                          onClick={() => setCraziness(c)}
                          className={`flex-1 min-w-[calc(33.333%-0.5rem)] px-2 sm:px-4 py-2 rounded-xl border-2 transition-all text-sm sm:text-base ${
                            craziness === c
                              ? 'bg-indigo-600 text-white border-indigo-600'
                              : 'bg-white text-neutral-700 border-neutral-300'
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Label className="text-neutral-700">Budget per meet</Label>
                    <div className="px-2">
                      <Slider
                        value={budget}
                        onValueChange={setBudget}
                        min={0}
                        max={1000}
                        step={50}
                        className="mb-2"
                      />
                      <div className="text-center text-neutral-900">{budget[0]} Kč</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-neutral-200 p-1">
                <EmptyState
                  emoji="🎲"
                  title="No active meeting yet"
                  description="No active meeting yet — tap 'I'm available' on weekends."
                />
              </div>
            </div>
          )}

          {homeState === 'waiting' && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-6 text-center">
              <div className="text-6xl mb-4">⏳</div>
              <h2 className="text-neutral-900 mb-2">Waiting for a match…</h2>
              <p className="text-neutral-600">Try later or keep waiting!</p>
            </div>
          )}

          {homeState === 'assigned' && (
            <div>
              <h2 className="text-neutral-900 mb-4">Your meeting is ready!</h2>
              <MeetingCard
                emoji={ANIMAL_EMOJIS[Math.floor(Math.random() * ANIMAL_EMOJIS.length)]}
                partnerNickname="Adventure Seeker"
                placeName="Café Louvre"
                address="Národní 22, 110 00 Praha 1"
                slotTime="Sat 18:00"
                priceLevel={2}
                task="Try their signature dessert"
              />
              <div className="mt-4 bg-indigo-50 p-4 rounded-xl text-indigo-900">
                <p>Be on time. Save the address.</p>
              </div>
            </div>
          )}

          {homeState === 'confirm' && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-6">
              <h2 className="text-neutral-900 mb-4">Did you meet?</h2>
              
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  <Label className="text-neutral-700">Leave a short note (optional)</Label>
                  <Textarea
                    value={meetingNote}
                    onChange={(e) => setMeetingNote(e.target.value)}
                    placeholder="Share your experience about this Randomate..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <CustomButton
                    variant="secondary"
                    onClick={() => handleConfirmMeeting(false)}
                  >
                    No
                  </CustomButton>
                  <CustomButton
                    onClick={() => handleConfirmMeeting(true)}
                  >
                    Yes
                  </CustomButton>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Animal Emoji Pool (hidden, for reference) */}
        <div className="hidden">
          {ANIMAL_EMOJIS.join(' ')}
        </div>
      </div>

      <TabBar active="home" onNavigate={onTabNavigate} />
    </div>
  );
}
