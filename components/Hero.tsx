"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { Rocket, ShieldCheck, Users, Download, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-14">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-lg font-medium mb-2">Hi, I&apos;m</p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Neel <span className="text-primary">Samel</span>
            </h1>

            <h2 className="text-primary text-xl font-semibold mt-2">
              Full Stack Developer
            </h2>

            <p className="mt-5 text-sm text-gray-500 dark:text-gray-400 leading-6 max-w-md">
              I build scalable web applications using modern technologies with
              clean UI, secure backend architecture, and smooth user
              experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <Link
                href="/Neel_Samel_Full_Stack_Developer_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm text-white transition hover:scale-105"
              >
                <Download size={15} />
                Download Resume
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-500 px-5 py-2.5 text-sm transition hover:border-primary hover:text-primary"
              >
                Contact Me
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/NEELSAMEL19"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <FaGithub size={20} className="hover:text-primary transition" />
              </a>

              <a
                href="https://linkedin.com/in/neelsamel19"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin
                  size={20}
                  className="hover:text-primary transition"
                />
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl" />

              {/* Ring */}
              <div className="absolute inset-0 scale-110 rounded-full border border-primary/30" />

              {/* Image */}
              <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-primary bg-gray-100 dark:bg-[#111827]">
                <Image
                  src="/profile.png"
                  alt="Neel Samel"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          <Card
            icon={<FaCode />}
            title="Clean Code"
            text="Maintainable and scalable architecture."
          />
          <Card
            icon={<Rocket size={18} />}
            title="Performance"
            text="Fast, optimized and responsive websites."
          />
          <Card
            icon={<ShieldCheck size={18} />}
            title="Secure"
            text="JWT Authentication and best practices."
          />
          <Card
            icon={<Users size={18} />}
            title="User Focused"
            text="Simple UI with excellent UX."
          />
        </div>
      </div>
    </section>
  );
}

function Card({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl flex items-center justify-between gap-3.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111827]/80 p-4 backdrop-blur transition hover:border-primary">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-lg text-primary">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-1">{title}</h3>

        <p className="text-gray-600 dark:text-gray-400 text-xs leading-5">
          {text}
        </p>
      </div>
    </div>
  );
}
