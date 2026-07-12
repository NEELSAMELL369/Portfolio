"use client";

import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="relative w-full lg:w-[260px]">
      <Search
        size={15}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search projects..."
        aria-label="Search projects"
        className="w-full rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-md py-1.5 px-3 text-sm outline-none transition focus:border-primary"
      />
    </div>
  );
}
