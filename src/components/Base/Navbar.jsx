import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';

function Navbar() {
  const [shrink, setShrink] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar className='navbar'
      position="fixed"
      sx={{ transition: '0.3s', ...(shrink && { padding: '10px 0' }) }}
    >
      <Toolbar sx={{ marginBottom: '12px', paddingTop: '10px', minHeight: shrink ? '56px' : '64px' }}>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <img
            src="/logo_text.png"
            alt="Logo"
            style={{ maxWidth: shrink ? '150px' : '250px', height: 'auto' }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
