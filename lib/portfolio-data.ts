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
  roleTarget: "Actively seeking SDE / Full-Stack / AI-ML / Cybersecurity roles (2026)",
  role: "Full-stack developer building AI-integrated systems, backed by a real cybersecurity foundation",
  positioning:
    "I combine backend engineering, applied AI, and a certified security foundation (CCNA, Palo Alto Networks, Red Hat) to build systems that are functional, scalable, and defensible.",
  valueProp: "Problem solving, clean implementation, and real project execution — plus hands-on security fundamentals most developers skip.",
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
    { value: "300+", label: "DSA problems solved", icon: "code" },
    { value: "8.5", label: "CGPA", icon: "graduation" },
    { value: "3", label: "Major full-stack & AI products shipped", icon: "sparkles" },
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
      title: "Full-Stack + AI + Security",
      subtitle: "Building interview-ready fundamentals through disciplined coding practice, shipped AI products, and certified security training.",
    },
    {
      eyebrow: "Current Priority",
      title: "SDE / Full-Stack / AI-ML / Cybersecurity Roles",
      subtitle: "Preparing for coding rounds, backend implementation tasks, system-design interviews, and security-fundamentals screening.",
    },
  ] satisfies SnapshotCard[],
  overviewPoints: [
    "Strong focus on data structures, algorithms, and implementation clarity.",
    "Backend-oriented mindset with interest in scalable systems, clean application logic, and secure-by-default auth flows.",
    "Real cybersecurity grounding — CCNA, Palo Alto Networks, and Red Hat trained — not just a checkbox certification list.",
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
        "I enjoy breaking problems into flows, data movement, and implementation details — auth that can't be tricked, rate limiters that keep an LLM bill sane — instead of only surface-level UI work.",
    },
    {
      title: "Security-literate by training",
      description:
        "Certified across networking (CCNA), cybersecurity and cloud security (Palo Alto Networks), and Linux administration (Red Hat) — I understand the infrastructure my code runs on, not just the code itself.",
    },
    {
      title: "Consistency under pressure",
      description:
        "My preparation is built on repeated DSA practice, incremental project depth, and honest positioning for internships and placements.",
    },
  ],
  projects: [
    {
      title: "PrepSense",
      featured: true,
      previewLabel: "Featured Project",
      stack: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Gemini API", "Rate Limiting"],
      problem:
        "Generic question banks don't feel like a real interview round, and they don't tell you whether you're actually ready for a specific company and role.",
      built: [
        "Architected a Node.js/Express REST API on MongoDB/Mongoose with IDOR-protected session ownership checks, JWT + bcrypt authentication, and role-based admin middleware with live-DB privilege checks for instant revocation.",
        "Built an AI question-generation and answer-evaluation pipeline on the Gemini API, backed by a TTL response cache and two independent retry layers — one for API failures, one for validation failures — to absorb unreliable LLM output.",
        "Designed a difficulty-weighted scoring engine with topic-wise and session-wise aggregation and trend detection, and applied per-route rate limiting to keep AI API cost under control.",
      ],
      impact: [
        "Turns a static question bank into a company-specific, freshly generated interview round with real scoring.",
        "Tracks a readiness score over time and flags weak topics (e.g. arrays, system design) before the next real screening round.",
        "Session-security hardened — ownership and role checks prevent one user from ever touching another's data.",
      ],
      screenshots: [
        { src: "/prepsense-dashboard.png", alt: "PrepSense readiness dashboard with weak and strong topic breakdown" },
        { src: "/prepsense-practice.png", alt: "PrepSense new interview round generator by company and role" },
        { src: "/prepsense-history.png", alt: "PrepSense practice log and session history" },
        { src: "/prepsense-recommendations.png", alt: "PrepSense weak-topic study recommendations" },
      ],
      github: "https://github.com/pratyushm206/PrepSense",
      live: undefined,
    },
    {
      title: "NutriTrack",
      featured: true,
      previewLabel: "Featured Project",
      stack: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Google Gemini", "JWT Auth"],
      problem:
        "Calorie and protein tracking apps usually demand manual food-database searches, which makes daily logging slow enough that most people quit within days.",
      built: [
        "Built a full-stack nutrition tracker with a React/Vite frontend and an Express + Prisma + PostgreSQL backend.",
        "Integrated Google Gemini so users can log a meal or workout via plain text or a photo and get an instant calorie, macro, and health breakdown.",
        "Implemented JWT + bcrypt authentication with password reset flows, onboarding, and automatic TDEE/protein-target calculation (Mifflin-St Jeor).",
        "Designed relational data models (User, Profile, FoodLog, ExerciseLog, UserSettings) and a context-aware AI chat assistant (NutriAI) that reads live profile and log data to answer 'what should I eat next?' in real time.",
      ],
      impact: [
        "Shipped and deployed a working production app end-to-end, not just a local prototype.",
        "Replaced manual food-database lookup with AI-estimated logging, cutting the steps needed to track a meal or workout.",
        "Built weekly analytics (streaks, days-on-target, protein averages) to turn raw logs into a feedback loop users can act on.",
      ],
      screenshots: [
        { src: "/nutritrack-dashboard.png", alt: "NutriTrack daily summary dashboard with calories, protein, and macros" },
        { src: "/nutritrack-foodlog.png", alt: "NutriTrack AI food logging with nutrition breakdown" },
        { src: "/nutritrack-exerciselog.png", alt: "NutriTrack AI exercise burn estimate" },
        { src: "/nutritrack-ai.png", alt: "NutriAI in-app nutrition coach chat with full daily context" },
        { src: "/nutritrack-profile.png", alt: "NutriTrack nutrition profile, BMI, and macro split target" },
      ],
      github: "https://github.com/pratyushm206/NutriTrack",
      live: "https://nutri-track-sage.vercel.app",
    },
    {
      title: "AI Resume Analyzer",
      featured: true,
      previewLabel: "Featured Project",
      stack: ["Streamlit", "Sentence Transformers", "Google Gemini", "ReportLab", "Python"],
      problem:
        "Candidates rarely know how their resume actually scores against a real ATS — most feedback is generic, and it doesn't map to the exact job description in front of them.",
      built: [
        "Built with Sentence Transformers for semantic skill matching and the Google Gemini API for recruiter-style verdicts, suggestions, cover letters, and resume tailoring.",
        "Section-level ATS scoring (summary, education, projects, skills, certifications) rather than a single opaque number.",
        "One-click PDF report export via ReportLab, AI cover-letter generation, and a resume-tailoring engine that rewrites the resume against the pasted job description.",
        "Full UI/UX redesign — warm graphite dark theme with a brass/gold accent — built and committed solo, straight to main.",
      ],
      impact: [
        "Returns an ATS match score, a matching-vs-missing skills diff, and a blunt recruiter verdict in seconds.",
        "Generates a tailored cover letter and a JD-rewritten resume on demand — turns raw feedback into an actionable next draft.",
      ],
      screenshots: [
        { src: "/ara-upload.png", alt: "AI Resume Analyzer upload and job description input screen" },
        { src: "/ara-score.png", alt: "AI Resume Analyzer ATS match score and section breakdown" },
        { src: "/ara-skills.png", alt: "AI Resume Analyzer matching vs missing skills diff" },
        { src: "/ara-verdict.png", alt: "AI Resume Analyzer suggestions and recruiter verdict" },
        { src: "/ara-coverletter.png", alt: "AI Resume Analyzer AI-generated cover letter" },
      ],
      github: "https://github.com/pratyushm206/AI-Resume-Analyzer",
      live: undefined,
    },
    {
      title: "GenAI Tutor",
      featured: false,
      previewLabel: "Project Snapshot",
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
      items: ["Data Structures & Algorithms", "OOP", "DBMS", "Computer Networks"],
    },
    {
      title: "Backend & Databases",
      emphasis: "Server-side and data stack",
      items: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Prisma", "Mongoose", "MySQL", "REST APIs", "JWT Auth"],
    },
    {
      title: "Developer Tools",
      emphasis: "Daily workflow tools",
      items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab"],
    },
    {
      title: "Machine Learning & AI",
      emphasis: "Applied ML and AI integration",
      items: ["Supervised & Unsupervised Learning", "OpenCV", "Google Gemini API", "Vector Embeddings", "Prompt Engineering"],
    },
    {
      title: "Cloud & Systems",
      emphasis: "Infrastructure the code actually runs on",
      items: ["Linux Administration (Red Hat)", "AWS Cloud Foundations", "Networking (CCNA)"],
    },
    {
      title: "Cybersecurity",
      emphasis: "Differentiator — CCNA, Red Hat & Palo Alto trained",
      items: [
        "Network & Cloud Security",
        "VAPT Fundamentals",
        "OWASP Top 10",
        "Incident Response Lifecycle",
        "Malware & Phishing Analysis",
      ],
    },
    {
      title: "Security Operations & Tooling",
      emphasis: "Hands-on with real SOC tools, not just theory",
      items: ["SIEM Fundamentals", "Log Analysis", "Alert Triage", "EDR/XDR Fundamentals", "Burp Suite", "Wireshark", "Nmap", "Metasploit (basic)"],
    },
  ] satisfies SkillGroup[],
  achievements: [
    { value: "300+", label: "DSA problems solved" },
    { value: "8.5", label: "Current CGPA" },
    { value: "3", label: "End-to-end full-stack & AI products shipped" },
    { value: "SIH", label: "Selected — Smart India Hackathon (SIH) screening" },
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
  contactHeading: "Open to SDE, Full-Stack, AI/ML, and Cybersecurity roles.",
  contactCopy:
    "If you are hiring for backend, full-stack, AI/ML, or cybersecurity-adjacent roles, I would be glad to connect and share more about my projects, my security training, and my preparation.",
};