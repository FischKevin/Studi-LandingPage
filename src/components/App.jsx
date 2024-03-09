import React from 'react';
import ReactGA from 'react-ga4';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LegalPage from './pages/LegalPage';
import ConfidentialityPage from './pages/ConfidentialityPage';
import NotFoundPage from './pages/NotFoundPage';
import LandingPage from './pages/LandingPage';
import UsePageViews from './usePageViews';

const TRACKING_ID = 'UA-XXXXXXXXX-X';
ReactGA.initialize(TRACKING_ID);

function AppRouter() {
  return (
    <BrowserRouter>
      <UsePageViews /> {/* Utilisez le composant ici pour le suivi */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="/confidentiality" element={<ConfidentialityPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
