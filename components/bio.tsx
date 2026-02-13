import { GraduationCap, Server, Zap } from "lucide-react"

interface BioProps {
  dict: {
    section_title: string
    main_title: string
    description_1: string
    description_1_highlight: string
    description_1_suffix: string
    description_2: string
    cards: {
      academic: { title: string; desc: string }
      availability: { title: string; desc: string }
      concurrent: { title: string; desc: string }
    }
  }
}

export function Bio({ dict }: BioProps) {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-wider">
            {dict.section_title}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6 text-balance">
              {dict.main_title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {dict.description_1}{" "}
              <span className="text-foreground font-medium">
                {dict.description_1_highlight}
              </span>
              {dict.description_1_suffix}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {dict.description_2}
            </p>
          </div>

          <div className="grid gap-4">
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <GraduationCap className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {dict.cards.academic.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {dict.cards.academic.desc}
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <Server className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {dict.cards.availability.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {dict.cards.availability.desc}
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <Zap className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {dict.cards.concurrent.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {dict.cards.concurrent.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}