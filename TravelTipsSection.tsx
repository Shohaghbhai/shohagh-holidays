import React, { useState } from 'react';
import { useTravel } from './TravelContext';
import { TravelTip } from './types';
import { BookOpen, Clock, Calendar, ArrowRight, User, X, Share2, Compass } from 'lucide-react';

export const TravelTipsSection: React.FC = () => {
  const { travelTips, selectedTip, setSelectedTip, addToast } = useTravel();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', 'Hill Tracts', 'Island & Sea', 'Haor Wetlands', 'Wildlife Safari'];

  const filteredTips = activeCategory === 'all'
    ? travelTips
    : travelTips.filter((t) => t.category.toLowerCase() === activeCategory.toLowerCase());

  const handleShareArticle = (tip: TravelTip) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${window.location.origin}/#tips-${tip.slug}`);
      addToast('Travel tip link copied!', 'info');
    }
  };

  return (
    <section id="travel-tips" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
              <BookOpen className="w-4 h-4" />
              <span>Shohagh Holidays Knowledge Base & Practical Guides</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Bangladesh Travel Tips & Guides
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl">
              Authentic field guides, safety instructions, weather forecasts, and permit requirements curated by our tour directors across Bangladesh.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1 p-1 bg-slate-100 rounded-xl self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-white text-emerald-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat === 'all' ? 'All Guides' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Travel Tips Grid (greenbelt.com.bd/category/travel-tips/ inspired layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTips.map((tip) => (
            <article
              key={tip.id}
              className="bg-white rounded-xl border border-slate-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Thumbnail */}
                <div
                  onClick={() => setSelectedTip(tip)}
                  className="relative aspect-[16/10] overflow-hidden bg-slate-100 cursor-pointer"
                >
                  <img
                    src={tip.coverImage}
                    alt={tip.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-emerald-900/80 backdrop-blur-md text-emerald-200 text-[11px] font-bold px-2 py-0.5 rounded">
                      {tip.category}
                    </span>
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {tip.date}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {tip.readTime}
                    </span>
                  </div>

                  <h3
                    onClick={() => setSelectedTip(tip)}
                    className="font-bold text-base text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-2 leading-snug cursor-pointer"
                  >
                    {tip.title}
                  </h3>

                  <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                    {tip.excerpt}
                  </p>
                </div>
              </div>

              {/* Read button */}
              <div className="p-4 sm:p-5 pt-0">
                <button
                  onClick={() => setSelectedTip(tip)}
                  className="w-full text-left flex items-center justify-between text-xs font-bold text-emerald-700 hover:text-emerald-800 border-t border-slate-100 pt-3 cursor-pointer group/link"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Full Article Reading Modal */}
      {selectedTip && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200">
            {/* Header image */}
            <div className="relative h-56 sm:h-72 bg-slate-900 shrink-0">
              <img
                src={selectedTip.coverImage}
                alt={selectedTip.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <div className="absolute top-4 right-4 flex items-center gap-2">
                <button
                  onClick={() => handleShareArticle(selectedTip)}
                  className="w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedTip(null)}
                  className="w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 text-white">
                <div className="flex items-center gap-2 text-xs text-emerald-300 font-semibold mb-1">
                  <span>{selectedTip.category}</span>
                  <span>·</span>
                  <span>{selectedTip.date}</span>
                  <span>·</span>
                  <span>{selectedTip.readTime}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                  {selectedTip.title}
                </h2>
              </div>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center gap-3">
                <Compass className="w-5 h-5 text-emerald-700 shrink-0" />
                <span className="text-xs text-emerald-950 font-medium">
                  Author: <strong>{selectedTip.author}</strong> · Shohagh Holidays Field Guide
                </span>
              </div>

              {selectedTip.content.map((paragraph, idx) => (
                <p key={idx} className="text-slate-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="mt-6 pt-6 border-t border-slate-200 bg-slate-50 p-4 rounded-xl">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Need Personalized Guidance for Your Trip?
                </h4>
                <p className="text-xs text-slate-600 mb-3">
                  Have questions about this itinerary or group customized bookings? Talk directly with our tour specialists on WhatsApp.
                </p>
                <a
                  href={`https://wa.me/8801572596078?text=${encodeURIComponent(
                    `Hello Shohagh Holidays, I read your article "${selectedTip.title}" and have questions regarding my upcoming trip.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2 rounded-lg text-xs font-bold transition-all"
                >
                  Ask Question on WhatsApp (+8801572596078)
                </a>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setSelectedTip(null)}
                className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
