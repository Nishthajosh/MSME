"use client";

import { AnimateOnScroll } from '../animate-on-scroll';
import { FileText, IndianRupee, Target, MapPin, BarChart3 } from 'lucide-react';

const stats = [
  { value: '47,700K+', label: 'MSMEs Registered', sublabel: 'On Udyam Portal', icon: FileText, color: 'bg-blue-500' },
  { value: '₹757Cr+', label: 'Credit Facilitated', sublabel: 'Since 2020', icon: IndianRupee, color: 'bg-purple-500' },
  { value: '95%', label: 'Success Rate', sublabel: 'Approval Rate', icon: Target, color: 'bg-orange-500' },
  { value: '28/36', label: 'Pan India Coverage', sublabel: 'States & UTs', icon: MapPin, color: 'bg-red-500' },
];

const topStates = [
  { state: 'Maharashtra', count: '82L+', width: '100%' },
  { state: 'Tamil Nadu', count: '49L+', width: '60%' },
  { state: 'Gujarat', count: '41L+', width: '50%' },
  { state: 'Uttar Pradesh', count: '39L+', width: '48%' },
  { state: 'Karnataka', count: '34L+', width: '42%' },
];

const sectorData = [
  { name: 'Manufacturing', percentage: 31 },
  { name: 'Trading', percentage: 36 },
  { name: 'Services', percentage: 33 },
];

const govStats = [
  '₹4.14L Cr MUDRA loans',
  '₹7,593 Cr SRI Fund invested',
  '200+ RAMP proposals approved',
  '20.5% Women-owned MSMEs',
];

// Floating snowflakes for background
const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute text-blue-300/20 text-sm"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      >
        ❄
      </div>
    ))}
  </div>
);

export function Stats() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0f1729] to-[#1a1f3a] relative overflow-hidden">
      <FloatingElements />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 rounded-full px-4 py-2 mb-4">
              <span className="w-2 h-2 bg-red-400 rounded-full"></span>
              <span className="text-red-300 text-sm font-medium">Our Impact</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Driving <span className="text-[#f97068]">MSME Success</span> Across India
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              4.77 crore MSMEs registered on Udyam portal, transforming India's economic landscape
            </p>
          </div>
        </AnimateOnScroll>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <AnimateOnScroll key={stat.label} delay={index * 100}>
              <div className="bg-[#1e2642]/80 border border-gray-700/50 rounded-2xl p-6">
                <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-white font-medium">{stat.label}</p>
                <p className="text-gray-500 text-sm">{stat.sublabel}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Bottom Section - Map & Stats */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left - India Map Placeholder */}
          <AnimateOnScroll delay={200}>
            <div className="bg-[#1e2642]/80 border border-gray-700/50 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-5 h-5 text-red-400" />
                <h3 className="text-xl font-bold text-white">Pan-India Presence</h3>
              </div>
              
              {/* Simplified India map representation */}
              <div className="relative h-64 bg-gradient-to-b from-[#2a3352] to-[#1e2642] rounded-xl flex items-center justify-center mb-6 overflow-hidden">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-gray-400">India Coverage Map</p>
                </div>
                {/* City markers */}
                <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-red-500 rounded-full animate-pulse delay-100"></div>
                <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-red-500 rounded-full animate-pulse delay-200"></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#2a3352] rounded-xl p-4 text-center">
                  <p className="text-gray-400 text-sm">Active States</p>
                  <p className="text-2xl font-bold text-[#f97068]">28/36</p>
                </div>
                <div className="bg-[#2a3352] rounded-xl p-4 text-center">
                  <p className="text-gray-400 text-sm">Top Region</p>
                  <p className="text-2xl font-bold text-[#f97068]">West India</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right - Stats */}
          <div className="space-y-6">
            {/* Top MSME States */}
            <AnimateOnScroll delay={300}>
              <div className="bg-[#1e2642]/80 border border-gray-700/50 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="w-5 h-5 text-blue-400" />
                  <h3 className="text-lg font-bold text-white">Top MSME States</h3>
                </div>
                <div className="space-y-3">
                  {topStates.map((item) => (
                    <div key={item.state}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white">{item.state}</span>
                        <span className="text-[#f97068] font-medium">{item.count}</span>
                      </div>
                      <div className="h-2 bg-[#2a3352] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#f97068] to-[#ff8a7a] rounded-full"
                          style={{ width: item.width }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Sector Distribution */}
            <AnimateOnScroll delay={400}>
              <div className="bg-[#1e2642]/80 border border-gray-700/50 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-purple-400" />
                  <h3 className="text-lg font-bold text-white">Sector Distribution</h3>
                </div>
                <div className="flex justify-around items-center">
                  {sectorData.map((sector) => (
                    <div key={sector.name} className="text-center">
                      <div className="relative w-20 h-20 mx-auto mb-2">
                        <svg className="w-20 h-20 transform -rotate-90">
                          <circle
                            cx="40"
                            cy="40"
                            r="35"
                            stroke="#2a3352"
                            strokeWidth="6"
                            fill="none"
                          />
                          <circle
                            cx="40"
                            cy="40"
                            r="35"
                            stroke="#f97068"
                            strokeWidth="6"
                            fill="none"
                            strokeDasharray={`${sector.percentage * 2.2} 220`}
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white font-bold">{sector.percentage}%</span>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">{sector.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Government Stats Banner */}
        <AnimateOnScroll delay={500}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {govStats.map((stat) => (
              <div key={stat} className="bg-[#2a3352] rounded-full px-6 py-3 text-white text-sm font-medium">
                {stat}
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
