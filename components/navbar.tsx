"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

import { ThemeToggle } from "@/components/theme-toggle";
import type { NavItem } from "@/lib/portfolio-data";

type NavbarProps = {
  items: NavItem[];
};

export function Navbar({ items }: NavbarProps) {
  const sectionIds = useMemo(() => items.map((item) => item.href.replace("#", "")), [items]);
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "overview");
  const pendingSectionRef = useRef<string | null>(null);
  const pendingTimeoutRef = useRef<number | null>(null);

  const getBestSection = useCallback(() => {
    const scrollY = window.scrollY;
    const anchorY = scrollY + 180;
    const pageBottom = window.innerHeight + scrollY;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollY < 120) {
      return sectionIds[0] ?? "overview";
    }

    if (pageBottom >= documentHeight - 80) {
      return sectionIds[sectionIds.length - 1] ?? "contact";
    }

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    for (let index = 0; index < sections.length; index += 1) {
      const current = sections[index];
      const next = sections[index + 1];
      const currentTop = current.offsetTop - 120;
      const nextTop = next ? next.offsetTop - 120 : Number.POSITIVE_INFINITY;

      if (anchorY >= currentTop && anchorY < nextTop) {
        return current.id;
      }
    }

    return sectionIds[0] ?? "overview";
  }, [sectionIds]);

  useEffect(() => {
    const clearPendingSection = () => {
      if (pendingTimeoutRef.current) {
        window.clearTimeout(pendingTimeoutRef.current);
        pendingTimeoutRef.current = null;
      }

      pendingSectionRef.current = null;
    };

    const hasReachedPendingSection = () => {
      const pendingId = pendingSectionRef.current;

      if (!pendingId) {
        return false;
      }

      const element = document.getElementById(pendingId);

      if (!element) {
        clearPendingSection();
        return false;
      }

      return window.scrollY + window.innerHeight * 0.28 >= element.offsetTop;
    };

    const syncActiveFromLocation = () => {
      const hashSection = window.location.hash.replace("#", "");

      if (hashSection && sectionIds.includes(hashSection)) {
        setActiveSection(hashSection);
        return;
      }

      setActiveSection(getBestSection());
    };

    const handleScroll = () => {
      if (pendingSectionRef.current) {
        if (hasReachedPendingSection()) {
          setActiveSection(pendingSectionRef.current);
          clearPendingSection();
        }

        return;
      }

      setActiveSection(getBestSection());
    };

    syncActiveFromLocation();
    window.addEventListener("hashchange", syncActiveFromLocation);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearPendingSection();
      window.removeEventListener("hashchange", syncActiveFromLocation);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [getBestSection, sectionIds]);

  return (
    <motion.header
      className="sticky-navbar"
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
    >
      <nav className="sticky-navbar-inner">
        <div className="sticky-navbar-links">
          {items.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  const targetSection = item.href.replace("#", "");

                  pendingSectionRef.current = targetSection;
                  setActiveSection(targetSection);

                  if (pendingTimeoutRef.current) {
                    window.clearTimeout(pendingTimeoutRef.current);
                  }

                  pendingTimeoutRef.current = window.setTimeout(() => {
                    pendingSectionRef.current = null;
                    pendingTimeoutRef.current = null;
                    setActiveSection(getBestSection());
                  }, 1200);
                }}
                className={`sticky-link ${isActive ? "sticky-link-active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <ThemeToggle />
      </nav>
    </motion.header>
  );
}
