import type { Meta, StoryObj } from "@storybook/react";

import StatusPill from "./StatusPill";

const meta: Meta<typeof StatusPill> = {
  title: "Example/Status Pill",
  component: StatusPill,
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "select",
      options: ["pending", "approved", "declined", "new"],
      description: "This defines the text color and label of the component."
    },
    className: {
      table: {
        disable: true,
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;


/**
 * Default status pill story.
 */
export const Default: Story = {
  args: {
    status: "pending",
  },
  render: (args) => <StatusPill {...args} />
};