import React from 'react'
import { AppBar, Toolbar, Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

function A() {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: 'black', boxShadow: 3 }}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: 'white' }}>
            Kasidit Somphot
          </Typography>

          <Typography 
            variant="h6" 
            component={Link} 
            to="/" 
            sx={{ 
              mr: 3, 
              fontWeight: 300, 
              color: 'white', 
              textDecoration: 'none', 
              '&:hover': { color: '#ff6f00', textDecoration: 'underline' } 
            }}
          >
            Home
          </Typography>

          <Typography 
            variant="h6" 
            component={Link} 
            to="/about" 
            sx={{ 
              mr: 3, 
              fontWeight: 300, 
              color: 'white', 
              textDecoration: 'none', 
              '&:hover': { color: '#ff6f00', textDecoration: 'underline' } 
            }}
          >
            AboutMe
          </Typography>

          <Typography 
            variant="h6" 
            component={Link} 
            to="/contact" 
            sx={{ 
              fontWeight: 300, 
              color: 'white', 
              textDecoration: 'none', 
              '&:hover': { color: '#ff6f00', textDecoration: 'underline' } 
            }}
          >
            Contact
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default A;
