"use client";

import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Users, Globe, Award } from 'lucide-react';

export function CompanyOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Ewolyn Services Private Limited is a comprehensive business consultancy firm dedicated to 
                revolutionizing the Indian startup and MSME ecosystem. We provide end-to-end solutions 
                for business registration, certification, funding, marketing, and legal compliance.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to simplify business growth in India, we have helped thousands 
                of entrepreneurs turn their dreams into successful ventures. Our team of experts brings 
                decades of combined experience in finance, legal, marketing, and business strategy.
              </p>
              <p className="text-lg text-gray-600">
                We believe every entrepreneur deserves access to quality business support services, 
                regardless of their background or resources. That&apos;s why we&apos;ve built a comprehensive 
                platform that caters to businesses at every stage of their journey.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: Building2,
                  title: 'Established Presence',
                  description: 'Multiple offices across Gujarat, Maharashtra, UP, and West Bengal',
                  color: 'blue',
                },
                {
                  icon: Users,
                  title: 'Expert Team',
                  description: 'Qualified professionals in finance, legal, and business advisory',
                  color: 'green',
                },
                {
                  icon: Globe,
                  title: 'Pan-India Reach',
                  description: 'Serving clients across 28+ states and union territories',
                  color: 'purple',
                },
                {
                  icon: Award,
                  title: 'Trusted Partner',
                  description: 'Recognized by DPIIT, ISO certified, and GeM registered',
                  color: 'orange',
                },
              ].map((item, index) => {
                const colorClasses: Record<string, string> = {
                  blue: 'bg-blue-100 text-blue-600',
                  green: 'bg-green-100 text-green-600',
                  purple: 'bg-purple-100 text-purple-600',
                  orange: 'bg-orange-100 text-orange-600',
                };
                return (
                  <Card key={item.title} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-xl ${colorClasses[item.color]} flex items-center justify-center mb-4`}>
                        <item.icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
