export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;

  technologies: string[];
  mainTechnologies: string[];

  featured: boolean;
  category: "Full Stack" | "Frontend" | "Backend";

  githubLink: string;
  demoLink: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "TakshaHub",
    description:
      "A modern school ERP platform with role-based dashboards for Admin, Teachers, Students, and Parents. Features authentication, attendance, exams, fee management, notices, and scalable architecture.",
    image: "/takshahub-card.jpg",

    featured: true,
    category: "Full Stack",

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
  },

  {
    id: 2,
    title: "Expense Tracker",
    description:
      "Track income and expenses with analytics, Cloudinary receipt uploads, authentication, Excel export, interactive charts, and a responsive dashboard.",
    image: "/expense-tracker-card.jpg",

    featured: true,
    category: "Full Stack",

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
  },
];
