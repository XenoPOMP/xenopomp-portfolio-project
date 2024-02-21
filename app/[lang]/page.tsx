import { Locale } from '@/i18n-config';
import AboutMeSection from '@/src/sections/AboutMeSection/AboutMeSection';
import PercentageSection from '@/src/sections/PercentageSection/PercentageSection';
import ProjectSection from '@/src/sections/ProjectSection/ProjectSection';

export default function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <main>
      <AboutMeSection />

      <PercentageSection />

      <ProjectSection />
    </main>
  );
}
