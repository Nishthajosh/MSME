
"use client";

import React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { AnimateOnScroll } from './animate-on-scroll';
import { CheckCircle } from 'lucide-react';

const partners = [
  { href: "https://www.andromedaloans.com/", src: "/andromeda.png", alt: "Andromeda" },
  { href: "https://www.tatatelebusiness.com/", src: "/tatatele.png", alt: "Tata Tele" },
  { href: "https://www.mas.co.in/", src: "/mas.png", alt: "MAS Financial" },
  { href: "https://dataneuron.business/", src: "/dataneuron.png", alt: "DataNeuron" },
];

const certifications = [
  { title: 'DPIIT Recognition', desc: 'Officially recognized by DPIIT' },
  { title: 'ISO 9001:2015', desc: 'Quality management certified' },
  { title: 'GeM Registered', desc: 'Government e-Marketplace vendor' },
  { title: 'Top 100 Fintech', desc: 'Leading emerging fintech' },
];

// Floating snowflakes for background
const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(15)].map((_, i) => (
      <div
        key={i}
        className="absolute text-blue-200/20 text-lg"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
        }}
      >
        ❄
      </div>
    ))}
  </div>
);

const ClientSlider: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <FloatingElements />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Partners Section */}
        <AnimateOnScroll>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-2 mb-4">
              <span className="w-2 h-2 bg-red-400 rounded-full"></span>
              <span className="text-red-500 text-sm font-medium">Trusted Network</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Our Strategic <span className="text-[#f97068]">Partners</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Collaborating with leaders to bring you the best funding solutions
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <div className="flex justify-center items-center mb-16">
            <Carousel
              plugins={[plugin.current]}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {partners.map((partner, index) => (
                  <CarouselItem key={index} className="basis-1/2 md:basis-1/4 lg:basis-1/5 flex justify-center">
                    <a href={partner.href} target="_blank" rel="noopener noreferrer" className="inline-block">
                      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div className="relative w-[120px] h-[50px]">
                          <Image 
                            src={partner.src} 
                            alt={partner.alt} 
                            fill
                            style={{ objectFit: 'contain' }}
                            className="transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </a>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </AnimateOnScroll>

        {/* Certifications Section */}
        <AnimateOnScroll delay={300}>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Certifications & Recognitions
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {certifications.map((cert) => (
                <div key={cert.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{cert.title}</h4>
                      <p className="text-gray-500 text-sm">{cert.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Bottom Banner */}
        <AnimateOnScroll delay={400}>
          <div className="bg-gray-50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#f97068]/10 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
              <div>
                <p className="text-gray-900 font-semibold text-lg">
                  Facilitated over <span className="text-[#f97068]">₹500 Crore</span> in MSME funding through strategic partnerships
                </p>
                <p className="text-gray-500">
                  Trusted by 20,000+ businesses across India
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ClientSlider;
