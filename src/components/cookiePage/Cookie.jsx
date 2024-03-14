import React from 'react';
import { Typography, Container } from '@mui/material';

function Cookie() {
  return (
    <Container maxWidth="full" sx={{ pt: 4, pb: 4, backgroundColor: 'black', color: 'white' }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
        Politique de Gestion des Cookies
        <br />
        V 1.1 Applicable au 28 janvier 2022
      </Typography>

      <Typography paragraph>
        Dans le cadre des fonctionnalités de notre site et de son mode de fonctionnement, StudiGame accorde une grande importance à votre vie privée ainsi qu’à la protection de vos données à caractère personnel et prend toutes les précautions raisonnables pour assurer leur protection.
      </Typography>

      <Typography paragraph>
        <strong>1 – Qui sommes-nous ?</strong>
        <br />
        Nous sommes le responsable du traitement au sens du Règlement (UE) 2016/679 du Règlement Général pour la Protection des Données (RGPD), pour les procédures et les traitements de données à caractère personnel qui sont mis en place à l’occasion de l’organisation de la Press Start To Fight Cancer et des évènements qui y sont liés.
      </Typography>

      <Typography paragraph>
        <strong>2 – Qu’est-ce qu’un cookie ?</strong>
        <br />
        Un « cookie » est un petit fichier d’information envoyé sur le navigateur de l’Utilisateur et enregistré au sein du terminal de l’Utilisateur (ex : ordinateur, smartphone), etc.
      </Typography>

      <Typography paragraph>
        <strong>3 – Quels cookies utilisons-nous ?</strong>
        <br />
        Les cookies peuvent être de session ou persistants, et nous utilisons différents types de cookies pour améliorer l’interaction avec le site.
      </Typography>

      <Typography paragraph>
        <strong>4 – Devez-vous consentir au dépôt des cookies ?</strong>
        <br />
        Certains cookies ne requièrent pas votre consentement préalable, tandis que pour d’autres, tel que les cookies d’analyse de consultation, nous recueillons votre consentement.
      </Typography>

      <Typography paragraph>
        <strong>5 – Comment paramétrer vos cookies ?</strong>
        <br />
        Vous pouvez modifier les paramètres de vos cookies via l’écran de paramétrage accessible sur notre site.
      </Typography>

      <Typography paragraph>
        <strong>6 – Balises (“Tags”) Internet</strong>
        <br />
        Nous utilisons des balises Internet pour évaluer l’efficacité de notre site et l’utilisation de ce dernier par les internautes.
      </Typography>

      <Typography paragraph>
        <strong>7 – Quels sont vos droits ?</strong>
        <br />
        Vous disposez de droits concernant vos données personnelles et pouvez les exercer en nous contactant.
      </Typography>

      <Typography paragraph>
        <strong>8 – Comment exercer vos droits ?</strong>
        <br />
        Pour toute question ou exercice de vos droits sur le traitement de vos données personnelles, vous pouvez contacter notre délégué à la protection des données.
      </Typography>

      <Typography paragraph>
        <strong>9 – Mises à jour de la politique de gestion des cookies</strong>
        <br />
        Cette politique peut être mise à jour et nous vous invitons à la consulter régulièrement.
      </Typography>

      <Typography paragraph>
        <strong>10 – Informations complémentaires</strong>
        <br />
        Pour plus d’informations sur la gestion de vos données personnelles, vous pouvez consulter notre Politique de Confidentialité.
      </Typography>
    </Container>
  );
}

export default Cookie;
