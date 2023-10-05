import cn from 'classnames';
import { FC } from 'react';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import type { HeaderProps } from './Header.props';

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header>
      <UiContainer>
        <b className={cn('font-medium')}>Header</b>
      </UiContainer>
    </header>
  );
};

export default Header;
