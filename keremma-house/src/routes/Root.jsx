import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../pages/App.jsx';
import KeHome from '../pages/KeHome.jsx';
import Header from '../components/Header.jsx';

function AppRouter() {
  return (
    <Router>
    <Header></Header>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/map" element={<KeHome />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
