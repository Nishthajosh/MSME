"use client";

import Link from 'next/link';
import { AnimateOnScroll } from '../animate-on-scroll';
import { ArrowRight, BadgePercent, Landmark, Briefcase, CircleDollarSign, FileCheck, Award } from 'lucide-react';
import { Button } from '../ui/button';

const schemes = [
  {
    title: 'PM MUDRA Yojana',
    description: 'Up to ₹10 Lakh loan without collateral for small businesses',
    icon: CircleDollarSign,
    iconBg: 'bg-blue-500',
    highlight: '₹10L',
    highlightLabel: 'Max Loan',
    href: '/services',
  },
  {
    title: 'PMEGP',
    description: 'Up to 35% subsidy for manufacturing & service enterprises',
    icon: BadgePercent,
    iconBg: 'bg-green-500',
    highlight: '35%',
    highlightLabel: 'Max Subsidy',
    href: '/services',
  },
  {
    title: 'CGTMSE',
    description: 'Credit guarantee up to ₹5 Crore without third-party guarantee',
    icon: Landmark,
    iconBg: 'bg-purple-500',
    highlight: '₹5Cr',
    highlightLabel: 'Coverage',
    href: '/services',
  },
  {
    title: 'Startup India',
    description: 'Tax benefits & funding support for DPIIT registered startups',
    icon: Briefcase,
    iconBg: 'bg-orange-500',
    highlight: '80%',
    highlightLabel: 'Tax Benefit',
    href: '/services',
  },
  {
    title: 'GeM Registration',
    description: 'Access ₹3L+ Crore government procurement marketplace',
    icon: FileCheck,
    iconBg: 'bg-red-500',
    highlight: '₹3L Cr',
    highlightLabel: 'Market Size',
    href: '/services',
  },
  {
    title: 'NSIC Certification',
    description: 'Single point registration for government tenders priority',
    icon: Award,
    iconBg: 'bg-teal-500',
    highlight: '100%',
    highlightLabel: 'EMD Exempt',
    href: '/services',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white relative">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-gray-200 text-sm"
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

      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 rounded-full px-4 py-2 mb-4">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-green-700 text-sm font-medium">Government Support Programs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful <span className="text-[#f97068]">Government Schemes</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Leverage India's top government initiatives designed to accelerate MSME growth
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {schemes.map((scheme, index) => (
            <AnimateOnScroll key={scheme.title} delay={index * 100}>
              <Link href={scheme.href} className="block group">
                <div className="h-full bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#f97068]/50 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 ${scheme.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <scheme.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#f97068] transition-colors">
                        {scheme.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {scheme.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-[#f97068]">{scheme.highlight}</p>
                      <p className="text-gray-500 text-sm">{scheme.highlightLabel}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-[#f97068] flex items-center justify-center transition-colors">
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={400}>
          <div className="text-center">
            <p className="text-gray-600 mb-4">Don't know which scheme fits your business?</p>
            <Button asChild size="lg" className="rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 bg-[#f97068] hover:bg-[#e85f57] px-8">
              <Link href="/services" className="flex items-center gap-2">
                Get Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
