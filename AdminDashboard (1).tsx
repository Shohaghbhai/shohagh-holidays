import React, { useState } from 'react';
import { useTravel } from './TravelContext';
import { TourPackage, BusService, ShipService, TravelTip } from './types';
import {
  ShieldCheck,
  Plus,
  Trash2,
  Edit,
  Save,
  RotateCcw,
  Database,
  Lock,
  LogOut,
  X,
  Package,
  Bus,
  Ship,
  BookOpen,
  Check,
  Copy,
  ExternalLink,
  DollarSign,
  Globe,
  Download
} from 'lucide-react';

export const AdminDashboard: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  const {
    packages,
    busServices,
    shipServices,
    travelTips,
    isAdminLoggedIn,
    loginAdmin,
    changeAdminPassword,
    logoutAdmin,
    addPackage,
    updatePackage,
    deletePackage,
    addBusService,
    updateBusService,
    deleteBusService,
    addShipService,
    updateShipService,
    deleteShipService,
    addTip,
    updateTip,
    deleteTip,
    resetToDefaults,
    addToast,
  } = useTravel();

  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [showPwForm, setShowPwForm] = useState(false);
  const [curPw, setCurPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [activeTab, setActiveTab] = useState<'packages' | 'buses' | 'ships' | 'tips' | 'supabase' | 'domain'>('packages');
  const [customDomainInput, setCustomDomainInput] = useState('shohaghholidays.com');

  // Package Form States
  const [editingPkg, setEditingPkg] = useState<TourPackage | null>(null);
  const [isAddingPkg, setIsAddingPkg] = useState(false);
  const [pkgFormData, setPkgFormData] = useState<Omit<TourPackage, 'id'>>({
    title: '',
    destination: '',
    tagline: '',
    duration: '3 Days / 2 Nights',
    price: 6500,
    regularPrice: 7500,
    rating: 4.9,
    reviewCount: 150,
    featured: false,
    category: 'hills',
    coverImage: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80',
    departurePoint: 'Dhaka (Sayedabad / Arambagh)',
    nextDepartures: ['Every Thursday 9:00 PM', 'Every Tuesday 9:30 PM'],
    features: ['AC Transport', 'Hill Resort / Eco Cottage', '3 Daily Meals', 'Local Guide', '4x4 Safari'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Check-in',
        description: 'Morning arrival, check in to cottage, sightseeing and sunset viewing.',
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Eco Resort'
      },
      {
        day: 2,
        title: 'Full Day Sightseeing & BBQ',
        description: 'Morning sunrise, valley excursion, and night traditional BBQ dinner.',
        meals: 'Breakfast, Lunch, BBQ Dinner',
        stay: 'Eco Resort'
      },
      {
        day: 3,
        title: 'Cave / Lake Tour & Return Journey',
        description: 'Morning sightseeing, local tribal bazaar shopping, and return bus to Dhaka.',
        meals: 'Breakfast, Lunch',
        stay: 'Return to Dhaka'
      }
    ],
    inclusions: ['Dhaka return transport', '2 Nights cottage stay', 'All meals', 'All spot entry fees'],
    exclusions: ['Personal shopping', 'Extra snacks or mineral water bottles'],
    travelTips: ['Carry photocopy of NID', 'Follow guide instructions']
  });

  // Bus Form States
  const [editingBus, setEditingBus] = useState<BusService | null>(null);
  const [isAddingBus, setIsAddingBus] = useState(false);
  const [busFormData, setBusFormData] = useState<Omit<BusService, 'id'>>({
    operator: 'Green Line Paribahan',
    route: 'Dhaka ⇄ Cox’s Bazar',
    busType: 'Scania Multi-Axle AC Sleeper',
    departureTimes: ['08:00 AM', '09:30 PM', '10:30 PM'],
    priceBDT: 2200,
    boardingPoints: ['Sayedabad', 'Arambagh', 'Kakrail'],
    droppingPoints: ['Kolatoli Beach', 'Jhawtola'],
    amenities: ['Reclining Seats', 'USB Charger', 'Mineral Water', 'Blanket'],
    isAvailable: true
  });

  // Ship Form States
  const [editingShip, setEditingShip] = useState<ShipService | null>(null);
  const [isAddingShip, setIsAddingShip] = useState(false);
  const [shipFormData, setShipFormData] = useState<Omit<ShipService, 'id'>>({
    shipName: 'MV Bay One Luxury Cruise',
    route: 'Cox’s Bazar ⇄ Saint Martin',
    departurePort: 'Cox’s Bazar Naval Ghat',
    arrivalPort: 'Saint Martin Pier',
    departureTime: '09:00 AM',
    returnTime: '03:30 PM',
    status: 'Operating Daily',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    description: 'Premier ocean cruise vessel serving Saint Martin coral island with modern luxury amenities.',
    classes: [
      { className: 'Open Deck Chair', priceBDT: 2200, features: 'Panoramic open air sea view' },
      { className: 'Business AC Class', priceBDT: 3500, features: 'Air-conditioned lounge with snacks' }
    ]
  });

  // Blog Tip Form States
  const [editingTip, setEditingTip] = useState<TravelTip | null>(null);
  const [isAddingTip, setIsAddingTip] = useState(false);
  const [tipFormData, setTipFormData] = useState<Omit<TravelTip, 'id'>>({
    slug: 'new-bangladesh-travel-guide',
    title: 'Top Travel Safety Guidelines for Domestic Tourists',
    excerpt: 'Essential advice for travelers venturing into Bangladesh hills, sea beaches, and wetland haors.',
    content: [
      'Domestic tourism in Bangladesh offers unforgettable natural landscapes. Prioritize advance cottage bookings, especially during peak weekend batches.',
      'Always respect local tribal communities and marine ecosystems. Do not leave plastic behind in Saint Martin or Sajek.'
    ],
    readTime: '4 min read',
    date: 'Oct 2026',
    category: 'Travel Tips',
    coverImage: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80',
    author: 'GreenBelt Field Team'
  });

  // Quick Price Edit inline
  const [quickPricePackageId, setQuickPricePackageId] = useState<string | null>(null);
  const [quickPriceValue, setQuickPriceValue] = useState<number>(0);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await loginAdmin(emailInput, passwordInput);
    setPasswordInput('');
  };

  const handleChangePw = async (e: React.FormEvent) => {
    e.preventDefault();
    const ok = await changeAdminPassword(curPw, newPw);
    if (ok) {
      setCurPw('');
      setNewPw('');
      setShowPwForm(false);
    }
  };

  const copySqlSchema = () => {
    const sql = `-- Supabase PostgreSQL Schema for GreenBelt Domestic Travel Agency
-- Run this in your Supabase SQL Editor:

CREATE TABLE IF NOT EXISTS public.tour_packages (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    destination TEXT NOT NULL,
    tagline TEXT,
    duration TEXT NOT NULL,
    price INTEGER NOT NULL,
    regular_price INTEGER,
    rating NUMERIC(2,1) DEFAULT 4.9,
    review_count INTEGER DEFAULT 100,
    category TEXT CHECK (category IN ('hills', 'beach', 'haor', 'forest')),
    cover_image TEXT,
    departure_point TEXT,
    features JSONB,
    itinerary JSONB,
    inclusions JSONB,
    exclusions JSONB,
    travel_tips JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.bus_services (
    id TEXT PRIMARY KEY,
    operator TEXT NOT NULL,
    route TEXT NOT NULL,
    bus_type TEXT,
    departure_times JSONB,
    price_bdt INTEGER NOT NULL,
    boarding_points JSONB,
    dropping_points JSONB,
    amenities JSONB,
    is_available BOOLEAN DEFAULT true
);

CREATE TABLE IF NOT EXISTS public.ship_services (
    id TEXT PRIMARY KEY,
    ship_name TEXT NOT NULL,
    route TEXT NOT NULL,
    departure_port TEXT,
    arrival_port TEXT,
    departure_time TEXT,
    return_time TEXT,
    status TEXT,
    classes JSONB,
    description TEXT,
    image TEXT
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.tour_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bus_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ship_services ENABLE ROW LEVEL SECURITY;

-- Allow public read access (for prospective travelers)
CREATE POLICY "Public read packages" ON public.tour_packages FOR SELECT USING (true);
CREATE POLICY "Public read buses" ON public.bus_services FOR SELECT USING (true);
CREATE POLICY "Public read ships" ON public.ship_services FOR SELECT USING (true);
`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(sql);
      addToast('Supabase SQL Schema copied to clipboard!', 'success');
    }
  };

  // If not logged in, render login view
  if (!isAdminLoggedIn) {
    return (
      <div className="max-w-md mx-auto my-12 p-6 sm:p-8 bg-white rounded-2xl shadow-xl border border-slate-200 text-center">
        <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
          <Lock className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-extrabold text-slate-900">
          Shohagh Holidays Admin Portal
        </h2>
        <p className="text-xs text-slate-500 mt-1 mb-6">
          Protected portal to manage domestic packages, bus routes, ship schedules, and real-time prices.
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="text-left">
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Admin Email
            </label>
            <input
              type="email"
              placeholder="Enter admin email..."
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              autoComplete="username"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
              autoFocus
            />
          </div>

          <div className="text-left">
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password..."
              autoComplete="current-password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
              
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-2.5 rounded-lg text-sm transition-all shadow-md cursor-pointer"
          >
            Unlock Dashboard
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden max-w-7xl mx-auto my-6">
      {/* Admin Header */}
      <div className="bg-slate-900 text-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center text-white">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-extrabold text-white">
                Shohagh Holidays Management Portal
              </h2>
              <span className="text-[10px] bg-emerald-500 text-slate-950 font-extrabold px-2 py-0.5 rounded">
                LIVE SYNC ACTIVE
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Manage domestic packages, pricing in BDT, buses, ships, and travel tips in real-time.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href="/booking-koro-trip.zip"
            download="booking-koro-trip.zip"
            className="flex items-center gap-1.5 text-xs text-white bg-emerald-700 hover:bg-emerald-600 px-3.5 py-1.5 rounded-lg border border-emerald-500 transition-all cursor-pointer font-bold shadow-xs hover:scale-105"
            title="Download all project files as ZIP"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Project ZIP (.zip)</span>
          </a>

          <button
            onClick={() => {
              if (window.confirm('Reset all packages, buses, and ships to standard catalog?')) {
                resetToDefaults();
              }
            }}
            className="flex items-center gap-1 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
            title="Reset to factory sample data"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            onClick={() => setShowPwForm((v) => !v)}
            className="flex items-center gap-1 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Change Password</span>
          </button>

          <button
            onClick={logoutAdmin}
            className="flex items-center gap-1 text-xs text-red-300 hover:text-red-100 bg-red-950/60 hover:bg-red-900/60 px-3 py-1.5 rounded-lg border border-red-800 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Logout</span>
          </button>

          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {showPwForm && (
        <form onSubmit={handleChangePw} className="bg-slate-50 border-b border-slate-200 p-4 flex flex-col sm:flex-row gap-3 sm:items-end">
          <div className="flex-1">
            <label className="block text-xs font-bold text-slate-700 mb-1">Current password</label>
            <input
              type="password"
              value={curPw}
              onChange={(e) => setCurPw(e.target.value)}
              autoComplete="current-password"
              className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
            />
          </div>
          <div className="flex-1">
            <label className="block text-xs font-bold text-slate-700 mb-1">New password (min 8 characters)</label>
            <input
              type="password"
              value={newPw}
              onChange={(e) => setNewPw(e.target.value)}
              autoComplete="new-password"
              className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
            />
          </div>
          <button type="submit" className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-4 py-2 rounded-lg text-sm">
            Save
          </button>
        </form>
      )}

      {/* Admin Tabs */}
      <div className="flex items-center gap-2 p-3 bg-slate-100 border-b border-slate-200 overflow-x-auto text-xs font-bold text-slate-700">
        <button
          onClick={() => { setActiveTab('packages'); setIsAddingPkg(false); setEditingPkg(null); }}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg cursor-pointer ${
            activeTab === 'packages' ? 'bg-white text-emerald-800 shadow-xs' : 'hover:bg-slate-200'
          }`}
        >
          <Package className="w-4 h-4" />
          <span>Tour Packages ({packages.length})</span>
        </button>

        <button
          onClick={() => { setActiveTab('buses'); setIsAddingBus(false); setEditingBus(null); }}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg cursor-pointer ${
            activeTab === 'buses' ? 'bg-white text-emerald-800 shadow-xs' : 'hover:bg-slate-200'
          }`}
        >
          <Bus className="w-4 h-4" />
          <span>Bus Routes ({busServices.length})</span>
        </button>

        <button
          onClick={() => { setActiveTab('ships'); setIsAddingShip(false); setEditingShip(null); }}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg cursor-pointer ${
            activeTab === 'ships' ? 'bg-white text-emerald-800 shadow-xs' : 'hover:bg-slate-200'
          }`}
        >
          <Ship className="w-4 h-4" />
          <span>Saint Martin Ships ({shipServices.length})</span>
        </button>

        <button
          onClick={() => { setActiveTab('tips'); setIsAddingTip(false); setEditingTip(null); }}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg cursor-pointer ${
            activeTab === 'tips' ? 'bg-white text-emerald-800 shadow-xs' : 'hover:bg-slate-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Travel Tips ({travelTips.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('supabase')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg cursor-pointer ${
            activeTab === 'supabase' ? 'bg-white text-emerald-800 shadow-xs' : 'hover:bg-slate-200'
          }`}
        >
          <Database className="w-4 h-4 text-emerald-700" />
          <span>Supabase & SQL Config</span>
        </button>

        <button
          onClick={() => setActiveTab('domain')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg cursor-pointer ${
            activeTab === 'domain' ? 'bg-white text-emerald-800 shadow-xs' : 'hover:bg-slate-200'
          }`}
        >
          <Globe className="w-4 h-4 text-emerald-700" />
          <span>Custom Domain Setup</span>
        </button>
      </div>

      {/* Main Tab View */}
      <div className="p-4 sm:p-6">
        {/* ================= TAB 1: TOUR PACKAGES ================= */}
        {activeTab === 'packages' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-extrabold text-slate-900">
                  Manage Domestic Bangladeshi Packages
                </h3>
                <p className="text-xs text-slate-500">
                  Update package prices, duration, inclusions, or add new domestic tours without code editing.
                </p>
              </div>

              {!isAddingPkg && !editingPkg && (
                <button
                  onClick={() => setIsAddingPkg(true)}
                  className="flex items-center gap-1.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-xs cursor-pointer self-start sm:self-auto"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Domestic Package</span>
                </button>
              )}
            </div>

            {/* Form for Add or Edit Package */}
            {(isAddingPkg || editingPkg) && (
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-4 animate-in fade-in">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <h4 className="font-extrabold text-sm text-slate-900">
                    {editingPkg ? `Editing: ${editingPkg.title}` : 'Add New Domestic Tour Package'}
                  </h4>
                  <button
                    onClick={() => { setIsAddingPkg(false); setEditingPkg(null); }}
                    className="text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1">Package Title</label>
                    <input
                      type="text"
                      value={editingPkg ? editingPkg.title : pkgFormData.title}
                      onChange={(e) => {
                        if (editingPkg) setEditingPkg({ ...editingPkg, title: e.target.value });
                        else setPkgFormData({ ...pkgFormData, title: e.target.value });
                      }}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                      placeholder="e.g. Sajek Valley Cloud Expedition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Destination</label>
                    <input
                      type="text"
                      value={editingPkg ? editingPkg.destination : pkgFormData.destination}
                      onChange={(e) => {
                        if (editingPkg) setEditingPkg({ ...editingPkg, destination: e.target.value });
                        else setPkgFormData({ ...pkgFormData, destination: e.target.value });
                      }}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                      placeholder="e.g. Sajek Valley, Rangamati"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <label className="block text-xs font-bold text-slate-700 mb-1">Tagline / Short Hook</label>
                    <input
                      type="text"
                      value={editingPkg ? editingPkg.tagline : pkgFormData.tagline}
                      onChange={(e) => {
                        if (editingPkg) setEditingPkg({ ...editingPkg, tagline: e.target.value });
                        else setPkgFormData({ ...pkgFormData, tagline: e.target.value });
                      }}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                      placeholder="e.g. Experience waking up floating above a sea of white clouds"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Duration</label>
                    <input
                      type="text"
                      value={editingPkg ? editingPkg.duration : pkgFormData.duration}
                      onChange={(e) => {
                        if (editingPkg) setEditingPkg({ ...editingPkg, duration: e.target.value });
                        else setPkgFormData({ ...pkgFormData, duration: e.target.value });
                      }}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                      placeholder="e.g. 3 Days / 2 Nights"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Price (৳ BDT)</label>
                    <input
                      type="number"
                      value={editingPkg ? editingPkg.price : pkgFormData.price}
                      onChange={(e) => {
                        const val = parseInt(e.target.value) || 0;
                        if (editingPkg) setEditingPkg({ ...editingPkg, price: val });
                        else setPkgFormData({ ...pkgFormData, price: val });
                      }}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs font-bold text-emerald-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Regular Price (৳ BDT - for Discount)</label>
                    <input
                      type="number"
                      value={editingPkg ? editingPkg.regularPrice || 0 : pkgFormData.regularPrice || 0}
                      onChange={(e) => {
                        const val = parseInt(e.target.value) || 0;
                        if (editingPkg) setEditingPkg({ ...editingPkg, regularPrice: val });
                        else setPkgFormData({ ...pkgFormData, regularPrice: val });
                      }}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1">Cover Image URL</label>
                    <input
                      type="text"
                      value={editingPkg ? editingPkg.coverImage : pkgFormData.coverImage}
                      onChange={(e) => {
                        if (editingPkg) setEditingPkg({ ...editingPkg, coverImage: e.target.value });
                        else setPkgFormData({ ...pkgFormData, coverImage: e.target.value });
                      }}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Category</label>
                    <select
                      value={editingPkg ? editingPkg.category : pkgFormData.category}
                      onChange={(e) => {
                        const cat = e.target.value as 'hills' | 'beach' | 'haor' | 'forest';
                        if (editingPkg) setEditingPkg({ ...editingPkg, category: cat });
                        else setPkgFormData({ ...pkgFormData, category: cat });
                      }}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs font-medium"
                    >
                      <option value="hills">Hill Tracts (Sajek, Bandarban)</option>
                      <option value="beach">Beach & Coral (Saint Martin, Cox's Bazar)</option>
                      <option value="haor">Haor & Wetlands (Tanguar Haor)</option>
                      <option value="forest">Forest & Safari (Sundarbans, Sylhet)</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                  <button
                    onClick={() => {
                      if (editingPkg) {
                        updatePackage(editingPkg.id, editingPkg);
                        setEditingPkg(null);
                      } else {
                        if (!pkgFormData.title) return alert('Please enter package title');
                        addPackage(pkgFormData);
                        setIsAddingPkg(false);
                      }
                    }}
                    className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs px-5 py-2 rounded-lg flex items-center gap-1.5 shadow-sm"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>{editingPkg ? 'Update Package Now' : 'Publish New Package'}</span>
                  </button>
                  <button
                    onClick={() => { setIsAddingPkg(false); setEditingPkg(null); }}
                    className="text-xs text-slate-600 hover:text-slate-900 px-4 py-2"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Packages Table with Real-time quick price editing */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                    <th className="p-3">Package</th>
                    <th className="p-3">Destination</th>
                    <th className="p-3">Duration</th>
                    <th className="p-3">Price (৳)</th>
                    <th className="p-3">Category</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {packages.map((pkg) => (
                    <tr key={pkg.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={pkg.coverImage}
                            alt=""
                            className="w-10 h-10 rounded-lg object-cover shrink-0"
                          />
                          <div>
                            <span className="font-bold text-slate-900 block">{pkg.title}</span>
                            <span className="text-[11px] text-slate-400">ID: {pkg.id}</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-3 text-slate-600 font-medium">{pkg.destination}</td>
                      <td className="p-3 text-slate-600">{pkg.duration}</td>
                      <td className="p-3">
                        {quickPricePackageId === pkg.id ? (
                          <div className="flex items-center gap-1">
                            <input
                              type="number"
                              value={quickPriceValue}
                              onChange={(e) => setQuickPriceValue(parseInt(e.target.value) || 0)}
                              className="w-20 px-2 py-1 border border-emerald-600 rounded text-xs font-bold text-emerald-900"
                              autoFocus
                            />
                            <button
                              onClick={() => {
                                updatePackage(pkg.id, { price: quickPriceValue });
                                setQuickPricePackageId(null);
                              }}
                              className="p-1 bg-emerald-700 text-white rounded hover:bg-emerald-800"
                              title="Save Price"
                            >
                              <Check className="w-3 h-3" />
                            </button>
                            <button
                              onClick={() => setQuickPricePackageId(null)}
                              className="p-1 bg-slate-200 text-slate-700 rounded"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <span className="font-extrabold text-emerald-800 text-sm">
                              ৳{pkg.price.toLocaleString()}
                            </span>
                            <button
                              onClick={() => {
                                setQuickPricePackageId(pkg.id);
                                setQuickPriceValue(pkg.price);
                              }}
                              className="text-[10px] text-slate-400 hover:text-emerald-700 underline"
                              title="Quick edit price"
                            >
                              Edit
                            </button>
                          </div>
                        )}
                      </td>
                      <td className="p-3">
                        <span className="capitalize text-slate-600 bg-slate-100 px-2 py-0.5 rounded text-[11px] font-medium">
                          {pkg.category}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => { setEditingPkg(pkg); setIsAddingPkg(false); }}
                            className="p-1.5 text-slate-600 hover:text-emerald-800 hover:bg-emerald-50 rounded"
                            title="Edit full package"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm(`Are you sure you want to delete "${pkg.title}"?`)) {
                                deletePackage(pkg.id);
                              }
                            }}
                            className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded"
                            title="Delete package"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= TAB 2: BUS SERVICES ================= */}
        {activeTab === 'buses' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-extrabold text-slate-900">
                  Manage Intercity AC Bus Routes & Fares
                </h3>
                <p className="text-xs text-slate-500">
                  Add, update, or remove bus operators, timings, and per-seat pricing in BDT.
                </p>
              </div>

              {!isAddingBus && !editingBus && (
                <button
                  onClick={() => setIsAddingBus(true)}
                  className="flex items-center gap-1.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-xs cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Bus Route</span>
                </button>
              )}
            </div>

            {/* Add/Edit Bus Form */}
            {(isAddingBus || editingBus) && (
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Operator Name</label>
                    <input
                      type="text"
                      value={editingBus ? editingBus.operator : busFormData.operator}
                      onChange={(e) => {
                        if (editingBus) setEditingBus({ ...editingBus, operator: e.target.value });
                        else setBusFormData({ ...busFormData, operator: e.target.value });
                      }}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                      placeholder="e.g. Green Line Paribahan"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Route</label>
                    <input
                      type="text"
                      value={editingBus ? editingBus.route : busFormData.route}
                      onChange={(e) => {
                        if (editingBus) setEditingBus({ ...editingBus, route: e.target.value });
                        else setBusFormData({ ...busFormData, route: e.target.value });
                      }}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                      placeholder="e.g. Dhaka ⇄ Cox's Bazar"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Fare Per Seat (৳ BDT)</label>
                    <input
                      type="number"
                      value={editingBus ? editingBus.priceBDT : busFormData.priceBDT}
                      onChange={(e) => {
                        const val = parseInt(e.target.value) || 0;
                        if (editingBus) setEditingBus({ ...editingBus, priceBDT: val });
                        else setBusFormData({ ...busFormData, priceBDT: val });
                      }}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs font-bold text-emerald-800"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1">Bus Model / Class</label>
                    <input
                      type="text"
                      value={editingBus ? editingBus.busType : busFormData.busType}
                      onChange={(e) => {
                        if (editingBus) setEditingBus({ ...editingBus, busType: e.target.value });
                        else setBusFormData({ ...busFormData, busType: e.target.value });
                      }}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                      placeholder="e.g. Scania Multi-Axle Double Decker AC"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Departure Times (comma separated)</label>
                    <input
                      type="text"
                      value={editingBus ? editingBus.departureTimes.join(', ') : busFormData.departureTimes.join(', ')}
                      onChange={(e) => {
                        const times = e.target.value.split(',').map((s) => s.trim());
                        if (editingBus) setEditingBus({ ...editingBus, departureTimes: times });
                        else setBusFormData({ ...busFormData, departureTimes: times });
                      }}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                      placeholder="08:00 AM, 10:00 PM"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                  <button
                    onClick={() => {
                      if (editingBus) {
                        updateBusService(editingBus.id, editingBus);
                        setEditingBus(null);
                      } else {
                        addBusService(busFormData);
                        setIsAddingBus(false);
                      }
                    }}
                    className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs px-5 py-2 rounded-lg"
                  >
                    {editingBus ? 'Save Bus Route' : 'Add Route'}
                  </button>
                  <button
                    onClick={() => { setIsAddingBus(false); setEditingBus(null); }}
                    className="text-xs text-slate-600 hover:text-slate-900 px-3 py-2"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Bus Table */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                    <th className="p-3">Operator</th>
                    <th className="p-3">Route</th>
                    <th className="p-3">Bus Type</th>
                    <th className="p-3">Per Seat (৳)</th>
                    <th className="p-3">Daily Schedules</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {busServices.map((bus) => (
                    <tr key={bus.id} className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">{bus.operator}</td>
                      <td className="p-3 text-slate-700 font-medium">{bus.route}</td>
                      <td className="p-3 text-slate-500">{bus.busType}</td>
                      <td className="p-3 font-extrabold text-emerald-800">৳{bus.priceBDT.toLocaleString()}</td>
                      <td className="p-3 text-slate-600">{bus.departureTimes.join(' · ')}</td>
                      <td className="p-3 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => { setEditingBus(bus); setIsAddingBus(false); }}
                            className="p-1.5 text-slate-600 hover:text-emerald-800 rounded"
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm(`Delete route "${bus.route}"?`)) {
                                deleteBusService(bus.id);
                              }
                            }}
                            className="p-1.5 text-slate-400 hover:text-rose-600 rounded"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= TAB 3: SHIPS ================= */}
        {activeTab === 'ships' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-extrabold text-slate-900">
                  Saint Martin Sea Vessels & Cruise Ships
                </h3>
                <p className="text-xs text-slate-500">
                  Manage ship schedules, deck classes (Open Deck, VIP Cabin), and ticket prices.
                </p>
              </div>

              {!isAddingShip && !editingShip && (
                <button
                  onClick={() => setIsAddingShip(true)}
                  className="flex items-center gap-1.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-xs cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Ship Service</span>
                </button>
              )}
            </div>

            {/* Ships list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {shipServices.map((ship) => (
                <div key={ship.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                          {ship.status}
                        </span>
                        <h4 className="font-extrabold text-base text-slate-900 mt-1">
                          {ship.shipName}
                        </h4>
                        <p className="text-xs text-slate-500">{ship.route}</p>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => {
                            const newStatus = prompt('Update ship status (e.g. Operating Daily, Seasonal):', ship.status);
                            if (newStatus) updateShipService(ship.id, { status: newStatus as any });
                          }}
                          className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-700 hover:bg-slate-100"
                        >
                          Status
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`Delete ${ship.shipName}?`)) deleteShipService(ship.id);
                          }}
                          className="p-1.5 text-slate-400 hover:text-rose-600 rounded"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Classes list */}
                    <div className="mt-3 space-y-1.5">
                      {ship.classes.map((cls, i) => (
                        <div key={i} className="flex items-center justify-between bg-white p-2 rounded border border-slate-100 text-xs">
                          <div>
                            <span className="font-semibold text-slate-800">{cls.className}</span>
                            <span className="text-[11px] text-slate-400 block">{cls.features}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-emerald-800">৳{cls.priceBDT}</span>
                            <button
                              onClick={() => {
                                const newPrice = prompt(`Enter new fare for ${cls.className}:`, cls.priceBDT.toString());
                                if (newPrice) {
                                  const updatedClasses = [...ship.classes];
                                  updatedClasses[i].priceBDT = parseInt(newPrice) || cls.priceBDT;
                                  updateShipService(ship.id, { classes: updatedClasses });
                                }
                              }}
                              className="text-[10px] text-slate-500 hover:text-emerald-700 underline"
                            >
                              Edit Price
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 4: BLOG TIPS ================= */}
        {activeTab === 'tips' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-extrabold text-slate-900">
                  Travel Tips & Knowledge Base Articles
                </h3>
                <p className="text-xs text-slate-500">
                  Inspired by greenbelt.com.bd/category/travel-tips/.
                </p>
              </div>

              {!isAddingTip && (
                <button
                  onClick={() => setIsAddingTip(true)}
                  className="flex items-center gap-1.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold px-4 py-2 rounded-lg"
                >
                  <Plus className="w-4 h-4" />
                  <span>Write New Travel Guide</span>
                </button>
              )}
            </div>

            {isAddingTip && (
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3">
                <input
                  type="text"
                  placeholder="Article Title..."
                  value={tipFormData.title}
                  onChange={(e) => setTipFormData({ ...tipFormData, title: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                />
                <textarea
                  rows={3}
                  placeholder="Short excerpt..."
                  value={tipFormData.excerpt}
                  onChange={(e) => setTipFormData({ ...tipFormData, excerpt: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                />
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      if (!tipFormData.title) return alert('Enter article title');
                      addTip(tipFormData);
                      setIsAddingTip(false);
                    }}
                    className="bg-emerald-800 text-white font-bold text-xs px-4 py-2 rounded-lg"
                  >
                    Publish Article
                  </button>
                  <button onClick={() => setIsAddingTip(false)} className="text-xs text-slate-600">
                    Cancel
                  </button>
                </div>
              </div>
            )}

            <div className="space-y-3">
              {travelTips.map((tip) => (
                <div key={tip.id} className="p-4 rounded-xl border border-slate-200 bg-white flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img src={tip.coverImage} alt="" className="w-14 h-14 rounded-lg object-cover shrink-0" />
                    <div>
                      <span className="text-[10px] text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                        {tip.category}
                      </span>
                      <h4 className="font-bold text-sm text-slate-900 mt-1">{tip.title}</h4>
                      <p className="text-xs text-slate-500 line-clamp-1">{tip.excerpt}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      if (window.confirm(`Delete article "${tip.title}"?`)) deleteTip(tip.id);
                    }}
                    className="p-2 text-slate-400 hover:text-rose-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 5: SUPABASE INTEGRATION ================= */}
        {activeTab === 'supabase' && (
          <div className="space-y-6">
            <div className="bg-emerald-950 text-white p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
                  <Database className="w-4 h-4" />
                  <span>Free-Tier Stack Guide (Next.js / Vite + Supabase + Vercel)</span>
                </div>
                <h3 className="text-xl font-extrabold text-white">
                  Connect Remote Supabase PostgreSQL Database
                </h3>
                <p className="text-xs text-emerald-200/90 mt-1 max-w-2xl leading-relaxed">
                  Currently running on our high-speed client state engine with local persistence. You can synchronize this data with Supabase’s 100% Free Tier in under 2 minutes.
                </p>
              </div>

              <button
                onClick={copySqlSchema}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-lg flex items-center gap-2 shadow-md shrink-0 cursor-pointer"
              >
                <Copy className="w-4 h-4" />
                <span>Copy Supabase SQL Schema</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                <span className="w-6 h-6 rounded-full bg-emerald-800 text-white font-bold flex items-center justify-center text-xs mb-2">
                  1
                </span>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Create Free Supabase Project</h4>
                <p className="text-slate-600 leading-relaxed">
                  Go to <a href="https://supabase.com" target="_blank" rel="noreferrer" className="text-emerald-700 font-semibold underline">supabase.com</a>, create a free project named <code>greenbelt-bd</code>, and choose Singapore or Mumbai cloud region for lowest latency to Bangladesh.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                <span className="w-6 h-6 rounded-full bg-emerald-800 text-white font-bold flex items-center justify-center text-xs mb-2">
                  2
                </span>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Run Copied SQL In SQL Editor</h4>
                <p className="text-slate-600 leading-relaxed">
                  Click the <strong>Copy Supabase SQL Schema</strong> button above, paste it inside your Supabase project’s SQL Editor, and hit Run. It creates tables for <code>tour_packages</code>, <code>bus_services</code>, and <code>ship_services</code> with Row Level Security.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                <span className="w-6 h-6 rounded-full bg-emerald-800 text-white font-bold flex items-center justify-center text-xs mb-2">
                  3
                </span>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Deploy to Vercel</h4>
                <p className="text-slate-600 leading-relaxed">
                  Provide <code>SUPABASE_URL</code> and <code>SUPABASE_ANON_KEY</code> in Vercel project environment settings. Zero cost, production grade.
                </p>
              </div>
            </div>

            {/* SQL Preview Box */}
            <div className="bg-slate-900 text-slate-200 p-4 rounded-xl font-mono text-[11px] overflow-x-auto max-h-56">
              <pre>{`-- Supabase PostgreSQL Schema Preview
CREATE TABLE public.tour_packages (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    destination TEXT NOT NULL,
    duration TEXT NOT NULL,
    price INTEGER NOT NULL,
    category TEXT CHECK (category IN ('hills', 'beach', 'haor', 'forest')),
    features JSONB,
    inclusions JSONB
);`}</pre>
            </div>
          </div>
        )}

        {/* ================= TAB 6: CUSTOM THIRD-PARTY DOMAIN SETUP ================= */}
        {activeTab === 'domain' && (
          <div className="space-y-6">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 text-white p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-emerald-800/40">
              <div>
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
                  <Globe className="w-4 h-4" />
                  <span>Third-Party Custom Domain Guide</span>
                </div>
                <h3 className="text-xl font-extrabold text-white">
                  Connect Your Own Domain to Shohagh Holidays
                </h3>
                <p className="text-xs text-emerald-200/90 mt-1 max-w-2xl leading-relaxed">
                  Run your website on any custom domain (e.g., <code>shohaghholidays.com</code> or <code>.com.bd</code>) bought from Namecheap, GoDaddy, Cloudflare, DianaHost, or BTCL with 100% Free SSL & Hosting.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`https://www.whatsmydns.net/#A/${customDomainInput}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs px-4 py-2.5 rounded-lg flex items-center gap-1.5 shadow-md shrink-0 cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Check DNS Propagation</span>
                </a>
              </div>
            </div>

            {/* Domain Calculator & Generator */}
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex-1 max-w-md">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Enter Your Purchased Domain:
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={customDomainInput}
                      onChange={(e) => setCustomDomainInput(e.target.value.toLowerCase().trim())}
                      placeholder="e.g. bookingkorotrip.com"
                      className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                </div>
                <div className="text-xs text-slate-500 max-w-xs">
                  💡 Type your root domain without <code>https://</code> or <code>www</code>.
                </div>
              </div>

              {/* Required DNS Records Table */}
              <div>
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2">
                  Required DNS Records (Add in your Domain Registrar DNS Manager):
                </h4>
                <div className="border border-slate-200 rounded-lg overflow-hidden bg-white text-xs">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-100 font-bold text-slate-700 border-b border-slate-200">
                        <th className="p-3">Type</th>
                        <th className="p-3">Name / Host</th>
                        <th className="p-3">Value / Target Destination</th>
                        <th className="p-3">TTL</th>
                        <th className="p-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 font-mono text-[11px]">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-bold text-emerald-800">A</td>
                        <td className="p-3 text-slate-700">@</td>
                        <td className="p-3 font-semibold text-slate-900">76.76.21.21</td>
                        <td className="p-3 text-slate-500">Auto / 3600</td>
                        <td className="p-3 text-right">
                          <button
                            onClick={() => {
                              if (navigator.clipboard) {
                                navigator.clipboard.writeText('76.76.21.21');
                                addToast('Copied IP 76.76.21.21 to clipboard!', 'success');
                              }
                            }}
                            className="text-xs text-emerald-700 hover:text-emerald-900 font-sans font-bold flex items-center gap-1 ml-auto"
                          >
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-bold text-teal-800">CNAME</td>
                        <td className="p-3 text-slate-700">www</td>
                        <td className="p-3 font-semibold text-slate-900">cname.vercel-dns.com</td>
                        <td className="p-3 text-slate-500">Auto / 3600</td>
                        <td className="p-3 text-right">
                          <button
                            onClick={() => {
                              if (navigator.clipboard) {
                                navigator.clipboard.writeText('cname.vercel-dns.com');
                                addToast('Copied cname.vercel-dns.com to clipboard!', 'success');
                              }
                            }}
                            className="text-xs text-emerald-700 hover:text-emerald-900 font-sans font-bold flex items-center gap-1 ml-auto"
                          >
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 3 Step Deployment Guide */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="p-5 bg-white rounded-xl border border-slate-200 text-xs space-y-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-800 text-white font-bold flex items-center justify-center text-xs">
                  1
                </div>
                <h4 className="font-bold text-sm text-slate-900">
                  Export Code to GitHub
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Download or push your project to a GitHub repository:
                </p>
                <div className="bg-slate-900 text-slate-200 p-2.5 rounded font-mono text-[10px] space-y-1">
                  <div>git init</div>
                  <div>git add .</div>
                  <div>git commit -m "Booking Koro Trip Launch"</div>
                  <div>git push -u origin main</div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-5 bg-white rounded-xl border border-slate-200 text-xs space-y-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-800 text-white font-bold flex items-center justify-center text-xs">
                  2
                </div>
                <h4 className="font-bold text-sm text-slate-900">
                  Import into Vercel (100% Free)
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Go to <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-emerald-700 font-bold underline">vercel.com</a>, log in with GitHub, click <strong>Add New Project</strong>, select your repository, and click <strong>Deploy</strong>.
                </p>
                <div className="p-2.5 bg-emerald-50 rounded border border-emerald-100 text-emerald-900 font-medium">
                  Vercel builds and hosts your app with unlimited high-speed bandwidth, zero monthly server cost.
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-5 bg-white rounded-xl border border-slate-200 text-xs space-y-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-800 text-white font-bold flex items-center justify-center text-xs">
                  3
                </div>
                <h4 className="font-bold text-sm text-slate-900">
                  Add Domain & DNS
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Inside your Vercel Project Dashboard:
                </p>
                <ol className="list-decimal list-inside space-y-1 text-slate-700">
                  <li>Click <strong>Settings</strong> &gt; <strong>Domains</strong></li>
                  <li>Enter <code>{customDomainInput || 'bookingkorotrip.com'}</code> and click <strong>Add</strong></li>
                  <li>Copy the DNS records above into your domain registrar (Namecheap, GoDaddy, DianaHost, etc.)</li>
                </ol>
                <p className="text-emerald-800 font-bold pt-1">
                  ✓ SSL certificate automatically generates for HTTPS within 5-10 minutes.
                </p>
              </div>
            </div>

            {/* Bangladesh .com.bd Registrar Instructions */}
            <div className="p-5 bg-amber-50/70 rounded-xl border border-amber-200 text-xs space-y-2">
              <h4 className="font-bold text-sm text-amber-950 flex items-center gap-1.5">
                <span>Special Instructions for <code>.com.bd</code> Domains (BTCL / DianaHost / ExonHost)</span>
              </h4>
              <p className="text-amber-900 leading-relaxed">
                If you registered a <strong>.com.bd</strong> or <strong>.bd</strong> domain through BTCL, you can simply change your domain Nameservers to Cloudflare or Vercel:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="bg-white p-3 rounded-lg border border-amber-200">
                  <span className="font-bold text-slate-800 block mb-1">Vercel Nameservers:</span>
                  <div className="font-mono text-[11px] text-slate-700">
                    <div>ns1.vercel-dns.com</div>
                    <div>ns2.vercel-dns.com</div>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-amber-200">
                  <span className="font-bold text-slate-800 block mb-1">Cloudflare (Alternative):</span>
                  <div className="font-mono text-[11px] text-slate-700">
                    <div>Connect domain via Cloudflare free plan, then proxy to your server.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
