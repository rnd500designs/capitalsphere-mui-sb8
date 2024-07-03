import {
  Alert as MuiAlert,
  AlertTitle as MuiAlertTitle,
  IconButton as MuiIconButton,
  Snackbar as MuiSnackbar,
  SnackbarProps as MuiSnackbarProps,
} from "@mui/material";
import {
  CancelOutlined as MuiErrorIcon,
  Check as MuiCheckIcon,
  Close as MuiCloseIcon,
  InfoOutlined as MuiInfoIcon,
  WarningAmberOutlined as MuiWarningIcon,
} from "@mui/icons-material"

type Severity = "error" | "warning" | "info" | "success";

interface AlertBannerProps extends Pick<MuiSnackbarProps, "anchorOrigin"> {
  severity: Severity;
  title: string;
  body: string;
  open: boolean;
  onClose?: () => void;
}

const AlertBanner = ({ severity, title, body, open, onClose, anchorOrigin }: AlertBannerProps) => {
  let icon = null;

  switch (severity) {
    case "error":
      icon = <MuiErrorIcon fontSize="inherit" />;
      break;
    case "warning":
      icon = <MuiWarningIcon fontSize="inherit" />;
      break;
    case "info":
      icon = <MuiInfoIcon fontSize="inherit" />;
      break;
    case "success":
      icon = <MuiCheckIcon fontSize="inherit" />;
      break;
    default:
      break;
  }

  return (
    <MuiSnackbar
      open={open}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
    >
      <MuiAlert
        icon={icon}
        severity={severity}
        variant="outlined"
        action={
          <MuiIconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={onClose}
          >
            <MuiCloseIcon fontSize="inherit" />
          </MuiIconButton>
        }
      >
        <MuiAlertTitle>{title}</MuiAlertTitle>
        {body}
      </MuiAlert>
    </MuiSnackbar>
  )
}

export default AlertBanner;