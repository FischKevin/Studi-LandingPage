import React from 'react';
import { Container, Typography, Link } from '@mui/material';
import Navbar from '../base/Navbar';
import Header from '../base/Header';
import Footer from '../base/Footer';

function Credits() {
  return (
    <>
      <Navbar />
      <Header />
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Crédits photographiques
        </Typography>
        <Typography variant="body1" paragraph>
          Nous tenons à remercier les photographes qui ont rendu ce site plus
          vivant grâce à leurs œuvres :
        </Typography>
        <Typography variant="body2" component="div">
          <ul>
            <li>
              Image du header par{' '}
              <a href="https://www.freepik.com/free-photo/side-view-happy-woman-winning-videogame_24799435.htm">
                Freepik
              </a>
            </li>
            <li>
              Photo de{' '}
              <Link
                href="https://unsplash.com/@lunarts?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                target="_blank"
                rel="noopener"
              >
                Volodymyr Hryshchenko
              </Link>{' '}
              sur{' '}
              <Link
                href="https://unsplash.com/photos/papiers-jaunes-formant-un-trou-de-coeur-vert-D-WqjD9AcrM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                target="_blank"
                rel="noopener"
              >
                Unsplash
              </Link>
            </li>
            <li>
              Photo de{' '}
              <Link
                href="https://unsplash.com/@ninjason?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                target="_blank"
                rel="noopener"
              >
                Jason Leung
              </Link>{' '}
              sur{' '}
              <Link
                href="https://unsplash.com/photos/photographie-selective-de-mise-au-point-de-lot-de-confettis-multicolores-Xaanw0s0pMk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                target="_blank"
                rel="noopener"
              >
                Unsplash
              </Link>
            </li>
            <li>
              Photo de{' '}
              <Link
                href="https://unsplash.com/@anikolleshi?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                target="_blank"
                rel="noopener"
              >
                Ani Kolleshi
              </Link>{' '}
              sur{' '}
              <Link
                href="https://unsplash.com/photos/femme-a-linterieur-du-laboratoire-7jjnJ-QA9fY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                target="_blank"
                rel="noopener"
              >
                Unsplash
              </Link>
            </li>
          </ul>
        </Typography>
      </Container>
      <Footer />
    </>
  );
}

export default Credits;
