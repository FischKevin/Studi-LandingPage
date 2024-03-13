import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'; // Importez Typography de Material-UI

function Header() {
  return (
    <Box
      className="header"
      sx={{
        backgroundImage: 'url(/side-view-happy-woman-winning-videogame.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        width: '100%',
        height: '550px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end', // Changez ici pour aligner les éléments vers le bas
        alignItems: 'center',
        p: 6,
      }}
    >
      {/* Ajoutez une marge en haut pour descendre le texte et le bouton */}
      <Typography
        variant="h3" // Augmentez la taille du texte
        component="h2"
        sx={{
          mt: 'auto',
          mb: 8,
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)', // Ombre portée plus prononcée
          color: '#F9EA32',
          fontWeight: 'bold',
          letterSpacing: '0.1rem', // Augmente l'espacement des lettres
          // background: 'linear-gradient(45deg, #F9EA32, #F76B1C)', // Gradient de couleurs
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
        }}
      >
        SAMEDI 29 JUIN 2024
      </Typography>
      <a
        href="https://www.eventbrite.fr/e/billets-press-start-to-fight-cancer-862248497467?aff=oddtdtcreator"
        target="_blank"
        rel="noreferrer"
        className="customButton" // Appliquez vos styles de bouton ici
        style={{
          textDecoration: 'none', // Supprimez le soulignement du texte
          display: 'inline-block', // Nécessaire pour appliquer le padding
          textAlign: 'center', // Centrez le texte dans le bouton
          // Ajoutez ici d'autres styles si nécessaire
        }}
      >
        RESERVE TON BILLET
      </a>
    </Box>
  );
}

export default Header;
