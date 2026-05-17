import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
});

const lato = Lato({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: 'hungarysquash',
  description: 'Premium squash sports and information website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" className="bg-background">
      <body className={`${playfair.variable} ${lato.variable} font-lato antialiased bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
