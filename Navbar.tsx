import React, { useState } from 'react';
import { useTravel } from './TravelContext';
import { Compass, Phone, MessageSquare, ShieldCheck, Lock, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'packages' | 'services' | 'blog' | 'admin';
  setCurrentView: (view: 'home' | 'packages' | 'services' | 'blog' | 'admin') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setCurrentView }) => {
  const { isAdminLoggedIn, setShowAdminModal } = useTravel();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; view: 'home' | 'packages' | 'services' | 'blog' }[] = [
    { label: 'Home', view: 'home' },
    { label: 'Tour Packages', view: 'packages' },
    { label: 'Bus & Ship Services', view: 'services' },
    { label: 'Travel Tips (Blog)', view: 'blog' },
  ];

  const handleNavClick = (view: 'home' | 'packages' | 'services' | 'blog' | 'admin') => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Notice Bar */}
      <div className="bg-[#0e3820] text-emerald-100/90 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-medium text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              বিশ্বস্ত দেশীয় ট্যুর অপারেটর · Trusted Domestic Travel Partner
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="hidden sm:inline text-slate-300">
              Sajek · Saint Martin · Sundarbans · Tanguar Haor
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+8801572596078"
              className="flex items-center gap-1.5 hover:text-white transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+8801572596078</span>
            </a>
            <span className="hidden md:inline text-emerald-400/60">·</span>
            <span className="hidden md:inline text-xs text-emerald-200/80">9:00 AM - 11:00 PM Daily</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 cursor-pointer select-none group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 flex items-center justify-center text-white shadow-md shadow-emerald-950/20 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 text-emerald-200" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-900">
                  Shohagh<span className="text-emerald-700">Holidays</span>
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 rounded px-1.5 py-0.5">
                  BD
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide">
                সোহাগ হলিডেজ · Domestic Tours & Travels
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.view}
                  onClick={() => handleNavClick(item.view)}
                  className={`text-sm font-semibold tracking-wide transition-colors relative py-1 cursor-pointer ${
                    isActive
                      ? 'text-emerald-700'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Admin Login / Dashboard Button */}
            <button
              onClick={() => {
                if (isAdminLoggedIn) {
                  handleNavClick('admin');
                } else {
                  setShowAdminModal(true);
                }
              }}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                currentView === 'admin'
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : isAdminLoggedIn
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {isAdminLoggedIn ? (
                <>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Admin Dashboard</span>
                </>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5 text-slate-500" />
                  <span>Admin Login</span>
                </>
              )}
            </button>

            {/* Direct WhatsApp Call to Action */}
            <a
              href="https://wa.me/8801572596078?text=Hello%20Shohagh%20Holidays%2C%20I%20want%20to%20inquire%20about%20domestic%20tour%20packages"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold shadow-sm hover:shadow transition-all group cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp Booking</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => {
                if (isAdminLoggedIn) {
                  handleNavClick('admin');
                } else {
                  setShowAdminModal(true);
                }
              }}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg border border-slate-200"
              aria-label="Admin"
            >
              {isAdminLoggedIn ? (
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              ) : (
                <Lock className="w-4 h-4 text-slate-600" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                  currentView === item.view
                    ? 'bg-emerald-50 text-emerald-800'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                if (isAdminLoggedIn) {
                  handleNavClick('admin');
                } else {
                  setShowAdminModal(true);
                  setMobileMenuOpen(false);
                }
              }}
              className="text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Admin Panel</span>
              {isAdminLoggedIn ? (
                <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">Active</span>
              ) : (
                <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">Protected</span>
              )}
            </button>
          </nav>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="https://wa.me/8801572596078?text=Hello%20Shohagh%20Holidays%2C%20I%20want%20to%20inquire%20about%20domestic%20tour%20packages"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-2.5 rounded-lg text-sm font-semibold shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Book via WhatsApp (+8801572596078)</span>
            </a>
            <a
              href="tel:+8801572596078"
              className="flex items-center justify-center gap-2 bg-slate-100 text-slate-800 py-2.5 rounded-lg text-sm font-semibold"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call Helpline: +8801572596078</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
