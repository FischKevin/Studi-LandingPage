import React from 'react';
import { Typography, Container } from '@mui/material';

function Confidentiality() {
  return (
    <Container maxWidth="full" sx={{ pt: 4, pb: 4, backgroundColor: 'black', color: 'white' }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
        Politique de confidentialité
        <br />
        V 1.1 Applicable au 30 janvier 2024
      </Typography>

      {/* Introduction et portée */}
      <Typography paragraph>
        Kevin Fischer accorde une grande importance à votre vie privée ainsi qu’à la protection de vos données à caractère personnel et prend toutes les précautions raisonnables pour assurer leur protection.
        <br /><br />
        La présente Politique a pour objet de vous informer sur les procédures et les traitements de données à caractère personnel qui sont mis en place à l’occasion de l’organisation de la Press Start To Fight Cancer et des évènements qui y sont liés. Cette Politique a pour objet de vous informer des mesures prises concernant la protection de vos données personnelles conformément au Règlement Général sur la Protection des Données ou « RGPD » de l’Union européenne du 27 avril 2016 (n°2016/679).
        <br /><br />
        Nous avons rédigé deux documents ayant pour objectif de vous informer sur la manière dont nous collectons, utilisons et protégeons vos données personnelles dans le cadre de nos différents services :
        <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '20px' }}>
          <li>Une politique dédiée aux données collectées via notre site internet et dans le cadre de l’inscription à la Press Start To Fight Cancer (la présente politique)</li>
          <li>Un document spécifique à question des cookies que nous utilisons la Politique de gestion des cookies.</li>
        </ul>
        <br />
        Les termes « nous » ou « nos » utilisés dans la présente Politique de confidentialité désignent la société Kevin Fischer.
        <br /><br />
        Dans la suite de ce document, nous utilisons indifféremment les termes « données personnelles », « données à caractère personnel » et « informations personnelles » pour désigner les informations vous identifiant personnellement (noms, prénoms, adresses professionnelles, etc.) ou, comme en l’occurrence, des données qui sont liées à vous (réponses apportées aux questions portées sur nos formulaires), ainsi que les données de connexion ou de navigation sur notre site (le cas échéant adresse IP, date et heure de connexion).
        <br /><br />
        Vous trouverez notamment les réponses à vos questions classées par thématiques dans les sections suivantes :
        <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '20px' }}>
          <li>Qui sommes-nous ?</li>
          <li>Périmètre d’application</li>
          <li>Type de données à caractère personnel collectées et durées de conservation</li>
          <li>Mesures de confidentialité et de sécurité</li>
          <li>Destinataires des données</li>
          <li>Transfert international de données</li>
          <li>Partage des réseaux sociaux auprès desquels vous avez un compte</li>
          <li>Droits d’accès, de rectification et d’effacement</li>
          <li>Nous contacter</li>
          <li>Évolution du périmètre du groupe</li>
          <li>Modification de notre Politique de Confidentialité</li>
          <li>Utilisation des cookies</li>
        </ul>
      </Typography>

      {/* Qui sommes-nous ? */}
      <Typography paragraph>
        <strong>1 – Qui sommes-nous ?</strong>
        <br />
        Nous sommes le responsable du traitement du sens du Règlement (UE) 2016/679 du Règlement Général pour la Protection des Données (ci-après « RGPD »), pour les procédures et les traitements de données à caractère personnel qui sont mis en place à l’occasion de l’organisation de la Press Start To Fight Cancer et des évènements qui y sont liés.
        <br /><br />
        En tant que tel, nous nous engageons à respecter le cadre des dispositions légales en vigueur et notamment à prendre toutes les mesures raisonnables pour s’assurer de l’exactitude et de la pertinence des données Personnelles au regard des finalités pour lesquelles Kevin Fischer les traite.
      </Typography>

      {/* Périmètre d’application */}
      <Typography paragraph>
        <strong>2 – Périmètre d’application</strong>
        <br />
        Cette Politique est propre à l’organisation de l’événement Press Start To Fight Cancer et des évènements qui y sont liés et ne concerne que les activités pour lesquelles l’Organisateur est Responsable de Traitement au sens du RGPD.
      </Typography>

      {/* Collecte et utilisation des données */}
      <Typography paragraph>
        <strong>3 – Quelles données collectons-nous sur vous et pourquoi traitons-nous vos données ?</strong>
        <br />
        Nous collectons les données que vous nous adressez spécifiquement pour chaque finalité :
        <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '20px' }}>
          <li>Les données permettant de vous identifier (nom, prénom, email) afin de procéder à toute inscription (newsletters, publications), dans le cadre d’une relation BtoB. La base juridique est donc notre intérêt légitime ;</li>
          <li>Les données professionnelles permettant de vous inscrire à nos différents événements (Nom, prénom, fonction, société, téléphone, email, etc.) afin de vous faciliter l’accès, de vous permettre de recevoir des informations nécessaires à votre participation et de nous permettre une bonne organisation des évènements auxquels vous êtes inscrits. Les bases juridiques sont votre consentement pour l’inscription et notre intérêt légitime pour la prise en compte et la gestion de cette inscription. Cela comprend également les inscriptions aux divers ateliers, colloques, concours, challenges, tables rondes, etc. organisés au sein de la Press Start To Fight Cancer et des événement liés. Nous nous permettrons d’utiliser ces informations afin de vous inviter à de futurs évènements que nous-même ou certains de nos partenaires organiseront sur des thématiques similaires ;</li>
          <li>Suivant les lieux dans lesquels les évènements se dérouleront et les personnalités présentes qui peuvent expliquer des procédures de sécurité particulière pour y accéder, les données et documents officiels permettant la vérification de votre identité (carte d’identité, etc.) et le contrôle d’accès. La base juridique de traitement étant notre intérêt légitime, voire dans certains cas particuliers, l’existence d’une obligation réglementaire.</li>
        </ul>
        <br />
        Ces données sont conservées pour une durée de trois ans après le dernier contact que nous avons eu avec vous.
        <br />
        À noter : les informations signalées par un astérisque (*) sont indispensables au traitement de votre demande.
      </Typography>

      {/* Mesures de confidentialité et de sécurité */}
      <Typography paragraph>
        <strong>4 – Mesures de confidentialité et de sécurité</strong>
        <br />
        Nous prenons toutes les mesures raisonnables (physiques, logistiques, organisationnelles) pour protéger vos données au moment de leur transmission sur le service, en particulier contre la perte, l’usage abusif, l’accès non autorisé, la divulgation, l’altération ou la destruction, via des mesures de sécurité telles que la détection des vulnérabilités, le déploiement du protocole HTTPS, la mise en œuvre de procédés de pseudonymisation et d’anonymisation etc.
        <br /><br />
        Selon la typologie des données collectées et leurs finalités, les traitements ne sont effectués que par le personnel habilité conformément à nos exigences de confidentialité et de sécurité dans la constitution des fichiers, les échanges avec nos partenaires et sous-traitants, le transfert de ces données (cf. ci-dessous).
      </Typography>

      {/* Droits des utilisateurs */}
      <Typography paragraph>
        <strong>5 – Destinataires des données</strong>
        <br />
        Les informations personnelles que vous êtes susceptibles de renseigner pourront être consultées par le personnel de notre société, ainsi que l’ensemble des filiales du groupe, les services chargés du contrôle et nos sous-traitants dans le strict cadre des finalités que nous vous avons présentées (y compris la mise à disposition des lieux, etc.).
        <br /><br />
        Nous vous précisons à ce titre que nous avons souscrit avec nos sous-traitants des clauses de sécurité strictes, conformes à l’article 28 du RGPD, précisant notamment les objectifs de sécurité devant être atteints.
        <br />
        Nous pourrons également être amenés à communiquer vos données professionnelles à quatre types d’entités :
        <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '20px' }}>
          <li>Les responsables des lieux accueillant les évènements, dans la mesure où ils ne seraient considérés ni comme sous-traitant, ni comme partenaires organisateurs. Comme indiqués ci-dessus, ces responsables pourront également être destinataire de vos données de vérification d’identité en application de leur propre Politique de Confidentialité qu’ils mettront à votre disposition ;</li>
          <li>Les partenaires qui financent, au sein du Press Start To Fight Cancer ou des évènements liés, des colloques, ateliers, concours, challenges, tables rondes, etc. où vous vous êtes inscrits. L’utilisation de vos données, à titre commercial ou non, s’opère en application de leur propre Politique de Confidentialité qu’ils mettront à votre disposition. Lors des évènements tels que la Press Start To Fight Cancer , vous pouvez être amenés à communiquer vos coordonnées de contact professionnel à l’occasion de votre passage sur les stands des intervenants et exposants, ou en participant aux interventions qu’ils sponsorisent. Il est possible que vous soyez contactés par l’exposant en question à la suite de la Press Start To Fight Cancer, qui agit en tant que responsable de traitement. Si vous ne souhaitez pas recevoir de communication de sa part, il vous suffit de lui en faire part directement, à cette occasion ou ultérieurement.</li>
          <li>Nous vous indiquons également que, dans le cas d’utilisation de modules sociaux ou de votre compte Facebook ou LinkedIn, les réseaux sociaux en question pourront avoir accès à une partie des informations.</li>
          <li>Enfin, nous pouvons être amenés à communiquer des informations à caractère personnel à la demande de toute Autorité Publique dans le cadre d’une procédure légale obligatoire, ou dans le cas d’un risque avéré pouvant affecter notre système d’information ayant un impact sur nos activités ou la conduite de celles-ci, ou les droits fondamentaux de tiers concernés.</li>
        </ul>
      </Typography>

      {/* Contact */}
      <Typography paragraph>
        <strong>6 – Transfert international de données</strong>
        <br />
        Nous pouvons être amenés à transférer vos données personnelles à des prestataires de services en dehors de l’Espace Économique Européen (EEE). Dans ce cas, soyez assurés que ceux-ci sont astreints à des règles et des mesures spécifiques afin d’assurer le niveau de sécurité approprié pour la protection de vos données à caractère personnel. Cela signifie que nous fonderons nos transferts sur la base de la réglementation applicable (clauses contractuelles standard approuvées par la Commission européenne dans nos contrats avec des tiers en dehors de l’EEE, transfert vers des pays à la protection reconnues comme adéquate par la Commission européenne, etc.).
        <br />
        Pour plus d’informations, vous pouvez contacter notre Délégué à la Protection des données à l’adresse suivante dpo@avisa-partners.com.
      </Typography>

      {/* Modification de la politique de confidentialité */}
      <Typography paragraph>
        <strong>7 – Partage des réseaux sociaux auprès desquels vous avez un compte</strong>
        <br />
        À partir de nos sites internet, nous avons prévu pour vous la faculté de partager facilement les pages que vous consultez sur vos réseaux sociaux préférés. L’utilisation des boutons permettant d’accéder aux réseaux sociaux est en effet susceptible d’entraîner une collecte et un échange de certaines données entre les réseaux sociaux et les sites du groupe.
        <br /><br />
        Notre site utilise ainsi des « plug-in » ou modules sociaux sur ses différentes pages (boutons « partager » des réseaux sociaux tels que Facebook, Twitter, LinkedIn, etc.). Lorsque vous consultez une page de l’un de nos sites contenant de tels modules sociaux, une connexion est automatiquement établie avec les serveurs des réseaux sociaux (Facebook, Twitter…) qui peuvent alors être informés que vous avez accédé à la page correspondante de notre site.
        <br />
        Si vous souhaitez limiter les informations publiées ou connues par ces réseaux sociaux, nous vous conseillons de vous en déconnecter avant de visiter notre site. Par ailleurs, il vous appartient d’effectuer les paramétrages adéquats concernant l’accès à vos données personnelles sur ces réseaux sociaux et de vous informer sur leur Politique de confidentialité.
      </Typography>

      {/* Utilisation des cookies */}
      <Typography paragraph>
        <strong>8 – Droits d’accès, de rectification et d’effacement</strong>
        <br />
        Nous vous rappelons que vous avez le droit :
        <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '20px' }}>
          <li>D’être informé concernant la manière dont vos données sont traitées ;</li>
          <li>D’accéder à vos données ;</li>
          <li>De vous opposer pour des motifs légitimes à ce que vos données fassent l’objet d’un traitement et notamment à ce que vos données soient utilisées à des fins de prospection commerciale ;</li>
          <li>De limiter certaines utilisations de vos données ;</li>
          <li>De rectifier des informations incorrectes, ainsi que de nous demander de supprimer certaines informations ;</li>
          <li>De contester la manière dont vos données personnelles sont traitées ;</li>
          <li>De retirer votre consentement à tout moment (dans les cas où nous nous fondons sur votre consentement comme base légale au traitement effectué) ;</li>
          <li>De bénéficier d’un droit à la portabilité de vos données (dans les cas où nous nous fondons sur votre consentement ou sur le contrat comme base légale au traitement effectué) ;</li>
          <li>De définir des directives relatives au sort de vos données à caractère personnel après votre décès en application de l’article 32 de la loi du 6 janvier 1978.</li>
        </ul>
      </Typography>

      <Typography paragraph>
        <strong>9 – Nous contacter</strong>
        <br />
        La protection des données personnelles est un droit fondamental, et vous pouvez à tout moment contacter notre Délégué à la Protection des données par email via notre formulaire de contact. Cependant, nous nous réservons la possibilité de vous demander de justifier de votre identité́ et de la pertinence de votre demande.
        <br />
        Si vous malgré notre réponse, vous n’étiez pas satisfait, vous avez la possibilité de contacter directement la Commission Nationale Informatique et Liberté (CNIL) à l’adresse suivante https://www.cnil.fr/fr/vous-souhaitez-contacter-la-cnil.
      </Typography>

      <Typography paragraph>
        <strong>10 – Évolution du périmètre du groupe</strong>
        <br />
        Si nous sommes rachetés ou nous fusionnons avec une autre société, ou s’il y a une restructuration du groupe, il y aura un transfert de vos données personnelles vers la nouvelle entité. Si cette hypothèse devait se concrétiser, nous appliquerions des règles identiques à celles énoncées dans la présente Politique à vos données personnelles ainsi que vos droits vis-à-vis de l’utilisation de celle-ci.
      </Typography>

      <Typography paragraph>
        <strong>11 – Modification de notre Politique de Confidentialité</strong>
        <br />
        Si une modification significative de notre Politique de Confidentialité devait s’imposer, nous vous en informerions par tout moyen utile, en vous rappelant la possibilité de supprimer vos données si les changements apportés n’étaient malheureusement pas en mesure de vous satisfaire.
      </Typography>

      <Typography paragraph>
        <strong>12 – Utilisation des cookies</strong>
        <br />
        Nous vous rappelons que c’est dans notre Politique de gestion des cookies dédiée que vous trouverez le détail de vos droits sur vos données personnelles et leurs gestions dans le cadre des fonctionnalités de notre site et de son mode de fonctionnement.
      </Typography>
    </Container>
  );
}

export default Confidentiality;
