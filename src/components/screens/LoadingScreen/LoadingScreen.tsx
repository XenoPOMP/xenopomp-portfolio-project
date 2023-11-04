'use client';

import cn from 'classnames';
import { FC } from 'react';
import { Grid } from 'react-loader-spinner';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import styles from './LoadingScreen.module.scss';
import type { LoadingScreenProps } from './LoadingScreen.props';

const LoadingScreen: FC<LoadingScreenProps> = ({}) => {
  return (
    <main>
      <UiContainer className={cn(styles.loadingOverlay)}>
        <Grid color={'currentColor'} height={'2em'} />
      </UiContainer>
    </main>
  );
};

export default LoadingScreen;
