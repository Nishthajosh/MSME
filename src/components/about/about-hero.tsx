"use client";

import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Badge } from '@/components/ui/badge';

export function AboutHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll>
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-indigo-500/20 text-indigo-300 border-indigo-500/30">
              About Ewolyn
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-indigo-100 to-white bg-clip-text text-transparent">
              Empowering Indian Startups & MSMEs
            </h1>
            <p className="text-xl md:text-2xl text-indigo-200 mb-6">
              EAGLE WOLF LION - The trio that stands with you!
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Ewolyn represents strength (Eagle), wisdom (Wolf), and courage (Lion). 
              We embody these qualities to provide comprehensive support for your business journey.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Stats */}
        <AnimateOnScroll delay={300}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: '50,000+', label: 'Ventures Assisted' },
              { value: '₹50Cr+', label: 'Funds Facilitated' },
              { value: '28+', label: 'States Covered' },
              { value: '5+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
