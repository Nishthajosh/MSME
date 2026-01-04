"use client";

import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, CheckCircle, Lightbulb } from 'lucide-react';

export function CompanyOverview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Our Purpose Component */}
          <AnimateOnScroll>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-[#d22d2d] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-red-200">
                <Lightbulb className="h-7 w-7 text-white" />
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Our Purpose
              </h2>
              <p className="text-[#f97068] font-medium mb-6">
                Making Business Growth Accessible
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                At Ewolyn, we bridge the gap between ambitious entrepreneurs and the
                complex world of business funding. Our mission is clear: <span className="font-bold text-gray-900">to empower 1
                  lakh+ startups</span> by providing comprehensive advisory services that transform
                business ideas into successful enterprises.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <div className="flex items-center gap-2 mb-1 text-gray-900 font-semibold">
                    <Shield className="w-4 h-4 text-[#f97068]" />
                    <span>Founded</span>
                  </div>
                  <p className="text-sm text-gray-500 ml-6">December 2023</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1 text-gray-900 font-semibold">
                    <Shield className="w-4 h-4 text-[#f97068]" />
                    <span>Headquarters</span>
                  </div>
                  <p className="text-sm text-gray-500 ml-6">B-304/2 Gopal Palace, Ahmedabad-380015</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* What Makes Us Different */}
          <AnimateOnScroll delay={200}>
            <div className="bg-gray-100/50 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                What Makes Us Different
              </h2>

              <div className="space-y-8">
                {[
                  {
                    title: "Advisory, Not Lending",
                    desc: "We guide and facilitate; banks and NBFCs provide the actual funding",
                    icon: Shield
                  },
                  {
                    title: "DPIIT Recognized",
                    desc: "Official startup consultant with government recognition",
                    icon: CheckCircle
                  },
                  {
                    title: "End-to-End Support",
                    desc: "From ideation to funding, complete business lifecycle assistance",
                    icon: CheckCircle
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#d22d2d]">
                        <item.icon className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
}
