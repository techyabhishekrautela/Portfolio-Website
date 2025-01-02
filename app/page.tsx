import { HeroSection } from '@/components/hero-section'
import { NavHeader } from '@/components/nav-header'
import { ChatButton } from '@/components/chat/chat-button'
import { ContactInfo } from '@/components/contact-info'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <NavHeader />
      <HeroSection />
      <ChatButton />
    </main>
  )
}