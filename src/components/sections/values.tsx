"use client";

import { AnimateOnScroll } from '../animate-on-scroll';
import { Handshake, Route, Users, Shield, Award, Clock } from 'lucide-react';

const valuesData = [
  {
    icon: Handshake,
    title: 'Trust & Transparency',
    description: 'We maintain the highest standards of integrity and deliver quality services that exceed expectations.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Route,
    title: 'End-to-End Support',
    description: 'We go beyond the ordinary to provide exceptional support and guidance throughout your journey.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'We innovate and create solutions tailored to your unique business challenges and opportunities.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Shield,
    title: 'Secure Process',
    description: 'Your data and documents are handled with the highest level of security and confidentiality.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Award,
    title: 'Expert Guidance',
    description: 'Access to industry experts who understand government schemes and funding processes inside out.',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: Clock,
    title: 'Fast Processing',
    description: 'Streamlined processes to get your funding approved in the shortest possible time.',
    color: 'from-teal-500 to-teal-600',
  },
];

export function Values() {
  return (
    <section id="values" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose EWOLYN?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The foundation of our commitment to your success
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valuesData.map((value, index) => (
            <AnimateOnScroll key={value.title} delay={200 + index * 100}>
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${value.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
