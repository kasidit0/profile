import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CssBaseline } from '@mui/material'

import Home from './view/Home'
import Contact from './view/Contact'
import A from './view/A'
import About from './view/About'
import Play from './view/Play'


function App() {
  return (
    
    <BrowserRouter>
      <CssBaseline />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/a" element={<A />} />
        <Route path="/about" element={<About />} />
        <Route path="/play" element={<Play />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App