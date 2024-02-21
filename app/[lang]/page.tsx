import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import AboutMeSection from '@/src/sections/AboutMeSection/AboutMeSection';
import PercentageSection from '@/src/sections/PercentageSection/PercentageSection';
import ProjectSection from '@/src/sections/ProjectSection/ProjectSection';
import { LangParams } from '@/src/types/LangParams';

export default async function Home({ params: { lang } }: {} & LangParams) {
  const dict = await getDictionary(lang);

  return (
    <main>
      <AboutMeSection locales={dict.main.sections.aboutMe} />

      <PercentageSection />

      <ProjectSection />
    </main>
  );
}
