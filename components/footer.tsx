'use client'

import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="font-playfair text-lg font-bold mb-4">hungarysquash</h3>
            <p className="text-sm leading-relaxed opacity-90">
              A magyarországi squash sportág legfontosabb információs portálja. Technikák, szabályok és közösség.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-base font-bold mb-4">Gyors linkek</h4>
            <ul className="space-y-2">
              <li><Link href="/technikak" className="text-sm hover:opacity-80 transition-opacity">Technikák</Link></li>
              <li><Link href="/tortenet" className="text-sm hover:opacity-80 transition-opacity">Történet</Link></li>
              <li><Link href="/szabalyok" className="text-sm hover:opacity-80 transition-opacity">Szabályok</Link></li>
              <li><Link href="/blog" className="text-sm hover:opacity-80 transition-opacity">Blog</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-playfair text-base font-bold mb-4">Jogi</h4>
            <ul className="space-y-2">
              <li><Link href="/adatvedelem" className="text-sm hover:opacity-80 transition-opacity">Adatvédelem</Link></li>
              <li><Link href="/sutik" className="text-sm hover:opacity-80 transition-opacity">Sütik</Link></li>
              <li><Link href="/kapcsolat" className="text-sm hover:opacity-80 transition-opacity">Kapcsolat</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground border-opacity-20 pt-8">
          <p className="text-sm text-center opacity-80">
            © {currentYear} contact@hungarysquash.com — <span>Minden jog fenntartva.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
