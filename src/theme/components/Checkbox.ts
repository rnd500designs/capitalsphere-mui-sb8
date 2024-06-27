import { Components, Theme } from "@mui/material/styles";

export const checkboxStyles: Components<Theme>["MuiCheckbox"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
      },
      "&:active": {
        backgroundColor: theme.palette.action.selected,
      },
      "&:focus": {
        backgroundColor: theme.palette.action.focus,
        border: `1px solid ${theme.palette.primary.main}`,
      },
      "&.MuiCheckbox-colorError": {
        "&:hover": {
          backgroundColor: theme.palette.error.light,
        },
        "&:active": {
          backgroundColor: theme.palette.error.main,
        },
        "&:focus": {
          backgroundColor: theme.palette.action.focus,
          border: `1px solid ${theme.palette.error}`,
        },
      },
    }),
  },
};
