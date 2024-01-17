'use client';

import { Menu, Transition } from '@headlessui/react';
import cn from 'classnames';
import Link from 'next/link';
import { FC, Fragment } from 'react';

import { appNavbarLinks } from '@/src/components/ui/Navbar/Navbar';
import ThemeSwitcher from '@/src/components/ui/ThemeSwitcher/ThemeSwitcher';

import styles from './MobileMenu.module.scss';
import type { MobileMenuProps } from './MobileMenu.props';

const MobileMenu: FC<MobileMenuProps> = ({ className, ...props }) => {
  return (
    <article className={cn(styles.mobileMenu, className)} {...props}>
      <Menu as={'nav'} className={cn('relative inline-block')}>
        <Menu.Button className={cn(styles.expandButton)}>
          <svg
            viewBox='0 0 24 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0 16V13.3333H24V16H0ZM0 9.33333V6.66667H24V9.33333H0ZM0 2.66667V0H24V2.66667H0Z'
              fill='currentColor'
            />
          </svg>
        </Menu.Button>

        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items
            as={'ul'}
            className={cn(
              'absolute w-screen flex flex-col items-end gap-[.5em] right-0 mt-[1em] py-[1em] px-[2em] bg-project-preview-primary'
            )}
            style={{
              maxWidth: 'calc(100vw - var(--margin) * 2)',
              borderRadius: '.5em',
            }}
          >
            {appNavbarLinks.map((link, index) => {
              const { text, href } = link;

              return (
                <Menu.Item as={'li'} key={`menu-item-${index}`}>
                  {({ active }) => {
                    return (
                      <Link
                        href={href}
                        className={cn(
                          active && 'text-nav-highlight transition-all'
                        )}
                      >
                        {text}
                      </Link>
                    );
                  }}
                </Menu.Item>
              );
            })}

            <Menu.Item as={'li'}>
              <ThemeSwitcher />
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </article>
  );
};

export default MobileMenu;
