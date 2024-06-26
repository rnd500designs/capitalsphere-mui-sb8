import { createTheme } from '@mui/material/styles';
import { buttonStyles } from './components/Button';
import palette from './palette';
import { appBarStyles } from './components/AppBar';
import { dividerStyles } from './components/Divider';
import { checkboxStyles } from './components/Checkbox';
import { radioStyles } from './components/Radio';
import { tooltipStyles } from './components/Tooltip';

export const csTheme = createTheme({
  palette,
  components: {
    MuiCheckbox: checkboxStyles,
    MuiButton: buttonStyles,
    MuiAppBar: appBarStyles,
    MuiDivider: dividerStyles,
    MuiRadio: radioStyles,
    MuiTooltip: tooltipStyles,
    // Add more component customizations here
  },
});


export const defaultTheme = createTheme();