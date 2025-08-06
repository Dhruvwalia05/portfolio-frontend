'use client'

import { useState } from 'react'
import { ExternalLink, Github, Eye } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  image: string
  liveUrl: string
  githubUrl: string
}

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  
  const projects: Project[] = [
  {
    id: 1,
    title: 'Skin Assist: AI Skin Disease Detection',
    description:
      'Django web app that detects 10+ skin diseases with 95% accuracy using a fine-tuned VGG-19 model. Includes healthy skin verification, NLP chatbot, and dermatologist locator.',
    tech: ['Python', 'Django', 'VGG-19', 'Machine Learning', 'NLP'],
    image: '/skin-assist.png',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Decentralized Voting System',
    description:
      'Secure, tamper-proof voting system using Ethereum smart contracts. Real-time vote tracking frontend in React, handling 1,000+ votes with zero discrepancies.',
    tech: ['Solidity', 'React.js', 'Web3.js', 'Ethereum'],
    image: '/voting-system.png',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Employee Management System',
    description:
      'C++ application managing over 10,000 employee records using file-based storage and O(log n) search. Ensures 100% data integrity via hash-based duplicate prevention.',
    tech: ['C++', 'OOP', 'File Handling', 'Data Structures'],
    image: '/employee-management.png',
    liveUrl: '#',
    githubUrl: '#'
  }
]

  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <a
                    href={project.liveUrl}
                    className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
                  >
                    <Eye className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors duration-300 text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
