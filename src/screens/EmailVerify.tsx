import React from 'react';
import { CustomButton } from '../components/randomate/CustomButton';
import { Mail } from 'lucide-react';

interface EmailVerifyProps {
  email: string;
  onContinue: () => void;
}

export function EmailVerify({ email, onContinue }: EmailVerifyProps) {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <div className="flex-1 flex flex-col justify-center px-6 max-w-md mx-auto w-full text-center">
        <div className="mb-8 flex flex-col items-center">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
            <Mail size={40} className="text-indigo-600" />
          </div>
          <h1 className="text-neutral-900 mb-2">Check your email</h1>
          <p className="text-neutral-600">
            We sent a confirmation link to <span className="text-neutral-900">{email}</span>
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <CustomButton onClick={onContinue} fullWidth>
            Open mail app
          </CustomButton>
          <CustomButton variant="secondary" fullWidth>
            Resend link
          </CustomButton>
          <CustomButton variant="tertiary" fullWidth>
            Change email
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
