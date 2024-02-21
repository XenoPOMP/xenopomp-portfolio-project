import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import Emoji from 'react-ios-emojis';

import avatarPlaceholderImg from '@/public/myself.png';
import AsyncImage from '@/src/components/ui/AsyncImage/AsyncImage.ts';
import SocialMediaLinks from '@/src/components/ui/SocialMediaLinks/SocialMediaLinks';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import styles from './AboutMeSection.module.scss';
import type { AboutMeSectionProps } from './AboutMeSection.props';

const AboutMeSection: FC<AboutMeSectionProps> = ({ locales }) => {
  return (
    <UiContainer className={cn(styles.aboutMe)} id={'about-me'}>
      <article className={cn(styles.part, styles.leftPart)}>
        <header>
          <h1>
            {locales.heading} <Emoji name={'victoryHand'} />
          </h1>

          <p className={cn(styles.desc)}>
            {locales.iam}
            <strong>{locales.frontendDev}</strong>
          </p>
        </header>

        <desc>{locales.desc}</desc>

        <SocialMediaLinks />
      </article>

      <article className={cn(styles.part, styles.rightPart)}>
        <AsyncImage
          className={cn('aspect-square')}
          style={{
            objectFit: 'cover',
          }}
          src={avatarPlaceholderImg}
          alt={'Это я :)'}
          priority={true}
        />
      </article>
    </UiContainer>
  );
};

export default AboutMeSection;
