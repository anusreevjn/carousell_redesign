import { Heart, Share2, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { Listing, User } from '../types';

interface ListingDetailModalProps {
  listing: Listing;
  user: User;
  isDark: boolean;
  onClose: () => void;
}

export function ListingDetailModal({
  listing,
  user,
  isDark,
  onClose,
}: ListingDetailModalProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [message, setMessage] = useState('');

  const handleContact = () => {
    if (message.trim()) {
      alert(`Message sent to ${user.username}: "${message}"`);
      setMessage('');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={`relative rounded-t-3xl w-full max-h-[85vh] overflow-y-auto ${
          isDark ? 'bg-black' : 'bg-white'
        }`}
      >
        <div className="sticky top-0 flex items-center justify-between p-4 border-b border-white/10">
          <h2 className={`text-lg font-black ${isDark ? 'text-white' : 'text-black'}`}>
            Listing Details
          </h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-full transition-colors ${
              isDark ? 'hover:bg-white/10' : 'hover:bg-black/5'
            }`}
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-6">
          <img
            src={listing.image}
            alt={listing.title}
            className="w-full h-48 rounded-xl object-cover"
          />

          <div className="space-y-4">
            <div>
              <p className="text-red-500 font-black text-3xl">${listing.price.toLocaleString()}</p>
              <h3 className={`font-bold text-xl mt-2 ${isDark ? 'text-white' : 'text-black'}`}>
                {listing.title}
              </h3>
            </div>

            <div className="flex items-center gap-4">
              <img
                src={user.avatar}
                alt={user.username}
                className="w-14 h-14 rounded-full"
              />
              <div>
                <p className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                  {user.username}
                </p>
                <p className={`text-sm ${isDark ? 'text-white/50' : 'text-black/50'}`}>
                  Seller
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                <span className={isDark ? 'text-white/70' : 'text-black/70'}>
                  {listing.location}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-red-500" />
                <span className={isDark ? 'text-white/70' : 'text-black/70'}>
                  Posted {listing.timeAgo}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className={`text-sm mb-3 ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                Item Description
              </p>
              <p className={`leading-relaxed ${isDark ? 'text-white/90' : 'text-black/90'}`}>
                This is a high-quality item in excellent condition. Perfect for anyone looking for
                quality and value. Feel free to reach out with any questions!
              </p>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-bold transition-colors active:scale-95 ${
                  isFavorite
                    ? 'bg-red-500 text-white'
                    : isDark
                      ? 'bg-white/10 text-white hover:bg-white/20'
                      : 'bg-black/10 text-black hover:bg-black/20'
                }`}
              >
                <Heart className="w-5 h-5" fill={isFavorite ? 'currentColor' : 'none'} />
                Save
              </button>
              <button className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-bold transition-colors active:scale-95 ${
                isDark
                  ? 'bg-white/10 text-white hover:bg-white/20'
                  : 'bg-black/10 text-black hover:bg-black/20'
              }`}>
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>

            <div className="space-y-3 pt-4">
              <label className={`text-sm font-bold block ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                Message Seller
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi, is this still available?"
                className={`w-full px-4 py-3 rounded-lg border resize-none ${
                  isDark
                    ? 'bg-white/5 border-white/20 text-white placeholder-white/50'
                    : 'bg-black/5 border-black/20 text-black placeholder-black/50'
                } focus:outline-none focus:border-red-500`}
                rows={3}
              />
              <button
                onClick={handleContact}
                disabled={!message.trim()}
                className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-500/50 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 active:scale-95"
              >
                <Send className="w-4 h-4" />
                Contact Seller
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
