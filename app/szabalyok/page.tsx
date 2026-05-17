import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'

export const metadata = {
  title: 'Squash Szabályok | hungarysquash',
  description: 'Az INQUSA szerinti nemzetközi squash szabályok - pontszámítás, szerváció, egyebek.',
}

export default function SzabalyokPage() {
  const rules = [
    {
      category: 'Pontszámítás',
      items: [
        'Az INQUSA szabályok szerint pontot kap az, aki megnyeri a labdáért',
        'Egy csapata 11 pontig játszik, de 2 pontos előny szükséges győzelemhez',
        'Négy szet közül a legtöbb szetet nyerő játékos lesz a mérkőzés győztese',
        'Ha egy szet 10-10, akkor 12-ig játszanak, ha ez után még 11-11, akkor 13-ig.'
      ]
    },
    {
      category: 'Szerváció',
      items: [
        'A szervát az alulról indított mozdulattal adják',
        'A labda először az ellenség fele feletti falat kell érje',
        'A szervált labda nem üthet az ellenfél falára vagy az oldalfalra',
        'Ha az ellenfél visszaszolgáltats, a szerzőnek kell megütnie ismét'
      ]
    },
    {
      category: 'Pálya Szabályok',
      items: [
        'A pálya 20 láb széles és 32 láb hosszú (kb. 6,4m x 9,75m)',
        'Minden labda ütésének az elülső falat kell érnie',
        'A labda csak egyszer verődik földre az ellenfél lövés között',
        'Ha a labda az első falat ütve visszajön, az őt ütő játékos üthet ismét'
      ]
    },
    {
      category: 'Játékos Felelőssége',
      items: [
        'A játékos biztosítani kell, hogy az ellenfél biztosan látja az ütest',
        'Interferencia a pályán tiltott - az ellenfél útját nem szabad blokkolni',
        'A játékosnak ki kell kerülnie az ellenfél útját',
        'A labdáért versengő játékosok egyenlő jogú, de az interferencia tiltott'
      ]
    },
    {
      category: 'Let Pont',
      items: [
        'Ha az ellenfél az ütő útjában áll, lehet "let" ügyelni',
        'Let után az ütés ismétlődik, de pontszerzésre nincs lehetőség',
        'A "stroke" ütésnél az ellenfél feladata az interferencia elkerülése',
        'Megfelelő körülmények között az ütő gyakorta "Let"-et kérhet'
      ]
    },
    {
      category: 'Hibás Ütések',
      items: [
        'Ha a labda kétszer ütődik egy ütés között, az hiba',
        'Az alulról adott szerzőnél a labdának felfelé kell haladnia',
        'Ha a labda az első fal alatt halad el, az általában hiba',
        'Az "Out" ütések, amikor a labda a falat azon kívül ütik, amelyen belül még játszható'
      ]
    }
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <PageHeader
        subtitle="Játékszabályok"
        title="Squash Szabályok"
        description="Az INQUSA szerinti nemzetközi squash szabályok - ismerd meg a játék alapvető és haladó szabályait."
      />

      {/* Rules Image Section */}
      <section className="py-0 md:py-8 px-4 md:px-8 max-w-7xl mx-auto w-full mb-12">
        <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-sm animate-fade-in">
          <Image
            src="/squash-rules.jpg"
            alt="Squash rules and referee"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* Rules Grid */}
      <section className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {rules.map((ruleSet, idx) => (
            <div 
              key={idx} 
              className="space-y-6 p-8 bg-card border-2 border-border rounded-sm hover:border-accent hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-up"
              style={{
                animationDelay: `${idx * 100}ms`,
              }}
            >
              <h3 className="font-playfair text-2xl font-bold text-foreground hover:text-accent transition-colors duration-300">
                {ruleSet.category}
              </h3>
              <ul className="space-y-3">
                {ruleSet.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex gap-3 text-foreground leading-relaxed hover:translate-x-1 transition-transform duration-300">
                    <span className="text-accent font-bold flex-shrink-0 animate-pulse-subtle">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Reference */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-4xl font-bold mb-12 animate-fade-in">Gyors Referencia</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4 animate-scale-in">
              <h4 className="text-xl font-bold">Pontszerzés</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between p-3 bg-background rounded-sm border border-border hover:border-accent transition-all duration-300 hover:scale-105">
                  <span>Szet nyerése</span>
                  <span className="font-bold">11 pont</span>
                </div>
                <div className="flex justify-between p-3 bg-background rounded-sm border border-border hover:border-accent transition-all duration-300 hover:scale-105">
                  <span>Döntetlen szet</span>
                  <span className="font-bold">12-ig</span>
                </div>
                <div className="flex justify-between p-3 bg-background rounded-sm border border-border hover:border-accent transition-all duration-300 hover:scale-105">
                  <span>Szuperpontszerzés</span>
                  <span className="font-bold">13-ig</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 animate-scale-in" style={{ animationDelay: '100ms' }}>
              <h4 className="text-xl font-bold">Pálya Méretek</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between p-3 bg-background rounded-sm border border-border hover:border-accent transition-all duration-300 hover:scale-105">
                  <span>Szélesség</span>
                  <span className="font-bold">6,4 m</span>
                </div>
                <div className="flex justify-between p-3 bg-background rounded-sm border border-border hover:border-accent transition-all duration-300 hover:scale-105">
                  <span>Hosszúság</span>
                  <span className="font-bold">9,75 m</span>
                </div>
                <div className="flex justify-between p-3 bg-background rounded-sm border border-border hover:border-accent transition-all duration-300 hover:scale-105">
                  <span>Magasság</span>
                  <span className="font-bold">5,6 m</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 animate-scale-in" style={{ animationDelay: '200ms' }}>
              <h4 className="text-xl font-bold">Egyebek</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between p-3 bg-background rounded-sm border border-border hover:border-accent transition-all duration-300 hover:scale-105">
                  <span>Ütő hossza</span>
                  <span className="font-bold">67,5 cm</span>
                </div>
                <div className="flex justify-between p-3 bg-background rounded-sm border border-border hover:border-accent transition-all duration-300 hover:scale-105">
                  <span>Labda átmérő</span>
                  <span className="font-bold">40,5 mm</span>
                </div>
                <div className="flex justify-between p-3 bg-background rounded-sm border border-border hover:border-accent transition-all duration-300 hover:scale-105">
                  <span>Szetek száma</span>
                  <span className="font-bold">3 vagy 5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
