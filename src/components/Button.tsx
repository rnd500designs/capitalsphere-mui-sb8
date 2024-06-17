import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { ReactNode } from 'react';

// Include variant, size, color, startIcon, and disabled
type ButtonBaseProps = Pick<MuiButtonProps, 'variant' | 'size' | 'color' | 'startIcon' | 'disabled'>;

/**
 * ButtonProps extends the base properties for MUI Button, including label.
 * @property {string} label - The text to display inside the button.
 * @property {'text' | 'outlined' | 'contained'} [variant] - The variant of the button.
 * @property {'small' | 'medium' | 'large'} [size] - The size of the button.
 * @property {'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'} [color] - The color of the button.
 * @property {ReactNode} [startIcon] - The icon to display at the start of the button.
 * @property {boolean} [disabled] - Whether the button is disabled.
 */
export interface ButtonProps extends ButtonBaseProps {
  label: string;
}

/**
 * Button component that renders a Material-UI Button with the given label and other properties.
 * @param {ButtonProps} props - The properties of the button.
 * @returns {JSX.Element} The rendered button component.
 */
export const Button = ({ label, startIcon, ...rest }: ButtonProps): JSX.Element => (
  <MuiButton startIcon={startIcon} {...rest}>{label}</MuiButton>
);
