import { Typography, Container } from '@mui/material';

function AccessInfo() {
  return (
    <Container maxWidth="lg">
      {/* Section Descriptive */}
      <Typography variant="h4" component="h2" gutterBottom>
        Informations d accès à l Event
      </Typography>
      <Typography paragraph>Texte descriptif ici...</Typography>
    </Container>
  );
}

export default AccessInfo;
