import type { Metadata } from 'next'
import { Orbitron, Share_Tech_Mono, Rajdhani } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react'

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
});

const shareTechMono = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-share-tech-mono',
});

const rajdhani = Rajdhani({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-rajdhani',
});

export const metadata: Metadata = {
  title: 'Yuvan Rengifo | Portfolio',
  description: 'Software Engineer Portfolio - Yuvan Rengifo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${shareTechMono.variable} ${rajdhani.variable} 
        font-rajdhani bg-cyber-black text-white min-h-screen`}>
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
} 