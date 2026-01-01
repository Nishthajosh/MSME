"use client";

import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Compass } from 'lucide-react';

export function VisionMission() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Vision & Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Guided by purpose, driven by impact
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <AnimateOnScroll delay={200}>
            <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-blue-900">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  To be India&apos;s most trusted partner for startups and MSMEs, creating a thriving 
                  ecosystem where every entrepreneur has access to the resources and support they 
                  need to succeed and contribute to nation-building.
                </p>
              </CardContent>
            </Card>
          </AnimateOnScroll>

          <AnimateOnScroll delay={400}>
            <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-900">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  To simplify business growth in India by providing comprehensive, affordable, 
                  and accessible support services. We aim to empower 1 million businesses by 
                  2030 with registration, certification, funding, and growth solutions.
                </p>
              </CardContent>
            </Card>
          </AnimateOnScroll>

          <AnimateOnScroll delay={600}>
            <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Compass className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl text-purple-900">Our Purpose</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  To democratize entrepreneurship by breaking down barriers and providing 
                  equal opportunities for all aspiring business owners, regardless of their 
                  background, location, or resources.
                </p>
              </CardContent>
            </Card>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
