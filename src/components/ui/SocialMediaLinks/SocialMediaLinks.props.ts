import { ComponentProps } from 'react';

import { MediaLinkProps } from '@/src/components/ui/MediaLink/MediaLink.props';

export interface SocialMediaLinksProps
  extends ComponentProps<'aside'>,
    Pick<MediaLinkProps, 'variant'> {}
