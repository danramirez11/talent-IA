import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/demo-software-reclutamiento-pymes" element={<LandingPage />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/*" element={<LandingPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;