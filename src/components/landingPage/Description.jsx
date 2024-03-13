import React from 'react';
import { Typography, Box } from '@mui/material';

function Description() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row', // Disposition horizontale
        alignItems: 'center', // Centrer les éléments verticalementmi-transparent
        color: 'white', // Couleur du texte
        margin: '0 auto', // Centrer le box dans le conteneur parent
        padding: '20px', // Un peu d'espace autour des éléments
        backgroundColor: 'black', // En fonction de votre design
        paddingTop: '40px',
        paddingBottom: '40px',
      }}
    >
      <Box
        component="img"
        sx={{
          height: 'auto',
          width: '250px', // Ajustez selon la taille souhaitée pour le logo
          margin: '20px', // Espace entre le logo et le texte
        }}
        alt="Logo"
        src="/logo_full.png"
      />
      <Typography
        sx={{
          flex: 1, // Prend tout l'espace restant
          color: 'white', // Assurez-vous que la couleur du texte est blanche
          margin: '20px',
        }}
      >
        Entrez dans l&apos;arène du jeu et de la solidarité avec “Press Start to
        Fight Cancer”, un événement où votre passion pour le gaming aide à
        combattre le cancer. Relevez des défis ludiques, rencontrez des gamers
        engagés, et participez à des ateliers de prévention. Chaque clic, chaque
        tournoi, chaque interaction nous rapproche d&apos;une victoire contre le
        cancer. Soyez le héros de cette bataille ! Jouez, apprenez, et
        contribuez à faire la différence. Joignez-vous à la lutte, jouez pour
        guérir.
        <br />
        <br />
        Votre quête commence maintenant !
      </Typography>
    </Box>
  );
}

export default Description;
