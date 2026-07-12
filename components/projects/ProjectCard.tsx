"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  demoLink: string;
  technologies: string[];
  mainTechnologies?: string[];
  featured?: boolean;
}

interface Props {
  project: Project;
}

// Fallback count if a project doesn't define mainTechnologies
const MAIN_TECH_COUNT = 3;

export default function ProjectCard({ project }: Props) {
  const mainTechnologies =
    project.mainTechnologies ?? project.technologies.slice(0, MAIN_TECH_COUNT);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-md"
    >
      {/* IMAGE */}

      <div className="relative h-44 overflow-hidden bg-gray-100 dark:bg-white/5">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-top transition duration-500 group-hover:scale-105"
        />

        {/* Gradient - lightened so light-mode UI screenshots don't wash out */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />

        {/* Top row: Featured + Main technologies */}

        <div className="absolute left-2.5 right-2.5 top-2.5 flex items-start justify-between gap-2">
          {project.featured ? (
            <span className="rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-semibold text-white shadow-md">
              Featured
            </span>
          ) : (
            <span />
          )}

          <div className="flex flex-wrap justify-end gap-1">
            {mainTechnologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/20 bg-black/40 px-2 py-0.5 text-[10px] text-white backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Hover Button */}

        <motion.a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open live demo for ${project.title}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white opacity-0 shadow-lg transition group-hover:opacity-100"
        >
          <ArrowUpRight size={14} />
        </motion.a>
      </div>

      {/* CONTENT */}

      <div className="p-4">
        <h3 className="text-base font-semibold mb-1.5 group-hover:text-primary transition">
          {project.title}
        </h3>

        <p className="text-gray-500 dark:text-gray-400 text-xs leading-5 mb-3 line-clamp-2">
          {project.description}
        </p>

        {/* Buttons */}

        <div className="flex items-center justify-between text-xs pt-2 border-t border-gray-200 dark:border-white/10">
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 3 }}
            className="flex items-center gap-1.5 text-gray-600 dark:text-gray-300 transition hover:text-primary"
          >
            <FaGithub size={12} />
            Source
          </motion.a>

          <motion.a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 3 }}
            className="flex items-center gap-1.5 text-primary font-medium"
          >
            Live Demo
            <FaExternalLinkAlt size={10} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
