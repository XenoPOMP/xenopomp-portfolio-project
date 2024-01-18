import cn from 'classnames';
import { Unbounded } from 'next/font/google';
import Link from 'next/link';
import { FC } from 'react';

import styles from './Logotype.module.scss';
import type { LogotypeProps } from './Logotype.props';

const logoFont = Unbounded({ subsets: ['latin', 'cyrillic'] });

const Logotype: FC<LogotypeProps> = ({ className, ...props }) => {
  return (
    <Link
      href={'/#'}
      className={cn('font-bold', styles.logo, logoFont.className, className)}
      {...props}
    >
      xeno.pomp
    </Link>
  );
};

export default Logotype;
