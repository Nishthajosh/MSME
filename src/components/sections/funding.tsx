"use client";

import { useState } from 'react';
import Link from 'next/link';
import { AnimateOnScroll } from '../animate-on-scroll';
import { CheckCircle, Clock, ArrowRight, Zap, TrendingUp, Shield, Building2, Leaf, CreditCard } from 'lucide-react';
import { Button } from '../ui/button';

const categories = ['All Options', 'Loans', 'Credit', 'Subsidy', 'Grants'];

const fundingSchemes = [
  {
    name: 'Pradhan Mantri Mudra Yojana',
    amount: 'Shishu ₹50K • Kishore ₹5L • Tarun ₹10L',
    description: 'Collateral-free credit for non-farm micro enterprises under three categories.',
    tags: ['Collateral-free', 'Micro'],
    success: '98%',
    time: '7-10 days',
    category: 'Loans',
    popular: true,
    icon: CreditCard,
  },
  {
    name: 'PM Employment Generation Programme',
    amount: '₹50L (Mfg) • ₹20L (Service)',
    description: 'Margin money subsidy: 15-35% based on category and location.',
    tags: ['Subsidy', 'New venture'],
    success: '92%',
    time: '30-45 days',
    category: 'Subsidy',
    popular: true,
    icon: Building2,
  },
  {
    name: 'CGTMSE Credit Guarantee',
    amount: 'Guarantee up to ₹5Cr',
    description: '75-85% guarantee coverage on collateral-free credit facilities.',
    tags: ['Guarantee', 'Collateral-free'],
    success: '95%',
    time: '15-20 days',
    category: 'Credit',
    icon: Shield,
  },
  {
    name: 'CLCS-TUS / MSME Champions',
    amount: '15% capital subsidy • SC/ST up to 25%',
    description: 'Technology upgradation support with capital subsidy for MSMEs.',
    tags: ['Technology', 'Upgrade'],
    success: '84%',
    time: '45-60 days',
    category: 'Subsidy',
    icon: TrendingUp,
  },
  {
    name: 'SFURTI (Traditional Industries)',
    amount: '₹2.5Cr (Regular) • ₹5Cr (Major)',
    description: 'Cluster-based support for artisans and traditional industries.',
    tags: ['Clusters', 'Traditional'],
    success: '82%',
    time: '60-90 days',
    category: 'Grants',
    icon: Leaf,
  },
  {
    name: 'PSB Loans in 59 Minutes',
    amount: '₹1L to ₹5Cr',
    description: 'Quick in-principle approval through digital platform with CGTMSE cover.',
    tags: ['Digital', 'Quick approval'],
    success: '89%',
    time: '59 minutes*',
    category: 'Loans',
    icon: Zap,
  },
];

// Floating snowflakes
const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute text-blue-300/20 text-sm"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      >
        ❄
      </div>
    ))}
  </div>
);

export function Funding() {
  const [activeCategory, setActiveCategory] = useState('All Options');

  const filteredSchemes = activeCategory === 'All Options' 
    ? fundingSchemes 
    : fundingSchemes.filter(scheme => scheme.category === activeCategory);

  return (
    <section id="funding" className="py-20 bg-gradient-to-b from-[#0f1729] to-[#1a1f3a] relative overflow-hidden">
      <FloatingElements />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-4">
              <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
              <span className="text-orange-300 text-sm font-medium">50+ Funding Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tailored <span className="text-[#f97068]">Funding Options</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose from India's leading MSME schemes—fast approvals, expert support, and minimal paperwork.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Category Filters */}
        <AnimateOnScroll delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#f97068] text-white shadow-lg'
                    : 'bg-[#1e2642] text-gray-300 hover:bg-[#2a3352] border border-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Schemes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredSchemes.map((scheme, index) => (
            <AnimateOnScroll key={scheme.name} delay={200 + index * 100}>
              <div className="group relative bg-[#1e2642]/80 border border-gray-700/50 rounded-2xl p-6 hover:border-[#f97068]/50 transition-all duration-300 h-full flex flex-col">
                {scheme.popular && (
                  <div className="absolute -top-3 right-4 bg-[#f97068] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Zap className="w-3 h-3" /> Popular
                  </div>
                )}
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <scheme.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white group-hover:text-[#f97068] transition-colors">
                      {scheme.name}
                    </h3>
                    <p className="text-sm text-[#f97068] font-medium">{scheme.amount}</p>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 flex-grow">{scheme.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {scheme.tags.map((tag) => (
                    <span key={tag} className="bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      <span>{scheme.success}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{scheme.time}</span>
                    </div>
                  </div>
                  <Link href="/funding" className="w-8 h-8 rounded-full bg-gray-700 hover:bg-[#f97068] flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA */}
        <AnimateOnScroll delay={600}>
          <div className="text-center">
            <Button asChild size="lg" className="rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 bg-[#f97068] hover:bg-[#e85f57] px-8">
              <Link href="/funding" className="flex items-center gap-2">
                Check Your Eligibility
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
