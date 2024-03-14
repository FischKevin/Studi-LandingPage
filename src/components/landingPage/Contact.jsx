import React from 'react';
import { Typography, Container, TextField, Button, Box } from '@mui/material';
import backgroundImage from '/photo_contact.jpg';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log('Form successfully submitted'))
      .catch((error) => alert(error));
  };

  return (
    <Container
      maxWidth="full"
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column', // Changez ici pour organiser le contenu verticalement
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        padding: '40px 0 60px 0',
      }}
    >
      {/* Titre centré sur la page */}
      <Typography
        variant="h4"
        sx={{
          textShadow: '0px 8px 10px rgba(0, 0, 0, 0.4)',
          fontFamily: 'Agency FB V2, Arial',
          fontWeight: 'bold',
          marginBottom: '20px',
        }}
      >
        CONTACTEZ-NOUS
      </Typography>

      {/* Sections flexibles pour le formulaire et la newsletter */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '100%', // Assure la largeur complète pour centrer le contenu
          gap: 4, // Espace entre formulaire et newsletter
        }}
      >
        {/* Formulaire de contact */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              maxWidth: '400px',
            }}
          >
            <TextField
              name="prenom"
              label="Prénom"
              variant="outlined"
              sx={{
                borderRadius: '10px',
                bgcolor: 'white',
                '& .MuiOutlinedInput-root': { borderRadius: '10px' },
              }}
            />
            <TextField
              name="nom"
              label="Nom"
              variant="outlined"
              sx={{
                borderRadius: '10px',
                bgcolor: 'white',
                '& .MuiOutlinedInput-root': { borderRadius: '10px' },
              }}
            />
            <TextField
              name="email"
              label="E-mail"
              variant="outlined"
              sx={{
                borderRadius: '10px',
                bgcolor: 'white',
                '& .MuiOutlinedInput-root': { borderRadius: '10px' },
              }}
            />
            <TextField
              name="message"
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              sx={{
                borderRadius: '10px',
                bgcolor: 'white',
                '& .MuiOutlinedInput-root': { borderRadius: '10px' },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#E84142',
                color: 'white',
                border: '1px solid #C01818',
                borderRadius: '10px',
                padding: '10px 20px',
                fontSize: '16px',
                '&:hover': { backgroundColor: '#C01818' },
                boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.2)',
              }}
            >
              ENVOYER
            </Button>
          </Box>
        </form>

        {/* Section Newsletter */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: '400px',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              padding: '10px 20px',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Roboto',
                color: 'white',
                textShadow: '0px 8px 10px rgba(0, 0, 0, 0.4)',
              }}
            >
              Inscription à la newsletter
            </Typography>
          </Box>
          {/* Champ E-mail et bouton ENVOYER pour la newsletter ici */}
          <TextField
            label="E-mail"
            variant="outlined"
            sx={{
              margin: '0',
              borderRadius: '10px',
              bgcolor: 'white',
              '& .MuiOutlinedInput-root': { borderRadius: '10px' },
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#E84142',
              color: 'white',
              border: '1px solid #C01818',
              borderRadius: '10px',
              padding: '10px 20px',
              fontSize: '16px',
              '&:hover': {
                backgroundColor: '#C01818',
              },
              boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            ENVOYER
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Contact;
