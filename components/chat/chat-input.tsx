"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"
import { useState } from "react"

export function ChatInput({ onSend }: { onSend: (message: string) => void }) {
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      onSend(message)
      setMessage("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 p-4 border-t">
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1"
      />
      <Button type="submit" size="icon">
        <Send className="h-4 w-4" />
      </Button>
    </form>
  )
}