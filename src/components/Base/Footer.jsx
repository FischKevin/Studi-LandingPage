import React from 'react';
import { Typography, Box, Grid, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter'; // Remplacer par l'icône souhaitée pour "x"
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

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
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://twitter.com"
              target="_blank"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://youtube.com"
              target="_blank"
            >
              <YouTubeIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://instagram.com"
              target="_blank"
            >
              <InstagramIcon />
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
          <Link href="/shop" color="inherit" sx={{ display: 'block', mb: 1 }}>
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
          <Link
            href="/cookies"
            color="inherit"
            sx={{ display: 'block', mb: 1 }}
          >
            Gestion des cookies
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
