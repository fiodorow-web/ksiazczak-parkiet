# SEO Audit – ksiazczak-parkiet.pl
**Data audytu:** 2026-04-09  
**Audytowana strona:** https://ksiazczak-parkiet.vercel.app/ (produkcja: ksiazczak-parkiet.pl)  
**Typ biznesu:** Local Service Business (SAB) – usługi parkieciarskie, Mazowsze PL  
**Liczba przeskanowanych stron:** 10 / 10

---

## 🏆 SEO Health Score: 76 / 100

| Kategoria | Waga | Wynik | Składowa |
|-----------|------|-------|----------|
| Technical SEO | 22% | 78/100 | 17.2 |
| Content Quality | 23% | 72/100 | 16.6 |
| On-Page SEO | 20% | 75/100 | 15.0 |
| Schema / Structured Data | 10% | 85/100 | 8.5 |
| Performance (CWV) | 10% | 70/100 | 7.0 |
| AI Search Readiness | 10% | 80/100 | 8.0 |
| Images | 5% | 82/100 | 4.1 |
| **ŁĄCZNIE** | **100%** | | **76.4 / 100** |

---

## Executive Summary

### Top 5 problemów (Critical / High)
1. **Brak title + meta na /realizacje** – strona portfolio nie ma własnego tagu title
2. **Meta opisy generyczne** na /kontakt, /schody-drewniane, /o-nas, /uslugi – używają domyślnego opisu zamiast unikalnego
3. **Sitemap – wszystkie priorytety 0.8** – Google nie wie co ważniejsze; homepage powinien mieć 1.0
4. **LCP prawdopodobnie >2.5s na mobile** – hero 391KB jako CSS `background-image` (przeglądarka nie może preloadować)
5. **Brak llms.txt** – ChatGPT, Perplexity, Gemini nie mają ustrukturyzowanej wiedzy o firmie

### Top 5 Quick Wins
1. Dodaj title + meta na /realizacje (15 min)
2. Popraw meta opisy na 4 stronach (30 min)
3. Zmień priorytety w sitemapie: / → 1.0, city pages → 0.9 (15 min)
4. Dodaj `<link rel="preload">` dla hero image (10 min)
5. Utwórz /llms.txt (20 min)

---

## 1. Technical SEO (78/100)

### Crawlability & Indexability

| Sprawdzenie | Status | Szczegóły |
|-------------|--------|-----------|
| robots.txt | ✅ | `Allow: /` – bez blokad |
| GPTBot / ClaudeBot / PerplexityBot | ✅ | Explicite dozwolone |
| Sitemap index | ✅ | `/sitemap-index.xml` → `/sitemap-0.xml` |
| Sitemap – liczba stron | ✅ | 10 URLi |
| Canonical tags | ✅ | Obecne w Layout.astro, wskazują domenę prod |
| lang="pl" | ✅ | `<html lang="pl">` |
| Meta robots | ✅ | `index, follow, max-image-preview:large` |
| HTTPS | ✅ | Vercel TLS 1.3 |
| Mobile viewport | ✅ | `width=device-width, initial-scale=1.0` |
| Geo meta tags | ✅ | geo.region PL-MZ, geo.placename Siedlce |
| Breadcrumb navigation | ✅ | Na wszystkich podstronach |

### Problemy techniczne

| Problem | Priorytet | Szczegóły |
|---------|-----------|-----------|
| Sitemap URL domeny – robots.txt wskazuje `ksiazczak-parkiet.pl` | LOW | OK dla prod; zweryfikuj po wdrożeniu |
| Sitemap priority = 0.8 wszędzie | MEDIUM | Homepage → 1.0; city pages → 0.9; o-nas/kontakt → 0.6 |
| Wszystkie lastmod w sitemapie identyczne (2026-04-09) | LOW | Google pomaga sobie; warto aby lastmod był dynamiczny |
| Brak HTTP security headers | LOW | Vercel dodaje podstawowe; CSP niekonieczne dla statycznej strony |

---

## 2. Content Quality (72/100)

### E-E-A-T Assessment

| Sygnał | Status | Szczegóły |
|--------|--------|-----------|
| Doświadczenie | ✅ | "od 1999 roku", 1000+ realizacji, konkretne miejscowości |
| Named expert | ✅ | Krzysztof Książczak + Person schema |
| Technologia | ✅ | Bona DCS opisany dokładnie |
| Marki partnerskie | ✅ | Blanchon, Oli Natura, Artelit |
| Oceny Google | ✅ | 5.0★ / 47 recenzji |
| NIP widoczny | ✅ | 8212012992 |
| Adres fizyczny | ✅ | Mordy, Mazowieckie |
| Certyfikaty Bona | ❌ | Nie wspomniane – warto dodać jeśli posiadane |
| Blog / poradniki | ❌ | Brak – duży gap SEO |

### Liczba słów per strona

| Strona | Słowa (est.) | Status |
|--------|-------------|--------|
| / | ~1400 | ✅ |
| /cyklinowanie-bezpylowe | ~1900 | ✅ |
| /cyklinowanie-siedlce | ~1300 | ✅ |
| /cyklinowanie-warszawa | ~1900 | ✅ |
| /cyklinowanie-minsk-mazowiecki | ~1300 | ✅ |
| /uslugi | ~1300 | ✅ |
| /schody-drewniane | ~1300 | ✅ |
| /o-nas | ~1100 | ✅ |
| /realizacje | ~400 | ⚠️ Thin – brak opisów realizacji |
| /kontakt | ~850 | ✅ |

### Duplicate Content Risk
- City pages: ~30% podobne treści (sekcja „Jak pracujemy" jest templatem) – **akceptowalne**
- Unikalne elementy per miasto: dzielnice, typy budynków, FAQ, odległość – ✅ dobre zróżnicowanie

### Content Gaps (szanse keyword)

| Temat | Wolumen est. | Trudność |
|-------|-------------|----------|
| "cena cyklinowania parkietu m2" | 880/mies | Średnia |
| "jak często cyklinować parkiet" | 590/mies | Niska |
| "lakier czy olej do podłogi" | 480/mies | Niska |
| "cyklinowanie parkietu etapy" | 320/mies | Niska |
| "renowacja schodów drewnianych" | 260/mies | Niska |

---

## 3. On-Page SEO (75/100)

### Title Tags

| Strona | Title | Ocena |
|--------|-------|-------|
| / | Cyklinowanie Bezpyłowe Siedlce, Warszawa, Mińsk Mazowiecki \| Książczak | ✅ |
| /cyklinowanie-bezpylowe | Cyklinowanie Bezpyłowe Podłóg – Siedlce, Warszawa \| 25 lat \| Książczak | ✅ |
| /cyklinowanie-siedlce | Cyklinowanie Bezpyłowe Siedlce – Bezpłatna Wycena \| Książczak | ✅ |
| /cyklinowanie-warszawa | Cyklinowanie Bezpyłowe Warszawa – Bezpłatna Wycena \| Książczak | ✅ |
| /cyklinowanie-minsk-mazowiecki | Cyklinowanie Bezpyłowe Mińsk Mazowiecki – Bezpłatna Wycena \| Książczak | ✅ |
| /uslugi | Usługi parkieciarskie – Cyklinowanie, Lakierowanie, Schody \| Książczak | ✅ |
| /schody-drewniane | Schody Drewniane Siedlce – Montaż, Produkcja, Renowacja \| Książczak | ✅ |
| /o-nas | O nas – Rodzinna firma parkieciarska od 1999 roku \| Książczak | ✅ |
| /kontakt | Kontakt – Cyklinowanie Siedlce i Warszawa \| Książczak Parkiety | ⚠️ Brak słowa kluczowego "parkiet" |
| /realizacje | **Nie wykryto tagu title** | 🔴 CRITICAL |

### Meta Descriptions

| Strona | Status | Problem |
|--------|--------|---------|
| / | ✅ Unikalna | – |
| /cyklinowanie-* | ✅ Dynamiczne z miastem | – |
| /uslugi | ⚠️ Generyczna | Używa domyślnej z LocalBusiness |
| /schody-drewniane | ⚠️ Generyczna | Używa domyślnej LocalBusiness |
| /o-nas | ⚠️ Generyczna | Opisuje cyklinowanie, nie stronę "O nas" |
| /kontakt | 🔴 Generyczna | Zupełnie nie pasuje do strony kontaktu |
| /realizacje | 🔴 Brak | Brak meta description |

### H1 / H2 Structure

| Strona | H1 | Ocena |
|--------|----|-------|
| / | Profesjonalne usługi parkieciarskie Siedlce i Warszawa | ✅ |
| /cyklinowanie-bezpylowe | Cyklinowanie bezpyłowe parkietów i podłóg drewnianych | ✅ |
| /uslugi | Nasze usługi parkieciarskie | ✅ |
| /schody-drewniane | Schody drewniane Siedlce i okolice | ✅ |
| /o-nas | O nas – rodzinna firma z tradycjami | ✅ |
| /kontakt | Skontaktuj się z nami | ✅ |

### Internal Linking Gaps

| Gap | Priorytet |
|-----|-----------|
| City pages nie linkują do /uslugi ani /schody-drewniane | HIGH |
| /realizacje nie linkuje do stron usług | MEDIUM |
| /schody-drewniane nie linkuje do /uslugi | MEDIUM |
| Brak linku z /o-nas do konkretnych usług | LOW |

---

## 4. Schema / Structured Data (85/100)

### Zaimplementowane typy

| Typ | Strony | Status |
|-----|--------|--------|
| LocalBusiness (pełny) | Wszystkie | ✅ Doskonały |
| FAQPage | homepage, /cyklinowanie-*, /uslugi, /schody | ✅ |
| BreadcrumbList | Wszystkie poza homepage | ✅ |
| Person (Krzysztof) | Homepage | ✅ |
| Service | /uslugi, /cyklinowanie-* | ✅ |
| AggregateRating (5/5, 47) | Większość stron | ✅ |
| HowTo | Homepage | ✅ |
| AboutPage | /o-nas | ✅ |
| OfferCatalog | Wszędzie | ✅ |

### LocalBusiness – kompletność

| Pole | Status |
|------|--------|
| name, telephone, email | ✅ |
| address (pełny PostalAddress) | ✅ |
| geo (GeoCoordinates) | ✅ |
| openingHoursSpecification | ✅ |
| areaServed (8 miast + Mazowieckie) | ✅ |
| aggregateRating | ✅ |
| hasOfferCatalog (6 usług) | ✅ |
| paymentAccepted, currenciesAccepted | ✅ |
| NIP (vatID) | ✅ |
| sameAs (Facebook, Google) | ✅ |

### Brakujące schematy

| Typ | Strona | Priorytet | Korzyść |
|-----|--------|-----------|---------|
| `ImageGallery` + `ImageObject` | /realizacje | MEDIUM | Lepsza widoczność w Google Images |
| `Review` (indywidualny) | /realizacje | LOW | Rich stars w SERP |
| `ItemList` dla galerii | /realizacje | LOW | Lista w wynikach |

### Uwaga walidacyjna
AggregateRating (47 recenzji, 5.0★) – **Google może odrzucić jeśli reviewCount jest zawyżony**. Upewnij się, że liczba 47 odpowiada faktycznym recenzjom na Google Business Profile.

---

## 5. Performance / Core Web Vitals (70/100)

### Wdrożone optymalizacje ✅
- Hero: 750KB → 391KB (WebP, 1920px, quality 85)
- Google Fonts: `media="print" onload` – non-blocking
- Google Maps: IntersectionObserver lazy load (–348KB JS)
- Loga: src/assets/ → Astro `<Image>` WebP
- `bg-fixed` usunięty na mobile (iOS Safari fix)
- Wszystkie zdjęcia galerii: Astro auto WebP + srcset + lazy loading

### Estymowane CWV (mobile)

| Metryka | Estymacja | Próg "Good" | Status |
|---------|-----------|-------------|--------|
| **LCP** | 2.8–3.5s | < 2.5s | ⚠️ Needs Improvement |
| **INP** | 80–120ms | < 200ms | ✅ Good |
| **CLS** | 0.05–0.10 | < 0.10 | ✅ Good |

### Główne problemy wydajnościowe

| Problem | Priorytet | Opis |
|---------|-----------|------|
| Hero jako CSS `background-image` | HIGH | Przeglądarka nie może preloadować – LCP cierpi. Dodaj `<link rel="preload" as="image">` |
| Elfsight widget | HIGH | 3rd-party JS blokuje main thread. Załaduj z IntersectionObserver jak Google Maps |
| Hero 391KB bez preload | MEDIUM | Przy CSS bg brak sygnału preload = opóźnienie LCP ~0.5–1s |

### Rekomendacja dla LCP
Dodaj do `<head>` (Layout.astro):
```html
<link rel="preload" as="image" href="{optimizedBg.src}" fetchpriority="high" />
```
Lub lepiej: przenieś hero na `<img>` z `fetchpriority="high"` i `loading="eager"`.

---

## 6. AI Search Readiness (80/100)

### Dostęp AI crawlerów ✅
```
GPTBot: Allow
ClaudeBot: Allow
PerplexityBot: Allow
Googlebot: Allow
```

### Czynniki cytowania przez AI

| Czynnik | Status |
|---------|--------|
| FAQPage schema | ✅ |
| Jasna struktura H1/H2 | ✅ |
| Named entity (Krzysztof + Person schema) | ✅ |
| Konkretne fakty (25 lat, 1000+, Bona DCS) | ✅ |
| Lokalizacja precyzyjna | ✅ |
| Tabele porównawcze w treści | ❌ |
| llms.txt | ❌ |
| Wzmianki zewnętrzne / PR | ❌ |
| Blog / artykuły poradnikowe | ❌ |

### Rekomendacje AI SEO
1. **Stwórz `/llms.txt`** – opisz firmę, usługi, obsługiwany obszar
2. **Dodaj tabele** w treści (lakier vs olej, porównanie wykończeń)
3. **Rozszerz FAQ** o pytania konwersacyjne (jak Perplexity/ChatGPT je zadają)

---

## 7. Local SEO

### NAP Consistency ✅
- **Nazwa:** Książczak Parkiety i Schody – spójna wszędzie
- **Adres:** ul. 11-go Listopada 61, 08-140 Mordy – spójny
- **Telefon:** +48 501 652 697 – jeden numer, spójny
- **Email:** ksiazczak.krzysztof@gmail.com

### City Landing Pages

| Miasto | Strona | Unikalność | Status |
|--------|--------|-----------|--------|
| Siedlce | /cyklinowanie-siedlce | ✅ Wysoka | ✅ |
| Warszawa | /cyklinowanie-warszawa | ✅ Wysoka | ✅ |
| Mińsk Mazowiecki | /cyklinowanie-minsk-mazowiecki | ✅ Dobra | ✅ |
| Łuków | ❌ Brak | – | Potencjał |
| Biała Podlaska | ❌ Brak | – | Potencjał |
| Garwolin | ❌ Brak | – | Potencjał |

### GBP Rekomendacje
- Uzupełnij Q&A w Google Business Profile
- Dodaj zdjęcia "przed i po" bezpośrednio do GBP
- Regularnie proś klientów o recenzję (cel: 100+)
- Uzupełnij kategorie: Parkieciarstwo, Renowacja podłóg, Schody

---

## 8. Images (82/100)

| Aspekt | Status |
|--------|--------|
| Nazwy plików – SEO keywords | ✅ Wdrożone |
| Format WebP (Astro auto) | ✅ |
| srcset / responsive | ✅ Astro auto |
| Lazy loading | ✅ |
| Alt – usługi (opisowe z miastem) | ✅ |
| Alt – galeria parkiety | ⚠️ Schematyczne ("realizacja nr X") |
| Alt – galeria schody | ⚠️ Schematyczne ("realizacja nr X") |
| IPTC/XMP metadata | ❌ Niszowe, ale możliwe |

---

## Sitemap Analysis

| URL | Priority | Rekomendacja |
|-----|----------|-------------|
| / | 0.8 | → Zmień na **1.0** |
| /cyklinowanie-bezpylowe | 0.8 | → Zmień na **0.9** |
| /cyklinowanie-siedlce | 0.8 | → Zmień na **0.9** |
| /cyklinowanie-warszawa | 0.8 | → Zmień na **0.9** |
| /cyklinowanie-minsk-mazowiecki | 0.8 | → Zmień na **0.9** |
| /uslugi, /schody-drewniane | 0.8 | → Zostaw **0.8** |
| /o-nas, /kontakt, /realizacje | 0.8 | → Zmień na **0.6** |

---

*Raport wygenerowany: 2026-04-09 | Narzędzie: Claude Code SEO Audit | ksiazczak-parkiet.pl*
