import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Bio } from "@/components/bio"
import { TechStack } from "@/components/tech-stack"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { getDictionary } from "../../lib/get-dictionary"

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang as 'en' | 'es')

  return (
    <main className="min-h-screen bg-background">
      <Header dict={dict.header} />
      <Hero dict={dict.hero} />
      <Bio dict={dict.bio} />
      <TechStack dict={dict.tech_stack} />
      <Experience dict={dict.experience} />
      <Projects dict={dict.projects} />
      <Contact dict={dict.contact} />
      <Footer dict={dict.footer} />
    </main>
  )
}