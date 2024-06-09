import { createTheme } from '@mui/material/styles';
import { buttonStyles } from './components/Button';
import palette from './palette';
import { appBarStyles } from './components/AppBar';

export const csTheme = createTheme({
  palette,
  components: {
    MuiButton: buttonStyles,
    MuiAppBar: appBarStyles,
    // Add more component customizations here
  },
});