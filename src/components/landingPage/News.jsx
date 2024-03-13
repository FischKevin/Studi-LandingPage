import React from 'react';
import { Typography, Box, Link } from '@mui/material';
import backgroundImage from '/public/ani-kolleshi-7jjnJ-QA9fY-unsplash.jpg';

function News() {
  return (
    <Box
      sx={{
        py: 5,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        marginBottom="40px"
        gutterBottom
        sx={{
          fontFamily: 'Agency FB V2, Arial',
          color: 'white',
          textShadow: '0px 8px 10px rgba(0, 0, 0, 0.4)',
        }}
      >
        ACTUALITÉS
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 4,
          justifyContent: 'space-evenly',
          marginBottom: '30px',
        }}
      >
        {[
          {
            src: '/public/news1.png',
            alt: 'News 1',
            link: 'https://www.ligue-cancer.net/nos-actualites/tous-unis-contre-le-cancer-avec-e-leclerc-et-la-ligue',
          },
          {
            src: '/public/news2.png',
            alt: 'News 2',
            link: 'https://www.ligue-cancer.net/nos-actualites/la-ligue-contre-le-cancer-au-salon-des-seniors',
          },
          {
            src: '/public/news3.png',
            alt: 'News 3',
            link: 'https://www.ligue-cancer.net/nos-actualites/clapsante-magazine-parution-du-numero-43',
          },
        ].map((news, index) => (
          <Link
            key={index}
            href={news.link}
            target="_blank"
            sx={{ display: 'block', textDecoration: 'none' }}
          >
            <Box
              sx={{
                transition: 'transform 0.3s ease',
                '&:hover img': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 10px 15px rgba(0,0,0,0.3)',
                },
                '&:active img': {
                  transform: 'scale(0.95)',
                },
              }}
            >
              <img
                src={news.src}
                alt={news.alt}
                style={{
                  width: '300px',
                  height: 'auto',
                  borderRadius: '4px',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                }}
              />
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default News;
