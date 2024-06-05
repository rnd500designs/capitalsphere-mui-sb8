import { Components, Palette } from '@mui/material/styles';

const createButton = (palette: Palette): Components['MuiButton'] => ({
  styleOverrides: {
    root: {
      borderRadius: 10,
      textTransform: 'none',
      margin: '8px',
      padding: '8px 16px',
    },
    contained: {
      boxShadow: 'none',
      backgroundColor: palette.primary.main,
      '&:hover': {
        backgroundColor: palette.primary.light,
        boxShadow: 'none',
      },
      '&:focus': {
        backgroundColor: palette.info.main,
        borderColor: palette.primary.main,
        boxShadow: 'none',
      },
      '&:active': {
        backgroundColor: palette.primary.main,
        boxShadow: 'none',
      },
      '&:disabled': {
        backgroundColor: palette.grey[100],
        color: palette.grey[500],
      },
    },
    outlined: {
      borderColor: palette.primary.main,
      color: palette.primary.main,
      '&:hover': {
        borderColor: palette.primary.main,
        backgroundColor: 'rgba(21, 101, 192, 0.04)',
      },
      '&:focus': {
        borderColor: palette.primary.dark,
        backgroundColor: palette.background.paper,
      },
      '&:active': {
        borderColor: palette.primary.dark,
        backgroundColor: palette.primary.light,
      },
      '&:disabled': {
        borderColor: palette.grey[300],
        color: palette.grey[500],
      },
    },
    text: {
      color: palette.primary.main,
      '&:hover': {
        backgroundColor: 'rgba(21, 101, 192, 0.04)',
      },
      '&:focus': {
        color: palette.primary.dark,
      },
      '&:active': {
        color: palette.primary.dark,
      },
      '&:disabled': {
        color: palette.grey[500],
      },
    },
  },
});

export default createButton;
