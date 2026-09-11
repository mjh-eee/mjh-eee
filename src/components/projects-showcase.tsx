"use client";

import * as React from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/lib/content";

const filters = ["All", "Featured", "MERN"] as const;
type Filter = (typeof filters)[number];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.article
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-black/[0.06]"
    >
      {project.featured && (
        <div className="absolute left-4 top-4 z-10 flex items-center gap-1 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--violet)] px-3 py-1 text-xs font-medium text-white shadow-md">
          <Sparkles className="h-3 w-3" />
          Featured
        </div>
      )}

      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--surface-2)]">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 flex items-center justify-center gap-3 bg-black/50 backdrop-blur-sm"
            >
              {project.liveUrl && (
                <Button size="sm" asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-1.5"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live
                  </a>
                </Button>
              )}
              {project.repoUrl && (
                <Button size="sm" variant="secondary" asChild>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-1.5"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-lg font-semibold text-[var(--ink)]">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-3">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="font-mono-utility rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1 text-xs text-[var(--ink-soft)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-2 md:hidden">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-[var(--primary)]"
            >
              <ExternalLink className="h-4 w-4" />
              Live demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-[var(--ink-soft)] hover:text-[var(--primary)]"
            >
              <Github className="h-4 w-4" />
              Source
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsShowcase() {
  const [filter, setFilter] = React.useState<Filter>("All");

  const filtered = React.useMemo(() => {
    if (filter === "All") return projects;
    if (filter === "Featured") return projects.filter((p) => p.featured);
    return projects.filter((p) =>
      p.tech.some((t) =>
        ["MongoDB", "Express", "React", "Node.js"].includes(t)
      )
    );
  }, [filter]);

  return (
    <section
      id="project"
      className="relative mx-auto max-w-6xl scroll-mt-28 px-5 py-24 sm:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="font-mono-utility text-sm text-[var(--primary)]">
          Selected work
        </span>
        <h2 className="font-display mt-3 text-3xl font-bold text-[var(--ink)] sm:text-4xl">
          Projects
        </h2>
        <p className="mt-4 text-[var(--ink-soft)]">
          A few full-stack builds where I designed the data model, wired up
          the API, and shipped the UI end to end.
        </p>
      </motion.div>

      <div className="mt-10 flex justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`font-mono-utility rounded-full px-4 py-2 text-sm transition-colors ${
              filter === f
                ? "bg-[var(--primary)] text-white shadow-md"
                : "border border-[var(--border)] text-[var(--ink-soft)] hover:text-[var(--primary)]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </motion.div>
    </section>
  );
}