import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import AddIcon from '@mui/icons-material/Add';

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
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
    startIcon: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const getButtonProps = (args: ButtonProps) => ({
  ...args,
  startIcon: args.startIcon ? <AddIcon /> : undefined,
});

/**
 * Default button story.
 */
export const Default: Story = {
  args: {
    label: 'Button',
    variant: 'contained',
    size: 'medium',
    color: 'primary',
    startIcon: false,
    disabled: false,
  },
  render: (args) => <Button {...getButtonProps(args)} />,
};

/**
 * Focused button story.
 */
export const Focused: Story = {
  args: {
    label: 'Button',
    variant: 'contained',
    size: 'medium',
    color: 'primary',
    startIcon: false,
    disabled: false,
  },
  parameters: {
    pseudo: { hover: false, focus: true, active: false },
  },
  render: (args) => <Button {...getButtonProps(args)} />,
};

/**
 * Pressed button story.
 */
export const Pressed: Story = {
  args: {
    label: 'Button',
    variant: 'contained',
    size: 'medium',
    color: 'primary',
    startIcon: false,
    disabled: false,
  },
  parameters: {
    pseudo: { hover: false, focus: false, active: true },
  },
  render: (args) => <Button {...getButtonProps(args)} />,
};

/**
 * Disabled button story.
 */
export const Disabled: Story = {
  args: {
    label: 'Button',
    variant: 'contained',
    size: 'medium',
    color: 'primary',
    startIcon: false,
    disabled: true,
  },
  render: (args) => <Button {...getButtonProps(args)} />,
};
