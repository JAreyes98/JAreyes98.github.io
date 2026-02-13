import { Briefcase, Calendar, MapPin } from "lucide-react"

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  description: string[]
}

interface ExperienceProps {
  dict: {
    section_title: string
    main_title: string
    items: ExperienceItem[]
  }
}

const techStack = [
  ["Python", "Django", "Bootstrap", "jQuery", "Proxmox", "Linux"],
  ["Go", "Android", "REST APIs", "SQLite", "Mobile Development"],
  ["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "REST APIs"],
  [".NET", "SQL Server", "T-SQL", "Desktop Development", "Database Modeling"],
]

export function Experience({ dict }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-wider">
            {dict.section_title}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <h3 className="text-3xl font-bold text-foreground mb-12 text-center text-balance">
          {dict.main_title}
        </h3>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {dict.items.map((exp, index) => (
              <div
                key={`${exp.company}-${index}`}
                className={`relative grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? "md:text-right" : ""}`}
              >
                <div
                  className={`${
                    index % 2 === 0 ? "md:order-1" : "md:order-2"
                  } pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                >
                  <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-primary md:-translate-x-1/2 top-2" />

                  <div
                    className={`p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors ${
                      index % 2 === 0 ? "md:text-left" : ""
                    }`}
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
                      {techStack[index].map((tech) => (
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