import Hero from '@/components/hero/Hero';
import TrustBar from '@/components/sections/TrustBar';
import Team from '@/components/sections/Team';
import Bewertungen from '@/components/sections/Bewertungen';
import KlassenHub from '@/components/sections/KlassenHub';
import Lernpfade from '@/components/sections/Lernpfade';
import Fuhrpark from '@/components/sections/Fuhrpark';
import Zertifizierungen from '@/components/sections/Zertifizierungen';
import Standorte from '@/components/sections/Standorte';
import Kontakt from '@/components/sections/Kontakt';
import Regionen from '@/components/sections/Regionen';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Team />
      <Bewertungen />
      <KlassenHub />
      <Lernpfade />
      <Fuhrpark />
      <Zertifizierungen />
      <Standorte />
      <Kontakt />
      <Regionen />
      <Footer />
    </main>
  );
}
