import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    featured: true,
    category: "Full Stack",

    title: "TakshaHub",

    description:
      "A modern school ERP platform with role-based dashboards for Admin, Teachers, Students, and Parents. Features authentication, attendance, exams, fee management, notices, and scalable architecture.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "JWT",
      "Tailwind CSS",
    ],

    mainTechnologies: ["Next.js", "Node.js", "PostgreSQL"],

    githubLink: "https://github.com/NEELSAMEL19/TakshaHub",

    demoLink: "https://takshahub.vercel.app/",

    image: "/takshahub-card.jpg",
  },

  {
    id: 2,
    featured: true,
    category: "Full Stack",

    title: "Expense Tracker",

    description:
      "Track income and expenses with analytics, Cloudinary receipt uploads, authentication, Excel export, interactive charts, and a responsive dashboard.",

    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "ExcelJS",
    ],

    mainTechnologies: ["React", "Node.js", "MongoDB"],

    githubLink: "https://github.com/NEELSAMEL19/Expense_Tracker_MERN",

    demoLink: "https://expense-tracker-one-delta-51.vercel.app/",

    image: "/expense-tracker-card.jpg",
  },
];
