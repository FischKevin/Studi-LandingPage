import React, { useState } from 'react';
import {
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'Qu\'est-ce que "Press Start to Fight Cancer" ?',
    answer:
      '"Press Start to Fight Cancer" est un événement caritatif qui combine le gaming et la collecte de fonds pour soutenir la lutte contre le cancer. Il propose des tournois de jeux vidéo, des sessions de streaming en direct, des ateliers de sensibilisation et des rencontres avec des personnalités du gaming.',
  },
  {
    question: "Quand et où l'événement aura-t-il lieu ?",
    answer:
      'Les détails exacts de la date et du lieu seront communiqués sur notre site web et nos réseaux sociaux. Suivez-nous pour les dernières mises à jour.',
  },
  {
    question: "Comment puis-je participer à l'événement ?",
    answer:
      "Vous pouvez vous inscrire en tant que participant, bénévole ou donateur via notre site web. Il y a de nombreuses façons de s'impliquer, que ce soit en jouant, en aidant à l'organisation, ou en faisant un don.",
  },
  {
    question:
      'Y aura-t-il des activités pour ceux qui ne jouent pas aux jeux vidéo ?',
    answer:
      "Absolument ! L'événement comprend des ateliers sur la santé, des discussions sur les avancées de la recherche sur le cancer, et des opportunités de réseautage.",
  },
  {
    question: 'Les dons sont-ils déductibles des impôts ?',
    answer:
      'Oui, les dons sont déductibles des impôts dans la plupart des cas. Nous fournirons des reçus de dons pour vos déclarations fiscales.',
  },
  {
    question: 'Comment les fonds collectés seront-ils utilisés ?',
    answer:
      'Tous les fonds collectés seront directement versés à la Ligue contre le cancer pour financer la recherche, la prévention et le soutien des personnes touchées par le cancer.',
  },
  {
    question: "Puis-je devenir un sponsor de l'événement ?",
    answer:
      'Bien sûr ! Nous accueillons les entreprises et les individus souhaitant sponsoriser notre événement. Contactez-nous pour plus de détails sur nos packages de sponsoring.',
  },
  {
    question: "Y a-t-il des restrictions d'âge pour participer ?",
    answer:
      "L'événement est ouvert à tous, mais certaines activités, comme les tournois de jeux vidéo, peuvent avoir des restrictions d'âge en fonction du classement des jeux.",
  },
  {
    question:
      "Comment puis-je rester informé des mises à jour de l'événement ?",
    answer:
      'Inscrivez-vous à notre newsletter et suivez-nous sur les réseaux sociaux pour recevoir des mises à jour régulières sur "Press Start to Fight Cancer".',
  },
  {
    question: "Que faire si j'ai d'autres questions ?",
    answer:
      "Si vous avez d'autres questions, n'hésitez pas à nous contacter via le formulaire sur notre site web ou directement sur nos réseaux sociaux.",
  },
];

function FAQ() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
      maxWidth="full"
      sx={{
        color: 'white',
        backgroundColor: 'black',
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        className='sectionTitle'
      >
        FAQ
      </Typography>
      <Box sx={{ width: '100%', maxWidth: '800px' }}>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{
              backgroundColor: 'black',
              color: 'white',
              marginBottom: 2,
              '&:before': { display: 'none' },
              borderRadius: '10px',
              overflow: 'hidden',
              ...(index === 0 && {
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px',
              }),
              ...(index === faqs.length - 1 && {
                borderBottomLeftRadius: '10px',
                borderBottomRightRadius: '10px',
                ...(expanded === `panel${index}` && {
                  borderBottomLeftRadius: '0px',
                  borderBottomRightRadius: '0px',
                }),
              }),
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              sx={{
                backgroundColor: '#C01818',
                color: 'white',
                fontFamily: 'Roboto',
                fontWeight: 'bold',
                fontSize: '20px',
                ...(index === 0 && { borderRadius: '10px 10px 0 0' }),
                ...(index === faqs.length - 1 && {
                  borderRadius: '0 0 10px 10px',
                }),
              }}
            >
              {faq.question}
            </AccordionSummary>
            <AccordionDetails
              sx={{
                fontFamily: 'Roboto',
                fontSize: '16px',
                backgroundColor: '#E84142',
                color: 'white',
              }}
            >
              {faq.answer}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}

export default FAQ;
