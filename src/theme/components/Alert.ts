import { Components, Theme } from "@mui/material/styles";

export const alertStyles: Components<Theme>["MuiAlert"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.text.secondary,
      maxWidth: "360px",
      "& .MuiAlertTitle-root": {
        color: theme.palette.text.primary,
      },
      "& .MuiAlert-action .MuiSvgIcon-root": {
        fill: theme.palette.grey[900],
      },
    }),
    outlinedError: ({ theme }) => ({
      backgroundColor: theme.palette.grey[50],
      border: "1px solid",
    }),
    outlinedInfo: ({ theme }) => ({
      backgroundColor: theme.palette.grey[50],
      border: "1px solid",
      "& .MuiAlert-icon": {
        color: theme.palette.grey[900],
      },
    }),
    outlinedSuccess: ({ theme }) => ({
      backgroundColor: theme.palette.grey[50],
      border: "1px solid",
    }),
    outlinedWarning: ({ theme }) => ({
      backgroundColor: theme.palette.grey[50],
      border: "1px solid",
    }),
  },
};
