"use client";

import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Shield, FileCheck, Zap, Target, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const certifications = [
  {
    title: 'ISO Certification',
    description: 'International quality management standards that enhance credibility and open global opportunities.',
    icon: Award,
    types: ['ISO 9001:2015 (Quality)', 'ISO 14001:2015 (Environment)', 'ISO 45001:2018 (Safety)', 'ISO 27001 (Information Security)'],
    benefits: ['Global Recognition', 'Customer Trust', 'Process Improvement', 'Competitive Advantage'],
    color: 'blue',
  },
  {
    title: 'DPIIT Recognition',
    description: 'Official recognition from Department for Promotion of Industry and Internal Trade for eligible startups.',
    icon: Shield,
    types: ['Startup India Certificate', 'DPIIT Number', 'Inter-Ministerial Board Approval'],
    benefits: ['Tax Exemptions', 'IPR Benefits', 'Self-Certification', 'Easy Compliance'],
    color: 'purple',
  },
  {
    title: 'MSME/Udyam Registration',
    description: 'Official registration for Micro, Small and Medium Enterprises with government benefits.',
    icon: FileCheck,
    types: ['Udyam Certificate', 'MSME Certificate', 'Udyog Aadhaar Migration'],
    benefits: ['Priority Lending', 'Subsidy Schemes', 'Lower Interest Rates', 'Govt. Tenders'],
    color: 'green',
  },
  {
    title: 'ZED Certification',
    description: 'Zero Defect Zero Effect certification for manufacturing excellence and sustainable practices.',
    icon: Target,
    types: ['ZED Bronze', 'ZED Silver', 'ZED Gold', 'ZED Diamond'],
    benefits: ['Quality Recognition', 'Subsidy Benefits', 'Market Access', 'Global Standards'],
    color: 'orange',
  },
  {
    title: 'FSSAI License',
    description: 'Food Safety and Standards Authority license mandatory for food business operators.',
    icon: Zap,
    types: ['Basic Registration', 'State License', 'Central License'],
    benefits: ['Legal Compliance', 'Consumer Trust', 'Market Access', 'Brand Value'],
    color: 'red',
  },
  {
    title: 'Trademark & IP',
    description: 'Protect your brand, inventions, and creative works with proper intellectual property registration.',
    icon: Globe,
    types: ['Trademark Registration', 'Copyright Registration', 'Patent Filing', 'Design Registration'],
    benefits: ['Brand Protection', 'Legal Rights', 'Asset Creation', 'Licensing Revenue'],
    color: 'indigo',
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
  green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
  orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' },
  red: { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-200' },
  indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'border-indigo-200' },
};

export function GovernmentCertifications() {
  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-[#0f1729] to-[#1a1f3a] relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-blue-300/20 text-sm"
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
            <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-4">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span className="text-purple-300 text-sm font-medium">Certification Services</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Government <span className="text-[#f97068]">Certifications</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Get recognized by government bodies and international standards organizations. Unlock benefits and build credibility.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const colors = colorClasses[cert.color];
            return (
              <AnimateOnScroll key={cert.title} delay={100 * index}>
                <Card className={`h-full bg-[#1e2642]/80 border border-gray-700/50 hover:border-[#f97068]/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`p-3 rounded-xl ${colors.bg}`}>
                        <cert.icon className={`h-6 w-6 ${colors.text}`} />
                      </div>
                      <CardTitle className="text-xl text-white">{cert.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-400">
                      {cert.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Types Available:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.types.map((type) => (
                          <Badge key={type} variant="outline" className={`${colors.text} ${colors.border} text-xs`}>
                            {type}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {cert.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle2 className={`h-4 w-4 ${colors.text} flex-shrink-0`} />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Tax Exemption Section */}
        <AnimateOnScroll delay={400}>
          <div className="mt-16 p-8 bg-[#1e2642]/80 border border-gray-700/50 rounded-3xl text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#f97068]/20 border border-[#f97068]/30 rounded-full px-4 py-2 mb-4">
                  <span className="w-2 h-2 bg-[#f97068] rounded-full"></span>
                  <span className="text-[#f97068] text-sm font-medium">Tax Benefits</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Tax Exemption Certificates</h3>
                <p className="text-gray-400 mb-6">
                  Maximize your savings with proper tax exemption certificates. We help eligible startups and organizations claim their benefits.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    'Form 80-IAC Income Tax Exemption for Startups',
                    'Section 56 Angel Tax Exemption',
                    '12A & 80G for NGOs and Trusts',
                    'GST Exemptions for eligible entities',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="h-5 w-5 text-[#f97068] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-[#f97068] text-white rounded-full">
                  <Link href="/contact">
                    Get Tax Benefits <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '₹10 Cr+', label: 'Tax Savings Facilitated' },
                  { value: '500+', label: 'Exemptions Processed' },
                  { value: '3 Years', label: 'Tax Holiday Available' },
                  { value: '100%', label: 'Compliance Support' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[#2a3352] rounded-xl p-4 text-center border border-gray-700/50">
                    <div className="text-2xl font-bold text-[#f97068]">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
