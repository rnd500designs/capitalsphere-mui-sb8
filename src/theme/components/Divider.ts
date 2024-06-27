import { Components, Theme } from "@mui/material/styles";

export const dividerStyles: Components<Theme>["MuiDivider"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderColor: "#999999",
    }),
  },
};
