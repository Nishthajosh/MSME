
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Home, Building2, BookOpen, Users, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/services', label: 'Services', icon: Building2 },
  { href: '/funding', label: 'Funding', icon: BookOpen },
  { href: '/about', label: 'About Us', icon: Users },
  { href: '/contact', label: 'Contact Us', icon: Mail },
];

export function MainNav({ scrolled = false }: { scrolled?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Only */}
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-gray-700 hover:bg-gray-100">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
            <div className="flex flex-col h-full">
              <div className="flex justify-end p-2">
                 <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-6 w-6" />
                 </Button>
              </div>
              <nav className="flex flex-col items-center justify-center flex-grow gap-6">
                {navLinks.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={handleLinkClick}
                    className="flex items-center gap-3 text-xl font-semibold text-gray-700 hover:text-red-500 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                    {label}
                  </Link>
                ))}
                <Button asChild size="lg" className="mt-8 rounded-full font-bold text-lg bg-red-500 hover:bg-red-600">
                  <Link href="/funding" onClick={() => setIsOpen(false)}>
                    Start Funding Journey →
                  </Link>
                </Button>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
