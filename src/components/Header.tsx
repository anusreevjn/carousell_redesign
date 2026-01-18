import { Search, Heart, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Modal } from './Modal';
import { SearchModal } from './SearchModal';
import { MessagesModal } from './MessagesModal';
import { FavoritesModal } from './FavoritesModal';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onSearch?: (query: string) => void;
}

export function Header({ isDark, onToggleTheme, onSearch }: HeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [messagesOpen, setMessagesOpen] = useState(false);
  const [favoritesOpen, setFavoritesOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 ${
          isDark ? 'bg-black border-white/10' : 'bg-white border-black/10'
        } border-b backdrop-blur-sm`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <h1
            className={`text-2xl font-black tracking-tighter ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
            Carousell
          </h1>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              className={`p-2 rounded-full transition-all ${
                isDark ? 'hover:bg-white/10' : 'hover:bg-black/5'
              } active:scale-95`}
              aria-label="Search"
            >
              <Search className={`w-5 h-5 ${isDark ? 'text-white' : 'text-black'}`} />
            </button>
            <button
              onClick={() => setMessagesOpen(true)}
              className={`p-2 rounded-full transition-all relative ${
                isDark ? 'hover:bg-white/10' : 'hover:bg-black/5'
              } active:scale-95`}
              aria-label="Messages"
            >
              <MessageCircle className={`w-5 h-5 ${isDark ? 'text-white' : 'text-black'}`} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <button
              onClick={() => setFavoritesOpen(true)}
              className={`p-2 rounded-full transition-all ${
                isDark ? 'hover:bg-white/10' : 'hover:bg-black/5'
              } active:scale-95`}
              aria-label="Favorites"
            >
              <Heart className={`w-5 h-5 ${isDark ? 'text-white' : 'text-black'}`} />
            </button>
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          </div>
        </div>
      </header>

      <Modal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        title="Search"
        isDark={isDark}
      >
        <SearchModal
          isDark={isDark}
          onSearch={(query) => {
            onSearch?.(query);
            setSearchOpen(false);
          }}
        />
      </Modal>

      <Modal
        isOpen={messagesOpen}
        onClose={() => setMessagesOpen(false)}
        title="Messages"
        isDark={isDark}
      >
        <MessagesModal isDark={isDark} />
      </Modal>

      <Modal
        isOpen={favoritesOpen}
        onClose={() => setFavoritesOpen(false)}
        title="Favorites"
        isDark={isDark}
      >
        <FavoritesModal isDark={isDark} />
      </Modal>
    </>
  );
}
