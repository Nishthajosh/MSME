"use client";

import { AnimateOnScroll } from '../animate-on-scroll';
import { TrendingUp, Users, IndianRupee, Award, Target, Building } from 'lucide-react';

const impactData = [
  { number: '₹10 Cr+', text: 'Funds allocated to Agri and Allied Sectors', sublabel: 'FY 2024–25', icon: Leaf, color: 'from-green-500 to-green-600' },
  { number: '₹3 Cr+', text: 'Received through PMEGP scheme', sublabel: 'FY 2024–25', icon: IndianRupee, color: 'from-blue-500 to-blue-600' },
  { number: '₹10 Cr+', text: 'Credit Guarantee Scheme', sublabel: 'FY 2024–25', icon: Shield, color: 'from-purple-500 to-purple-600' },
  { number: '₹15 Cr+', text: 'Through NBFC scheme', sublabel: 'FY 2024–25', icon: Building, color: 'from-orange-500 to-orange-600' },
  { number: '10,000+', text: 'Businesses guided', sublabel: 'FY 2024–25', icon: Users, color: 'from-teal-500 to-teal-600' },
  { number: '50,000+', text: 'Ventures assisted', sublabel: 'Since inception', icon: TrendingUp, color: 'from-pink-500 to-pink-600' },
];

import { Shield, Leaf } from 'lucide-react';

export function Impact() {
  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4 text-green-400" />
              <span className="text-green-300 text-sm font-medium">Our Impact</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Driving Growth & Success
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Empowering Indian businesses with funding, guidance, and growth solutions
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactData.map((item, index) => (
            <AnimateOnScroll key={`${item.number}-${index}`} delay={200 + index * 100}>
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                    {item.number}
                  </div>
                  <p className="text-white font-medium mb-1">{item.text}</p>
                  <p className="text-gray-500 text-sm">{item.sublabel}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimateOnScroll delay={800}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-4">
              <Target className="w-8 h-8 text-orange-400" />
              <div className="text-left">
                <p className="text-white font-semibold">Join 50,000+ successful businesses</p>
                <p className="text-gray-400 text-sm">Start your funding journey today</p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
