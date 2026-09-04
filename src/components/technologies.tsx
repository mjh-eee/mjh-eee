"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { SectionHeading } from "@/components/section-heading";
import { technologies } from "@/lib/content";

const iconMap: Record<string, { Icon: React.ComponentType<{ className?: string }>; color: string }> = {
  HTML: { Icon: SiHtml5, color: "#E44D26" },
  CSS: { Icon: SiCss, color: "#264DE4" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  JS: { Icon: SiJavascript, color: "#F0DB4F" },
  React: { Icon: SiReact, color: "#61DAFB" },
  NextJS: { Icon: SiNextdotjs, color: "currentColor" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  Postgres: { Icon: SiPostgresql, color: "#4169E1" },
};

// Official website for each technology
const urlMap: Record<string, string> = {
  HTML: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  CSS: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  "Tailwind CSS": "https://tailwindcss.com",
  JS: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  React: "https://react.dev",
  NextJS: "https://nextjs.org",
  MongoDB: "https://www.mongodb.com",
  Postgres: "https://www.postgresql.org",
};

export function Technologies() {
  return (
    <section id="technologies" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Stack" title={technologies.heading} />

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {technologies.items.map((tech, i) => {
            const entry = iconMap[tech.name];
            const Icon = entry?.Icon;
            const href = urlMap[tech.name];
            return (
              <motion.a
                key={tech.name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="group flex flex-col items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-8 text-center shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--surface-2)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{ color: entry?.color }}
                >
                  {Icon && <Icon className="h-7 w-7" />}
                </span>
                <span className="font-mono-utility text-xs text-[var(--ink-soft)]">
                  {tech.name}
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}