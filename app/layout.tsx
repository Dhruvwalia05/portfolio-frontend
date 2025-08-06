import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dhrub Walia Portfolio',
  description: 'Portfolio of Dhrub, a passionate full stack developer specializing in modern web applications and user experiences.',
  keywords: 'full stack developer, web developer, React, Next.js, portfolio',
  authors: [{ name: 'Dhrub' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
