import { createTheme } from '@mui/material/styles';
import { buttonStyles } from './components/Button';
import palette from './palette';
import { appBarStyles } from './components/AppBar';
import { radioStyles } from './components/Radio';

export const csTheme = createTheme({
  palette,
  components: {
    MuiButton: buttonStyles,
    MuiAppBar: appBarStyles,
    MuiRadio: radioStyles,
    // Add more component customizations here
  },
});


export const defaultTheme = createTheme();