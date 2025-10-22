import React from 'react';
import { 
  User, 
  MapPin, 
  Heart, 
  Bell, 
  Shield, 
  Settings, 
  LogOut,
  ChevronRight 
} from 'lucide-react';
import { NavBar } from '../randomate/NavBar';
import { Switch } from '../ui/switch';

export function ProfileSettings() {
  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-border">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-100 flex items-center justify-center">
            <User size={36} className="text-gray-500" />
          </div>
          <div>
            <h2 className="mb-1">Alex Johnson</h2>
            <p className="caption text-gray-500">Member since Oct 2024</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 p-6 border-b border-border">
          <div className="text-center">
            <h2 className="text-primary mb-1">24</h2>
            <p className="caption text-gray-500">Meets</p>
          </div>
          <div className="text-center">
            <h2 className="text-primary mb-1">4.8</h2>
            <p className="caption text-gray-500">Rating</p>
          </div>
          <div className="text-center">
            <h2 className="text-primary mb-1">92%</h2>
            <p className="caption text-gray-500">Show rate</p>
          </div>
        </div>

        {/* Preferences */}
        <div className="p-6 border-b border-border">
          <h3 className="mb-4">My Preferences</h3>
          <div className="space-y-2">
            <button className="w-full flex items-center justify-between p-3 hover:bg-gray-100 dark:hover:bg-gray-100 rounded-[12px] transition-colors min-h-[44px]">
              <span className="flex items-center gap-3">
                <Heart size={20} className="text-gray-500" />
                <span className="text-gray-900 dark:text-gray-900">Goals & Interests</span>
              </span>
              <ChevronRight size={20} className="text-gray-500" />
            </button>
            <button className="w-full flex items-center justify-between p-3 hover:bg-gray-100 dark:hover:bg-gray-100 rounded-[12px] transition-colors min-h-[44px]">
              <span className="flex items-center gap-3">
                <MapPin size={20} className="text-gray-500" />
                <span className="text-gray-900 dark:text-gray-900">Location & Radius</span>
              </span>
              <ChevronRight size={20} className="text-gray-500" />
            </button>
            <button className="w-full flex items-center justify-between p-3 hover:bg-gray-100 dark:hover:bg-gray-100 rounded-[12px] transition-colors min-h-[44px]">
              <span className="flex items-center gap-3">
                <Bell size={20} className="text-gray-500" />
                <span className="text-gray-900 dark:text-gray-900">Availability</span>
              </span>
              <ChevronRight size={20} className="text-gray-500" />
            </button>
          </div>
        </div>

        {/* Safety & Privacy */}
        <div className="p-6 border-b border-border">
          <h3 className="mb-4">Safety & Privacy</h3>
          <div className="space-y-2">
            <button className="w-full flex items-center justify-between p-3 hover:bg-gray-100 dark:hover:bg-gray-100 rounded-[12px] transition-colors min-h-[44px]">
              <span className="flex items-center gap-3">
                <Shield size={20} className="text-gray-500" />
                <span className="text-gray-900 dark:text-gray-900">Safety Center</span>
              </span>
              <ChevronRight size={20} className="text-gray-500" />
            </button>
            <button className="w-full flex items-center justify-between p-3 hover:bg-gray-100 dark:hover:bg-gray-100 rounded-[12px] transition-colors min-h-[44px]">
              <span className="flex items-center gap-3">
                <Settings size={20} className="text-gray-500" />
                <span className="text-gray-900 dark:text-gray-900">Account & Privacy</span>
              </span>
              <ChevronRight size={20} className="text-gray-500" />
            </button>
          </div>
        </div>

        {/* Settings */}
        <div className="p-6 border-b border-border">
          <h3 className="mb-4">Settings</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-900 dark:text-gray-900">Push notifications</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-900 dark:text-gray-900">Email updates</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-900 dark:text-gray-900">Show online status</span>
              <Switch />
            </div>
          </div>
        </div>

        {/* Logout */}
        <div className="p-6">
          <button className="w-full flex items-center justify-center gap-3 p-3 text-error hover:bg-error/10 rounded-[12px] transition-colors min-h-[44px]">
            <LogOut size={20} />
            <span>Log Out</span>
          </button>
        </div>

        <div className="px-6 pb-6">
          <p className="caption text-center text-gray-500">
            Version 1.0.0 • <button className="text-primary">Terms</button> •{' '}
            <button className="text-primary">Privacy</button>
          </p>
        </div>
      </div>

      {/* Nav Bar */}
      <NavBar active="profile" />
    </div>
  );
}
