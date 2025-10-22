import React, { useState } from 'react';
import { Sun, Moon, ChevronLeft, ChevronRight } from 'lucide-react';

// Import all screens
import { StyleGuide } from './components/screens/StyleGuide';
import { SignIn } from './components/screens/SignIn';
import { SignUp } from './components/screens/SignUp';
import { ForgotPassword } from './components/screens/ForgotPassword';
import { Verify } from './components/screens/Verify';
import { Welcome } from './components/screens/Welcome';
import { OnboardingGoal } from './components/screens/OnboardingGoal';
import { OnboardingPreferences } from './components/screens/OnboardingPreferences';
import { PermissionsLocation } from './components/screens/PermissionsLocation';
import { PermissionsNotifications } from './components/screens/PermissionsNotifications';
import { HomeFind } from './components/screens/HomeFind';
import { Searching } from './components/screens/Searching';
import { MatchFound } from './components/screens/MatchFound';
import { MeetingDetails } from './components/screens/MeetingDetails';
import { MeetingNoShow } from './components/screens/MeetingNoShow';
import { RateFeedback } from './components/screens/RateFeedback';
import { ProfileSettings } from './components/screens/ProfileSettings';

const screens = [
  { name: 'Brand / Style Guide', component: StyleGuide },
  { name: 'Auth / Sign In', component: SignIn },
  { name: 'Auth / Sign Up', component: SignUp },
  { name: 'Auth / Forgot Password', component: ForgotPassword },
  { name: 'Auth / Verify', component: Verify },
  { name: 'Onboarding / Welcome', component: Welcome },
  { name: 'Onboarding / Goal', component: OnboardingGoal },
  { name: 'Onboarding / Preferences', component: OnboardingPreferences },
  { name: 'Permissions / Location', component: PermissionsLocation },
  { name: 'Permissions / Notifications', component: PermissionsNotifications },
  { name: 'Home / Find', component: HomeFind },
  { name: 'Searching…', component: Searching },
  { name: 'Match Found', component: MatchFound },
  { name: 'Meeting / Details', component: MeetingDetails },
  { name: 'Meeting / No-Show', component: MeetingNoShow },
  { name: 'Rate / Feedback', component: RateFeedback },
  { name: 'Profile / Settings', component: ProfileSettings }
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const CurrentComponent = screens[currentScreen].component;

  const nextScreen = () => {
    setCurrentScreen((prev) => (prev + 1) % screens.length);
  };

  const prevScreen = () => {
    setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        {/* Header Controls */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-white mb-2">Randomate UI Kit</h1>
            <p className="text-gray-400">
              {currentScreen + 1} / {screens.length}: {screens[currentScreen].name}
            </p>
          </div>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-[12px] transition-colors"
          >
            {isDark ? (
              <>
                <Sun size={20} />
                Light Mode
              </>
            ) : (
              <>
                <Moon size={20} />
                Dark Mode
              </>
            )}
          </button>
        </div>

        {/* iPhone Frame */}
        <div className="relative mx-auto" style={{ width: '390px' }}>
          {/* Phone Frame */}
          <div className="relative bg-gray-800 rounded-[48px] p-3 shadow-2xl">
            <div className={`relative bg-background rounded-[36px] overflow-hidden ${isDark ? 'dark' : ''}`}
              style={{ width: '390px', height: '844px' }}>
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-800 rounded-b-3xl z-50"></div>
              
              {/* Screen Content */}
              <div className="w-full h-full overflow-hidden">
                <CurrentComponent />
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevScreen}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full mr-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
            style={{ marginLeft: '-16px' }}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextScreen}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full ml-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
            style={{ marginRight: '-16px' }}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Screen Navigation */}
        <div className="mt-8 flex flex-wrap gap-2 justify-center">
          {screens.map((screen, index) => (
            <button
              key={index}
              onClick={() => setCurrentScreen(index)}
              className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                currentScreen === index
                  ? 'bg-primary text-white'
                  : 'bg-white/10 text-gray-400 hover:bg-white/20'
              }`}
            >
              {screen.name}
            </button>
          ))}
        </div>

        {/* Flow Description */}
        <div className="mt-8 bg-white/5 rounded-[16px] p-6 text-white">
          <h3 className="mb-4">User Flow</h3>
          <div className="space-y-2 text-sm text-gray-300">
            <p><span className="text-primary">→</span> <strong>Auth:</strong> Sign In → Sign Up → Forgot Password → Verify</p>
            <p><span className="text-primary">→</span> <strong>Onboarding:</strong> Welcome → Goal Selection → Preferences → Location Permission → Notifications</p>
            <p><span className="text-primary">→</span> <strong>Main Flow:</strong> Home/Find → Start Random Meet → Searching → Match Found → Accept</p>
            <p><span className="text-primary">→</span> <strong>Meeting:</strong> Meeting Details → Navigate → Complete or Report No-Show → Rate & Feedback</p>
            <p><span className="text-primary">→</span> <strong>Profile:</strong> View stats, manage preferences, safety settings, account options</p>
          </div>
        </div>

        {/* Design System Summary */}
        <div className="mt-6 bg-white/5 rounded-[16px] p-6 text-white">
          <h3 className="mb-4">Design System</h3>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-gray-400 mb-2">Colors</p>
              <div className="space-y-1 text-gray-300">
                <p>Primary: #8B5CF6</p>
                <p>Success: #22C55E</p>
                <p>Error: #EF4444</p>
                <p>Warning: #F59E0B</p>
              </div>
            </div>
            <div>
              <p className="text-gray-400 mb-2">Typography</p>
              <div className="space-y-1 text-gray-300">
                <p>H1: 28px / 36px</p>
                <p>H2: 22px / 28px</p>
                <p>Body: 16px / 24px</p>
                <p>Caption: 12px / 16px</p>
              </div>
            </div>
            <div>
              <p className="text-gray-400 mb-2">Spacing</p>
              <div className="space-y-1 text-gray-300">
                <p>8pt scale (8, 16, 24, 32...)</p>
                <p>Grid: 4 cols, 16px margins</p>
              </div>
            </div>
            <div>
              <p className="text-gray-400 mb-2">Components</p>
              <div className="space-y-1 text-gray-300">
                <p>Border radius: 16px</p>
                <p>Tap targets: ≥44px</p>
                <p>Icons: 24px outline</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
