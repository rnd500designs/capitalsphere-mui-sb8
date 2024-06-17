import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

/**
 * ButtonFullProps extends all native MUI Button properties and includes a label.
 * @property {string} label - The text to display inside the button.
 */
export interface ButtonFullProps extends MuiButtonProps {
  label: string;
}

/**
 * ButtonFull component that renders a Material-UI Button with the given label and other properties.
 * @param {ButtonFullProps} props - The properties of the button.
 * @returns {JSX.Element} The rendered button component.
 */
export const ButtonFull = ({ label, ...rest }: ButtonFullProps): JSX.Element => (
  <MuiButton {...rest}>{label}</MuiButton>
);
