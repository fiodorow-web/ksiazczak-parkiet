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
      { icon: 'M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z', title: 'Dojazd gratis', desc: 'Siedlce to nasz główny obszar — nie doliczamy kosztów dojazdu' },
      { icon: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z', title: 'Szybki termin', desc: 'Wycena w 1–2 dni, realizacja zazwyczaj w bieżącym tygodniu' },
      { icon: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z', title: 'Lokalna wiedza', desc: 'Znamy siedleckie budownictwo — bloki, kamienice, nowe osiedla' },
      { icon: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z', title: 'Rekomendacje', desc: 'Polecani przez sąsiadów — setki zadowolonych klientów w Siedlcach' },
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
      { icon: 'M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z', title: 'Kamienice i jodełka', desc: 'Doświadczenie z przedwojennymi parkietami dębowymi w warszawskich kamienicach' },
      { icon: 'M9 3v2H5v2h4v2L12 5 9 3zm6 0l3 4-3 2V7h-4V5h4V3zM5 11h14v2H5v-2zm0 4h14v2H5v-2zm0 4h14v2H5v-2z', title: 'Apartamentowce', desc: 'Sprzęt bezpyłowy spełnia wymagania nawet najbardziej restrykcyjnych regulaminów' },
      { icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z', title: 'Współpraca z architektami', desc: 'Realizujemy projekty we współpracy z warszawskimi biurami projektowymi' },
      { icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z', title: 'Pełna organizacja', desc: 'Zorganizujemy harmonogram prac dopasowany do wspólnoty mieszkaniowej' },
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
      { icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z', title: 'Na naszej trasie', desc: 'Mińsk leży na trasie Siedlce–Warszawa, więc jesteśmy tu regularnie' },
      { icon: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z', title: 'Nowe i stare domy', desc: 'Doświadczenie z podłogami w nowych domach i starszych budynkach' },
      { icon: 'M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z', title: 'Cały powiat miński', desc: 'Obsługujemy Sulejówek, Halinów, Dębe Wielkie, Kałuszyn, Cegłów' },
      { icon: 'M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z', title: 'Fachowe doradztwo', desc: 'Pomożemy wybrać między lakierem a olejem — bezpłatnie doradzimy na miejscu' },
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

  // ═══════════════════════════════════════════════════
  //  ŁUKÓW
  // ═══════════════════════════════════════════════════
  {
    slug: 'lukow',
    nazwa: 'Łuków',
    nazwaOkolice: 'Łukowie i okolicach',
    odleglosc: '40 km od naszej siedziby',

    heroOpis: 'Łuków to jedno z najbliższych miast, które obsługujemy regularnie. Zaledwie 40 km od naszej siedziby — jesteśmy na miejscu szybko i bez dodatkowych kosztów dojazdu. Renowacja parkietów i podłóg drewnianych w domach, mieszkaniach i lokalach na terenie Łukowa i powiatu łukowskiego.',

    opis: 'Łuków i okolice to teren, który obsługujemy niemal codziennie. Bliskość naszej siedziby w Mordach (zaledwie 40 km) sprawia, że jesteśmy tu na miejscu w ciągu godziny. Przez ponad 25 lat odnowiliśmy setki podłóg w łukowskich blokach, domach jednorodzinnych i lokalach użytkowych. Znamy specyfikę lokalnego budownictwa — od starszych mieszkań z mozaiką parkietową po nowe domy z deskami litymi na ogrzewaniu podłogowym. Dojazd do Łukowa jest bezpłatny.',

    atuty: [
      'Łuków to nasz najbliższy duży sąsiad — dojazd zawsze gratis',
      'Wycena na miejscu w ciągu 1 dnia roboczego',
      'Doświadczenie z parkietami w blokach z lat 80-90 w Łukowie',
      'Obsługujemy też Stoczek Łukowski, Adamów, Stanin i okolice',
    ],

    korzysci: [
      { icon: 'M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z', title: 'Dojazd gratis', desc: 'Łuków to nasz najbliższy duży sąsiad — 40 km bez kosztów dojazdu' },
      { icon: '11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z', title: 'Ekspresowa wycena', desc: 'Bezpłatna wycena na miejscu w ciągu 1 dnia roboczego' },
      { icon: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z', title: 'Bloki i domy', desc: 'Doświadczenie z parkietami w łukowskich blokach i nowych domach' },
      { icon: 'M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z', title: 'Doradztwo', desc: 'Pomożemy wybrać lakier lub olej — doradzamy bezpłatnie na miejscu' },
    ],

    sekcjaExtra: {
      tytul: 'Renowacja podłóg w Łukowie i powiecie łukowskim',
      tresc: [
        'Łuków to dynamicznie rozwijające się miasto z mieszanką starszej i nowej zabudowy. W centrum i na starszych osiedlach spotykamy klasyczne parkiety dębowe i sosnowe z lat 70-90, które po profesjonalnym cyklinowaniu odzyskują swój dawny blask. W nowych domach na obrzeżach miasta coraz częściej instalowane są deski warstwowe i parkiet na ogrzewaniu podłogowym.',
        'Obsługujemy nie tylko sam Łuków, ale też okoliczne miejscowości: Stoczek Łukowski, Adamów, Stanin, Trzebieszów i Wojcieszków. Często łączymy zlecenia w regionie, co pozwala nam oferować szybkie terminy i korzystne warunki.',
        'W Łukowie szczególnie popularne jest olejowanie podłóg — naturalny, matowy efekt świetnie komponuje się z drewnianymi domami, których w okolicach jest dużo. Doradzamy klientom indywidualnie — bezpłatnie na miejscu.',
      ],
    },

    etapy: [
      { n: 1, title: 'Kontakt telefoniczny', desc: 'Zadzwoń — Łuków to nasz najbliższy duży sąsiad. Umówimy się na wycenę nawet tego samego dnia.' },
      { n: 2, title: 'Bezpłatna wycena', desc: 'Przyjedziemy, ocenimy stan podłogi, zmierzymy metraż i doradzimy optymalne wykończenie.' },
      { n: 3, title: 'Cyklinowanie bezpyłowe', desc: 'Szlifujemy maszyną z systemem Bona DCS — ponad 99% pyłu wychwytywane u źródła.' },
      { n: 4, title: 'Wykończenie', desc: 'Lakier wodny, poliuretanowy lub olej naturalny — 2-3 warstwy z pełnym schnięciem. Podłoga gotowa po 24h.' },
    ],

    faq: [
      {
        q: 'Czy dojeżdżacie do Łukowa bezpłatnie?',
        a: 'Tak! Łuków leży zaledwie 40 km od naszej siedziby w Mordach. Dojazd jest zawsze bezpłatny — zarówno na wycenę, jak i na realizację zlecenia.',
      },
      {
        q: 'Jak szybko możecie rozpocząć prace w Łukowie?',
        a: 'W Łukowie działamy bardzo szybko — wycenę robimy najczęściej w ciągu 1 dnia roboczego. Realizację rozpoczynamy zazwyczaj w tym samym lub następnym tygodniu.',
      },
      {
        q: 'Czy cyklinujecie podłogi w łukowskich blokach?',
        a: 'Tak, to nasza codzienność. W łukowskich blokach najczęściej spotykamy mozaikę parkietową i parkiet lamelowy z lat 80-90. Technologia bezpyłowa jest idealna do mieszkań w blokach.',
      },
      {
        q: 'Jakie miejscowości w okolicach Łukowa obsługujecie?',
        a: 'Oprócz Łukowa obsługujemy Stoczek Łukowski, Adamów, Stanin, Trzebieszów, Wojcieszków i inne miejscowości powiatu łukowskiego.',
      },
      {
        q: 'Czy cyklinujecie podłogi na ogrzewaniu podłogowym?',
        a: 'Tak, mamy doświadczenie z deskami i parkietami na ogrzewaniu podłogowym. Wyłączamy ogrzewanie na czas pracy i dobieramy odpowiedni lakier lub olej, który dobrze znosi cykliczne zmiany temperatury.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  //  BIAŁA PODLASKA
  // ═══════════════════════════════════════════════════
  {
    slug: 'biala-podlaska',
    nazwa: 'Biała Podlaska',
    nazwaOkolice: 'Białej Podlaskiej i okolicach',
    odleglosc: '80 km od naszej siedziby',

    heroOpis: 'Biała Podlaska to wschodnia granica naszego głównego zasięgu. Regularnie dojeżdżamy do tego miasta i okolic, oferując profesjonalne cyklinowanie bezpyłowe podłóg drewnianych. Ponad 25 lat doświadczenia w renowacji parkietów.',

    opis: 'Biała Podlaska leży około 80 km od naszej siedziby, co nie stanowi dla nas żadnego problemu. Dojeżdżamy tu regularnie — miasto ma duże zapotrzebowanie na profesjonalną renowację podłóg drewnianych, a lokalnych specjalistów od cyklinowania bezpyłowego brakuje. Znamy specyfikę bialskopodlaskiego budownictwa: bloki z wielkiej płyty z parkietem mozaikowym, kamienice w centrum z parkietem dębowym oraz nowe osiedla domów jednorodzinnych z deskami litymi i warstwowymi. Obsługujemy też okoliczne miejscowości: Terespol, Międzyrzec Podlaski, Radzyń Podlaski i Łosice.',

    atuty: [
      'Regularnie obsługujemy Białą Podlaską — dojeżdżamy bez problemu',
      'Brak lokalnej konkurencji w cyklinowaniu bezpyłowym — najlepszy wybór w regionie',
      'Obsługujemy też Terespol, Międzyrzec Podlaski, Radzyń Podlaski',
      'Profesjonalny sprzęt Bona DCS — jedyni w regionie z tą technologią',
    ],

    korzysci: [
      { icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z', title: 'Dojeżdżamy regularnie', desc: 'Biała Podlaska to stały punkt na naszej mapie zleceń' },
      { icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z', title: 'Jedyni z Bona DCS', desc: 'Brak lokalnej konkurencji w technologii bezpyłowej w regionie' },
      { icon: '20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z', title: 'Cały region', desc: 'Terespol, Międzyrzec Podlaski, Radzyń Podlaski, Łosice' },
      { icon: '16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z', title: 'Rekomendowani', desc: 'Polecani przez klientów z Białej Podlaskiej i okolic' },
    ],

    sekcjaExtra: {
      tytul: 'Cyklinowanie bezpyłowe w Białej Podlaskiej — dlaczego warto?',
      tresc: [
        'W Białej Podlaskiej i okolicach trudno znaleźć firmę oferującą cyklinowanie bezpyłowe z prawdziwego zdarzenia. Większość lokalnych ekip używa tradycyjnych maszyn, które generują ogromne ilości pyłu. My przywozimy pełen zestaw sprzętu Bona DCS z filtracją HEPA — technologię, której nie oferuje nikt inny w regionie.',
        'W bialskopodlaskich blokach z lat 70-80 leżą oryginalne parkiety dębowe i mozaiki, które po cyklinowaniu wyglądają jak nowe. W starszych kamienicach w centrum miasta spotykamy parkiety w jodełkę — piękne po renowacji i podnoszące wartość nieruchomości.',
        'Mimo większej odległości (80 km) organizujemy pracę tak, żeby klient nie ponosił nadmiernych kosztów. Często łączymy kilka zleceń w regionie — jeśli Twój sąsiad też potrzebuje cyklinowania, obaj zysk macie na czasie i kosztach.',
      ],
    },

    etapy: [
      { n: 1, title: 'Kontakt i wstępna wycena', desc: 'Zadzwoń — opowiedz o podłodze i podeślij zdjęcia. Wstępnie wycenimy zlecenie telefonicznie.' },
      { n: 2, title: 'Oględziny na miejscu', desc: 'Przyjedziemy do Białej Podlaskiej, ocenimy podłogę i przedstawimy dokładną wycenę. Bezpłatnie.' },
      { n: 3, title: 'Realizacja prac', desc: 'Dowozimy sprzęt i pracujemy intensywnie — typowe mieszkanie cyklinujemy w 1 dzień. Zostawiamy sprzęt jeśli potrzeba.' },
      { n: 4, title: 'Wykończenie i odbiór', desc: 'Lakierowanie lub olejowanie w 2-3 warstwach. Po 24h podłoga gotowa do użytkowania.' },
    ],

    faq: [
      {
        q: 'Czy dojeżdżacie do Białej Podlaskiej?',
        a: 'Tak, regularnie. Biała Podlaska leży ok. 80 km od naszej siedziby. Dojeżdżamy bez problemu — zarówno na wycenę, jak i na realizację zlecenia.',
      },
      {
        q: 'Ile kosztuje dojazd do Białej Podlaskiej?',
        a: 'Koszt dojazdu ustalamy indywidualnie, ale jest symboliczny. Często łączymy kilka zleceń w regionie, dzięki czemu koszty dojazdu rozkładają się. Zadzwoń — podamy konkretną kwotę.',
      },
      {
        q: 'Czy obsługujecie Terespol i Międzyrzec Podlaski?',
        a: 'Tak! Obsługujemy Białą Podlaską i wszystkie okoliczne miasta: Terespol, Międzyrzec Podlaski, Radzyń Podlaski, Łosice, Parczew i inne.',
      },
      {
        q: 'Czy warto cyklinować stary parkiet czy lepiej wymienić na panele?',
        a: 'Zdecydowanie warto! Parkiet dębowy po cyklinowaniu wygląda jak nowy i jest trwalszy niż panele. Cyklinowanie jest też tańsze niż wymiana podłogi. Po renowacji parkiet służy kolejne 15-20 lat.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  //  GARWOLIN
  // ═══════════════════════════════════════════════════
  {
    slug: 'garwolin',
    nazwa: 'Garwolin',
    nazwaOkolice: 'Garwolinie i okolicach',
    odleglosc: '70 km od naszej siedziby',

    heroOpis: 'Garwolin leży na trasie między Siedlcami a Warszawą. Obsługujemy to miasto regularnie, łącząc zlecenia w regionie. Profesjonalne cyklinowanie bezpyłowe, lakierowanie i olejowanie podłóg drewnianych.',

    opis: 'Garwolin i powiat garwoliński to teren, który dobrze znamy. Miasto leży na trasie S17 między Siedlcami a Warszawą, więc przejeżdżamy tędy regularnie i chętnie przyjmujemy zlecenia z tego regionu. Garwolin dynamicznie się rozwija — powstają nowe osiedla domów jednorodzinnych, w których właściciele coraz częściej wybierają podłogi z litego drewna zamiast paneli. Jednocześnie w starszej zabudowie (bloki, kamienice) leżą parkiety wymagające profesjonalnej renowacji. Obsługujemy też Pilawę, Żelechów, Łaskarzew, Maciejowice i okoliczne miejscowości.',

    atuty: [
      'Garwolin na naszej stałej trasie Siedlce–Warszawa — korzystne warunki',
      'Doświadczenie z nowym budownictwem domów jednorodzinnych',
      'Obsługujemy cały powiat garwoliński: Pilawa, Żelechów, Łaskarzew',
      'Łączymy zlecenia w regionie — szybkie terminy realizacji',
    ],

    korzysci: [
      { icon: 'M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z', title: 'Na trasie S17', desc: 'Garwolin na naszej trasie — korzystne warunki dojazdu' },
      { icon: '10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z', title: 'Nowe domy', desc: 'Montaż i wykończenie podłóg w nowym budownictwie' },
      { icon: '11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z', title: 'Szybki termin', desc: 'Łączymy zlecenia w regionie — krótki czas oczekiwania' },
      { icon: '9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z', title: 'Profesjonalne doradztwo', desc: 'Bezpłatna ocena i doradztwo przy wyborze wykończenia' },
    ],

    sekcjaExtra: {
      tytul: 'Podłogi drewniane w Garwolinie i powiecie garwolińskim',
      tresc: [
        'Okolice Garwolina przeżywają budowlany boom — na obrzeżach miasta i w pobliskich miejscowościach (Pilawa, Wola Rębkowska) powstaje mnóstwo nowych domów jednorodzinnych. Właściciele coraz częściej decydują się na podłogi z litego drewna: deski dębowe, jesionowe i parkiety lamelowe.',
        'W nowych domach kluczowe jest prawidłowe przygotowanie podłogi — pierwsze szlifowanie i wykończenie lakierem lub olejem. Robimy to profesjonalnie, z użyciem sprzętu bezpyłowego, co jest szczególnie ważne w nowym domu, gdzie nie chcesz pyłu na świeżo pomalowanych ścianach.',
        'W starszej zabudowie Garwolina spotykamy tradycyjne parkiety dębowe i mozaiki parkietowe. Po 20-30 latach użytkowania wymagają gruntownej renowacji — cyklinowania, szpachlowania i nowego wykończenia. Po naszej pracy parkiet wygląda jak nowy i służy kolejne 15-20 lat.',
      ],
    },

    etapy: [
      { n: 1, title: 'Zadzwoń po wycenę', desc: 'Umówimy się na bezpłatne oględziny w Garwolinie lub okolicach. Ocenimy podłogę i doradzimy wykończenie.' },
      { n: 2, title: 'Ustalenie terminu', desc: 'Łączymy zlecenia w regionie garwolińskim — dzięki temu oferujemy szybkie terminy i korzystne warunki.' },
      { n: 3, title: 'Cyklinowanie bezpyłowe', desc: 'Szlifujemy podłogę maszyną Bona DCS — czysto, bez pyłu, bez bałaganu w nowym domu.' },
      { n: 4, title: 'Lakier lub olej', desc: 'Nakładamy 2-3 warstwy wybranego wykończenia. Po 24h podłoga gotowa do użytkowania.' },
    ],

    faq: [
      {
        q: 'Czy dojeżdżacie do Garwolina?',
        a: 'Tak, Garwolin leży na naszej stałej trasie (S17 Siedlce–Warszawa). Dojeżdżamy regularnie i chętnie przyjmujemy zlecenia z tego regionu.',
      },
      {
        q: 'Jakie miejscowości w okolicach Garwolina obsługujecie?',
        a: 'Obsługujemy cały powiat garwoliński: Garwolin, Pilawę, Żelechów, Łaskarzew, Maciejowice, Sobienie-Jeziory i okolice.',
      },
      {
        q: 'Czy cyklinujecie podłogi w nowych domach?',
        a: 'Tak — w nowym budownictwie wykonujemy pierwsze szlifowanie i wykończenie surowych desek i parkietów. Bezpyłowa technologia jest idealna — nie zapyli świeżo wykończonego wnętrza.',
      },
      {
        q: 'Ile czasu zajmuje cyklinowanie domu 100 m²?',
        a: 'Samo szlifowanie domu o powierzchni 100 m² zajmuje 1-2 dni robocze. Z wykończeniem (2-3 warstwy lakieru ze schnięciem) potrzebujemy 3-5 dni.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  //  OTWOCK
  // ═══════════════════════════════════════════════════
  {
    slug: 'otwock',
    nazwa: 'Otwock',
    nazwaOkolice: 'Otwocku i okolicach',
    odleglosc: '90 km od naszej siedziby',

    heroOpis: 'Otwock i okolice — Józefów, Falenica, Świder — to obszar z piękną drewnianą architekturą i dużym zapotrzebowaniem na renowację podłóg. Dojeżdżamy tu regularnie z pełnym zestawem sprzętu bezpyłowego.',

    opis: 'Otwock to wyjątkowe miasto — słynne z drewnianej architektury uzdrowiskowej (świdermajer) i bogatej tradycji budownictwa drewnianego. W wielu otwockich domach i willach leżą oryginalne podłogi z litego drewna, które po profesjonalnej renowacji odzyskują swój unikatowy charakter. Obsługujemy też Józefów, Falenicę, Świder, Karczew, Celestynów i okolice. Dystans 90 km od naszej siedziby pokonujemy trasą S17 — jesteśmy na miejscu w niecałe 1.5 godziny.',

    atuty: [
      'Doświadczenie z podłogami w zabytkowych willach otwockich (świdermajer)',
      'Obsługujemy Otwock, Józefów, Falenicę, Świder, Karczew, Celestynów',
      'Technologia bezpyłowa idealna do zabytkowych wnętrz',
      'Dojazd trasą S17 — szybko i sprawnie',
    ],

    korzysci: [
      { icon: '10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z', title: 'Zabytkowe wille', desc: 'Renowacja podłóg w otwockich willach w stylu świdermajer' },
      { icon: '19.78 2.2L22 4.42 11.68 14.74c.42.58.68 1.29.68 2.06 0 1.93-1.57 3.5-3.5 3.5S5.36 18.73 5.36 16.8c0-1.93 1.57-3.5 3.5-3.5.77 0 1.48.26 2.06.68L19.78 2.2z', title: 'Delikatna renowacja', desc: 'Bezpyłowa technologia chroni zabytkowe detale wnętrz' },
      { icon: '12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z', title: 'Cały powiat', desc: 'Józefów, Falenica, Świder, Karczew, Celestynów' },
      { icon: '9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z', title: '25 lat doświadczenia', desc: 'Ponad 1000 renowacji podłóg drewnianych' },
    ],

    sekcjaExtra: {
      tytul: 'Podłogi w otwockich willach i domach',
      tresc: [
        'Otwock to miasto o wyjątkowym charakterze architektonicznym. Słynny styl świdermajer — drewniane wille z bogato zdobionymi gankami i werandami — to wizytówka miasta. Wiele z tych budynków ma oryginalne podłogi z litego drewna sosnowego lub dębowego, które po dziesiątkach lat wymagają profesjonalnej renowacji.',
        'Cyklinowanie bezpyłowe jest idealną technologią dla zabytkowych wnętrz — tradycyjne maszyny generują pył, który osadza się na ozdobnych sztukateriach, starych meblach i zabytkowych detalach. Nasz sprzęt Bona DCS wychwytuje ponad 99% pyłu, chroniąc zarówno podłogę, jak i otoczenie.',
        'W nowoczesnym budownictwie Otwocka, Józefowa i Falenicy pracujemy z deskami dębowymi warstwowymi i parkietami litymi. Dla właścicieli nowych domów szczególnie polecamy olejowanie — naturalny efekt podkreślający piękno drewna.',
      ],
    },

    etapy: [
      { n: 1, title: 'Konsultacja', desc: 'Opowiedz o podłodze telefonicznie lub wyślij zdjęcia. Doradzimy wstępnie i umówimy oględziny.' },
      { n: 2, title: 'Wycena na miejscu', desc: 'Przyjedziemy do Otwocka, ocenimy stan podłogi i doradzimy najlepsze wykończenie.' },
      { n: 3, title: 'Cyklinowanie', desc: 'Bezpyłowe szlifowanie — delikatne dla zabytkowych wnętrz, skuteczne na każdym typie drewna.' },
      { n: 4, title: 'Wykończenie', desc: 'Lakier lub olej wg wyboru — 2-3 warstwy. Podłoga jak nowa, gotowa do użytkowania po 24h.' },
    ],

    faq: [
      {
        q: 'Czy obsługujecie Otwock i okolice?',
        a: 'Tak! Regularnie dojeżdżamy do Otwocka, Józefowa, Falenicy, Świdra, Karczewa i Celestynowa. Dojazd trasą S17 zajmuje nam niecałe 1.5 godziny.',
      },
      {
        q: 'Czy cyklinujecie podłogi w zabytkowych willach?',
        a: 'Tak, mamy doświadczenie z renowacją podłóg w zabytkowych budynkach. Technologia bezpyłowa jest idealna — chroni ozdobne detale, sztukaterie i zabytkowe elementy wnętrza.',
      },
      {
        q: 'Czy podłoga sosnowa nadaje się do cyklinowania?',
        a: 'Tak, cyklinujemy zarówno podłogi dębowe, jak i sosnowe. Sosna jest miększa, więc wymaga delikatniejszego podejścia, ale efekt po renowacji jest piękny. W otwockich willach sosnowe podłogi to klasyka.',
      },
      {
        q: 'Ile kosztuje dojazd do Otwocka?',
        a: 'Koszt dojazdu ustalamy indywidualnie — zazwyczaj jest symboliczny. Często łączymy zlecenia w regionie, co obniża koszty. Zadzwoń po konkretną wycenę.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  //  RADOM
  // ═══════════════════════════════════════════════════
  {
    slug: 'radom',
    nazwa: 'Radom',
    nazwaOkolice: 'Radomiu i okolicach',
    odleglosc: '150 km od naszej siedziby',

    heroOpis: 'Radom to jedno z największych miast w naszym zasięgu. Ponad 200 tysięcy mieszkańców, ogromne zapotrzebowanie na renowację podłóg i cyklinowanie bezpyłowe. Dojeżdżamy trasą przez Garwolin — sprawnie i terminowo.',

    opis: 'Radom to duże miasto z ponad 200-tysięczną populacją i bogatą zabudową — od kamienic w centrum po nowoczesne osiedla. Zapotrzebowanie na profesjonalne cyklinowanie bezpyłowe jest tu duże, a specjalistów z technologią Bona DCS brakuje. Dojeżdżamy do Radomia trasą S17 przez Garwolin — organizujemy pracę tak, żeby na miejscu pracować intensywnie, minimalizując liczbę dojazdów. W kamienicach radomskich spotykamy piękne parkiety dębowe w jodełkę, w blokach — klasyczną mozaikę parkietową. Obsługujemy też Kozienice, Zwoleń, Pionki, Szydłowiec i okolice.',

    atuty: [
      'Jedno z największych miast w naszym zasięgu — 200+ tys. mieszkańców',
      'Brak lokalnej konkurencji w technologii bezpyłowej Bona DCS',
      'Kamienice, bloki, nowe osiedla — doświadczenie ze wszystkimi typami budownictwa',
      'Obsługujemy Kozienice, Zwoleń, Pionki, Szydłowiec',
    ],

    korzysci: [
      { icon: '15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z', title: 'Duże miasto', desc: 'Ponad 200 tys. mieszkańców — ogromny rynek renowacji podłóg' },
      { icon: '19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z', title: 'Jedyni z Bona DCS', desc: 'Technologia bezpyłowa niedostępna u lokalnych ekip' },
      { icon: '20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z', title: 'Cały region', desc: 'Kozienice, Zwoleń, Pionki, Szydłowiec i okolice' },
      { icon: '9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z', title: '25 lat doświadczenia', desc: 'Ponad 1000 realizacji na terenie Mazowsza i Lubelszczyzny' },
    ],

    sekcjaExtra: {
      tytul: 'Cyklinowanie parkietów w Radomiu — kamienice, bloki, nowe domy',
      tresc: [
        'Radom to miasto z długą historią i zróżnicowaną zabudową. W kamienicach w centrum leżą piękne parkiety dębowe w jodełkę angielską — często sprzed 60-80 lat. Po profesjonalnym cyklinowaniu te podłogi odzyskują dawny blask i stają się ozdobą mieszkania.',
        'W radomskich blokach z wielkiej płyty najczęściej spotykamy mozaikę parkietową dębową i parkiet lamelowy. Po 30-40 latach użytkowania wymagają gruntownej renowacji. Technologia bezpyłowa jest tu idealna — nie przeszkadza sąsiadom i nie roznosi pyłu po klatce.',
        'Na obrzeżach Radomia powstaje coraz więcej nowych domów jednorodzinnych z podłogami z litego drewna. Wykonujemy pierwsze szlifowanie i wykończenie surowych desek — lakierowanie lub olejowanie, które chroni drewno na lata.',
      ],
    },

    etapy: [
      { n: 1, title: 'Kontakt telefoniczny', desc: 'Opisz podłogę i wyślij zdjęcia. Przygotujemy wstępną wycenę zdalnie.' },
      { n: 2, title: 'Oględziny w Radomiu', desc: 'Przy większych zleceniach przyjedziemy na miejsce. Ocenimy podłogę i doradzimy wykończenie.' },
      { n: 3, title: 'Intensywna realizacja', desc: 'Organizujemy pracę tak, żeby zminimalizować dojazdy. Typowe mieszkanie cyklinujemy w 1 dzień.' },
      { n: 4, title: 'Wykończenie premium', desc: '2-3 warstwy lakieru lub oleju. Efekt: podłoga jak nowa na kolejne 15-20 lat.' },
    ],

    faq: [
      {
        q: 'Czy dojeżdżacie do Radomia?',
        a: 'Tak! Radom leży ok. 150 km od naszej siedziby. Dojeżdżamy trasą przez Garwolin. Organizujemy pracę intensywnie, żeby zminimalizować liczbę dojazdów.',
      },
      {
        q: 'Ile kosztuje dojazd do Radomia?',
        a: 'Koszt dojazdu ustalamy indywidualnie — zależy od zakresu zlecenia. Przy większych metrażach dojazd jest proporcjonalnie tańszy. Zadzwoń po wycenę.',
      },
      {
        q: 'Czy cyklinujecie parkiety w jodełkę w radomskich kamienicach?',
        a: 'Tak, to jedna z naszych specjalności. Parkiety w jodełkę angielską to częsty widok w radomskich kamienicach. Po renowacji wyglądają spektakularnie.',
      },
      {
        q: 'Czy obsługujecie Kozienice i Zwoleń?',
        a: 'Tak, obsługujemy cały region: Kozienice, Zwoleń, Pionki, Szydłowiec i okolice. Często łączymy zlecenia w regionie.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  //  LUBLIN
  // ═══════════════════════════════════════════════════
  {
    slug: 'lublin',
    nazwa: 'Lublin',
    nazwaOkolice: 'Lublinie i okolicach',
    odleglosc: '150 km od naszej siedziby',

    heroOpis: 'Lublin — trzecie co do wielkości miasto wschodniej Polski. Piękne kamienice na Starym Mieście, zabytkowe parkiety i ogromne zapotrzebowanie na profesjonalne cyklinowanie bezpyłowe. Dojeżdżamy regularnie.',

    opis: 'Lublin to największe miasto we wschodniej Polsce i jedno z najpiękniejszych architektonicznie. Kamienice na Starym Mieście, secesyjne wille na Czechowie, bloki na LSM i Czubach — każdy z tych budynków ma podłogi drewniane wymagające fachowej renowacji. W Lublinie brakuje specjalistów oferujących cyklinowanie bezpyłowe na najwyższym poziomie. My przywozimy pełen zestaw sprzętu Bona DCS i pracujemy z taką samą jakością jak w Siedlcach czy Warszawie. Obsługujemy też Świdnik, Puławy, Kraśnik, Łęczną i okolice.',

    atuty: [
      'Trzecie największe miasto wschodniej Polski — ogromny rynek',
      'Piękne kamienice z oryginalnymi parkietami dębowymi na Starym Mieście',
      'Brak lokalnej konkurencji w technologii Bona DCS',
      'Obsługujemy też Świdnik, Puławy, Kraśnik, Łęczną',
    ],

    korzysci: [
      { icon: '15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z', title: 'Miasto akademickie', desc: '350 tys. mieszkańców, tysiące mieszkań z parkietem' },
      { icon: '10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z', title: 'Stare Miasto', desc: 'Zabytkowe kamienice z oryginalnymi parkietami do renowacji' },
      { icon: '19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z', title: 'Jedyni z Bona DCS', desc: 'Profesjonalna technologia niedostępna u lokalnych firm' },
      { icon: '20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z', title: 'Cały region', desc: 'Świdnik, Puławy, Kraśnik, Łęczna i okolice' },
    ],

    sekcjaExtra: {
      tytul: 'Renowacja parkietów w lubelskich kamienicach i blokach',
      tresc: [
        'Lublin to miasto z niezwykłą architekturą. Na Starym Mieście i Śródmieściu znajdują się kamienice z oryginalnymi parkietami dębowymi — nierzadko sprzed 80-100 lat. Jodełka angielska, cegiełka, mozaika — te wzory po profesjonalnym cyklinowaniu wyglądają spektakularnie i podnoszą wartość nieruchomości.',
        'Na wielkich lubelskich osiedlach — LSM, Czuby, Kalinowszczyzna, Tatary — leżą tysiące metrów kwadratowych parkietu mozaikowego z lat 70-80. Te podłogi, mimo zniszczeń, mają ogromny potencjał. Po bezpyłowym cyklinowaniu i lakierowaniu służą kolejne 15-20 lat.',
        'Technologia bezpyłowa jest w Lublinie szczególnie cenna — w zabytkowych kamienicach chroni oryginalne sztukaterie i detale. W blokach nie przeszkadza sąsiadom. To właśnie dlatego klienci z Lublina chętnie zamawiają nasze usługi mimo większej odległości.',
      ],
    },

    etapy: [
      { n: 1, title: 'Kontakt zdalny', desc: 'Zadzwoń lub wyślij zdjęcia podłogi. Przygotujemy wstępną wycenę na podstawie metrażu i stanu.' },
      { n: 2, title: 'Oględziny w Lublinie', desc: 'Przy większych zleceniach przyjedziemy na miejsce. Bezpłatna wycena i doradztwo.' },
      { n: 3, title: 'Intensywna praca', desc: 'Przywozimy sprzęt i pracujemy intensywnie — mieszkanie cyklinujemy w 1 dzień. Przy dużych metrażach zostawiamy sprzęt.' },
      { n: 4, title: 'Wykończenie profesjonalne', desc: 'Lakier lub olej premium w 2-3 warstwach. Efekt: podłoga jak nowa na kolejne lata.' },
    ],

    faq: [
      {
        q: 'Czy dojeżdżacie do Lublina?',
        a: 'Tak! Lublin leży ok. 150 km od naszej siedziby. Dojeżdżamy regularnie — mamy stałych klientów w Lublinie. Organizujemy pracę intensywnie, żeby zminimalizować dojazdy.',
      },
      {
        q: 'Dlaczego warto zamówić cyklinowanie z Siedlec zamiast lokalnej firmy?',
        a: 'Oferujemy technologię bezpyłową Bona DCS, której większość lubelskich firm nie posiada. Ponad 99% pyłu wychwytywane u źródła — to ogromna różnica w komforcie i jakości wykończenia.',
      },
      {
        q: 'Czy cyklinujecie na Starym Mieście w Lublinie?',
        a: 'Tak! Mamy doświadczenie z zabytkowym budownictwem. Bezpyłowa technologia jest idealna dla kamienic — chroni ozdobne detale i nie roznosi pyłu na zabytkowej klatce schodowej.',
      },
      {
        q: 'Czy obsługujecie Puławy i Świdnik?',
        a: 'Tak, obsługujemy cały region lubelski: Lublin, Świdnik, Puławy, Kraśnik, Łęczną, Opole Lubelskie i inne miejscowości.',
      },
      {
        q: 'Ile kosztuje dojazd do Lublina?',
        a: 'Koszt dojazdu zależy od zakresu zlecenia. Przy dużych metrażach dojazd jest proporcjonalnie niewielki. Zadzwoń — podamy konkretną kwotę.',
      },
    ],
  },
];
