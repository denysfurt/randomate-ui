import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { TextField } from '../randomate/TextField';
import { Button } from '../randomate/Button';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};
    
    if (!email) newErrors.email = 'Email is required';
    else if (!validateEmail(email)) newErrors.email = 'Invalid email format';
    
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    
    setErrors(newErrors);
  };

  const isValid = email && password && validateEmail(email) && password.length >= 8;

  return (
    <div className="flex flex-col h-full p-6">
      <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-[20px] mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl">🎲</span>
          </div>
          <h1 className="mb-2">Welcome back</h1>
          <p className="text-gray-500">Sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            label="Email"
            type="email"
            placeholder="you@example.com"
            prefixIcon={Mail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />

          <TextField
            label="Password"
            isPassword
            placeholder="Enter your password"
            prefixIcon={Lock}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />

          <button
            type="button"
            className="text-primary hover:text-primary-hover text-sm text-right w-full"
          >
            Forgot password?
          </button>

          <div className="pt-2">
            <Button type="submit" variant="primary" disabled={!isValid}>
              Sign In
            </Button>
          </div>
        </form>

        <p className="text-center text-gray-500 mt-6">
          Don't have an account?{' '}
          <button className="text-primary hover:text-primary-hover">
            Sign up
          </button>
        </p>
      </div>

      <p className="caption text-center text-gray-500 mt-6">
        By continuing, you agree to our{' '}
        <button className="text-primary">Terms</button> and{' '}
        <button className="text-primary">Privacy Policy</button>
      </p>
    </div>
  );
}
