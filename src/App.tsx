import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ButtonPage from './pages/ButtonPage';
import SideNavPage from './pages/SideNavPage';
import CardsPage from './pages/CardsPage';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import { Box, CssBaseline, FormControlLabel, Switch, ThemeProvider } from '@mui/material';
import { defaultTheme, csTheme } from './theme';

const App: React.FC = () => {
  const [useCsTheme, setUseCsTheme] = useState(true);

  const toggleTheme = () => {
    setUseCsTheme(prev => !prev);
  };

  return (
    <ThemeProvider theme={useCsTheme ? csTheme : defaultTheme}>
      <CssBaseline />
      <Router>
        <NavBar />
        <Box padding={10}>
          <FormControlLabel
            control={<Switch checked={useCsTheme} onChange={toggleTheme} />}
            label="Enable Custom Theme"
          />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/button" element={<ButtonPage />} />
            <Route path="/side-nav" element={<SideNavPage />} />
            <Route path="/cards" element={<CardsPage />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
