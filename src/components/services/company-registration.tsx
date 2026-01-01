"use client";

import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Users, Briefcase, Heart, Scale, CheckCircle2, Clock, IndianRupee } from 'lucide-react';

const registrationTypes = [
  {
    title: 'Private Limited Company',
    description: 'Most preferred structure for startups seeking investment. Limited liability protection with separate legal entity status.',
    icon: Building,
    features: ['Limited Liability', 'Easy Fundraising', 'Perpetual Existence', 'Tax Benefits'],
    timeline: '7-10 Days',
    price: '₹7,999',
    popular: true,
  },
  {
    title: 'Limited Liability Partnership (LLP)',
    description: 'Perfect for professional services and small businesses. Combines flexibility of partnership with limited liability.',
    icon: Users,
    features: ['No Minimum Capital', 'Less Compliance', 'Tax Efficient', 'Partner Protection'],
    timeline: '10-15 Days',
    price: '₹5,999',
    popular: false,
  },
  {
    title: 'One Person Company (OPC)',
    description: 'Ideal for solo entrepreneurs. Get corporate benefits with single member ownership.',
    icon: Briefcase,
    features: ['Single Owner', 'Limited Liability', 'Easy Compliance', 'Corporate Status'],
    timeline: '7-10 Days',
    price: '₹6,999',
    popular: false,
  },
  {
    title: 'Section 8 Company (NGO)',
    description: 'For non-profit organizations promoting social welfare, charity, education, art, or science.',
    icon: Heart,
    features: ['Tax Exemptions', '12A & 80G Benefits', 'CSR Eligibility', 'Grant Access'],
    timeline: '15-20 Days',
    price: '₹14,999',
    popular: false,
  },
  {
    title: 'Partnership Firm',
    description: 'Traditional business structure for two or more partners sharing profits and responsibilities.',
    icon: Users,
    features: ['Easy Formation', 'Flexible Management', 'Low Cost', 'Simple Compliance'],
    timeline: '5-7 Days',
    price: '₹3,999',
    popular: false,
  },
  {
    title: 'Sole Proprietorship',
    description: 'Simplest form of business for individual entrepreneurs with complete control.',
    icon: Scale,
    features: ['No Registration', 'Full Control', 'Easy Tax Filing', 'Low Maintenance'],
    timeline: '2-3 Days',
    price: '₹1,999',
    popular: false,
  },
];

export function CompanyRegistration() {
  return (
    <section id="company-registration" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">
              Registration Services
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Company Registration
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start your business journey with proper legal structure. We handle all documentation and compliance.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {registrationTypes.map((type, index) => (
            <AnimateOnScroll key={type.title} delay={100 * index}>
              <Card className={`h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden ${type.popular ? 'border-2 border-orange-500' : 'border border-gray-200'}`}>
                {type.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`p-3 rounded-xl ${type.popular ? 'bg-orange-100' : 'bg-blue-100'}`}>
                      <type.icon className={`h-6 w-6 ${type.popular ? 'text-orange-600' : 'text-blue-600'}`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{type.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{type.timeline}</span>
                    </div>
                    <div className="flex items-center gap-1 font-bold text-lg text-gray-900">
                      <IndianRupee className="h-4 w-4" />
                      <span>{type.price.replace('₹', '')}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Additional Services */}
        <AnimateOnScroll delay={400}>
          <div className="mt-16 p-8 bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Registration Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'NGO Darpan Registration',
                '12A & 80G Registration',
                'CSR+ Registration',
                'GEM Registration',
                'Trust Registration',
                'Society Registration',
                'Import Export Code (IEC)',
                'MSME Registration',
              ].map((service) => (
                <div key={service} className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
