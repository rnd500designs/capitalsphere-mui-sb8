import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox as MuiCheckbox } from '@mui/material';

const meta: Meta<typeof MuiCheckbox> = {
  title: 'Example/Checkbox',
  component: MuiCheckbox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'If true, the component is checked.',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
      description: '',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the component is disabled.',
    },
    indeterminate: {
      control: 'boolean',
      description: ''
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'The size of the component. small is equivalent to the dense checkbox styling.'
    },
  },

}

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Default checkbox story.
 */
export const Default: Story = {
  args: {
    checked: true,
    color: 'primary',
    disabled: false,
    indeterminate: false,
    size: 'medium',
  },
  render: (args) => <MuiCheckbox {...args} />
}


/**
 * Hovered checkbox story.
 */
export const Hovered: Story = {
  args: {
    checked: true,
    color: 'primary',
    disabled: false,
    indeterminate: false,
    size: 'medium',
  },
  parameters: {
    pseudo: { hover: true, focus: false, active: false },
  },
  render: (args) => <MuiCheckbox {...args} />
}

/**
 * Focused checkbox story.
 */
export const Focused: Story = {
  args: {
    checked: true,
    color: 'primary',
    disabled: false,
    indeterminate: false,
    size: 'medium',
  },
  parameters: {
    pseudo: { hover: false, focus: true, active: false },
  },
  render: (args) => <MuiCheckbox {...args} />
}

/**
 * Pressed checkbox story.
 */
export const Pressed: Story = {
  args: {
    checked: true,
    color: 'primary',
    disabled: false,
    indeterminate: false,
    size: 'medium',
  },
  parameters: {
    pseudo: { hover: false, focus: false, active: true },
  },
  render: (args) => <MuiCheckbox {...args} />
}

/**
 * Disabled checkbox story.
 */
export const Disabled: Story = {
  args: {
    checked: true,
    color: 'primary',
    disabled: true,
    indeterminate: false,
    size: 'medium',
  },
  render: (args) => <MuiCheckbox {...args} />
}
