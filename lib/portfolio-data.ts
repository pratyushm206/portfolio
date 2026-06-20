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

export type CertificationGroup = {
  title: string;
  items: Certification[];
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
    { label: "LinkedIn", href: "https://www.linkedin.com/in/pratyushm206/" },
    { label: "GitHub", href: "https://github.com/pratyushm206" },
    { label: "Email", href: "mailto:pratyushm206@gmail.com" },
  ] satisfies LinkItem[],
  careerSignals: [
    { value: "200+", label: "DSA problems solved", icon: "code" },
    { value: "8.5", label: "CGPA", icon: "graduation" },
    { value: "3", label: "End-to-end full-stack & AI projects", icon: "sparkles" },
    { value: "19", label: "Certifications across cloud, networking & security", icon: "shield" },
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
      title: "NutriTrack",
      featured: true,
      previewLabel: "Featured Project",
      stack: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Google Gemini", "JWT Auth"],
      problem:
        "Calorie and protein tracking apps usually demand manual food-database searches, which makes daily logging slow enough that most people quit within days.",
      built: [
        "Built a full-stack nutrition tracker with a React/Vite frontend and an Express + Prisma + PostgreSQL backend.",
        "Integrated Google Gemini so users can log a meal via plain text or a photo and get an instant calorie, macro, and health breakdown.",
        "Implemented JWT + bcrypt authentication with password reset flows, onboarding, and automatic TDEE/protein-target calculation (Mifflin-St Jeor).",
        "Designed relational data models (User, Profile, FoodLog, ExerciseLog, UserSettings) and a context-aware AI chat assistant that reads live profile and log data to answer 'Am I on track?'.",
      ],
      impact: [
        "Shipped and deployed a working production app end-to-end, not just a local prototype.",
        "Replaced manual food-database lookup with AI-estimated logging, cutting the steps needed to track a meal.",
        "Built weekly analytics (streaks, days-on-target, protein averages) to turn raw logs into a feedback loop users can act on.",
      ],
      screenshots: [],
      github: "https://github.com/pratyushm206/NutriTrack",
      live: "https://nutri-track-sage.vercel.app",
    },
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
      github: "https://github.com/pratyushm206",
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
      github: "https://github.com/pratyushm206",
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
      items: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "MySQL", "REST APIs", "JWT Auth"],
    },
    {
      title: "Developer Tools",
      emphasis: "Daily workflow tools",
      items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab"],
    },
    {
      title: "Machine Learning & AI",
      emphasis: "Applied ML and AI integration",
      items: ["Supervised & Unsupervised Learning", "OpenCV", "Google Gemini API", "Vector Embeddings"],
    },
    {
      title: "Cloud & Security",
      emphasis: "Differentiator — CCNA, Red Hat & Palo Alto trained",
      items: [
        "Linux Administration (RHEL)",
        "AWS Cloud Foundations",
        "Networking (CCNA)",
        "Network & Cloud Security",
        "Security Operations Fundamentals",
      ],
    },
  ] satisfies SkillGroup[],
  achievements: [
    { value: "200+", label: "DSA problems solved" },
    { value: "8.5", label: "Current CGPA" },
    { value: "3", label: "End-to-end full-stack & AI projects" },
    { value: "HackerRank", label: "Problem solving certification" },
    { value: "LeetCode", label: "100 Days Badge" },
  ] satisfies Achievement[],
  certificationGroups: [
    {
      title: "Cloud & Systems",
      items: [
        { title: "AWS Academy Graduate – Cloud Foundations", issuer: "AWS Academy" },
        { title: "Red Hat System Administration I (RH124)", issuer: "Red Hat" },
        { title: "Red Hat System Administration II (RH134)", issuer: "Red Hat" },
        { title: "Getting Started with Linux Fundamentals (RH104)", issuer: "Red Hat" },
      ] as Certification[],
    },
    {
      title: "Networking",
      items: [
        { title: "CCNA: Introduction to Networks", issuer: "Cisco Networking Academy" },
        { title: "CCNA: Switching, Routing, and Wireless Essentials", issuer: "Cisco Networking Academy" },
        { title: "CCNA: Enterprise Networking, Security, and Automation", issuer: "Cisco Networking Academy" },
      ] as Certification[],
    },
    {
      title: "Security",
      items: [
        { title: "Cybersecurity Foundation", issuer: "Palo Alto Networks" },
        { title: "Network Security Fundamentals", issuer: "Palo Alto Networks" },
        { title: "Cloud Security Fundamentals", issuer: "Palo Alto Networks" },
        { title: "Security Operations Fundamentals", issuer: "Palo Alto Networks" },
        { title: "Cybersecurity Academy Orientation", issuer: "Palo Alto Networks" },
        { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy" },
      ] as Certification[],
    },
    {
      title: "Data, AI & Programming",
      items: [
        { title: "Introduction to Modern AI", issuer: "Cisco Networking Academy" },
        { title: "Apply AI: Analyze Customer Reviews", issuer: "Cisco Networking Academy" },
        { title: "Introduction to Data Science", issuer: "Cisco Networking Academy" },
        { title: "Data Analytics Essentials", issuer: "Cisco Networking Academy" },
        { title: "Python Essentials 1", issuer: "Cisco Networking Academy" },
        { title: "Python Essentials 2", issuer: "Cisco Networking Academy" },
      ] as Certification[],
    },
  ] satisfies CertificationGroup[],
  contactHeading: "Open to internships, collaborations, and SDE roles.",
  contactCopy:
    "If you are hiring for backend, SDE intern, or strong problem-solving roles, I would be glad to connect and share more about my projects and preparation.",
};