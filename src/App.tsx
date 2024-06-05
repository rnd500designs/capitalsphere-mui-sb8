import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ButtonPage from './pages/ButtonPage';
import SideNavPage from './pages/SideNavPage';
import CardsPage from './pages/CardsPage';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import { Box } from '@mui/material';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar/>
      <Box padding={10} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/button" element={<ButtonPage />} />
        <Route path="/side-nav" element={<SideNavPage />} />
        <Route path="/cards" element={<CardsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
