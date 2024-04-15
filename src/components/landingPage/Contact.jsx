import React, { useState } from 'react';
import {
  Typography,
  Container,
  TextField,
  Button,
  Box,
  Snackbar,
  Alert,
} from '@mui/material';
import backgroundImage from '/photo_contact.webp';

function Contact() {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const data = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => console.log('Form successfully submitted'))
      .catch((error) => console.error('Error:', error));

    setOpenSnackbar(true);

    setPrenom('');
    setNom('');
    setEmail('');
    setMessage('');

    setTimeout(() => {
      setOpenSnackbar(false);
    }, 4000);
  };

  return (
    <Container
      maxWidth="full"
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        padding: '40px 0 60px 0',
      }}
    >
      <Typography
        variant="h4"
        className='sectionTitle'
      >
        CONTACTEZ-NOUS
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '100%',
          gap: 4,
        }}
      >
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/thanks.html"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              maxWidth: '400px',
            }}
          >
            <TextField
              name="prenom"
              label="Prénom"
              variant="outlined"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              sx={{
                borderRadius: '10px',
                bgcolor: 'white',
                '& .MuiOutlinedInput-root': { borderRadius: '10px' },
              }}
            />
            <TextField
              name="nom"
              label="Nom"
              variant="outlined"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              sx={{
                borderRadius: '10px',
                bgcolor: 'white',
                '& .MuiOutlinedInput-root': { borderRadius: '10px' },
              }}
            />
            <TextField
              name="email"
              label="E-mail"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                borderRadius: '10px',
                bgcolor: 'white',
                '& .MuiOutlinedInput-root': { borderRadius: '10px' },
              }}
            />
            <TextField
              name="message"
              label="Message"
              variant="outlined"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              multiline
              rows={4}
              sx={{
                borderRadius: '10px',
                bgcolor: 'white',
                '& .MuiOutlinedInput-root': { borderRadius: '10px' },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#E84142',
                color: 'white',
                border: '1px solid #C01818',
                borderRadius: '10px',
                padding: '10px 20px',
                fontSize: '16px',
                '&:hover': { backgroundColor: '#C01818' },
                boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.2)',
              }}
            >
              ENVOYER
            </Button>
          </Box>
        </form>

        <Snackbar open={openSnackbar} autoHideDuration={6000}>
          <Alert severity="success" sx={{ width: '100%' }}>
            Votre message a été envoyé avec succès !
          </Alert>
        </Snackbar>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: '400px',
          }}
        >
          <Box
            sx={{
              mt: 4,
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
            dangerouslySetInnerHTML={{
              __html: `
          <div id="mc_embed_shell">
          <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
      <style type="text/css">
            #mc_embed_signup{ border-radius:10px; false;clear:left; color:black; font:16px Roboto,Arial,sans-serif; width: 255px;}
            form{ width: 300px }
            #mc_embed_signup h2 {padding:12px;}
            #mc_embed_signup .mc-field-group input {padding: 16px 8px; height:55px; width:300px;}
            #mc_embed_signup input {border-radius:10px; padding: 16.5px 14px; font: inherit; height: 1.4375em;  }
            form h2 { color: white; background: rgba(255, 255, 255, .2); border-radius:10px; text-align: center; text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.7); }
            #mc_embed_signup .helper_text {display: none;}
            #mc_embed_signup .button {width: 300px; margin-top: 6px;
              height: 48px;
              font-weight: 500;box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 8px; background-color: #E84142; color: white; border: 1px solid #C01818; border-radius:10px; padding: 10px 20px; font-size: 16px; &:hover {background-color: #C01818;}}
            /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
               We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
    </style>
    <div id="mc_embed_signup">
        <form action="https://app.us18.list-manage.com/subscribe/post?u=a285f231e1dc28a0b43613f88&amp;id=f7aa1cb4f4&amp;f_id=00e699e6f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
            <div id="mc_embed_signup_scroll"><h2>Inscription à la newsletter</h2>
                <div class="mc-field-group"><label for="mce-EMAIL"></label><input type="email" name="EMAIL" placeholder="E-mail" class="required email" id="mce-EMAIL" required="" value=""><span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span></div>
            <div id="mce-responses" class="clear foot">
                <div class="response" id="mce-error-response" style="display: none;"></div>
                <div class="response" id="mce-success-response" style="display: none;"></div>
            </div>
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
            /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
            <input type="text" name="b_a285f231e1dc28a0b43613f88_f7aa1cb4f4" tabindex="-1" value="">
        </div>
            <div class="optionalParent">
                <div class="clear foot">
                    <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="S'INSCRIRE">
                    <p style="margin: 0px auto; display:none;"><a href="http://eepurl.com/iL7bLQ" title="Avec Mailchimp, les campagnes de marketing par e-mail sont un jeu d'enfant"><span style="display: inline-block; background-color: transparent; border-radius: 4px;"><img class="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit&nbsp;Mailchimp" style="width: 220px; height: 40px; display: flex; padding: 2px 0px; justify-content: center; align-items: center;"></span></a></p>
                </div>
            </div>
        </div>
    </form>
    </div>
    <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script></div>
          `,
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}

export default Contact;
