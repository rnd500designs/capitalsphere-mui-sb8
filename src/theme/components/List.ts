import { Components, Theme } from "@mui/material/styles";

export const listStyles: Components<Theme>["MuiList"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      //add list custom style here
      gap: "24px",
    }),
  },
};
