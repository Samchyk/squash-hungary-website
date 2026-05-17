import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'

export const metadata = {
  title: 'Squash Története | hungarysquash',
  description: 'A squash sport lenyűgöző története - az eredeteiktől napjainkig.',
}

export default function TortenelPage() {
  const timeline = [
    {
      year: '1830-as évek',
      title: 'A Squash Születése',
      description: 'A squash a londoni Fleet Prison börtön udvarán született, amikor a foglyok raquets játékot kezdtek játszani egy gömb alakú labdával a szűkebb térben.'
    },
    {
      year: '1883',
      title: 'Az Első Squash Pályák',
      description: 'A Bath Club-ban az Egyesült Királyságban felépítették az első modern squash pályákat. Az angol arisztokrácia körében gyorsan népszerűvé vált.'
    },
    {
      year: '1920',
      title: 'Észak-Amerikában',
      description: 'Az Egyesült Államokba és Kanadába is megérkezett a squash, ahol saját variációi fejlődtek ki.'
    },
    {
      year: '1976',
      title: 'Nemzetközi Közösség',
      description: 'Az INQUSA (International Squash Racquets Federation) megalapítása standardizálta a szabályokat világszerte.'
    },
    {
      year: '1990-es évek',
      title: 'Magyarország',
      description: 'A squash sport megérkezik Magyarországra. Az első pályák Budapesten nyílnak meg, és gyorsan alakul a hungarysquash közösség.'
    },
    {
      year: '2000-től',
      title: 'Modern Fejlődés',
      description: 'A squash ma már népszerű szabadidős és verseny sport. Rendszeres bajnokságok és nemzetközi versenyek szerveződnek Magyarországon.'
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <PageHeader
        subtitle="Múlt és Jelen"
        title="Squash Története"
        description="Felfedezd a squash sport gazdag történetét, az egyszerű börtön játéktól a mai nemzetközi sportig."
      />

      {/* Timeline Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="space-y-12 md:space-y-16">
          {timeline.map((event, idx) => (
            <div key={idx} className="flex gap-8 md:gap-12">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-playfair font-bold text-lg md:text-xl">
                  {idx + 1}
                </div>
                {idx < timeline.length - 1 && (
                  <div className="w-1 h-24 md:h-32 bg-border mt-4" />
                )}
              </div>
              <div className="pt-2 pb-8 md:pb-12">
                <p className="text-accent font-bold text-sm uppercase tracking-wide">{event.year}</p>
                <h3 className="font-playfair text-2xl md:text-3xl font-bold mt-2 mb-3">
                  {event.title}
                </h3>
                <p className="text-foreground leading-relaxed max-w-2xl">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-4xl font-bold mb-12">Érdekes Tények</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold">Az Eredete</h4>
              <p className="leading-relaxed text-sm opacity-95">
                A squash szó a labda "squash" vagy összetöredezésére utal. Az eredeti raquets játékból az 1870-es évekre fejlődött ki a mai squash, amikor az ütőket megújították és más típusú labdákat kezdtek használni.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold">Olimpiai Jelölt</h4>
              <p className="leading-relaxed text-sm opacity-95">
                Noha a squash nem olimpiai sport, több alkalommal próbálta elérni az olimpiai státuszt. Az IOC-nél több pályázat benyújtása sikertelen volt, de az olimpiai dimenziót kapta a Youth Olympic Games-ben.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold">Híres Játékosok</h4>
              <p className="leading-relaxed text-sm opacity-95">
                Az egyik leghíresebb squash játékos az angol Jemma Lannigan, aki 2 alkalommal nyert világbajnokságot. A férfi kategóriában a pákisztáni Jahangir Khan és az amerikai Paul T. Nicol legendás játékosok.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold">Hazai Fejlődés</h4>
              <p className="leading-relaxed text-sm opacity-95">
                Magyarország a közép-európai squash központtá fejlődött. Budapest több nemzetközi versenyt is fogadott, és hazai játékosaink többen is megmérkőztek nemzetközi szinten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
