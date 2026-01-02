"use client";

import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Badge } from '@/components/ui/badge';

export function ImpactHero() {
  return (
    <section className="relative pt-32 pb-24 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll>
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
              Our Impact
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Driving Growth &
              <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Success for Indian Businesses
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Over 50,000 ventures assisted, ₹50+ Crores in funding facilitated, and countless 
              success stories. See how we&apos;re making a difference in the Indian startup ecosystem.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
