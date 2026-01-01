"use client";

import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageSquare, Instagram } from 'lucide-react';

export function ContactInfo() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Connect With Us
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              <Button asChild size="lg" className="h-auto py-6 flex-col gap-2 bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                <a href="tel:7777941611">
                  <Phone className="h-8 w-8" />
                  <span className="text-lg font-bold">Call Now</span>
                  <span className="text-sm opacity-80">+91 77779 41611</span>
                </a>
              </Button>
              <Button asChild size="lg" className="h-auto py-6 flex-col gap-2 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
                <a href="https://wa.me/917777941611" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="h-8 w-8" />
                  <span className="text-lg font-bold">WhatsApp</span>
                  <span className="text-sm opacity-80">Chat with us</span>
                </a>
              </Button>
              <Button asChild size="lg" className="h-auto py-6 flex-col gap-2 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                <a href="mailto:info.ewolyn@gmail.com">
                  <Mail className="h-8 w-8" />
                  <span className="text-lg font-bold">Email</span>
                  <span className="text-sm opacity-80">info.ewolyn@gmail.com</span>
                </a>
              </Button>
              <Button asChild size="lg" className="h-auto py-6 flex-col gap-2 bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                <a href="https://www.instagram.com/ewolyngroup" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-8 w-8" />
                  <span className="text-lg font-bold">Instagram</span>
                  <span className="text-sm opacity-80">@ewolyngroup</span>
                </a>
              </Button>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Disclaimer */}
        <AnimateOnScroll delay={300}>
          <div className="mt-16 p-6 bg-slate-100 rounded-2xl max-w-4xl mx-auto">
            <p className="text-sm text-gray-600 text-center">
              <strong>Disclaimer:</strong> Ewolyn is a business consultancy and service provider. 
              We are not a government body. All information provided is for guidance and informational 
              purposes only. Actual requirements or procedures may vary depending on the concerned 
              approving authority.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
