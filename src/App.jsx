import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import Home from './view/Home';
import Contact from './view/Contact';
import A from './view/A';
import About from './view/About';
import Main from './view/Main';
import JobExp from './view/JobExp';
import Project from './view/Project';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route
          path="/home"
          element={
            <>
              <A />
              <Home />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <A />
              <About />
            </>
          }
        />
        <Route
          path="/jobexp"
          element={
            <>
              <A />
              <JobExp />
            </>
          }
        />
        <Route
          path="/project"
          element={
            <>
              <A />
              <Project />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <A />
              <Contact />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;