import { Home, Search, PlusCircle, User } from 'lucide-react';
import { useState } from 'react';
import { Modal } from './Modal';
import { CreateModal } from './CreateModal';
import { ProfileModal } from './ProfileModal';
import { AccountModal } from './AccountModal';
import { MyListingsModal } from './MyListingsModal';
import { AnalyticsModal } from './AnalyticsModal';
import { SettingsModal } from './SettingsModal';

interface BottomNavProps {
  isDark: boolean;
}

export function BottomNav({ isDark }: BottomNavProps) {
  const [createOpen, setCreateOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [listingsOpen, setListingsOpen] = useState(false);
  const [analyticsOpen, setAnalyticsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const handleProfileNavigate = (view: 'account' | 'listings' | 'analytics' | 'settings') => {
    setProfileOpen(false);

    switch (view) {
      case 'account':
        setAccountOpen(true);
        break;
      case 'listings':
        setListingsOpen(true);
        break;
      case 'analytics':
        setAnalyticsOpen(true);
        break;
      case 'settings':
        setSettingsOpen(true);
        break;
    }
  };

  return (
    <>
      <nav
        className={`fixed bottom-0 left-0 right-0 z-50 ${
          isDark ? 'bg-black border-white/10' : 'bg-white border-black/10'
        } border-t backdrop-blur-sm`}
      >
        <div className="flex items-center justify-around px-4 py-3">
          <button
            onClick={() => setActiveTab('home')}
            className={`p-2 rounded-full transition-all active:scale-95 ${
              activeTab === 'home'
                ? isDark ? 'text-white bg-white/10' : 'text-black bg-black/10'
                : isDark ? 'text-white hover:bg-white/10' : 'text-black hover:bg-black/5'
            }`}
            aria-label="Home"
          >
            <Home className="w-6 h-6" />
          </button>
          <button
            onClick={() => setActiveTab('search')}
            className={`p-2 rounded-full transition-all active:scale-95 ${
              activeTab === 'search'
                ? isDark ? 'text-white bg-white/10' : 'text-black bg-black/10'
                : isDark ? 'text-white/60 hover:bg-white/10' : 'text-black/60 hover:bg-black/5'
            }`}
            aria-label="Search"
          >
            <Search className="w-6 h-6" />
          </button>
          <button
            onClick={() => setCreateOpen(true)}
            className="p-2 rounded-full bg-red-500 hover:bg-red-600 transition-all active:scale-95 shadow-lg hover:shadow-xl"
            aria-label="Create"
          >
            <PlusCircle className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => setProfileOpen(true)}
            className={`p-2 rounded-full transition-all active:scale-95 ${
              isDark ? 'text-white/60 hover:bg-white/10' : 'text-black/60 hover:bg-black/5'
            }`}
            aria-label="Profile"
          >
            <User className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <Modal
        isOpen={createOpen}
        onClose={() => setCreateOpen(false)}
        title="Create Listing"
        isDark={isDark}
      >
        <CreateModal isDark={isDark} onClose={() => setCreateOpen(false)} />
      </Modal>

      <Modal
        isOpen={profileOpen}
        onClose={() => setProfileOpen(false)}
        title="Profile"
        isDark={isDark}
      >
        <ProfileModal isDark={isDark} onNavigate={handleProfileNavigate} />
      </Modal>

      <Modal
        isOpen={accountOpen}
        onClose={() => setAccountOpen(false)}
        title="My Account"
        isDark={isDark}
      >
        <AccountModal isDark={isDark} onClose={() => setAccountOpen(false)} />
      </Modal>

      <Modal
        isOpen={listingsOpen}
        onClose={() => setListingsOpen(false)}
        title="My Listings"
        isDark={isDark}
      >
        <MyListingsModal isDark={isDark} />
      </Modal>

      <Modal
        isOpen={analyticsOpen}
        onClose={() => setAnalyticsOpen(false)}
        title="Analytics"
        isDark={isDark}
      >
        <AnalyticsModal isDark={isDark} />
      </Modal>

      <Modal
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        title="Settings"
        isDark={isDark}
      >
        <SettingsModal isDark={isDark} />
      </Modal>
    </>
  );
}
