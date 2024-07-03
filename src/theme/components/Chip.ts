import { Components, Theme } from "@mui/material/styles";

export const chipStyles: Components<Theme>["MuiChip"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      "&.status-pill": {
        fontSize: "11px",
        textTransform: "uppercase",
        borderRadius: "24px",
      },
      "&.status-approved": {
        color: theme.palette.success.main,
      },
      "&.status-pending": {
        color: theme.palette.text.primary,
      },
      "&.status-declined": {
        color: theme.palette.error.main,
      },
      "&.status-new": {
        color: theme.palette.primary.main,
      },
    }),
  },
};
