"use client";

import { AnimateOnScroll } from '../animate-on-scroll';

const stats = [
  { value: '500+', label: 'Startups Served', color: 'text-amber-400' },
  { value: '₹50Cr+', label: 'Funding Facilitated', color: 'text-emerald-400' },
  { value: '1000+', label: 'Certifications Done', color: 'text-cyan-400' },
  { value: '50+', label: 'Expert Consultants', color: 'text-rose-400' },
];

export function Stats() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <AnimateOnScroll key={stat.label} delay={index * 100}>
              <div className="text-center p-6">
                <p className={`text-4xl md:text-5xl font-bold ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="text-gray-400 mt-2 font-medium">{stat.label}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
