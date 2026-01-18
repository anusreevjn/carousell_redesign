import { MessageCircle, Send } from 'lucide-react';

interface Message {
  id: string;
  user: string;
  avatar: string;
  message: string;
  time: string;
  unread?: boolean;
}

interface MessagesModalProps {
  isDark: boolean;
}

export function MessagesModal({ isDark }: MessagesModalProps) {
  const messages: Message[] = [
    {
      id: '1',
      user: 'john_sells',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=50',
      message: 'Is this still available?',
      time: '2m ago',
      unread: true,
    },
    {
      id: '2',
      user: 'tech_hunter',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50',
      message: 'Can you lower the price?',
      time: '1h ago',
    },
    {
      id: '3',
      user: 'vintage_finds',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50',
      message: 'Great condition! Buying now',
      time: '3h ago',
    },
  ];

  return (
    <div className="space-y-3 max-h-96 overflow-y-auto">
      {messages.map((msg) => (
        <div
          key={msg.id}
          onClick={() => alert(`Opening chat with ${msg.user}...`)}
          className={`flex gap-3 p-3 rounded-lg cursor-pointer transition-colors active:scale-95 ${
            isDark
              ? 'hover:bg-white/5 border border-white/5'
              : 'hover:bg-black/5 border border-black/5'
          } ${msg.unread ? 'border-red-500' : ''}`}
        >
          <img
            src={msg.avatar}
            alt={msg.user}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <p className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                {msg.user}
              </p>
              <span
                className={`text-xs ${isDark ? 'text-white/50' : 'text-black/50'}`}
              >
                {msg.time}
              </span>
            </div>
            <p
              className={`text-sm truncate ${
                isDark ? 'text-white/70' : 'text-black/70'
              }`}
            >
              {msg.message}
            </p>
          </div>
          {msg.unread && <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />}
        </div>
      ))}
    </div>
  );
}
