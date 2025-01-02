"use client"

import { Mail, Linkedin, Github } from "lucide-react"
import { motion } from "framer-motion"

export function SocialLinks() {
  const links = [
    {
      icon: Mail,
      href: "mailto:abhisheksinghrautela07@gmail.com",
      label: "Email",
      color: "hover:text-red-500"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/abhisheksinghrautela/",
      label: "LinkedIn",
      color: "hover:text-blue-500"
    },
    {
      icon: Github,
      href: "https://github.com/techyabhishekrautela",
      label: "GitHub",
      color: "hover:text-purple-500"
    }
  ]

  return (
    <div className="flex gap-4">
      {links.map((link) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 rounded-full transition-colors ${link.color}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={link.label}
        >
          <link.icon className="h-6 w-6" />
        </motion.a>
      ))}
    </div>
  )
}