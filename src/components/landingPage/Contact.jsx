import { Typography, Container } from '@mui/material';

function Contact() {
  return (
    <Container maxWidth="lg">
      {/* Formulaire de Contact et Newsletter */}
      <Typography variant="h4" component="h2" gutterBottom>
        Contactez-nous
      </Typography>
      {/* Utilisez les TextField et Button de MUI pour le formulaire */}
    </Container>
  );
}

export default Contact;
