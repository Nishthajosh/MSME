"use client";

import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock, CheckCircle, TrendingUp, Shield } from 'lucide-react';

export function FundingHero() {
  const scrollToEligibility = () => {
    const element = document.getElementById('eligibility-checker');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll>
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
              ₹500 Cr+ Funding Facilitated
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              Your Business Deserves
              <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Funding, Not Rejection
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-4">
              आपकी सफलता, हमारी ज़िम्मेदारी
            </p>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Get ₹5 Lakhs to ₹10 Crores with India&apos;s trusted MSME funding platform. 
              Quick approvals, expert support, and 95% success rate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                onClick={scrollToEligibility}
                size="lg" 
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full font-bold shadow-xl text-lg px-8 py-6 transition-all hover:scale-105"
              >
                Apply for Funding
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={scrollToEligibility}
                size="lg" 
                className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white rounded-full font-bold text-lg px-8 py-6 shadow-lg transition-all hover:scale-105"
              >
                Check Eligibility
              </Button>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Stats Row */}
        <AnimateOnScroll delay={300}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Clock, value: '48hrs', label: 'Quick Approval' },
              { icon: TrendingUp, value: '₹500Cr+', label: 'Funded' },
              { icon: CheckCircle, value: '95%', label: 'Success Rate' },
              { icon: Shield, value: '100%', label: 'Online Process' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-emerald-400" />
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Trust Badges */}
        <AnimateOnScroll delay={500}>
          <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm">
            {['✓ Zero Collateral', '✓ Minimal Docs', '✓ Expert Support'].map((badge) => (
              <span key={badge} className="px-4 py-2 bg-white/10 rounded-full text-emerald-200">
                {badge}
              </span>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
