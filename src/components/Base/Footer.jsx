import { Typography, Container, Box } from '@mui/material';

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', p: 6 }}>
      <Container maxWidth="lg">
        {/* Liens et informations ici */}
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          © 2024 Nom de l Event. Tous droits réservés.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
