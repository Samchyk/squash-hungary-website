'use client'

import Link from 'next/link'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/squash-hero.jpg"
          alt="Squash player in action"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-8 max-w-7xl mx-auto w-full py-32 md:py-48">
        <div className="flex flex-col gap-8 md:gap-12 max-w-2xl">
          {/* Main Headline */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-pretty">
              A Squash
              <span className="text-accent"> Művészete</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Fedezd fel az egyedi, dinamikus sport világát. Tanulj technikákat, ismerd meg a szabályokat és csatlakozz a magyarországi squash közösséghez.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center animate-fade-in-delay-2">
            <Link 
              href="/technikak"
              className="px-8 py-4 bg-accent text-accent-foreground font-lato font-bold rounded-sm hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Kezdj el tanulni
            </Link>
            <Link 
              href="/blog"
              className="px-8 py-4 border-2 border-foreground text-foreground font-lato font-bold rounded-sm hover:bg-muted transition-all duration-300 hover:scale-105"
            >
              Olvasd a blog cikkeket
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
