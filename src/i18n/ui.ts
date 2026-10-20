export const languages = { es: "Español", en: "English" } as const;
export const defaultLang = "es";
export type Lang = keyof typeof languages;

export const ui = {
  es: {

    // Meta
    "meta.title": "Ibrahim Almeyda — Desarrollador Full Stack",
    "meta.description": "Portafolio de desarrollador full stack",

    // Header
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",
    "nav.main": "Principal",
    "nav.openMenu": "Abrir menú",
    "nav.closeMenu": "Cerrar menú",
    "nav.theme": "Cambiar tema",
    "nav.language": "Idioma",
    "nav.soon": "Próximamente",

    // Hero
    "hero.badge": "PORTAFOLIO 2026",
    "hero.role": "Desarrollador Full Stack",
    "hero.h1": "Construyo software que se usa de verdad",
    "hero.lead": "Aplicaciones web con React, Node y PostgreSQL. Convierto procesos manuales en herramientas que la gente usa todos los días.",
    "hero.cta1": "Ver proyectos ↓",
    "hero.cta2": "Contacto",
    "spec.aria": "Resumen",
    "spec.head": "FICHA",
    "spec.name": "Nombre",
    "spec.role": "Rol",
    "spec.rolev": "Full Stack Developer",
    "spec.loc": "Ubicación",
    "spec.locv": "Chincha, Perú",
    "spec.stack": "Stack",
    "spec.status": "Estado",
    "spec.statusv": "Trabajemos juntos",

    // Projects
    "proj.label": "[01] Proyectos",
    "proj.title": "Archivo de proyectos",
    "proj.demo": "Ver demo ↗",
    "proj.code": "Código ↗",
    "proj.year": "Año",
    "proj.role": "Rol",
    "proj.status": "Estado",
    "proj.stack": "Stack",
    "proj.more": "¿Quieres ver más?",
    "proj.github": "Ver todos mis proyectos en GitHub ↗",

    // About
    "about.label": "[02] Sobre mí",
    "about.title": "Quién está detrás del código",
    "about.p1": "Soy desarrollador full stack y construyo aplicaciones web de punta a punta: desde la base de datos y la API hasta una interfaz clara y fácil de usar. Trabajo con JavaScript, Node y React, y me gusta entender el problema de fondo antes de escribir la primera línea de código.",
    "about.p2": "Mi meta es dedicarme al desarrollo web fullstack profesional y crecer hacia la ingeniería de IA, apoyándome en el desarrollo con agentes.",
    "about.fact.loc": "Ubicación",
    "about.fact.locv": "Chincha, Perú",
    "about.fact.lang": "Idiomas",
    "about.fact.langv": "Español (nativo) · Inglés (B1)",
    "about.fact.avail": "Disponibilidad",
    "about.fact.availv": "Empleo fijo y proyectos freelance",
    "about.hard": "Hard skills",
    "about.hard.frontend": "Frontend",
    "about.hard.backend": "Backend",
    "about.hard.backend.rest": "APIs REST",
    "about.hard.data": "Datos",
    "about.hard.tools": "Herramientas",
    "about.soft": "Soft skills",
    "about.soft1.t": "Traducir necesidades",
    "about.soft1.d": "Convierto lo que pide un área no técnica en requisitos claros.",
    "about.soft2.t": "Autonomía",
    "about.soft2.d": "Defino el problema, propongo una solución y la llevo hasta producción.",
    "about.soft3.t": "Aprendizaje continuo",
    "about.soft3.d": "Incorporo herramientas nuevas rápido, también de IA.",
    "about.soft4.t": "Orden y documentación",
    "about.soft4.d": "Código y decisiones que otra persona puede entender.",

    // Contact
    "contact.label": "[03] Contacto",
    "contact.title": "¿Tienes algo en mente? Hablemos",
    "contact.lead": "Cuéntame qué necesitas y te respondo con una propuesta de cómo lo construiría.",
    "contact.write": "Escribir un correo",
    "contact.copy": "Copiar correo",
    "contact.copied": "Copiado ✓",
    "contact.copyFail": "Selecciona y copia",

    // Footer
    "footer.copy": "2026 Ibrahim Almeyda · Chincha, Perú",
    "footer.top": "Volver arriba ↑",
  },
  en: {
    // Meta
    "meta.title": "Ibrahim Almeyda — Full Stack Developer",
    "meta.description": "Full stack developer portfolio",

    // Header
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.main": "Main",
    "nav.openMenu": "Open menu",
    "nav.closeMenu": "Close menu",
    "nav.theme": "Toggle theme",
    "nav.language": "Language",
    "nav.soon": "Coming soon",

    // Hero
    "hero.badge": "PORTFOLIO 2026",
    "hero.role": "Full Stack Developer",
    "hero.h1": "I build software people actually use",
    "hero.lead": "Web apps with React, Node and PostgreSQL. I turn manual processes into tools people use every day.",
    "hero.cta1": "View projects ↓",
    "hero.cta2": "Contact",
    "spec.aria": "Summary",
    "spec.head": "PROFILE",
    "spec.name": "Name",
    "spec.role": "Role",
    "spec.rolev": "Full Stack Developer",
    "spec.loc": "Location",
    "spec.locv": "Chincha, Peru",
    "spec.stack": "Stack",
    "spec.status": "Status",
    "spec.statusv": "Let's work together",

    // Projects
    "proj.label": "[01] Projects",
    "proj.title": "Project archive",
    "proj.demo": "View demo ↗",
    "proj.code": "Code ↗",
    "proj.year": "Year",
    "proj.role": "Role",
    "proj.status": "Status",
    "proj.stack": "Stack",
    "proj.more": "Want to see more?",
    "proj.github": "See all my projects on GitHub ↗",

    // About
    "about.label": "[02] About",
    "about.title": "Who is behind the code",
    "about.p1": "I'm a full stack developer and I build web applications end to end: from the database and the API to a clear, easy-to-use interface. I work with JavaScript, Node and React, and I like to understand the underlying problem before writing the first line of code.",
    "about.p2": "My goal is to work professionally in full stack web development and grow toward AI engineering, leaning on agent-assisted development.",
    "about.fact.loc": "Location",
    "about.fact.locv": "Chincha, Peru",
    "about.fact.lang": "Languages",
    "about.fact.langv": "Spanish (native) · English (B1)",
    "about.fact.avail": "Availability",
    "about.fact.availv": "Full-time roles and freelance projects",
    "about.hard": "Hard skills",
    "about.hard.frontend": "Frontend",
    "about.hard.backend": "Backend",
    "about.hard.backend.rest": "REST APIs",
    "about.hard.data": "Data",
    "about.hard.tools": "Tools",
    "about.soft": "Soft skills",
    "about.soft1.t": "Translating needs",
    "about.soft1.d": "I turn what a non-technical team asks for into clear requirements.",
    "about.soft2.t": "Autonomy",
    "about.soft2.d": "I define the problem, propose a solution and take it all the way to production.",
    "about.soft3.t": "Continuous learning",
    "about.soft3.d": "I pick up new tools quickly, including AI ones.",
    "about.soft4.t": "Order and documentation",
    "about.soft4.d": "Code and decisions that someone else can understand.",

    // Contact
    "contact.label": "[03] Contact",
    "contact.title": "Got something in mind? Let's talk",
    "contact.lead": "Tell me what you need and I'll reply with a proposal for how I'd build it.",
    "contact.write": "Send an email",
    "contact.copy": "Copy email",
    "contact.copied": "Copied ✓",
    "contact.copyFail": "Select and copy",

    // Footer
    "footer.copy": "2026 Ibrahim Almeyda · Chincha, Peru",
    "footer.top": "Back to top ↑",
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
