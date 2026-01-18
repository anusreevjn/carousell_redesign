import { Search } from 'lucide-react';

interface SearchModalProps {
  isDark: boolean;
  onSearch: (query: string) => void;
}

export function SearchModal({ isDark, onSearch }: SearchModalProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = (e.currentTarget.elements[0] as HTMLInputElement).value;
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search listings..."
          className={`w-full px-4 py-3 rounded-lg font-medium border ${
            isDark
              ? 'bg-white/5 border-white/20 text-white placeholder-white/50'
              : 'bg-black/5 border-black/20 text-black placeholder-black/50'
          } focus:outline-none focus:border-red-500`}
          autoFocus
        />
        <Search className="absolute right-3 top-3 w-5 h-5 text-red-500" />
      </div>
      <div className="text-sm text-gray-500">
        Recent searches: iPhone, MacBook, Nike
      </div>
      <button
        type="submit"
        className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition-colors"
      >
        Search
      </button>
    </form>
  );
}
