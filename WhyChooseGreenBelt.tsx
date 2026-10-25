import React from 'react';
import { Shield, Sparkles, Bus, Award, HeartHandshake, PhoneCall } from 'lucide-react';

export const WhyChooseGreenBelt: React.FC = () => {
  const points = [
    {
      icon: Shield,
      title: '100% Domestic Bangladesh Focus',
      description: 'We don’t do generic foreign packages. 100% of our resources and expertise are dedicated solely to the beauty, culture, and nature of Bangladesh.'
    },
    {
      icon: Bus,
      title: 'Verified AC Coaches & Ships',
      description: 'Partnered with Scania Multi-Axle operators, private 4x4 Chander Gari hill jeeps, and authorized Saint Martin ships for supreme safety.'
    },
    {
      icon: Sparkles,
      title: 'Prime Hilltop & Beach Cottages',
      description: 'Handpicked valley-facing wooden eco-cottages in Sajek and beachfront resorts in Saint Martin with scenic balconies and attached washrooms.'
    },
    {
      icon: Award,
      title: 'Authentic Local Bengali Feasts',
      description: 'From traditional bamboo chicken in Sajek, to fresh coral fish BBQ in Saint Martin and Haor duck bhuna in Tanguar, you eat delicious local recipes.'
    },
    {
      icon: HeartHandshake,
      title: 'Armed Guards & Trained Guides',
      description: 'Govt. armed forest guards included in Sundarbans wildlife cruises and friendly 24/7 experienced tour managers on every single departure.'
    },
    {
      icon: PhoneCall,
      title: 'Instant WhatsApp Booking',
      description: 'No tedious multi-page checkout. Direct one-click booking to our Dhaka helpline (+8801572596078) with immediate receipt and batch confirmation.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#f8faf8] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider block mb-2">
            Why Shohagh Holidays
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Built for Travelers Who Love Genuine Bangladesh
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Over 15,000 corporate groups, university batches, and families trust Shohagh Holidays (সোহাগ হলিডেজ) for domestic travel memories that last a lifetime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-xs hover:border-emerald-300 transition-all flex flex-col justify-start"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4 border border-emerald-100">
                  <Icon className="w-5 h-5 text-emerald-700" />
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-2">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
