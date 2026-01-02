'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MainNav } from './main-nav';
import { EwolynLogo } from '../ewolyn-logo';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar style after scrolling past the hero section (around 100px)
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-sm border-b transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/90 text-white border-gray-700/50' 
          : 'bg-white/10 text-white border-white/20'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        <Link href="/" className="flex items-center gap-2">
          <EwolynLogo className="h-8 w-auto" />
        </Link>
        <MainNav scrolled={scrolled} />
      </div>
    </header>
  );
}
