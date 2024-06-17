import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  component: Button,
  title: 'Example/Button',
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
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Button',
    variant: 'contained',
    size: 'medium',
    color: 'primary',
  },
};

export const Text: Story = {
  args: {
    label: 'Text Button',
    variant: 'text',
    size: 'medium',
    color: 'primary',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Outlined Button',
    variant: 'outlined',
    size: 'medium',
    color: 'primary',
  },
};

export const Contained: Story = {
  args: {
    label: 'Contained Button',
    variant: 'contained',
    size: 'medium',
    color: 'primary',
  },
};
