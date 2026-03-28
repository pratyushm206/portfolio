import Image from "next/image";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import {
  CodeIcon,
  DownloadIcon,
  GitHubIcon,
  GraduationIcon,
  LinkedInIcon,
  MailIcon,
  ShieldIcon,
  SparklesIcon,
} from "@/components/icons";
import { Navbar } from "@/components/navbar";
import { PageTransition } from "@/components/page-transition";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionReveal } from "@/components/section-reveal";
import { portfolioData } from "@/lib/portfolio-data";

const socialIcons = {
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
  Email: MailIcon,
};

const signalIcons = {
  code: CodeIcon,
  graduation: GraduationIcon,
  sparkles: SparklesIcon,
  shield: ShieldIcon,
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.name,
    jobTitle: `${portfolioData.role} | ${portfolioData.roleTarget}`,
    email: portfolioData.email,
    telephone: portfolioData.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Greater Noida",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    sameAs: portfolioData.socialLinks.map((item) => item.href).filter((item) => item.startsWith("http")),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollProgress />

      <PageTransition>
        <main id="home" className="portfolio-shell">
          <div className="background-glow background-glow-left" />
          <div className="background-glow background-glow-right" />

          <Navbar items={portfolioData.navItems} />

          <section className="resume-card hero-card">
            <div className="hero-grid">
              <SectionReveal>
                <div className="hero-copy">
                  <p className="section-label">{portfolioData.roleTarget}</p>
                  <h1 className="hero-name">{portfolioData.name}</h1>
                  <h2 className="hero-role">{portfolioData.role}</h2>
                  <p className="hero-tagline">{portfolioData.positioning}</p>
                  <p className="hero-subcopy">{portfolioData.valueProp}</p>

                  <div className="meta-row">
                    <span className="pill">{portfolioData.location}</span>
                    <span className="pill">{portfolioData.phone}</span>
                    <span className="pill">{portfolioData.timeline}</span>
                  </div>

                  <div className="social-row">
                    {portfolioData.socialLinks.map((item) => {
                      const Icon = socialIcons[item.label as keyof typeof socialIcons];

                      return (
                        <Link key={item.label} href={item.href} target="_blank" className="social-pill">
                          {Icon ? <Icon className="icon-sm" /> : null}
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.08}>
                <aside className="signal-panel">
                  <p className="section-label">Career Signals</p>
                  <div className="signal-list signal-list-cards">
                    {portfolioData.careerSignals.map((signal, index) => {
                      const Icon = signalIcons[signal.icon];
                      const isTextHeavySignal = signal.icon === "shield";

                      return (
                        <div
                          key={`${signal.value}-${signal.label}-${index}`}
                          className={`signal-item signal-item-card ${
                            isTextHeavySignal ? "signal-item-card-compact" : ""
                          }`}
                        >
                          <span className="signal-icon-wrap">
                            <Icon className="signal-icon" />
                          </span>
                          <div className={`signal-copy ${isTextHeavySignal ? "signal-copy-compact" : ""}`}>
                            <strong className={isTextHeavySignal ? "signal-title-compact" : ""}>
                              {signal.value}
                            </strong>
                            <p className={isTextHeavySignal ? "signal-subtitle-compact" : ""}>{signal.label}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </aside>
              </SectionReveal>
            </div>
          </section>

          <section className="snapshot-grid">
            {portfolioData.snapshotCards.map((card, index) => (
              <SectionReveal key={card.title} delay={index * 0.06}>
                <article className="resume-card mini-card">
                  <p className="section-label">{card.eyebrow}</p>
                  <h2 className="mini-card-title">{card.title}</h2>
                  <p className="mini-card-copy">{card.subtitle}</p>
                  {card.meta ? <p className="mini-card-meta">{card.meta}</p> : null}
                </article>
              </SectionReveal>
            ))}
          </section>

          <section id="overview" className="feature-grid section-block">
            <SectionReveal>
              <article className="resume-card feature-card">
                <p className="section-label">Overview</p>
                <h2 className="feature-title">Why I Stand Out</h2>

                <ul className="bullet-list">
                  {portfolioData.overviewPoints.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </SectionReveal>

            <SectionReveal delay={0.08}>
              <article className="resume-card strength-card">
                <p className="section-label">Strengths</p>
                <h2 className="feature-title">Signals that matter for SDE roles</h2>

                <div className="strength-stack">
                  {portfolioData.strengths.map((strength) => (
                    <div key={strength.title} className="inner-soft-card">
                      <h3>{strength.title}</h3>
                      <p>{strength.description}</p>
                    </div>
                  ))}
                </div>
              </article>
            </SectionReveal>
          </section>

          <SectionReveal>
            <section id="projects" className="resume-card projects-card section-block">
              <p className="section-label">Projects</p>
              <h2 className="feature-title">Selected builds with end-to-end ownership</h2>

              <div className="projects-grid recruiter-projects">
                {portfolioData.projects.map((project) => (
                  <article
                    key={project.title}
                    className={`project-card ${project.featured ? "project-card-featured" : ""}`}
                  >
                    <div className="project-media">
                      <div className={`project-preview ${project.featured ? "project-preview-featured" : ""}`}>
                        <span className="preview-chip">{project.previewLabel}</span>
                        {project.screenshots.length > 0 ? (
                          <div className={`project-image-grid ${project.featured ? "project-image-grid-featured" : ""}`}>
                            {project.screenshots.map((shot) => (
                              <div key={shot.src} className="project-image-frame">
                                <Image
                                  src={shot.src}
                                  alt={shot.alt}
                                  width={1600}
                                  height={900}
                                  className="project-image"
                                />
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="preview-window preview-window-fallback">
                            <div className="preview-window-bar">
                              <span />
                              <span />
                              <span />
                            </div>
                            <div className="preview-window-body">
                              <p className="preview-window-label">Project Snapshot</p>
                              <h4>{project.title}</h4>
                              <div className="preview-chip-row">
                                {project.stack.slice(0, 3).map((item) => (
                                  <span key={item} className="preview-mini-pill">
                                    {item}
                                  </span>
                                ))}
                              </div>
                              <div className="preview-grid">
                                <div className="preview-grid-main" />
                                <div className="preview-grid-side">
                                  <span />
                                  <span />
                                  <span />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="project-heading project-heading-side">
                        <h3>{project.title}</h3>
                        <div className="badge-row">
                          {project.stack.map((tech) => (
                            <span key={tech} className="stack-badge">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="project-body">
                      <div className="detail-group">
                        <p className="detail-label">Problem</p>
                        <p className="project-copy">{project.problem}</p>
                      </div>

                      <div className="detail-group">
                        <p className="detail-label">What I built</p>
                        <ul className="bullet-list compact">
                          {project.built.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="detail-group">
                        <p className="detail-label">Impact</p>
                        <ul className="bullet-list compact">
                          {project.impact.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="project-actions project-actions-bottom">
                        <Link
                          href={project.github ?? portfolioData.socialLinks.find((item) => item.label === "GitHub")!.href}
                          target="_blank"
                          className="soft-link"
                        >
                          <GitHubIcon className="icon-sm" />
                          GitHub Repo
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </SectionReveal>

          <section className="bottom-grid section-block">
            <SectionReveal>
              <article id="skills" className="resume-card toolkit-card">
                <p className="section-label">Skills</p>
                <h2 className="feature-title">Technical toolkit</h2>

                <div className="toolkit-list">
                {portfolioData.skills.map((group) => (
                  <div key={group.title} className="inner-soft-card skill-group-card">
                      <div className="skill-header">
                        <p className="toolkit-label">{group.title}</p>
                        <strong>{group.emphasis}</strong>
                      </div>
                    <div className="badge-row">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className={`stack-badge ${
                            group.title === "Programming Languages" ||
                            group.title === "Core Computer Science" ||
                            group.title === "Backend & Databases"
                              ? "stack-badge-strong"
                              : ""
                          }`}
                        >
                          {item}
                        </span>
                      ))}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </SectionReveal>

            <SectionReveal delay={0.08}>
              <article className="resume-card proof-card">
                <p className="section-label">Achievements</p>
                <h2 className="feature-title">Proof of consistency</h2>

                <div className="proof-list">
                  {portfolioData.achievements.map((item) => (
                    <div key={item.label} className="inner-soft-card">
                      <h3>{item.value}</h3>
                      <p>{item.label}</p>
                    </div>
                  ))}
                </div>
              </article>
            </SectionReveal>
          </section>

          <SectionReveal>
            <section id="certifications" className="resume-card projects-card section-block">
              <p className="section-label">Certifications</p>
              <h2 className="feature-title">Security learning and technical foundations</h2>

              <div className="cert-grid">
                {portfolioData.certifications.map((cert) => (
                  <article key={cert.title} className="inner-soft-card cert-card">
                    <div className="cert-icon-wrap">
                      <ShieldIcon className="icon-sm cert-icon" />
                    </div>
                    <div className="cert-content">
                      <h3 className="cert-title">{cert.title}</h3>
                      <p className="cert-issuer">{cert.issuer}</p>
                      {cert.href ? (
                        <Link href={cert.href} target="_blank" className="cert-link">
                          View Certificate
                        </Link>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </SectionReveal>

          <section id="contact" className="contact-grid section-block">
            <SectionReveal>
              <article className="resume-card contact-copy-card">
                <p className="section-label">Contact</p>
                <h2 className="feature-title">{portfolioData.contactHeading}</h2>
                <p className="feature-copy">{portfolioData.contactCopy}</p>

                <div className="contact-list">
                  <Link href={`mailto:${portfolioData.email}`} className="contact-link">
                    <MailIcon className="icon-sm" />
                    {portfolioData.email}
                  </Link>
                  <Link href={`tel:${portfolioData.phone.replace(/\s+/g, "")}`} className="contact-link">
                    {portfolioData.phone}
                  </Link>
                  <Link href={portfolioData.resumeUrl} target="_blank" className="contact-link">
                    <DownloadIcon className="icon-sm" />
                    Download Resume
                  </Link>
                </div>
              </article>
            </SectionReveal>

            <SectionReveal delay={0.08}>
              <article className="resume-card contact-form-card">
                <ContactForm email={portfolioData.email} />
              </article>
            </SectionReveal>
          </section>
        </main>
      </PageTransition>
    </>
  );
}
