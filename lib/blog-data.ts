export type BlogCategory = 'Technikák' | 'Edzés' | 'Taktika' | 'Történelem' | 'Szabályok' | 'Felszerelés' | 'Kezdőknek'

export interface BlogArticle {
  id: string
  title: string
  description: string
  content: string
  category: BlogCategory
  author: string
  date: string
  readTime: number
  image?: string
}

export const blogArticles: BlogArticle[] = [
  {
    id: '1',
    title: 'Az Előfél Ütés Szerét Tökéletesítése',
    description: 'Tanulj meg egy erős és konzisztens előfél ütést. Ez az útmutató a kezdőktől a haladókig minden szintre alkalmazható.',
    category: 'Technikák',
    author: 'Kovács István',
    date: '2024',
    readTime: 8,
    content: `Az előfél ütés az egyik legfontosabb alapvetően squash ütésekben. Ez az ütés az erő és a pontosság kombinációját igényli.

Ahhoz, hogy tökéletesítse az előfél ütést, az alábbi lépéseket kell követnie:

1. Megfelelő Pozicionálás: Az előfél oldalon legyél, a pálya közepénél körülbelül 45 fokos szögben.
2. Készülödés: Emeld fel az ütőt a füled mögött, a könyök 90 fokos szögben.
3. Swing: Gyors, sima swing mozdulattal ütd meg a labdát az elülső fal felé.
4. Befejezés: A befejezés mozgása folyamatos legyen, a labda után a kezed kövesse.

A gyakorlás során ügyelj arra, hogy konzisztens legyen az ütés. Az első héten végezz 50-100 ismétlést naponta, hogy megalaposítsd az alapvetői mozgást.`
  },
  {
    id: '2',
    title: 'Edzésprogram a Squash Kezdőknek',
    description: 'Egy 4 hetes edzésprogram, amely segít fejleszteni az alapvető squash készségeket.',
    category: 'Edzés',
    author: 'Nagy Ágnes',
    date: '2024',
    readTime: 10,
    content: `A squash edzésprogramot helyesen kell felépíteni ahhoz, hogy elkerüld a sérüléseket és jó fejlődést érj el.

Az első héten az alapvetői mozgásokra koncetrálj:
- Napi 30 perc könnyű practice
- Alapvetői ütések ismétlése
- Mobilizációs gyakorlatok

A második héten add meg a tempót:
- 45 perc kevert gyakorlat
- Serváció gyakorlása
- Egy labda gyakorlattal
- Kondicionális edzés (futás, ugrotás)

A harmadik héten szimuláld a meccset:
- Rövidebb meccset játszva barátokkal
- Verseny szituációk gyakorlása
- Taktikai gyakorlatok

A negyedik héten az erő és a kitartás fejlesztése:
- Hosszabb edzések
- Erő edzések
- Kondicionális edzés intenzitásának növelése`
  },
  {
    id: '3',
    title: 'Squash Taktikai Tippek az Offenzívához',
    description: 'Fedezz fel agresszív taktikai lépéseket az ellenség elleni előnyömszerzéshez.',
    category: 'Taktika',
    author: 'Szalay Ferenc',
    date: '2024',
    readTime: 9,
    content: `Az offenzív taktika a squashban egy keyes komponense a meccs megnyerésének. Íme néhány taktika:

1. Gyors Labdaüzenet: Az ellenfélnek kevés ideje van reagálni, ha gyors ütéseket játszol.
2. Hálóközeli Labdák: A drop ütések gyakran nyomást helyeznek az ellenfélre.
3. Oldalsó Szögek: Széles szögű ütések az ellenfél mozgatására használva.
4. Hosszú Labdák: A labda az alapvonalig visszahelyezésével az ellenfél kiszorítható az offenzívából.

Ezeket a taktikákat kombinálva egy kiváló offenzív stratégia alakítható ki.`
  },
  {
    id: '4',
    title: 'A Squash Története Magyarországon',
    description: 'Hogyan érkeztek a squash játék Magyarországra és hogyan fejlődött azóta.',
    category: 'Történelem',
    author: 'Kovács István',
    date: '2024',
    readTime: 7,
    content: `A squash a 1990-es évek végén és az 2000-es évek elején érkezett Magyarországra.

Az első squash pályákat Budapestben építették fel, és hamar népszerűvé vált a középosztály körében. Az első hungarysquash szervezet 2002-ben alakult meg.

Ma már több mint 20 squash pálya működik az országban, és rendszeresen szerveznek versenyeket. A magyar játékosok között többen is nemzetközi szinten képviselik az országot.`
  },
  {
    id: '5',
    title: 'Squash Szabályok: Mit Lehet és Mit Nem',
    description: 'Ismerd meg a squash játékszabályok gyakori félreértéseit és tisztázd azokat.',
    category: 'Szabályok',
    author: 'Nagy Ágnes',
    date: '2024',
    readTime: 6,
    content: `Sok kezdő játékos nem ismeri pontosan a squash szabályokat. Íme a legfontosabb pontok:

1. Az Elülső Fal: Minden ütésnek az elülső falat kell érnie.
2. Dobott Labda: Ha a labda az alapvonalon túl halad, az hiba.
3. Let Pont: Ha az ellenfél az ütő útjában áll, lehet "let" ügyelni.
4. Interferencia: Az ellenfél útjának blokkolása tiltott.

Ezek az alapvetői szabályok, de még sok finomabb szabály létezik.`
  },
  {
    id: '6',
    title: 'A Tökéletes Squash Ütő Kiválasztása',
    description: 'Útmutató az ütő kiválasztásához a kezdőktől a profesiális szintig.',
    category: 'Felszerelés',
    author: 'Szalay Ferenc',
    date: '2024',
    readTime: 8,
    content: `Az ütő kiválasztása kritikus a squash játékhoz. Néhány szempontok:

1. Súly: A kezdőknek könnyebb ütőt (120-130g) ajánlanak.
2. Ütőfej Mérete: A nagyobb ütőfej több ütési felületet biztosít.
3. Anyag: A Carbon és a Graphite kombinációja ajánlott az erőt és az irányítást megtartva.
4. Ár: Nem szükséges a legdrágabb ütőt vásárolni az elején.

Kezdőknek egy 30-40 ezer forintos ütő jó választás.`
  },
  {
    id: '7',
    title: 'Squash Kezdőknek: Az Első Lépések',
    description: 'Egy teljes útmutató azok számára, akik most kezdenek el a squash sporttal.',
    category: 'Kezdőknek',
    author: 'Kovács István',
    date: '2024',
    readTime: 12,
    content: `Ha új vagy a squashban, az alábbi lépéseket javasoljuk:

1. Tanulj meg az alapvetői szabályokat. Olvasd el a korábbi blogposztokat a szabályokról.
2. Szerezz meg az alapvetői felszerelést: ütő, cipő, ruha.
3. Keress egy squash tanárt vagy egy barátot, aki segíthet az elindulásban.
4. Kezdj el rendszeres gyakorlással. A kezdőknek heti 2-3 edzés ideális.
5. Játssz könnyebb játékosokkal az elején, hogy fejlődhess magabiztosságodban.

A kitartás és a gyakorlás a sikerhez vezet!`
  },
  {
    id: '8',
    title: 'Sérülések Megelőzése a Squashban',
    description: 'Tippek és gyakorlatok a squash közös sérülések elkerüléséhez.',
    category: 'Edzés',
    author: 'Nagy Ágnes',
    date: '2024',
    readTime: 9,
    content: `A squash egy intenzív sport, és a sérülések gyakoribbak, mint gondolnád.

A leggyakoribb squash sérülések:
1. Könyöksérülések: Túl sok szerzés gyakorlása nélkül felépítés.
2. Térd sérülések: Gyors oldalmozgások a nem megfelelő cipő nélkül.
3. Felső hát fájdalom: Rossz pozícióban való hosszú idő.

Az alábbi gyakorlatok megelőzik a sérüléseket:
- Megfelelő bemelegítés 10-15 percig.
- Nyújtási gyakorlatok az edzés után.
- Lassú fejlődés az intenzitásban.
- Megfelelő cipő viselése.`
  },
  {
    id: '9',
    title: 'Mentális Játék a Squashban',
    description: 'Hogyan lehet jobban mentalisan felkészülni a squash versenyekre.',
    category: 'Taktika',
    author: 'Szalay Ferenc',
    date: '2024',
    readTime: 7,
    content: `A squash nem csak fizikai játék, hanem értelmes játék is. Az alábbi mentális tippek segíthetnek:

1. Összpontosítás: Maradj konzentriál az aktuális labdára.
2. Pozitív Gondolkodás: Higgy magadban és a képességedben.
3. Fejlesztési Célok: Halmazd meg a reális célokat az edzések alatt.
4. Relaxációs Technikák: Használj légzési gyakorlatokat a stressz csökkentésére.

A mentális felkészülés gyakran nagyobb szerepet játszik mint az fizikai készség.`
  },
  {
    id: '10',
    title: 'Squash Étkezés és Tápanyag',
    description: 'Az optimális étkezés és hidratáció squash játékosok számára.',
    category: 'Edzés',
    author: 'Kovács István',
    date: '2024',
    readTime: 8,
    content: `Az étkezés és a hidratáció kulcsosak a squash teljesítménye szempontjából.

Az edzések előtt 2-3 órával egyél szénhidrát gazdag ételt:
- Kenyér, rizs, vagy tészta
- Banán

Az edzések közben:
- Víz: A legfontosabb! Igyál 200-300 ml-t 15-20 percenként.
- Sportital: Szükséges az elektrolit pótlásához.

Az edzések után:
- Fehérje és szénhidrát: Csirke, hal, tojás
- Gyümölcs: A vitaminokért és az ásványi anyagokért

A megfelelő táplálkozás a gyorsabb helyreállítást és a jobb teljesítményt biztosít.`
  },
  {
    id: '11',
    title: 'Squash Pálya Oktatás',
    description: 'Ismerd meg a squash pálya részeit és működése módja.',
    category: 'Szabályok',
    author: 'Nagy Ágnes',
    date: '2024',
    readTime: 6,
    content: `A squash pálya egyedi felépítésű. Az alábbiakból áll:

1. Elülső Fal: Az a fal, amelyre az ütéseket kell lenni.
2. Oldalfalak: A játéktér szélén található falak.
3. Felső Fal: Az felső részen található fal.
4. Padlójelölések: A vonalak az ütések és a játék zónáit jelölik.

A pálya méretei:
- Szélesség: 6,4 m
- Hosszúság: 9,75 m
- Magasság: 5,6 m

A pálya megfelelő ismerete segít az ütések jobb megértésében.`
  },
  {
    id: '12',
    title: 'Az Agresszív Hátfél Ütés',
    description: 'Megtanulni az agresszív backhand ütést az ellenfél nyomásgyakortatásához.',
    category: 'Technikák',
    author: 'Szalay Ferenc',
    date: '2024',
    readTime: 8,
    content: `Az agresszív hátfél ütés a squash játékban erőteljes fegyver.

A hátfél ütés tulajdonságai:
1. Könyök Pozício: A könyök 90 fokos szögben maradjon.
2. Swing: Egy gyors felfelé irányított swing mozgás.
3. Erő: Az erő a vár-zár kombinációból ered.
4. Befejezés: A befejezés mozgása kövesse a labdát.

Az agresszív hátfél ütés gyakran az ellenfél elöttje nyomást helyez, és az ellenfél kiesítéséhez vezethet.`
  },
]

export const categories: BlogCategory[] = ['Technikák', 'Edzés', 'Taktika', 'Történelem', 'Szabályok', 'Felszerelés', 'Kezdőknek']

export function getArticlesByCategory(category: BlogCategory): BlogArticle[] {
  return blogArticles.filter(article => article.category === category)
}

export function getArticleById(id: string): BlogArticle | undefined {
  return blogArticles.find(article => article.id === id)
}
