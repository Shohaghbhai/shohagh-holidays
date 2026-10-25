import React, { useState, useMemo } from 'react';
import { TravelProvider, useTravel } from './TravelContext';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { PackageCard } from './PackageCard';
import { PackageDetailModal } from './PackageDetailModal';
import { BusAndShipSection } from './BusAndShipSection';
import { TravelTipsSection } from './TravelTipsSection';
import { WhyChooseGreenBelt } from './WhyChooseGreenBelt';
import { AdminDashboard } from './AdminDashboard';
import { Footer } from './Footer';
import { FloatingWhatsApp } from './FloatingWhatsApp';
import { ToastContainer } from './ToastContainer';
import { TourPackage } from './types';
import {
  Compass,
  Filter,
  Sparkles,
  ArrowUpDown,
  Search,
  CheckCircle,
  HelpCircle,
  X
} from 'lucide-react';

const MainAppContent: React.FC = () => {
  const { packages, selectedPackage, setSelectedPackage, showAdminModal, setShowAdminModal } = useTravel();

  // Navigation state: 'home' | 'packages' | 'services' | 'blog' | 'admin'
  const [currentView, setCurrentView] = useState<'home' | 'packages' | 'services' | 'blog' | 'admin'>('home');

  // Filter States
  const [activeCategory, setActiveCategory] = useState<'all' | 'hills' | 'beach' | 'haor' | 'forest'>('all');
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [selectedDurationFilter, setSelectedDurationFilter] = useState<string>('all');
  const [maxBudgetFilter, setMaxBudgetFilter] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  // Handle hero search trigger
  const handleHeroSearch = (filters: { destination: string; duration: string; maxBudget: number | null }) => {
    if (filters.destination !== 'all') {
      const destinationKeywordMap: Record<string, string> = {
        'sajek': 'Sajek',
        'saint-martin': 'Saint Martin',
        'sundarbans': 'Sundarbans',
        'tanguar': 'Tanguar',
        'coxs-bazar': 'Cox',
        'sylhet': 'Sylhet',
        'bandarban': 'Bandarban',
      };
      setSearchKeyword(destinationKeywordMap[filters.destination] || '');
    } else {
      setSearchKeyword('');
    }

    setSelectedDurationFilter(filters.duration);
    setMaxBudgetFilter(filters.maxBudget);
  };

  const handleScrollToPackages = () => {
    const el = document.getElementById('packages-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filtered and Sorted Packages
  const filteredPackages = useMemo(() => {
    return packages
      .filter((pkg) => {
        // Category filter
        if (activeCategory !== 'all' && pkg.category !== activeCategory) {
          return false;
        }

        // Keyword filter
        if (searchKeyword.trim()) {
          const q = searchKeyword.toLowerCase();
          const matchTitle = pkg.title.toLowerCase().includes(q);
          const matchDest = pkg.destination.toLowerCase().includes(q);
          const matchTagline = pkg.tagline.toLowerCase().includes(q);
          if (!matchTitle && !matchDest && !matchTagline) return false;
        }

        // Duration filter
        if (selectedDurationFilter !== 'all') {
          if (selectedDurationFilter === '2d' && !pkg.duration.includes('2 Days')) return false;
          if (selectedDurationFilter === '3d' && !pkg.duration.includes('3 Days / 2 Nights')) return false;
          if (selectedDurationFilter === '4d' && !pkg.duration.includes('3 Nights')) return false;
        }

        // Budget filter
        if (maxBudgetFilter !== null && pkg.price > maxBudgetFilter) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [packages, activeCategory, searchKeyword, selectedDurationFilter, maxBudgetFilter, sortBy]);

  const clearFilters = () => {
    setActiveCategory('all');
    setSearchKeyword('');
    setSelectedDurationFilter('all');
    setMaxBudgetFilter(null);
    setSortBy('featured');
  };

  const categories = [
    { label: 'All Domestic Packages', value: 'all' },
    { label: 'Hills & Sajek (মেঘের রাজ্য)', value: 'hills' },
    { label: 'Beach & Coral (কক্সবাজার ও সেন্টমার্টিন)', value: 'beach' },
    { label: 'Haor & Wetlands (টাঙ্গুয়ার হাওড়)', value: 'haor' },
    { label: 'Forest & Safari (সুন্দরবন ও সিলেট)', value: 'forest' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbfa]">
      {/* Universal Header */}
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />

      {/* Main Page Routing Switcher */}
      <main className="flex-1">
        {/* VIEW 1: ADMIN DASHBOARD */}
        {currentView === 'admin' ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-4 flex items-center justify-between">
              <button
                onClick={() => setCurrentView('home')}
                className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1"
              >
                ← Return to Public Website
              </button>
            </div>
            <AdminDashboard onClose={() => setCurrentView('home')} />
          </div>
        ) : currentView === 'packages' ? (
          /* VIEW 2: DEDICATED TOUR PACKAGES VIEW */
          <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Bangladeshi Domestic Tour Packages
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                Explore handpicked all-inclusive tour packages across Sajek, Saint Martin, Sundarbans, and Tanguar Haor.
              </p>
            </div>

            {/* Packages Grid & Filters */}
            <div className="space-y-6">
              {/* Filter controls */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-white rounded-xl border border-slate-200">
                <div className="flex flex-wrap gap-1.5">
                  {categories.map((c) => (
                    <button
                      key={c.value}
                      onClick={() => setActiveCategory(c.value as any)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        activeCategory === c.value
                          ? 'bg-emerald-800 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="Search destination..."
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                      className="pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>

                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-700 font-medium"
                  >
                    <option value="featured">Featured First</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPackages.map((pkg) => (
                  <PackageCard
                    key={pkg.id}
                    pkg={pkg}
                    onViewDetails={(p) => setSelectedPackage(p)}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : currentView === 'services' ? (
          /* VIEW 3: DEDICATED BUS & SHIP VIEW */
          <div className="py-6">
            <BusAndShipSection />
          </div>
        ) : currentView === 'blog' ? (
          /* VIEW 4: DEDICATED BLOG VIEW */
          <div className="py-6">
            <TravelTipsSection />
          </div>
        ) : (
          /* VIEW 5: HOME (COMPLETE RICH LANDING PAGE) */
          <>
            {/* Hero Section */}
            <Hero
              onSearch={handleHeroSearch}
              onExploreClick={handleScrollToPackages}
            />

            {/* Domestic Tour Packages Section */}
            <section id="packages-section" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Handpicked Domestic Escapes</span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    Popular Bangladesh Tour Packages
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 max-w-2xl">
                    Every package includes reserved AC transport, premium resort/cottage stays, authentic local meals, and 24/7 dedicated tour manager support.
                  </p>
                </div>

                {/* Sort selector */}
                <div className="flex items-center gap-2 self-start md:self-auto">
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <ArrowUpDown className="w-3.5 h-3.5" /> Sort:
                  </span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="text-xs bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-slate-800 font-semibold focus:outline-none focus:ring-1 focus:ring-emerald-600 cursor-pointer"
                  >
                    <option value="featured">Featured First</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Top Rated (4.9★)</option>
                  </select>
                </div>
              </div>

              {/* Segmented Filter Bar */}
              <div className="mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 p-2 bg-white rounded-xl border border-slate-200/90 shadow-xs">
                <div className="flex flex-wrap items-center gap-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setActiveCategory(cat.value as any)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        activeCategory === cat.value
                          ? 'bg-emerald-800 text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Search query input */}
                <div className="relative min-w-[200px]">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search package..."
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-600"
                  />
                  {searchKeyword && (
                    <button
                      onClick={() => setSearchKeyword('')}
                      className="absolute right-2.5 top-2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Active Filter Pill Bar (only if filtered) */}
              {(activeCategory !== 'all' || searchKeyword || maxBudgetFilter !== null || selectedDurationFilter !== 'all') && (
                <div className="mb-6 flex items-center justify-between text-xs text-slate-500 bg-emerald-50/60 p-2.5 rounded-lg border border-emerald-100">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-emerald-950">Active Filters:</span>
                    {activeCategory !== 'all' && <span>Category: {activeCategory} ·</span>}
                    {searchKeyword && <span>Search: "{searchKeyword}" ·</span>}
                    {maxBudgetFilter && <span>Max Budget: ৳{maxBudgetFilter.toLocaleString()} ·</span>}
                    <span>Showing {filteredPackages.length} package(s)</span>
                  </div>
                  <button
                    onClick={clearFilters}
                    className="text-emerald-800 font-bold hover:underline"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}

              {/* Package Cards Grid */}
              {filteredPackages.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPackages.map((pkg) => (
                    <PackageCard
                      key={pkg.id}
                      pkg={pkg}
                      onViewDetails={(p) => setSelectedPackage(p)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
                  <HelpCircle className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                  <h3 className="text-base font-bold text-slate-800">
                    No domestic packages match your search
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 mb-4">
                    Try adjusting your destination keyword or budget filters.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="bg-emerald-800 text-white text-xs font-bold px-4 py-2 rounded-lg"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </section>

            {/* Why Choose GreenBelt Trust Highlights */}
            <WhyChooseGreenBelt />

            {/* Bus & Ship Services Section */}
            <BusAndShipSection />

            {/* Travel Tips (Blog) Section (greenbelt.com.bd inspired) */}
            <TravelTipsSection />
          </>
        )}
      </main>

      {/* Package Detail Modal */}
      {selectedPackage && (
        <PackageDetailModal
          pkg={selectedPackage}
          onClose={() => setSelectedPackage(null)}
        />
      )}

      {/* Admin Protected Login Modal (if opened via Navbar) */}
      {showAdminModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="relative max-w-lg w-full">
            <button
              onClick={() => setShowAdminModal(false)}
              className="absolute -top-10 right-0 text-white hover:text-slate-200 p-1"
            >
              <X className="w-6 h-6" />
            </button>
            <AdminDashboard
              onClose={() => {
                setShowAdminModal(false);
                setCurrentView('home');
              }}
            />
          </div>
        </div>
      )}

      {/* Floating Sticky WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Toast Notifications */}
      <ToastContainer />

      {/* Footer */}
      <Footer onNavClick={(v) => { setCurrentView(v); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
    </div>
  );
};

export default function App() {
  return (
    <TravelProvider>
      <MainAppContent />
    </TravelProvider>
  );
}
