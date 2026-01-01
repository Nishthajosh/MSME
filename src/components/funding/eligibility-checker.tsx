"use client";

import { useState } from 'react';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

const businessTypes = [
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'trading', label: 'Trading' },
  { value: 'services', label: 'Services' },
  { value: 'technology', label: 'Technology/IT' },
  { value: 'agriculture', label: 'Agriculture' },
  { value: 'food', label: 'Food & Beverage' },
  { value: 'retail', label: 'Retail' },
  { value: 'other', label: 'Other' },
];

const fundingRanges = [
  { value: '5-10L', label: '₹5-10 Lakhs' },
  { value: '10-25L', label: '₹10-25 Lakhs' },
  { value: '25-50L', label: '₹25-50 Lakhs' },
  { value: '50L-1Cr', label: '₹50L - 1 Crore' },
  { value: '1-5Cr', label: '₹1-5 Crores' },
  { value: '5-10Cr', label: '₹5-10 Crores' },
];

const businessStages = [
  { value: 'idea', label: 'Idea Stage', icon: '💡' },
  { value: 'early', label: 'Early Stage', icon: '🌱' },
  { value: 'growth', label: 'Growth Stage', icon: '📈' },
  { value: 'established', label: 'Established', icon: '🏢' },
];

const eligibleSchemes = {
  idea: ['Seed Fund Scheme', 'PMEGP', 'MUDRA Shishu'],
  early: ['Seed Fund Scheme', 'PMEGP', 'MUDRA Kishore', 'CGTMSE', 'Stand Up India'],
  growth: ['CGTMSE', 'PSB 59 Minutes', 'SIDBI SMILE', 'MUDRA Tarun', 'State Schemes'],
  established: ['Term Loans', 'NBFC Funding', 'Working Capital', 'Equipment Finance', 'Invoice Discounting'],
};

export function EligibilityChecker() {
  const [businessType, setBusinessType] = useState('');
  const [fundingRequired, setFundingRequired] = useState('');
  const [businessStage, setBusinessStage] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleCheckEligibility = () => {
    if (businessType && fundingRequired && businessStage) {
      setShowResults(true);
    }
  };

  const schemes = businessStage ? eligibleSchemes[businessStage as keyof typeof eligibleSchemes] || [] : [];

  return (
    <section id="eligibility-checker" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800">
              Free Eligibility Check
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Check Your Eligibility
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Get instant funding options in 30 seconds. 100% Free, No Spam, Secure.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll delay={200}>
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Business Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Business Type
                    </label>
                    <select
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    >
                      <option value="">Select type...</option>
                      {businessTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Funding Required */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Funding Required
                    </label>
                    <select
                      value={fundingRequired}
                      onChange={(e) => setFundingRequired(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    >
                      <option value="">Select amount...</option>
                      {fundingRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Business Stage */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Business Stage
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {businessStages.map((stage) => (
                        <button
                          key={stage.value}
                          onClick={() => {
                            setBusinessStage(stage.value);
                            setShowResults(false);
                          }}
                          className={`p-2 text-sm rounded-lg border transition-all ${
                            businessStage === stage.value
                              ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                              : 'border-gray-200 hover:border-emerald-300'
                          }`}
                        >
                          <span className="mr-1">{stage.icon}</span>
                          {stage.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button
                    onClick={handleCheckEligibility}
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full font-bold px-8"
                    disabled={!businessType || !fundingRequired || !businessStage}
                  >
                    Get Instant Report <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimateOnScroll>

          {/* Results */}
          {showResults && (
            <AnimateOnScroll delay={100}>
              <Card className="mt-8 shadow-xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-emerald-700">
                    <Sparkles className="h-6 w-6" />
                    You&apos;re Eligible for {schemes.length}+ Schemes!
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {schemes.map((scheme) => (
                      <div key={scheme} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                        <span className="font-medium text-gray-700">{scheme}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    Based on your profile, you may be eligible for multiple funding schemes. 
                    Fill the detailed application form below for personalized guidance.
                  </p>
                  <Button
                    onClick={() => {
                      const element = document.getElementById('funding-form');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-emerald-600 hover:bg-emerald-700"
                  >
                    Apply Now - Get Expert Assistance
                  </Button>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          )}
        </div>
      </div>
    </section>
  );
}
