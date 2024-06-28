import { Components, Theme } from "@mui/material/styles";

export const radioStyles: Components<Theme>["MuiRadio"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      "&:focus": {
        backgroundColor: theme.palette.action.hover,
        border: `1px solid`,
      },
      "&:active": {
        backgroundColor: theme.palette.action.focus,
      },
    }),
  },
};
