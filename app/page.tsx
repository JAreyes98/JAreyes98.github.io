import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Bio } from "@/components/bio"
import { TechStack } from "@/components/tech-stack"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Bio />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
