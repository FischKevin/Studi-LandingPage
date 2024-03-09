import { Typography, Container } from '@mui/material';

function Legal() {
  return (
    <Container maxWidth="lg">
      {/* Section Descriptive */}
      <Typography variant="h4" component="h2" gutterBottom>
        La page de légalité
      </Typography>
      <Typography paragraph>Texte descriptif ici...</Typography>
    </Container>
  );
}

export default Legal;
