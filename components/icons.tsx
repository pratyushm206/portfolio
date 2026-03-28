import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M7 9v8" />
      <path d="M11 17v-4.5a2.5 2.5 0 0 1 5 0V17" />
      <path d="M3 9v8" />
      <circle cx="5" cy="5" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M9 19c-4 1.2-4-2-6-2" />
      <path d="M15 22v-3.1c0-1 .1-1.5-.4-2a4.7 4.7 0 0 0-5.2 0c-.5.5-.4 1-.4 2V22" />
      <path d="M15.5 5.3A5.7 5.7 0 0 0 12 4a5.7 5.7 0 0 0-3.5 1.3A5 5 0 0 0 7 8.8c0 2.2 1.4 4 3.4 4.7h3.2c2-.7 3.4-2.5 3.4-4.7a5 5 0 0 0-1.5-3.5Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M4 6h16v12H4z" />
      <path d="m4 8 8 6 8-6" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 4v10" />
      <path d="m8 10 4 4 4-4" />
      <path d="M5 19h14" />
    </svg>
  );
}

export function ExternalLinkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
    </svg>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="m8 9-4 3 4 3" />
      <path d="m16 9 4 3-4 3" />
      <path d="m14 5-4 14" />
    </svg>
  );
}

export function GraduationIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="m3 9 9-4 9 4-9 4-9-4Z" />
      <path d="M7 11.5V15c0 1.5 2.2 3 5 3s5-1.5 5-3v-3.5" />
      <path d="M21 10v6" />
    </svg>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z" />
      <path d="m19 15 .8 1.7 1.7.8-1.7.8-.8 1.7-.8-1.7-1.7-.8 1.7-.8.8-1.7Z" />
      <path d="m5 15 .9 2 2 .9-2 .9-.9 2-.9-2-2-.9 2-.9.9-2Z" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 3 5 6v5c0 4.3 2.8 8.3 7 10 4.2-1.7 7-5.7 7-10V6l-7-3Z" />
      <path d="m9.5 12 1.7 1.7L14.8 10" />
    </svg>
  );
}
