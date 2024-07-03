import { Components, Theme } from "@mui/material/styles";

export const dividerStyles: Components<Theme>["MuiDivider"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderColor: theme.palette.grey[500],
      marginBottom: "4px",
    }),
  },
};
