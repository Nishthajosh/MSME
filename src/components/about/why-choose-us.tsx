"use client";

import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Card, CardContent } from '@/components/ui/card';
import {
  Users,
  TrendingUp,
  Award,
  Building2,
  Star
} from 'lucide-react';

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#111827] text-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="mb-16">
            <Badge className="mb-6 bg-slate-800 text-slate-300 border-slate-700 px-4 py-1.5 text-sm font-medium rounded-full">
              Est. 2023 • Our Story
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 pt-2">
              Empowering India&apos;s <br />
              <span className="text-[#f97068]">MSME Ecosystem</span>
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              From business registration to funding facilitation, we&apos;re transforming how
              startups and MSMEs access growth capital across India. <br />
              <span className="text-white mt-2 block font-medium">आपकी सफलता, हमारी ज़िम्मेदारी</span>
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {['DPIIT Recognized Startup Consultant', 'End-to-End Business Solutions', 'Government Scheme Specialists'].map(tag => (
                <div key={tag} className="flex items-center gap-2 bg-slate-800/50 rounded-full px-4 py-2 border border-slate-700 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {tag}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-8 mt-12 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Ahmedabad, Gujarat
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> Founded 2024
              </div>
            </div>

            <div className="mt-8">
              <Button className="bg-[#d22d2d] text-white px-8 py-6 rounded-lg text-lg">
                Partner With Us <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="ml-4 border-slate-700 text-white h-[60px] px-8 text-lg bg-transparent">
                Get In Touch
              </Button>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              value: "20,000+",
              label: "MSMEs Assisted",
              icon: Users,
              color: "bg-emerald-500",
              bgColor: "bg-emerald-500/10 text-emerald-500"
            },
            {
              value: "₹500Cr+",
              label: "Funding Facilitated",
              icon: TrendingUp,
              color: "bg-blue-500",
              bgColor: "bg-blue-500/10 text-blue-500"
            },
            {
              value: "95%",
              label: "Success Rate",
              icon: Award,
              color: "bg-purple-500",
              bgColor: "bg-purple-500/10 text-purple-500"
            },
            {
              value: "50+",
              label: "Schemes Covered",
              icon: Building2,
              color: "bg-orange-500",
              bgColor: "bg-orange-500/10 text-orange-500"
            }
          ].map((stat, index) => (
            <AnimateOnScroll key={index} delay={index * 100}>
              <Card className="bg-[#1f2937] border-slate-800 h-full p-6 hover:bg-[#253042] transition-colors">
                <CardContent className="p-0 flex items-start justify-between">
                  <div>
                    <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center mb-4`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400 font-medium">{stat.label}</div>
                  </div>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}

          <div className="md:col-span-2 pt-6">
            <div className="bg-[#1f2937] border border-slate-800 rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                <Star className="w-6 h-6 text-white" fill="white" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Leading MSME Advisory</h4>
                <p className="text-gray-400 text-sm">Trusted by entrepreneurs across 15+ states for business growth solutions</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, MapPin, Clock, ArrowRight } from 'lucide-react';
