import React from 'react';
import ReactGA from 'react-ga4';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LegalPage from './pages/LegalPage';
import ConfidentialityPage from './pages/ConfidentialityPage';
import NotFoundPage from './pages/NotFoundPage';
import LandingPage from './pages/LandingPage';
import UsePageViews from './usePageViews';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

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

const TRACKING_ID = 'UA-XXXXXXXXX-X';
ReactGA.initialize(TRACKING_ID);

function AppRouter() {
  return (
    <ThemeProvider theme={theme}> {/* Enveloppez votre application dans ThemeProvider */}
      <CssBaseline /> {/* Assurez-vous que le CssBaseline est inclus pour normaliser les styles */}
      <BrowserRouter>
        <UsePageViews /> {/* Utilisez le composant ici pour le suivi */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/confidentiality" element={<ConfidentialityPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}


export default AppRouter;
