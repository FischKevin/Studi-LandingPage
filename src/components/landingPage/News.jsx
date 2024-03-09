import { Typography, Container } from '@mui/material';

function News() {
  return (
    <Container maxWidth="lg">
      {/* Section Descriptive */}
      <Typography variant="h4" component="h2" gutterBottom>
        News de l Event
      </Typography>
      <Typography paragraph>Texte descriptif ici...</Typography>
    </Container>
  );
}

export default News;
