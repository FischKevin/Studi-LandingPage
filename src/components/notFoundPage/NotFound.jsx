import { Typography, Container } from '@mui/material';

function NotFound() {
  return (
    <Container maxWidth="lg">
      {/* Section Descriptive */}
      <Typography variant="h4" component="h2" gutterBottom>
        La page pas trouvée
      </Typography>
      <Typography paragraph>Texte descriptif ici...</Typography>
    </Container>
  );
}

export default NotFound;
