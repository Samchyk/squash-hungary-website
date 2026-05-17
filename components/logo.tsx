'use client'

import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-playfair font-bold text-2xl text-foreground hover:text-accent transition-colors">
      <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center text-accent-foreground font-bold">
        S
      </div>
      <span className="text-balance">hungarysquash</span>
    </Link>
  )
}
