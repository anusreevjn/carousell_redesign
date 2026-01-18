import { Edit, Trash2, Eye, Clock, TrendingUp } from 'lucide-react';

interface MyListingsModalProps {
  isDark: boolean;
}

export function MyListingsModal({ isDark }: MyListingsModalProps) {
  const myListings = [
    {
      id: '1',
      title: 'iPhone 13 Pro - Excellent Condition',
      price: 899,
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=100',
      status: 'active',
      views: 234,
      likes: 45,
      posted: '2h ago',
    },
    {
      id: '2',
      title: 'Sony WH-1000XM4 Headphones',
      price: 650,
      image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=100',
      status: 'active',
      views: 189,
      likes: 32,
      posted: '4h ago',
    },
    {
      id: '3',
      title: 'Vintage Leather Jacket',
      price: 45,
      image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=100',
      status: 'sold',
      views: 456,
      likes: 89,
      posted: '1w ago',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4 p-4 rounded-lg bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20">
        <div className="text-center">
          <p className="text-red-500 font-black text-2xl">{myListings.filter(l => l.status === 'active').length}</p>
          <p className={`text-xs mt-1 ${isDark ? 'text-white/70' : 'text-black/70'}`}>Active</p>
        </div>
        <div className="text-center">
          <p className="text-red-500 font-black text-2xl">{myListings.filter(l => l.status === 'sold').length}</p>
          <p className={`text-xs mt-1 ${isDark ? 'text-white/70' : 'text-black/70'}`}>Sold</p>
        </div>
        <div className="text-center">
          <p className="text-red-500 font-black text-2xl">{myListings.length}</p>
          <p className={`text-xs mt-1 ${isDark ? 'text-white/70' : 'text-black/70'}`}>Total</p>
        </div>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {myListings.map((listing) => (
          <div
            key={listing.id}
            className={`p-4 rounded-lg border transition-colors ${
              isDark
                ? 'bg-white/5 border-white/10 hover:bg-white/10'
                : 'bg-black/5 border-black/10 hover:bg-black/10'
            }`}
          >
            <div className="flex gap-3">
              <img
                src={listing.image}
                alt={listing.title}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className={`font-bold text-sm line-clamp-1 ${isDark ? 'text-white' : 'text-black'}`}>
                      {listing.title}
                    </h3>
                    <p className="text-red-500 font-black text-lg">${listing.price}</p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-bold ${
                      listing.status === 'active'
                        ? 'bg-green-500/20 text-green-500'
                        : 'bg-gray-500/20 text-gray-500'
                    }`}
                  >
                    {listing.status.toUpperCase()}
                  </span>
                </div>

                <div className="flex items-center gap-3 mt-2 text-xs">
                  <div className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-red-500" />
                    <span className={isDark ? 'text-white/70' : 'text-black/70'}>{listing.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-red-500" />
                    <span className={isDark ? 'text-white/70' : 'text-black/70'}>{listing.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-red-500" />
                    <span className={isDark ? 'text-white/70' : 'text-black/70'}>{listing.posted}</span>
                  </div>
                </div>

                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => alert(`Editing: ${listing.title}`)}
                    className={`flex-1 flex items-center justify-center gap-1 py-2 px-3 rounded-lg text-xs font-bold transition-colors ${
                      isDark
                        ? 'bg-white/10 text-white hover:bg-white/20'
                        : 'bg-black/10 text-black hover:bg-black/20'
                    }`}
                  >
                    <Edit className="w-3.5 h-3.5" />
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to delete this listing?')) {
                        alert('Listing deleted');
                      }
                    }}
                    className="flex-1 flex items-center justify-center gap-1 py-2 px-3 rounded-lg text-xs font-bold bg-red-500/20 text-red-500 hover:bg-red-500/30 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
