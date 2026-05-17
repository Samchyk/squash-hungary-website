import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'

export const metadata = {
  title: 'Rólunk | hungarysquash',
  description: 'A hungarysquash projektről - missziónk, csapatunk és a squash közösséghez való elköteleződésünk.',
}

export default function RolunkPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <PageHeader
        subtitle="Rólunk"
        title="hungarysquash Missziónk"
        description="Ismerd meg a hungarysquash projektet - elkötelezettünk a squash sport fejlesztéséhez és támogatásához Magyarországon."
      />

      {/* Community Image Section */}
      <section className="py-0 md:py-8 px-4 md:px-8 max-w-7xl mx-auto w-full mb-12">
        <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-sm animate-fade-in">
          <Image
            src="/squash-community.jpg"
            alt="Squash community and players"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6 animate-slide-in-left">
            <h2 className="font-playfair text-4xl font-bold hover:text-accent transition-colors duration-300">Misszió</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              A hungarysquash missziónk az, hogy szeretünk a squash sporthoz férfi férfiak és nők, illetve minden kor számára. Elkötelezettünk abban, hogy magas minőségű információt, oktatást és közösségi támogatást nyújtsunk.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Hiszünk, hogy a squash nem csak egy sport, hanem egy egész életmód. Ezen az oldalon szeretnénk inspirálni az embereket, hogy fedezzék fel a squash szépségét és csatlakozhassanak a növekvő hungarysquash közösséghez.
            </p>
          </div>
          <div className="space-y-6 p-8 bg-accent text-accent-foreground rounded-sm animate-slide-in-right hover:shadow-lg transition-all duration-300">
            <h3 className="font-playfair text-2xl font-bold">Értékeink</h3>
            <ul className="space-y-4">
              {[
                { title: 'Inkluzi', desc: 'Mindenki számára nyitva, függetlenül a szintjétől' },
                { title: 'Minőség', desc: 'Magas szintű információ és oktatás' },
                { title: 'Közösség', desc: 'Egy erős és támogatólagus közösség' },
                { title: 'Fejlődés', desc: 'A squash sport fejlesztése hazánkban' }
              ].map((value, idx) => (
                <li key={idx} className="flex gap-3 hover:translate-x-1 transition-transform duration-300">
                  <span className="text-accent-foreground font-bold">✓</span>
                  <span>{value.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-4xl font-bold mb-12 animate-fade-in">Mit Kínálunk</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📚',
                title: 'Oktatási Tartalom',
                description: 'Részletes útmutatók, videók és cikkek a squash technikáról, szabályokról és történetéről.'
              },
              {
                icon: '🏆',
                title: 'Versenyek és Esemény',
                description: 'Információk a magyarországi squash versenyekről, bajnokságokról és közösségi eseményekről.'
              },
              {
                icon: '👥',
                title: 'Közösség',
                description: 'Csatlakozz más squash rajongókkal, oszd meg élményed és tanulj mások tapasztalataiból.'
              },
              {
                icon: '🎯',
                title: 'Kezdőknek Útmutató',
                description: 'Egy teljes útmutató azok számára, akik most kezdenek el a squash sporttal.'
              },
              {
                icon: '💡',
                title: 'Tanácsok és Tippek',
                description: 'Praktikus tanácsok a fejlődésről, felszerelésről és stratégiáról.'
              },
              {
                icon: '🌍',
                title: 'Nemzetközi Információ',
                description: 'Híreket és információkat az nemzetközi squash világáról.'
              },
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="space-y-4 p-8 bg-background border-2 border-border rounded-sm hover:border-accent hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="font-playfair text-xl font-bold hover:text-accent transition-colors duration-300">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="font-playfair text-4xl font-bold mb-12 text-center animate-fade-in">Csapatunk</h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
          A hungarysquash projektet szenvedélyes squash rajongók támogatják, akiknek célja a sport fejlesztése és a közösség erősítése.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Kovács István', role: 'Alapító', desc: 'Régóta szán passziót a squashhoz, felsőfokú szintű játékos.' },
            { name: 'Nagy Ágnes', role: 'Edukáció Lead', desc: 'Oktatási szakértő, fiatal játékosok edukációjáért felelős.' },
            { name: 'Szalay Ferenc', role: 'Közösségi Manager', desc: 'Közösségi rendezvények szervezése és a közösség erősítése.' },
          ].map((member, idx) => (
            <div 
              key={idx} 
              className="space-y-4 p-8 bg-card border-2 border-border rounded-sm text-center hover:border-accent hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-up"
              style={{
                animationDelay: `${idx * 150}ms`,
              }}
            >
              <div className="w-20 h-20 mx-auto bg-accent rounded-full flex items-center justify-center text-accent-foreground text-3xl font-playfair font-bold hover:scale-110 transition-transform duration-300">
                {member.name.split(' ')[0][0]}{member.name.split(' ')[1][0]}
              </div>
              <h3 className="font-playfair text-xl font-bold hover:text-accent transition-colors duration-300">{member.name}</h3>
              <p className="text-accent font-bold text-sm">{member.role}</p>
              <p className="text-sm text-muted-foreground">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-primary text-primary-foreground text-center">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
          <h2 className="font-playfair text-4xl font-bold">Csatlakozz a Közösséghez</h2>
          <p className="text-lg opacity-90">
            Csatlakozz a növekvő hungarysquash közösséghez. Legyen szórakozásra szolgáló vagy versenyképes szint, meleg fogadtatást kapunk.
          </p>
          <a 
            href="/kapcsolat"
            className="inline-block px-8 py-4 bg-secondary text-foreground font-bold rounded-sm hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Lépj Kapcsolatba Velünk
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
