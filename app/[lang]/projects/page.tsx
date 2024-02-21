import { AsyncFC } from '@xenopomp/advanced-types';
import { FC } from 'react';

import { getDictionary } from '@/get-dictionary';
import ProjectSection from '@/src/sections/ProjectSection/ProjectSection';
import { LangParams } from '@/src/types/LangParams';

const AllProjectsPage: AsyncFC<{} & LangParams> = async ({
  params: { lang },
}) => {
  const dict = await getDictionary(lang);

  return (
    <main>
      <ProjectSection locales={dict.main.sections.projects} />
    </main>
  );
};

export default AllProjectsPage;
