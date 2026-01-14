"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "josuereyes98@live.com",
    href: "mailto:josuereyes98@live.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 415-879-3003",
    href: "tel:+14158793003",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nicaragua",
    href: null,
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-wider">Contact</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <h3 className="text-3xl font-bold text-foreground mb-4 text-center text-balance">{"Let's Work Together"}</h3>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          {"Have a project in mind or want to discuss opportunities? I'd love to hear from you."}
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="p-3 rounded-lg bg-primary/10">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="text-foreground hover:text-primary transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-foreground">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="p-6 rounded-xl bg-card border border-border">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {
                  "I'm currently open to new opportunities and interesting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
                }
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-card border-border focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-card border-border focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Your message..."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-card border-border focus:border-primary resize-none"
              />
            </div>

            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
