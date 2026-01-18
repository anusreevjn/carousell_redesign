import { Bell, Lock, Globe, Shield, HelpCircle, FileText, AlertCircle } from 'lucide-react';
import { useState } from 'react';

interface SettingsModalProps {
  isDark: boolean;
}

export function SettingsModal({ isDark }: SettingsModalProps) {
  const [notifications, setNotifications] = useState({
    messages: true,
    likes: true,
    follows: false,
    marketing: false,
  });

  const [privacy, setPrivacy] = useState({
    showProfile: true,
    showActivity: false,
    allowMessages: true,
  });

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Bell className="w-5 h-5 text-red-500" />
          <h3 className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}>
            Notifications
          </h3>
        </div>
        <div className="space-y-3">
          {Object.entries(notifications).map(([key, value]) => (
            <div
              key={key}
              className={`flex items-center justify-between p-3 rounded-lg border ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
              }`}
            >
              <span className={`font-medium capitalize ${isDark ? 'text-white' : 'text-black'}`}>
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <button
                onClick={() => setNotifications({ ...notifications, [key]: !value })}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  value ? 'bg-red-500' : isDark ? 'bg-white/20' : 'bg-black/20'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    value ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-5 h-5 text-red-500" />
          <h3 className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}>
            Privacy
          </h3>
        </div>
        <div className="space-y-3">
          {Object.entries(privacy).map(([key, value]) => (
            <div
              key={key}
              className={`flex items-center justify-between p-3 rounded-lg border ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
              }`}
            >
              <span className={`font-medium capitalize ${isDark ? 'text-white' : 'text-black'}`}>
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <button
                onClick={() => setPrivacy({ ...privacy, [key]: !value })}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  value ? 'bg-red-500' : isDark ? 'bg-white/20' : 'bg-black/20'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    value ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <Lock className="w-5 h-5 text-red-500" />
          <h3 className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}>
            Security
          </h3>
        </div>
        <div className="space-y-2">
          <button
            onClick={() => alert('Change password feature coming soon')}
            className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${
              isDark
                ? 'bg-white/5 border-white/10 hover:bg-white/10'
                : 'bg-black/5 border-black/10 hover:bg-black/10'
            }`}
          >
            <span className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>
              Change Password
            </span>
            <Lock className="w-4 h-4 text-red-500" />
          </button>
          <button
            onClick={() => alert('Two-factor authentication settings')}
            className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${
              isDark
                ? 'bg-white/5 border-white/10 hover:bg-white/10'
                : 'bg-black/5 border-black/10 hover:bg-black/10'
            }`}
          >
            <span className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>
              Two-Factor Authentication
            </span>
            <Shield className="w-4 h-4 text-red-500" />
          </button>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <Globe className="w-5 h-5 text-red-500" />
          <h3 className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}>
            Other
          </h3>
        </div>
        <div className="space-y-2">
          <button
            onClick={() => alert('Language: English')}
            className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${
              isDark
                ? 'bg-white/5 border-white/10 hover:bg-white/10'
                : 'bg-black/5 border-black/10 hover:bg-black/10'
            }`}
          >
            <span className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>
              Language
            </span>
            <span className={`text-sm ${isDark ? 'text-white/50' : 'text-black/50'}`}>
              English
            </span>
          </button>
          <button
            onClick={() => alert('Opening help center...')}
            className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${
              isDark
                ? 'bg-white/5 border-white/10 hover:bg-white/10'
                : 'bg-black/5 border-black/10 hover:bg-black/10'
            }`}
          >
            <span className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>
              Help Center
            </span>
            <HelpCircle className="w-4 h-4 text-red-500" />
          </button>
          <button
            onClick={() => alert('Opening privacy policy...')}
            className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${
              isDark
                ? 'bg-white/5 border-white/10 hover:bg-white/10'
                : 'bg-black/5 border-black/10 hover:bg-black/10'
            }`}
          >
            <span className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>
              Privacy Policy
            </span>
            <FileText className="w-4 h-4 text-red-500" />
          </button>
          <button
            onClick={() => alert('Opening terms of service...')}
            className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${
              isDark
                ? 'bg-white/5 border-white/10 hover:bg-white/10'
                : 'bg-black/5 border-black/10 hover:bg-black/10'
            }`}
          >
            <span className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>
              Terms of Service
            </span>
            <FileText className="w-4 h-4 text-red-500" />
          </button>
        </div>
      </div>

      <button
        onClick={() => {
          if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
            alert('Account deletion process initiated');
          }
        }}
        className="w-full flex items-center justify-center gap-2 p-3 rounded-lg bg-red-500/20 text-red-500 font-bold hover:bg-red-500/30 transition-colors"
      >
        <AlertCircle className="w-4 h-4" />
        Delete Account
      </button>
    </div>
  );
}
