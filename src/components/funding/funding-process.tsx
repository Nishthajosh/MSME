"use client";

import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, FileText, Users, Clock, Banknote } from 'lucide-react';

const processSteps = [
  {
    step: 1,
    title: 'Quick Application',
    description: 'Fill a simple 2-minute form with basic business details. No complex paperwork needed.',
    icon: FileText,
    time: '2 mins',
    color: 'emerald',
  },
  {
    step: 2,
    title: 'Expert Consultation',
    description: 'Our funding experts analyze your needs and match with best schemes. Personalized scheme matching.',
    icon: Users,
    time: '24 hrs',
    color: 'blue',
  },
  {
    step: 3,
    title: 'Documentation',
    description: 'We help prepare and submit all required documents. End-to-end support.',
    icon: Clock,
    time: '3-5 days',
    color: 'purple',
  },
  {
    step: 4,
    title: 'Approval & Disbursement',
    description: 'Get approved and receive funds directly in your account. Direct bank transfer.',
    icon: Banknote,
    time: '7-21 days',
    color: 'orange',
  },
];

const benefits = [
  'Fast Approvals',
  '95% Success',
  'No Hidden Fees',
  'Expert Support',
];

export function FundingProcess() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">
              Simple 4-Step Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Secure Your Funding
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our streamlined approach helps businesses get funded in as little as 7 days
            </p>
          </div>
        </AnimateOnScroll>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <AnimateOnScroll key={step.step} delay={200 * index}>
                <div className="relative">
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                  )}
                  
                  <div className="text-center">
                    {/* Step Number */}
                    <div className="relative inline-flex mb-6">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-xl">
                        <step.icon className="h-10 w-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-blue-900 font-bold flex items-center justify-center shadow-lg">
                        {step.step}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <div className="text-blue-400 text-sm mb-3 flex items-center justify-center gap-1">
                      <Clock className="h-4 w-4" />
                      {step.time}
                    </div>
                    <p className="text-gray-400 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <AnimateOnScroll delay={500}>
          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
