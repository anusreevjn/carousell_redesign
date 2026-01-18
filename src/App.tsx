import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { ListingCard } from './components/ListingCard';
import { ListingDetailModal } from './components/ListingDetailModal';
import { mockListings, mockUsers } from './data/mockData';
import type { Listing } from './types';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [searchActive, setSearchActive] = useState(false);
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const filteredListings = searchQuery.trim()
    ? mockListings.filter(
        (listing) =>
          listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          listing.location.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : mockListings;

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSearchActive(true);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSearchActive(false);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black' : 'bg-white'}`}>
      <Header
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        onSearch={handleSearch}
      />

      <main className="pt-[60px] pb-[60px]">
        {searchActive && (
          <div
            className={`fixed top-20 left-4 right-4 z-40 p-4 rounded-lg ${
              isDark ? 'bg-white/10 border border-white/20' : 'bg-black/5 border border-black/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <p className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                Found {filteredListings.length} result{filteredListings.length !== 1 ? 's' : ''}
              </p>
              <button
                onClick={handleClearSearch}
                className="text-red-500 font-bold hover:text-red-600"
              >
                Clear
              </button>
            </div>
          </div>
        )}

        <div className={`h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide ${
          searchActive ? 'mt-16' : ''
        }`}>
          {filteredListings.length === 0 ? (
            <div
              className={`h-full flex flex-col items-center justify-center ${
                isDark ? 'text-white/50' : 'text-black/50'
              }`}
            >
              <p className="text-lg font-bold mb-2">No listings found</p>
              <p className="text-sm">Try searching for something else</p>
            </div>
          ) : (
            filteredListings.map((listing) => {
              const user = mockUsers.find((u) => u.id === listing.userId)!;
              return (
                <ListingCard
                  key={listing.id}
                  listing={listing}
                  user={user}
                  isDark={isDark}
                  onClick={() => setSelectedListing(listing)}
                />
              );
            })
          )}
        </div>
      </main>

      <BottomNav isDark={isDark} />

      {selectedListing && (
        <ListingDetailModal
          listing={selectedListing}
          user={mockUsers.find((u) => u.id === selectedListing.userId)!}
          isDark={isDark}
          onClose={() => setSelectedListing(null)}
        />
      )}
    </div>
  );
}

export default App;
