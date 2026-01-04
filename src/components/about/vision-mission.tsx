"use client";

import { useState } from 'react';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Eye, Heart, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function VisionMission() {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');

  const content = {
    mission: {
      title: "Our Mission",
      subtitle: "Why We Exist",
      desc: "To empower India's startups and MSMEs by simplifying access to funding, business registration, and growth advisory services. We bridge the gap between ambitious entrepreneurs and complex financial systems.",
      icon: Target,
      cta: "Full Mission Statement"
    },
    vision: {
      title: "Our Vision",
      subtitle: "Where We Going",
      desc: "To be the most trusted catalyst for business growth in India, creating a thriving ecosystem where every entrepreneur has the resources to build sustainable, scalable, and successful enterprises.",
      icon: Eye,
      cta: "See Our Vision"
    },
    values: {
      title: "Core Values",
      subtitle: "What Drives Us",
      desc: "Integrity, Transparency, and Excellence define every interaction. We believe in customer-centric innovation and sustainable growth for all our partners and clients.",
      icon: Heart,
      cta: "Our Values"
    }
  };

  return (
    <section className="py-24 bg-[#1a2332] text-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge variant="outline" className="mb-6 px-4 py-1.5 border-red-500/30 bg-red-950/30 text-red-400 hover:bg-red-950/40 uppercase tracking-wider text-xs font-medium">
              Our Foundation
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mission, Vision & <span className="text-[#f97068]">Core Values</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              The guiding principles that drive everything we do at Ewolyn—from our daily operations to our long-term strategic goals.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Custom Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {(['mission', 'vision', 'values'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border",
                activeTab === tab
                  ? "bg-[#d22d2d] border-[#d22d2d] text-white shadow-lg shadow-red-900/20"
                  : "bg-transparent border-gray-700 text-gray-400 hover:text-white hover:border-gray-500"
              )}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll key={activeTab}> {/* Key forces re-animation on tab change */}
            <div className="bg-[#232d3f] rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl relative overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

              <div className="grid md:grid-cols-[auto,1fr] gap-8 items-center relative z-10">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-[#d22d2d] rounded-2xl flex items-center justify-center shadow-lg shadow-red-900/30 flex-shrink-0">
                  {(() => {
                    const Icon = content[activeTab].icon;
                    return <Icon className="w-10 h-10 md:w-12 md:h-12 text-white" />;
                  })()}
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {content[activeTab].title}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-widest mb-4">
                    {content[activeTab].subtitle}
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {content[activeTab].desc}
                  </p>

                  <div className="flex items-center gap-3 text-[#f97068] font-medium group cursor-pointer w-fit">
                    <CheckCircleIcon className="w-5 h-5" />
                    <span>Complete transparency in all processes and fees</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
