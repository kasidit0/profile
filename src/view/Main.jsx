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
    <Box sx={{ backgroundColor: '#fafafa', minHeight: '100vh', width: '100%' }}>
      <A />
      <Home />
      <About />
      <JobExp />
      <Project />
      <Contact />

    </Box>
  );
}

export default Main;
