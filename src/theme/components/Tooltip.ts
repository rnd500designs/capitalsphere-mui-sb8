import { Components, Theme } from "@mui/material/styles";

export const tooltipStyles: Components<Theme>["MuiTooltip"] = {
  styleOverrides: {
    tooltip: ({ theme }) => ({
      backgroundColor: theme.palette.grey[800],
    }),
  },
};
