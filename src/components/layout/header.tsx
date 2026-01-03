'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MainNav } from './main-nav';
import { EwolynLogo } from '../ewolyn-logo';
import { 
  Phone, 
  ExternalLink, 
  Home, 
  Building2, 
  BookOpen, 
  Users, 
  Mail,
  DollarSign,
  FileText,
  Award,
  TrendingUp,
  Handshake,
  Megaphone,
  Scale,
  ChevronDown,
  ChevronUp,
  Landmark,
  CreditCard,
  Building
} from 'lucide-react';
import { Button } from '../ui/button';

// Sub-items for Business Funding
const fundingSubItems = [
  {
    icon: Landmark,
    title: "Grants",
    description: "Government schemes",
    href: "/funding/grants",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Building,
    title: "Loans",
    description: "Bank financing",
    href: "/funding/loans",
    color: "bg-pink-50 text-pink-600"
  },
  {
    icon: CreditCard,
    title: "NBFC",
    description: "Alternative funding",
    href: "/funding/nbfc",
    color: "bg-green-50 text-green-600"
  }
];

// Other service items
const serviceItems = [
  {
    icon: FileText,
    title: "Business Registration",
    description: "Company formation & compliance",
    href: "/services#registration",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Award,
    title: "Certifications & IP",
    description: "ISO, patents & trademarks",
    href: "/services#certifications",
    color: "bg-red-50 text-[#f97068]"
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description: "Business expansion planning",
    href: "/services#growth",
    color: "bg-orange-50 text-orange-500"
  },
  {
    icon: Handshake,
    title: "M&A Advisory",
    description: "Merger & acquisition support",
    href: "/services#advisory",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: Megaphone,
    title: "Marketing & Branding",
    description: "Digital marketing solutions",
    href: "/services#marketing",
    color: "bg-pink-50 text-pink-500"
  },
  {
    icon: Scale,
    title: "Legal Consultancy",
    description: "Legal advice & documentation",
    href: "/services#legal",
    color: "bg-teal-50 text-teal-600"
  }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [fundingExpanded, setFundingExpanded] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar - Red */}
      <div className="bg-red-600 text-white py-2 relative overflow-hidden">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            {/* Colored dots */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
            </div>
            <span className="font-medium">New: Genesis Fund ₹490Cr for Tech Startups</span>
            {/* More colored dots */}
            <div className="hidden md:flex items-center gap-3 ml-4">
              <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span className="w-2 h-2 bg-red-400 rounded-full"></span>
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="/contact" className="text-white/90 hover:text-white transition-colors flex items-center gap-1">
              <ExternalLink className="w-3 h-3" />
              Track Application
            </a>
            <a href="tel:7777941611" className="text-white hover:text-white/90 transition-colors flex items-center gap-1 font-medium">
              <Phone className="w-3 h-3" />
              +91 77779 41611
            </a>
            <span className="w-2 h-2 bg-white/50 rounded-full"></span>
          </div>
        </div>
      </div>

      {/* Main Header - White */}
      <header 
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white shadow-lg' 
            : 'bg-white shadow-md'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <EwolynLogo className="h-10 w-auto" />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-900 font-medium text-sm hover:bg-gray-200 transition-colors">
              <Home className="w-4 h-4" />
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-2 px-4 py-2 text-[#f97068] font-medium text-sm hover:text-[#e85f57] transition-colors">
                <Building2 className="w-4 h-4" />
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-1 w-[480px] bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-200 ${
                  servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                {/* Header */}
                <div className="px-5 py-4 border-b border-gray-100">
                  <h3 className="font-semibold text-gray-900">Our Services</h3>
                  <p className="text-sm text-gray-500">Comprehensive solutions for your business growth</p>
                </div>
                
                {/* Service Items */}
                <div className="p-3">
                  {/* Business Funding - Expandable */}
                  <div className="mb-2">
                    <button 
                      onClick={() => setFundingExpanded(!fundingExpanded)}
                      className="w-full flex items-center gap-4 p-3 rounded-lg bg-[#fff5f5] hover:bg-[#ffecec] transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#f97068] flex items-center justify-center flex-shrink-0">
                        <DollarSign className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <h4 className="font-medium text-[#f97068]">Business Funding & Financial Consultancy</h4>
                        <p className="text-sm text-gray-500">Access grants, loans, and NBFC solutions</p>
                      </div>
                      {fundingExpanded ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                    
                    {/* Sub-items */}
                    <div className={`overflow-hidden transition-all duration-300 ${fundingExpanded ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                      <div className="flex gap-2 pl-4">
                        {fundingSubItems.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            className="flex-1 flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-[#f97068]/30 hover:bg-gray-50 transition-colors group"
                          >
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color}`}>
                              <item.icon className="w-4 h-4" />
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-900 text-sm group-hover:text-[#f97068] transition-colors">{item.title}</h5>
                              <p className="text-xs text-gray-500">{item.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Other Items Grid */}
                  <div className="grid grid-cols-2 gap-1">
                    {serviceItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color}`}>
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm group-hover:text-[#f97068] transition-colors">{item.title}</h4>
                          <p className="text-xs text-gray-500">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link href="/funding" className="flex items-center gap-2 px-4 py-2 text-gray-700 font-medium text-sm hover:text-gray-900 transition-colors">
              <BookOpen className="w-4 h-4" />
              Blogs
            </Link>
            <Link href="/about" className="flex items-center gap-2 px-4 py-2 text-gray-700 font-medium text-sm hover:text-gray-900 transition-colors">
              <Users className="w-4 h-4" />
              About Us
            </Link>
            <Link href="/contact" className="flex items-center gap-2 px-4 py-2 text-gray-700 font-medium text-sm hover:text-gray-900 transition-colors">
              <Mail className="w-4 h-4" />
              Contact Us
            </Link>
          </nav>

          {/* CTA Button */}
          <Button asChild className="hidden lg:flex rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold px-6">
            <Link href="/funding" className="flex items-center gap-2">
              Start Funding Journey
              <span className="ml-1">→</span>
            </Link>
          </Button>

          {/* Mobile Menu */}
          <MainNav scrolled={scrolled} />
        </div>
      </header>
    </>
  );
}
