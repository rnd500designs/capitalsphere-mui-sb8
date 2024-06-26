import type { Meta, StoryObj } from '@storybook/react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const meta: Meta<typeof MuiButton> = {
  title: 'Example/Button',
  component: MuiButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['text', 'outlined', 'contained'],
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Default button story.
 */
export const Default: Story = {
  args: {
    variant: 'contained',
    size: 'medium',
    color: 'primary',
    disabled: false,
    children: 'Button',
  },
  render: (args) => <MuiButton {...args} startIcon={args.startIcon ? <AddIcon /> : undefined} />,
};

/**
 * Focused button story.
 */
export const Focused: Story = {
  args: {
    variant: 'contained',
    size: 'medium',
    color: 'primary',
    disabled: false,
    children: 'Button',
  },
  parameters: {
    pseudo: { hover: false, focus: true, active: false },
  },
  render: (args) => <MuiButton {...args} startIcon={args.startIcon ? <AddIcon /> : undefined} />,
};

/**
 * Pressed button story.
 */
export const Pressed: Story = {
  args: {
    variant: 'contained',
    size: 'medium',
    color: 'primary',
    disabled: false,
    children: 'Button',
  },
  parameters: {
    pseudo: { hover: false, focus: false, active: true },
  },
  render: (args) => <MuiButton {...args} startIcon={args.startIcon ? <AddIcon /> : undefined} />,
};

/**
 * Disabled button story.
 */
export const Disabled: Story = {
  args: {
    variant: 'contained',
    size: 'medium',
    color: 'primary',
    disabled: true,
    children: 'Button',
  },
  render: (args) => <MuiButton {...args} startIcon={args.startIcon ? <AddIcon /> : undefined} />,
};
