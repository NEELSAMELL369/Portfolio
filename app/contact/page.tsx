"use client";

import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeIn,
  slideInLeft,
  slideInRight,
} from "@/utils/animations";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (status !== "idle") setStatus("idle");
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Glow - matches Hero */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="container mx-auto max-w-6xl px-6 py-10 relative">
        <motion.h1
          className="mb-8 text-center text-2xl md:text-3xl font-bold"
          {...fadeInUp}
        >
          Contact Me
        </motion.h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <motion.div className="space-y-5" {...slideInLeft}>
            <motion.div {...fadeInUp}>
              <h2 className="mb-2 text-lg font-semibold">Get in Touch</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-6">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your visions.
              </p>
            </motion.div>

            <motion.div
              className="space-y-3"
              variants={fadeIn}
              initial="initial"
              animate="animate"
            >
              <motion.div
                className="flex items-center gap-3"
                variants={fadeInUp}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaEnvelope className="h-4 w-4 text-primary" />
                <div>
                  <h3 className="text-sm font-semibold">Email</h3>

                  <a
                    href="mailto:neelsamel19@gmail.com"
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition"
                  >
                    neelsamel19@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-3"
                variants={fadeInUp}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaPhone className="h-4 w-4 text-primary" />
                <div>
                  <h3 className="text-sm font-semibold">Phone</h3>
                  <a
                    href="tel:+918999296121"
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition"
                  >
                    +91-8999296121
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-3"
                variants={fadeInUp}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaMapMarkerAlt className="h-4 w-4 text-primary" />
                <div>
                  <h3 className="text-sm font-semibold">Location</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111827]/80 backdrop-blur p-5 md:p-6"
            {...slideInRight}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4"
              variants={fadeIn}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={fadeInUp}>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#111827] px-3 py-1.5 text-sm focus:border-transparent focus:ring-2 focus:ring-primary transition"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#111827] px-3 py-1.5 text-sm focus:border-transparent focus:ring-2 focus:ring-primary transition"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#111827] px-3 py-1.5 text-sm focus:border-transparent focus:ring-2 focus:ring-primary transition"
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm text-white transition hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </motion.button>

              {status === "success" && (
                <motion.p
                  role="status"
                  aria-live="polite"
                  className="text-center text-sm text-green-500"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Message sent successfully!
                </motion.p>
              )}

              {status === "error" && (
                <motion.p
                  role="status"
                  aria-live="polite"
                  className="text-center text-sm text-red-500"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Failed to send message. Please try again.
                </motion.p>
              )}
            </motion.form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
