import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'

export const metadata = {
  title: 'Adatvédelem | hungarysquash',
  description: 'Az adatvédelmi nyilatkozat és adatkezelési irányelvek.',
}

export default function AdatvedelmPage() {
  const currentYear = new Date().getFullYear()

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <PageHeader
        subtitle="Jogi Információ"
        title="Adatvédelem"
        description="Információ az adatvédelmi irányelvekről és a személyes adatok kezeléséről."
      />

      <article className="py-20 md:py-32 px-4 md:px-8 max-w-4xl mx-auto w-full flex-grow">
        <div className="prose prose-sm md:prose-base max-w-none space-y-8">
          <section>
            <h2 className="font-playfair text-3xl font-bold mb-4">Bevezetés</h2>
            <p className="text-foreground leading-relaxed">
              A hungarysquash ("mi", "ránk", "a vállalkozás") kötelezettséget vállal az Ön személyes adatainak védelme iránt. Ez az adatvédelmi nyilatkozat elmagyarázza, hogyan gyűjtünk, használunk, megosztunk és védünk az adataikat a webhelyünk ("Site") használatakor.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-3xl font-bold mb-4">Gyűjtött Adatok</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Szükség szerint a következő információkat gyűjthetjük:
            </p>
            <ul className="space-y-3 list-disc list-inside text-foreground">
              <li>Név és email cím (amikor kapcsolatba lépnek velünk)</li>
              <li>Telefonszám (opcionális)</li>
              <li>A böngészés viselkedése és az IP-cím (automatikus)</li>
              <li>Süti és hasonló követési technológiák</li>
              <li>Egyéb információk, amelyeket önként megadnak</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-3xl font-bold mb-4">Az Adatok Felhasználása</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Az Ön személyes adatait az alábbi célokra használhatjuk:
            </p>
            <ul className="space-y-3 list-disc list-inside text-foreground">
              <li>Az Ön lekérdezéseinek vagy üzeneteinek megválaszolása</li>
              <li>Az Ön tapasztalatának javítása a Site-on</li>
              <li>A Site funkciójának fejlesztése</li>
              <li>Marketing és promóciós célok (ahol szükséges)</li>
              <li>Jogi és biztonsági okokból</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-3xl font-bold mb-4">Adatok Megosztása</h2>
            <p className="text-foreground leading-relaxed">
              Nem adjuk el, nem cseréljük és nem osztjuk meg az Ön személyes adatait harmadik felekkel, kivéve ha azt jogszabályok írják elő vagy az Ön kifejezett beleegyezése szükséges. Adatai csak olyan szolgáltatók számára kerülnek továbbításra, akik a Site működéséhez szükségesek (például email szolgáltatók, hosztingszolgáltatók).
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-3xl font-bold mb-4">Sütik</h2>
            <p className="text-foreground leading-relaxed">
              A Site sütik használ az Ön tapasztalatának javítása érdekében. A sütik kis adatfájlok, amelyeket az Ön böngészője tárol. Az Ön böngészőbeállításaiban letilthatja a sütik használatát, bár ez befolyásolhatja a Site funkcióit.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-3xl font-bold mb-4">Az Ön Jogai</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Személyes adatai tekintetében az alábbi jogokkal rendelkezik:
            </p>
            <ul className="space-y-3 list-disc list-inside text-foreground">
              <li>Hozzáférési jog: Tudhat az Ön adatairól és azok felhasználásáról</li>
              <li>Javítási jog: Kérhet helyesbítéseket helytelen adatokhoz</li>
              <li>Törlési jog: Alatt bizonyos körülmények között kérheti az Ön adatainak törlését</li>
              <li>Tiltás joga: Megtilthatja bizonyos adatfeldolgozási tevékenységeket</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-3xl font-bold mb-4">Biztonság</h2>
            <p className="text-foreground leading-relaxed">
              Meghatározott intézkedéseket végrehajtunk az Ön személyes adatainak védelme érdekében. Azonban az internet használatának biztonsága nem garantálható 100%-ban, és felelősséget nem vállalunk az interneten keresztül továbbított adatok biztonságáért.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-3xl font-bold mb-4">Adatvédelmi Megkeresések</h2>
            <p className="text-foreground leading-relaxed">
              Ha bármilyen kérdése van az adatvédelmet vagy az Ön személyes adatait illetően, kérjük, lépjen kapcsolatba velünk az alábbi email címen: info@hungarysquash.hu
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-3xl font-bold mb-4">A Nyilatkozat Változásai</h2>
            <p className="text-foreground leading-relaxed">
              Az Ön adatvédelmét szolgáló fejlesztések érdekében jogunk van az adatvédelmi nyilatkozat módosítására. Az összes módosítást értesítjük erről az oldalon történő közzétételével.
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
