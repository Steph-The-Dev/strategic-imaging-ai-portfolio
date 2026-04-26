# Strategic Imaging AI Portfolio

**REF.ID: SP-DS-2024**

A highly modular, high-performance professional portfolio built with [Astro](https://astro.build/) and [Tailwind CSS v4](https://tailwindcss.com/). 

This project serves as the technical specification and interactive resume for **Stephan Pfeiffer**. It showcases the strategic convergence of 20 years of visual domain expertise (TV Editor & Colorist) with modern applied data science and machine learning architectures.

## ✨ Key Features

- **Technical Blueprint Aesthetic**: A rigorous, data-driven design system featuring glassmorphism, mono-spaced typography, and custom dynamic grid backgrounds.
- **Component-Driven Architecture**: Fully refactored Astro architecture utilizing DRY principles (`Hero`, `CareerPhase`, `CaseStudies`, etc.) for high maintainability.
- **Modern Styling Engine**: Built on the ground-up rewrite of Tailwind CSS v4, leveraging native CSS `@theme` variables for lightning-fast builds without heavy JS configurations.
- **Accessibility (a11y) First**: Fully responsive across all devices, featuring properly sized touch targets, ARIA labels, and explicit focus states for keyboard navigation.
- **Native Dark Mode**: Seamless, toggleable dark/light mode utilizing CSS classes and `localStorage` persistence.

## 🚀 Getting Started

To run this project locally, clone the repository and install the dependencies:

```bash
# Install dependencies
npm install

# Start the local development server at localhost:4321
npm run dev
```

### Build & Production

To compile the application to highly optimized, static HTML/CSS files:

```bash
# Build the production site to the ./dist/ directory
npm run build

# Preview the production build locally
npm run preview
```

## 📂 Project Structure

The codebase is organized utilizing modern component architecture:

```text
/
├── public/                 # Static assets (images, geometry, favicons)
├── src/
│   ├── components/         # Reusable Astro UI components
│   │   ├── CareerPhase.astro
│   │   ├── CaseStudies.astro
│   │   ├── Contact.astro
│   │   ├── Expertise.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   └── Hero.astro
│   ├── layouts/            # Global page wrappers
│   │   └── Layout.astro    # Manages document head, fonts, and dark mode script
│   ├── pages/              # Routing
│   │   └── index.astro     # Main entry point orchestrating components
│   └── styles/             # Global stylesheets
│       └── global.css      # Tailwind v4 @theme configuration and custom CSS
├── tailwind.config.mjs     # (Optional) Tailwind backwards-compat config
└── astro.config.mjs        # Astro build and plugin configuration
```

## 🛠️ Technology Stack

- **Framework**: [Astro v6](https://astro.build/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography**: Inter (Sans), JetBrains Mono (Monospace)
- **Icons**: Google Material Symbols

---

*© 2024 S.Pfeiffer // Spec_ID: 104-DS-IMG*
