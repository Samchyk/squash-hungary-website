'use client'

import Link from 'next/link'
import Image from 'next/image'

export function FeaturedSections() {
  const sections = [
    {
      title: 'Alapvető Technikák',
      description: 'Ismerd meg a squash alapjait - a megfelelő fogás, a swingmozgások és a pozicionálás titkai.',
      href: '/technikak',
      image: '/squash-techniques.webp',
      highlight: true,
    },
    {
      title: 'Squash Története',
      description: 'Egy gazdag múlt: hogyan született a squash, és hogyan fejlődött Magyarországon.',
      href: '/tortenet',
      image: '/squash-history.jpg',
    },
    {
      title: 'Játékszabályok',
      description: 'Az INQUSA szerinti nemzetközi szabályok és azok szokásos alkalmazása.',
      href: '/szabalyok',
      image: '/squash-rules.jpg',
    },
    {
      title: 'Felszerelés Útmutató',
      description: 'A tökéletes ütő kiválasztásától a helyes cipőig - mindent megtudhat az eszközökről.',
      href: '/felszereles',
      image: '/squash-equipment.jpg',
    },
  ]

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-16 text-center animate-fade-in">
        Fedezz fel Többet
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {sections.map((section, idx) => (
          <Link
            key={idx}
            href={section.href}
            className={`group relative overflow-hidden rounded-sm transition-all duration-500 hover:shadow-2xl animate-fade-in ${
              section.highlight
                ? 'md:col-span-2 lg:col-span-1'
                : ''
            }`}
            style={{
              animationDelay: `${idx * 100}ms`,
            }}
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={section.image}
                alt={section.title}
                fill
                className="object-cover brightness-75 group-hover:brightness-50 group-hover:scale-110 transition-all duration-500"
              />
              {!section.highlight && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/20"></div>
              )}
            </div>

            {/* Content */}
            <div className={`relative z-10 p-8 md:p-12 min-h-80 flex flex-col justify-end group-hover:translate-y-0 transition-transform duration-300 ${
              section.highlight
                ? 'bg-gradient-to-t from-accent to-accent/50'
                : ''
            }`}>
              <h3 className={`font-playfair text-2xl md:text-3xl font-bold mb-4 transition-colors duration-300 text-pretty ${
                section.highlight
                  ? 'text-accent-foreground'
                  : 'text-white group-hover:text-accent'
              }`}>
                {section.title}
              </h3>
              <p className={`text-base leading-relaxed mb-6 ${
                section.highlight
                  ? 'text-accent-foreground opacity-95'
                  : 'text-white/95'
              }`}>
                {section.description}
              </p>
              <div className="inline-block">
                <span className={`font-bold text-sm transition-all duration-300 group-hover:translate-x-2 inline-block ${
                  section.highlight
                    ? 'text-accent-foreground'
                    : 'text-white'
                }`}>
                  Tudj meg többet →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
