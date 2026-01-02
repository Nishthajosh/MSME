
'use client';

import { Section, SectionTitle, SectionDescription } from '@/components/ui/section';
import { Button } from '../ui/button';
import { Phone, Mail } from 'lucide-react';
import { AnimateOnScroll } from '../animate-on-scroll';

export function Contact() {
  const phoneNumber = '917777941611';
  const whatsappMessage = encodeURIComponent('Hi, I would like to book a consultation.');

  const handleConsultationClick = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // On mobile, open phone dialer
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // On tablet/desktop, open WhatsApp
      window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
    }
  };

  return (
    <Section id="contact" className="bg-background">
      <AnimateOnScroll>
        <SectionTitle>Get In Touch</SectionTitle>
        <SectionDescription>
          Ready to transform your business? Contact us today.
        </SectionDescription>
      </AnimateOnScroll>

      <AnimateOnScroll delay={200}>
        <div className="mt-12 text-center space-y-6">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-lg md:text-xl">
            <a
              href="tel:7777941611"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5 text-accent" />
              <span>Call us: +91 77779 41611</span>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info.ewolyn@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5 text-accent" />
              <span>Email: info.ewolyn@gmail.com</span>
            </a>
          </div>
          <Button 
            size="lg" 
            className="rounded-full font-bold shadow-lg transition-transform hover:scale-105"
            onClick={handleConsultationClick}
          >
            Call Now for a Consultation
          </Button>
        </div>
      </AnimateOnScroll>
    </Section>
  );
}
