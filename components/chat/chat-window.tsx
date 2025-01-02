"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react"
import { ChatMessage } from "./chat-message"
import { ChatInput } from "./chat-input"

export function ChatWindow({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([
    {
      role: 'assistant',
      content: "Hi! I'm Abhishek's AI assistant. How can I help you today?"
    }
  ])

  const handleSend = async (message: string) => {
    const newMessages = [...messages, { role: 'user', content: message }]
    setMessages(newMessages)

    const response = await getAIResponse(message)
    setMessages([...newMessages, { role: 'assistant', content: response }])
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col h-[500px] max-h-[80vh]">
          <ScrollArea className="flex-1 p-4">
            {messages.map((message, index) => (
              <ChatMessage key={index} {...message} />
            ))}
          </ScrollArea>
          <ChatInput onSend={handleSend} />
        </div>
      </DialogContent>
    </Dialog>
  )
}

async function getAIResponse(message: string): Promise<string> {
  const lowerMessage = message.toLowerCase()
  
  if (lowerMessage.includes('experience')) {
    return "I have extensive experience in data analysis, Python programming, and strategic management. I've worked on various projects involving machine learning, data visualization, and business intelligence."
  }
  
  if (lowerMessage.includes('contact')) {
    return "You can reach Abhishek at abhisheksinghrautela07@gmail.com, connect on LinkedIn at linkedin.com/in/abhisheksinghrautela, or check out his GitHub at github.com/techyabhishekrautela"
  }
  
  if (lowerMessage.includes('skills')) {
    return "My core skills include Python, C++, Java, Data Analysis, Machine Learning, and Strategic Management. I'm particularly experienced with libraries like NumPy, Pandas, and TensorFlow."
  }

  return "I'd be happy to help you learn more about Abhishek's work and experience. Feel free to ask about his projects, skills, or how to get in touch!"
}