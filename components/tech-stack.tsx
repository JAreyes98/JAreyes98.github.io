import { Database, Server, Cloud, Code2, Layers, Shield, Container, GitBranch } from "lucide-react"

const techCategories = [
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Java 8/11", certified: true },
      { name: "Python", certified: false },
      { name: "Django", certified: false },
      { name: "Spring Boot", certified: false },
      { name: "Spring Data", certified: false },
      { name: "Spring Security", certified: false },
      { name: ".NET", certified: false },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "T-SQL", certified: false },
      { name: "PL/SQL", certified: false },
      { name: "PostgreSQL", certified: false },
      { name: "MySQL", certified: false },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    skills: [
      { name: "Docker", certified: false },
      { name: "Kubernetes", certified: false },
      { name: "AWS", certified: false },
      { name: "CI/CD", certified: false },
      { name: "Proxmox", certified: false },
    ],
  },
]

export function TechStack() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-wider">Tech Stack</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <h3 className="text-3xl font-bold text-foreground mb-12 text-center text-balance">Technologies I Work With</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {techCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">{category.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                      skill.certified
                        ? "bg-primary/10 border-primary/30 text-primary"
                        : "bg-secondary border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {skill.name}
                    {skill.certified && <Shield className="w-3 h-3 inline ml-1 text-primary" />}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Code2, label: "Clean Code" },
            { icon: Layers, label: "Microservices" },
            { icon: Container, label: "Containers" },
            { icon: GitBranch, label: "Version Control" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 border border-border"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
