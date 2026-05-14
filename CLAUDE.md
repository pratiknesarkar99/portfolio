# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with React 18 and React Bootstrap. Single-page application with smooth navigation, animations, and integrated email functionality via EmailJS.

## Commands

```bash
npm start          # Dev server at http://localhost:3000
npm test           # Run tests with Jest
npm run build      # Production build to /build
npm run deploy     # Build and deploy to GitHub Pages
```

Backend server (optional, for email):
```bash
node server.js     # Express server on port 5000
```

## Architecture

**Tech Stack:** React 18, React Bootstrap 5, React Router v6 (with hash links), EmailJS, animate.css

**Main Entry:** `src/App.js` composes 9 section components in order:
- NavBar → Banner → Skills → Experience → Achievements → Projects → About → Contact → Footer

**Component Structure (`src/components/`):**
- Each section is a standalone component with its own logic
- Experience details are split into separate components (BentleySweExperienceDetails, BentleyInternExperienceDetails, CustomAIInternExperienceDetails)
- Projects use ProjectCard and ProjectDesc (modal) for showcase display
- Contact form uses EmailJS for client-side email sending

**Styling:** Global styles in `src/App.css` with custom Centra font family (3 weights in `src/assets/font/`). Dark theme (#121212 background).

**Assets:** Images and SVGs in `src/assets/img/`, resume files in `src/assets/resume/`

## External Services

- **EmailJS:** Contact form email delivery (service ID and public key in Contact.js)
- **GitHub Pages:** Deployment target (homepage in package.json)
- **Mailchimp:** Newsletter subscription integration
