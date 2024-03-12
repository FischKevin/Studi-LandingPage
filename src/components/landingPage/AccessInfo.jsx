import React from 'react';
import { Typography, Box, Container } from '@mui/material';

function AccessInfo() {
  return (
    <Container maxWidth="full" sx={{ backgroundColor: 'black', color: 'white', padding: '40px 20px' }}>
      {/* Titre */}
      <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', fontFamily: 'Agency FB V2, Arial' }}>
        INFORMATIONS D&apos;ACCÈS
      </Typography>

      {/* Conteneur des colonnes */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, marginTop:'40px' }}>
        {/* Colonne 1: Plan */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {/* Utilisation de la capture d'écran du plan */}
          <img src="/plan.PNG" alt="Plan d'accès" style={{ maxWidth: '100%', borderRadius: '10px', maxHeight: '500px', objectFit: 'cover' }} />
        </Box>

        {/* Colonne 2: Texte */}
        <Box sx={{ flex: 1, margin: '20px'}}>
          <Typography variant="h6" gutterBottom>Horaires</Typography>
          <Typography marginBottom={'40px'}>Les portes ouvrent à 8h et ferment à 19h</Typography>
          <Typography variant="h6" gutterBottom>Comment venir ?</Typography>
          <Typography paragraph>
            En tramway :<br/>
            Prendre la ligne n°3 Juvignac / Montpellier / Lattes et Pérols<br/>
            Arrêt : Parc Expo<br/>
            Cette ligne dessert le centre-ville et la gare SNCF de Montpellier<br/><br/>
            En vélo :<br/>
            Utilisez nos racks à vélo situés sur le parvis entre la Sud de France Arena et le Parc des Expositions
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default AccessInfo;
