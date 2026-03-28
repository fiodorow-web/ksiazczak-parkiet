/**
 * Dane miast do generowania stron PSEO: /cyklinowanie-[slug]
 * Dodaj nowe miasto → automatycznie wygeneruje się nowa strona.
 *
 * WAŻNE DLA SEO: Każde miasto MUSI mieć unikalną treść!
 * Nie kopiuj tekstów między miastami — Google karze za duplicate content.
 */

export interface Miasto {
  slug: string;
  nazwa: string;
  nazwaOkolice: string;
  odleglosc: string;
  /** Unikalny opis hero pod H1 — 2-3 zdania */
  heroOpis: string;
  /** Główna sekcja — długi unikalny tekst o pracy w tym mieście */
  opis: string;
  /** 4 unikalne atuty */
  atuty: string[];
  /** Unikalne karty korzyści (4 szt.) */
  korzysci: { icon: string; title: string; desc: string }[];
  /** Unikalna sekcja dodatkowa — H2 + 2-3 akapity */
  sekcjaExtra: { tytul: string; tresc: string[] };
  /** Unikalne etapy pracy (4-5 kroków, opisy dostosowane do miasta) */
  etapy: { n: number; title: string; desc: string }[];
  /** Unikalne FAQ (4-5 pytań) */
  faq: { q: string; a: string }[];
}

export const miasta: Miasto[] = [
  // ═══════════════════════════════════════════════════
  //  SIEDLCE
  // ═══════════════════════════════════════════════════
  {
    slug: 'siedlce',
    nazwa: 'Siedlce',
    nazwaOkolice: 'Siedlcach i okolicach',
    odleglosc: '30 km od naszej siedziby',

    heroOpis: 'Siedlce to nasz główny teren działania od ponad 25 lat. Znamy tu każdą ulicę i dzielnicę. Setki odnowionych podłóg w domach, mieszkaniach i lokalach użytkowych na terenie Siedlec i pobliskich miejscowości.',

    opis: 'Nasza siedziba w Mordach znajduje się zaledwie 30 km od centrum Siedlec, dlatego to miasto obsługujemy najczęściej i najsprawniej. Na przestrzeni ponad 25 lat zrealizowaliśmy setki zleceń w siedleckich kamienicach, blokach z lat 70. i 80., nowych osiedlach oraz domach jednorodzinnych w okolicach. Doskonale znamy specyfikę lokalnego budownictwa – wiemy jakie parkiety były układane w siedleckich blokach, jakie drewno sprawdza się najlepiej w tym klimacie i jak przygotować podłogę do renowacji. Dojazd do Siedlec jest dla nas bezpłatny, a termin wyceny ustalamy zazwyczaj w ciągu 1–2 dni.',

    atuty: [
      'Dojazd do Siedlec zawsze gratis — to nasz główny teren',
      'Termin wyceny w ciągu 1–2 dni, w pilnych przypadkach tego samego dnia',
      'Setki zrealizowanych zleceń w siedleckich blokach i domach',
      'Znamy specyfikę parkietów w lokalnym budownictwie z lat 70–90',
    ],

    korzysci: [
      { icon: '🚗', title: 'Dojazd gratis', desc: 'Siedlce to nasz główny obszar — nie doliczamy kosztów dojazdu' },
      { icon: '📅', title: 'Szybki termin', desc: 'Wycena w 1–2 dni, realizacja zazwyczaj w bieżącym tygodniu' },
      { icon: '🏘️', title: 'Lokalna wiedza', desc: 'Znamy siedleckie budownictwo — bloki, kamienice, nowe osiedla' },
      { icon: '🤝', title: 'Rekomendacje', desc: 'Polecani przez sąsiadów — setki zadowolonych klientów w Siedlcach' },
    ],

    sekcjaExtra: {
      tytul: 'Renowacja parkietów w siedleckich blokach i kamienicach',
      tresc: [
        'Siedlce to miasto z bogatą historią budownictwa — od zabytkowych kamienic w centrum, przez bloki z wielkiej płyty z lat 70. i 80., po nowoczesne osiedla na obrzeżach. W wielu z tych budynków leżą oryginalne parkiety dębowe i sosnowe, które po latach użytkowania wymagają profesjonalnej renowacji.',
        'W siedleckich blokach najczęściej spotykamy klasyczną mozaikę parkietową (tzw. klepka) oraz parkiet lamelowy w układzie cegiełki. Te podłogi, mimo zniszczeń, mają ogromny potencjał — po cyklinowaniu i lakierowaniu wyglądają jak nowe i służą kolejne 15–20 lat. Technologia bezpyłowa jest tu szczególnie ważna, bo w blokach nie chcemy przeszkadzać sąsiadom.',
        'W domach jednorodzinnych w okolicach Siedlec (Stok Lacki, Żelków, Wiśniew) pracujemy najczęściej z deskami sosnowymi i parkietem dębowym na klejonce. Każdą podłogę traktujemy indywidualnie — oceniamy grubość warstwy użytkowej, stan podłoża i proponujemy optymalne rozwiązanie.',
      ],
    },

    etapy: [
      { n: 1, title: 'Umów wycenę telefonicznie', desc: 'Zadzwoń — jesteśmy w Siedlcach na miejscu. Bezpłatnie ocenimy podłogę i doradzimy najlepsze wykończenie.' },
      { n: 2, title: 'Przygotowanie podłogi', desc: 'Zabezpieczamy sąsiednie pomieszczenia, sprawdzamy gwoździe i stan podłoża. W blokach szczególnie dbamy o ciszę pracy.' },
      { n: 3, title: 'Szlifowanie bezpyłowe', desc: 'Cyklinujemy maszyną z odsysaniem pyłu — w siedleckich blokach to kluczowe, żeby nie przeszkadzać sąsiadom.' },
      { n: 4, title: 'Szpachlowanie i wykończenie', desc: 'Wypełniamy szpary, nakładamy 2–3 warstwy lakieru lub oleju. Po 24h podłoga gotowa do użytkowania.' },
    ],

    faq: [
      {
        q: 'Czy dojeżdżacie do Siedlec bezpłatnie?',
        a: 'Tak, Siedlce to nasz główny teren działania. Nasza siedziba znajduje się w Mordach, 30 km od centrum Siedlec. Dojazd jest zawsze bezpłatny — zarówno na wycenę, jak i na realizację zlecenia.',
      },
      {
        q: 'Jak szybko możecie rozpocząć cyklinowanie w Siedlcach?',
        a: 'W Siedlcach działamy najszybciej — wycenę robimy zazwyczaj w ciągu 1–2 dni roboczych, a realizację rozpoczynamy najczęściej w tym samym tygodniu. W pilnych przypadkach jesteśmy w stanie przyjechać nawet tego samego dnia.',
      },
      {
        q: 'Czy cyklinujecie parkiety w blokach w Siedlcach?',
        a: 'Tak, to nasza specjalność! W siedleckich blokach najczęściej spotykamy mozaikę parkietową i parkiet lamelowy dębowy z lat 70–80. Technologia bezpyłowa jest idealna do mieszkań w blokach — nie roznosi pyłu po klatce schodowej i nie przeszkadza sąsiadom.',
      },
      {
        q: 'Jakie miejscowości w okolicach Siedlec obsługujecie?',
        a: 'Obsługujemy Siedlce i wszystkie okoliczne miejscowości: Stok Lacki, Żelków, Wiśniew, Mokobody, Skórzec, Zbuczyn, Mordy, Łosice, Sarnaki i inne w promieniu ok. 50 km od Siedlec.',
      },
      {
        q: 'Czy mogę zostać w mieszkaniu podczas cyklinowania?',
        a: 'Tak! Nasze maszyny wychwytują ponad 99% pyłu drzewnego bezpośrednio w miejscu szlifowania. Możesz spokojnie przebywać w sąsiednich pokojach. Prosimy jedynie o opróżnienie pomieszczenia z mebli.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  //  WARSZAWA
  // ═══════════════════════════════════════════════════
  {
    slug: 'warszawa',
    nazwa: 'Warszawa',
    nazwaOkolice: 'Warszawie i okolicach',
    odleglosc: '100 km od naszej siedziby',

    heroOpis: 'Regularnie obsługujemy klientów w Warszawie — od zabytkowych kamienic na Starym Mieście po nowoczesne apartamentowce na Wilanowie. Profesjonalny sprzęt bezpyłowy idealny do stołecznych mieszkań i biur.',

    opis: 'Warszawa to nasze drugie najważniejsze miasto. Dojeżdżamy tu regularnie i mamy bogate doświadczenie z warszawskim budownictwem — od przedwojennych kamienic z oryginalnymi parkietami dębowymi w jodełkę, przez bloki z wielkiej płyty na Ursynowie i Bielanach, po luksusowe apartamenty na Mokotowie i Wilanowie. W stolicy pracujemy z wymagającymi klientami: zarządcami nieruchomości, architektami wnętrz i deweloperami. Dowozimy pełen zestaw profesjonalnego sprzętu i organizujemy pracę tak, żeby zminimalizować niedogodności — szczególnie w apartamentowcach z restrykcyjnymi regulaminami.',

    atuty: [
      'Regularne zlecenia w Warszawie — znamy specyfikę stołecznych mieszkań',
      'Doświadczenie z przedwojennymi kamienicami i parkietami w jodełkę',
      'Sprzęt bezpyłowy idealny do apartamentowców z restrykcyjnymi regulaminami',
      'Współpracujemy z architektami wnętrz i zarządcami nieruchomości',
    ],

    korzysci: [
      { icon: '🏛️', title: 'Kamienice i jodełka', desc: 'Doświadczenie z przedwojennymi parkietami dębowymi w warszawskich kamienicach' },
      { icon: '🏢', title: 'Apartamentowce', desc: 'Sprzęt bezpyłowy spełnia wymagania nawet najbardziej restrykcyjnych regulaminów' },
      { icon: '🎨', title: 'Współpraca z architektami', desc: 'Realizujemy projekty we współpracy z warszawskimi biurami projektowymi' },
      { icon: '📋', title: 'Pełna organizacja', desc: 'Zorganizujemy harmonogram prac dopasowany do wspólnoty mieszkaniowej' },
    ],

    sekcjaExtra: {
      tytul: 'Cyklinowanie parkietów w warszawskich kamienicach',
      tresc: [
        'Warszawskie kamienice kryją prawdziwe skarby — oryginalne parkiety dębowe układane w jodełkę angielską i francuską, nierzadko sprzed 80–100 lat. Te podłogi, odpowiednio odnowione, to nie tylko piękne wykończenie wnętrza, ale też element historyczny podnoszący wartość mieszkania. Mamy wieloletnie doświadczenie w renowacji takich podłóg.',
        'Pracując w kamienicach stosujemy technologię bezpyłową, która jest wręcz niezbędna — pył drzewny w zabytkowych budynkach z ozdobnymi sztukateriami i oryginalnymi drzwiami mógłby wyrządzić nieodwracalne szkody. Nasze maszyny wychwytują ponad 99% pyłu, chroniąc zarówno Twoje mieszkanie, jak i zabytkowe elementy budynku.',
        'W nowoczesnych warszawskich apartamentowcach na Mokotowie, Wilanowie czy Kabatach spotykamy głównie deski dębowe warstwowe i parkiety klejone. Tutaj kluczowa jest organizacja — wiele wspólnot ma ścisłe regulaminy dotyczące głośnych prac remontowych. Dostosowujemy harmonogram do wymagań budynku i informujemy administrację z wyprzedzeniem.',
      ],
    },

    etapy: [
      { n: 1, title: 'Konsultacja telefoniczna', desc: 'Opowiedz o podłodze — typ, stan, metraż. Ustalimy wstępny zakres prac i umówimy oględziny w Warszawie.' },
      { n: 2, title: 'Oględziny i wycena na miejscu', desc: 'Przyjedziemy z pełnym sprzętem pomiarowym. Ocenimy grubość warstwy użytkowej, stan podłoża i doradzimy wykończenie.' },
      { n: 3, title: 'Realizacja prac', desc: 'Dowozimy sprzęt bezpyłowy z Siedlec. Pracujemy intensywnie — salon cyklinujemy w jeden dzień. Przy większych metrażach zostawiamy sprzęt i wracamy następnego dnia.' },
      { n: 4, title: 'Lakierowanie lub olejowanie', desc: 'Po cyklinowaniu nakładamy warstwy wykończenia z pełnym schnięciem między nimi. Efekt końcowy: podłoga jak nowa, gotowa do użytkowania.' },
    ],

    faq: [
      {
        q: 'Czy obsługujecie całą Warszawę?',
        a: 'Tak, dojeżdżamy do wszystkich dzielnic Warszawy. Regularnie pracujemy na Mokotowie, Żoliborzu, Wilanowie, Ursynowie, Woli, Pradze, Bielanach, Kabatach i Bemowie. Obsługujemy też podwarszawskie miejscowości: Piaseczno, Józefów, Marki, Legionowo i inne.',
      },
      {
        q: 'Czy cyklinujecie parkiety w jodełkę w kamienicach?',
        a: 'Tak, to jedna z naszych specjalności. Mamy bogate doświadczenie z oryginalnymi parkietami dębowymi w jodełkę angielską i francuską w warszawskich kamienicach. Potrafimy odnowić nawet bardzo zniszczone podłogi, przywracając im dawny blask.',
      },
      {
        q: 'Czy w apartamentowcu cyklinowanie nie będzie przeszkadzać sąsiadom?',
        a: 'Technologia bezpyłowa jest znacznie cichsza niż tradycyjna i nie wytwarza pyłu, który mógłby dostać się na klatkę schodową. Dodatkowo dostosowujemy godziny pracy do regulaminu budynku i informujemy administrację z wyprzedzeniem.',
      },
      {
        q: 'Ile trwa cyklinowanie mieszkania w Warszawie?',
        a: 'Typowe mieszkanie (40–60 m²) cyklinujemy w ciągu jednego dnia roboczego. Kompletna renowacja z lakierowaniem (2–3 warstwy z schnięciem) wymaga 2–4 dni. Przy dużych metrażach pracujemy kilka dni z rzędu.',
      },
      {
        q: 'Czy współpracujecie z architektami wnętrz?',
        a: 'Tak, regularnie współpracujemy z warszawskimi biurami projektowymi i architektami wnętrz. Dobieramy typ wykończenia (lakier matowy/satynowy, olej naturalny/bejcowany) zgodnie z projektem. Możemy też doradzić architekci w kwestii doboru drewna.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  //  MIŃSK MAZOWIECKI
  // ═══════════════════════════════════════════════════
  {
    slug: 'minsk-mazowiecki',
    nazwa: 'Mińsk Mazowiecki',
    nazwaOkolice: 'Mińsku Mazowieckim i okolicach',
    odleglosc: '60 km od naszej siedziby',

    heroOpis: 'Mińsk Mazowiecki leży dokładnie na naszej trasie do Warszawy — obsługujemy ten region regularnie i bez dodatkowych kosztów dojazdu. Dynamicznie rozwijające się miasto z dużym zapotrzebowaniem na renowację podłóg w nowym i starym budownictwie.',

    opis: 'Mińsk Mazowiecki to strategicznie położone miasto na trasie Siedlce–Warszawa, które obsługujemy regularnie od wielu lat. Region miński przeżywa dynamiczny rozwój — powstają nowe osiedla domów jednorodzinnych, a jednocześnie w centrum zachowała się starsza zabudowa z oryginalnymi drewnianymi podłogami wymagającymi renowacji. Nasza lokalizacja w Mordach sprawia, że dojazd do Mińska jest szybki i tani. Znamy okoliczne miejscowości — Sulejówek, Halinów, Dębe Wielkie, Kałuszyn, Cegłów — i często łączymy kilka zleceń w jednym wyjeździe, co pozwala nam oferować atrakcyjne warunki.',

    atuty: [
      'Mińsk na naszej stałej trasie — dojazd szybki i bez dodatkowych kosztów',
      'Doświadczenie z nowym budownictwem jednorodzinnym w okolicach Mińska',
      'Obsługujemy też Sulejówek, Halinów, Dębe Wielkie i Kałuszyn',
      'Łączymy zlecenia w regionie — korzystne warunki dla klientów',
    ],

    korzysci: [
      { icon: '📍', title: 'Na naszej trasie', desc: 'Mińsk leży na trasie Siedlce–Warszawa, więc jesteśmy tu regularnie' },
      { icon: '🏡', title: 'Nowe i stare domy', desc: 'Doświadczenie z podłogami w nowych domach i starszych budynkach' },
      { icon: '🗺️', title: 'Cały powiat miński', desc: 'Obsługujemy Sulejówek, Halinów, Dębe Wielkie, Kałuszyn, Cegłów' },
      { icon: '💡', title: 'Fachowe doradztwo', desc: 'Pomożemy wybrać między lakierem a olejem — bezpłatnie doradzimy na miejscu' },
    ],

    sekcjaExtra: {
      tytul: 'Podłogi w nowym budownictwie okolic Mińska Mazowieckiego',
      tresc: [
        'Okolice Mińska Mazowieckiego to jeden z najdynamiczniej rozwijających się regionów podmiejskich Mazowsza. Powstaje tu mnóstwo domów jednorodzinnych, w których deweloperzy i inwestorzy prywatni coraz częściej wybierają podłogi z litego drewna zamiast paneli — deski dębowe, jesionowe i parkiety lamelowe.',
        'W nowych domach kluczowe jest prawidłowe przygotowanie podłogi przed pierwszym lakierowaniem lub olejowaniem. Producenci desek warstwowych często dostarczają je surowe lub z fabrycznym zabezpieczeniem tymczasowym, które trzeba usunąć. Profesjonalne cyklinowanie i wykończenie zapewnia równomierną powłokę ochronną i wieloletnią trwałość.',
        'W starszej zabudowie Mińska i okolic (Cegłów, Kałuszyn, Latowicz) spotykamy tradycyjne parkiety sosnowe i dębowe wymagające gruntownej renowacji. Po latach użytkowania bywają mocno zarysowane, poszarzałe lub pokryte wieloma warstwami starych lakierów. Nasze maszyny bezpyłowe radzą sobie nawet z takimi wyzwaniami — zdejmujemy stare powłoki i przywracamy drewnu naturalny kolor.',
      ],
    },

    etapy: [
      { n: 1, title: 'Kontakt i wycena', desc: 'Zadzwoń do nas — umówimy się na bezpłatne oględziny w Mińsku Mazowieckim lub okolicach. Ocenimy podłogę i doradzimy najlepsze rozwiązanie.' },
      { n: 2, title: 'Ustalenie terminu', desc: 'Często łączymy kilka zleceń w regionie mińskim, dzięki czemu możemy zaproponować szybki termin i korzystne warunki.' },
      { n: 3, title: 'Cyklinowanie i szpachlowanie', desc: 'Szlifujemy podłogę maszyną bezpyłową, wypełniamy szpary i nierówności. Pracujemy czysto — po zakończeniu zabieramy ze sobą wszystkie odpady.' },
      { n: 4, title: 'Wybrane wykończenie', desc: 'Lakier wodny, poliuretanowy lub olej do drewna — dobieramy zgodnie z przeznaczeniem pomieszczenia i Twoimi preferencjami estetycznymi.' },
    ],

    faq: [
      {
        q: 'Czy dojeżdżacie do Mińska Mazowieckiego?',
        a: 'Tak, Mińsk Mazowiecki leży na naszej stałej trasie między Siedlcami a Warszawą (ok. 60 km od naszej siedziby). Dojeżdżamy regularnie i bezpłatnie wykonujemy wycenę na miejscu.',
      },
      {
        q: 'Jakie miejscowości w okolicach Mińska obsługujecie?',
        a: 'Oprócz samego Mińska Mazowieckiego obsługujemy Sulejówek, Halinów, Dębe Wielkie, Kałuszyn, Cegłów, Latowicz, Mrozy i inne miejscowości w powiecie mińskim. Często łączymy kilka zleceń w jednym wyjeździe.',
      },
      {
        q: 'Czy cyklinujecie podłogi w nowych domach?',
        a: 'Tak — w nowym budownictwie w okolicach Mińska często kładziemy i wykańczamy podłogi od zera: deski surowe wymagające pierwszego szlifu i lakierowania lub olejowania. Profesjonalne wykończenie zapewnia wieloletnią ochronę i piękny wygląd.',
      },
      {
        q: 'Lakier czy olej — co polecacie do domu jednorodzinnego?',
        a: 'W domach jednorodzinnych często polecamy olej do sypialni i salonu (naturalny wygląd, ciepło w dotyku) i lakier do kuchni, korytarza i łazienki (twardsza ochrona przed wilgocią i ścieraniem). Bezpłatnie doradzimy na miejscu.',
      },
      {
        q: 'Jak przygotować dom do cyklinowania?',
        a: 'Prosimy o opróżnienie pomieszczenia z mebli (pomożemy z cięższymi). Technologia bezpyłowa nie wymaga zabezpieczania innych pokojów — pył nie roznosi się po domu. Resztą zajmujemy się sami!',
      },
    ],
  },
];
