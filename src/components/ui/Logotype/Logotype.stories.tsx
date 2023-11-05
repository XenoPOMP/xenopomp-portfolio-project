import type { Meta, StoryObj } from '@storybook/react';

import Logotype from './Logotype';

const meta = {
  title: 'Links/Logotype',
  component: Logotype,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Logotype>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
