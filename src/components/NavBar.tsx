import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: 2 }} component="nav">
      <Toolbar sx={{ zIndex: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">
          My App
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button component={Link} to="/">Home</Button>
          <Button component={Link} to="/button">Button</Button>
          <Button component={Link} to="/side-nav">Side Nav</Button>
          <Button component={Link} to="/cards">Cards</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
