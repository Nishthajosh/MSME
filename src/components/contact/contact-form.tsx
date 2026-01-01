"use client";

import { useState } from 'react';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, CheckCircle2, Phone, Clock, MapPin } from 'lucide-react';

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: 'Message Sent!',
          description: data.message,
        });
      } else {
        toast({
          title: 'Error',
          description: data.error || 'Failed to send message',
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center p-12">
            <CheckCircle2 className="h-20 w-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h2>
            <p className="text-gray-600 mb-8">
              Thank you for reaching out. Our team will get back to you within 24 hours.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>
              Send Another Message
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <AnimateOnScroll>
            <Card className="lg:col-span-2 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimateOnScroll>

          {/* Contact Info */}
          <AnimateOnScroll delay={200}>
            <div className="space-y-6">
              <Card className="shadow-lg bg-gradient-to-br from-orange-50 to-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Call Us</h3>
                      <a href="tel:7777941611" className="text-orange-600 hover:underline">
                        +91 77779 41611
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Speak directly with our experts for immediate assistance.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Business Hours</h3>
                      <p className="text-gray-600">Mon - Sat: 9AM - 6PM</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    We respond to all inquiries within 24 hours during business days.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Head Office</h3>
                      <p className="text-gray-600">Ahmedabad, Gujarat</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Multiple offices across Gujarat, UP, Maharashtra & West Bengal.
                  </p>
                </CardContent>
              </Card>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
