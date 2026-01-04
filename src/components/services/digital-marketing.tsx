"use client";

import { useState, useEffect } from 'react';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Palette,
  FileText,
  Video,
  Share2,
  Globe,
  MessageSquare,
  Megaphone,
  LayoutDashboard,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';

const digitalServices = [
  {
    title: 'Graphic Designing',
    description: 'Professional visual identity and marketing collateral that resonates with your brand.',
    icon: Palette,
    services: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'Social Media Graphics'],
  },
  {
    title: 'Content Marketing',
    description: 'Strategic content creation that engages your audience and drives conversions.',
    icon: FileText,
    services: ['Blog Writing', 'SEO Content', 'Email Campaigns', 'Case Studies'],
  },
  {
    title: 'Video Editing',
    description: 'Professional video production for marketing, training, and brand storytelling.',
    icon: Video,
    services: ['Promotional Videos', 'Social Media Reels', 'Explainer Videos', 'Corporate Films'],
  },
  {
    title: 'Social Media Marketing',
    description: 'Build your brand presence and engage with customers across social platforms.',
    icon: Share2,
    services: ['Strategy Planning', 'Content Creation', 'Community Management', 'Paid Campaigns'],
  },
  {
    title: 'Website Development',
    description: 'Modern, responsive websites that convert visitors into customers.',
    icon: Globe,
    services: ['Business Websites', 'E-commerce', 'Landing Pages', 'Web Applications'],
  },
  {
    title: 'WhatsApp Marketing',
    description: 'Direct customer engagement through WhatsApp Business solutions.',
    icon: MessageSquare,
    services: ['Bulk Messaging', 'Chatbot Setup', 'Catalog Creation', 'Auto Responses'],
  },
  {
    title: 'Marketing Consultation',
    description: 'Expert guidance to develop and execute winning marketing strategies.',
    icon: Megaphone,
    services: ['Market Research', 'Brand Strategy', 'Campaign Planning', 'Growth Hacking'],
  },
  {
    title: 'CRM & ERP Solutions',
    description: 'Streamline operations with custom business management software.',
    icon: LayoutDashboard,
    services: ['CRM Setup', 'ERP Implementation', 'Automation', 'Custom Integrations'],
  },
];

const FloatingSnowflakes = () => {
  const [elements, setElements] = useState<Array<{ left: string, top: string, delay: string, duration: string }>>([]);

  useEffect(() => {
    setElements([...Array(12)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 4}s`,
    })));
  }, []);

  return (
    <>
      {elements.map((style, i) => (
        <div
          key={i}
          className="absolute text-gray-200 text-sm"
          style={{
            left: style.left,
            top: style.top,
            animation: `float ${style.duration} ease-in-out infinite`,
            animationDelay: style.delay,
          }}
        >
          ❄
        </div>
      ))}
    </>
  );
};

export function DigitalMarketing() {
  return (
    <section id="digital-marketing" className="py-20 bg-white relative">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingSnowflakes />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-pink-100 border border-pink-200 rounded-full px-4 py-2 mb-4">
              <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
              <span className="text-pink-700 text-sm font-medium">Digital Services</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Digital Marketing <span className="text-[#f97068]">& CRM</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your digital presence with our comprehensive marketing and technology solutions.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {digitalServices.map((service, index) => (
            <AnimateOnScroll key={service.title} delay={100 * index}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-200 hover:border-[#f97068]/50">
                <CardHeader className="pb-4">
                  <div className="p-3 rounded-xl bg-[#f97068]/10 w-fit mb-3 group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-[#f97068]" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.services.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-[#f97068] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Results Section */}
        <AnimateOnScroll delay={500}>
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            {[
              { value: '200%', label: 'Average ROI', icon: TrendingUp },
              { value: '500+', label: 'Campaigns Launched', icon: Megaphone },
              { value: '10M+', label: 'Audience Reached', icon: Share2 },
              { value: '95%', label: 'Client Retention', icon: CheckCircle2 },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center p-6 bg-[#f97068]/5 border border-[#f97068]/20 rounded-2xl">
                <stat.icon className="h-8 w-8 text-[#f97068] mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
