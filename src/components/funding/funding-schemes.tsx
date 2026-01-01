"use client";

import { useState } from 'react';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle2, Clock, TrendingUp, Zap } from 'lucide-react';

const schemeCategories = [
  { value: 'all', label: 'All Options' },
  { value: 'loans', label: 'Loans' },
  { value: 'credit', label: 'Credit' },
  { value: 'subsidy', label: 'Subsidy' },
  { value: 'grants', label: 'Grants' },
];

const fundingSchemes = [
  {
    name: 'Pradhan Mantri Mudra Yojana',
    category: ['loans'],
    amount: 'Shishu ₹50K • Kishore ₹5L • Tarun ₹10L',
    description: 'Collateral-free credit for non-farm micro enterprises under three categories.',
    features: ['Collateral-free', 'Micro'],
    successRate: '98%',
    timeline: '7-10 days',
    popular: true,
  },
  {
    name: 'PM Employment Generation Programme',
    category: ['subsidy'],
    amount: '₹50L (Mfg) • ₹20L (Service)',
    description: 'Margin money subsidy: 15-35% based on category and location.',
    features: ['Subsidy', 'New venture'],
    successRate: '92%',
    timeline: '30-45 days',
    popular: true,
  },
  {
    name: 'CGTMSE Credit Guarantee',
    category: ['credit'],
    amount: 'Guarantee up to ₹5Cr',
    description: '75-85% guarantee coverage on collateral-free credit facilities.',
    features: ['Guarantee', 'Collateral-free'],
    successRate: '95%',
    timeline: '15-20 days',
    popular: false,
  },
  {
    name: 'Startup India Seed Fund',
    category: ['grants'],
    amount: 'Up to ₹50 Lakhs',
    description: 'Early-stage capital support for DPIIT recognized innovative startups.',
    features: ['Equity-free', 'Startups'],
    successRate: '85%',
    timeline: '45-60 days',
    popular: true,
  },
  {
    name: 'CLCS-TUS / MSME Champions',
    category: ['subsidy'],
    amount: '15% capital subsidy • SC/ST up to 25%',
    description: 'Technology upgradation support with capital subsidy for MSMEs.',
    features: ['Technology', 'Upgrade'],
    successRate: '84%',
    timeline: '45-60 days',
    popular: false,
  },
  {
    name: 'SFURTI (Traditional Industries)',
    category: ['grants'],
    amount: '₹2.5Cr (Regular) • ₹5Cr (Major)',
    description: 'Cluster-based support for artisans and traditional industries.',
    features: ['Clusters', 'Traditional'],
    successRate: '82%',
    timeline: '60-90 days',
    popular: false,
  },
  {
    name: 'PSB Loans in 59 Minutes',
    category: ['loans'],
    amount: '₹1L to ₹5Cr',
    description: 'Quick in-principle approval through digital platform with CGTMSE cover.',
    features: ['Digital', 'Quick approval'],
    successRate: '89%',
    timeline: '59 minutes*',
    popular: true,
  },
  {
    name: 'SIDBI SMILE (Quasi-equity)',
    category: ['loans'],
    amount: 'Soft loan up to ₹30L',
    description: 'Quasi-equity support for asset creation with favorable terms.',
    features: ['Make in India', 'Long-term'],
    successRate: '90%',
    timeline: '30-45 days',
    popular: false,
  },
  {
    name: 'Stand Up India',
    category: ['loans'],
    amount: '₹10L to ₹1Cr',
    description: 'Bank loans for SC/ST and Women entrepreneurs for greenfield enterprises.',
    features: ['Women', 'SC/ST'],
    successRate: '88%',
    timeline: '15-30 days',
    popular: false,
  },
  {
    name: 'Self-Reliant India Fund',
    category: ['grants'],
    amount: '₹50,000Cr corpus',
    description: 'Equity/quasi-equity growth capital through AIF structure.',
    features: ['Equity', 'Growth capital'],
    successRate: '88%',
    timeline: '45-60 days',
    popular: false,
  },
];

export function FundingSchemes() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSchemes = activeTab === 'all' 
    ? fundingSchemes 
    : fundingSchemes.filter(scheme => scheme.category.includes(activeTab));

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              50+ Funding Solutions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tailored Funding Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from India&apos;s leading MSME schemes—fast approvals, expert support, and minimal paperwork.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-slate-100 p-1 rounded-full">
                {schemeCategories.map((cat) => (
                  <TabsTrigger 
                    key={cat.value} 
                    value={cat.value}
                    className="rounded-full px-6 data-[state=active]:bg-white data-[state=active]:shadow"
                  >
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSchemes.map((scheme, index) => (
                  <AnimateOnScroll key={scheme.name} delay={100 * index}>
                    <Card className={`h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${scheme.popular ? 'border-2 border-emerald-500 relative' : 'border border-gray-200'}`}>
                      {scheme.popular && (
                        <div className="absolute -top-3 left-4">
                          <Badge className="bg-emerald-500 text-white flex items-center gap-1">
                            <Zap className="h-3 w-3" /> Popular
                          </Badge>
                        </div>
                      )}
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">{scheme.name}</CardTitle>
                        <div className="text-emerald-600 font-semibold text-sm">
                          {scheme.amount}
                        </div>
                        <CardDescription className="text-gray-600">
                          {scheme.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {scheme.features.map((feature) => (
                            <Badge key={feature} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-500 pt-3 border-t">
                          <div className="flex items-center gap-1">
                            <TrendingUp className="h-4 w-4 text-emerald-500" />
                            <span>Success: {scheme.successRate}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-blue-500" />
                            <span>{scheme.timeline}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimateOnScroll>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
