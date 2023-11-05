import type { Meta, StoryObj } from '@storybook/react';

import socialMediaData from '@/src/data/social-media-data';

import MediaLink from './MediaLink';

const meta = {
  title: 'Links/MediaLink',
  component: MediaLink,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MediaLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const GitHub: Story = {
  args: {
    href: '',
    icon: 'github',
    variant: 'default',
  },
};

export const HH: Story = {
  args: {
    href: '',
    icon: 'hh',
    variant: 'default',
  },
};
