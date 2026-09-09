import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function A() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'AboutMe', path: '/about' },
    { label: 'Experience', path: '/jobexp' },
    { label: 'Project', path: '/project' },
    { label: 'Contact', path: '/contact' }
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: '#fafafa', height: '100%' }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold' }}>
        Kasidit Somphot
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} component={Link} to={item.path} sx={{ color: 'black', textDecoration: 'none' }}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: 'black', boxShadow: 3, zIndex: 1100 }}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: 'white', fontSize: { xs: '1.5rem', md: '2.125rem' } }}>
            Kasidit Somphot
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              <Typography
                key={item.label}
                variant="h6"
                component={Link}
                to={item.path}
                sx={{
                  ml: 3,
                  fontWeight: 300,
                  color: 'white',
                  textDecoration: 'none',
                  '&:hover': { color: '#ff6f00', textDecoration: 'underline' }
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>

          {/* Mobile Hamburger Menu Icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Box component="nav">
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default A;
