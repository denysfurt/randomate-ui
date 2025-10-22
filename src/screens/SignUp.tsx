import React, { useState } from 'react';
import { TextField } from '../components/randomate/TextField';
import { PasswordField } from '../components/randomate/PasswordField';
import { CustomButton } from '../components/randomate/CustomButton';
import { InlineAlert } from '../components/randomate/InlineAlert';
import { GoogleButton } from '../components/randomate/GoogleButton';
import { Divider } from '../components/randomate/Divider';

interface SignUpProps {
  onSignUp: (email: string) => void;
  onNavigateToSignIn: () => void;
}

export function SignUp({ onSignUp, onNavigateToSignIn }: SignUpProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validatePassword = (pwd: string) => {
    if (pwd.length < 8) return false;
    if (!/[a-zA-Z]/.test(pwd)) return false;
    if (!/\d/.test(pwd)) return false;
    return true;
  };

  const handleSignUp = () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters with at least 1 letter and 1 digit');
      return;
    }
    setError('');
    onSignUp(email);
  };

  const handleGoogleSignUp = () => {
    // Mock Google Sign-Up - in production this would use Google OAuth
    setError('');
    onSignUp('google-user@example.com');
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <div className="flex-1 flex flex-col justify-center px-6 max-w-md mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-neutral-900 mb-2">Create your account</h1>
          <p className="text-neutral-600">Join Randomate and meet new people</p>
        </div>

        <div className="flex flex-col gap-4">
          {error && <InlineAlert message={error} />}
          
          <GoogleButton 
            onClick={handleGoogleSignUp}
            text="Sign up with Google"
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
            placeholder="Min 8 chars, ≥1 letter & ≥1 digit"
          />

          <CustomButton onClick={handleSignUp} fullWidth>
            Create account
          </CustomButton>

          <div className="text-center mt-4 text-sm text-neutral-500">
            By creating an account, you agree to our{' '}
            <button className="text-indigo-600">Terms</button> and{' '}
            <button className="text-indigo-600">Privacy Policy</button>
          </div>

          <div className="text-center mt-2">
            <span className="text-neutral-600">Already have an account? </span>
            <button 
              onClick={onNavigateToSignIn}
              className="text-indigo-600"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
