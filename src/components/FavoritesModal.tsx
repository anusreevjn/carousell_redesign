import { Heart, Trash2 } from 'lucide-react';

interface Favorite {
  id: string;
  title: string;
  price: number;
  image: string;
  savedTime: string;
}

interface FavoritesModalProps {
  isDark: boolean;
}

export function FavoritesModal({ isDark }: FavoritesModalProps) {
  const favorites: Favorite[] = [
    {
      id: '1',
      title: 'iPhone 13 Pro - Excellent Condition',
      price: 899,
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=100',
      savedTime: '2d ago',
    },
    {
      id: '2',
      title: 'MacBook Air M1 - Like New',
      price: 1200,
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=100',
      savedTime: '5d ago',
    },
    {
      id: '3',
      title: 'Nike Air Jordan 1 Retro',
      price: 180,
      image: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=100',
      savedTime: '1w ago',
    },
  ];

  return (
    <div className="space-y-3 max-h-96 overflow-y-auto">
      {favorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-8">
          <Heart className="w-12 h-12 text-white/20 mb-3" />
          <p className={`text-sm ${isDark ? 'text-white/50' : 'text-black/50'}`}>
            No favorites yet
          </p>
        </div>
      ) : (
        favorites.map((fav) => (
          <div
            key={fav.id}
            onClick={() => alert(`Viewing: ${fav.title}`)}
            className={`flex gap-3 p-3 rounded-lg cursor-pointer transition-colors active:scale-95 ${
              isDark
                ? 'hover:bg-white/10 bg-white/5 border border-white/10'
                : 'hover:bg-black/10 bg-black/5 border border-black/10'
            }`}
          >
            <img
              src={fav.image}
              alt={fav.title}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <p className={`font-bold text-sm line-clamp-2 ${isDark ? 'text-white' : 'text-black'}`}>
                {fav.title}
              </p>
              <p className="text-red-500 font-black text-lg">${fav.price}</p>
              <p className={`text-xs ${isDark ? 'text-white/50' : 'text-black/50'}`}>
                Saved {fav.savedTime}
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                alert('Removed from favorites');
              }}
              className={`p-2 rounded-lg transition-colors active:scale-95 ${
                isDark ? 'hover:bg-white/10' : 'hover:bg-black/5'
              }`}
            >
              <Trash2 className="w-4 h-4 text-red-500" />
            </button>
          </div>
        ))
      )}
    </div>
  );
}
