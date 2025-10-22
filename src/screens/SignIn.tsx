import React, { useState } from 'react';
import { TextField } from '../components/randomate/TextField';
import { PasswordField } from '../components/randomate/PasswordField';
import { CustomButton } from '../components/randomate/CustomButton';
import { InlineAlert } from '../components/randomate/InlineAlert';
import { GoogleButton } from '../components/randomate/GoogleButton';
import { Divider } from '../components/randomate/Divider';

interface SignInProps {
  onSignIn: () => void;
  onNavigateToSignUp: () => void;
}

export function SignIn({ onSignIn, onNavigateToSignUp }: SignInProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
    onSignIn();
  };

  const handleGoogleSignIn = () => {
    // Mock Google Sign-In - in production this would use Google OAuth
    setError('');
    onSignIn();
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <div className="flex-1 flex flex-col justify-center px-6 max-w-md mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-neutral-900 mb-2">Welcome back</h1>
          <p className="text-neutral-600">Sign in to continue your Randomate journey</p>
        </div>

        <div className="flex flex-col gap-4">
          {error && <InlineAlert message={error} />}
          
          <GoogleButton 
            onClick={handleGoogleSignIn}
            text="Sign in with Google"
          />

          <Divider text="OR" />
          
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="your@email.com"
          />

          <PasswordField
            label="Password"
            value={password}
            onChange={setPassword}
            placeholder="••••••••"
          />

          <button className="text-indigo-600 text-sm text-right">
            Forgot password?
          </button>

          <CustomButton onClick={handleSignIn} fullWidth>
            Sign in
          </CustomButton>

          <div className="text-center mt-4">
            <span className="text-neutral-600">Don't have an account? </span>
            <button 
              onClick={onNavigateToSignUp}
              className="text-indigo-600"
            >
              Create account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
