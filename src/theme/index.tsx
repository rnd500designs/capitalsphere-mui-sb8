import { createTheme } from '@mui/material/styles';
import { buttonStyles } from './components/Button';
import palette from './palette';
import { appBarStyles } from './components/AppBar';
import { dividerStyles } from './components/Divider';

export const csTheme = createTheme({
  palette,
  components: {
    MuiButton: buttonStyles,
    MuiAppBar: appBarStyles,
    MuiDivider: dividerStyles,
    // Add more component customizations here
  },
});


export const defaultTheme = createTheme();