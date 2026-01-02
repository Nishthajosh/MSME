import type { Metadata } from 'next';
import { AboutHero } from '@/components/about/about-hero';
import { CompanyOverview } from '@/components/about/company-overview';
import { VisionMission } from '@/components/about/vision-mission';
import { CoFounderModel } from '@/components/about/co-founder-model';
import { WhyChooseUs } from '@/components/about/why-choose-us';
import { TeamValues } from '@/components/about/team-values';

export const metadata: Metadata = {
  title: 'About Us | Ewolyn - Empowering Indian Startups & MSMEs',
  description: 'Learn about Ewolyn - your trusted partner for startup and MSME support services in India. Our vision, mission, and commitment to business growth.',
  keywords: 'about Ewolyn, startup consultancy, MSME support, business advisory India, co-founder model',
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <AboutHero />
      <CompanyOverview />
      <VisionMission />
      <CoFounderModel />
      <WhyChooseUs />
      <TeamValues />
    </main>
  );
}
