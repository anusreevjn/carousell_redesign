import { Eye, Heart, MessageCircle, TrendingUp, DollarSign, Users } from 'lucide-react';

interface AnalyticsModalProps {
  isDark: boolean;
}

export function AnalyticsModal({ isDark }: AnalyticsModalProps) {
  const stats = {
    totalViews: 1234,
    totalLikes: 234,
    totalMessages: 89,
    totalSales: 15,
    revenue: 12450,
    followers: 89,
  };

  const recentActivity = [
    { action: 'View', item: 'iPhone 13 Pro', count: 45, change: '+12%' },
    { action: 'Like', item: 'MacBook Air M1', count: 23, change: '+8%' },
    { action: 'Message', item: 'Vintage Jacket', count: 12, change: '+5%' },
    { action: 'View', item: 'Sony Headphones', count: 67, change: '+15%' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-3">
        <div className={`p-4 rounded-lg border ${
          isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            <Eye className="w-5 h-5 text-red-500" />
            <span className={`text-xs font-bold ${isDark ? 'text-white/70' : 'text-black/70'}`}>
              Total Views
            </span>
          </div>
          <p className={`text-2xl font-black ${isDark ? 'text-white' : 'text-black'}`}>
            {stats.totalViews.toLocaleString()}
          </p>
          <p className="text-xs text-green-500 font-bold mt-1">+23% this week</p>
        </div>

        <div className={`p-4 rounded-lg border ${
          isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-5 h-5 text-red-500" />
            <span className={`text-xs font-bold ${isDark ? 'text-white/70' : 'text-black/70'}`}>
              Total Likes
            </span>
          </div>
          <p className={`text-2xl font-black ${isDark ? 'text-white' : 'text-black'}`}>
            {stats.totalLikes.toLocaleString()}
          </p>
          <p className="text-xs text-green-500 font-bold mt-1">+18% this week</p>
        </div>

        <div className={`p-4 rounded-lg border ${
          isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            <MessageCircle className="w-5 h-5 text-red-500" />
            <span className={`text-xs font-bold ${isDark ? 'text-white/70' : 'text-black/70'}`}>
              Messages
            </span>
          </div>
          <p className={`text-2xl font-black ${isDark ? 'text-white' : 'text-black'}`}>
            {stats.totalMessages.toLocaleString()}
          </p>
          <p className="text-xs text-green-500 font-bold mt-1">+12% this week</p>
        </div>

        <div className={`p-4 rounded-lg border ${
          isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-5 h-5 text-red-500" />
            <span className={`text-xs font-bold ${isDark ? 'text-white/70' : 'text-black/70'}`}>
              Followers
            </span>
          </div>
          <p className={`text-2xl font-black ${isDark ? 'text-white' : 'text-black'}`}>
            {stats.followers.toLocaleString()}
          </p>
          <p className="text-xs text-green-500 font-bold mt-1">+9% this week</p>
        </div>
      </div>

      <div className={`p-4 rounded-lg border bg-gradient-to-br from-red-500/10 to-red-600/10 border-red-500/20`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-red-500" />
            <span className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}>
              Total Revenue
            </span>
          </div>
          <TrendingUp className="w-5 h-5 text-green-500" />
        </div>
        <p className="text-3xl font-black text-red-500">
          ${stats.revenue.toLocaleString()}
        </p>
        <div className="flex items-center justify-between mt-2">
          <p className={`text-sm ${isDark ? 'text-white/70' : 'text-black/70'}`}>
            {stats.totalSales} items sold
          </p>
          <p className="text-sm text-green-500 font-bold">+32% this month</p>
        </div>
      </div>

      <div>
        <h3 className={`font-bold mb-3 ${isDark ? 'text-white' : 'text-black'}`}>
          Recent Activity
        </h3>
        <div className="space-y-2">
          {recentActivity.map((activity, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-lg border ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                    {activity.action} - {activity.item}
                  </p>
                  <p className={`text-xs ${isDark ? 'text-white/50' : 'text-black/50'}`}>
                    {activity.count} {activity.action.toLowerCase()}s
                  </p>
                </div>
                <span className="text-xs font-bold text-green-500">{activity.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
