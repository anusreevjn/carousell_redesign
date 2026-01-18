import { Camera, Mail, User as UserIcon, MapPin, Phone, Check } from 'lucide-react';
import { useState } from 'react';

interface AccountModalProps {
  isDark: boolean;
  onClose: () => void;
}

export function AccountModal({ isDark, onClose }: AccountModalProps) {
  const [formData, setFormData] = useState({
    name: 'Your Name',
    username: 'yourprofile',
    email: 'you@example.com',
    phone: '+65 9123 4567',
    location: 'Singapore',
    bio: 'Love finding great deals and selling quality items!',
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      onClose();
    }, 500);
  };

  return (
    <div className={`flex flex-col h-full ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className={`flex-shrink-0 flex flex-col items-center gap-3 p-5 pb-4 border-b ${isDark ? 'border-white/10' : 'border-black/10'}`}>
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <button
            className="absolute bottom-0 right-0 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all active:scale-95 shadow-lg"
            onClick={() => alert('Change photo feature coming soon!')}
            title="Change photo"
          >
            <Camera className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="text-center">
          <p className={`font-black text-sm ${isDark ? 'text-white' : 'text-black'}`}>
            {formData.name}
          </p>
          <p className={`text-xs ${isDark ? 'text-white/50' : 'text-black/50'}`}>
            @{formData.username}
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-5 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={`text-xs font-black mb-2 flex items-center gap-1.5 ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                <UserIcon className="w-3.5 h-3.5 text-red-500" />
                First Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-3 py-2.5 rounded-lg border text-sm transition-all ${
                  isDark
                    ? 'bg-white/5 border-white/15 text-white placeholder-white/30 focus:bg-white/10 focus:border-red-500/50'
                    : 'bg-black/5 border-black/15 text-black placeholder-black/30 focus:bg-black/10 focus:border-red-500/50'
                } focus:outline-none`}
              />
            </div>
            <div>
              <label className={`text-xs font-black mb-2 flex items-center gap-1.5 ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                <UserIcon className="w-3.5 h-3.5 text-red-500" />
                Username
              </label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className={`w-full px-3 py-2.5 rounded-lg border text-sm transition-all ${
                  isDark
                    ? 'bg-white/5 border-white/15 text-white placeholder-white/30 focus:bg-white/10 focus:border-red-500/50'
                    : 'bg-black/5 border-black/15 text-black placeholder-black/30 focus:bg-black/10 focus:border-red-500/50'
                } focus:outline-none`}
              />
            </div>
          </div>

          <div>
            <label className={`text-xs font-black mb-2 flex items-center gap-1.5 ${isDark ? 'text-white/60' : 'text-black/60'}`}>
              <Mail className="w-3.5 h-3.5 text-red-500" />
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full px-3 py-2.5 rounded-lg border text-sm transition-all ${
                isDark
                  ? 'bg-white/5 border-white/15 text-white placeholder-white/30 focus:bg-white/10 focus:border-red-500/50'
                  : 'bg-black/5 border-black/15 text-black placeholder-black/30 focus:bg-black/10 focus:border-red-500/50'
              } focus:outline-none`}
            />
          </div>

          <div>
            <label className={`text-xs font-black mb-2 flex items-center gap-1.5 ${isDark ? 'text-white/60' : 'text-black/60'}`}>
              <Phone className="w-3.5 h-3.5 text-red-500" />
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full px-3 py-2.5 rounded-lg border text-sm transition-all ${
                isDark
                  ? 'bg-white/5 border-white/15 text-white placeholder-white/30 focus:bg-white/10 focus:border-red-500/50'
                  : 'bg-black/5 border-black/15 text-black placeholder-black/30 focus:bg-black/10 focus:border-red-500/50'
              } focus:outline-none`}
            />
          </div>

          <div>
            <label className={`text-xs font-black mb-2 flex items-center gap-1.5 ${isDark ? 'text-white/60' : 'text-black/60'}`}>
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              Location
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className={`w-full px-3 py-2.5 rounded-lg border text-sm transition-all ${
                isDark
                  ? 'bg-white/5 border-white/15 text-white placeholder-white/30 focus:bg-white/10 focus:border-red-500/50'
                  : 'bg-black/5 border-black/15 text-black placeholder-black/30 focus:bg-black/10 focus:border-red-500/50'
              } focus:outline-none`}
            />
          </div>

          <div>
            <label className={`text-xs font-black mb-2 block ${isDark ? 'text-white/60' : 'text-black/60'}`}>
              Bio
            </label>
            <textarea
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              maxLength={160}
              className={`w-full px-3 py-2.5 rounded-lg border text-sm resize-none transition-all ${
                isDark
                  ? 'bg-white/5 border-white/15 text-white placeholder-white/30 focus:bg-white/10 focus:border-red-500/50'
                  : 'bg-black/5 border-black/15 text-black placeholder-black/30 focus:bg-black/10 focus:border-red-500/50'
              } focus:outline-none`}
              rows={2}
            />
            <p className={`text-xs mt-1 ${isDark ? 'text-white/40' : 'text-black/40'}`}>
              {formData.bio.length}/160
            </p>
          </div>
        </div>
      </div>

      <div className={`flex-shrink-0 border-t p-4 gap-3 flex ${isDark ? 'border-white/10 bg-black/50' : 'border-black/10 bg-white/50'}`}>
        <button
          onClick={() => onClose()}
          className={`flex-1 px-4 py-2.5 rounded-lg font-bold text-sm transition-all active:scale-95 ${
            isDark
              ? 'bg-white/10 text-white hover:bg-white/15'
              : 'bg-black/10 text-black hover:bg-black/15'
          }`}
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-red-500 hover:bg-red-600 text-white font-bold text-sm transition-all active:scale-95 disabled:opacity-75"
        >
          {isSaving ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Check className="w-4 h-4" />
              Save Changes
            </>
          )}
        </button>
      </div>
    </div>
  );
}
