import React, { useState } from 'react';
import { TextField } from '../components/randomate/TextField';
import { CustomButton } from '../components/randomate/CustomButton';
import { Label } from '../components/ui/label';

interface OnboardingQuestionsProps {
  onComplete: (userData: UserData) => void;
}

export interface UserData {
  nickname: string;
  gender: string;
  craziness: string;
  budget: number;
}

export function OnboardingQuestions({ onComplete }: OnboardingQuestionsProps) {
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState('');

  const isValid = nickname && gender;

  const handleComplete = () => {
    if (isValid) {
      onComplete({
        nickname,
        gender,
        craziness: 'Crazy',
        budget: 500
      });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 pb-24">
      <div className="px-6 py-8 max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-neutral-900 mb-2">Tell us about yourself</h1>
          <p className="text-neutral-600">Help us find your perfect Randomate</p>
        </div>

        <div className="flex flex-col gap-5">
          <TextField
            label="Nickname"
            value={nickname}
            onChange={setNickname}
            placeholder="How should others call you?"
          />

          <div className="flex flex-col gap-2">
            <Label className="text-neutral-700">Gender</Label>
            <div className="flex flex-wrap gap-2">
              {['Male', 'Female', 'Non-binary', 'Other'].map((g) => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  className={`px-4 py-2 rounded-xl border-2 transition-all ${
                    gender === g
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white text-neutral-700 border-neutral-300'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <CustomButton 
            onClick={handleComplete} 
            disabled={!isValid}
            fullWidth
          >
            Finish onboarding
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
