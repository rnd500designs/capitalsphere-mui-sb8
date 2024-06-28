import type { Meta, StoryObj } from '@storybook/react';
import { Box as MuiBox, Divider as MuiDivider, Typography as MuiTypography } from '@mui/material';

const meta: Meta<typeof MuiDivider> = {
  title: 'Example/Divider',
  component: MuiDivider,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['fullWidth', 'inset', 'middle'],
      description: 'The variant to use.',
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'The component orientation.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Default divider story.
 */
export const Default: Story = {
  args: {
    variant: 'fullWidth',
    orientation: 'horizontal',
  },
  render: (args) => <MuiDivider {...args} />
};

/**
 * Vertical divider story.
 */
export const Vertical: Story = {
  args: {
    variant: 'fullWidth',
    orientation: 'vertical',
  },
  render: (args) => {
    return (
      <MuiBox
        sx={{
          height: '100px',
          display: 'flex',
        }}
      >
        <MuiDivider {...args} />
      </MuiBox>
    )
  }
};

/**  
 * Divider with subheader story.  
 */
export const Subheader: Story = {
  args: {
    variant: 'inset',
    orientation: 'horizontal',
  },
  render: (args) => {
    let subheaderStyle = {};

    if (args.variant === 'inset') {
      subheaderStyle = {
        marginLeft: '72px',
      };
    } else if (args.variant === 'middle') {
      subheaderStyle = {
        display: 'flex',
        justifyContent: 'center',
      };
    }

    return (
      <MuiBox>
        <MuiDivider {...args} />
        <MuiTypography variant="body2" sx={{ ...subheaderStyle }}>
          Subheader
        </MuiTypography>
      </MuiBox>
    );
  },
};