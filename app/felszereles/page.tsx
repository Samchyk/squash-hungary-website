import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'

export const metadata = {
  title: 'Squash Felszerelés | hungarysquash',
  description: 'Útmutató a squash felszereléshez - ütők, labdák, cipők és más szükséges eszközök.',
}

export default function FelszerelesPage() {
  const equipment = [
    {
      title: 'Squash Ütő',
      description: 'Az ütő az egyik legfontosabb felszerelés. Tipikusan 120-150 gramm között vannak, és az ütőfej mérete szabályozott. Kezdőknek könnyebb ütőket ajánlanak, profiknak könnyebb, de erősebb anyagok.',
      specs: ['Hossz: 67,5 cm', 'Súly: 120-150 g', 'Ütőfej: max 500 cm²']
    },
    {
      title: 'Squash Labdák',
      description: 'A squash labdák kisebb és súlyosabb, mint a teniszlabdák. Különféle gyorsasági kategóriákban kaphatóak. Az "extra slow" kezdőknek, a "slow" közepes szintűeknek, és a "fast" professionáloknak való.',
      specs: ['Átmérő: 40,5 mm', 'Súly: 24 g', 'Fehér vagy sárga']
    },
    {
      title: 'Squash Cipők',
      description: 'Speciális squash cipőkre van szükség, amelyek jó támogatást és tapadást biztosítanak. Az alsó talp lapos és "gumizott", hogy ne károsítsa a pályát.',
      specs: ['Lapos talp', 'Oldalsó támogatás', 'Gumi talp']
    },
    {
      title: 'Ruházat',
      description: 'Kényelmes, mozgékony ruha szükséges. Sok körző visz squash szoknyát, de nadrágok is járulékosak. Az anyagnak légáthatónak és gyorsan száradónak kell lennie.',
      specs: ['Légáteresztő anyag', 'Mozgékonyság', 'Pálya szerint szabályozva']
    },
    {
      title: 'Biztonsági Szemüveg',
      description: 'A squash szemüveget speciálisan tervezték, hogy védjenek a labda okozta sérülésektől. Ajánlott minden szintű játékosnak, különösen a fiatalabbaknak.',
      specs: ['Ütésálló', 'Jó látás', 'Könnyű keretezés']
    },
    {
      title: 'Egyéb Felszerelés',
      description: 'Zsebkendő, izzadságcsepp, és egy jó minőségű sportöltözet. Ezek mind segítik az egyenletes teljesítményt a pályán.',
      specs: ['Izzadságfelmosó', 'Csipész', 'Táska']
    }
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <PageHeader
        subtitle="Felszerelés Útmutató"
        title="Squash Felszerelés"
        description="Fedezd fel az összes szükséges felszerelést a squash játékhoz - az ütőtől a cipőkig."
      />

      {/* Equipment Image Section */}
      <section className="py-0 md:py-8 px-4 md:px-8 max-w-7xl mx-auto w-full mb-12">
        <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-sm animate-fade-in">
          <Image
            src="/squash-equipment.jpg"
            alt="Squash equipment collection"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item, idx) => (
            <div 
              key={idx} 
              className="space-y-4 p-8 bg-card border-2 border-border rounded-sm hover:border-accent hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{
                animationDelay: `${idx * 100}ms`,
              }}
            >
              <h3 className="font-playfair text-2xl font-bold text-foreground hover:text-accent transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-foreground leading-relaxed">
                {item.description}
              </p>
              <div className="space-y-2 pt-4 border-t border-border">
                {item.specs.map((spec, specIdx) => (
                  <div key={specIdx} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-300">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-subtle" />
                    {spec}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-4xl font-bold mb-12 animate-fade-in">Vásárlási Tanácsok</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 p-8 bg-primary-foreground/5 rounded-sm hover:bg-primary-foreground/10 transition-all duration-300 animate-slide-in-left">
              <h4 className="text-xl font-bold">Kezdőknek</h4>
              <p className="text-sm leading-relaxed opacity-95">
                Nem szükséges a legdrágább felszerelést vásárolni. Az első lépésben közepesen minőségi ütő és cipő elegendő. Az ára körülbelül 30-40 ezer forint egy jó kezdő készlet.
              </p>
            </div>
            <div className="space-y-4 p-8 bg-primary-foreground/5 rounded-sm hover:bg-primary-foreground/10 transition-all duration-300 animate-slide-in-right">
              <h4 className="text-xl font-bold">Haladó Játékosoknak</h4>
              <p className="text-sm leading-relaxed opacity-95">
                A profi felszerelés jobb teljesítményt biztosít. Egy jó minőségű ütő 50-100 ezer forintos lehet. Szükséges több labda, biztonsági szemüveg, és speciális ruházat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
