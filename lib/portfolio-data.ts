export type LinkItem = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type Signal = {
  value: string;
  label: string;
  icon: "code" | "graduation" | "sparkles" | "shield";
};

export type SnapshotCard = {
  eyebrow: string;
  title: string;
  subtitle: string;
  meta?: string;
};

export type ProjectScreenshot = {
  src: string;
  alt: string;
};

export type Project = {
  title: string;
  featured: boolean;
  previewLabel: string;
  stack: string[];
  problem: string;
  built: string[];
  impact: string[];
  screenshots: ProjectScreenshot[];
  github?: string;
  live?: string;
};

export type SkillGroup = {
  title: string;
  emphasis: string;
  items: string[];
};

export type Achievement = {
  value: string;
  label: string;
};

export type Certification = {
  title: string;
  issuer: string;
  href?: string;
};

export const portfolioData = {
  name: "Pratyush Mishra",
  roleTarget: "Actively seeking SDE Intern / Backend roles (2026)",
  role: "Backend-focused developer building scalable systems with strong DSA",
  positioning:
    "I combine strong DSA discipline with a systems mindset to build dependable software and AI-backed products.",
  valueProp: "Problem solving, clean implementation, and real project execution over generic claims.",
  location: "Greater Noida, Uttar Pradesh",
  email: "pratyushm206@gmail.com",
  phone: "+91 95653 08767",
  timeline: "2023 - 2027",
  resumeUrl: "/resume/Pratyush_Mishra_Resume.pdf",
  topLinks: [
    { label: "Resume", href: "#home" },
    { label: "Portfolio Snapshot", href: "#overview" },
  ] satisfies LinkItem[],
  navItems: [
    { label: "Overview", href: "#overview" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/pratyush-mishra-211327296/" },
    { label: "GitHub", href: "https://github.com/pratyushm206" },
    { label: "Email", href: "mailto:pratyushm206@gmail.com" },
  ] satisfies LinkItem[],
  careerSignals: [
    { value: "200+", label: "DSA problems solved", icon: "code" },
    { value: "8.5", label: "CGPA", icon: "graduation" },
    { value: "2", label: "End-to-End AI Projects", icon: "sparkles" },
    { value: "Cybersecurity Foundation", label: "Palo Alto Networks", icon: "shield" },
    { value: "Network Security Fundamentals", label: "Palo Alto Networks", icon: "shield" },
  ] satisfies Signal[],
  snapshotCards: [
    {
      eyebrow: "Education",
      title: "G.L. Bajaj Institute of Technology and Management",
      subtitle: "B.Tech in Computer Science and Engineering (AI & ML)",
      meta: "Greater Noida, Uttar Pradesh",
    },
    {
      eyebrow: "Focus",
      title: "Backend + DSA Preparation",
      subtitle: "Building interview-ready fundamentals through disciplined coding practice and project work.",
    },
    {
      eyebrow: "Current Priority",
      title: "SDE Intern / Backend Roles",
      subtitle: "Preparing for coding rounds, backend implementation tasks, and system-oriented interviews.",
    },
  ] satisfies SnapshotCard[],
  overviewPoints: [
    "Strong focus on data structures, algorithms, and implementation clarity.",
    "Backend-oriented mindset with interest in scalable systems and clean application logic.",
    "Consistent project-building approach tied directly to internship and placement preparation.",
  ],
  strengths: [
    {
      title: "Problem-solving mindset",
      description:
        "I optimize for structured thinking first, then implementation quality, which makes the portfolio relevant for SDE screening.",
    },
    {
      title: "Systems-oriented execution",
      description:
        "I enjoy breaking problems into flows, data movement, and implementation details instead of only surface-level UI work.",
    },
    {
      title: "Consistency under pressure",
      description:
        "My preparation is built on repeated DSA practice, incremental project depth, and honest positioning for internships and placements.",
    },
  ],
  projects: [
    {
      title: "GenAI Tutor",
      featured: true,
      previewLabel: "Featured Project",
      stack: ["Python", "Google Gemini", "Vector Embeddings", "Semantic Search"],
      problem:
        "Students often struggle to extract useful answers quickly from long study material and static notes.",
      built: [
        "Built a PDF-based AI workflow for contextual Q&A, summarization, semantic retrieval, and adaptive quiz generation.",
        "Added planner and progress experiences to help learners move from raw material to measurable outcomes.",
        "Designed retrieval-aware interaction so uploaded content drives the response instead of generic answers.",
      ],
      impact: [
        "Turned static study material into a searchable and interactive learning experience.",
        "Combined document understanding with progress tracking to make the product feel like a complete learning workflow.",
      ],
      screenshots: [
        {
          src: "/genai-tutor-planner-v2.png",
          alt: "GenAI Tutor planner view with subject insights and revision planning",
        },
        {
          src: "/genai-tutor-progress-v2.png",
          alt: "GenAI Tutor progress view with score history and performance analytics",
        },
      ],
      github: undefined,
      live: undefined,
    },
    {
      title: "Real-Time Emotion Detection",
      featured: false,
      previewLabel: "Project Snapshot",
      stack: ["Python", "OpenCV", "Machine Learning"],
      problem:
        "Real-time emotion recognition requires reliable live input handling, prediction flow, and immediate visual feedback.",
      built: [
        "Built a webcam-based pipeline for face detection, feature extraction, and real-time emotion prediction.",
        "Integrated model output with live visual rendering for continuous interactive feedback.",
      ],
      impact: [
        "Showcased practical execution across computer vision, model integration, and real-time application flow.",
        "Strengthened hands-on experience in turning ML output into usable software behavior.",
      ],
      screenshots: [
        {
          src: "/emotion-detection-snapshot.jpg",
          alt: "Real-Time Emotion Detection project code and machine learning workflow in the development environment",
        },
      ],
      github: undefined,
      live: undefined,
    },
  ] satisfies Project[],
  skills: [
    {
      title: "Programming Languages",
      emphasis: "Core implementation languages",
      items: ["Java", "JavaScript", "Python", "C"],
    },
    {
      title: "Core Computer Science",
      emphasis: "Interview-relevant foundations",
      items: ["Data Structures & Algorithms", "OOP", "DBMS"],
    },
    {
      title: "Backend & Databases",
      emphasis: "Server-side and data stack",
      items: ["Node.js", "Express.js", "MySQL"],
    },
    {
      title: "Developer Tools",
      emphasis: "Daily workflow tools",
      items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab"],
    },
    {
      title: "Machine Learning",
      emphasis: "Applied ML and vision tools",
      items: ["Supervised & Unsupervised Learning", "OpenCV"],
    },
    {
      title: "Cybersecurity",
      emphasis: "Security concepts",
      items: ["Network Security", "SQL Injection", "Reconnaissance", "Privilege Escalation"],
    },
    {
      title: "Security Tools",
      emphasis: "Hands-on security tooling",
      items: ["Nmap", "Burp Suite", "Metasploit", "Hydra", "SQLMap", "SNORT", "Cutter"],
    },
  ] satisfies SkillGroup[],
  achievements: [
    { value: "200+", label: "DSA problems solved" },
    { value: "8.5", label: "Current CGPA" },
    { value: "2", label: "End-to-end AI projects" },
    { value: "HackerRank", label: "Problem solving certification" },
    { value: "LeetCode", label: "100 Days Badge" },
  ] satisfies Achievement[],
  certifications: [
    {
      title: "Cybersecurity Foundation",
      issuer: "Palo Alto Networks",
      href: undefined,
    },
    {
      title: "Network Security Fundamentals",
      issuer: "Palo Alto Networks",
      href: undefined,
    },
    {
      title: "Cybersecurity Academy Orientation",
      issuer: "Palo Alto Networks",
      href: undefined,
    },
  ] satisfies Certification[],
  contactHeading: "Open to internships, collaborations, and SDE roles.",
  contactCopy:
    "If you are hiring for backend, SDE intern, or strong problem-solving roles, I would be glad to connect and share more about my projects and preparation.",
};
