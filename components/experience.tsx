import { Briefcase, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "IT Manager",
    company: "Campus Physical Therapy",
    location: "Remote",
    period: "2022 — Present",
    description: [
      "Developed and maintained Python/Django REST APIs to support internal operations and client-facing applications.",
      "Built responsive UI components using Bootstrap and jQuery for improved user experience.",
      "Managed virtualized server infrastructure with Proxmox, ensuring 99.9% uptime.",
      "Implemented automated backup and disaster recovery procedures.",
    ],
    technologies: ["Python", "Django", "Bootstrap", "jQuery", "Proxmox", "Linux"],
  },
  {
    title: "Freelance Developer",
    company: "Porcine Private Company",
    location: "Nicaragua",
    period: "2022",
    description: [
      "Designed and developed a scanner and inventory management application for livestock tracking.",
      "Built robust backend services using Go for high-performance data processing.",
      "Developed native Android application for mobile scanning and real-time inventory updates.",
      "Implemented barcode/QR scanning functionality for efficient asset management.",
    ],
    technologies: ["Go", "Android", "REST APIs", "SQLite", "Mobile Development"],
  },
  {
    title: "Java Full Stack Developer",
    company: "INSS (Instituto Nicaragüense de Seguridad Social)",
    location: "Nicaragua",
    period: "2019 — 2022",
    description: [
      "Designed and implemented secure REST APIs using Spring Boot and Spring Security with JWT authentication.",
      "Collaborated with cross-functional teams to deliver mission-critical government applications.",
      "Optimized database queries and implemented caching strategies for improved performance.",
      "Participated in code reviews and mentored junior developers on best practices.",
    ],
    technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Jr. Programmer",
    company: "Casa de las Mangueras",
    location: "Nicaragua",
    period: "2019 (6 months)",
    description: [
      "Developed desktop applications for inventory management and business operations.",
      "Designed and implemented database models using SQL Server for efficient data storage.",
      "Built .NET applications with user-friendly interfaces for warehouse staff.",
      "Collaborated with stakeholders to gather requirements and deliver solutions.",
    ],
    technologies: [".NET", "SQL Server", "T-SQL", "Desktop Development", "Database Modeling"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-wider">Experience</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <h3 className="text-3xl font-bold text-foreground mb-12 text-center text-balance">Professional Journey</h3>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? "md:text-right" : ""}`}
              >
                <div
                  className={`${
                    index % 2 === 0 ? "md:order-1" : "md:order-2"
                  } pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                >
                  <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-primary md:-translate-x-1/2 top-2" />

                  <div
                    className={`p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors ${index % 2 === 0 ? "md:text-left" : ""}`}
                  >
                    <div className="flex items-center gap-2 text-sm text-primary mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>

                    <h4 className="text-xl font-bold text-foreground mb-1">{exp.title}</h4>
                    <p className="text-muted-foreground mb-4 flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                      <span className="text-border">•</span>
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </p>

                    <ul className="space-y-2 mb-4 text-left">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary mt-1.5">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
