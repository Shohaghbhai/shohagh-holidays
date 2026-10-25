import React from 'react';
import { TourPackage } from './types';
import { useTravel } from './TravelContext';
import { Clock, MapPin, Check, Star, MessageSquare, ArrowRight, Edit3 } from 'lucide-react';

interface PackageCardProps {
  pkg: TourPackage;
  onViewDetails: (pkg: TourPackage) => void;
  onEditClick?: (pkg: TourPackage) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg, onViewDetails, onEditClick }) => {
  const { getWhatsAppPackageUrl, isAdminLoggedIn } = useTravel();

  // Exact URL requested:
  // WhatsApp (+8801572596078) with auto-filled text: "Hello, I want to book: [Package Name] - Price: [Price]"
  const whatsappUrl = getWhatsAppPackageUrl(pkg.title, pkg.price);

  return (
    <div className="bg-white rounded-xl border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group">
      {/* Cover Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={pkg.coverImage}
          alt={pkg.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />

        {/* Top Badges: Unboxed metadata / clean tag */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="bg-emerald-950/80 backdrop-blur-md text-emerald-200 text-xs font-semibold px-2.5 py-1 rounded shadow-xs flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-emerald-300" />
            {pkg.duration}
          </span>

          {pkg.regularPrice && pkg.regularPrice > pkg.price && (
            <span className="bg-amber-600/90 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded shadow-xs">
              Save ৳{(pkg.regularPrice - pkg.price).toLocaleString()}
            </span>
          )}
        </div>

        {/* Bottom Image Overlay: Destination & Rating */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-100 drop-shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="truncate max-w-[200px]">{pkg.destination}</span>
          </div>

          <div className="flex items-center gap-1 text-xs font-semibold bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{pkg.rating}</span>
            <span className="text-slate-300 text-[11px]">({pkg.reviewCount})</span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3
            onClick={() => onViewDetails(pkg)}
            className="font-bold text-lg text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-1 cursor-pointer"
          >
            {pkg.title}
          </h3>

          <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
            {pkg.tagline}
          </p>

          {/* Key Inclusions Highlights */}
          <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
            {pkg.features.slice(0, 3).map((feat, index) => (
              <div key={index} className="flex items-start gap-2 text-xs text-slate-700">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & CTA Section */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-[11px] text-slate-400 font-medium block">Starting from</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-emerald-800">
                  ৳{pkg.price.toLocaleString()}
                </span>
                {pkg.regularPrice && pkg.regularPrice > pkg.price && (
                  <span className="text-xs text-slate-400 line-through">
                    ৳{pkg.regularPrice.toLocaleString()}
                  </span>
                )}
                <span className="text-[11px] text-slate-500">/ person</span>
              </div>
            </div>

            {isAdminLoggedIn && onEditClick && (
              <button
                onClick={() => onEditClick(pkg)}
                className="text-xs text-emerald-700 bg-emerald-50 hover:bg-emerald-100 p-1.5 rounded flex items-center gap-1 border border-emerald-200"
                title="Edit Package Price or Details"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
            )}
          </div>

          {/* Dual Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onViewDetails(pkg)}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 py-2.5 px-3 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Itinerary</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
            </button>

            {/* DIRECT BOOK VIA WHATSAPP BUTTON (CRITICAL REQUIREMENT) */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-3 rounded-lg text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer group/wa"
              title="Book package instantly via WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white group-hover/wa:scale-110 transition-transform" />
              <span>Book via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
