import { LogOut, Settings, ShoppingBag, BarChart3, User as UserIcon } from 'lucide-react';

interface ProfileModalProps {
  isDark: boolean;
  onNavigate: (view: 'account' | 'listings' | 'analytics' | 'settings') => void;
}

export function ProfileModal({ isDark, onNavigate }: ProfileModalProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4 pb-4 border-b border-white/10">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
          alt="Profile"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className={`font-black text-lg ${isDark ? 'text-white' : 'text-black'}`}>
            Your Name
          </h3>
          <p className={`text-sm ${isDark ? 'text-white/50' : 'text-black/50'}`}>
            @yourprofile
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center py-4">
        <div>
          <p className="text-red-500 font-black text-xl">12</p>
          <p className={`text-xs ${isDark ? 'text-white/70' : 'text-black/70'}`}>
            Listings
          </p>
        </div>
        <div>
          <p className="text-red-500 font-black text-xl">4.8</p>
          <p className={`text-xs ${isDark ? 'text-white/70' : 'text-black/70'}`}>
            Rating
          </p>
        </div>
        <div>
          <p className="text-red-500 font-black text-xl">89</p>
          <p className={`text-xs ${isDark ? 'text-white/70' : 'text-black/70'}`}>
            Followers
          </p>
        </div>
      </div>

      <div className="space-y-2 pt-4 border-t border-white/10">
        <button
          onClick={() => onNavigate('account')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors active:scale-95 ${
            isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'
          }`}
        >
          <UserIcon className="w-5 h-5 text-red-500" />
          <span className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}>My Account</span>
        </button>
        <button
          onClick={() => onNavigate('listings')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors active:scale-95 ${
            isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'
          }`}
        >
          <ShoppingBag className="w-5 h-5 text-red-500" />
          <span className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}>My Listings</span>
        </button>
        <button
          onClick={() => onNavigate('analytics')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors active:scale-95 ${
            isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'
          }`}
        >
          <BarChart3 className="w-5 h-5 text-red-500" />
          <span className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}>Analytics</span>
        </button>
        <button
          onClick={() => onNavigate('settings')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors active:scale-95 ${
            isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'
          }`}
        >
          <Settings className="w-5 h-5 text-red-500" />
          <span className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}>Settings</span>
        </button>
        <button
          onClick={() => alert('Signing out...')}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 font-bold hover:bg-red-500/10 transition-colors active:scale-95"
        >
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </div>
  );
}
