import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import Image from 'next/image';

import type { AsyncImageProps } from './AsyncImage.props';

/**
 * Provide image with loading blur.
 *
 * @param className
 * @param placeholder
 * @param props
 * @constructor
 */
const AsyncImage: VariableFC<typeof Image, AsyncImageProps, 'children'> = ({
  className,
  placeholder = 'blur',
  ...props
}) => {
  return (
    <Image className={cn(className)} placeholder={placeholder} {...props} />
  );
};

export default AsyncImage;
