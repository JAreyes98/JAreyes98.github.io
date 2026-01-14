import { GraduationCap, Server, Zap } from "lucide-react"

export function Bio() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-wider">About</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6 text-balance">
              Systems Engineer with a Passion for Scalable Solutions
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With a Systems Engineering background from{" "}
              <span className="text-foreground font-medium">UNI (Universidad Nacional de Ingeniería)</span>, I
              specialize in building high-availability, concurrent web applications that scale.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My expertise spans the full stack, from designing robust REST APIs with enterprise-grade security to
              orchestrating containerized deployments in cloud environments. I thrive on solving complex problems and
              delivering solutions that exceed expectations.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <GraduationCap className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-2">Academic Foundation</h4>
              <p className="text-sm text-muted-foreground">
                Systems Engineering from UNI with focus on software architecture and distributed systems.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <Server className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-2">High Availability</h4>
              <p className="text-sm text-muted-foreground">
                Expert in building fault-tolerant systems with 99.9%+ uptime guarantees.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <Zap className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-2">Concurrent Systems</h4>
              <p className="text-sm text-muted-foreground">
                Specialized in multi-threaded applications and async processing patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
