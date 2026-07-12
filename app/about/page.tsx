"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaTools,
  FaMapMarkerAlt,
  FaEnvelope,
  FaBriefcase,
} from "react-icons/fa";
import { fadeIn, fadeInDown, fadeInUp } from "@/utils/animations";

const skills = [
  { name: "React / Next.js", level: 90 },
  { name: "JavaScript / TypeScript", level: 85 },
  { name: "Node.js / Express.js", level: 82 },
  { name: "Redux", level: 78 },
  { name: "MongoDB / PostgreSQL", level: 78 },
  { name: "Tailwind CSS", level: 88 },
];

const services = [
  {
    icon: <FaCode />,
    title: "Frontend",
    text: "Responsive, reusable UI with React.js, Next.js and Tailwind CSS.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Backend",
    text: "REST APIs, JWT auth and scalable services with Node.js and Express.js.",
  },
  {
    icon: <FaDatabase />,
    title: "Database",
    text: "Data modeling with PostgreSQL, MongoDB and Prisma ORM.",
  },
  {
    icon: <FaTools />,
    title: "Tools",
    text: "Git, GitHub, Postman and cloud deployment on Vercel and Render.",
  },
];

const journey = [
  {
    title: "Bachelor of Science",
    period: "Jun 2020 – Nov 2024",
    place: "Dr. Babasaheb Ambedkar Marathwada University, Aurangabad",
  },
  {
    title: "Full Stack Web Development",
    period: "Jun 2024 – May 2025",
    place: "Masai School, Bengaluru",
  },
  {
    title: "Frontend Developer (React)",
    period: "Dec 2025 – Present",
    place: "The TFPL, Ahmedabad",
  },
];

const stats = [
  { value: "8+", title: "Months Experience" },
  { value: "2+", title: "Full Stack Projects" },
  { value: "2", title: "Dashboards in Production" },
  { value: "100%", title: "Responsive" },
];

export default function About() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute left-0 top-0 w-72 h-72 bg-primary/10 blur-[100px] rounded-full" />
      <div className="absolute right-0 bottom-0 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full" />

      <div className="container max-w-7xl mx-auto px-6">
        <motion.h2
          {...fadeInDown}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-5">
          {/* LEFT */}
          <motion.div
            {...fadeInUp}
            className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-md p-5 md:p-6"
          >
            <h3 className="text-lg font-semibold mb-3">Who am I?</h3>

            <p className="text-gray-600 dark:text-gray-400 text-sm leading-6 mb-4">
              Full Stack Developer with 8 months of professional experience
              building React.js applications, now working across the full stack
              with Node.js, Express.js, Next.js, Prisma, PostgreSQL, and
              MongoDB. Skilled in JavaScript, TypeScript, Redux, and REST API
              development, with a working knowledge of Java and Python.
              Currently building 2 dashboards in production at The TFPL.
            </p>

            <div className="space-y-2.5 text-sm">
              <div className="flex gap-3 items-center">
                <FaBriefcase className="text-primary text-sm" />
                <span>Frontend Developer (React) at The TFPL</span>
              </div>

              <div className="flex gap-3 items-center">
                <FaMapMarkerAlt className="text-primary text-sm" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>

              <div className="flex gap-3 items-center">
                <FaEnvelope className="text-primary text-sm" />
                <span>Open to new opportunities</span>
              </div>
            </div>
          </motion.div>

          {/* SKILLS */}
          <motion.div
            {...fadeIn}
            className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-md p-5 md:p-6"
          >
            <h3 className="text-lg font-semibold mb-4">Skills</h3>

            <div className="space-y-3">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1 text-sm">
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-gray-500 dark:text-gray-500">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="h-1.5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* SERVICES */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            What I Do
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <motion.div
                whileHover={{ y: -4 }}
                key={service.title}
                className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-md p-5"
              >
                <div className="text-primary text-2xl mb-3">{service.icon}</div>

                <h3 className="text-base font-semibold mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-6">
                  {service.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* TIMELINE */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            My Journey
          </h2>

          <div className="relative border-l-2 border-primary/40 ml-4 max-w-2xl mx-auto">
            {journey.map((item) => (
              <div className="mb-8 ml-8 relative" key={item.title}>
                <div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-primary" />

                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="text-primary text-sm">{item.period}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  {item.place}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* STATS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {stats.map((item) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              key={item.title}
              className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-md p-6 text-center"
            >
              <h2 className="text-3xl font-bold text-primary">{item.value}</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
