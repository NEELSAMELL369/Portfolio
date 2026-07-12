"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { projects } from "@/contents/projects";
import ProjectsHeader from "@/components/projects/ProjectsHeader";
import SearchBar from "@/components/projects/SearchBar";
import FilterTabs from "@/components/projects/FilterTabs";
import ProjectCard from "@/components/projects/ProjectCard";
import Pagination from "@/components/projects/Pagination";

const filters = ["All", "Full Stack", "Frontend", "Backend"];

const ITEMS_PER_PAGE = 6;

export default function ProjectsPage() {
  const [selected, setSelected] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const category = selected === "All" || project.category === selected;

      const keyword =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase());

      return category && keyword;
    });
  }, [selected, search]);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  const currentProjects = filteredProjects.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  return (
    <main className="relative min-h-screen overflow-hidden py-16">
      {/* Background */}

      <div className="absolute left-0 top-0 w-72 h-72 rounded-full bg-primary/10 blur-[100px]" />

      <div className="absolute right-0 bottom-0 w-72 h-72 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="container relative max-w-7xl mx-auto px-12">
        <ProjectsHeader />

        <div className="mt-8 flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
          <FilterTabs
            filters={filters}
            selected={selected}
            onChange={(value) => {
              setSelected(value);
              setPage(1);
            }}
          />

          <SearchBar
            value={search}
            onChange={(value) => {
              setSearch(value);
              setPage(1);
            }}
          />
        </div>

        <motion.div
          layout
          className="grid mt-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {currentProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

        {currentProjects.length === 0 && (
          <p className="text-center text-gray-400 text-sm mt-16">
            No projects match your search.
          </p>
        )}

        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </div>
    </main>
  );
}
