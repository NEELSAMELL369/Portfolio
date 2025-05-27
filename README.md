# Portfolio Website

Welcome to my personal portfolio website built with **Next.js (App Router)**.  
Showcasing my projects, skills, and contact information in a clean, modern design.

🔗 Live Demo: [https://portfolio-rdvb.vercel.app/](https://portfolio-rdvb.vercel.app/)

---

## Table of Contents

- [About](#about)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [Dependencies](#dependencies)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Contact](#contact)
- [License](#license)

---

## About

This portfolio project is built with Next.js using the new app router directory structure.  
It includes an API route to handle contact form submissions, reusable React components, and a responsive UI enhanced with animations.

---

## Folder Structure
Portfolio/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── api/
│   │   └── contact/
│   │       ├── mailer.ts
│   │       └── route.ts
│   ├── contact/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   └── layout.tsx
│   └── page.tsx
├── components/
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   └── Projects.tsx
├── contents/
│   └── projects.ts
├── context/
├── public/
│   └── favicon.ico
├── styles/
│   └── globals.css
├── types/
├── utils/
│   └── animations.ts
├── .gitignore
├── next.config.js
├── eslint.config.mjs
├── package.json
├── package-lock.json
└── README.md

## Features

- Built with Next.js using the new app router (`app/` directory).
- API route for handling contact form submissions (`app/api/contact`).
- Responsive design using CSS modules / global styles.
- Modular and reusable React components.
- Static content separated in `contents/` for easy updates.
- TypeScript support for better developer experience.
- Deployment ready on Vercel.

## Dependencies

### Runtime Dependencies

| Package            | Version  | Description                                         |
|--------------------|----------|-----------------------------------------------------|
| `next`             | 15.3.2   | React framework for SSR and static site generation |
| `react`            | 19.0.0   | UI library                                         |
| `react-dom`        | 19.0.0   | React DOM bindings                                 |
| `framer-motion`    | 12.12.2  | Animation library                                  |
| `@heroicons/react` | 2.2.0    | Heroicons SVG React components                     |
| `react-icons`      | 5.5.0    | Popular icon packs for React                       |
| `nodemailer`       | 7.0.3    | Email sending library for Node.js                  |
| `dotenv`           | 16.5.0   | Loads environment variables         

## Getting Started

Follow these steps to run the project locally:

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd Portfolio

2. **Install dependencies**
npm install

3. Create a .env.local file
  Add your environment variables (for example, email credentials for Nodemailer):
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
4.Run the development server
 npm run dev


🧾 License This project is licensed under the MIT License. See the LICENSE file for details.

🙋‍♂️ Author Neel Samel GitHub: @neelsamel23

