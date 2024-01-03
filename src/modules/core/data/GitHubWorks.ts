const Langs = {
  js: "JavaScript",
  ts: "TypeScript",
  css: "CSS",
  html: "HTML",
  other: "Other",
};

const Colors = {
  js: "var(--color-js)",
  ts: "var(--color-ts)",
  css: "var(--color-css)",
  html: "var(--color-html)",
  other: "var(--color-other)",
};

import Booki from "../assets/projects/booki.webp";
import Creel from "../assets/projects/creel.webp";
import CustomerManager from "../assets/projects/customer-manager.webp";
import Dater from "../assets/projects/dater.webp";
import Ilfaitpasbeau from "../assets/projects/ilfaitpasbeau.webp";
import Infiboost from "../assets/projects/infiboost.webp";
import Kasa from "../assets/projects/kasa.webp";
import Ohmyfood from "../assets/projects/ohmyfood.webp";
import Thecookingfrench from "../assets/projects/thecookingfrench.webp";

export const GitHubWorksData = [
  {
    id: 1,
    thumbnail: Dater,
    homepage: "",
    slug: "dater",
    description:
      "Application réalisée pour une plateforme d'esport, cherchant à apporter un petit plus à leurs utilisateurs ! Il s'agit d'une appliaction de Dating comme Tinder mais pour des coéquipiers Counter-Strike: 2",
    title: "Dater",
    markdown: `Application réalisée pour une plateforme d'esport, cherchant à apporter un petit plus à leurs utilisateurs !\r\nIl s'agit d'une appliaction de Dating comme Tinder mais pour des coéquipiers Counter-Strike: 2\r\n\r\n# Cahier des charges\r\n\r\n- Carte blanche sur l'UI\\*\\*\r\n- Un framwork javascript évolutif\r\n- Responsive (Mobile First)\r\n\r\n# Initialisation et Réalisation\r\n\r\n### Frontend\r\n\r\n- Initialisation avec [ViteJs](https://vitejs.dev/)\r\n- Utilisation de CSS3 natif pour l'ensemble de l'UI\r\n- React + TypeScript\r\n- Framer Motion\r\n- Amazon AWS\r\n\r\n### Backend\r\n\r\n- Express\r\n- Supabase PostgreSQL\r\n\r\n# Deadline\r\n\r\n6 mois maximum\r\n\r\n# Bilan\r\n\r\nProjet intéressant, complexe car intégration de SteamAuth en OpenID et récupération des utilisateurs de la plateforme\r\n`,
    icon: "🤝",
    date: "15 décembre 2023",
    languages: [
      {
        lang: Langs.ts,
        color: Colors.ts,
        pourcent: 77.9,
      },
      {
        lang: Langs.css,
        color: Colors.css,
        pourcent: 20.4,
      },
      {
        lang: Langs.js,
        color: Colors.js,
        pourcent: 1.5,
      },
      {
        lang: Langs.html,
        color: Colors.html,
        pourcent: 0.2,
      },
    ],
  },
  {
    id: 2,
    thumbnail: Kasa,
    homepage: "",
    slug: "oc-kasa",
    description: "Projet de formation numéro 7 - Développeur Web",
    title: "Kasa",
    markdown: `Projet de formation numéro 7 - Développeur Web\r\n\r\n# Cahier des charges\r\n\r\n- Maquette [Figma](https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/ARCHIVE-UI-Design-Kasa-FR?type=design&node-id=0-1&mode=design&t=BGx6MXoux8WTtp6z-0)\r\n- Create React App\r\n- React Router\r\n- Responsive\r\n  > \\*\\* L'utilisation de Sass est un plus.\r\n\r\n# Initialisation et Réalisation\r\n\r\n### Frontend\r\n\r\n- Initialisation avec CRA\r\n- Utilisation de CSS3 natif pour l'ensemble de l'UI 'je n'ai pas utlisé Sass)\r\n- ReactJs\r\n\r\n### Backend\r\n\r\n- API REST\r\n\r\n# Deadline\r\n\r\n3 jours\r\n\r\n# Bilan\r\n\r\nProjet relativement simple, bien que l'utilsiation de Create React App m'ait empéché le deploiment masi pas de panique, projet validé !\r\n`,
    icon: "🏨",
    date: "6 décembre 2023",
    languages: [
      {
        lang: Langs.js,
        color: Colors.js,
        pourcent: 55.7,
      },
      {
        lang: Langs.css,
        color: Colors.css,
        pourcent: 42.8,
      },
      {
        lang: Langs.html,
        color: Colors.html,
        pourcent: 1.5,
      },
    ],
  },
  {
    id: 3,
    thumbnail: Infiboost,
    homepage: "https://infiboost.fr",
    slug: "infiboost",
    description:
      "Infiboost.fr est un service de boosting. Que ce soit pour des vues, des likes, ou même des boost serveurs Discord",
    title: "InfiBoost",
    markdown: `Infiboost.fr est un service de boosting. Que ce soit pour des vues, des likes, ou même des boost serveurs Discord\r\n\r\n# Cahier des charges\r\n\r\n- Carte blanche sur l'UI\\*\\*\r\n- Un framwork javascript évolutif\r\n- Une interface admin facile à utiliser\r\n- Internationalisation\r\n- Responsive\r\n  > \\*\\* UI réalisé à partir de cette maquette [Dribbble](https://dribbble.com/shots/20300839-Space-Web-3-0-Landing-Page-Design)\r\n\r\n# Initialisation et Réalisation\r\n\r\n### Frontend\r\n\r\n- Initialisation avec [ViteJs](https://vitejs.dev/)\r\n- Utilisation de CSS3 natif pour l'ensemble de l'UI\r\n- React + TypeScript\r\n- Apollo GraqphQL\r\n- Framer Motion\r\n- i18n-next\r\n- Vercel pour le déploiment\r\n\r\n### Backend\r\n\r\n- Strapi TypeScript\r\n- GraphQL\r\n- Debian + Apache sur VPS\r\n\r\n# Deadline\r\n\r\nJe n'avais qu'une semaine pour réaliser ce projet. Livré dans les temps !\r\n\r\n# Bilan\r\n\r\nProjet relativement simple, bien que long à cause de l'utilisation de CSS3 Natif (sans utiliser de framework tel que Tailwind)\r\n`,
    icon: "🚀",
    date: "7 décembre 2023",
    languages: [
      {
        lang: Langs.ts,
        color: Colors.ts,
        pourcent: 63.8,
      },
      {
        lang: Langs.css,
        color: Colors.css,
        pourcent: 34,
      },
      {
        lang: Langs.html,
        color: Colors.html,
        pourcent: 1.8,
      },
      {
        lang: Langs.js,
        color: Colors.js,
        pourcent: 0.4,
      },
    ],
  },
  {
    id: 4,
    thumbnail: CustomerManager,
    homepage: "",
    slug: "customers-manager",
    description:
      "Application réalisée pour une entreprise de création et livraisons de pains et viennoiseries pour les écoles et ehpad. C'est un gestionnaire de clients/employés, avec intégration du suivit des commandes, des appels clients, etc.. ainsi que le suivit des employés (fihces de paies, remarques, absences, etc..)",
    title: "Customer Manager",
    markdown: `Application réalisée pour une entreprise de création et livraisons de pains et viennoiseries pour les écoles et ehpad.\r\nC'est un gestionnaire de clients/employés, avec intégration du suivit des commandes, des appels clients, etc.. ainsi que le suivit des employés (fihces de paies, remarques, absences, etc..)\r\n\r\n# Cahier des charges\r\n\r\n- Carte blanche sur l'UI\\*\\*\r\n- Un framwork javascript évolutif\r\n- Une interface admin facile à utiliser\r\n- Responsive (Mobile First)\r\n\r\n# Initialisation et Réalisation\r\n\r\n### Frontend\r\n\r\n- Initialisation avec [ViteJs](https://vitejs.dev/)\r\n- Utilisation de CSS3 natif pour l'ensemble de l'UI\r\n- React + TypeScript\r\n- Framer Motion\r\n- FireHosting pour le déploiement\r\n\r\n### Backend\r\n\r\n- Firebase 10\r\n\r\n# Deadline\r\n\r\nAucune Deadline, l'entreprise n'étant pas encore en activité\r\n\r\n# Bilan\r\n\r\nProjet relativement simple,\r\n`,
    icon: "💼",
    date: "8 décembre 2023",
    languages: [
      {
        lang: Langs.js,
        color: Colors.js,
        pourcent: 41.7,
      },
      {
        lang: Langs.ts,
        color: Colors.ts,
        pourcent: 34.4,
      },
      {
        lang: Langs.css,
        color: Colors.css,
        pourcent: 23.5,
      },
      {
        lang: Langs.html,
        color: Colors.html,
        pourcent: 0.4,
      },
    ],
  },
  {
    id: 5,
    thumbnail: Creel,
    homepage: "https://creel.gg",
    slug: "creelgg",
    description:
      "Creel.gg est un projet personnel de créations de tournois Counter-Strike: 2 avec Anticheat Client et récomposens sous forme de Magasin. Le projet est toujours en cours de développement et pas déployé.",
    title: "creel.gg",
    markdown: `Creel.gg est un projet personnel de créations de tournois Counter-Strike: 2 avec Anticheat Client et récomposens sous forme de Magasin.\r\nLe projet est toujours en cours de développement et pas déployé.\r\n\r\n# Cahier des charges\r\n\r\n- Carte blanche sur l'UI\r\n- Un framwork javascript évolutif\r\n- Un dashboard pour le staff\r\n- Internationalisation\r\n- Un Client Desktop\r\n\r\n# Initialisation et Réalisation\r\n\r\n### Frontend\r\n\r\n- Initialisation avec [ViteJs](https://vitejs.dev/)\r\n- Utilisation de CSS3 natif pour l'ensemble de l'UI\r\n- React + TypeScript\r\n- Apollo GraqphQL\r\n- Framer Motion\r\n- i18n-next\r\n\r\n### Backend\r\n\r\n- Express\r\n- GraphQL\r\n- Firebase v10\r\n- Websocket\r\n- Amazon AWS\r\n\r\n# Deadline\r\n\r\nAucune deadline\r\n\r\n# Bilan\r\n\r\nProjet très complexe car il comporte pleins d'aspects du web qui demandent d'être attentif !\r\nE-commerce, Creation et Automatisation de matchs, utilisation d'API, intégration d'un anti-triche...\r\n`,
    icon: "🏆",
    date: "2 novembre 2023",
    languages: [
      {
        lang: Langs.ts,
        color: Colors.ts,
        pourcent: 68.6,
      },
      {
        lang: Langs.css,
        color: Colors.css,
        pourcent: 27.2,
      },
      {
        lang: Langs.js,
        color: Colors.js,
        pourcent: 3.9,
      },
      {
        lang: Langs.other,
        color: Colors.other,
        pourcent: 0.3,
      },
    ],
  },
  {
    id: 6,
    thumbnail: Thecookingfrench,
    homepage: "https://www.thecookingfrench.com",
    slug: "the-cooking-french",
    description:
      "thecookingfrench.com est une entreprise Espagnole de livraison de fast food.",
    title: "The Cooking French",
    markdown: `thecookingfrench.com est une entreprise Espagnole de livraison de fast food.\r\n\r\n# Cahier des charges\r\n\r\n- Carte blanche sur l'UI\\*\\*\r\n- Un framwork javascript évolutif\r\n- Internationalisation\r\n- Responsive\r\n  > \\*\\* UI réalisé à partir d'une maquette Dribbble\r\n\r\n# Initialisation et Réalisation\r\n\r\n### Frontend\r\n\r\n- Initialisation avec Create React App\r\n- Utilisation de CSS3 natif pour l'ensemble de l'UI\r\n- Reactjs\r\n- Framer Motion\r\n- i18n-next\r\n- Vercel pour le déploiment\r\n\r\n### Backend\r\n\r\nPas de Backend\r\n\r\n# Deadline\r\n\r\n1 mois\r\n\r\n# Bilan\r\n\r\nProjet relativement simple et intéressant notamment pour le système de wishlist\r\n`,
    icon: "🍔",
    date: "3 novembre 2023",
    languages: [
      {
        lang: Langs.js,
        color: Colors.js,
        pourcent: 79.7,
      },
      {
        lang: Langs.css,
        color: Colors.css,
        pourcent: 17.1,
      },
      {
        lang: Langs.html,
        color: Colors.html,
        pourcent: 3.2,
      },
    ],
  },
  {
    id: 7,
    thumbnail: Ohmyfood,
    homepage: "https://oc-oh-my-food.vercel.app",
    slug: "oc-ohmyfood",
    description: "Projet de formation numéro 3 - Développeur Web",
    title: "OhMyFood",
    markdown: `Projet de formation numéro 3 - Développeur Web\r\n\r\n# Cahier des charges\r\n\r\n- Maquette [Figma](<[https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/ARCHIVE-UI-Design-Kasa-FR?type=design&node-id=0-1&mode=design&t=BGx6MXoux8WTtp6z-0](https://www.figma.com/file/t4449fzDnwGYmzuwQdu87V/Maquettes-Ohmyfood-(mobile-et-desktop)?type=design&node-id=0-1&mode=design)>)\r\n- HTML\r\n- CSS\r\n- Responsive\r\n  > \\*\\* L'utilisation de Sass est un plus.\r\n\r\n# Initialisation et Réalisation\r\n\r\n### Frontend\r\n\r\n- HTML\r\n- Utilisation de CSS3 natif pour l'ensemble de l'UI 'je n'ai pas utlisé Sass)\r\n\r\n### Backend\r\n\r\nPas de Backend\r\n\r\n# Deadline\r\n\r\n3 jours\r\n\r\n# Bilan\r\n\r\nProjet relativement simple d'integration.\r\n`,
    icon: "🦞",
    date: "1 décembre 2023",
    languages: [
      {
        lang: Langs.html,
        color: Colors.html,
        pourcent: 70.1,
      },
      {
        lang: Langs.css,
        color: Colors.css,
        pourcent: 29.9,
      },
    ],
  },
  {
    id: 8,
    thumbnail: Booki,
    homepage: "https://oc-booki.vercel.app",
    slug: "oc-booki",
    description: "Projet de formation numéro 2 - Developpeur Web",
    title: "Booki",
    markdown: `Projet de formation numéro 2 - Developpeur Web\r\n\r\n# Cahier des charges\r\n\r\n- Maquette [Figma](<https://www.figma.com/file/r9YJyUkpVdrxzBBKGH7reY/Maquettes-Booki-(desktop%2C-mobile%2C-tablette)?type=design&node-id=3-0&mode=design&t=j6CIdvbon3hRlPC8-0>) en Desktop First\r\n- HTML\r\n- CSS\r\n- Responsive\r\n  > Pas de Javascript !\r\n\r\n# Initialisation et Réalisation\r\n\r\n### Frontend\r\n\r\n- HTML Sémantique\r\n- CSS3\r\n\r\n### Backend\r\n\r\nPas de Backend\r\n\r\n# Deadline\r\n\r\n3 jours\r\n\r\n# Bilan\r\n\r\nProjet simple d'intégration\r\n`,
    icon: "🛫",
    date: "8 décembre 2023",
    languages: [
      {
        lang: Langs.html,
        color: Colors.html,
        pourcent: 53.6,
      },
      {
        lang: Langs.css,
        color: Colors.css,
        pourcent: 46.4,
      },
    ],
  },
  {
    id: 9,
    thumbnail: Ilfaitpasbeau,
    homepage: "",
    slug: "ilfaitpasbeau",
    description: "Projet personnel d'application Météo",
    title: "Il fait pas beau",
    markdown: `Projet personnel d'application Météo\r\n\r\n# Cahier des charges\r\n\r\n- Carte blanche sur l'UI\\*\\*\r\n- Un framwork javascript évolutif\r\n- Responsive (Mobile First)\r\n\r\n# Initialisation et Réalisation\r\n\r\n### Frontend\r\n\r\n- Initialisation avec [ViteJs](https://vitejs.dev/)\r\n- Utilisation de CSS3 natif pour l'ensemble de l'UI\r\n- React + TypeScript\r\n- Framer Motion\r\n- FireHosting pour le déploiement\r\n\r\n### Backend\r\n\r\n- API Météo\r\n\r\n# Deadline\r\n\r\nAucune Deadline\r\n\r\n# Bilan\r\n\r\nJe voulais ma propre appli météo, c'est chose faite !\r\n`,
    icon: "🌦️",
    date: "2 décembre 2023",
    languages: [
      {
        lang: Langs.ts,
        color: Colors.ts,
        pourcent: 53.9,
      },
      {
        lang: Langs.css,
        color: Colors.css,
        pourcent: 43.7,
      },
      {
        lang: Langs.js,
        color: Colors.js,
        pourcent: 1.3,
      },
      {
        lang: Langs.html,
        color: Colors.html,
        pourcent: 1.1,
      },
    ],
  },
];
