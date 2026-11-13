export const languages = ["fr", "en"] as const;
export type Lang = (typeof languages)[number];

export const contactEmail = "contact@amandinecousin.com";

export const ui = {
  fr: {
    skipToContent: "Aller au contenu",
    homeLink: "Amandine Cousin, accueil",
    mainNav: "Navigation principale",
    footerNav: "Pied de page",
    breadcrumb: "Fil d'Ariane",
    switchLanguage: "EN – English version of this page",
    placeholder: "Emplacement",
    nav: { projects: "Projets", contact: "Contact" },
    draft: "Brouillon : cette page n'est pas encore publiée.",
    support: {
      label: "Support",
      title: "Support {name}",
      contactTitle: "Me contacter",
      contactButton: "Écrire au support",
      faqTitle: "Questions fréquentes",
      compatibilityTitle: "Compatibilité",
      seeAlso: "Voir aussi la",
      privacyLink: "politique de confidentialité",
      goToSupport: "Aller au support",
    },
    home: {
      title: "Amandine Cousin — Apps iPhone et Apple Watch",
      description:
        "Amandine Cousin fabrique des apps pour iPhone et Apple Watch et raconte comment elles naissent.",
      greeting: "Salut, moi c'est",
      lead: "Je fabrique des apps pour iPhone et Apple Watch, et je forme des développeur·ses iOS.",
      intro:
        "Ici, je raconte comment naissent mes apps : l'idée de départ, les choix en chemin, et ce que j'en retiens.",
      projectsTitle: "Mes apps",
      readStory: "Lire l'histoire de l'app",
      contactTitle: "Une idée qui te trotte dans la tête ?",
      contactLead: "Écris-moi",
    },
    project: {
      titleSuffix: "étude de cas",
      iconAlt: "Icône de l'app {name}",
      screenshots: "Captures d'écran",
      questionTitle: "Une question sur l'app ?",
      writeToMe: "M'écrire",
    },
    privacy: {
      label: "Confidentialité",
      title: "Politique de confidentialité",
      app: "Application",
      updated: "Dernière mise à jour",
      summaryTitle: "En bref",
      contents: "Sommaire",
    },
    status: {
      upcoming: "En préparation",
    },
  },
  en: {
    skipToContent: "Skip to content",
    homeLink: "Amandine Cousin, home",
    mainNav: "Main navigation",
    footerNav: "Footer",
    breadcrumb: "Breadcrumb",
    switchLanguage: "FR – Version française de cette page",
    placeholder: "Placeholder",
    nav: { projects: "Projects", contact: "Contact" },
    draft: "Draft: this page is not published yet.",
    support: {
      label: "Support",
      title: "{name} support",
      contactTitle: "Contact me",
      contactButton: "Email support",
      faqTitle: "Frequently asked questions",
      compatibilityTitle: "Compatibility",
      seeAlso: "See also the",
      privacyLink: "privacy policy",
      goToSupport: "Go to support",
    },
    home: {
      title: "Amandine Cousin — iPhone and Apple Watch apps",
      description:
        "Amandine Cousin builds apps for iPhone and Apple Watch and tells the story of how they come to life.",
      greeting: "Hi, I'm",
      lead: "I build apps for iPhone and Apple Watch, and I train iOS developers.",
      intro:
        "Here, I tell the story of how my apps come to life: the initial idea, the choices along the way, and what I take away from it.",
      projectsTitle: "My apps",
      readStory: "Read the app's story",
      contactTitle: "Got an idea stuck in your head?",
      contactLead: "Write to me",
    },
    project: {
      titleSuffix: "case study",
      iconAlt: "{name} app icon",
      screenshots: "Screenshots",
      questionTitle: "A question about the app?",
      writeToMe: "Write to me",
    },
    privacy: {
      label: "Privacy",
      title: "Privacy policy",
      app: "App",
      updated: "Last updated",
      summaryTitle: "In short",
      contents: "Contents",
    },
    status: {
      upcoming: "Coming soon",
    },
  },
} as const;

export function isLang(value: string | undefined): value is Lang {
  return languages.includes(value as Lang);
}

export function otherLang(lang: Lang): Lang {
  return lang === "fr" ? "en" : "fr";
}

/** Same page in another language: /fr/projects/x/ -> /en/projects/x/ */
export function switchLangPath(pathname: string, to: Lang): string {
  return pathname.replace(/^\/(fr|en)(?=\/|$)/, `/${to}`);
}
