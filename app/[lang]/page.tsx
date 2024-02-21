import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import AboutMeSection from '@/src/sections/AboutMeSection/AboutMeSection';
import PercentageSection from '@/src/sections/PercentageSection/PercentageSection';
import ProjectSection from '@/src/sections/ProjectSection/ProjectSection';

export default function Home() {
  return (
    <main>
      <AboutMeSection />

      <PercentageSection />

      <ProjectSection />
    </main>
  );
}
