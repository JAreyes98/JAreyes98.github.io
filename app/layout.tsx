import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Josué Reyes | Full-Stack Developer",
  description:
    "Professional Full-Stack Developer specializing in high-availability web applications. Oracle Certified Professional with expertise in Java, Spring, Python, Django, and cloud technologies.",
  keywords: [
    "Desarrollador Nicaragua",
    "Desarrollador Java",
    "Java Developer Nicaragua",
    "Desarrollador Latinoamérica",
    "Full-Stack Developer",
    "Spring Boot",
    "Oracle Certified Professional"
  ],
  alternates: {
    canonical: "https://tu-dominio.com",
    languages: {
      "en-US": "https://jdreyes.dev/en",
      "es-NI": "https://jdreyes.dev/es",
    },
  },
  openGraph: {
    title: "Josué Reyes | Full-Stack Developer",
    description: "Desarrollador Java Senior en Nicaragua y Latinoamérica.",
    url: "https://tu-dominio.com",
    siteName: "Josué Reyes Portfolio",
    locale: "es_NI",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#020617",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
