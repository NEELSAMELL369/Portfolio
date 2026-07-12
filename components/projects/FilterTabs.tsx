"use client";

import { motion } from "framer-motion";

interface Props {
  filters: string[];
  selected: string;
  onChange: (value: string) => void;
}

export default function FilterTabs({ filters, selected, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ y: -1 }}
          key={filter}
          onClick={() => onChange(filter)}
          aria-pressed={selected === filter}
          className={`rounded-lg px-3.5 py-1.5 text-sm transition cursor-pointer ${
            selected === filter
              ? "bg-primary text-white shadow-md shadow-primary/20"
              : "border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:border-primary"
          }`}
        >
          {filter}
        </motion.button>
      ))}
    </div>
  );
}
