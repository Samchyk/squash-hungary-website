'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Logo } from './logo'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/technikak', label: 'Technikák' },
    { href: '/tortenet', label: 'Történet' },
    { href: '/szabalyok', label: 'Szabályok' },
    { href: '/felszereles', label: 'Felszerelés' },
    { href: '/blog', label: 'Blog' },
    { href: '/rolunk', label: 'Rólunk' },
    { href: '/kapcsolat', label: 'Kapcsolat' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <nav className="flex items-center justify-between px-4 md:px-8 py-4 max-w-7xl mx-auto w-full">
        <Logo />
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href}
                className="text-sm font-lato hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-foreground transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-foreground transition-all ${isOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-foreground transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <ul className="flex flex-col py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className="block px-4 md:px-8 py-3 text-sm font-lato hover:bg-muted transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
