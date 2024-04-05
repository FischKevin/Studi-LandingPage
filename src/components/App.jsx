import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LegalPage from './pages/LegalPage';
import CookiePage from './pages/CookiePage';
import NotFoundPage from './pages/NotFoundPage';
import LandingPage from './pages/LandingPage';
import ConfidentialityPage from './pages/ConfidentialityPage';
import CreditsPage from './pages/CreditsPage';
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

function AppRouter() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <UsePageViews />
        <Box sx={{ maxWidth: 1440, mx: 'auto', width: '100%' }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="/confidentiality" element={<ConfidentialityPage />} />
            <Route path="/cookie" element={<CookiePage />} />
            <Route path="/credits" element={<CreditsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default AppRouter;
