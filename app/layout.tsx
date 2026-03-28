import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Pratyush Mishra | Software Engineer Portfolio",
  description:
    "Portfolio of Pratyush Mishra, a B.Tech CSE (AI & ML) student focused on scalable software, DSA, and placement-ready engineering skills.",
  keywords: [
    "Pratyush Mishra",
    "software engineer portfolio",
    "B.Tech CSE AI ML",
    "DSA",
    "Java",
    "Python",
    "student developer",
  ],
  authors: [{ name: "Pratyush Mishra" }],
  creator: "Pratyush Mishra",
  openGraph: {
    title: "Pratyush Mishra | Software Engineer Portfolio",
    description:
      "Building scalable solutions and strengthening DSA foundations for top tech roles.",
    siteName: "Pratyush Mishra Portfolio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratyush Mishra | Software Engineer Portfolio",
    description:
      "B.Tech CSE (AI & ML) student building software projects and preparing for top tech roles.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[var(--color-bg)] font-sans text-[var(--color-text)] antialiased">
        {children}
      </body>
    </html>
  );
}
