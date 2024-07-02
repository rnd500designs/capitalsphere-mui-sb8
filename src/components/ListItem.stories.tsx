import type { Meta, StoryObj } from "@storybook/react";
import { List as MuiList } from "@mui/material";

import ListItem from "./ListItem";

const meta = {
  title: 'Example/ListItem',
  component: ListItem,
  tags: ['autodocs'],
  argTypes: {
    textPrimary: {
      control: "text",
      description: "The primary text of the component.",
    },
    textSecondary: {
      control: "text",
      description: "The secondary text of the component.",
    },
    avatarSrc: {
      control: "text",
      description: "The src attribute for the img element."
    },
    avatarChildren: {
      description: "Used to render icon or text elements inside the Avatar if src is not set. This can be an element, or just a string."
    },
    withPrimaryAction: {
      control: 'boolean',
      description: 'If true, it will display the primary action type.'
    },
    primaryActionType: {
      control: "select",
      options: ["avatar", "icon", "squareImage", "landscapeImage", "checkbox", "radio"],
      description: "Type of primary action to render for the component."
    },
    withSecondaryAction: {
      control: 'boolean',
      description: 'If true, it will display the secondary action type.'
    },
    secondaryActionType: {
      control: "select",
      options: ["checkbox", "arrow"],
      description: "Type of secondary action to render for the component."
    }
  }
} satisfies Meta<typeof ListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Default list item story.
 */
export const Default: Story = {
  args: {
    textPrimary: 'List item',
    textSecondary: 'Supporting line text lorem ipsum dolor sit amet, consectetur.',
    avatarChildren: 'AB',
    avatarSrc: '',
    withPrimaryAction: true,
    primaryActionType: 'avatar',
    withSecondaryAction: true,
    secondaryActionType: 'checkbox',
  },
  render: (args) => {
    return (
      <MuiList>
        <ListItem {...args} />
      </MuiList>
    )
  }
};

/**
 * List item with icon story.
 */
export const WithIcon: Story = {
  args: {
    textPrimary: 'List item',
    textSecondary: 'Supporting line text lorem ipsum dolor sit amet, consectetur.',
    withPrimaryAction: true,
    primaryActionType: 'icon',
    withSecondaryAction: true,
    secondaryActionType: 'checkbox',
  },
  render: (args) => {
    return (
      <MuiList>
        <ListItem {...args} />
      </MuiList>
    )
  }
};

/**
 * List item with image story.
 */
export const WithImage: Story = {
  args: {
    textPrimary: 'List item',
    textSecondary: 'Supporting line text lorem ipsum dolor sit amet, consectetur.',
    withPrimaryAction: true,
    primaryActionType: 'squareImage',
    withSecondaryAction: true,
    secondaryActionType: 'checkbox',
  },
  render: (args) => {
    return (
      <MuiList>
        <ListItem {...args} />
      </MuiList>
    )
  }
};

/**
 * List item with a radio as primary and arrow as secondary action story.
 */
export const WithRadio: Story = {
  args: {
    textPrimary: 'List item',
    textSecondary: 'Supporting line text lorem ipsum dolor sit amet, consectetur.',
    withPrimaryAction: true,
    primaryActionType: 'radio',
    withSecondaryAction: true,
    secondaryActionType: 'arrow',
  },
  render: (args) => {
    return (
      <MuiList>
        <ListItem {...args} />
      </MuiList>
    )
  }
};