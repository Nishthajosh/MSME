import type { Metadata } from 'next';
import { ContactHero } from '@/components/contact/contact-hero';
import { ContactForm } from '@/components/contact/contact-form';
import { OfficeLocations } from '@/components/contact/office-locations';
import { ContactInfo } from '@/components/contact/contact-info';

export const metadata: Metadata = {
  title: 'Contact Us | Ewolyn - Get in Touch',
  description: 'Contact Ewolyn for startup and MSME support services. Get free consultation, apply for funding, or visit our offices across India.',
  keywords: 'contact Ewolyn, business consultation, startup support India, MSME help',
};

export default function ContactPage() {
  return (
    <main className="overflow-hidden pt-20">
      <ContactHero />
      <ContactForm />
      <OfficeLocations />
      <ContactInfo />
    </main>
  );
}
