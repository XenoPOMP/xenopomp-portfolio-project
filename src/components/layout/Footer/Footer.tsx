import cn from 'classnames';
import { FC } from 'react';

import Logotype from '@/src/components/ui/Logotype/Logotype';
import SocialMediaLinks from '@/src/components/ui/SocialMediaLinks/SocialMediaLinks';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import UiGrid from '@/src/components/ui/UiGrid/UiGrid';

import styles from './Footer.module.scss';
import type { FooterProps } from './Footer.props';

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className={cn(styles.appFooter)}>
      <UiContainer className={cn(styles.container)}>
        <Logotype className={cn('font-medium')} />

        <SocialMediaLinks variant={'footer'} />
      </UiContainer>
    </footer>
  );
};

export default Footer;
