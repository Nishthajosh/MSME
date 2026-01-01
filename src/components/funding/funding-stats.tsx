"use client";

import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Badge } from '@/components/ui/badge';

const stats = [
  { value: '20K+', label: 'MSMEs Registered', sublabel: 'On Udyam Portal' },
  { value: '₹500Cr+', label: 'Credit Facilitated', sublabel: 'Since 2020' },
  { value: '95%', label: 'Success Rate', sublabel: 'Approval Rate' },
  { value: '28/36', label: 'Pan India Coverage', sublabel: 'States & UTs' },
];

const topStates = [
  { state: 'Maharashtra', count: '82L+' },
  { state: 'Tamil Nadu', count: '49L+' },
  { state: 'Gujarat', count: '41L+' },
  { state: 'Uttar Pradesh', count: '39L+' },
  { state: 'Karnataka', count: '34L+' },
];

const sectorDistribution = [
  { sector: 'Manufacturing', percentage: 31, color: 'bg-blue-500' },
  { sector: 'Trading', percentage: 36, color: 'bg-emerald-500' },
  { sector: 'Services', percentage: 33, color: 'bg-purple-500' },
];

const governmentSupport = [
  { title: '₹4.14L Cr', subtitle: 'MUDRA loans' },
  { title: '₹7,593 Cr', subtitle: 'SRI Fund invested' },
  { title: '200+', subtitle: 'RAMP proposals approved' },
  { title: '20.5%', subtitle: 'Women-owned MSMEs' },
];

export function FundingStats() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800">
              Our Impact
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Driving MSME Success Across India
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              4.77 crore MSMEs registered on Udyam portal, transforming India&apos;s economic landscape
            </p>
          </div>
        </AnimateOnScroll>

        {/* Main Stats */}
        <AnimateOnScroll delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl">
                <div className="text-3xl md:text-4xl font-bold text-blue-900">{stat.value}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Top MSME States */}
          <AnimateOnScroll delay={300}>
            <div className="p-6 bg-slate-50 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Top MSME States</h3>
              <div className="space-y-4">
                {topStates.map((item, index) => (
                  <div key={item.state} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-gray-500 w-6">{index + 1}</span>
                      <span className="font-medium text-gray-800">{item.state}</span>
                    </div>
                    <Badge variant="outline" className="text-emerald-600 border-emerald-300">
                      {item.count}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Sector Distribution */}
          <AnimateOnScroll delay={400}>
            <div className="p-6 bg-slate-50 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Sector Distribution</h3>
              <div className="space-y-4">
                {sectorDistribution.map((item) => (
                  <div key={item.sector}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-800">{item.sector}</span>
                      <span className="font-bold text-gray-900">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full ${item.color} transition-all duration-1000`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Government Support Programs */}
        <AnimateOnScroll delay={500}>
          <div className="mt-12 p-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl text-white">
            <h3 className="text-xl font-bold mb-6 text-center">Government Support Programs</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {governmentSupport.map((item) => (
                <div key={item.subtitle} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold">{item.title}</div>
                  <div className="text-emerald-100 text-sm">{item.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
