import {
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Cpu,
  Database,
  Github,
  Mail,
  MapPin,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";

const links = {
  github: "https://github.com/kiranmor",
  linkedin: "https://www.linkedin.com/in/kiranmor/",
  email: "mailto:morkiran0@gmail.com",
};

const navItems = ["Home", "Education", "Skills", "Projects", "Experience", "Contact"];

const focusCards = [
  { title: "Full-stack", text: "React, Next.js, Node.js, REST APIs", icon: Code2 },
  { title: "Cloud", text: "AWS, Azure, Docker, CI/CD", icon: Server },
  { title: "Systems", text: "C/C++, embedded, debug, verification", icon: Cpu },
];

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Angular"],
  },
  {
    title: "Backend & Data",
    icon: Database,
    skills: ["Node.js", "Python", "REST APIs", "SQL", "MySQL", "MS SQL Server"],
  },
  {
    title: "Cloud & DevOps",
    icon: Server,
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "GitHub Actions", "CI/CD"],
  },
  {
    title: "Systems & Hardware",
    icon: Wrench,
    skills: ["C++", "C", "Embedded Systems", "Verilog", "Linux", "Debugging"],
  },
];

const projects = [
  {
    title: "Toronto Cafes Near Me",
    summary:
      "Next.js cafe finder for discovering cute Toronto cafes with browser location, area presets, radius controls, quick filters, and directions links.",
    stack: ["Next.js", "TypeScript", "CSS", "OpenStreetMap"],
    image: "/projects/toronto-cafes.svg",
    github: "https://github.com/kiranmor/toronto_cafes_near_me",
    demo: "https://toronto-cafes-near-me.vercel.app",
  },
  {
    title: "Resume Job Matcher",
    summary:
      "Explainable NLP tool that compares resumes against job descriptions, scores fit, extracts matched and missing skills, and suggests resume improvements.",
    stack: ["JavaScript", "Python", "TF-IDF", "NLP", "HTML/CSS"],
    image: "/projects/resume-matcher.svg",
    github: "https://github.com/kiranmor/resume_job_matcher",
  },
  {
    title: "Meowgle Search Engine",
    summary:
      "ECE326 toy search engine with a custom crawler, inverted index, PageRank ranking, Google-style UI, OAuth login, and AWS EC2 deployment scripts.",
    stack: ["Python", "Bottle", "SQLite", "AWS EC2", "Boto3"],
    image: "https://raw.githubusercontent.com/kiranmor/ece326-search-engine/main/image/screenshot.png",
    github: "https://github.com/kiranmor/ece326-search-engine",
  },
  {
    title: "Computer Organization Projects",
    summary:
      "ECE243 projects covering an enhanced Verilog processor and a neural network deployed on a DE1-SoC FPGA with real-time visualization.",
    stack: ["C", "Verilog", "FPGA", "Digital Logic"],
    image: "/projects/computer-organization.svg",
    github: "https://github.com/kiranmor/ece243-computer-organization",
  },
  {
    title: "Network Projects",
    summary:
      "ECE361 networking work focused on UDP file transfer and systems-level programming fundamentals.",
    stack: ["C", "Networking", "UDP", "Systems"],
    image: "/projects/network-projects.svg",
    github: "https://github.com/kiranmor/ece361-network-projects",
  },
  {
    title: "Quantum ML & Circuit Cutting",
    summary:
      "Research-style experiment pipelines for quantum classifiers, circuit cutting, benchmarking, and performance analysis against classical models.",
    stack: ["Python", "PyTorch", "Automation", "ML Pipelines"],
    image: "/projects/quantum-ml.svg",
    github: links.github,
  },
];

const experience = [
  {
    role: "Junior Designer - Intelligent Integrated Systems",
    org: "Smith + Andersen",
    date: "May 2024 - Aug 2025",
    location: "Toronto, ON",
    bullets: [
      "Designed electrical, AV, and communications infrastructure while producing clear technical drawings and documentation.",
      "Coordinated with cross-functional engineering teams, supported design reviews, and managed concurrent project deliverables.",
      "Applied structured troubleshooting and root cause analysis to resolve integration issues across technical systems.",
    ],
  },
  {
    role: "Multimedia Production Specialist",
    org: "University of Toronto",
    date: "Sept 2023 - Apr 2024",
    location: "Toronto, ON",
    bullets: [
      "Troubleshot hardware, software, and web-based production environments to improve reliability and operational continuity.",
      "Maintained system documentation and operational logs while collaborating across technical and non-technical teams.",
      "Owned multiple priorities independently in a fast-paced production setting with high accuracy and follow-through.",
    ],
  },
];

const coursework = [
  "Programming Fundamentals",
  "Data Structures & Algorithms",
  "Operating Systems",
  "Databases",
  "Computer Networks",
  "Machine Learning",
  "Digital Systems",
  "Digital Electronics",
  "Circuit Analysis",
  "Signals and Systems",
  "Computer Architecture",
  "VLSI Technology",
  "Embedded Systems",
  "Communication Systems",
  "Engineering Design Project",
];

function LinkedInMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex h-5 w-5 items-center justify-center rounded bg-rose-600 text-[12px] font-bold leading-none text-white ${className}`}
    >
      in
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="section-heading">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      <span />
      {subtitle ? <small>{subtitle}</small> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <nav className="sticky top-0 z-20 border-b border-rose-100 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-5 md:py-4">
          <a href="#top" className="focus-ring text-xl font-black text-rose-700 sm:text-2xl">
            Kiran Mor
          </a>

          <div className="hidden items-center gap-5 text-sm font-semibold text-slate-600 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={item === "Home" ? "#top" : `#${item.toLowerCase()}`}
                className="focus-ring rounded-full px-3 py-2 transition hover:bg-rose-50 hover:text-rose-700"
              >
                {item}
              </a>
            ))}
          </div>

          <details className="group relative md:hidden">
            <summary className="focus-ring flex cursor-pointer list-none items-center gap-2 rounded-full border border-rose-200 bg-white px-4 py-2 text-sm font-black text-rose-700 shadow-sm">
              Menu
              <span className="text-base leading-none transition group-open:rotate-45">+</span>
            </summary>
            <div className="absolute right-0 top-12 z-30 grid min-w-44 gap-1 rounded-2xl border border-rose-100 bg-white p-2 text-sm font-bold text-slate-700 shadow-soft">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={item === "Home" ? "#top" : `#${item.toLowerCase()}`}
                  className="focus-ring rounded-xl px-4 py-2 transition hover:bg-rose-50 hover:text-rose-700"
                >
                  {item}
                </a>
              ))}
            </div>
          </details>
        </div>
      </nav>

      <section id="top" className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(251,113,133,0.28),transparent_30%),radial-gradient(circle_at_85%_5%,rgba(244,114,182,0.22),transparent_28%),linear-gradient(180deg,#fff1f5_0%,#fff7fb_58%,#ffffff_100%)]" />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-5 md:grid-cols-[1.06fr_0.94fr] md:py-24">
          <div className="flex flex-col justify-center">
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.02] text-slate-900 sm:text-6xl lg:text-7xl">
              Hi, I&apos;m Kiran.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              ECE student at the University of Toronto building software, cloud
              infrastructure, and embedded systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={links.github} className="primary-button">
                <Github size={18} />
                GitHub
              </a>
              <a href={links.linkedin} className="secondary-button">
                <LinkedInMark />
                LinkedIn
              </a>
              <a href={links.email} className="secondary-button">
                <Mail size={18} />
                Email
              </a>
            </div>
          </div>

          <div className="profile-panel">
            <div>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-rose-500 sm:text-base">
                  Simple interfaces. Serious engineering.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4">
              {focusCards.map(({ title, text, icon: Icon }) => (
                <div key={title} className="interactive-card">
                  <span className="icon-bubble">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="bg-rose-100/55">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-5 md:py-20">
          <SectionHeading
            eyebrow="Education"
            title="Education & Courses"
            subtitle="ECE foundation with software, systems, and business context."
          />

          <div className="mt-10">
            <div className="rounded-3xl border border-rose-100 bg-white p-6 shadow-soft sm:p-8">
            <div className="flex items-start gap-4">
              <span className="icon-bubble">
                <BookOpen size={24} />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-500">
                  University of Toronto
                </p>
                <h3 className="mt-2 text-2xl font-black text-slate-900">
                  BASc in Electrical and Computer Engineering
                </h3>
                <p className="mt-2 text-sm font-semibold text-slate-500">Graduated May 2026</p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm text-slate-500">
                  <MapPin size={16} />
                  Toronto, ON
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-rose-50 p-4">
                <Award className="text-rose-700" size={22} />
                <p className="mt-3 text-sm font-black text-slate-900">Dean&apos;s List</p>
                <p className="mt-1 text-sm text-slate-600">Winter 2026</p>
              </div>
              <div className="rounded-2xl bg-rose-50 p-4">
                <Sparkles className="text-rose-700" size={22} />
                <p className="mt-3 text-sm font-black text-slate-900">Certifications</p>
                <p className="mt-1 text-sm text-slate-600">AWS Cloud Practitioner · Microsoft Azure Fundamentals AZ-900</p>
              </div>
            </div>

            <details className="group mt-5">
              <summary className="focus-ring inline-flex cursor-pointer list-none items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-rose-700 transition hover:bg-rose-100">
                View Key Courses
                <span className="text-base leading-none transition group-open:rotate-45">+</span>
              </summary>
              <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {coursework.map((course) => (
                  <span key={course} className="chip">
                    {course}
                  </span>
                ))}
              </div>
            </details>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-band">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-5 md:py-20">
          <SectionHeading eyebrow="Skills" title="Technical Toolkit" />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map(({ title, icon: Icon, skills }) => (
              <div key={title} className="rounded-3xl border border-rose-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="icon-bubble">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-black text-slate-900">{title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-4 py-16 sm:px-5 md:py-20">
        <SectionHeading eyebrow="Projects" title="Projects" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-3xl border border-rose-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="h-48 overflow-hidden bg-rose-50">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-black text-slate-900">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{project.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <a href={project.github} className="mini-button">
                    <Github size={16} />
                    GitHub
                  </a>
                  {"demo" in project && project.demo ? (
                    <a href={project.demo} className="mini-button">
                      <ArrowUpRight size={16} />
                      Live demo
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section-band">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-5 md:py-20">
          <SectionHeading eyebrow="Experience" title="Professional Experience" />
          <div className="mt-10 space-y-8 border-l border-rose-200 pl-6">
            {experience.map((item) => (
              <article key={item.org} className="relative">
                <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-white bg-rose-600" />
                <div className="rounded-3xl border border-rose-100 bg-white p-5 shadow-sm transition hover:shadow-soft sm:p-6">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-black text-slate-900">{item.role}</h3>
                      <p className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-rose-700">
                        <BriefcaseBusiness size={16} />
                        {item.org}
                      </p>
                    </div>
                    <div className="text-left text-sm font-semibold text-slate-500 md:text-right">
                      <p>{item.date}</p>
                      <p>{item.location}</p>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:px-5 md:py-20">
        <SectionHeading eyebrow="Contact" title="Contact Me" />
        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
          <a href={links.email} className="contact-card">
            <span><Mail size={23} /></span>
            <p>morkiran0@gmail.com</p>
          </a>
          <a href={links.linkedin} className="contact-card">
            <span><LinkedInMark /></span>
            <p>linkedin.com/in/kiranmor</p>
          </a>
          <a href={links.github} className="contact-card">
            <span><Github size={23} /></span>
            <p>github.com/kiranmor</p>
          </a>
        </div>
      </section>
    </main>
  );
}
