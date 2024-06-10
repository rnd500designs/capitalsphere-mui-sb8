import React from "react";
import { AppBar, Toolbar, Typography, Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: 2 }} component="nav">
      <Toolbar
        sx={{ zIndex: 2, display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="h6">Kitchen Sink</Typography>
        <ButtonGroup variant="contained" aria-label="Basic button group" disableElevation>
          <Button component={Link} to="/">
            Home
          </Button>
          <Button component={Link} to="/button">
            Button
          </Button>
          <Button component={Link} to="/side-nav">
            Side Nav
          </Button>
          <Button component={Link} to="/cards">
            Cards
          </Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
