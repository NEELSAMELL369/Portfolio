"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export default function Pagination({
  page,
  totalPages,
  onChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-16 flex flex-col items-center gap-6">
      {/* Info */}

      <p className="text-sm text-gray-400">
        Page <span className="text-primary font-semibold">{page}</span> of{" "}
        <span className="text-primary font-semibold">{totalPages}</span>
      </p>

      {/* Buttons */}

      <div className="flex items-center gap-2">
        {/* Previous */}

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ y: -2 }}
          disabled={page === 1}
          onClick={() => onChange(page - 1)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-primary disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft size={18} />
        </motion.button>

        {/* Page Numbers */}

        {Array.from({ length: totalPages }).map((_, index) => {
          const current = index + 1;

          return (
            <motion.button
              key={current}
              whileTap={{ scale: 0.95 }}
              whileHover={{ y: -2 }}
              onClick={() => onChange(current)}
              className={`h-11 w-11 rounded-xl transition

                ${
                  page === current
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "border border-white/10 bg-white/5 hover:border-primary"
                }
              `}
            >
              {current}
            </motion.button>
          );
        })}

        {/* Next */}

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ y: -2 }}
          disabled={page === totalPages}
          onClick={() => onChange(page + 1)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-primary disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronRight size={18} />
        </motion.button>
      </div>
    </div>
  );
}
