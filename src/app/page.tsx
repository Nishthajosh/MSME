
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
import { IndiaPresence } from '@/components/sections/india-presence';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <ClientSlider />
      <Stats />
      <IndiaPresence />
      <Services />
      <Funding />
      <Process />
      <Impact />
      <Values />
      <Offices />
      <Contact />
    </main>
  );
}
