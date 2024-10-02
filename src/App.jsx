import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import About from './pages/aboutme';
import Navbar from './components/navbar'; // Make sure to adjust the path to Navbar

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar will appear on all pages */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
