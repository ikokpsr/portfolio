export const siteConfig = {
  name: "Rizka Putera Suryaresmana",
  title: "Full-Stack Developer",
  description:
    "Passionate full-stack developer crafting beautiful, performant web experiences with modern technologies. Turning ideas into elegant digital solutions.",
  bio: "I'm a full-stack developer with 5+ years of experience building modern web applications. I specialize in React, Next.js, and Node.js ecosystems. I'm passionate about creating intuitive user interfaces and scalable backend architectures that solve real-world problems.",
  email: "rizkapsr@gmail.com",
  location: "Pangandaran, Indonesia",
  resumeUrl: "#",
  social: {
    github: "https://github.com/ikokpsr",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com/",
    instagram: "https://instagram.com/rizkaputera",
  },
};

export const skills = [
  {
    name: "React & Next.js",
    description: "Building performant UIs with modern React patterns and Next.js App Router",
    icon: "code" as const,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    description: "Writing type-safe, maintainable code with strict TypeScript",
    icon: "fileCode" as const,
    category: "Language",
  },
  {
    name: "Node.js",
    description: "Creating RESTful APIs and microservices with Express & Fastify",
    icon: "server" as const,
    category: "Backend",
  },
  {
    name: "Tailwind CSS",
    description: "Crafting responsive, utility-first designs with Tailwind",
    icon: "palette" as const,
    category: "Styling",
  },
  {
    name: "PostgreSQL",
    description: "Designing efficient database schemas and complex queries",
    icon: "database" as const,
    category: "Database",
  },
  {
    name: "Docker & DevOps",
    description: "Containerization, CI/CD pipelines, and cloud deployment",
    icon: "container" as const,
    category: "DevOps",
  },
  {
    name: "Git & GitHub",
    description: "Version control, code review, and collaborative development",
    icon: "gitBranch" as const,
    category: "Tools",
  },
  {
    name: "Figma",
    description: "UI/UX design, prototyping, and design system creation",
    icon: "figma" as const,
    category: "Design",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard. Built for scalability and performance.",
    image: "/projects/ecommerce.jpg",
    stack: ["Next.js", "TypeScript", "Prisma", "Stripe", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative project management tool with real-time updates, Kanban boards, and team analytics. Features drag-and-drop functionality.",
    image: "/projects/taskapp.jpg",
    stack: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "AI Content Generator",
    description:
      "An AI-powered content creation platform that leverages GPT models for generating blog posts, social media content, and marketing copy.",
    image: "/projects/aicontent.jpg",
    stack: ["Next.js", "OpenAI API", "Vercel AI SDK", "Supabase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Finance Dashboard",
    description:
      "An interactive financial analytics dashboard with real-time charts, expense tracking, and investment portfolio management.",
    image: "/projects/finance.jpg",
    stack: ["React", "D3.js", "Express", "PostgreSQL", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
