import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-transparent">
      <div className="container mx-auto max-w-6xl px-6 py-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <Link href="/" className="text-lg font-bold text-primary">
              Neel Samel
            </Link>
            <p className="mt-1 text-xs text-gray-400">
              © {new Date().getFullYear()} Neel Samel. All rights reserved.
            </p>
          </div>

          <div className="flex gap-5">
            <a
              href="https://github.com/NEELSAMEL19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-primary"
            >
              <FaGithub className="h-4 w-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/neelsamel19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-primary"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>

            <a
              href="mailto:neelsamel19@gmail.com"
              className="text-gray-400 transition-colors hover:text-primary"
            >
              <FaEnvelope className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
