import React from 'react';
import { PropTypes } from 'prop-types';
import { Typography, Box, Grid, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const TwitchIcon = ({ size = '40px', color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    {...props}
  >
    <path d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43Z" />
  </svg>
);

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'black', p: 6, color: 'white' }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4} textAlign="center">
          <Box
            component="img"
            src="/logo_full.png"
            alt="Logo de l'événement"
            sx={{ width: 128, height: 'auto', mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={4} textAlign="center">
          <Typography gutterBottom>
            Rejoignez-nous sur les réseaux sociaux
          </Typography>
          <Box>
            <IconButton
              color="inherit"
              href="https://facebook.com"
              target="_blank"
              sx={{
                fontSize: '40px',
                '&:hover': {
                  color: '#68C5F1',
                },
              }}
            >
              <FacebookIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://twitter.com"
              target="_blank"
              sx={{
                fontSize: '40px',
                '&:hover': {
                  color: '#68C5F1',
                },
              }}
            >
              <XIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://youtube.com"
              target="_blank"
              sx={{
                fontSize: '40px',
                '&:hover': {
                  color: '#68C5F1',
                },
              }}
            >
              <YouTubeIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://instagram.com"
              target="_blank"
              sx={{
                fontSize: '40px',
                '&:hover': {
                  color: '#68C5F1',
                },
              }}
            >
              <InstagramIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://twitch.tv"
              target="_blank"
              sx={{
                fontSize: '40px',
                '&:hover': {
                  color: '#68C5F1',
                },
              }}
            >
              <TwitchIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} textAlign="center">
          <Link
            href="https://www.eventbrite.fr/e/billets-press-start-to-fight-cancer-862248497467?aff=oddtdtcreator"
            target="_blank"
            rel="noreferrer"
            color="inherit"
            sx={{ display: 'block', mb: 1 }}
          >
            Réservation de billets
          </Link>
          <Link
            href="https://press-start-to-fight-cancer.myspreadshop.fr/"
            target="_blank"
            rel="noreferrer"
            color="inherit"
            sx={{ display: 'block', mb: 1 }}
          >
            Boutique de goodies
          </Link>
          <Typography component="div" sx={{ height: 24 }} />{' '}
          {/* Espacement vide */}
          <Link href="/legal" color="inherit" sx={{ display: 'block', mb: 1 }}>
            Mentions légales
          </Link>
          <Link
            href="/confidentiality"
            color="inherit"
            sx={{ display: 'block', mb: 1 }}
          >
            Politique de confidentialité
          </Link>
          <Link href="/cookie" color="inherit" sx={{ display: 'block', mb: 1 }}>
            Gestion des cookies
          </Link>
          <Link
            href="/credits"
            color="inherit"
            sx={{ display: 'block', mb: 1 }}
          >
            Crédits
          </Link>
        </Grid>
      </Grid>
      <Typography variant="subtitle1" align="center" sx={{ mt: 4 }}>
        © 2024 Press Start To Fight Cancer. Tous droits réservés.
      </Typography>
    </Box>
  );
}

export default Footer;

TwitchIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};
