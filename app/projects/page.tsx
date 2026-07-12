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
    const searchTerm = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        selected === "All" ||
        ("category" in project && project.category === selected);

      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm);

      return matchesCategory && matchesSearch;
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
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="container relative mx-auto max-w-7xl px-6 lg:px-12">
        <ProjectsHeader />

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
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
          className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {currentProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

        {currentProjects.length === 0 && (
          <p className="mt-16 text-center text-sm text-gray-400">
            No projects match your search.
          </p>
        )}

        {totalPages > 1 && (
          <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        )}
      </div>
    </main>
  );
}
