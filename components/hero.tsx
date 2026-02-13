import { Award, ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface HeroProps {
  dict: {
    badge: string
    role: string
    description: string
    buttons: {
      contact: string
      projects: string
    }
  }
}

export function Hero({ dict }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 relative inline-block">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-4 ring-primary/30 ring-offset-4 ring-offset-background">
            <Image
              src="/images/profile.jpeg"
              alt="Josué Reyes"
              width={160}
              height={160}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-2">
            <Award className="w-5 h-5 text-primary-foreground" />
          </div>
        </div>

        <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
          <Award className="w-3 h-3 mr-1" />
          {dict.badge}
        </Badge>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-4 tracking-tight text-balance">
          Josué Reyes
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-primary font-medium mb-6">
          {dict.role}
        </p>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {dict.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            {dict.buttons.contact}
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-colors"
          >
            {dict.buttons.projects}
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  )
}