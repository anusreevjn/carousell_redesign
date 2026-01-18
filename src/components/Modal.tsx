import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  isDark: boolean;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, isDark, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={`relative rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] flex flex-col ${
          isDark ? 'bg-black border border-white/10' : 'bg-white border border-black/10'
        }`}
      >
        <div className={`flex-shrink-0 flex items-center justify-between p-5 border-b ${isDark ? 'border-white/10' : 'border-black/10'}`}>
          <h2
            className={`text-lg font-black tracking-tight ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
            {title}
          </h2>
          <button
            onClick={onClose}
            className={`p-1 rounded-full transition-colors active:scale-95 ${
              isDark ? 'hover:bg-white/10' : 'hover:bg-black/5'
            }`}
          >
            <X className={`w-5 h-5 ${isDark ? 'text-white' : 'text-black'}`} />
          </button>
        </div>
        <div className="flex-1 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
