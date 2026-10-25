import React, { useState } from 'react';
import { TourPackage } from './types';
import { useTravel } from './TravelContext';
import {
  X,
  Clock,
  MapPin,
  Calendar,
  CheckCircle2,
  XCircle,
  Phone,
  MessageSquare,
  ShieldAlert,
  Star,
  Users,
  Bus,
  Bed,
  UtensilsCrossed,
  Share2
} from 'lucide-react';

interface PackageDetailModalProps {
  pkg: TourPackage | null;
  onClose: () => void;
}

export const PackageDetailModal: React.FC<PackageDetailModalProps> = ({ pkg, onClose }) => {
  const { getWhatsAppPackageUrl, getWhatsAppCustomUrl, addToast } = useTravel();
  const [activeTab, setActiveTab] = useState<'itinerary' | 'inclusions' | 'guidelines'>('itinerary');
  const [selectedDeparture, setSelectedDeparture] = useState<string>(pkg?.nextDepartures[0] || '');
  const [guestsCount, setGuestsCount] = useState<number>(2);

  if (!pkg) return null;

  // Exact requested WhatsApp link:
  // "Book via WhatsApp" button linked to WhatsApp (+8801572596078) with auto-filled text: "Hello, I want to book: [Package Name] - Price: [Price]"
  const standardWhatsAppUrl = getWhatsAppPackageUrl(pkg.title, pkg.price);

  // Customized inquiry WhatsApp message
  const customizedWhatsAppMessage = `Hello, I want to book: ${pkg.title} - Price: ৳${pkg.price.toLocaleString()} for ${guestsCount} person(s). Preferred Date: ${selectedDeparture || 'Upcoming Weekend'}. Please confirm slot availability.`;
  const customizedWhatsAppUrl = getWhatsAppCustomUrl(customizedWhatsAppMessage);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      addToast('Tour link copied to clipboard!', 'info');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200">
        {/* Modal Header & Hero Image */}
        <div className="relative h-64 sm:h-80 bg-slate-900 shrink-0">
          <img
            src={pkg.coverImage}
            alt={pkg.title}
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Close & Share buttons */}
          <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
            <button
              onClick={handleShare}
              className="w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md transition-colors"
              title="Share Tour"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md transition-colors"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Header Title info */}
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2 text-xs font-semibold">
              <span className="bg-emerald-600 text-white px-2.5 py-0.5 rounded flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {pkg.duration}
              </span>
              <span className="bg-black/50 backdrop-blur-xs text-slate-200 px-2.5 py-0.5 rounded flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                {pkg.destination}
              </span>
              <span className="bg-amber-500/90 text-slate-950 font-bold px-2.5 py-0.5 rounded flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-slate-950" />
                {pkg.rating} ({pkg.reviewCount} Reviews)
              </span>
            </div>

            <h2 className="text-xl sm:text-3xl font-extrabold text-white leading-tight">
              {pkg.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">
              {pkg.tagline}
            </p>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 border-b border-slate-200 bg-slate-50 text-xs font-bold text-slate-600 overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`py-3.5 px-3 border-b-2 transition-colors cursor-pointer shrink-0 ${
              activeTab === 'itinerary'
                ? 'border-emerald-700 text-emerald-800'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Detailed Day Itinerary
          </button>
          <button
            onClick={() => setActiveTab('inclusions')}
            className={`py-3.5 px-3 border-b-2 transition-colors cursor-pointer shrink-0 ${
              activeTab === 'inclusions'
                ? 'border-emerald-700 text-emerald-800'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Inclusions & Exclusions
          </button>
          <button
            onClick={() => setActiveTab('guidelines')}
            className={`py-3.5 px-3 border-b-2 transition-colors cursor-pointer shrink-0 ${
              activeTab === 'guidelines'
                ? 'border-emerald-700 text-emerald-800'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Guidelines & Checkpost Rules
          </button>
        </div>

        {/* Modal Body Content (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* TAB 1: ITINERARY */}
          {activeTab === 'itinerary' && (
            <div className="space-y-6">
              <div className="bg-emerald-50/70 border border-emerald-100 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Bus className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>
                    <strong>Departure Point:</strong> {pkg.departurePoint}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>
                    <strong>Upcoming Schedule:</strong> {pkg.nextDepartures.join(' | ')}
                  </span>
                </div>
              </div>

              {/* Day by Day Cards */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-xs">
                  Tour Schedule & Sightseeing Flow
                </h4>

                {pkg.itinerary.map((dayPlan) => (
                  <div
                    key={dayPlan.day}
                    className="p-4 rounded-xl border border-slate-200/90 bg-white hover:border-emerald-300 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="w-7 h-7 rounded-lg bg-emerald-800 text-white text-xs font-bold flex items-center justify-center shrink-0">
                        D{dayPlan.day}
                      </span>
                      <h5 className="font-bold text-slate-900 text-sm">
                        {dayPlan.title}
                      </h5>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-9">
                      {dayPlan.description}
                    </p>

                    <div className="mt-3 pl-9 pt-2 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <UtensilsCrossed className="w-3.5 h-3.5 text-emerald-600" />
                        <span><strong>Meals:</strong> {dayPlan.meals}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Bed className="w-3.5 h-3.5 text-emerald-600" />
                        <span><strong>Night Stay:</strong> {dayPlan.stay}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: INCLUSIONS & EXCLUSIONS */}
          {activeTab === 'inclusions' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inclusions */}
              <div className="bg-emerald-50/50 rounded-xl p-5 border border-emerald-100">
                <h4 className="font-bold text-emerald-950 text-sm flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  What’s Included in This Package
                </h4>
                <ul className="space-y-2.5">
                  {pkg.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-4">
                  <XCircle className="w-4 h-4 text-rose-600" />
                  What’s Not Included (Exclusions)
                </h4>
                <ul className="space-y-2.5">
                  {pkg.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 3: GUIDELINES & RULES */}
          {activeTab === 'guidelines' && (
            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-amber-950">
                    Important Travel Instructions & Bangladesh Security Guidelines
                  </h4>
                  <p className="text-xs text-amber-900/90 mt-1 leading-relaxed">
                    Domestic tourism regulations are maintained strictly for your comfort and safety. Please follow the instructions below before departure.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.travelTips?.map((tip, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700">
                    <span className="font-bold text-emerald-800 block mb-1">Checklist Item #{idx + 1}</span>
                    {tip}
                  </div>
                ))}
                <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700">
                  <span className="font-bold text-emerald-800 block mb-1">Payment & Booking Confirmation</span>
                  Book with 50% advance via bKash, Nagad, or Bank Transfer. Rest amount payable at tour departure counter.
                </div>
              </div>
            </div>
          )}

          {/* Quick Booking Options Form inside modal */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
              Configure Your Tour Group & Instant WhatsApp Booking
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Preferred Batch Date
                </label>
                <select
                  value={selectedDeparture}
                  onChange={(e) => setSelectedDeparture(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs font-semibold text-slate-800"
                >
                  {pkg.nextDepartures.map((dep, idx) => (
                    <option key={idx} value={dep}>
                      {dep}
                    </option>
                  ))}
                  <option value="Custom Weekend Date">Custom Date (Discuss via WhatsApp)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-emerald-700" />
                  Traveler Count
                </label>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setGuestsCount(Math.max(1, guestsCount - 1))}
                    className="w-8 h-8 rounded bg-white border border-slate-200 font-bold text-slate-700 hover:bg-slate-100"
                  >
                    -
                  </button>
                  <span className="font-bold text-sm text-slate-900 w-8 text-center">
                    {guestsCount}
                  </span>
                  <button
                    onClick={() => setGuestsCount(guestsCount + 1)}
                    className="w-8 h-8 rounded bg-white border border-slate-200 font-bold text-slate-700 hover:bg-slate-100"
                  >
                    +
                  </button>
                  <span className="text-xs text-slate-500 font-medium">Persons</span>
                </div>
              </div>

              <div>
                <div className="text-right">
                  <span className="text-xs text-slate-500 block">Total Est. Cost:</span>
                  <span className="text-lg font-extrabold text-emerald-800">
                    ৳{(pkg.price * guestsCount).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Sticky Bottom CTA Bar */}
        <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-emerald-800">
                ৳{pkg.price.toLocaleString()}
              </span>
              {pkg.regularPrice && pkg.regularPrice > pkg.price && (
                <span className="text-xs text-slate-400 line-through">
                  ৳{pkg.regularPrice.toLocaleString()}
                </span>
              )}
              <span className="text-xs text-slate-500 font-medium">/ person (All-inclusive)</span>
            </div>
            <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              Instant WhatsApp Reservation Confirmation
            </span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            {/* Phone Call Button */}
            <a
              href="tel:+8801572596078"
              className="px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-colors shrink-0"
              title="Call hotline"
            >
              <Phone className="w-4 h-4 text-emerald-700" />
              <span className="hidden sm:inline">Call Hotline</span>
            </a>

            {/* DIRECT "BOOK VIA WHATSAPP" BUTTON (CRITICAL REQUIREMENT) */}
            <a
              href={guestsCount > 1 || selectedDeparture ? customizedWhatsAppUrl : standardWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all group"
            >
              <MessageSquare className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
              <span>Book via WhatsApp (+8801572596078)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
