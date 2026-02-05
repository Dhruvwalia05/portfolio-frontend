import AnimatedTitle from './animated-title'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <AnimatedTitle />
        </div>
        
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          I craft digital solutions that combine intuitive design with robust functionality. 
          Passionate about building scalable web applications, blockchain systems, and AI-powered tools that turn real-world ideas into impactful code.
        </p>

        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          {/* <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 transform hover:scale-105">
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button> */}
          
          <a href="/Software_Engineer_Resume.pdf" target="_blank" rel="noopener noreferrer" download>
            <button className="border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-blue-400 hover:bg-blue-900/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Download Resume
            </button>
          </a>
        </div>
        
        <div className="flex justify-center gap-6">
          <a href="https://github.com/Dhruvwalia05" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/dhrub-walia-719044283" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:dhruvwalia343@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110" target="_blank" rel="noopener noreferrer">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
