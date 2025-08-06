import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import ProjectsSection from '@/components/projects-section'
import ChatbotButton from '@/components/chatbot-button'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </main>
      <ChatbotButton />
    </div>
  )
}
