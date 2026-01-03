"use client";

import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Scale, 
  FileText, 
  Shield, 
  Users, 
  Building2, 
  BookOpen,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';

const legalServices = [
  {
    title: 'Business Compliance',
    description: 'Stay compliant with all regulatory requirements and avoid penalties.',
    icon: Shield,
    items: [
      'Annual ROC Filings',
      'GST Registration & Filing',
      'TDS/TCS Compliance',
      'Board Meeting Minutes',
      'Statutory Registers',
    ],
  },
  {
    title: 'Contract & Agreement',
    description: 'Professionally drafted legal documents to protect your interests.',
    icon: FileText,
    items: [
      'Founder Agreements',
      'Employment Contracts',
      'NDA/Non-Compete',
      'Service Agreements',
      'MoU/LoI Drafting',
    ],
  },
  {
    title: 'Dispute Resolution',
    description: 'Expert handling of business disputes and legal challenges.',
    icon: Scale,
    items: [
      'Arbitration Support',
      'Mediation Services',
      'Contract Disputes',
      'Consumer Complaints',
      'Legal Notices',
    ],
  },
  {
    title: 'Corporate Advisory',
    description: 'Strategic legal advice for business decisions and growth.',
    icon: Users,
    items: [
      'M&A Advisory',
      'Due Diligence',
      'Restructuring',
      'Joint Ventures',
      'Board Advisory',
    ],
  },
  {
    title: 'Property & Real Estate',
    description: 'Legal support for all property-related matters.',
    icon: Building2,
    items: [
      'Property Verification',
      'Sale/Purchase Deeds',
      'Lease Agreements',
      'Title Search',
      'Property Registration',
    ],
  },
  {
    title: 'Intellectual Property',
    description: 'Protect and monetize your intellectual assets.',
    icon: BookOpen,
    items: [
      'Trademark Search',
      'Patent Filing',
      'Copyright Registration',
      'IP Licensing',
      'Infringement Cases',
    ],
  },
];

const complianceChecklist = [
  { name: 'GST Filing', frequency: 'Monthly/Quarterly' },
  { name: 'TDS Returns', frequency: 'Quarterly' },
  { name: 'Annual Return (AOC-4, MGT-7)', frequency: 'Yearly' },
  { name: 'Income Tax Return', frequency: 'Yearly' },
  { name: 'Board Meetings', frequency: 'Quarterly' },
  { name: 'AGM', frequency: 'Yearly' },
  { name: 'Statutory Audit', frequency: 'Yearly' },
  { name: 'DIR-3 KYC', frequency: 'Yearly' },
];

export function LegalCompliance() {
  return (
    <section id="legal-compliance" className="py-20 bg-gradient-to-b from-[#0f1729] to-[#1a1f3a] relative overflow-hidden">
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
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-4">
              <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
              <span className="text-amber-300 text-sm font-medium">Legal & Compliance</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Legal & <span className="text-[#f97068]">Compliance Services</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Comprehensive legal support to keep your business compliant and protected.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {legalServices.map((service, index) => (
            <AnimateOnScroll key={service.title} delay={100 * index}>
              <Card className="h-full bg-[#1e2642]/80 border border-gray-700/50 hover:border-[#f97068]/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 rounded-xl bg-amber-100">
                      <service.icon className="h-6 w-6 text-amber-600" />
                    </div>
                    <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="h-4 w-4 text-amber-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Compliance Calendar */}
        <AnimateOnScroll delay={400}>
          <div className="mt-16 p-8 bg-[#1e2642]/80 rounded-3xl border border-gray-700/50">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="h-6 w-6 text-amber-400" />
              <h3 className="text-2xl font-bold text-white">Annual Compliance Calendar</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Don&apos;t miss critical compliance deadlines. We help you stay on top of all regulatory requirements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {complianceChecklist.map((item) => (
                <div key={item.name} className="flex items-center justify-between p-4 bg-[#2a3352] rounded-xl">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    <span className="font-medium text-white">{item.name}</span>
                  </div>
                  <Badge variant="outline" className="text-amber-400 border-amber-500/50">
                    {item.frequency}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
