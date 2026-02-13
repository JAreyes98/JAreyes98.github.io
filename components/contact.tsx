"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

interface ContactProps {
  dict: any // Ideally define a proper interface based on the JSON structure
}

export function Contact({ dict }: ContactProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const contactInfo = [
    {
      icon: Mail,
      label: dict.labels.email,
      value: "josuereyes98@live.com",
      href: "mailto:josuereyes98@live.com",
    },
    {
      icon: Phone,
      label: dict.labels.phone,
      value: "+1 415-879-3003",
      href: "tel:+14158793003",
    },
    {
      icon: Phone,
      label: dict.labels.phone,
      value: "+505 84530828",
      href: "tel:+50584530828",
    },
    {
      icon: MapPin,
      label: dict.labels.location,
      value: "Nicaragua",
      href: null,
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        toast.success(dict.messages.success_title, {
          description: dict.messages.success_desc,
        })
        setFormData({ name: "", email: "", message: "" })
      } else {
        toast.error(dict.messages.error_title, {
          description: dict.messages.error_desc,
        })
      }
    } catch (err) {
      toast.error(dict.messages.conn_error_title, {
        description: dict.messages.conn_error_desc,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-wider">
            {dict.section_title}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <h3 className="text-3xl font-bold text-foreground mb-4 text-center text-balance">
          {dict.main_title}
        </h3>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          {dict.subtitle}
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
                {dict.footer_note}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">
                {dict.labels.name}
              </Label>
              <Input
                id="name"
                placeholder={dict.placeholders.name}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-card border-border focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                {dict.labels.email}
              </Label>
              <Input
                id="email"
                type="email"
                placeholder={dict.placeholders.email}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-card border-border focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">
                {dict.labels.message}
              </Label>
              <Textarea
                id="message"
                placeholder={dict.placeholders.message}
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-card border-border focus:border-primary resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? dict.button.submitting : dict.button.idle}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}