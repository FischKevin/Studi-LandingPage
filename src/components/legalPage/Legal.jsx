import React from 'react';
import { Typography, Container, Link } from '@mui/material';

function Legal() {
  return (
    <Container maxWidth="full" sx={{ pt: 4,pb: 4, backgroundColor: 'black', color:'white' }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
        Mentions légales
      </Typography>

      {/* Éditeur et directeur de la publication */}
      <Typography paragraph>
        <strong>1 – Éditeur et directeur de la publication</strong><br />
        Le site studi-pressstarttofightcancer.netlify.app est édité par Kevin Fischer.<br />
        Vous pouvez nous joindre aux coordonnées indiquées sur la page studi-pressstarttofightcancer.netlify.app.<br />
        Le Directeur de la publication est Kevin Fischer.<br /><br />
        Le site (contenu) est hébergé par la société Netlify, sise 512 2nd Street, Suite 200 San Francisco, CA 94107 ; CIF : B87194171 ; contact par e-mail : <Link href="mailto:support@netlify.com" color="inherit">support@netlify.com</Link>.
      </Typography>

      {/* Conditions générales d'utilisation du site et des services proposés */}
      <Typography paragraph>
        <strong>2 – Conditions générales d’utilisation du site et des services proposés</strong><br />
        L’utilisation du site studi-pressstarttofightcancer.netlify.app implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site studi-pressstarttofightcancer.netlify.app sont donc invités à les consulter de manière régulière.
        <br /><br />
        Ce site internet est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par studi-pressstarttofightcancer.netlify.app, qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention. Le site studi-pressstarttofightcancer.netlify.app est mis à jour régulièrement par Kevin Fischer. De la même façon, les mentions légales peuvent être corrigées, modifiées ou mises à jour à tout moment sans préavis : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.
        <br /><br />
        Kevin Fischer ne peut être tenue pour responsable de la modification des dispositions administratives et juridiques survenant après leur publication sur le Site.
        <br /><br />
        Kevin Fischer décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le Site.
      </Typography>

      {/* Propriété intellectuelle */}
      <Typography paragraph>
        <strong>3 – Propriété intellectuelle</strong><br />
        Le site studi-pressstarttofightcancer.netlify.app constitue une œuvre de l’esprit protégée par les dispositions du Code de la Propriété Intellectuelle et des Réglementations Internationales applicables. Kevin Fischer est propriétaire de tous les droits de propriété intellectuelle qui y sont attachés et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons, y compris le droit de reproduction appartenant à Kevin Fischer.
        <br /><br />
        L’Utilisateur ne peut en aucune manière réutiliser, céder ou exploiter pour son propre compte tout ou partie des éléments ou travaux du site studi-pressstarttofightcancer.netlify.app. Toute utilisation, reproduction, représentation, totale ou partielle, sous quelque forme et par quelque moyen que ce soit, du Site ou de l’un quelconque de ses éléments, à des fins et dans des conditions autres que celles prévues à l’article L.122-5 du Code de la Propriété Intellectuelle est interdite, sauf autorisation expresse et préalable de Kevin Fischer. Par ailleurs, en vertu de l’article L. 342-1 du Code de la propriété intellectuelle, nous interdisons le téléchargement de la totalité ou d’une partie quantitativement substantielle de notre site par utilisation de robots ou de tout autre procédé d’extraction automatique. Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
      </Typography>

      <Typography paragraph>
        <strong>4 – Description des services fournis</strong><br />
        Le site internet studi-pressstarttofightcancer.netlify.app a pour objet de fournir une information concernant l’ensemble des activités de la société. Kevin Fischer s’efforce de fournir sur le site studi-pressstarttofightcancer.netlify.app des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des oublis, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
        <br /><br />
        Toutes les informations indiquées sur le site studi-pressstarttofightcancer.netlify.app sont données à titre indicatif, et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site studi-pressstarttofightcancer.netlify.app ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.
      </Typography>

      <Typography paragraph>
        <strong>5 – Limitations contractuelles sur les données techniques</strong><br />
        Le site utilise la technologie JavaScript. Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis à jour.
        <br /><br />
        L’objectif est d’apporter une prestation qui assure le meilleur taux d’accessibilité. L’hébergeur assure la continuité de son service 24 Heures sur 24, tous les jours de l’année. Il se réserve néanmoins la possibilité d’interrompre le service d’hébergement pour les durées les plus courtes possibles notamment à des fins de maintenance, d’amélioration de ses infrastructures, de défaillance de ses infrastructures ou si les Prestations et Services génèrent un trafic réputé anormal.
        <br /><br />
        Kevin Fischer et l’hébergeur ne pourront être tenus responsables en cas de dysfonctionnement du réseau Internet, des lignes téléphoniques ou du matériel informatique et de téléphonie lié notamment à l’encombrement du réseau empêchant l’accès au serveur.
        <br /><br />
        Kevin Fischer s’engage à sécuriser au mieux le site studi-pressstarttofightcancer.netlify.app, cependant sa responsabilité ne pourra être mise en cause si des données indésirables sont importées et installées sur son site à son insu.
      </Typography>

      <Typography paragraph>
        <strong>6 – Limitations de responsabilité</strong><br />
        Des espaces interactifs (espace contact ou commentaires) sont à la disposition des utilisateurs. Kevin Fischer se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données.
        <br /><br />
        Le cas échéant, Kevin Fischer se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie …).
        <br /><br />
        Kevin Fischer agit en tant qu’éditeur du site. Kevin Fischer est responsable de la qualité et de la véracité du Contenu qu’il publie.
        <br /><br />
        Kevin Fischer ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site studi-pressstarttofightcancer.netlify.app, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 5, soit de l’apparition d’un bug ou d’une incompatibilité.
      </Typography>

      <Typography paragraph>
        <strong>7 – CNIL et gestion des données personnelles</strong><br />
        D’une façon générale, vous pouvez visiter notre site sur Internet sans avoir à décliner votre identité et à fournir des informations personnelles vous concernant. Cependant, il est possible que le site sollicite parfois ces informations, notamment pour vous inscrire à l’évènement.
        <br /><br />
        Kevin Fischer est le responsable des traitements de données collectées sur le présent site. Vous trouverez l’ensemble des informations utiles sur la façon dont nous collectons et traitons vos données personnelles (type de données, finalité, destinataires, droits dont vous disposez conformément à la réglementation applicable…) dans la Politique de Confidentialité.
      </Typography>

      <Typography paragraph>
        <strong>8 – Liens hypertextes et cookies</strong><br />
        Le site studi-pressstarttofightcancer.netlify.app contient des liens hypertextes vers d’autres sites et dégage toute responsabilité à propos de ces liens externes ou des liens créés par d’autres sites vers studi-pressstarttofightcancer.netlify.app.
        <br /><br />
        Par ailleurs, la navigation sur le site studi-pressstarttofightcancer.netlify.app est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur. Vous trouverez l’ensemble des informations utiles à ce sujet (définition du « cookie », type de cookies utilisés, finalité, destinataires, droits dont vous disposez conformément à la réglementation applicable…) dans la Politique de de gestion des cookies.
      </Typography>

    </Container>
  );
}

export default Legal;
