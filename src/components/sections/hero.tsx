"use client";

import Link from 'next/link';
import { Button } from '../ui/button';
import { AnimateOnScroll } from '../animate-on-scroll';
import { ArrowRight, CheckCircle } from 'lucide-react';

const heroStats = [
  { value: '48hrs', label: 'Quick Approval' },
  { value: '₹500Cr+', label: 'Funded' },
  { value: '95%', label: 'Success Rate' },
  { value: '100%', label: 'Online Process' },
];

// Floating snowflake/sparkle component
const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute text-blue-300/30 animate-float"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${3 + Math.random() * 4}s`,
        }}
      >
        ❄
      </div>
    ))}
    {/* Colored sparkles */}
    <div className="absolute top-20 right-1/4 text-yellow-400 text-2xl animate-pulse">✨</div>
    <div className="absolute top-1/3 left-10 text-pink-400 text-xl animate-pulse delay-100">✨</div>
    <div className="absolute bottom-1/4 right-20 text-orange-400 text-xl animate-pulse delay-300">🎁</div>
    <div className="absolute top-1/2 right-1/3 text-red-400 text-lg animate-bounce">🎄</div>
  </div>
);

export function Hero() {
  return (
    <section id="home" className="relative pt-8 pb-16 overflow-hidden min-h-[90vh] flex flex-col justify-center bg-gradient-to-br from-[#0f1729] via-[#1a1f3a] to-[#0f1729]">
      <FloatingElements />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <AnimateOnScroll startVisible>
              <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/40 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-green-300 text-sm font-medium">Trusted by 20,000+ MSMEs</span>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll startVisible delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2 leading-tight">
                Your Business Deserves
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
                <span className="text-[#f97068]">Funding</span>
                <span className="text-white">, Not Rejection</span>
              </h1>
            </AnimateOnScroll>
            
            <AnimateOnScroll startVisible delay={200}>
              <p className="text-xl md:text-2xl font-semibold text-white/80 mb-4">
                आपकी सफलता, हमारी ज़िम्मेदारी
              </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll startVisible delay={300}>
              <p className="text-lg text-gray-400 mb-8 max-w-xl">
                Get ₹5 Lakhs to ₹10 Crores with India's fastest MSME funding platform
              </p>
            </AnimateOnScroll>

            {/* Stats row */}
            <AnimateOnScroll startVisible delay={400}>
              <div className="flex flex-wrap gap-8 mb-8">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll startVisible delay={500}>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                <Button asChild size="lg" className="rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 bg-[#f97068] hover:bg-[#e85f57] text-white px-8">
                  <Link href="/funding" className="flex items-center gap-2">
                    Apply for Funding
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 border-gray-600 bg-gray-800 text-white hover:bg-gray-700 px-8">
                  <Link href="/services">
                    View All Schemes
                  </Link>
                </Button>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll startVisible delay={600}>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-3 py-1">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-300">Zero Collateral</span>
                </div>
                <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-3 py-1">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-300">Minimal Docs</span>
                </div>
                <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-3 py-1">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-300">Expert Support</span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Content - Eligibility Checker */}
          <AnimateOnScroll startVisible delay={300}>
            <div className="bg-[#1e2642]/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">Check Your Eligibility</h3>
              <p className="text-gray-400 mb-6 flex items-center gap-2">
                Get instant funding options in 30 seconds
                <span className="text-yellow-400">✨</span>
              </p>
              
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Business Type</label>
                  <select className="w-full bg-[#2a3352] border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#f97068] focus:border-transparent">
                    <option value="">Select Business Type</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="trading">Trading</option>
                    <option value="services">Services</option>
                    <option value="agriculture">Agriculture</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Funding Required</label>
                  <select className="w-full bg-[#2a3352] border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#f97068] focus:border-transparent">
                    <option value="">Select Amount</option>
                    <option value="5-10">₹5L - ₹10L</option>
                    <option value="10-25">₹10L - ₹25L</option>
                    <option value="25-50">₹25L - ₹50L</option>
                    <option value="50-1cr">₹50L - ₹1Cr</option>
                    <option value="1cr+">₹1Cr+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Business Stage</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Idea', 'Early', 'Growth'].map((stage, index) => (
                      <button
                        key={stage}
                        type="button"
                        className={`border rounded-xl py-3 text-white transition-all duration-300 ${
                          index === 1 
                            ? 'bg-[#f97068] border-[#f97068]' 
                            : 'bg-transparent border-gray-600 hover:border-[#f97068]/50'
                        }`}
                      >
                        {stage}
                      </button>
                    ))}
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full rounded-xl font-bold py-6 bg-[#f97068] hover:bg-[#e85f57] text-white text-lg transition-all duration-300"
                >
                  Get Instant Report →
                </Button>
              </form>
              
              <div className="flex items-center justify-center gap-6 mt-6 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  <span>100% Free</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  <span>No Spam</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  <span>Secure</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
