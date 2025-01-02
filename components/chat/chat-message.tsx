export function ChatMessage({ role, content }: { role: 'user' | 'assistant'; content: string }) {
  return (
    <div className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`rounded-lg px-4 py-2 max-w-[80%] ${
          role === 'user'
            ? 'bg-primary text-primary-foreground'
            : 'bg-muted text-muted-foreground'
        }`}
      >
        {content}
      </div>
    </div>
  )
}