"use client";

import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Phone, MessageSquare } from 'lucide-react';

export function ServicesCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0f1729] to-[#1a1f3a] relative overflow-hidden">
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
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#f97068]/20 border border-[#f97068]/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-[#f97068] rounded-full"></span>
              <span className="text-[#f97068] text-sm font-medium">GET STARTED TODAY</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not Sure Which <span className="text-[#f97068]">Service You Need?</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Our experts will analyze your business requirements and recommend the best services for your growth. Get a free consultation today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#f97068] hover:bg-[#e85f57] text-white rounded-full font-bold shadow-lg">
                <Link href="/contact">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Get Free Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-gray-600 text-white hover:bg-white/10 rounded-full font-bold">
                <a href="tel:9737799937">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: +91 97377 99937
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Available Monday to Saturday, 9 AM - 6 PM IST
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
