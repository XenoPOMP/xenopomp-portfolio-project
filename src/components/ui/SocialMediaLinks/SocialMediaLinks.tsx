import cn from 'classnames';
import { FC } from 'react';

import MediaLink from '@/src/components/ui/MediaLink/MediaLink';
import socialMediaData from '@/src/data/social-media-data';

import styles from './SocialMediaLinks.module.scss';
import type { SocialMediaLinksProps } from './SocialMediaLinks.props';

const SocialMediaLinks: FC<SocialMediaLinksProps> = ({
  className,
  variant,
  ...props
}) => {
  return (
    <aside className={cn(styles.socialMediaLinks, className)} {...props}>
      {socialMediaData.map((data, index) => {
        const { href, icon } = data;

        return (
          <MediaLink
            href={href}
            icon={icon}
            variant={variant}
            key={`media-link-${index}`}
          />
        );
      })}
    </aside>
  );
};

export default SocialMediaLinks;
