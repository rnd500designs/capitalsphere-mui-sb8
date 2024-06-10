import React from 'react';
import { Button, Box, Divider, Typography, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Buttons: React.FC = () => {
    const theme = useTheme();
    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h1" gutterBottom>
                Buttons
            </Typography>
            <Divider />
            
            <Typography variant="h6" sx={{margin: '30px 0'}}>
                Contained buttons
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="caption">enabled</Typography>
                    <Button variant="contained">Button 1</Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="caption">hovered</Typography>
                    <Button variant="contained" sx={{ backgroundColor: 'primary.light' }}>Button</Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="caption">focused</Typography>
                    <Button variant="contained" sx={{ backgroundColor: 'primary.main', boxShadow: `inset 0 0 0 2px ${theme.palette.primary.light}` }}>Button</Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="caption">pressed</Typography>
                    <Button variant="contained" sx={{ backgroundColor: 'primary.dark' }}>Button</Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="caption">disabled</Typography>
                    <Button variant="contained" disabled>Button</Button>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Button variant="contained" startIcon={<AddIcon />}>Button 1</Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    <Button variant="contained" startIcon={<AddIcon />}sx={{ backgroundColor: 'primary.light' }}>Button</Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    <Button variant="contained" startIcon={<AddIcon />}sx={{ backgroundColor: 'primary.main', boxShadow: `inset 0 0 0 2px ${theme.palette.primary.light}` }}>Button</Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Button variant="contained" startIcon={<AddIcon />} sx={{ backgroundColor: 'primary.dark' }}>Button</Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Button variant="contained" disabled>Button</Button>
                </Box>
            </Box>
            
            <Typography variant="h6" gutterBottom sx={{margin: '60px 0 15px'}}>
                Outlined buttons
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="caption">enabled</Typography>
                    <Button variant="outlined">Button</Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="caption">hovered</Typography>
                    <Button variant="outlined" sx={{ '&:hover': { borderColor: 'primary.dark' } }}>Button</Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="caption">focused</Typography>
                    <Button variant="outlined" sx={{ '&:focus': { borderColor: 'primary.dark' } }}>Button</Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="caption">pressed</Typography>
                    <Button variant="outlined" sx={{ '&:active': { borderColor: 'primary.dark' } }}>Button</Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="caption">disabled</Typography>
                    <Button variant="outlined" disabled>Button</Button>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Button variant="outlined" startIcon={<AddIcon />}>Button</Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Button variant="outlined" startIcon={<AddIcon />} sx={{ '&:hover': { borderColor: 'primary.dark' } }}>Button</Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Button variant="outlined" startIcon={<AddIcon />} sx={{ '&:focus': { borderColor: 'primary.dark' } }}>Button</Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Button variant="outlined" startIcon={<AddIcon />} sx={{ '&:active': { borderColor: 'primary.dark' } }}>Button</Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Button variant="outlined" startIcon={<AddIcon />} disabled>Button</Button>
                </Box>
            </Box>

            <Typography variant="h6" gutterBottom sx={{margin: '60px 0 15px'}}>
                Text buttons
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="caption">enabled</Typography>
                    <Button variant="text">Button</Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="caption">hovered</Typography>
                    <Button variant="text" sx={{ '&:hover': { color: 'primary.dark' } }}>Button</Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="caption">focused</Typography>
                    <Button variant="text" sx={{ '&:focus': { color: 'primary.dark' } }}>Button</Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="caption">pressed</Typography>
                    <Button variant="text" sx={{ '&:active': { color: 'primary.dark' } }}>Button</Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="caption">disabled</Typography>
                    <Button variant="text" disabled>Button</Button>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Button variant="text" startIcon={<AddIcon />}>Button</Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Button variant="text" startIcon={<AddIcon />} sx={{ '&:hover': { color: 'primary.dark' } }}>Button</Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Button variant="text" startIcon={<AddIcon />} sx={{ '&:focus': { color: 'primary.dark' } }}>Button</Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Button variant="text" startIcon={<AddIcon />} sx={{ '&:active': { color: 'primary.dark' } }}>Button</Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Button variant="text" startIcon={<AddIcon />} disabled>Button</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Buttons;
