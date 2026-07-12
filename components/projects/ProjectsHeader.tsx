"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ProjectsHeader() {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary mb-4"
      >
        <Sparkles size={13} />
        Featured Work
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold"
      >
        My
        <span className="text-primary"> Projects</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-3 text-sm text-gray-500 dark:text-gray-400 leading-6"
      >
        A look at the full-stack applications I&apos;ve built end to end, from
        database and API design to the interfaces on top.
      </motion.p>
    </div>
  );
}
