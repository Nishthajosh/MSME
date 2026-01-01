import type { Metadata } from 'next';
import { FundingHero } from '@/components/funding/funding-hero';
import { EligibilityChecker } from '@/components/funding/eligibility-checker';
import { FundingSchemes } from '@/components/funding/funding-schemes';
import { FundingProcess } from '@/components/funding/funding-process';
import { FundingStats } from '@/components/funding/funding-stats';
import { FundingForm } from '@/components/funding/funding-form';
import { FundingPartners } from '@/components/funding/funding-partners';

export const metadata: Metadata = {
  title: 'Funding & Schemes | Ewolyn - Startup & MSME Funding Support',
  description: 'Access 50+ government funding schemes, MSME loans, startup grants, and NBFC funding. Check your eligibility and apply for funding from ₹5 Lakhs to ₹10 Crores.',
  keywords: 'MSME funding, startup funding, government schemes, PMEGP, MUDRA loan, seed fund, CGTMSE, business loan India',
};

export default function FundingPage() {
  return (
    <main className="overflow-hidden pt-20">
      <FundingHero />
      <EligibilityChecker />
      <FundingSchemes />
      <FundingProcess />
      <FundingStats />
      <FundingForm />
      <FundingPartners />
    </main>
  );
}
