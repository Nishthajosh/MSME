"use client";

import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Card, CardContent } from '@/components/ui/card';

const metrics = [
  { value: '₹10 Cr+', label: 'Funds allocated to Agri and Allied Sectors', period: 'FY 2024–25' },
  { value: '₹3 Cr+', label: 'Received through PMEGP scheme', period: 'FY 2024–25' },
  { value: '₹10 Cr+', label: 'Secured through Credit Guarantee Scheme', period: 'FY 2024–25' },
  { value: '₹15 Cr+', label: 'Received through NBFC scheme', period: 'FY 2024–25' },
  { value: '10,000+', label: 'Businesses guided', period: 'FY 2024–25' },
  { value: '50,000+', label: 'Ventures assisted since inception', period: 'Since 2019' },
];

const sectorImpact = [
  { sector: 'Manufacturing', percentage: 35, businesses: '15,000+' },
  { sector: 'Services', percentage: 30, businesses: '12,000+' },
  { sector: 'Trading', percentage: 20, businesses: '8,000+' },
  { sector: 'Agriculture', percentage: 10, businesses: '4,000+' },
  { sector: 'Technology', percentage: 5, businesses: '2,000+' },
];

export function ImpactMetrics() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Impact by Numbers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results that speak for themselves
            </p>
          </div>
        </AnimateOnScroll>

        {/* Main Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <AnimateOnScroll key={metric.label} delay={100 * index}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-slate-50 to-white">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">
                    {metric.value}
                  </div>
                  <p className="text-gray-700 font-medium mb-1">{metric.label}</p>
                  <p className="text-sm text-gray-500">{metric.period}</p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Sector Impact */}
        <AnimateOnScroll delay={400}>
          <div className="bg-slate-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Sector-wise Impact
            </h3>
            <div className="grid md:grid-cols-5 gap-6">
              {sectorImpact.map((item, index) => (
                <div key={item.sector} className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="#e2e8f0"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="#10b981"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${item.percentage * 2.51} 251`}
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-bold text-gray-900">{item.percentage}%</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900">{item.sector}</h4>
                  <p className="text-sm text-gray-500">{item.businesses} businesses</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
