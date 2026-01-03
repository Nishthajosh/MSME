"use client";

import { AnimateOnScroll } from '../animate-on-scroll';
import { MapPin, Building2 } from 'lucide-react';

const officeRegions = [
  {
    region: 'Gujarat',
    color: 'from-orange-500 to-orange-600',
    offices: [
      'B-304/2 Gopal Palace, Near Shiromani Complex, opposite Ocean Park, Nehru Nagar, Ahmedabad-380015',
      'Unicus Shyamal, A-1007, Near Shyamal Cross Road, Ahmedabad – 380015',
      'B-101 Synergy Tower, Near Vodafone House, Corporate Road, Ahmedabad – 380015',
    ],
  },
  {
    region: 'Uttar Pradesh',
    color: 'from-blue-500 to-blue-600',
    offices: [
      'Office No. 76, Green City, Banthra Main Road, Lucknow – 226401',
      '17, The Mall Road, Near Kanpur Railway Station – 208001',
      '325/3, Paresh Score, Near Hotel Ayodhya, Benares – 221001',
    ],
  },
  {
    region: 'Maharashtra & West Bengal',
    color: 'from-purple-500 to-purple-600',
    offices: [
      'Rahul Estate, Bo-azcha Road, Ambernath (E) – 421501',
      '86, Bozar Gate Street, Fort, Mumbai – 400001',
      'Digvijay House, Netaji Subhash Road, Kolkata – 700040',
    ],
  },
];

export function Offices() {
  return (
    <section id="offices" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-4">
              <Building2 className="w-4 h-4 text-green-400" />
              <span className="text-green-300 text-sm font-medium">Pan-India Presence</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Offices
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Empowering businesses nationwide with local support and expertise
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {officeRegions.map((region, index) => (
            <AnimateOnScroll key={region.region} delay={200 + index * 150}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 h-full">
                <div className={`bg-gradient-to-r ${region.color} px-6 py-4`}>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    {region.region}
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  {region.offices.map((address, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-white font-medium">{i + 1}</span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">{address}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Map placeholder / Stats */}
        <AnimateOnScroll delay={600}>
          <div className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-400">28+</div>
                <div className="text-gray-400 text-sm">Active States</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">10+</div>
                <div className="text-gray-400 text-sm">Office Locations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">500+</div>
                <div className="text-gray-400 text-sm">Cities Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">24/7</div>
                <div className="text-gray-400 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
