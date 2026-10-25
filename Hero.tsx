import React, { useState } from 'react';
import { Search, MapPin, Calendar, Banknote, ShieldCheck, Users, Sparkles, ArrowRight, MessageSquare } from 'lucide-react';

interface HeroProps {
  onSearch: (filters: { destination: string; duration: string; maxBudget: number | null }) => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, onExploreClick }) => {
  const [selectedDestination, setSelectedDestination] = useState<string>('all');
  const [selectedDuration, setSelectedDuration] = useState<string>('all');
  const [budgetTier, setBudgetTier] = useState<string>('all');

  const destinations = [
    { label: 'All Bangladesh Destinations', value: 'all' },
    { label: "Sajek Valley (মেঘের রাজ্য)", value: 'sajek' },
    { label: "Saint Martin's Coral Island (প্রবাল দ্বীপ)", value: 'saint-martin' },
    { label: "Sundarbans Mangrove Safari (সুন্দরবন)", value: 'sundarbans' },
    { label: "Tanguar Haor & Shimul Bagan (টাঙ্গুয়ার হাওড়)", value: 'tanguar' },
    { label: "Cox's Bazar & Marine Drive (কক্সবাজার)", value: 'coxs-bazar' },
    { label: "Sylhet & Sreemangal (সিলেট ও শ্রীমঙ্গল)", value: 'sylhet' },
    { label: "Bandarban Mountain Peaks (বান্দরবান)", value: 'bandarban' },
  ];

  const durations = [
    { label: 'Any Duration', value: 'all' },
    { label: '2 Days / 2 Nights (Weekend Haor/Short)', value: '2d' },
    { label: '3 Days / 2 Nights (Standard Holiday)', value: '3d' },
    { label: '3 Days / 3 Nights (Sundarbans Deep Safari)', value: '4d' },
  ];

  const budgets = [
    { label: 'Any Budget', value: 'all', max: null },
    { label: 'Under ৳7,000', value: 'under-7k', max: 7000 },
    { label: '৳7,000 - ৳10,000', value: '7k-10k', max: 10000 },
    { label: '৳10,000+ (Premium Cruise/Safari)', value: 'above-10k', max: 20000 },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedBudgetItem = budgets.find((b) => b.value === budgetTier);
    onSearch({
      destination: selectedDestination,
      duration: selectedDuration,
      maxBudget: selectedBudgetItem ? selectedBudgetItem.max : null,
    });
    onExploreClick();
  };

  return (
    <div className="relative bg-[#072414] text-white overflow-hidden">
      {/* Background with scenic Bangladeshi nature image & forest overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=2000&q=85"
          alt="Sajek Valley Bangladesh Clouds"
          className="w-full h-full object-cover object-center opacity-35 mix-blend-luminosity scale-105 transform motion-safe:animate-pulse duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#051a0e] via-[#082816]/80 to-[#072414]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        {/* Anti-slop clean kicker */}
        <div className="flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-widest text-emerald-300">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>Shohagh Holidays (সোহাগ হলিডেজ) · Premier Domestic Tourism</span>
        </div>

        {/* Main Headings */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
            Explore Bangladesh with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200">
              Shohagh Holidays
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-emerald-100/85 leading-relaxed font-normal">
            Your trusted domestic travel partner in Bangladesh. Specializing in Sajek Valley cloud safaris, Saint Martin coral island tours, luxury houseboats in Tanguar Haor, and Sundarbans deep mangrove expeditions.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-emerald-200/90 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              ২৪/৭ সার্বক্ষণিক গাইড ও সাপোর্ট
            </span>
            <span className="text-emerald-500">·</span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-emerald-400" />
              15,000+ Domestic Travelers
            </span>
            <span className="text-emerald-500">·</span>
            <span className="flex items-center gap-1.5 text-amber-300">
              <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
              Direct WhatsApp (+8801572596078)
            </span>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="mt-10 bg-white/95 backdrop-blur-md text-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl shadow-black/40 border border-emerald-900/10">
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            {/* Destination dropdown */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                DESTINATION (গন্তব্য)
              </label>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all cursor-pointer"
              >
                {destinations.map((d) => (
                  <option key={d.value} value={d.value}>
                    {d.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Duration selector */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                TOUR DURATION (সময়কাল)
              </label>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all cursor-pointer"
              >
                {durations.map((dur) => (
                  <option key={dur.value} value={dur.value}>
                    {dur.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget selector */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5 flex items-center gap-1.5">
                <Banknote className="w-3.5 h-3.5 text-emerald-700" />
                BUDGET PER PERSON (বাজেট)
              </label>
              <select
                value={budgetTier}
                onChange={(e) => setBudgetTier(e.target.value)}
                className="w-full bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all cursor-pointer"
              >
                {budgets.map((b) => (
                  <option key={b.value} value={b.value}>
                    {b.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit button */}
            <div>
              <button
                type="submit"
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2.5 px-5 rounded-lg text-sm shadow-md shadow-emerald-950/20 flex items-center justify-center gap-2 transition-all cursor-pointer group"
              >
                <Search className="w-4 h-4 text-emerald-200 group-hover:scale-110 transition-transform" />
                <span>Search Tour Packages</span>
              </button>
            </div>
          </form>
        </div>

        {/* Popular Quick Shortcuts */}
        <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-emerald-200/80">
          <span className="font-semibold text-white">Popular Destinations:</span>
          {['Sajek Valley', "Saint Martin", 'Tanguar Haor', 'Sundarbans', "Cox's Bazar"].map((tag) => (
            <button
              key={tag}
              onClick={() => {
                const map: Record<string, string> = {
                  'Sajek Valley': 'sajek',
                  "Saint Martin": 'saint-martin',
                  'Tanguar Haor': 'tanguar',
                  'Sundarbans': 'sundarbans',
                  "Cox's Bazar": 'coxs-bazar',
                };
                setSelectedDestination(map[tag] || 'all');
                onSearch({ destination: map[tag] || 'all', duration: 'all', maxBudget: null });
                onExploreClick();
              }}
              className="bg-emerald-900/60 hover:bg-emerald-800/80 text-emerald-100 border border-emerald-700/50 px-2.5 py-1 rounded text-xs transition-colors cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
