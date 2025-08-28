'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'
import { Github, Menu, Twitter, X } from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
}

const navLinks = [
  { href: '/', label: '首页' },
  { href: '/posts', label: '文章' },
  { href: '/about', label: '关于' },
]

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 font-sans">
      <header className="sticky top-0 z-30 w-full p-2
       supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/50 bg-white/80 dark:bg-gray-950/80 backdrop-blur">
        <div className="w-full flex items-center justify-between">
          <Link href="/">
            <span className="text-gray-500 dark:text-gray-100 font-semibold cursor-pointer" >Try2Realx</span>
          </Link>
          <div className="flex  items-center justify-end">
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex items-center gap-6 text-sm">
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <a href="#" aria-label="Twitter" className="hidden md:inline text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"><Twitter size={18} /></a>
                <a href="#" aria-label="GitHub" className="hidden md:inline text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"><Github size={18} /></a>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3 border-t border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/80 backdrop-blur">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900/40 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {children}
      </main>


    </div>
  )
}
