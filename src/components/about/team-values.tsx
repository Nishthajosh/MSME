"use client";

import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Heart, Star, Users, ArrowRight } from 'lucide-react';

const values = [
  {
    title: 'Honesty and Quality',
    description: 'We maintain the highest standards of integrity and deliver quality services that exceed expectations. No false promises, just real results.',
    icon: Heart,
    color: 'red',
  },
  {
    title: 'Extra Mile Support',
    description: 'We go beyond the ordinary to provide exceptional support and guidance to our clients. Your success is our success.',
    icon: Star,
    color: 'yellow',
  },
  {
    title: 'Customer-Focused Creativity',
    description: 'We innovate and create solutions tailored to your unique business challenges and opportunities. Every business is unique.',
    icon: Users,
    color: 'blue',
  },
];

export function TeamValues() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The foundation of our commitment to your success
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {values.map((value, index) => {
            const colorClasses: Record<string, { bg: string; icon: string }> = {
              red: { bg: 'bg-red-100', icon: 'text-red-600' },
              yellow: { bg: 'bg-yellow-100', icon: 'text-yellow-600' },
              blue: { bg: 'bg-blue-100', icon: 'text-blue-600' },
            };
            const colors = colorClasses[value.color];
            
            return (
              <AnimateOnScroll key={value.title} delay={200 * index}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <value.icon className={`h-8 w-8 ${colors.icon}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* CTA Section */}
        <AnimateOnScroll delay={400}>
          <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of entrepreneurs who have trusted Ewolyn to help them build and grow their businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 rounded-full font-bold">
                <Link href="/contact">
                  Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full font-bold shadow-lg transition-all hover:scale-105">
                <Link href="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
