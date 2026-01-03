
"use client";

import Link from 'next/link';
import { ArrowUp, Phone, CalendarPlus, Instagram, Facebook, Linkedin, Mail, MapPin, Youtube, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { EwolynLogo } from '../ewolyn-logo';
import { BookConsultation } from '../book-consultation';

const footerLinks = {
  quickLinks: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact Us' },
  ],
  fundingServices: [
    { href: '/funding', label: 'Grants' },
    { href: '/funding', label: 'Loans' },
    { href: '/funding', label: 'NBFC Solutions' },
    { href: '/services', label: 'Business Registration' },
    { href: '/services', label: 'Certifications & IP' },
  ],
  consultancy: [
    { href: '/services', label: 'M&A Advisory' },
    { href: '/services', label: 'Marketing & Branding' },
    { href: '/services', label: 'Legal Consultancy' },
    { href: '/services', label: 'Growth Strategy' },
  ],
  support: [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-and-conditions', label: 'Terms of Service' },
    { href: '/refund-policy', label: 'Refund Policy' },
  ],
};

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      size="icon"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl z-40 bg-[#f97068] hover:bg-[#e85f57] text-white"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-7 w-7" />
    </Button>
  );
};

export function Footer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) {
    return null;
  }

  return (
    <>
      <footer className="bg-[#0f1729] text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <EwolynLogo className="h-10 w-auto" />
              </Link>
              <p className="text-gray-400 mb-6 max-w-sm">
                Empowering entrepreneurs with seamless access to funding, expert guidance, and innovative business solutions.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/ewolyngroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1e2642] flex items-center justify-center text-gray-400 hover:bg-[#f97068] hover:text-white transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/ewolyn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1e2642] flex items-center justify-center text-gray-400 hover:bg-[#f97068] hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/ewolyngroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1e2642] flex items-center justify-center text-gray-400 hover:bg-[#f97068] hover:text-white transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1e2642] flex items-center justify-center text-gray-400 hover:bg-[#f97068] hover:text-white transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1e2642] flex items-center justify-center text-gray-400 hover:bg-[#f97068] hover:text-white transition-all"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-[#f97068] transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Funding Services */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Funding Services</h3>
              <ul className="space-y-3">
                {footerLinks.fundingServices.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-[#f97068] transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Contact Us</h3>
              <ul className="space-y-3">
                <li>
                  <a href="tel:7777941611" className="flex items-center gap-2 text-gray-400 hover:text-[#f97068] transition-colors">
                    <Phone className="h-4 w-4" />
                    <span>+91 77779 41611</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info.ewolyn@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-[#f97068] transition-colors">
                    <Mail className="h-4 w-4" />
                    <span>info.ewolyn@gmail.com</span>
                  </a>
                </li>
                <li className="flex items-start gap-2 text-gray-400">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span className="text-sm">Your Office Address Here, City, State - PIN</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 pt-8 border-t border-[#1e2642]">
            <p className="text-sm text-gray-500 mb-4">
              <strong className="text-gray-400">Disclaimer:</strong> EWOLYN SERVICES PRIVATE LIMITED is a private company that provides startup consulting services in India. We help new and growing businesses with professional advice. We are not connected or associated with any Government or Non-Government Department, Office, Agency, or Organization. We only offer consultancy services.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              <strong className="text-gray-400">Payment Information:</strong> Please make sure that all payments are made only to EWOLYN SERVICES PRIVATE LIMITED. We accept payments through our Current Account using NEFT, IMPS, RTGS, or through digital payment platforms. We do not accept payments in personal accounts or under any other name.
            </p>
          </div>

          {/* Copyright & Legal Links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-[#1e2642]">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Ewolyn Services Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.support.map(link => (
                <Link key={link.label} href={link.href} className="text-sm text-gray-500 hover:text-[#f97068] transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed Bottom Buttons */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:block">
        <BookConsultation>
            <Button className="rounded-full font-bold shadow-2xl h-14 bg-[#f97068] hover:bg-[#e85f57]" size="lg">
                <CalendarPlus className="mr-2 h-5 w-5"/>
                Book Consultation
            </Button>
        </BookConsultation>
      </div>
      <div className="fixed bottom-6 right-24 z-40 hidden md:block">
        <Button asChild size="icon" className="rounded-full h-14 w-14 shadow-2xl bg-green-500 hover:bg-green-600">
            <a href="tel:7777941611">
                <Phone className="h-6 w-6"/>
            </a>
        </Button>
      </div>
      <ScrollToTopButton />
    </>
  );
}
