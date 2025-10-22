import React, { useState } from 'react';
import { SignIn } from './screens/SignIn';
import { SignUp } from './screens/SignUp';
import { EmailVerify } from './screens/EmailVerify';
import { OnboardingQuestions, UserData } from './screens/OnboardingQuestions';
import { Profile } from './screens/Profile';
import { Home } from './screens/Home';
import { Toaster } from './components/ui/sonner';

type Screen = 
  | 'signin' 
  | 'signup' 
  | 'emailverify' 
  | 'onboarding' 
  | 'home' 
  | 'profile';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('signin');
  const [userEmail, setUserEmail] = useState('');
  const [userData, setUserData] = useState<UserData | null>(null);
  const [successfulMeets, setSuccessfulMeets] = useState(0);

  const handleSignIn = () => {
    // For demo purposes, skip to home with mock data
    setUserData({
      nickname: 'JD',
      gender: 'Male',
      craziness: 'Crazy',
      budget: 500
    });
    setCurrentScreen('home');
  };

  const handleSignUp = (email: string) => {
    setUserEmail(email);
    setCurrentScreen('emailverify');
  };

  const handleEmailVerified = () => {
    setCurrentScreen('onboarding');
  };

  const handleOnboardingComplete = (data: UserData) => {
    setUserData(data);
    setCurrentScreen('profile');
  };

  const handleLogout = () => {
    setUserData(null);
    setSuccessfulMeets(0);
    setCurrentScreen('signin');
  };

  const handleTabNavigate = (tab: 'home' | 'profile') => {
    setCurrentScreen(tab);
  };

  const handleMeetingConfirmed = () => {
    setSuccessfulMeets(prev => prev + 1);
  };

  const handleUpdateUserData = (data: Partial<UserData>) => {
    if (userData) {
      setUserData({ ...userData, ...data });
    }
  };

  return (
    <div className="min-h-screen">
      {currentScreen === 'signin' && (
        <SignIn
          onSignIn={handleSignIn}
          onNavigateToSignUp={() => setCurrentScreen('signup')}
        />
      )}

      {currentScreen === 'signup' && (
        <SignUp
          onSignUp={handleSignUp}
          onNavigateToSignIn={() => setCurrentScreen('signin')}
        />
      )}

      {currentScreen === 'emailverify' && (
        <EmailVerify
          email={userEmail}
          onContinue={handleEmailVerified}
        />
      )}

      {currentScreen === 'onboarding' && (
        <OnboardingQuestions
          onComplete={handleOnboardingComplete}
        />
      )}

      {currentScreen === 'profile' && userData && (
        <Profile
          userData={userData}
          successfulMeets={successfulMeets}
          onLogout={handleLogout}
          onTabNavigate={handleTabNavigate}
        />
      )}

      {currentScreen === 'home' && userData && (
        <Home
          userData={userData}
          successfulMeets={successfulMeets}
          onTabNavigate={handleTabNavigate}
          onMeetingConfirmed={handleMeetingConfirmed}
          onUpdateUserData={handleUpdateUserData}
        />
      )}

      <Toaster />
    </div>
  );
}
