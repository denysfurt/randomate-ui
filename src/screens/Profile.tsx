import React from 'react';
import { UserData } from './OnboardingQuestions';
import { CustomButton } from '../components/randomate/CustomButton';
import { CustomBadge } from '../components/randomate/CustomBadge';
import { TabBar } from '../components/TabBar';
import { LogOut } from 'lucide-react';

interface ProfileProps {
  userData: UserData;
  successfulMeets: number;
  onLogout: () => void;
  onTabNavigate: (tab: 'home' | 'profile') => void;
}

export function Profile({ userData, successfulMeets, onLogout, onTabNavigate }: ProfileProps) {
  return (
    <div className="min-h-screen bg-neutral-50 pb-24">
      <div className="px-6 py-8 max-w-md mx-auto">
        <div className="mb-6">
          <h1 className="text-neutral-900 mb-4">Profile</h1>
          <CustomBadge>Successful meets: {successfulMeets}</CustomBadge>
        </div>

        <div className="bg-white rounded-2xl border border-neutral-200 p-6 mb-6">
          <div className="flex flex-col gap-4">
            <div>
              <div className="text-sm text-neutral-500">Nickname</div>
              <div className="text-neutral-900">{userData.nickname}</div>
            </div>

            <div>
              <div className="text-sm text-neutral-500">Gender</div>
              <div className="text-neutral-900">{userData.gender}</div>
            </div>

            <div>
              <div className="text-sm text-neutral-500">Email (read-only)</div>
              <div className="text-neutral-900">user@example.com</div>
            </div>
          </div>
        </div>

        <button
          onClick={onLogout}
          className="w-full px-6 py-3 rounded-xl bg-white border-2 border-red-500 text-red-500 hover:bg-red-50 active:bg-red-100 transition-all flex items-center justify-center gap-2"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>

      <TabBar active="profile" onNavigate={onTabNavigate} />
    </div>
  );
}
