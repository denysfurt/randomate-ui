import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';
import { TextField } from '../randomate/TextField';
import { Button } from '../randomate/Button';
import { Checkbox } from '../ui/checkbox';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};
    
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!validateEmail(email)) newErrors.email = 'Invalid email format';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    
    setErrors(newErrors);
  };

  const isValid = name && email && password && validateEmail(email) && password.length >= 8 && agreedToTerms;

  return (
    <div className="flex flex-col h-full p-6">
      <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-[20px] mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl">🎲</span>
          </div>
          <h1 className="mb-2">Create account</h1>
          <p className="text-gray-500">Join Randomate today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            label="Full Name"
            type="text"
            placeholder="John Doe"
            prefixIcon={User}
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors.name}
          />

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
            placeholder="At least 8 characters"
            prefixIcon={Lock}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            helper="Must be at least 8 characters"
          />

          <div className="flex items-start gap-3 py-2">
            <Checkbox
              id="terms"
              checked={agreedToTerms}
              onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
              className="mt-1"
            />
            <label htmlFor="terms" className="text-sm text-gray-700 dark:text-gray-700 flex-1">
              I agree to the{' '}
              <button type="button" className="text-primary hover:text-primary-hover">
                Terms of Service
              </button>{' '}
              and{' '}
              <button type="button" className="text-primary hover:text-primary-hover">
                Privacy Policy
              </button>
            </label>
          </div>

          <div className="pt-2">
            <Button type="submit" variant="primary" disabled={!isValid}>
              Create Account
            </Button>
          </div>
        </form>

        <p className="text-center text-gray-500 mt-6">
          Already have an account?{' '}
          <button className="text-primary hover:text-primary-hover">
            Sign in
          </button>
        </p>
      </div>

      <p className="caption text-center text-gray-500 mt-6">
        Randomate is not intended for collecting sensitive personal information.
      </p>
    </div>
  );
}
