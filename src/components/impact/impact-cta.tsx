"use client";

import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export function ImpactCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Be Our Next Success Story
            </h2>
            <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
              Join thousands of entrepreneurs who have trusted Ewolyn to transform their business dreams into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 rounded-full font-bold">
                <Link href="/funding">
                  Apply for Funding <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 rounded-full font-bold shadow-lg transition-all hover:scale-105">
                <a href="tel:7777941611">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: +91 77779 41611
                </a>
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
