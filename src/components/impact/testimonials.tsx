"use client";

import { useState, useEffect } from 'react';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Patel',
    role: 'Founder',
    company: 'TechVentures Pvt Ltd',
    location: 'Ahmedabad',
    rating: 5,
    text: 'Ewolyn helped us secure DPIIT recognition and Seed Fund in record time. Their expertise in navigating government schemes is unmatched. Highly recommended for any startup!',
    service: 'Startup India + Seed Fund',
  },
  {
    name: 'Priya Sharma',
    role: 'Director',
    company: 'Green Earth Solutions',
    location: 'Delhi',
    rating: 5,
    text: 'Professional, responsive, and knowledgeable team. They handled our ISO certification and MSME registration seamlessly. The entire process was transparent and efficient.',
    service: 'ISO + MSME Registration',
  },
  {
    name: 'Mohammed Khan',
    role: 'CEO',
    company: 'KraftWorks Industries',
    location: 'Mumbai',
    rating: 5,
    text: 'Got ₹50 Lakhs PMEGP funding with their guidance. The team was always available to answer questions and provide updates. Excellent service!',
    service: 'PMEGP Funding',
  },
  {
    name: 'Sunita Devi',
    role: 'Proprietor',
    company: 'Mahila Handicrafts',
    location: 'Kolkata',
    rating: 5,
    text: 'Being a first-time entrepreneur, I was overwhelmed. Ewolyn made everything simple - from registration to getting Stand Up India loan. Forever grateful!',
    service: 'Stand Up India',
  },
  {
    name: 'Vikram Singh',
    role: 'Co-Founder',
    company: 'AgriTech Solutions',
    location: 'Lucknow',
    rating: 5,
    text: 'Their knowledge of agri-business funding schemes is exceptional. Helped us get RKVY-RAFTAAR grant. The co-founder model is truly revolutionary.',
    service: 'RKVY-RAFTAAR',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const nextSlide = () => goToSlide((currentIndex + 1) % testimonials.length);
  const prevSlide = () => goToSlide((currentIndex - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what entrepreneurs say about working with us.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll delay={200}>
            <div className="relative">
              <Card className="bg-white/10 backdrop-blur-sm border-white/10">
                <CardContent className="p-8 md:p-12">
                  <Quote className="h-12 w-12 text-blue-400 mb-6 opacity-50" />
                  <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
                    &ldquo;{testimonials[currentIndex].text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <div className="font-bold text-white text-lg">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-gray-400">
                        {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonials[currentIndex].location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex gap-1 mb-2 justify-end">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <Badge className="bg-blue-500/30 text-blue-200 border-0">
                        {testimonials[currentIndex].service}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="border-white/30 text-white hover:bg-white/10 rounded-full"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentIndex ? 'bg-blue-400 w-8' : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="border-white/30 text-white hover:bg-white/10 rounded-full"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
