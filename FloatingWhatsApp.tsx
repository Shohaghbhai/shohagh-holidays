import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const defaultUrl = 'https://wa.me/8801572596078?text=Hello%20Shohagh%20Holidays%2C%20I%20have%20an%20inquiry%20about%20domestic%20tour%20packages';

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const textToSend = message.trim() || 'Hello Shohagh Holidays, I want to inquire about domestic tour packages';
    const url = `https://wa.me/8801572596078?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Mini Chat */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom duration-200">
          {/* Header */}
          <div className="bg-[#0b532c] text-white p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <MessageSquare className="w-4 h-4 fill-white" />
              </div>
              <div>
                <span className="font-bold text-xs block leading-tight">Shohagh Holidays Desk</span>
                <span className="text-[10px] text-emerald-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online · +8801572596078
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat bubble body */}
          <div className="p-3.5 bg-slate-50 space-y-2 text-xs">
            <div className="bg-white p-2.5 rounded-xl rounded-tl-none shadow-xs border border-slate-100 text-slate-700">
              👋 <strong>Assalamu Alaikum!</strong> Welcome to Shohagh Holidays (সোহাগ হলিডেজ). Looking for Sajek, Saint Martin, Tanguar Haor, or Sundarbans tour bookings?
            </div>
            <div className="bg-white p-2.5 rounded-xl rounded-tl-none shadow-xs border border-slate-100 text-slate-700">
              Type your destination below to chat directly with our Dhaka booking team on WhatsApp:
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSend} className="p-2.5 bg-white border-t border-slate-100 flex items-center gap-1.5">
            <input
              type="text"
              placeholder="e.g. Sajek package for 4 people..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-600"
              autoFocus
            />
            <button
              type="submit"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white p-2 rounded-lg cursor-pointer transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* The Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer hover:scale-105"
        aria-label="Chat on WhatsApp +8801572596078"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white" />
        </span>
        <MessageSquare className="w-6 h-6 fill-white" />
      </button>
    </div>
  );
};
