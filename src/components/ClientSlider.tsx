
"use client";

import React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

const partners = [
  { href: "https://www.andromedaloans.com/", src: "/andromeda.png", alt: "Andromeda" },
  { href: "https://www.tatatelebusiness.com/", src: "/tatatele.png", alt: "Tata Tele" },
  { href: "https://www.mas.co.in/", src: "/mas.png", alt: "MAS Financial" },
  { href: "https://dataneuron.business/", src: "/dataneuron.png", alt: "DataNeuron" },
];

const ClientSlider: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className="bg-gray-50 py-12">
      <h2 className="text-center text-2xl font-bold mb-4">
        Our Esteemed Partners
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        We partner with organizations committed to the growth of startups and the Indian MSME ecosystem.
      </p>
      <div className="flex justify-center items-center">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="flex justify-center">
                <a href={partner.href} target="_blank" rel="noopener noreferrer" className="inline-block">
                  <div className="relative w-[200px] h-[80px]">
                    <Image 
                      src={partner.src} 
                      alt={partner.alt} 
                      fill
                      style={{ objectFit: 'contain' }}
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default ClientSlider;
