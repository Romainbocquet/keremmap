// Root.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../pages/App';
import Map from '../pages/Map';

function Root() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/house-map" element={<Map />} />
      </Routes>
    </Router>
  );
}

export default Root;