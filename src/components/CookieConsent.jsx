import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

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
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        // maxWidth: '1440px',
        width: '100%',
        zIndex: 1,
        bgcolor: 'background.paper',
        p: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        borderTop: '1px solid #ccc',
      }}
    >
      <Typography>
        Nous utilisons des cookies pour améliorer votre expérience. En
        continuant à utiliser ce site, vous acceptez notre{' '}
        <Link
          href="/cookie"
          style={{ color: 'inherit', textDecoration: 'underline' }}
        >
          politique de cookies
        </Link>
        , notre{' '}
        <Link
          href="/legal"
          style={{ color: 'inherit', textDecoration: 'underline' }}
        >
          mentions légales
        </Link>{' '}
        et notre{' '}
        <Link
          href="/confidentiality"
          style={{ color: 'inherit', textDecoration: 'underline' }}
        >
          politique de confidentialité
        </Link>
        .
      </Typography>
      <Button
        className="cookie"
        variant="contained"
        color="primary"
        onClick={handleAccept}
      >
        Accepter
      </Button>
      <Button
        className="cookie"
        variant="outlined"
        color="secondary"
        onClick={handleDecline}
      >
        Refuser
      </Button>
    </Box>
  );
};

export default CookieConsent;
