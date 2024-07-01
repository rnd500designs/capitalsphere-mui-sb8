import { Components, Theme } from "@mui/material/styles";

export const listItemIconStyles: Components<Theme>["MuiListItemIcon"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.grey[900],
      "& .squareImg": {
        width: "56px",
        height: "56px",
        position: "relative",
        overflow: "hidden",
        borderRadius: "8px",
        marginRight: "24px",
      },
      "& img": {
        marginRight: "24px",
        maxHeight: "64px",
        borderRadius: "8px",
      },
      "& img.squareImage": {
        position: "absolute",
        top: "-5px",
        left: "50%",
        transform: "translateX(-50%)",
      },
    }),
  },
};
