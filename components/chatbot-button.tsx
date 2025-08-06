'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([])
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  const toggleChat = () => setIsOpen(!isOpen)

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    const userMessage = message.trim()
    setMessage('')
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }])
    setLoading(true)

    try {
      const res = await fetch('https://portfolio-backend-s1n3.onrender.com/talk-to-bot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, { sender: 'bot', text: data.reply }])
    } catch (err) {
      setMessages(prev => [
        ...prev,
        { sender: 'bot', text: 'Something went wrong. Please try again.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-24 right-6 w-80 h-96 backdrop-blur-md bg-gradient-to-br from-gray-800/80 to-gray-900/90 border border-gray-600 rounded-xl shadow-2xl z-40 flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-600">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Dhrub's Assistant</h3>
                <p className="text-xs text-green-400">Online</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-600">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-3"
            >
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-3 h-3 text-white" />
              </div>
              <div className="bg-gray-700 text-white p-3 rounded-xl rounded-tl-none max-w-xs">
                <p className="text-sm">
                  Hi! I'm Dhrub's AI assistant. Ask me anything about his experience, skills, or
                  projects!
                </p>
              </div>
            </motion.div>

            {/* Dynamic Messages */}
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'gap-3'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-3 h-3 text-white" />
                  </div>
                )}
                <div
                  className={`${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-xl rounded-br-none'
                      : 'bg-gray-700 text-white rounded-xl rounded-tl-none'
                  } p-3 max-w-xs text-sm whitespace-pre-wrap`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}

            {/* Typing Indicator */}
            {loading && (
              <div className="flex gap-2 text-sm text-gray-400 italic px-2">
                <span>Dhrub's assistant is typing</span>
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  ...
                </motion.span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-600">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors duration-300"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 transform hover:scale-110"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </>
  )
}
