import { Upload, Image as ImageIcon } from 'lucide-react';

interface CreateModalProps {
  isDark: boolean;
  onClose: () => void;
}

export function CreateModal({ isDark, onClose }: CreateModalProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = (e.currentTarget.elements[0] as HTMLInputElement).value;
    console.log('Listing created with title:', title);
    alert('Listing posted successfully!');
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
          isDark
            ? 'border-white/20 hover:border-red-500/50 hover:bg-red-500/5'
            : 'border-black/20 hover:border-red-500/50 hover:bg-red-500/5'
        }`}
      >
        <ImageIcon className="w-8 h-8 mx-auto mb-2 text-red-500" />
        <p className={`font-bold text-sm ${isDark ? 'text-white' : 'text-black'}`}>
          Upload Photos
        </p>
        <p className={`text-xs ${isDark ? 'text-white/50' : 'text-black/50'}`}>
          Click to select or drag and drop
        </p>
      </div>

      <input
        type="text"
        placeholder="Title"
        required
        className={`w-full px-4 py-3 rounded-lg font-medium border ${
          isDark
            ? 'bg-white/5 border-white/20 text-white placeholder-white/50'
            : 'bg-black/5 border-black/20 text-black placeholder-black/50'
        } focus:outline-none focus:border-red-500`}
      />

      <textarea
        placeholder="Description"
        rows={3}
        className={`w-full px-4 py-3 rounded-lg font-medium border resize-none ${
          isDark
            ? 'bg-white/5 border-white/20 text-white placeholder-white/50'
            : 'bg-black/5 border-black/20 text-black placeholder-black/50'
        } focus:outline-none focus:border-red-500`}
      />

      <input
        type="number"
        placeholder="Price"
        required
        className={`w-full px-4 py-3 rounded-lg font-medium border ${
          isDark
            ? 'bg-white/5 border-white/20 text-white placeholder-white/50'
            : 'bg-black/5 border-black/20 text-black placeholder-black/50'
        } focus:outline-none focus:border-red-500`}
      />

      <button
        type="submit"
        className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        <Upload className="w-4 h-4" />
        Post Listing
      </button>
    </form>
  );
}
