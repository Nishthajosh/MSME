
'use client';

import { useState } from 'react';
import { AnimateOnScroll } from '../animate-on-scroll';
import { Button } from '../ui/button';
import { Phone, Mail, MapPin, Send, Clock, Headphones } from 'lucide-react';

const offices = [
  {
    title: 'Head Office',
    address: 'B-304/2 Gopal Palace, Near Shiromani Complex, opposite Ocean Park, Nehru Nagar, Ahmedabad-380015',
  },
  {
    title: 'Branch Office',
    address: 'Ahmedabad, Gujarat',
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    funding: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 relative">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-gray-300 text-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            ❄
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#f97068]/20 border border-[#f97068]/30 rounded-full px-4 py-2 mb-4">
              <span className="w-2 h-2 bg-[#f97068] rounded-full"></span>
              <span className="text-[#f97068] text-sm font-medium">GET STARTED TODAY</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to <span className="text-[#f97068]">Transform Your Business?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose your preferred way to connect with our funding experts
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          {/* Left - Contact Form */}
          <AnimateOnScroll delay={200}>
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Start Your Funding Journey
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97068] focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97068] focus:border-transparent transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97068] focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Funding Requirement *
                  </label>
                  <select
                    required
                    value={formData.funding}
                    onChange={(e) => setFormData({ ...formData, funding: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#f97068] focus:border-transparent transition-all"
                  >
                    <option value="">Select funding amount</option>
                    <option value="5-10L">₹5L - ₹10L</option>
                    <option value="10-25L">₹10L - ₹25L</option>
                    <option value="25-50L">₹25L - ₹50L</option>
                    <option value="50L-1Cr">₹50L - ₹1Cr</option>
                    <option value="1Cr+">₹1Cr+</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-xl font-bold py-4 bg-[#f97068] hover:bg-[#e85f57] text-white text-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Application
                </Button>
              </form>
            </div>
          </AnimateOnScroll>

          {/* Right - Call Us Card */}
          <div className="space-y-6">
            <AnimateOnScroll delay={300}>
              <div className="bg-gradient-to-br from-[#0f1729] to-[#1a1f3a] rounded-3xl p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#f97068] flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Call Us Directly</h3>
                    <p className="text-gray-400 text-sm">Expert assistance available</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">
                  Speak with our funding experts directly. Get personalized guidance for your business needs.
                </p>

                <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
                  <Clock className="w-4 h-4" />
                  <span>Mon - Sat, 9 AM - 6 PM</span>
                </div>

                <Button asChild size="lg" className="w-full rounded-xl font-bold bg-white text-gray-900 hover:bg-gray-100 transition-all">
                  <a href="tel:9737799937" className="flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call: +91 97377 99937
                  </a>
                </Button>
              </div>
            </AnimateOnScroll>

            {/* Contact Info */}
            <AnimateOnScroll delay={400}>
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                <div className="space-y-4">
                  <a href="tel:9737799937" className="flex items-center gap-3 text-gray-600 hover:text-[#f97068] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[#f97068]/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#f97068]" />
                    </div>
                    <span className="font-medium">+91 97377 99937</span>
                  </a>
                  <a href="mailto:info.ewolyn@gmail.com" className="flex items-center gap-3 text-gray-600 hover:text-[#f97068] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[#f97068]/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#f97068]" />
                    </div>
                    <span className="font-medium">info.ewolyn@gmail.com</span>
                  </a>
                  {offices.map((office) => (
                    <div key={office.title} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-purple-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{office.title}</p>
                        <p className="text-gray-500 text-sm">{office.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
