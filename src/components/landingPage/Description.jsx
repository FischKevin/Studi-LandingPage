import React from 'react';
import { Typography, Box } from '@mui/material';

function Description() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        color: 'white',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: 'black',
        paddingTop: '40px',
        paddingBottom: '40px',
      }}
    >
      <Box
        component="img"
        sx={{
          height: 'auto',
          width: '250px',
          margin: '20px',
        }}
        alt="Logo"
        src="/logo_full.webp"
      />
      <Typography
        sx={{
          flex: 1,
          color: 'white',
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
