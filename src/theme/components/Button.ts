import { Components, Theme } from "@mui/material/styles";

export const buttonStyles: Components<Theme>["MuiButton"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: "8px",
      textTransform: "none",
      padding: "8px 16px",
    }),
    contained: ({ theme }) => ({
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
      // boxShadow: 'none',
    }),
    outlined: ({ theme }) => ({
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      "&:hover": {
        borderColor: theme.palette.primary.dark,
        backgroundColor: theme.palette.action.hover,
      },
    }),
    text: ({ theme }) => ({
      color: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
      },
    }),
  },
};
