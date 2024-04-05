import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Header() {
  return (
    <Box
      className="header"
      sx={{
        backgroundImage: 'url(/side-view-happy-woman-winning-videogame.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        width: '100%',
        height: '550px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        p: 6,
      }}
    >
      <Typography
        variant="h3"
        component="h2"
        sx={{
          mt: 'auto',
          mb: 2,
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)',
          color: '#F9EA32',
          fontWeight: 'bold',
          letterSpacing: '0.1rem',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
        }}
      >
        SAMEDI 29 JUIN 2024
      </Typography>

      <Typography
        variant="h5"
        sx={{
          mb: 6,
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
          color: '#F9EA32',
          fontWeight: 'bold',
        }}
      >
        Sud de France Arena, Pérols, Occitanie
      </Typography>
      <a
        href="https://www.eventbrite.fr/e/billets-press-start-to-fight-cancer-862248497467?aff=oddtdtcreator"
        target="_blank"
        rel="noreferrer"
        className="customButton"
        style={{
          textDecoration: 'none',
          display: 'inline-block',
          textAlign: 'center',
        }}
      >
        RESERVE TON BILLET
      </a>
    </Box>
  );
}

export default Header;
