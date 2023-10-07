import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

import styles from './Logotype.module.scss';
import type { LogotypeProps } from './Logotype.props';

const Logotype: FC<LogotypeProps> = ({ className, ...props }) => {
  return (
    <Link href={'/#'} className={cn('font-bold', styles.logo, className)}>
      xeno.pomp
    </Link>
  );
};

export default Logotype;
