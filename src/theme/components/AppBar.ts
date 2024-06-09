import { Components, Theme } from '@mui/material/styles';

export const appBarStyles: Components<Theme>['MuiAppBar'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      '& .MuiButton-root': {
        color: theme.palette.primary.contrastText,
      },      
    }),
  },
};
