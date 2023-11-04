import cn from 'classnames';
import { FC } from 'react';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import styles from './LoadingScreen.module.scss';
import type { LoadingScreenProps } from './LoadingScreen.props';

const LoadingScreen: FC<LoadingScreenProps> = ({}) => {
  return (
    <main>
      <UiContainer className={cn(styles.loadingOverlay)}>
        Loading...
      </UiContainer>
    </main>
  );
};

export default LoadingScreen;
