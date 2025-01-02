import { NavHeader } from '@/components/nav-header'
import { ContactInfo } from '@/components/contact-info'
import { ChatButton } from '@/components/chat/chat-button'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background pt-16">
      <NavHeader />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>
        <div className="max-w-xl">
          <ContactInfo />
        </div>
      </div>
      <ChatButton />
    </main>
  )
}