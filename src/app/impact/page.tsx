import type { Metadata } from 'next';
import { ImpactHero } from '@/components/impact/impact-hero';
import { ImpactMetrics } from '@/components/impact/impact-metrics';
import { SuccessStories } from '@/components/impact/success-stories';
import { Testimonials } from '@/components/impact/testimonials';
import { ImpactCTA } from '@/components/impact/impact-cta';

export const metadata: Metadata = {
  title: 'Our Impact | Ewolyn - Success Stories & Testimonials',
  description: 'Discover how Ewolyn has helped thousands of businesses succeed. Read success stories, testimonials, and see our impact metrics.',
  keywords: 'success stories, testimonials, business impact, startup success, MSME growth',
};

export default function ImpactPage() {
  return (
    <main className="overflow-hidden">
      <ImpactHero />
      <ImpactMetrics />
      <SuccessStories />
      <Testimonials />
      <ImpactCTA />
    </main>
  );
}
