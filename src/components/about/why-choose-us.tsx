"use client";

import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Clock, 
  Shield, 
  Users, 
  Headphones, 
  Award, 
  IndianRupee,
  CheckCircle2
} from 'lucide-react';

const reasons = [
  {
    title: 'Expert Team',
    description: 'Qualified professionals with deep expertise in registration, compliance, funding, and business growth.',
    icon: Users,
  },
  {
    title: 'Quick Turnaround',
    description: 'Efficient processes ensuring fast delivery of services without compromising quality.',
    icon: Clock,
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden charges. Clear pricing structure with complete breakdown of costs.',
    icon: IndianRupee,
  },
  {
    title: 'End-to-End Support',
    description: 'From application to approval, we handle everything so you can focus on your business.',
    icon: Shield,
  },
  {
    title: '95% Success Rate',
    description: 'Proven track record with thousands of successful registrations, certifications, and funding applications.',
    icon: Award,
  },
  {
    title: 'Dedicated Support',
    description: 'Personal account manager and responsive support team available 6 days a week.',
    icon: Headphones,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Ewolyn?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your success is our commitment. Here&apos;s what sets us apart.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <AnimateOnScroll key={reason.title} delay={100 * index}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mb-4">
                    <reason.icon className="h-7 w-7 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Trust Indicators */}
        <AnimateOnScroll delay={400}>
          <div className="mt-16 p-8 bg-slate-50 rounded-3xl">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: '50,000+', label: 'Businesses Served' },
                { value: '₹50Cr+', label: 'Funding Facilitated' },
                { value: '95%', label: 'Success Rate' },
                { value: '4.8/5', label: 'Client Rating' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
