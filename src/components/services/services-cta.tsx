"use client";

import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';

export function ServicesCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our experts will analyze your business requirements and recommend the best services for your growth. Get a free consultation today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full font-bold shadow-lg">
                <Link href="/contact">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Get Free Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full font-bold">
                <a href="tel:7777941611">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: +91 77779 41611
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
