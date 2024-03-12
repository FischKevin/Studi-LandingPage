import React from 'react';
import { Typography, Box, Table, TableBody, TableCell, TableContainer, TableRow, Container } from '@mui/material';
import backgroundImage from '/jason-leung-Xaanw0s0pMk-unsplash.jpg';

function Planning() {
  return (
    <Container maxWidth="full" sx={{ backgroundImage: `url(${backgroundImage})`, color: 'white', textAlign: 'center', padding: '40px', backgroundSize: 'cover' }}>
      {/* Titre du planning */}
      <Box sx={{ display: 'inline-block', margin: '0 auto', backgroundColor: 'transparent' }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ textShadow:'0px 8px 10px rgba(0, 0, 0, 0.4)', backgroundColor: 'transparent', fontFamily: 'Agency FB V2, Arial', fontWeight:'bold', marginBottom: '20px' }}>
          PROGRAMME DE L&apos;ÉVÉNEMENT
        </Typography>
      </Box>

      {/* Conteneurs pour les colonnes, ajustés pour montrer le fond */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-around', gap: '20px' }}>
        
        {/* Première colonne: Matin */}
        <Box sx={{ maxWidth: '45%' }}>
          <Typography variant="h6" sx={{ marginBottom: '40px', marginTop: '20px' }}>MATIN</Typography>
          <TableContainer component={Box} sx={{ borderRadius: '10px', maxWidth: '100%', overflow: 'hidden', backgroundColor: '#fff' }}>
            <Table size="small">
            <TableBody>
                <TableRow>
                  <TableCell>8h</TableCell>
                  <TableCell>Ouverture des portes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>9h</TableCell>
                  <TableCell>Discours de bienvenue</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>9h30 - 11h30</TableCell>
                  <TableCell>Animations vidéoludiques</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>9h30 - 11h30</TableCell>
                  <TableCell>Interventions de membres de La ligue contre le cancer</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* Deuxième colonne: Après-midi */}
        <Box sx={{ maxWidth: '45%', marginBottom:'20px' }}>
          <Typography variant="h6" sx={{ marginBottom: '40px', marginTop: '20px' }}>APRÈS-MIDI</Typography>
          <TableContainer component={Box} sx={{ borderRadius: '10px', maxWidth: '100%', overflow: 'hidden', backgroundColor: '#fff' }}>
            <Table size="small">
            <TableBody>
                <TableRow>
                  <TableCell>13h30 - 15h30</TableCell>
                  <TableCell>Animations vidéoludiques</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>15h30 - 17h30</TableCell>
                  <TableCell>Interventions de membres de La ligue contre le cancer</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>17h30 - 18h30</TableCell>
                  <TableCell>Discours de clôture</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>19h</TableCell>
                  <TableCell>Fermeture de l’événement</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Container>
  );
}

export default Planning;
