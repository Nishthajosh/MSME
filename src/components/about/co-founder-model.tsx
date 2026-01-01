"use client";

import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Handshake, 
  TrendingUp, 
  Globe, 
  Scale, 
  Megaphone, 
  Shield,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const coFounderServices = [
  {
    title: 'Strategic Marketing Solutions',
    description: 'Complete marketing strategy, brand building, and customer acquisition support.',
    icon: Megaphone,
  },
  {
    title: 'Fund Growth Strategies',
    description: 'Access to funding networks, investor connections, and financial planning.',
    icon: TrendingUp,
  },
  {
    title: 'Digital Presence Architects',
    description: 'Website development, SEO, social media, and digital marketing solutions.',
    icon: Globe,
  },
  {
    title: 'Legal Advisory Experts',
    description: 'Contract drafting, compliance management, and legal protection.',
    icon: Scale,
  },
];

export function CoFounderModel() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll>
            <div>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                Unique Offering
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Co-Founder with 0% Equity
              </h2>
              <p className="text-xl text-orange-100 mb-6">
                Your growth partner without giving up ownership
              </p>
              <p className="text-lg text-white/90 mb-8">
                We offer comprehensive support without asking for a stake in your company. 
                Keep full control of your business while accessing our expertise, network, 
                and resources for accelerated growth.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'No equity dilution - maintain 100% ownership',
                  'Access to expert team across multiple domains',
                  'Flexible engagement models based on your needs',
                  'Success-based partnership approach',
                  'Full transparency and accountability',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-orange-50 rounded-full font-bold">
                <Link href="/contact">
                  Become a Partner <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coFounderServices.map((service, index) => (
                <Card key={service.title} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-sm text-white/80">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
