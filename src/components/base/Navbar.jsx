import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import { Link } from 'react-router-dom';

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
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1100,
      }}
    >
      <AppBar
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1100,
          backgroundColor: 'transparent',
          // maxWidth: '1440px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <Box sx={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
          <Toolbar
            sx={{
              width: '100%',
              justifyContent: 'center',
              padding: shrink ? '10px 0' : '20px 0',
              minHeight: shrink ? '56px' : '64px',
            }}
          >
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
              }}
            >
              <img
                src="/logo_text.webp"
                alt="Logo"
                style={{ maxWidth: shrink ? '150px' : '250px', height: 'auto' }}
              />
            </Link>
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
}

export default Navbar;
