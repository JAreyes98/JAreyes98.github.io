import { Github, Folder } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectItem {
  title: string
  description: string
}

interface ProjectsProps {
  dict: {
    section_title: string
    main_title: string
    view_github: string
    items: ProjectItem[]
  }
}

const projectMeta = [
  {
    technologies: ["Java", "Spring Cloud", "Redis", "Docker"],
    github: "https://github.com/JAreyes98/api-gateway",
  },
  {
    technologies: ["Python", "Django", "PostgreSQL", "React"],
    github: "https://github.com/JAreyes98?tab=repositories&q=HEALTHCONNECT",
  },
  {
    technologies: ["Kubernetes", "Jenkins", "Docker", "AWS"],
    github: "#",
  },
]

export function Projects({ dict }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
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

        <div className="grid md:grid-cols-3 gap-6">
          {dict.items.map((project, index) => (
            <div
              key={project.title}
              className="group p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex items-center gap-2">
                  <a 
                    href={projectMeta[index].github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>

              <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {projectMeta[index].technologies.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>

              <Button
                variant="outline"
                className="w-full border-primary/30 text-primary hover:bg-primary/10 bg-transparent"
                asChild
              >
                <a href={projectMeta[index].github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  {dict.view_github}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}