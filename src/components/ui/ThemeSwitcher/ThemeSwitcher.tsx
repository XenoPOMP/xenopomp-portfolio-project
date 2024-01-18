'use client';

import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { ComponentProps, FC, useEffect } from 'react';

import { AppConstants } from '@/app/app.constants';
import useBoolean from '@/src/hooks/useBoolean';

import styles from './ThemeSwitcher.module.scss';
import type { ThemeSwitcherProps } from './ThemeSwitcher.props';

const ThemeSwitcher: VariableFC<
  'button',
  ThemeSwitcherProps,
  'onClick' | 'children'
> = ({ className, ...props }) => {
  const [isDark, toggleIsDark, setIsDark] = useBoolean(false);

  const Icon: FC = () => {
    if (isDark) {
      return (
        <>
          <svg
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={cn(styles.icon)}
          >
            <path
              d='M8 16C5.77778 16 3.88889 15.2222 2.33333 13.6667C0.777778 12.1111 0 10.2222 0 8C0 5.77778 0.777778 3.88889 2.33333 2.33333C3.88889 0.777778 5.77778 0 8 0C8.20741 0 8.41111 0.00740741 8.61111 0.0222222C8.81111 0.037037 9.00741 0.0592593 9.2 0.0888889C8.59259 0.518519 8.10741 1.07778 7.74445 1.76667C7.38148 2.45556 7.2 3.2 7.2 4C7.2 5.33333 7.66667 6.46667 8.6 7.4C9.53333 8.33333 10.6667 8.8 12 8.8C12.8148 8.8 13.563 8.61852 14.2444 8.25556C14.9259 7.89259 15.4815 7.40741 15.9111 6.8C15.9407 6.99259 15.963 7.18889 15.9778 7.38889C15.9926 7.58889 16 7.79259 16 8C16 10.2222 15.2222 12.1111 13.6667 13.6667C12.1111 15.2222 10.2222 16 8 16ZM8 14.2222C9.3037 14.2222 10.4741 13.863 11.5111 13.1444C12.5481 12.4259 13.3037 11.4889 13.7778 10.3333C13.4815 10.4074 13.1852 10.4667 12.8889 10.5111C12.5926 10.5556 12.2963 10.5778 12 10.5778C10.1778 10.5778 8.62593 9.93704 7.34444 8.65556C6.06296 7.37407 5.42222 5.82222 5.42222 4C5.42222 3.7037 5.44444 3.40741 5.48889 3.11111C5.53333 2.81481 5.59259 2.51852 5.66667 2.22222C4.51111 2.6963 3.57407 3.45185 2.85556 4.48889C2.13704 5.52593 1.77778 6.6963 1.77778 8C1.77778 9.71852 2.38519 11.1852 3.6 12.4C4.81482 13.6148 6.28148 14.2222 8 14.2222Z'
              fill='currentColor'
            />
          </svg>
        </>
      );
    }

    return (
      <>
        <svg
          className={cn(styles.icon)}
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M7.27273 2.18182V0H8.72727V2.18182H7.27273ZM7.27273 16V13.8182H8.72727V16H7.27273ZM13.8182 8.72727V7.27273H16V8.72727H13.8182ZM0 8.72727V7.27273H2.18182V8.72727H0ZM12.8727 4.14545L11.8545 3.12727L13.1273 1.81818L14.1818 2.87273L12.8727 4.14545ZM2.87273 14.1818L1.81818 13.1273L3.12727 11.8545L4.14545 12.8727L2.87273 14.1818ZM13.1273 14.1818L11.8545 12.8727L12.8727 11.8545L14.1818 13.1273L13.1273 14.1818ZM3.12727 4.14545L1.81818 2.87273L2.87273 1.81818L4.14545 3.12727L3.12727 4.14545ZM8 12.3636C6.78788 12.3636 5.75758 11.9394 4.90909 11.0909C4.06061 10.2424 3.63636 9.21212 3.63636 8C3.63636 6.78788 4.06061 5.75758 4.90909 4.90909C5.75758 4.06061 6.78788 3.63636 8 3.63636C9.21212 3.63636 10.2424 4.06061 11.0909 4.90909C11.9394 5.75758 12.3636 6.78788 12.3636 8C12.3636 9.21212 11.9394 10.2424 11.0909 11.0909C10.2424 11.9394 9.21212 12.3636 8 12.3636ZM8 10.9091C8.81212 10.9091 9.5 10.6273 10.0636 10.0636C10.6273 9.5 10.9091 8.81212 10.9091 8C10.9091 7.18788 10.6273 6.5 10.0636 5.93636C9.5 5.37273 8.81212 5.09091 8 5.09091C7.18788 5.09091 6.5 5.37273 5.93636 5.93636C5.37273 6.5 5.09091 7.18788 5.09091 8C5.09091 8.81212 5.37273 9.5 5.93636 10.0636C6.5 10.6273 7.18788 10.9091 8 10.9091Z'
            fill='currentColor'
          />
        </svg>
      </>
    );
  };

  const ButtonItself: VariableFC<
    typeof ThemeSwitcher,
    {} & Pick<ComponentProps<'button'>, 'onClick'>
  > = ({ className: btnClassname, ...btnProps }) => {
    return (
      <button
        className={cn(
          'select-none cursor-pointer',
          styles.themeSwitcher,
          btnClassname
        )}
        {...btnProps}
      >
        <Icon />
      </button>
    );
  };

  if (typeof window === 'undefined') {
    return <ButtonItself {...props} />;
  }

  useEffect(() => {
    setIsDark(
      window !== undefined &&
        window?.matchMedia &&
        window?.matchMedia('(prefers-color-scheme: dark)').matches
    );

    const callback = (event: MediaQueryListEvent) => {
      const newColorScheme = event.matches ? 'dark' : 'light';

      if (newColorScheme === 'dark') {
        setIsDark(true);
        return;
      }

      setIsDark(false);
    };

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', callback);

    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', callback);
    };
  }, []);

  useEffect(() => {
    const classToAdd = AppConstants.themeNames.dark;

    if (isDark && !document.body.classList.contains(classToAdd)) {
      document.body.classList.add(classToAdd);
    } else if (document.body.classList.contains(classToAdd)) {
      document.body.classList.remove(classToAdd);
    }
  }, [isDark]);

  return (
    <>
      <ButtonItself
        onClick={() => {
          toggleIsDark();
        }}
        {...props}
      />
    </>
  );
};

export default ThemeSwitcher;
