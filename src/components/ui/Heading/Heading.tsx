import cn from 'classnames';
import { ClassAttributes, ComponentProps, FC, HTMLAttributes } from 'react';

import styles from './Heading.module.scss';
import type { HeadingProps } from './Heading.props';

const Heading = ({
  level,
  className,
  ...props
}: HeadingProps &
  ClassAttributes<HTMLHeadingElement> &
  HTMLAttributes<HTMLHeadingElement>) => {
  switch (level) {
    case '1': {
      return <h1 className={cn(className)} {...props} />;
    }
    case '2': {
      return (
        <h2 className={cn('font-bold text-[2.25em]', className)} {...props} />
      );
    }
    case '3': {
      return <h3 className={cn(className)} {...props} />;
    }
    case '4': {
      return <h4 className={cn(className)} {...props} />;
    }
    case '5': {
      return <h5 className={cn(className)} {...props} />;
    }
    case '6': {
      return <h6 className={cn(className)} {...props} />;
    }
  }
};

export default Heading;
