import { Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';

function Header() {
  return (
    <Box className="header"
      sx={{
        backgroundImage: 'url(/chemin-vers-votre-image.jpg)',
        backgroundSize: 'cover',
        color: '#fff',
        p: 6,
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Bienvenue sur l Event
      </Typography>
      <Button variant="contained">Rejoignez-nous</Button>
    </Box>
  );
}

export default Header;
