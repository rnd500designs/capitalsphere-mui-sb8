import type { Meta, StoryObj } from '@storybook/react';
import { useState, SyntheticEvent } from 'react';
import {
  Alert as MuiAlert,
  AlertTitle as MuiAlertTitle,
  Box as MuiBox,
  Button as MuiButton,
  IconButton as MuiIconButton,
  Snackbar as MuiSnackbar,
  SnackbarOrigin as MuiSnackbarOrigin,
} from '@mui/material';
import {
  CancelOutlined as MuiErrorIcon,
  Check as MuiCheckIcon,
  Close as MuiCloseIcon,
  InfoOutlined as MuiInfoIcon,
  WarningAmberOutlined as MuiWarningIcon,
} from '@mui/icons-material'

const meta: Meta<typeof MuiAlert> = {
  title: 'Example/Banner Notification',
  component: MuiAlert,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'The content of the component.'
    },
    severity: {
      control: 'select',
      options: ['error', 'info', 'success', 'warning'],
      description: 'The severity of the alert. This defines the color and icon used.'
    },
    title: {
      control: 'text',
      description: 'The title of the component.'
    }
  },
}

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Default banner notification story.
 */
export const Default: Story = {
  args: {
    severity: 'info',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    title: 'Heading',
  },
  render: (args) => {
    let icon = null;

    switch (args.severity) {
      case 'error':
        icon = <MuiErrorIcon fontSize="inherit" />;
        break;
      case 'warning':
        icon = <MuiWarningIcon fontSize="inherit" />;
        break;
      case 'info':
        icon = <MuiInfoIcon fontSize="inherit" />;
        break;
      case 'success':
        icon = <MuiCheckIcon fontSize="inherit" />;
        break;
      default:
        break;
    }

    const [, setOpen] = useState(false);

    const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }

      setOpen(false);
    };

    return (
      <MuiBox maxWidth="360px">
        <MuiAlert
          icon={icon}
          severity={args.severity}
          variant="outlined"
          action={
            <MuiIconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleClose}
            >
              <MuiCloseIcon fontSize="inherit" />
            </MuiIconButton>
          }
        >
          <MuiAlertTitle>{args.title}</MuiAlertTitle>
          {args.children}
        </MuiAlert>
      </MuiBox>
    )
  }
}

interface SnackbarState extends MuiSnackbarOrigin {
  open: boolean;
}

/**
 * Banner notification with snackbar button story.
 */
export const SnackbarInactive: Story = {
  args: {
    severity: 'error',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    title: 'Heading',
  },
  render: (args) => {
    const [snackbarState, setSnackbarState] = useState<SnackbarState>({
      open: false,
      vertical: 'top',
      horizontal: 'center',
    });
    const { vertical, horizontal, open } = snackbarState;

    const handleClick = (newState: MuiSnackbarOrigin) => () => {
      setSnackbarState({ ...newState, open: true });
    };

    const handleClose = () => {
      setSnackbarState({ ...snackbarState, open: false });
    };

    let icon = null;

    switch (args.severity) {
      case 'error':
        icon = <MuiErrorIcon fontSize="inherit" />;
        break;
      case 'warning':
        icon = <MuiWarningIcon fontSize="inherit" />;
        break;
      case 'info':
        icon = <MuiInfoIcon fontSize="inherit" />;
        break;
      case 'success':
        icon = <MuiCheckIcon fontSize="inherit" />;
        break;
      default:
        break;
    }

    return (
      <MuiBox height="200px">
        <MuiButton onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })} variant='contained'>Open Snackbar</MuiButton>
        <MuiSnackbar
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
          anchorOrigin={{ vertical, horizontal }}
        >
          <MuiBox maxWidth="360px">
            <MuiAlert
              icon={icon}
              severity={args.severity}
              variant="outlined"
              action={
                <MuiIconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={handleClose}
                >
                  <MuiCloseIcon fontSize="inherit" />
                </MuiIconButton>
              }
            >
              <MuiAlertTitle>{args.title}</MuiAlertTitle>
              {args.children}
            </MuiAlert>
          </MuiBox>
        </MuiSnackbar >
      </MuiBox>
    )
  }
}