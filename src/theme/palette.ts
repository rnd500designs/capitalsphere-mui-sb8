// src/theme/palette.ts
import { createTheme, PaletteOptions } from '@mui/material/styles';

const palette: PaletteOptions = {
    primary: {
        main: '#0042EC',
        light: '#336DFF',
        dark: '#002B99',
        contrastText: '#FFFFFF',
    },
    secondary: {
        main: '#027A48',
        contrastText: '#FFFFFF',
    },
    error: {
        main: '#842318',
        contrastText: '#FFFFFF',
    },
    success: {
        main: '#027A48',
        light: '#ECFDF3',
        dark: '#0B5B2B',
        contrastText: '#FFFFFF',
    },
    warning: {
        main: '#E4AA15',
        contrastText: '#FFFFFF',
    },
    info: {
        main: '#0074FF',
        contrastText: '#FFFFFF',
    },
    grey: {
        50: '#F2F2F2',
        100: '#E0E0E0',
        200: '#E6E6E6',
        300: '#CCCCCC',
        400: '#B3B3B3',
        500: '#999999',
        600: '#666666',
        700: '#4D4D4D',
        800: '#333333',
        900: '#222222',
    },
    text: {
        primary: '#222222',
        secondary: '#666666',
        disabled: '#999999',
    },
    background: {
        default: '#FFFFFF',
        paper: '#F4F4F4',
    },
    // border: {
    //     default: '#CCCCCC',
    //     secondary: '#E6E6E6',
    //     success: '#027A48',
    //     error: '#842318',
    // },
};

export default palette;
