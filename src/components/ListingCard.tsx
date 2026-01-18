import { MapPin, Clock } from 'lucide-react';
import { Listing, User } from '../types';

interface ListingCardProps {
  listing: Listing;
  user: User;
  isDark: boolean;
  onClick: () => void;
}

export function ListingCard({ listing, user, isDark, onClick }: ListingCardProps) {
  return (
    <div className="w-full snap-start snap-always cursor-pointer" onClick={onClick}>
      <div className="relative w-full hover:opacity-95 transition-opacity" style={{ height: 'calc(100vh - 120px)' }}>
        <img
          src={listing.image}
          alt={listing.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={user.avatar}
              alt={user.username}
              className="w-10 h-10 rounded-full border-2 border-white shadow-lg"
            />
            <span className="text-white font-bold text-sm tracking-tight drop-shadow-lg">
              {user.username}
            </span>
          </div>
          <div className="flex items-center gap-2 text-white/90 text-xs">
            <Clock className="w-3.5 h-3.5" />
            <span className="drop-shadow-lg">{listing.timeAgo}</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="space-y-2">
            <div className="text-red-500 font-black text-4xl tracking-tight drop-shadow-2xl">
              ${listing.price.toLocaleString()}
            </div>
            <h2 className="text-white font-bold text-xl tracking-tight drop-shadow-lg line-clamp-2">
              {listing.title}
            </h2>
            <div className="flex items-center gap-1.5 text-white/90">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium tracking-tight drop-shadow-lg">
                {listing.location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
