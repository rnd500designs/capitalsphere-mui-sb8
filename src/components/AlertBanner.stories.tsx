import type { Meta, StoryObj } from '@storybook/react';

import AlertBanner from './AlertBanner';
import { Box as MuiBox, Button as MuiButton } from '@mui/material';
import { SyntheticEvent, useState } from 'react';

const meta = {
  title: "Example/Alert Banner",
  component: AlertBanner,
  tags: ["autodocs"],
  argTypes: {
    body: {
      control: "text",
      description: "The content of the component."
    },
    severity: {
      control: "select",
      options: ["error", "info", "success", "warning"],
      description: "The severity of the alert. This defines the color and icon used."
    },
    title: {
      control: "text",
      description: "The title of the component."
    },
    open: {
      control: "boolean",
      description: "If true, the component is shown."
    }
  },
} satisfies Meta<typeof AlertBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    severity: 'info',
    title: "Heading",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    open: true,
    anchorOrigin: { vertical: "bottom", horizontal: "left" }
  },
  render: (args) => {
    return (
      <MuiBox minHeight="100px">
        <AlertBanner {...args} />
      </MuiBox>)
  }
};

export const SnackbarInactive: Story = {
  args: {
    severity: 'info',
    title: "Heading",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    open: false,
    anchorOrigin: { vertical: "bottom", horizontal: "left" }
  },
  render: (args) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(true);
    };

    const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
      if (reason === "clickaway") {
        return;
      }
      setOpen(false);
    };

    return (
      <MuiBox minHeight="200px">
        <MuiButton variant="contained" onClick={handleClick}>Open Snackbar</MuiButton>
        <AlertBanner {...args} open={open} onClose={handleClose} />
      </MuiBox>)
  }
};