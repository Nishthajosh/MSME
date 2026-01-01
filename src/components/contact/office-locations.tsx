"use client";

import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';

const offices = {
  gujarat: [
    {
      name: 'Ahmedabad HQ',
      address: 'B-304/2 Gopal Palace, Near Shiromani Complex, opposite Ocean Park, Nehru Nagar, Ahmedabad-380015',
    },
    {
      name: 'Ahmedabad - Shyamal',
      address: 'Unicus Shyamal, A-1007, Near Shyamal Cross Road, Ahmedabad – 380015',
    },
    {
      name: 'Ahmedabad - Corporate Road',
      address: 'B-101 Synergy Tower, Near Vodafone House, Corporate Road, Ahmedabad – 380015',
    },
    {
      name: 'Kadi',
      address: 'F/20, Mahakali Trade Center, Bhagyoday Cross Road, Kadi',
    },
  ],
  uttarPradesh: [
    {
      name: 'Lucknow',
      address: 'Office No. 76, Green City, Banthra Main Road, Lucknow – 226401',
    },
    {
      name: 'Kanpur',
      address: '17, The Mall Road, Near Kanpur Railway Station – 208001',
    },
    {
      name: 'Varanasi',
      address: '325/3, Paresh Score, Near Hotel Ayodhya, Benares – 221001',
    },
  ],
  maharashtraWestBengal: [
    {
      name: 'Ambernath',
      address: 'Rahul Estate, Bo-azcha Road, Ambernath (E) – 421501',
    },
    {
      name: 'Mumbai',
      address: '86, Bozar Gate Street, Fort, Mumbai – 400001',
    },
    {
      name: 'Kolkata',
      address: 'Digvijay House, Netaji Subhash Road, Kolkata, West Bengal – 700040',
    },
  ],
};

export function OfficeLocations() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              Our Offices
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Empowering Businesses Nationwide
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit us at any of our offices across India for in-person consultation
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Gujarat */}
          <AnimateOnScroll delay={200}>
            <Card className="h-full">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Gujarat Offices
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {offices.gujarat.map((office) => (
                    <div key={office.name} className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-bold text-gray-900">{office.name}</h4>
                      <p className="text-sm text-gray-600">{office.address}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimateOnScroll>

          {/* Uttar Pradesh */}
          <AnimateOnScroll delay={400}>
            <Card className="h-full">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Uttar Pradesh Offices
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {offices.uttarPradesh.map((office) => (
                    <div key={office.name} className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-bold text-gray-900">{office.name}</h4>
                      <p className="text-sm text-gray-600">{office.address}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimateOnScroll>

          {/* Maharashtra & West Bengal */}
          <AnimateOnScroll delay={600}>
            <Card className="h-full">
              <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Maharashtra & West Bengal
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {offices.maharashtraWestBengal.map((office) => (
                    <div key={office.name} className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-bold text-gray-900">{office.name}</h4>
                      <p className="text-sm text-gray-600">{office.address}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
