"use client";

import { useState } from 'react';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Loader2, CheckCircle2, Phone, Mail } from 'lucide-react';

const industries = [
  'Manufacturing',
  'Trading',
  'Services',
  'Technology/IT',
  'Agriculture',
  'Food & Beverage',
  'Healthcare',
  'Education',
  'Retail',
  'Construction',
  'Other',
];

const states = [
  'Andhra Pradesh', 'Gujarat', 'Karnataka', 'Maharashtra', 
  'Tamil Nadu', 'Telangana', 'Uttar Pradesh', 'West Bengal',
  'Delhi', 'Rajasthan', 'Kerala', 'Punjab', 'Other'
];

export function FundingForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: '',
    fundingRequired: '',
    businessStage: '',
    annualRevenue: '',
    employees: '',
    industry: '',
    state: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/funding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: 'Application Submitted!',
          description: data.message,
        });
      } else {
        toast({
          title: 'Error',
          description: data.error || 'Failed to submit application',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="funding-form" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center p-12">
            <CheckCircle2 className="h-20 w-20 text-emerald-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h2>
            <p className="text-gray-600 mb-8">
              Thank you for your funding application. Our team will analyze your requirements 
              and contact you within 24-48 hours with personalized funding options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline">
                <a href="tel:7777941611" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call: +91 77779 41611
                </a>
              </Button>
              <Button onClick={() => setIsSubmitted(false)}>
                Submit Another Application
              </Button>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="funding-form" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800">
              Get Started Today
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Start Your Funding Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fill the form below and our funding experts will get back to you within 24-48 hours.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <AnimateOnScroll delay={200}>
            <Card className="lg:col-span-2 shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Business Name *</label>
                      <Input
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Your Company Name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person *</label>
                      <Input
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Business Type *</label>
                      <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                        required
                      >
                        <option value="">Select type...</option>
                        <option value="sole-proprietorship">Sole Proprietorship</option>
                        <option value="partnership">Partnership</option>
                        <option value="llp">LLP</option>
                        <option value="pvt-ltd">Private Limited</option>
                        <option value="opc">One Person Company</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Funding Required *</label>
                      <select
                        name="fundingRequired"
                        value={formData.fundingRequired}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                        required
                      >
                        <option value="">Select amount...</option>
                        <option value="5-10L">₹5-10 Lakhs</option>
                        <option value="10-25L">₹10-25 Lakhs</option>
                        <option value="25-50L">₹25-50 Lakhs</option>
                        <option value="50L-1Cr">₹50L - 1 Crore</option>
                        <option value="1-5Cr">₹1-5 Crores</option>
                        <option value="5-10Cr">₹5-10 Crores</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Business Stage *</label>
                      <select
                        name="businessStage"
                        value={formData.businessStage}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                        required
                      >
                        <option value="">Select stage...</option>
                        <option value="idea">Idea Stage</option>
                        <option value="early">Early Stage (0-2 years)</option>
                        <option value="growth">Growth Stage (2-5 years)</option>
                        <option value="established">Established (5+ years)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="">Select industry...</option>
                        {industries.map((ind) => (
                          <option key={ind} value={ind}>{ind}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Annual Revenue</label>
                      <select
                        name="annualRevenue"
                        value={formData.annualRevenue}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="">Select revenue...</option>
                        <option value="0-10L">₹0 - 10 Lakhs</option>
                        <option value="10-50L">₹10 - 50 Lakhs</option>
                        <option value="50L-1Cr">₹50L - 1 Crore</option>
                        <option value="1-5Cr">₹1 - 5 Crores</option>
                        <option value="5Cr+">₹5 Crores+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="">Select state...</option>
                        {states.map((st) => (
                          <option key={st} value={st}>{st}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Brief Description</label>
                    <Textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Tell us about your business and funding needs..."
                      rows={4}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimateOnScroll>

          {/* Contact Info */}
          <AnimateOnScroll delay={400}>
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Call Us Directly</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Speak with our funding experts directly. Available Monday to Saturday, 9 AM - 6 PM.
                  </p>
                  <Button asChild className="w-full" variant="outline">
                    <a href="tel:7777941611" className="flex items-center justify-center gap-2">
                      <Phone className="h-5 w-5" />
                      +91 77779 41611
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Email Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full" variant="outline">
                    <a href="mailto:info.ewolyn@gmail.com" className="flex items-center justify-center gap-2">
                      <Mail className="h-5 w-5" />
                      info.ewolyn@gmail.com
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-lg bg-gradient-to-br from-emerald-50 to-teal-50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Why Choose Us?</h3>
                  <ul className="space-y-2">
                    {[
                      '95% Success Rate',
                      'Expert Funding Consultants',
                      '50+ Scheme Options',
                      'End-to-End Support',
                      'No Hidden Charges',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
