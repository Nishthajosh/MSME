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
    <section id="funding-support" className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">
              Funding Support
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Funding & Growth Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Access 50+ government schemes and funding options. We help you secure the right funding for your business growth.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fundingOptions.map((option, index) => (
            <AnimateOnScroll key={option.title} delay={100 * index}>
              <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-3 rounded-xl bg-green-500/20">
                      <option.icon className="h-6 w-6 text-green-400" />
                    </div>
                    <Badge className="bg-green-500/20 text-green-300 border-0 text-xs">
                      {option.highlight}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-white">{option.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {option.schemes.map((scheme) => (
                      <li key={scheme} className="flex items-center gap-2 text-sm text-gray-300">
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
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Funded?</h3>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Check your eligibility for 50+ funding schemes in just 2 minutes. Our experts will guide you through the entire process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-full font-bold shadow-lg">
                <Link href="/funding">
                  Check Eligibility <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full font-bold shadow-lg transition-all hover:scale-105">
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
