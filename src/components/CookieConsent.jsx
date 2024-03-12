import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('user-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('user-consent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('user-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <Box sx={{
      position: 'fixed',
      bottom: 0,
      bgcolor: 'background.paper',
      p: 2,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 2,
      borderTop: '1px solid #ccc',
    }}>
      <Typography>
        Nous utilisons des cookies pour améliorer votre expérience. En continuant à utiliser ce site, vous acceptez notre politique de cookies.
      </Typography>
      <Button className='cookie' variant="contained" color="primary" onClick={handleAccept}>
        Accepter
      </Button>
      <Button className='cookie' variant="outlined" color="secondary" onClick={handleDecline}>
        Refuser
      </Button>
    </Box>
  );
};

export default CookieConsent;
