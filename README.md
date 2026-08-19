<div align="center">

# 🎤 Master Aazam

### Music • Poetry • Reels • Podcast — Official Artist Website

**Master Aazam** is the official portfolio website for artist **Master Aazam** (Pasi Abhishek). Built as a modern single-page React application, the site brings together his music releases, published poetry books, short-form reels, podcast appearances, and creative projects — with a direct contact form for collaborations and bookings.

<p align="center">
  <a href="https://github.com/pasiabhishek/masteraazam">
    <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=greensock&logoColor=black" />
  <img src="https://img.shields.io/badge/Lenis-000000?style=flat-square" />
  <img src="https://img.shields.io/badge/EmailJS-FF6C37?style=flat-square" />
  <img src="https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
</p>

</div>

---

## Overview

Master Aazam is a multi-hyphenate creative — musician, poet, and content creator releasing music under **Aazamira Production World**. This site serves as his central online presence, replacing scattered links across social platforms with a single, cohesive destination for fans, collaborators, and clients.

Built with **React + Vite**, the site is fast, animated, and content-driven — pulling music, book, project, and reel data from structured JSON so new releases can be added without touching layout code.

---

## Features

### For Visitors / Fans

- Browse released music with cover artwork and embedded playback
- Discover published poetry books (Lekh by Aazam, Raagwaanjyotii)
- Watch featured reels and short-form video content
- Explore podcast appearances
- View past and ongoing creative projects
- Follow artist links (Instagram, LinkedIn, GitHub, YouTube)

### For Collaborators / Clients

- Direct contact form for project inquiries and bookings (powered by EmailJS)
- Quick access to email and location details
- Portfolio of past work to evaluate creative range

### Platform

- Smooth scrolling experience (Lenis)
- Scroll-based animations (GSAP + @gsap/react)
- Fully responsive design
- JSON-driven content (music, books, projects, reels)
- Modular, component-based architecture

---

## Technology Stack

| Category | Technologies |
|----------|--------------|
| Frontend | React 19, JavaScript (ES6), CSS3 |
| Build Tool | Vite |
| Animation | GSAP, @gsap/react |
| Scrolling | Lenis (smooth scroll) |
| Contact / Email | EmailJS |
| Content | Static JSON (Books, Songs, Projects, Reels) |
| Deployment | Vercel |
| Version Control | Git & GitHub |

---

## Project Structure

```text
masteraazam
│
└── frontend
    ├── public
    │   ├── images
    │   │   ├── Artwork          # Music cover artwork
    │   │   ├── books            # Book cover images
    │   │   └── project          # Project thumbnails
    │   └── music                 # Audio files (mp3)
    │
    ├── src
    │   ├── assets
    │   ├── component
    │   │   ├── auth              # Login / Signup
    │   │   ├── css               # Component-scoped stylesheets
    │   │   ├── data              # Books.json, Songs.json, Project.json, Reel.json
    │   │   ├── Nav.jsx
    │   │   ├── Hero.jsx
    │   │   ├── About.jsx
    │   │   ├── Book.jsx
    │   │   ├── Music.jsx
    │   │   ├── Reels.jsx
    │   │   ├── Podcast.jsx
    │   │   ├── Project.jsx
    │   │   ├── Contact.jsx
    │   │   └── Smooth-scrolling.jsx
    │   ├── App.jsx
    │   └── main.jsx
    │
    ├── index.html
    ├── vite.config.js
    └── package.json
```

---

## System Architecture

```
                    React + Vite (SPA)
                            │
                ┌───────────┼────────────┐
                ▼           ▼            ▼
         GSAP Animations  Lenis      Static JSON
          (scroll fx)   (smooth      (music, books,
                          scroll)     projects, reels)
                            │
                            ▼
                     EmailJS API
                  (Contact form → inbox)
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm

### Clone the Repository

```bash
git clone https://github.com/pasiabhishek/masteraazam.git
cd masteraazam/frontend
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file inside the `frontend` directory for the EmailJS-powered contact form:

```env
VITE_SERVICE_ID=your_emailjs_service_id
VITE_TEMPLATE_ID=your_emailjs_template_id
VITE_PUBLIC_KEY=your_emailjs_public_key
```

> ⚠️ Never commit real EmailJS keys to a public repository.

### Run the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Roadmap

- ✅ Hero & About sections
- ✅ Music showcase
- ✅ Book showcase
- ✅ Reels gallery
- ✅ Podcast section
- ✅ Project portfolio
- ✅ Contact form (EmailJS)
- 🔄 Spotify / streaming integration
- 🔄 Blog section
- 🔄 Admin dashboard for content updates
- 🔄 Progressive Web App (PWA)

---

## Live Demo

🌐 _Add deployed URL here_

---

## Author

**Master Aazam** (Pasi Abhishek)

Musician • Poet • Full Stack Developer

- **Instagram:** https://www.instagram.com/masteraazam
- **LinkedIn:** https://www.linkedin.com/in/pasi-abhishek/
- **GitHub:** https://github.com/pasiabhishek
- **Email:** hello@masteraazam.com

---

## Copyright

**Copyright © 2025 Pasi Abhishek (Master Aazam)**

**All Rights Reserved.**

This software, along with its source code, music, artwork, written content, and all associated assets, is the intellectual property of **Pasi Abhishek**.

Permission is **NOT** granted to use, copy, modify, merge, publish, distribute, sublicense, sell, or create derivative works from this software or its content without prior written permission from the copyright holder.

This repository is made publicly available **for viewing and reference purposes only**.

Unauthorized use, reproduction, distribution, or commercial use of this software or content, in whole or in part, may result in legal action.

---

<div align="center">

### Music. Poetry. Vision.

**Aazamira Production World**

© 2025 Pasi Abhishek. All Rights Reserved.

</div>
