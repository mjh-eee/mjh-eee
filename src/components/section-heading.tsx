"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "mb-12",
        align === "center" ? "text-center mx-auto" : "text-left",
        className
      )}
    >
      {/* <span className="font-mono-utility inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--primary)]">
        <span className="h-px w-6 bg-[var(--primary)]" aria-hidden />
        {eyebrow}
      </span> */}
      <h2 className=" text-center font-display mt-4 text-3xl font-semibold leading-tight text-[var(--ink)] sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </motion.div>
  );
}
