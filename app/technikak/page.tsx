import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'

export const metadata = {
  title: 'Squash Technikák | hungarysquash',
  description: 'Tanulj meg alapvető és haladó squash technikákat - fogás, swing, pozicionálás és taktika.',
}

export default function TechnikakPage() {
  const techniques = [
    {
      title: 'A Megfelelő Fogás',
      content: 'Az ütő megfelelő tartása alapvető fontosságú. A "continental grip" vagy "V-grip" a legáltalánosabb. Az ujjak csak lazán fogják az ütőt, nem szorosan. Ez lehetővé teszi a gyors mozgást és a precíz ütéseket.',
    },
    {
      title: 'Az Elő- és Hátfél Ütés',
      content: 'A klasszikus swing mozgás három fázisra osztható: a felkészülés, a fel(swing) és a befejezés. Az előfél ütés (forehand) az erősebb, míg a hátfél ütés (backhand) nagyobb precizitást igényel.',
    },
    {
      title: 'A Szerváció',
      content: 'A szervát az alulról indított hálószöget végzett mozgással adják. Az üres szögből kezdve, a labda a cél falat kell, hogy érje először az ellenfél fele feletti területen.',
    },
    {
      title: 'Visszaszolgáltatás (Return)',
      content: 'A szerzőnél az alapvonalon, vagy ahhoz közeli területen kell állni. Az agresszív állás segíti az ellenfél nyomása alatt megtartani az iniciátívát.',
    },
    {
      title: 'Lob és Drop',
      content: 'A lob egy magas, mély ütés, amely visszahelyezi az ellenfél a játék kontrollja alatt. A drop ütés közel a hálóba teszi a labdát, megkövételve ellenfél gyors mozgása az udvaron.',
    },
    {
      title: 'Pozicionálás a Pályán',
      content: 'A jó pozicionálás a squash szívében van. A központi pályáról kontrolálható a legtöbb labda. Az "T" pozíció az alapvonal és oldalsó vonal metszéspontja, ideális középső helyzet.',
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <PageHeader
        subtitle="Fejlesztés és Tudás"
        title="Squash Technikák"
        description="Fedezd fel az alapvető és haladó technikákat, amelyek segítségével fejlődhetsz a squash pályán. A megfelelő technika az alapja a játékbeli fejlődésnek."
      />

      {/* Techniques Image Section */}
      <section className="py-0 md:py-8 px-4 md:px-8 max-w-7xl mx-auto w-full mb-12">
        <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-sm animate-fade-in">
          <Image
            src="/squash-techniques.webp"
            alt="Squash techniques demonstration"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {techniques.map((technique, idx) => (
            <div 
              key={idx} 
              className="space-y-4 animate-slide-in-up hover:translate-y-0 transition-transform duration-500"
              style={{
                animationDelay: `${idx * 100}ms`,
              }}
            >
              <h3 className="font-playfair text-2xl font-bold text-foreground hover:text-accent transition-colors duration-300">
                {technique.title}
              </h3>
              <p className="text-foreground leading-relaxed">
                {technique.content}
              </p>
              <div className="h-1 w-12 bg-accent rounded-full animate-pulse-subtle" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-4xl font-bold mb-12 text-center animate-fade-in">
            Gyakorlati Tanácsok
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Konzisztencia',
                desc: 'A rendszeres gyakorlás biztosítja a mozgások memorálását és automatizálódását.'
              },
              {
                title: 'Pihenés és Felépítés',
                desc: 'Ne felejtsd el a felépítési gyakorlatokat - az ütések stabilitása jól kialakított izomcsoportoktól függ.'
              },
              {
                title: 'Videó Analízis',
                desc: 'A saját játékod videóanalízise segít a hibák azonosításában és javításában.'
              },
            ].map((tip, idx) => (
              <div 
                key={idx} 
                className="p-8 bg-background rounded-sm border-2 border-border hover:border-accent animate-scale-in hover:shadow-lg transition-all duration-300"
                style={{
                  animationDelay: `${idx * 150}ms`,
                }}
              >
                <h4 className="font-playfair text-xl font-bold mb-3">{tip.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
