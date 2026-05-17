'use client'

export function SquashFactsSection() {
  const facts = [
    {
      number: '212 km/h',
      label: 'Labda Sebesség',
      description: 'A profi szervák maximális sebessége',
    },
    {
      number: '1830-as',
      label: 'Születése',
      description: 'Amikor a squash Londonban született',
    },
    {
      number: '75m²',
      label: 'Pálya Mérete',
      description: 'Egy standardizált squash pálya területe',
    },
    {
      number: '2000+',
      label: 'Sportolók',
      description: 'Regisztrált squash játékosok Magyarországon',
    },
  ]

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-16 text-center animate-fade-in">
          Squash Tények
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, idx) => (
            <div 
              key={idx}
              className="flex flex-col items-center text-center p-8 md:p-6 border-2 border-primary-foreground border-opacity-20 rounded-sm hover:border-opacity-100 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-slide-in-up"
              style={{
                animationDelay: `${idx * 100}ms`,
              }}
            >
              <div className="text-5xl md:text-4xl font-playfair font-bold mb-3 text-secondary group-hover:scale-110 transition-transform duration-300">
                {fact.number}
              </div>
              <h3 className="font-bold text-lg mb-2">{fact.label}</h3>
              <p className="text-sm opacity-90">{fact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
