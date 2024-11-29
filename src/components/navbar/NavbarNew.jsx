// Navbar.js

import "./Navbar.css";
import React, { useState } from "react";
import NavbarLogo from "./NavbarLogo.jsx";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import webLogo from "/Assets/Images/websitelogo.png";

const Navbar = ({ isLoggedIn }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "black" }}>
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          <NavbarLogo webLogo={webLogo} />
        </Typography>
        {/* Desktop navigation */}
        {!isMobile && (
          <div>
            {isLoggedIn ? (
              <>
                <Button color="inherit" component={NavLink} to="/profile">
                  Profile
                </Button>
                <Button color="inherit" component={NavLink} to="/logout">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" component={NavLink} to="/login">
                  Login
                </Button>
                <Button color="inherit" component={NavLink} to="/register">
                  Register
                </Button>
              </>
            )}
          </div>
        )}
        {/* Mobile navigation */}
        {isMobile && (
          <div>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {isLoggedIn
                ? [
                    <MenuItem
                      component={Link}
                      to="/profile"
                      onClick={handleMenuClose}
                      key="profile"
                    >
                      Profile
                    </MenuItem>,
                    <MenuItem
                      component={Link}
                      to="/logout"
                      onClick={handleMenuClose}
                      key="logout"
                    >
                      Logout
                    </MenuItem>,
                  ]
                : [
                    <MenuItem
                      component={Link}
                      to="/login"
                      onClick={handleMenuClose}
                      key="login"
                    >
                      Login
                    </MenuItem>,
                    <MenuItem
                      component={Link}
                      to="/register"
                      onClick={handleMenuClose}
                      key="register"
                    >
                      Register
                    </MenuItem>,
                  ]}
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
