import { Components, Theme } from "@mui/material/styles";

export const listItemTextStyles: Components<Theme>["MuiListItemText"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      marginRight: "24px",
    }),
    primary: ({ theme }) => ({
      color: theme.palette.text.primary,
    }),
    secondary: ({ theme }) => ({
      color: theme.palette.text.secondary,
    }),
  },
};
