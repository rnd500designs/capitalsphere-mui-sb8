import { createTheme } from '@mui/material/styles';
import { buttonStyles } from './components/Button';
import palette from './palette';
import { appBarStyles } from './components/AppBar';
import { dividerStyles } from './components/Divider';
import { checkboxStyles } from './components/Checkbox';
import { radioStyles } from './components/Radio';
import { tooltipStyles } from './components/Tooltip';
import { avatarStyles } from './components/Avatar';
import { listStyles } from './components/List';
import { listItemTextStyles } from './components/ListItemText';
import { listItemIconStyles } from './components/ListItemIcon';

export const csTheme = createTheme({
  palette,
  components: {
    MuiCheckbox: checkboxStyles,
    MuiButton: buttonStyles,
    MuiAppBar: appBarStyles,
    MuiDivider: dividerStyles,
    MuiRadio: radioStyles,
    MuiTooltip: tooltipStyles,
    MuiAvatar: avatarStyles,
    MuiList: listStyles,
    MuiListItemText: listItemTextStyles,
    MuiListItemIcon: listItemIconStyles,
    // Add more component customizations here
  },
});


export const defaultTheme = createTheme();