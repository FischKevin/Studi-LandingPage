import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="sm"
      sx={{ mt: 8, textAlign: 'center', color: '#E84142' }}
    >
      <Typography
        variant="h1"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          fontSize: '6rem',
          color: 'inherit',
          textShadow: '4px 4px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        404
      </Typography>
      <Typography
        variant="h4"
        sx={{ mb: 2, fontWeight: 'medium', color: 'inherit' }}
      >
        Page non trouvée
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          mb: 4,
          color: 'white',
          backgroundColor: '#3897D4',
          padding: '10px',
          borderRadius: '10px',
          boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        Il semble que nous ne pouvons pas trouver la page que vous cherchez.
        Essayez de revenir à la page d&apos;accueil.
      </Typography>
      <Button
        variant="contained"
        onClick={() => navigate('/')}
        sx={{
          backgroundColor: '#E84142',
          color: 'white',
          '&:hover': {
            backgroundColor: '#C01818',
          },
          padding: '10px 20px',
          borderRadius: '10px',
          boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.2)',
          marginBottom: '40px',
        }}
      >
        Retour à l&apos;accueil
      </Button>
    </Container>
  );
}

export default NotFound;
