import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import LegalPage from './pages/LegalPage';
import ConfidentialityPage from './pages/ConfidentialityPage';
import NotFoundPage from './pages/NotFoundPage';
import LandingPage from './pages/LandingPage';

function AppRouter() {
  return (
    <BrowserRouter>
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
