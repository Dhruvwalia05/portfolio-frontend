'use client'

import { useEffect, useState } from 'react'

export default function AnimatedTitle() {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const titles = [
    'Full Stack Developer',
    'C++ Developer',
    'Problem Solver',
    'Creative Thinker'
  ]
  
  useEffect(() => {
    const currentTitle = titles[currentIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % titles.length)
        }
      }
    }, isDeleting ? 50 : 100)
    
    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, titles])
  
  return (
    <div className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
      <span className="text-white">Hi, I'm </span>
      <span className="text-blue-400">Dhrub</span>
      <br />
      <span className="text-gray-300">
        {displayText}
        <span className="animate-pulse text-blue-400">|</span>
      </span>
    </div>
  )
}
