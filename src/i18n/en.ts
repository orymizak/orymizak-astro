/**
 * English translation file (EN).
 *
 * Contains all user-facing texts for the English version of the site.
 * The structure must match the ES file to ensure consistency across translations.
 */
export default {
  index: {
    indexTitle: "David Orymizak — Full-Stack Developer",
  },

  aboutMe: {
    title: "About me",
    desc1: "...",
    desc2: "...",
    img1: "test",
    img2: "test",
    img3: "test",
    img4: "test",
    techTitle: "Technologies used in this site",
    iconsCopyright: "Icons provided by Icons8",
  },

  about: {
    techTitle: "Technologies used in this site",
    iconsCopyright: "Icons provided by Icons8",
  },

  drawer: {
    name: "David Orymizak",
    projects: "Projects",
    contact: "Contact",
    about: "About me",
    home: "Home",
    drawer: "☰",
    cv: "My Resume",
    info: "Info",
  },

  drawerLinks: [
    { text: "Home", path: "/" },
    // { text: "About me", path: "/about" },
    // { text: "Projects", path: "/projects" },
    // { text: "My Resume", path: "/cv" },
    // { text: "Contact", path: "/contact" },
    // { text: "Info", path: "/info" },
  ],

  home: {
    title: "Hi, I'm David Orymizak",
    subtitle: "Full Stack Developer",
    subtitle2: "Minimal. Essential",
    subtitle3: "Under construction",
    contact: "orymizak@hotmail.com",
    cv: "Curriculum Vitae",
    download: "Download CV",
    contactheader: "Contact",
    contactemail: "Have a project or an opportunity? Let's talk",
    cvURL: "https://docs.google.com/document/d/1RU6d9yOLuYT_GMWQCitFke4sjEoECdJTJ-KzSbt-1Xg"
  },

  project: {
    title: "Projects",
    projects: [
      { title: "Project 1", description: "Sample description.", img: "/assets/images/test.jpeg" },
      { title: "Project 2", description: "Sample description.", img: "/assets/images/test.jpeg" },
      { title: "Project 3", description: "Sample description.", img: "/assets/images/test.jpeg" },
    ],
  },

  contact: {
    title: "Contact",
    emailPlaceholder: "Email",
    messagePlaceholder: "Your message",
    description: "Please include your name, your message, and any additional contact information you'd like to add...",
    sendButton: "Send"
  },

  footer: {
    copyright: "© 2025 David Orymizak",
    socialLinks: [
      { name: "LinkedIn", href: "#", color: "neon-blue" },
      { name: "GitHub", href: "#", color: "neon-green" },
      { name: "Twitter", href: "#", color: "neon-pink" },
    ],
  },

  META: {
    title: "David Orymizak - Full Stack Developer",
    description: "Professional portfolio of David Orymizak, showcasing projects, skills, and contact information.",
    keywords: "Full Stack, Developer, Portfolio, JavaScript, React, Node, Astro",
    author: "David Orymizak",
    robots: "index, follow",
    url: "https://orymizak.com",
    image: "/assets/images/hero-preview.png",
  },

  FAVICONS: {
    ico: "/favicon.ico",
    png16: "/favicon-16x16.png",
    png32: "/favicon-32x32.png",
    appleTouch: "/apple-touch-icon.png",
    android192: "/android-chrome-192x192.png",
    android512: "/android-chrome-512x512.png",
    manifest: "/manifest.json",
    themeColor: "#000000",
  },

  GOOGLE_FONTS: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
};
