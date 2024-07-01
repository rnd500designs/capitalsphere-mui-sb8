import { Components, Theme } from "@mui/material/styles";

export const avatarStyles: Components<Theme>["MuiAvatar"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.grey[50],
      color: theme.palette.primary.main,
      fontSize: "16px",
    }),
  },
};
