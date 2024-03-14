import React from 'react';
import ReactGA from 'react-ga4';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LegalPage from './pages/LegalPage';
import CookiePage from './pages/CookiePage';
import NotFoundPage from './pages/NotFoundPage';
import LandingPage from './pages/LandingPage';
import ConfidentialityPage from './pages/ConfidentialityPage';
import UsePageViews from './usePageViews';
import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';

const theme = createTheme({
  components: {
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          '&.Mui-expanded': {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          },
        },
      },
    },
  },
});

const TRACKING_ID = 'UA-XXXXXXXXX-X'; // Remplacez cela par votre propre ID de suivi Google Analytics
ReactGA.initialize(TRACKING_ID);

function AppRouter() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <UsePageViews />
        {/* Le Box externe sert à centrer tout le contenu et fixer la largeur maximale. */}
        <Box sx={{ maxWidth: 1440, mx: 'auto', width: '100%' }}>
          {/* Pas besoin d'un Container supplémentaire ici, le Box gère déjà le centrage et la largeur max. */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="/confidentiality" element={<ConfidentialityPage />} />
            <Route path="/cookie" element={<CookiePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default AppRouter;
