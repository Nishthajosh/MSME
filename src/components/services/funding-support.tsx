"use client";

import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Banknote,
  Building,
  Landmark,
  HandCoins,
  PiggyBank,
  TrendingUp,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const fundingOptions = [
  {
    title: 'Startup India Schemes',
    description: 'Government-backed funding programs for DPIIT recognized startups.',
    icon: Landmark,
    schemes: [
      'Seed Fund Scheme (₹20L-50L)',
      'SISFS Fund of Funds',
      'Credit Guarantee Scheme',
      'MUDRA Loans',
    ],
    highlight: 'Upto ₹50L Seed Fund',
  },
  {
    title: 'MSME & Bank Loans',
    description: 'Collateral-free and subsidized loans for MSMEs from banks and NBFCs.',
    icon: Building,
    schemes: [
      'CGTMSE Guarantee',
      'PSB Loans in 59 Minutes',
      'SIDBI SMILE',
      'Stand Up India',
    ],
    highlight: 'Upto ₹5Cr Funding',
  },
  {
    title: 'PMEGP Scheme',
    description: 'Prime Minister Employment Generation Programme with margin money subsidy.',
    icon: HandCoins,
    schemes: [
      '15-35% Subsidy',
      '₹50L Manufacturing',
      '₹20L Services',
      'New Enterprise Support',
    ],
    highlight: '35% Subsidy for SC/ST',
  },
  {
    title: 'State Schemes',
    description: 'State-specific funding and subsidy programs for businesses.',
    icon: PiggyBank,
    schemes: [
      'CM Industry Schemes',
      'State Startup Policies',
      'District Industries Support',
      'SC/ST/OBC Schemes',
    ],
    highlight: 'State-wise Benefits',
  },
  {
    title: 'NBFC & Private Funding',
    description: 'Quick business loans from NBFCs and private lending institutions.',
    icon: Banknote,
    schemes: [
      'Business Term Loans',
      'Working Capital',
      'Equipment Finance',
      'Invoice Discounting',
    ],
    highlight: '48hr Approval',
  },
  {
    title: 'Sector-Specific Grants',
    description: 'Specialized funding for agriculture, technology, and manufacturing.',
    icon: TrendingUp,
    schemes: [
      'RKVY-RAFTAAR (Agri)',
      'TIDE 2.0 (Tech)',
      'PLI Schemes',
      'Global Impact Grants',
    ],
    highlight: '50-75% Subsidy',
  },
];

export function FundingSupport() {
  return (
    <section id="funding-support" className="py-20 bg-white relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 rounded-full px-4 py-2 mb-4">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-green-700 text-sm font-medium">Funding Support</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Funding & <span className="text-[#f97068]">Growth Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access 50+ government schemes and funding options. We help you secure the right funding for your business growth.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fundingOptions.map((option, index) => (
            <AnimateOnScroll key={option.title} delay={100 * index}>
              <Card className="h-full bg-white border border-gray-200 hover:border-[#f97068]/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-3 rounded-xl bg-green-100">
                      <option.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <Badge className="bg-[#f97068]/10 text-[#f97068] border-0 text-xs">
                      {option.highlight}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{option.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {option.schemes.map((scheme) => (
                      <li key={scheme} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
                        {scheme}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA Section */}
        <AnimateOnScroll delay={400}>
          <div className="mt-16 bg-gradient-to-r from-[#0f1729] to-[#1a1f3a] rounded-3xl p-10 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Get Funded?</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Check your eligibility for 50+ funding schemes in just 2 minutes. Our experts will guide you through the entire process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#f97068] text-white rounded-full font-bold shadow-lg">
                <Link href="/funding">
                  Check Eligibility <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-gray-600 text-white hover:bg-white/10 rounded-full font-bold shadow-lg">
                <Link href="/contact">
                  Talk to Expert
                </Link>
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
