import { createTheme } from '@mui/material/styles';
import createButton from './components/Button';
import typography from './typography';
import './fonts.css';
import palette from './palette'; // Import the palette

// Extend the theme with the typography settings
export const csTheme = createTheme({
    palette,
    typography,
    components: {
        MuiButton: createButton(createTheme({ palette }).palette),
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    margin: 0,
                    padding: 0,
                    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                },
            },
        },
    },
});

export const defaultTheme = createTheme({});
