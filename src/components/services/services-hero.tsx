"use client";

import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Award, TrendingUp, Shield } from 'lucide-react';
import Link from 'next/link';

export function ServicesHero() {
  return (
    <section className="relative pt-28 pb-20 bg-gradient-to-br from-[#0f1729] via-[#1a1f3a] to-[#0f1729] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#f97068_0,_transparent_35%)]"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23FFFFFF%22 fill-opacity=%220.04%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll>
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#f97068]/15 border border-[#f97068]/30 rounded-full text-[#f97068] text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-[#f97068] rounded-full"></span>
              Comprehensive Business Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Services That Power Your Business Growth
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
              From company registration to funding support, we provide end-to-end solutions for Indian startups and MSMEs. Your success is our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#f97068] hover:bg-[#e85f57] text-white rounded-full font-bold shadow-lg transition-all hover:scale-105">
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-gray-600 text-white hover:bg-white/10 rounded-full font-bold shadow-lg">
                <Link href="/funding">
                  Explore Funding Options
                </Link>
              </Button>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Quick Stats */}
        <AnimateOnScroll delay={300}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Building2, label: 'Companies Registered', value: '5,000+' },
              { icon: Award, label: 'Certifications Obtained', value: '8,000+' },
              { icon: TrendingUp, label: 'Businesses Funded', value: '₹50Cr+' },
              { icon: Shield, label: 'Success Rate', value: '95%' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-[#1e2642]/80 border border-gray-700/60 hover:border-[#f97068]/40 transition-all duration-300">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-[#f97068]" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
