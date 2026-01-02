
import { Hero } from '@/components/sections/hero';
import { Stats } from '@/components/sections/stats';
import ClientSlider from '@/components/ClientSlider';
import { Services } from '@/components/sections/services';
import { Funding } from '@/components/sections/funding';
import { Impact } from '@/components/sections/impact';
import { Values } from '@/components/sections/values';
import { Process } from '@/components/sections/process';
import { Offices } from '@/components/sections/offices';
import { Contact } from '@/components/sections/contact';
import { AiAssistant } from '@/components/ai-assistant';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Stats />
      <ClientSlider />
      <Services />
      <Funding />
      <Impact />
      <Values />
      <Process />
      <Offices />
      <Contact />
    </main>
  );
}
