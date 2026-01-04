"use client";

import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Badge } from '@/components/ui/badge';

export function AboutHero() {
  return (
    <section className="relative pt-24 pb-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 w-full">
        <AnimateOnScroll>
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-red-50 text-red-600 hover:bg-red-100 border-red-100 px-4 py-1.5 text-sm font-medium rounded-full">
              Who We Are
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 tracking-tight">
              India&apos;s Trusted <span className="text-[#f97068]">MSME Advisory</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ewolyn Services Private Limited is a comprehensive business advisory platform, empowering
              startups and MSMEs across India with funding facilitation, incorporation services, and growth
              consulting since 2023.
            </p>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Decorative background element if needed, keeps it clean for now */}
    </section>
  );
}
