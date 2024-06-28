import type { Meta, StoryObj } from '@storybook/react';
import { Chip as MuiStatusPill } from '@mui/material';

const meta: Meta<typeof MuiStatusPill> = {
  title: 'Example/StatusPill',
  component: MuiStatusPill,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
      description: 'The color of the component.',
    },
    label: {
      control: 'text',
      description: 'The label of the component.'
    },
    variant: {
      control: 'radio',
      options: ['text', 'outlined', 'contained'],
      description: 'The variant to use.',
    },

  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Default radio story.
 */
export const Default: Story = {
  args: {
    color: 'primary',
    label: 'New',
    variant: 'filled',
  },
  render: (args) => <MuiStatusPill {...args} />,
};

