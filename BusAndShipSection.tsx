import React, { useState } from 'react';
import { useTravel } from './TravelContext';
import { Ship, Bus, Clock, MapPin, Check, MessageSquare, ArrowRight, ShieldCheck, Ticket } from 'lucide-react';

export const BusAndShipSection: React.FC = () => {
  const { busServices, shipServices, getWhatsAppCustomUrl } = useTravel();
  const [activeTab, setActiveTab] = useState<'ships' | 'buses'>('ships');

  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
              <Ticket className="w-4 h-4" />
              <span>Official Ticket Counters & Schedules</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Saint Martin Ships & Intercity AC Bus Services
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl">
              Book verified sea cruise ship tickets for Saint Martin Island and luxury AC sleeper buses across all domestic tourism routes. Real-time pricing with direct WhatsApp confirmation.
            </p>
          </div>

          {/* Clean Segmented Tab Control */}
          <div className="inline-flex p-1 bg-white rounded-xl border border-slate-200 shadow-xs self-start md:self-auto">
            <button
              onClick={() => setActiveTab('ships')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'ships'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Ship className="w-4 h-4" />
              <span>Saint Martin Ships ({shipServices.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('buses')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'buses'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Bus className="w-4 h-4" />
              <span>AC Bus Routes ({busServices.length})</span>
            </button>
          </div>
        </div>

        {/* SHIP SERVICES TAB */}
        {activeTab === 'ships' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {shipServices.map((ship) => {
              const minPrice = Math.min(...ship.classes.map((c) => c.priceBDT));
              const whatsappShipUrl = getWhatsAppCustomUrl(
                `Hello Shohagh Holidays, I want to book tickets for ship: ${ship.shipName} (${ship.route}). Starting price: ৳${minPrice}. Please provide available dates and seat classes.`
              );

              return (
                <div
                  key={ship.id}
                  className="bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Ship Image */}
                    <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                      <img
                        src={ship.image}
                        alt={ship.shipName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="bg-emerald-700 text-white text-[11px] font-bold px-2 py-0.5 rounded shadow-xs">
                          {ship.status}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <h3 className="font-extrabold text-lg text-white">
                          {ship.shipName}
                        </h3>
                        <p className="text-xs text-emerald-200 flex items-center gap-1 font-medium">
                          <MapPin className="w-3.5 h-3.5" />
                          {ship.route}
                        </p>
                      </div>
                    </div>

                    {/* Ship Details */}
                    <div className="p-5 space-y-4">
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                        {ship.description}
                      </p>

                      {/* Ports & Timings */}
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 space-y-1.5 text-xs">
                        <div className="flex items-center justify-between text-slate-700">
                          <span className="text-slate-500">Departure Ghat:</span>
                          <span className="font-semibold">{ship.departurePort}</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-700">
                          <span className="text-slate-500">Schedule:</span>
                          <span className="font-semibold text-emerald-800">{ship.departureTime}</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-700">
                          <span className="text-slate-500">Return Schedule:</span>
                          <span className="font-semibold">{ship.returnTime}</span>
                        </div>
                      </div>

                      {/* Classes & Ticket Fares */}
                      <div>
                        <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                          Ticket Classes & Fares (Round Trip / Single)
                        </h4>
                        <div className="space-y-2">
                          {ship.classes.map((cls, i) => (
                            <div
                              key={i}
                              className="p-2.5 rounded-lg border border-slate-100 bg-slate-50/50 flex items-center justify-between text-xs"
                            >
                              <div>
                                <span className="font-bold text-slate-800 block">
                                  {cls.className}
                                </span>
                                <span className="text-[11px] text-slate-500">
                                  {cls.features}
                                </span>
                              </div>
                              <span className="font-extrabold text-emerald-800 text-sm shrink-0 ml-2">
                                ৳{cls.priceBDT.toLocaleString()}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Ship Footer */}
                  <div className="p-5 pt-0">
                    <a
                      href={whatsappShipUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-4 rounded-lg text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2 group/wa cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-white group-hover/wa:scale-110 transition-transform" />
                      <span>Book Ship Ticket via WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* BUS SERVICES TAB */}
        {activeTab === 'buses' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {busServices.map((bus) => {
              const whatsappBusUrl = getWhatsAppCustomUrl(
                `Hello Shohagh Holidays, I want to book AC Bus ticket: ${bus.operator} - Route: ${bus.route} - Price: ৳${bus.priceBDT}. Please send available seat layout.`
              );

              return (
                <div
                  key={bus.id}
                  className="bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-all p-5 flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Operator & Route */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                          Authorized Partner
                        </span>
                        <h3 className="font-extrabold text-lg text-slate-900 mt-1">
                          {bus.operator}
                        </h3>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-slate-400 block">Per Seat</span>
                        <span className="text-xl font-extrabold text-emerald-800">
                          ৳{bus.priceBDT.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Route line */}
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 mb-4">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                        <Bus className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span>{bus.route}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1 font-medium pl-6">
                        {bus.busType}
                      </p>
                    </div>

                    {/* Timings */}
                    <div className="space-y-2 mb-4 text-xs">
                      <div>
                        <span className="font-semibold text-slate-600 block mb-1 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" /> Daily Departure Timings:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {bus.departureTimes.map((time, idx) => (
                            <span
                              key={idx}
                              className="bg-white text-slate-700 border border-slate-200 font-semibold px-2 py-0.5 rounded text-[11px]"
                            >
                              {time}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Boarding Points */}
                      <div className="pt-2 text-[11px] text-slate-600">
                        <span className="font-semibold text-slate-700">Boarding: </span>
                        <span>{bus.boardingPoints.join(', ')}</span>
                      </div>
                    </div>

                    {/* Amenities list */}
                    <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2 text-[11px] text-slate-600">
                      {bus.amenities.map((amenity, i) => (
                        <span key={i} className="flex items-center gap-1 text-slate-500">
                          <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Book Button */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <a
                      href={whatsappBusUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-3 rounded-lg text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 group/wa cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-white group-hover/wa:scale-110 transition-transform" />
                      <span>Book Bus Ticket via WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
