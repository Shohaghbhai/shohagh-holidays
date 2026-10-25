import React from 'react';
import { Compass, Phone, Mail, MapPin, MessageSquare, ShieldCheck, Heart, Award, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavClick: (view: 'home' | 'packages' | 'services' | 'blog' | 'admin') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#041a0e] text-slate-300 border-t border-emerald-950">
      {/* Top Banner: WhatsApp Direct Booking */}
      <div className="bg-emerald-900/40 border-b border-emerald-800/40 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider block mb-1">
              Ready to Explore Domestic Bangladesh?
            </span>
            <h3 className="text-2xl font-extrabold text-white">
              Instant Booking & Custom Group Tour Inquiries
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200/80 mt-1">
              Connect directly with our Dhaka central reservation desk via WhatsApp or phone call.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/8801572596078?text=Hello%20Shohagh%20Holidays%2C%20I%20want%20to%20plan%20a%20domestic%20tour%20in%20Bangladesh"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp: +8801572596078</span>
            </a>

            <a
              href="tel:+8801572596078"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call: +8801572596078</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-white">
                <Compass className="w-5 h-5 text-emerald-200" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Shohagh<span className="text-emerald-400">Holidays</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Shohagh Holidays (সোহাগ হলিডেজ) is an eco-conscious domestic travel operator dedicated solely to the natural splendors of Bangladesh. We specialize in Sajek Valley, Saint Martin’s Island, Sundarbans, Tanguar Haor, and Cox’s Bazar.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>নিরাপদ ভ্রমণ ও আন্তরিক আতিথেয়তা · Trusted Service</span>
            </div>
          </div>

          {/* Domestic Destinations */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Top Domestic Tours
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavClick('packages')} className="hover:text-emerald-400 transition-colors">
                  Sajek Valley Cloud Safari
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('packages')} className="hover:text-emerald-400 transition-colors">
                  Saint Martin & Chera Dwip
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('packages')} className="hover:text-emerald-400 transition-colors">
                  Tanguar Haor Luxury Houseboat
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('packages')} className="hover:text-emerald-400 transition-colors">
                  Sundarbans Royal Bengal Cruise
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('packages')} className="hover:text-emerald-400 transition-colors">
                  Cox’s Bazar Marine Drive
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('packages')} className="hover:text-emerald-400 transition-colors">
                  Sylhet & Sreemangal Tea Gardens
                </button>
              </li>
            </ul>
          </div>

          {/* Services & Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Services & Guides
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavClick('services')} className="hover:text-emerald-400 transition-colors">
                  Saint Martin Ship Schedules
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('services')} className="hover:text-emerald-400 transition-colors">
                  Intercity AC Bus Tickets
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('blog')} className="hover:text-emerald-400 transition-colors">
                  Travel Tips (greenbelt.com.bd)
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('admin')} className="hover:text-emerald-400 transition-colors">
                  Admin Management Portal
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/8801572596078?text=Hello,%20I%20need%20custom%20corporate%20tour%20quotation"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Corporate & Group Booking
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Dhaka Head Office (প্রধান কার্যালয়)
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>টয়েনবি ভবন, টয়েনবি সার্কুলার রোড, মতিঝিল, ঢাকা-১০০০ (Toyenbee Bhaban, Motijheel, Dhaka-1000)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+8801572596078" className="hover:text-white">
                  +8801572596078
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>WhatsApp: +8801572596078</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>booking@shohaghholidays.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods & Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-emerald-950 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <span>Accepted Payment:</span>
            <span className="font-bold text-slate-300">bKash Merchant</span>
            <span>·</span>
            <span className="font-bold text-slate-300">Nagad</span>
            <span>·</span>
            <span className="font-bold text-slate-300">Rocket</span>
            <span>·</span>
            <span className="font-bold text-slate-300">Bank Transfer</span>
          </div>

          <div className="flex items-center gap-4">
            <p>© {new Date().getFullYear()} Shohagh Holidays Bangladesh. All rights reserved.</p>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-emerald-900/50 hover:bg-emerald-800 text-emerald-300 transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
