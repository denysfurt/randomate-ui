import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { OTPInput } from '../randomate/OTPInput';
import { Button } from '../randomate/Button';

export function Verify() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleVerify = () => {
    if (otp.length !== 6) {
      setError('Please enter the complete 6-digit code');
      return;
    }
    setError('');
    // Verify logic here
  };

  return (
    <div className="flex flex-col h-full p-6">
      <button className="flex items-center gap-2 text-gray-700 dark:text-gray-700 mb-8 min-h-[44px]">
        <ArrowLeft size={20} />
        Back
      </button>

      <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl">📧</span>
          </div>
          <h1 className="mb-2">Check your email</h1>
          <p className="text-gray-500">
            We sent a 6-digit code to{' '}
            <span className="text-gray-900 dark:text-gray-900">john@example.com</span>
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <OTPInput length={6} value={otp} onChange={setOtp} />
            {error && (
              <p className="mt-3 caption text-error text-center">{error}</p>
            )}
          </div>

          <Button 
            variant="primary" 
            disabled={otp.length !== 6}
            onClick={handleVerify}
          >
            Verify Code
          </Button>

          <p className="text-center text-gray-500">
            Didn't receive the code?{' '}
            <button className="text-primary hover:text-primary-hover">
              Resend
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
