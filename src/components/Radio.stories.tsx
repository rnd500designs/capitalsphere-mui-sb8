import type { Meta, StoryObj } from '@storybook/react';
import { Radio as MuiRadio } from '@mui/material';

const meta: Meta<typeof MuiRadio> = {
  title: 'Example/Radio',
  component: MuiRadio,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'If true, the component is checked.'
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
      description: 'The color of the component.',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the component is disabled.',
    },
    name: {
      control: 'text',
      description: 'Name attribute of the input element.',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the component.',
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
    checked: true,
    color: 'primary',
    disabled: false,
    name: 'radio',
    size: 'medium',
  },
  render: (args) => <MuiRadio {...args} />,
};

/**
 * Hovered radio story.
 */
export const Hovered: Story = {
  args: {
    checked: true,
    color: 'primary',
    disabled: false,
    name: 'radio',
    size: 'medium',
  },
  parameters: {
    pseudo: { hover: true, focus: false, active: false },
  },
  render: (args) => <MuiRadio {...args} />,
};

/**
 * Focused radio story.
 */
export const Focused: Story = {
  args: {
    checked: true,
    color: 'primary',
    disabled: false,
    name: 'radio',
    size: 'medium',
  },
  parameters: {
    pseudo: { hover: false, focus: true, active: false },
  },
  render: (args) => <MuiRadio {...args} />,
};

/**
 * Pressed radio story.
 */
export const Pressed: Story = {
  args: {
    checked: true,
    color: 'primary',
    disabled: false,
    name: 'radio',
    size: 'medium',
  },
  parameters: {
    pseudo: { hover: false, focus: false, active: true },
  },
  render: (args) => <MuiRadio {...args} />,
};

/**
 * Disabled radio story.
 */
export const Disabled: Story = {
  args: {
    checked: true,
    color: 'primary',
    disabled: true,
    name: 'radio',
    size: 'medium',
  },
  render: (args) => <MuiRadio {...args} />,
};


