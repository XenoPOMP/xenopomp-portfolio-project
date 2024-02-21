import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

import styles from './I18nLink.module.scss';
import { I18nLinkProps } from './I18nLink.props';

const I18nLink: VariableFC<typeof Link, I18nLinkProps, 'href'> = ({
  className,
  ...props
}) => {
  return <div></div>;
};

export default I18nLink;
