import type { Metadata } from 'next';
import { AboutHero } from '@/components/about/about-hero';
import { CompanyOverview } from '@/components/about/company-overview';
import { VisionMission } from '@/components/about/vision-mission';
import { WhyChooseUs } from '@/components/about/why-choose-us';
import { ImportantNotice } from '@/components/about/important-notice';

export const metadata: Metadata = {
  title: 'About Us | Ewolyn - Empowering Indian Startups & MSMEs',
  description: 'Learn about Ewolyn - your trusted partner for startup and MSME support services in India. Our vision, mission, and commitment to business growth.',
  keywords: 'about Ewolyn, startup consultancy, MSME support, business advisory India, co-founder model',
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white">
      <AboutHero />
      <CompanyOverview />
      <VisionMission />
      <WhyChooseUs />
      <ImportantNotice />
      {/* <TeamValues /> - Content integrated into VisionMission */}
    </main>
  );
}
