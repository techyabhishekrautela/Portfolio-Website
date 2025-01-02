"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useState } from "react"
import { ChatWindow } from "./chat-window"

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      <ChatWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}