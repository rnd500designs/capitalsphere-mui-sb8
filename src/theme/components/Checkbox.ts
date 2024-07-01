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
        border: "1px solid",
      },
    }),
  },
};
