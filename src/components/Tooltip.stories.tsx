import type { Meta, StoryObj } from '@storybook/react';
import { styled } from '@mui/material/styles';
import { Box as MuiBox, Tooltip as MuiTooltip, Typography as MuiTypography, TooltipProps as MuiTooltipProps, tooltipClasses } from '@mui/material';

const CustomWidthTooltip = styled(({ className, ...props }: MuiTooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    minWidth: 200,
  },
});

const meta: Meta<typeof MuiTooltip> = {
  title: 'Example/Tooltip',
  component: MuiTooltip,
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top'],
      description: 'Tooltip placement',
    },
    title: {
      control: 'text',
      description: '',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Default tooltip story.
 */
export const Default: Story = {
  args: {
    placement: 'bottom-start',
    title: 'Supporting text',
  },
  render: (args) => {
    return (
      <MuiBox
        sx={{
          display: 'inline-block'
        }}
      >
        <MuiTooltip {...args}>
          <MuiTypography>Some text</MuiTypography>
        </MuiTooltip>
      </MuiBox>
    );
  }
}

/**
 * Custom width tooltip story.
 */
export const CustomWidth: Story = {
  args: {
    placement: 'bottom-start',
    title: 'Supporting text',
  },
  render: (args) => {
    return (
      <MuiBox
        sx={{
          display: 'inline-block'
        }}
      >
        <CustomWidthTooltip {...args}>
          <MuiTypography>Some text</MuiTypography>
        </CustomWidthTooltip>
      </MuiBox>
    );
  }
}