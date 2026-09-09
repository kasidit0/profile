import React from 'react';
import { Box } from '@mui/material';
import Home from './Home';
import About from './About';
import JobExp from './JobExp';
import Contact from './Contact';
import Project from './Project';
import A from './A';

function Main() {
  return (
    <Box sx={{ backgroundColor: '#fafafa', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      <A />
      <Box id="home" sx={{ scrollMarginTop: '70px' }}>
        <Home />
      </Box>
      <Box id="about" sx={{ scrollMarginTop: '70px' }}>
        <About />
      </Box>
      <Box id="jobexp" sx={{ scrollMarginTop: '70px' }}>
        <JobExp />
      </Box>
      <Box id="project" sx={{ scrollMarginTop: '70px' }}>
        <Project />
      </Box>
      <Box id="contact" sx={{ scrollMarginTop: '70px' }}>
        <Contact />
      </Box>
    </Box>
  );
}

export default Main;
