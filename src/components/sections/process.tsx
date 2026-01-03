"use client";

import Link from 'next/link';
import { AnimateOnScroll } from '../animate-on-scroll';
import { FileText, Users, FolderCheck, CheckCircle, ArrowRight, Clock, TrendingUp, Shield, HeadphonesIcon } from 'lucide-react';
import { Button } from '../ui/button';

const processSteps = [
  { 
    step: 1, 
    title: 'Quick Application', 
    description: 'Fill a simple 2-minute form with basic business details. Our smart system identifies the best funding options for your profile.',
    time: '2 mins',
    icon: FileText,
    color: 'bg-blue-500',
  },
  { 
    step: 2, 
    title: 'Expert Consultation', 
    description: 'Our funding experts analyze your needs and match with best schemes. Personalized guidance throughout the process.',
    time: '24 hrs',
    icon: Users,
    color: 'bg-purple-500',
  },
  { 
    step: 3, 
    title: 'Documentation', 
    description: 'We help prepare and submit all required documents with our simplified checklist. End-to-end support provided.',
    time: '3-5 days',
    icon: FolderCheck,
    color: 'bg-orange-500',
  },
  { 
    step: 4, 
    title: 'Approval & Disbursement', 
    description: 'Get approved and receive funds directly in your account. Direct bank transfer with complete transparency.',
    time: '7-21 days',
    icon: CheckCircle,
    color: 'bg-green-500',
  },
];

const benefits = [
  { icon: Clock, text: 'Fast Approvals' },
  { icon: TrendingUp, text: '95% Success' },
  { icon: Shield, text: 'No Hidden Fees' },
  { icon: HeadphonesIcon, text: 'Expert Support' },
];

export function Process() {
  return (
    <section id="process" className="py-20 bg-white relative">
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
            <div className="inline-flex items-center gap-2 bg-purple-100 border border-purple-200 rounded-full px-4 py-2 mb-4">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span className="text-purple-700 text-sm font-medium">Simple 4-Step Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We <span className="text-[#f97068]">Secure Your Funding</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined approach helps businesses get funded in as little as 7 days
            </p>
          </div>
        </AnimateOnScroll>

        {/* Vertical Timeline - Zigzag */}
        <div className="max-w-4xl mx-auto mb-16">
          {/* Vertical Center Line */}
          <div className="hidden md:block absolute left-1/2 top-64 bottom-96 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 via-orange-500 to-green-500"></div>
          
          <div className="space-y-12">
            {processSteps.map((item, index) => (
              <AnimateOnScroll
                key={item.step}
                delay={200 + index * 150}
              >
                <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className={`${item.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                          STEP {item.step}
                        </span>
                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                          <Clock className="w-3 h-3" />
                          {item.time}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Icon Circle - Center */}
                  <div className="hidden md:flex flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center shadow-lg z-10`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  {/* Empty space for zigzag */}
                  <div className="hidden md:block flex-1"></div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Benefits & CTA */}
        <AnimateOnScroll delay={600}>
          <div className="bg-gradient-to-r from-[#0f1729] via-[#1a1f3a] to-[#0f1729] rounded-3xl p-8 md:p-12">
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit.text} className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <benefit.icon className="w-4 h-4 text-green-400" />
                  <span className="text-white font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                GET STARTED TODAY
              </h3>
              <Button asChild size="lg" className="rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 bg-[#f97068] hover:bg-[#e85f57] px-8">
                <Link href="/contact" className="flex items-center gap-2">
                  Start Your Funding Journey
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
