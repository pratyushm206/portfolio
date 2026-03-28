"use client";

import { motion, useSpring, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.15,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent"
      style={{ scaleX }}
    />
  );
}
