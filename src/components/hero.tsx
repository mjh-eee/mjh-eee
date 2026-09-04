"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,

  SiMongodb,
  SiGithub,
  SiTypescript,

  SiPostgresql,

  SiNodedotjs,
  SiJavascript, 
  SiHtmx,
  SiFlutter,
  SiFirebase,
  SiExpress 
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { hero, roles, site } from "@/lib/content";

const orbitIcons = [
  { Icon: SiReact, label: "React" },
  { Icon: SiNextdotjs, label: "Next.js" },
  { Icon: SiMongodb, label: "MongoDB" },
  { Icon: SiGithub, label: "Github" },
  { Icon: SiTypescript, label: "TypeScript" },
  { Icon: SiPostgresql, label: "PostgresSQL" },
  { Icon: SiNodedotjs, label: "Node.js" },
  { Icon: SiJavascript, label: "javascript" },
  { Icon: SiHtmx, label: "HTML" },
  { Icon: SiFlutter, label: "Flutter" },
  { Icon: SiFirebase, label: "Firebase" },
  { Icon: SiExpress, label: "Express.js" },
 
];

export function Hero() {
  const [roleIndex, setRoleIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32"
    >
      {/* Ambient gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="animate-blob absolute -left-24 top-10 h-72 w-72 rounded-full bg-[var(--primary)]/20 blur-3xl" />
        <div
          className="animate-blob absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[var(--violet)]/20 blur-3xl"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="animate-blob absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[var(--cyan)]/20 blur-3xl"
          style={{ animationDelay: "6s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(color-mix(in_srgb,var(--ink)_10%,transparent)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
        />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Copy column */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="glass font-mono-utility inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-[var(--ink-soft)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--emerald)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--emerald)]" />
            </span>
            {hero.eyebrow}
          </span>

          <h1 className="font-display mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
            {hero.headline[0]}
            <br />
            <span className="text-gradient">{hero.headline[1]}</span>
          </h1>

          <div className="mt-6 flex h-8 items-center gap-2 font-mono-utility text-lg text-[var(--ink-soft)] sm:text-xl">
            <span aria-hidden>{"//"}</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="text-[var(--primary)]"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
            <span className="sr-only">
              Roles: {roles.join(", ")}
            </span>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button size="lg" asChild>
              <a href="#contact">
                {hero.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={`mailto:${site.email}`}>
                <Mail className="h-4 w-4" />
                Email me
              </a>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <a
              href={`mailto:${site.email}`}
              aria-label="Email Jewel Hasan"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--ink-soft)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              <Mail className="h-[18px] w-[18px]" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jewel Hasan on LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--ink-soft)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              <FaLinkedin className="h-[18px] w-[18px]" />
            </a>
          </div>
        </motion.div>

        {/* Signature element: orbiting stack around a monogram, with role ribbon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto flex h-[320px] w-[320px] items-center justify-center sm:h-[380px] sm:w-[380px]"
        >
          <div className="gradient-border h-full w-full rounded-[2rem]">
            <div className="glass flex h-full w-full items-center justify-center rounded-[2rem]">
              <div className="relative flex h-56 w-56 items-center justify-center">
                {/* Orbit ring */}
                <div className="absolute inset-0 rounded-full border border-dashed border-[var(--border)]" />
                <div className="animate-orbit absolute inset-0">
                  {orbitIcons.map(({ Icon, label }, i) => {
                    const angle = (360 / orbitIcons.length) * i;
                    return (
                      <div
                        key={label}
                        className="absolute left-1/2 top-1/2 h-11 w-11"
                        style={{
                          transform: `rotate(${angle}deg) translate(112px) rotate(-${angle}deg)`,
                        }}
                      >
                        <div
                          className="animate-orbit flex h-11 w-11 items-center justify-center rounded-full bg-[var(--surface)] shadow-md ring-1 ring-[var(--border)]"
                          style={{
                            animationDirection: "reverse",
                            animationDuration: "26s",
                          }}
                          title={label}
                        >
                          <Icon className="h-5 w-5 text-[var(--primary)]" />
                          <span className="sr-only">{label}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Center monogram */}
                <div className="animate-float flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] via-[var(--violet)] to-[var(--cyan)] shadow-xl">
                  <span className="font-display text-2xl font-bold text-white">
                    {site.initials}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating role ribbon */}
          <motion.div
            className="glass absolute -bottom-6 -left-6 hidden items-center gap-2 rounded-2xl px-4 py-3 shadow-lg sm:flex"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="h-4 w-4 text-[var(--emerald)]" />
            <span className="font-mono-utility text-xs text-[var(--ink-soft)]">
              MERN Stack &amp; SEO
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
