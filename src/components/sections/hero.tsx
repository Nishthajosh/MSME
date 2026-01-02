"use client";

import Link from 'next/link';
import { Button } from '../ui/button';
import { AnimateOnScroll } from '../animate-on-scroll';
import { ArrowRight, Rocket, TrendingUp } from 'lucide-react';

export function Hero() {
  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector('#services');
    if (targetElement) {
      const offsetTop = (targetElement as HTMLElement).offsetTop;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <section id="home" className="relative pt-32 pb-24 text-center overflow-hidden h-screen flex flex-col justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/123.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll startVisible>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Revolutionizing Indian Startups & MSMEs
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll startVisible delay={200}>
          <p className="text-2xl md:text-3xl font-bold text-white/90 mb-6">
            EAGLE WOLF LION - The trio that stands with you, means EWOLYN stands with you!!
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll startVisible delay={400}>
          <p className="max-w-3xl mx-auto text-lg md:text-xl mb-8 text-white/80">
            Comprehensive support for startups and MSMEs with registration,
            certification, funding, and business growth services.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll startVisible delay={600}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full font-bold shadow-lg transition-transform hover:scale-105 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
              <Link href="/contact" className="flex items-center gap-2">
                <Rocket className="h-5 w-5" />
                Get Free Consultation
              </Link>
            </Button>
            <Button asChild size="lg" className="rounded-full font-bold shadow-lg transition-transform hover:scale-105 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
              <Link href="/funding" className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Apply for Funding
              </Link>
            </Button>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll startVisible delay={800}>
          <div className="mt-8">
            <a 
              href="#services" 
              onClick={handleScrollToServices}
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              Explore Our Services <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
