import { Defined } from '@xenopomp/advanced-types';
import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';

const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  href,
  ...props
}) => {
  const variantStyles: Record<
    Defined<typeof variant>,
    {
      className: string;
    }
  > = {
    primary: {
      className: '',
    },
    secondary: {
      className: cn(styles.secondary),
    },
  };

  const InnerButtonComponent: FC = () => {
    return (
      <button
        className={cn(
          styles.uiButton,
          variantStyles[variant].className,
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  };

  return href ? (
    <>
      <Link href={href} target={'_blank'}>
        <InnerButtonComponent />
      </Link>
    </>
  ) : (
    <InnerButtonComponent />
  );
};

export default Button;
