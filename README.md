# WebHiveSphere

A highly modern, fully responsive Angular portfolio website with neon glassmorphism, smooth scrolling, reveal animations, and reusable standalone components.

## Stack

- Angular standalone components
- Tailwind CSS
- Angular Animations
- Responsive, accessible, single-page architecture

## Folder Structure

```text
webhivesphere/
├── angular.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
└── src/
    ├── app/
    │   ├── app.component.ts
    │   ├── app.config.ts
    │   ├── core/
    │   │   ├── portfolio-data.ts
    │   │   └── scroll-reveal.directive.ts
    │   └── components/
    │       ├── about/
    │       ├── background-visual/
    │       ├── contact/
    │       ├── hero/
    │       ├── loading-screen/
    │       ├── navbar/
    │       ├── projects/
    │       ├── section-heading/
    │       └── skills/
    ├── assets/
    ├── favicon.svg
    ├── index.html
    ├── main.ts
    └── styles.css
```

## Setup

1. Install dependencies.

```bash
npm install
```

2. Start the development server.

```bash
npm start
```

3. Build for production.

```bash
npm run build
```

## Notes

- The portfolio uses anchor-based smooth scrolling for navigation.
- Scroll reveal effects are handled with a reusable directive and CSS transitions.
- Angular Animations power the loading overlay and entry motion.
- The form is client-side only and can be wired to a backend or email service later.
