import React, { useState } from 'react';
import { Mail, ArrowLeft } from 'lucide-react';
import { TextField } from '../randomate/TextField';
import { Button } from '../randomate/Button';
import { InlineAlert } from '../randomate/Toast';

export function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }
    
    setError('');
    setSubmitted(true);
  };

  const isValid = email && validateEmail(email);

  return (
    <div className="flex flex-col h-full p-6">
      <button className="flex items-center gap-2 text-gray-700 dark:text-gray-700 mb-8 min-h-[44px]">
        <ArrowLeft size={20} />
        Back
      </button>

      <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Mail size={28} className="text-primary" />
          </div>
          <h1 className="mb-2">Forgot password?</h1>
          <p className="text-gray-500">
            No worries, we'll send you reset instructions
          </p>
        </div>

        {submitted ? (
          <div className="space-y-6">
            <InlineAlert 
              type="success" 
              message={`We've sent a password reset link to ${email}. Please check your inbox.`}
            />
            <Button variant="secondary" onClick={() => setSubmitted(false)}>
              Send Again
            </Button>
            <Button variant="tertiary">
              Back to Sign In
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <TextField
              label="Email"
              type="email"
              placeholder="you@example.com"
              prefixIcon={Mail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={error}
            />

            <Button type="submit" variant="primary" disabled={!isValid}>
              Reset Password
            </Button>

            <Button variant="tertiary">
              Back to Sign In
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
