"use client";

import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, TrendingUp, Award, Users } from 'lucide-react';

const successStories = [
  {
    company: 'GreenTech Solutions Pvt Ltd',
    location: 'Ahmedabad, Gujarat',
    industry: 'CleanTech',
    fundingReceived: '₹45 Lakhs',
    scheme: 'Seed Fund Scheme',
    result: 'Scaled from 5 to 25 employees, expanded to 3 states',
    testimonial: 'Ewolyn helped us navigate the complex funding landscape. Their expertise was invaluable.',
    icon: Building,
  },
  {
    company: 'AgroFresh Enterprises',
    location: 'Lucknow, UP',
    industry: 'Agriculture',
    fundingReceived: '₹25 Lakhs',
    scheme: 'PMEGP',
    result: 'Set up cold storage facility, created 15 jobs',
    testimonial: 'From idea to approval in just 45 days. The team made everything so smooth.',
    icon: TrendingUp,
  },
  {
    company: 'DigitalCraft Studio',
    location: 'Mumbai, Maharashtra',
    industry: 'IT Services',
    fundingReceived: '₹1.2 Crore',
    scheme: 'CGTMSE',
    result: 'Revenue grew 300% in 2 years, serving 50+ clients',
    testimonial: 'Best decision we made was partnering with Ewolyn for our funding needs.',
    icon: Award,
  },
  {
    company: 'Mahila Udyog Group',
    location: 'Kolkata, West Bengal',
    industry: 'Handicrafts',
    fundingReceived: '₹35 Lakhs',
    scheme: 'Stand Up India',
    result: 'Empowered 100+ women artisans, exports to 5 countries',
    testimonial: 'They understood our vision and helped us get the right support.',
    icon: Users,
  },
];

export function SuccessStories() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800">
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Businesses We&apos;ve Helped Grow
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories of entrepreneurs who transformed their dreams into successful ventures
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8">
          {successStories.map((story, index) => (
            <AnimateOnScroll key={story.company} delay={200 * index}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{story.company}</h3>
                        <p className="text-emerald-100 text-sm">{story.location}</p>
                      </div>
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <story.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge className="bg-white/20 text-white border-0">{story.industry}</Badge>
                      <Badge className="bg-white/20 text-white border-0">{story.scheme}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-600">{story.fundingReceived}</div>
                        <div className="text-xs text-gray-500">Funding Received</div>
                      </div>
                      <div className="h-12 w-px bg-gray-200"></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-700 font-medium">{story.result}</p>
                      </div>
                    </div>
                    <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-600">
                      &ldquo;{story.testimonial}&rdquo;
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
