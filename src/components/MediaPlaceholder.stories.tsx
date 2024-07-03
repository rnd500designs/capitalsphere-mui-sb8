import type { Meta, StoryObj } from '@storybook/react';

import MediaPlaceholder from './MediaPlaceholder';

const meta: Meta<typeof MediaPlaceholder> = {
  title: 'Example/Media Placeholder',
  component: MediaPlaceholder,
  tags: ['autodocs'],
  argTypes: {
    component: {
      table: {
        disable: true,
      }
    },
    src: {
      control: "text",
      description: "The src attribute of the img element."
    },
    alt: {
      control: "text",
      description: "Used in combination with src to provide an alt attribute for the rendered img element."
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Default media placeholder story.
 */
export const Default: Story = {
  args: {
    component: "img",
    src: "/assets/placeholder.png",
    alt: "placeholder",
  },
  render: (args) => {
    return (
      <MediaPlaceholder {...args} />
    )
  }
};