import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'

export const metadata = {
  title: 'Sütik Politikája | hungarysquash',
  description: 'Információ a sütikről és az azok kezelésének módjáról.',
}

export default function SutikPage() {
  const currentYear = new Date().getFullYear()
  const lastUpdated = new Date().toLocaleDateString('hu-HU')

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <PageHeader
        subtitle="Jogi Információ"
        title="Sütik Politikája"
        description="Ismerj meg a sütik használatáról és az Ön választásairól a webhelyünkön."
      />

      <article className="py-20 md:py-32 px-4 md:px-8 max-w-4xl mx-auto w-full flex-grow">
        <div className="prose prose-sm md:prose-base max-w-none space-y-8">
          <div className="p-4 bg-muted rounded-sm border border-border text-sm">
            <p className="font-bold">Utolsó frissítés: {lastUpdated}</p>
          </div>

          <section>
            <h2 className="font-playfair text-3xl font-bold mb-4">Mi Azok a Sütik?</h2>
            <p className="text-foreground leading-relaxed">
              A sütik (cookies) kis szöveges fájlok, amelyeket az Ön webböngészője tárol az Ön számítógépén vagy mobileszközén. Amikor visszatérnek a webhelyünkhöz, a böngésző elküldi a sütit a szervereknek, amely lehetővé teszi számunkra az Ön tapasztalatának személyre szabását.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-3xl font-bold mb-4">A Sütik Típusai</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Szükséges Sütik</h3>
                <p className="text-foreground leading-relaxed">
                  Ezek a sütik szükségesek a weboldal alapvető működéséhez. Ezek nélkül a webhely nem működne megfelelően. Ezek közé tartoznak a session sütik, amelyek az Ön munkamenete alatt maradnak aktívak.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">Teljesítmény Sütik</h3>
                <p className="text-foreground leading-relaxed">
                  Ezek a sütik az Ön böngészési viselkedésének követésére szolgálnak, és segítenek nekünk a webhely teljesítményének javításában. Információt gyűjtenek arról, hogyan használod a webhelyet.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">Marketing Sütik</h3>
                <p className="text-foreground leading-relaxed">
                  Ezek a sütik az Ön érdeklődése alapján személyre szabott reklámok megjelenítésére szolgálnak. Az Ön beleegyezésével ezek a sütik csak akkor helyezkednek el.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">Harmadik Fél Sütik</h3>
                <p className="text-foreground leading-relaxed">
                  Néhány harmadik féltől származó szolgáltatás (mint az analytics vagy reklámozás) saját sütikkal rendelkezhet, amelyeket az Ön böngészőjében tárolnak.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-playfair text-3xl font-bold mb-4">A Sütik Kezelése</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Az Ön böngészőbeállítások módosításával vezérelheti a sütik kezeléseit:
            </p>
            <ul className="space-y-3 list-disc list-inside text-foreground">
              <li><strong>Chrome:</strong> Beállítások → Adatvédelem és biztonság → Sütik</li>
              <li><strong>Firefox:</strong> Beállítások → Adatvédelem és biztonság → Sütik</li>
              <li><strong>Safari:</strong> Beállítások → Adatvédelem → Sütik</li>
              <li><strong>Edge:</strong> Beállítások → Adatvédelem, keresés és szolgáltatások → Sütik</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-3xl font-bold mb-4">Az Ön Választása</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Választhat a sütik elfogadása vagy elutasítása között:
            </p>
            <ul className="space-y-3 list-disc list-inside text-foreground">
              <li>Szükséges sütik: Nem lehet letiltani őket, mivel szükségesek a webhely működéséhez</li>
              <li>Opcionális sütik: Letilthatja ezeket az Ön böngészőbeállításaiban</li>
              <li>Harmadik féltől származó sütik: Nyomon követésjelentésekben szintén szerkesztheti az Ön preferenciáit</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-3xl font-bold mb-4">A Sütik Törlése</h2>
            <p className="text-foreground leading-relaxed">
              A böngésző eszköztárában vagy beállításaiban találhatók opciók a sütik törlésére. Megjegyzendő, hogy néhány webhely funkció elveszhet, ha Ön törlöd az összes sütit.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-3xl font-bold mb-4">Egészségügyi Megfontolások</h2>
            <p className="text-foreground leading-relaxed">
              Ha aggódnak az adatvédelmi vagy biztonsági kérdésekről sütikkel kapcsolatban, javaslom, hogy olvassák el az adatvédelmi nyilatkozatunkat.
            </p>
          </section>

          <section className="pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {currentYear} hungarysquash. Minden jog fenntartva.
            </p>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  )
}
