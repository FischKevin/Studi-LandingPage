import React from 'react';
import Box from '@mui/material/Box';

function Header() {
  return (
    <Box className="header"
      sx={{
        backgroundImage: 'url(/side-view-happy-woman-winning-videogame.jpg)',
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
      <button className="customButton">
        RESERVE TON BILLET
      </button>
    </Box>
  );
}

export default Header;
