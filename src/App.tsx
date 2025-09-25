import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;