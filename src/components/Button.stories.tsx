import type { Meta, StoryObj } from '@storybook/react';
import { Button as MuiButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const icons = {
  None: null,
  Add: <AddIcon />,
  CloseIcon: <CloseIcon />,
  // Edit: <EditIcon />,
  // Delete: <DeleteIcon />,
};

type IconKey = keyof typeof icons;

const meta: Meta<typeof MuiButton> = {
  title: 'Example/Button',
  component: MuiButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['text', 'outlined', 'contained'],
      description: 'The variant to use.',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
      description: 'The color of the component.',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'The size of the component.',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the component is disabled.',
    },
    startIcon: {
      control: 'select',
      options: Object.keys(icons),
      description: 'Element placed before the children.',
    },
    endIcon: {
      control: 'select',
      options: Object.keys(icons),
      description: 'Element placed after the children.',
    },
    children: {
      control: 'text',
      description: 'The content of the button.',
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
    startIcon: 'None' as IconKey,
    endIcon: 'None' as IconKey,
    children: 'Button',
  },
  render: (args) => {
    const startIcon = icons[args.startIcon as IconKey];
    const endIcon = icons[args.endIcon as IconKey];
    return <MuiButton {...args} startIcon={startIcon} endIcon={endIcon} />;
  },
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
    startIcon: 'None' as IconKey,
    endIcon: 'None' as IconKey,
    children: 'Button',
  },
  parameters: {
    pseudo: { hover: false, focus: true, active: false },
  },
  render: (args) => {
    const startIcon = icons[args.startIcon as IconKey];
    const endIcon = icons[args.endIcon as IconKey];
    return <MuiButton {...args} startIcon={startIcon} endIcon={endIcon} />;
  },
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
    startIcon: 'None' as IconKey,
    endIcon: 'None' as IconKey,
    children: 'Button',
  },
  parameters: {
    pseudo: { hover: false, focus: false, active: true },
  },
  render: (args) => {
    const startIcon = icons[args.startIcon as IconKey];
    const endIcon = icons[args.endIcon as IconKey];
    return <MuiButton {...args} startIcon={startIcon} endIcon={endIcon} />;
  },
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
    startIcon: 'None' as IconKey,
    endIcon: 'None' as IconKey,
    children: 'Button',
  },
  render: (args) => {
    const startIcon = icons[args.startIcon as IconKey];
    const endIcon = icons[args.endIcon as IconKey];
    return <MuiButton {...args} startIcon={startIcon} endIcon={endIcon} />;
  },
};
