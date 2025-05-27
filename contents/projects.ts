import { Project } from "@/types";


export const projects: Project[] = [
    {
        title: 'Task Manager App',
        description: 'MERN task manager with JWT auth, roles, subtasks, file uploads, multi-user tasks, and dashboards.',
        technologies: ["React", "Tailwind CSS", "React Router", "Moment.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "React Context", "JWT", "bcrypt", "Multer", "Recharts", "Vercel", "Render"],
        githubLink: 'https://github.com/NEELSAMEL23/Task_Manager',
        demoLink: 'https://task-manager-dusky-nine.vercel.app/',
        image: '/images/task-managment.avif'
    },
    {
        title: 'Portfolio Website',
        description: 'Responsive portfolio using Next.js App Router, with contact API, animations, and modern reusable components.',
        technologies: ['Next.js', 'React', 'Framer Motion', 'Heroicons', 'React Icons', 'Nodemailer', 'Dotenv'],
        githubLink: 'https://github.com/NEELSAMEL23/Portfolio',
        demoLink: 'https://task-manager-dusky-nine.vercel.app/',
        image: '/images/portfolio.jpg'

    },
    {
        title: 'Search Movies App',
        description: 'Responsive Movies Gallery app with filtering, sorting, and pagination using HTML, Tailwind CSS, and JavaScript.',
        technologies: ["HTML5","Tailwind CSS","JavaScript (ES6)","Firebase Realtime Database"],
        githubLink: 'https://github.com/NEELSAMEL23/Movies_Gallery',
        demoLink: 'https://neelsamel23.github.io/Movies_Gallery/',
        image: '/images/movie.png'
    },

];  