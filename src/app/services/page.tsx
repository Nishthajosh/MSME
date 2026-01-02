import type { Metadata } from 'next';
import { ServicesHero } from '@/components/services/services-hero';
import { CompanyRegistration } from '@/components/services/company-registration';
import { GovernmentCertifications } from '@/components/services/government-certifications';
import { DigitalMarketing } from '@/components/services/digital-marketing';
import { LegalCompliance } from '@/components/services/legal-compliance';
import { FundingSupport } from '@/components/services/funding-support';
import { ServicesCTA } from '@/components/services/services-cta';

export const metadata: Metadata = {
  title: 'Our Services | Ewolyn - Startup & MSME Support',
  description: 'Comprehensive business services including company registration, government certifications, digital marketing, legal compliance, and funding support for Indian startups and MSMEs.',
  keywords: 'company registration, ISO certification, DPIIT recognition, MSME registration, digital marketing, legal compliance, startup funding',
};

export default function ServicesPage() {
  return (
    <main className="overflow-hidden">
      <ServicesHero />
      <CompanyRegistration />
      <GovernmentCertifications />
      <DigitalMarketing />
      <LegalCompliance />
      <FundingSupport />
      <ServicesCTA />
    </main>
  );
}
