import { Github, Linkedin, Twitter } from "lucide-react"

interface FooterProps {
  dict: {
    rights: string
  }
}

export function Footer({ dict }: FooterProps) {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Josué Reyes. {dict.rights}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/JAreyes98"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/josue-reyes-molina"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              <a href="mailto:josuereyes98@live.com" className="hover:text-primary transition-colors">
                josuereyes98@live.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}