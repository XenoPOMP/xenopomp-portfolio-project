import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import Emoji from 'react-ios-emojis';

import avatarPlaceholderImg from '@/public/arts/avatar-placeholder.png';
import SocialMediaLinks from '@/src/components/ui/SocialMediaLinks/SocialMediaLinks';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import styles from './AboutMeSection.module.scss';
import type { AboutMeSectionProps } from './AboutMeSection.props';

const AboutMeSection: FC<AboutMeSectionProps> = ({}) => {
  return (
    <UiContainer className={cn(styles.aboutMe)} id={'about-me'}>
      <article className={cn(styles.part, styles.leftPart)}>
        <header>
          <h1>
            Привет, меня зовут Александр <Emoji name={'victoryHand'} />
          </h1>

          <p className={cn(styles.desc)}>
            Я - <strong>{'<front-end разработчик/>'}</strong>
          </p>
        </header>

        <desc>
          Front-end разработчик с опытом работы в React, TypeScript, NextJS и в
          других технологиях. Я всегда ищу новые задачи для решения.
        </desc>

        <SocialMediaLinks />
      </article>

      <article className={cn(styles.part, styles.rightPart)}>
        <Image src={avatarPlaceholderImg} alt={'Это я :)'} priority={true} />
      </article>
    </UiContainer>
  );
};

export default AboutMeSection;
