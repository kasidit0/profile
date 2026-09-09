import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router-dom';

function A() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: 'Home', path: '/', sectionId: 'home' },
    { label: 'AboutMe', path: '/about', sectionId: 'about' },
    { label: 'Experience', path: '/jobexp', sectionId: 'jobexp' },
    { label: 'Project', path: '/project', sectionId: 'project' },
    { label: 'Contact', path: '/contact', sectionId: 'contact' },
  ];

  const handleNavClick = (item) => {
    setMobileOpen(false);
    const element = document.getElementById(item.sectionId);
    if (element && (location.pathname === '/' || location.pathname === '/main')) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(item.path);
    }
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', backgroundColor: '#fafafa', height: '100%', pt: 2 }}
    >
      <Typography variant="h6" sx={{ my: 2, fontWeight: 500 }}>
        Kasidit Somphot
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              onClick={() => handleNavClick(item)}
              sx={{ textAlign: 'center', py: 1.5 }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontWeight: 500, fontSize: '1.05rem' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.92)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
          zIndex: 1100,
        }}
      >
        <Toolbar sx={{ maxWidth: '1200px', width: '100%', mx: 'auto', px: { xs: 2, md: 3 } }}>
          <Typography
            variant="h4"
            component="div"
            onClick={() => handleNavClick(navItems[0])}
            sx={{
              flexGrow: 1,
              color: 'white',
              cursor: 'pointer',
              fontWeight: 500,
              fontSize: { xs: '1.4rem', sm: '1.75rem', md: '2rem' },
            }}
          >
            Kasidit Somphot
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Typography
                key={item.label}
                variant="h6"
                onClick={() => handleNavClick(item)}
                sx={{
                  ml: 3.5,
                  fontWeight: 400,
                  fontSize: '1.05rem',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease',
                  '&:hover': { color: '#ff9800' },
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
            keepMounted: true, // Better performance on mobile
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default A;
