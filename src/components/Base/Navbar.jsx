import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';

function Navbar() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Box externe pour gérer la fixation et la pleine largeur
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', position: 'fixed', top: 0, left: 0, zIndex: 1100 }}>
      {/* AppBar qui agit comme un conteneur pour le contenu centré */}
      <AppBar sx={{ position: 'sticky', top: 0, zIndex: 1100, backgroundColor: 'transparent', maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
        {/* Box interne pour limiter la largeur du contenu de la barre */}
        <Box sx={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
          <Toolbar sx={{ width: '100%', justifyContent: 'center', padding: shrink ? '10px 0' : '20px 0', minHeight: shrink ? '56px' : '64px' }}>
            <img src="/logo_text.png" alt="Logo" style={{ maxWidth: shrink ? '150px' : '250px', height: 'auto' }} />
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
}

export default Navbar;
