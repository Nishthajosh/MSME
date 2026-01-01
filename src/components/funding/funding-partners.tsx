"use client";

import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';

const partners = [
  'SIDBI',
  'Startup India',
  'DPIIT',
  'State Bank of India',
  'HDFC Bank',
  'MUDRA',
  'NABARD',
  'Bank of Baroda',
  'Punjab National Bank',
  'Canara Bank',
];

const certifications = [
  { title: 'DPIIT Recognition', description: 'Officially recognized by DPIIT' },
  { title: 'ISO 9001:2015', description: 'Quality management certified' },
  { title: 'GeM Registered', description: 'Government e-Marketplace vendor' },
  { title: 'Trusted Platform', description: 'Trusted by 20,000+ businesses' },
];

export function FundingPartners() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              Trusted Network
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Strategic Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Collaborating with leaders to bring you the best funding solutions
            </p>
          </div>
        </AnimateOnScroll>

        {/* Partner Logos */}
        <AnimateOnScroll delay={200}>
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {partners.map((partner) => (
              <div
                key={partner}
                className="w-32 h-20 bg-slate-100 rounded-xl flex items-center justify-center p-4 hover:bg-slate-200 transition-colors"
              >
                <span className="text-sm font-medium text-gray-600 text-center">{partner}</span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Certifications */}
        <AnimateOnScroll delay={400}>
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Certifications & Recognitions
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certifications.map((cert) => (
                <div key={cert.title} className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h4 className="font-bold text-white mb-1">{cert.title}</h4>
                  <p className="text-sm text-gray-400">{cert.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-emerald-300 font-medium">
                Facilitated over ₹500 Crore in MSME funding through strategic partnerships
              </p>
              <p className="text-gray-400">Trusted by 20,000+ businesses across India</p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
