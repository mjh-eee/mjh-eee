
"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Megaphone,
  TrendingUp,
  Info,
  BookOpen,
  Briefcase,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { about } from "@/lib/content";

const icons = [Code2, Megaphone, TrendingUp];

type TabKey = "about" |"story" | "experience" | "education" | "skills";

const tabs: { key: TabKey; label: string; icon: typeof BookOpen }[] = [
  { key: "about", label: "About", icon: Info },
  { key: "story", label: "Story", icon: BookOpen },
  { key: "experience", label: "Experience", icon: Briefcase },
  { key: "education", label: "Education", icon: GraduationCap },
  { key: "skills", label: "Skills", icon: Sparkles },
];

// Placeholder data — swap these with real entries from your content file
const story = [
  {
    role: "I build web pages with clean code and creative UI. Worked as an Frontend Developer.",
  },
  {
    role: "My journey began in 2022 and continues through 2024 as a student at Programming Hero. Along the way, I've developed a passion for clean, efficient code and knowledge-sharing whether through participating in various projects.",

  },
  {
    role: "I believe technology holds the power to transform lives and communities. My mission is to use my skills to build impactful solutions that truly make a difference.",

  },
];
const experience = [
  {
    role: "MERN Stack Developer(Level-1)",
    org: "Programming Hero",
    period: "2023 — 2024",
    description: "Full Stack Web Developer",
  },
  {
    role: "Full Stack Web Developer(Level-2)",
    org: "Programming Hero",
    period: "2024 — 2025",
    description: "Advanced Web Developer",
  },
];

const education = [
  {
    degree: "Advanced Web Development Course",
    school: "Programming Hero",
    period: "2024 — 2025",
    description: "MERN Stack Developer",
  },
  {
    degree: "Web Development Course",
    school: "Interactive Cares BD",
    period: "2023 — 2024",
    description: "Full Stack Web Developer",
  },
  {
    degree: "Web Development Course(L-1)",
    school: "Programming Hero",
    period: "2022 — 2023",
    description: "FrontEnd and BackEnd Deveoper", 
  },
  {
    degree: "B.Sc. in EEE",
    school: "KUET",
    period: "2004 — 2009",
    description: "Bachelor Degree",
  },
];

const skills = [
  "JavaScript / TypeScript",
  "React / Next.js",
  "Node.js",
  "Express.js",
  "Tailwind CSS",
  "UI/UX Design",
  "Framer Motion",
  "MongoDB", 
  "PostGresSQL",
];

export function About() {
  const [activeTab, setActiveTab] = useState<TabKey>("about");

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="About" title={about.heading} />

        {/* Tab switcher */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-sm sm:mx-auto sm:w-fit">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-[var(--ink)]/60 hover:text-[var(--ink)]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="about-tab-pill"
                    className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--primary)] via-[var(--violet)] to-[var(--cyan)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <Icon className="relative h-4 w-4" />
                <span className="relative">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-3"
            >
              {about.items.map((item, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                    className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[var(--primary)]/10"
                  >
                    <div
                      className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-[var(--primary)]/15 to-[var(--cyan)]/15 blur-2xl transition-transform duration-500 group-hover:scale-125"
                      aria-hidden
                    />
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--primary)] via-[var(--violet)] to-[var(--cyan)] text-white shadow-md">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display relative mt-6 text-xl font-semibold text-[var(--ink)]">
                      {item.title}
                    </h3>
                    <span className="relative mt-4 block h-px w-10 bg-[var(--border)] transition-all duration-300 group-hover:w-16 group-hover:bg-[var(--primary)]" />
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {activeTab === "story" && (
            <motion.div
              key="story"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-6"
            >
              {story.map((exp, i) => (
                <motion.div
                  key={exp.role + i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                  className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-center font-display text-xl font-semibold text-[var(--ink)]">
                      {exp.role} 
                    </h3>
                   
                  </div>

                </motion.div>
              ))}
            </motion.div>
          )}
          {activeTab === "experience" && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-6"
            >
              {experience.map((exp, i) => (
                <motion.div
                  key={exp.role + i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                  className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold text-[var(--ink)]">
                      {exp.role} · {exp.org}
                    </h3>
                    <span className="text-sm text-[var(--ink)]/50">{exp.period}</span>
                  </div>
                  <p className="mt-3 text-[var(--ink)]/70">{exp.description}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-6"
            >
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree + i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                  className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold text-[var(--ink)]">
                      {edu.degree}
                    </h3>
                    <span className="text-sm text-[var(--ink)]/50">{edu.period}</span>
                  </div>
                  <p className="mt-1 text-[var(--ink)]/60">{edu.school}</p>
                  <p className="mt-3 text-[var(--ink)]/70">{edu.description}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-wrap gap-3"
            >
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.3, delay: i * 0.05, ease: "easeOut" }}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-medium text-[var(--ink)] shadow-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}