import { Mail, Linkedin, Github, MapPin } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="grid gap-4">
      <div className="flex items-center gap-2">
        <Mail className="h-4 w-4 text-muted-foreground" />
        <a href="mailto:contact@abhishekrautela.com" className="hover:text-primary">
          contact@abhishekrautela.com
        </a>
      </div>
      <div className="flex items-center gap-2">
        <Linkedin className="h-4 w-4 text-muted-foreground" />
        <a 
          href="https://linkedin.com/in/abhishekrautela" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-primary"
        >
          linkedin.com/in/abhishekrautela
        </a>
      </div>
      <div className="flex items-center gap-2">
        <Github className="h-4 w-4 text-muted-foreground" />
        <a 
          href="https://github.com/abhishekrautela" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-primary"
        >
          github.com/abhishekrautela
        </a>
      </div>
      <div className="flex items-center gap-2">
        <MapPin className="h-4 w-4 text-muted-foreground" />
        <span>New Delhi, India</span>
      </div>
    </div>
  )
}