# Pełny Audit SEO — Książczak Parkiety i Schody
**URL:** https://ksiazczak-parkiet.vercel.app/ → https://ksiazczak-parkiet.pl
**Data audytu:** 2026-03-28
**Typ biznesu:** Local Service Business (SAB) — firma wyjazdowa, 100 km od Siedlec
**Branża:** Renowacja podłóg drewnianych, schody drewniane

---

## Wynik SEO Health Score: 70 / 100

| Kategoria | Waga | Wynik | Ważony |
|-----------|------|-------|--------|
| Technical SEO | 22% | 78/100 | 17.2 |
| Content Quality | 23% | 68/100 | 15.6 |
| On-Page SEO | 20% | 82/100 | 16.4 |
| Schema / Structured Data | 10% | 75/100 | 7.5 |
| Performance (CWV) | 10% | 55/100 | 5.5 |
| AI Search Readiness | 10% | 52/100 | 5.2 |
| Images | 5% | 55/100 | 2.75 |
| **ŁĄCZNIE** | 100% | — | **70.2 / 100** |

---

## Podsumowanie Wykonawcze

### Top 5 Krytycznych Problemów
1. **Hero image 752KB** — niezoptymalizowany JPG spowalnia LCP i obniża Performance score
2. **Brak favicon.ico i apple-touch-icon.png** — Layout je referencjonuje, pliki nie istnieją w `public/`
3. **Brak OG image** — `public/images/og-default.jpg` nie istnieje, OG preview generuje błąd
4. **Thin content: /realizacje (~450 słów)** — za mało tekstu na stronę z realizacjami
5. **Brak llms.txt** — AI Overviews (Google), ChatGPT i Perplexity nie mogą indeksować treści

### Top 5 Quick Wins (szybkie do zrobienia)
1. Skompresować `hero.jpg` (752KB → <120KB WebP) — natychmiastowy zysk w Core Web Vitals
2. Dodać `favicon.ico` i `apple-touch-icon.png` do `public/`
3. Dodać `public/images/og-default.jpg` (1200×630px)
4. Dodać `lastmod` do sitemapa (konfiguracja @astrojs/sitemap)
5. Dodać `llms.txt` do `public/`

---

## 1. Technical SEO

### Crawlability & Indexability

| Sprawdzenie | Status | Szczegóły |
|-------------|--------|-----------|
| robots.txt | ✅ | `Allow: /` — bez blokad |
| Sitemap index | ✅ | `/sitemap-index.xml` dostępny |
| Sitemap-0 | ✅ | 6 stron prawidłowo zaindeksowanych |
| Sitemap URLs | ✅ | Wskazują na `ksiazczak-parkiet.pl` (produkcja) |
| Lastmod w sitemap | ❌ | Brak dat modyfikacji — Google nie wie co odświeżać |
| Canonical tags | ✅ | Dynamicznie generowane, wskazują na prod |
| lang="pl" | ✅ | Ustawiony w `<html lang="pl">` |
| Meta robots | ✅ | `index, follow, max-image-preview:large` |
| Noindex/nofollow | ✅ | Brak na wszystkich stronach |
| HTTPS | ✅ | Vercel automatycznie |
| Mobile viewport | ✅ | `width=device-width, initial-scale=1.0` |

### Zasoby

| Plik | Status | Szczegóły |
|------|--------|-----------|
| favicon.svg | ✅ | Istnieje w `public/` |
| favicon.ico | ❌ | Referencjonowany w Layout, nie istnieje |
| apple-touch-icon.png | ❌ | Referencjonowany w Layout, nie istnieje |
| og-default.jpg | ❌ | Referencjonowany jako domyślny OG obraz, nie istnieje |

### Geo Meta Tags
```html
<meta name="geo.region" content="PL-MZ" />        ✅
<meta name="geo.placename" content="Siedlce" />    ✅
<meta name="geo.position" content="52.1678;22.2903" /> ✅
<meta name="ICBM" content="52.1678, 22.2903" />   ✅
```

### Bezpieczeństwo
- HTTPS: ✅ Vercel
- Security headers: nie sprawdzano (Vercel domyślnie dodaje podstawowe)
- Mixed content: nie wykryto

---

## 2. Content Quality (E-E-A-T)

### Ilość treści na stronę

| Strona | Szacunkowa liczba słów | Status |
|--------|------------------------|--------|
| / (homepage) | ~1,200 | ✅ Dobra |
| /cyklinowanie-bezpylowe | ~1,300 | ✅ Dobra |
| /uslugi | ~1,300 | ✅ Dobra |
| /kontakt | ~850 | ✅ OK dla strony kontaktu |
| /schody-drewniane | ~650 | ⚠️ Borderline thin |
| /realizacje | ~450 | ❌ Thin content |

### E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)

| Sygnał | Status | Szczegóły |
|--------|--------|-----------|
| Doświadczenie (lata) | ✅ | "25+ lat doświadczenia" na wszystkich stronach |
| Nazwani eksperci | ✅ | Krzysztof (parkiety) i Andrzej (schody) wymienieni z imienia |
| Firma rodzinna | ✅ | "Rodzinna firma" w opisie |
| Ceny podane | ✅ | 25–45 zł/m² na stronie + w schemacie |
| Dane kontaktowe | ✅ | 2 numery telefonu, email, adres |
| Opinie klientów | ✅ | Widget Elfsight Google Reviews |
| NIP widoczny | ✅ | W stopce |
| Certyfikaty/dyplomy | ❌ | Brak informacji o kwalifikacjach/uprawnieniach |
| Godziny pracy | ✅ | W schemacie i potencjalnie na stronie |
| Blog/artykuły | ❌ | Brak sekcji edukacyjnej/poradnikowej |

### Problemy z contentem

**Strona /realizacje (thin content):**
- ~450 słów — zdecydowanie za mało
- Galeria ma tylko 1 parę przed/po (tylko `przed-1.jpg` i `po-1.jpg` w `src/assets/galeria/`)
- Brak opisów poszczególnych realizacji (lokalizacja, zakres prac, użyte materiały)
- Brak zachęty do zostawienia opinii

**Strona /schody-drewniane:**
- ~650 słów — na granicy cienkości dla niszy schodów
- Brak FAQ specyficznego dla schodów
- Brak realizacji schodów w galerii

---

## 3. On-Page SEO

### Title Tags

| Strona | Title | Długość | Status |
|--------|-------|---------|--------|
| / | "Cyklinowanie Bezpyłowe Podłóg Siedlce i Warszawa | Książczak Parkiety" | 68 zn. | ✅ |
| /cyklinowanie-bezpylowe | "Cyklinowanie bezpyłowe parkietów i podłóg drewnianych" (szacowane) | ~55 zn. | ✅ |
| /uslugi | "Usługi Parkieciarskie – Lakierowanie, Olejowanie, Układanie | Książczak Siedlce" | 77 zn. | ⚠️ (za długi) |
| /schody-drewniane | "Schody Drewniane Siedlce – Montaż, Renowacja | Andrzej Książczak" | 62 zn. | ✅ |
| /realizacje | "Realizacje – Cyklinowanie Parkietu Przed i Po | Książczak Siedlce" | 63 zn. | ✅ |
| /kontakt | "Kontakt – Cyklinowanie Siedlce i Warszawa | Książczak Parkiety" | 60 zn. | ✅ |

### Meta Descriptions

| Strona | Status | Szczegóły |
|--------|--------|-----------|
| / | ✅ | Zawiera CTA "Bezpłatna wycena!", geo, USP |
| /cyklinowanie-bezpylowe | ✅ | Dobra |
| /uslugi | ✅ | Dobra, zawiera "Bezpłatna wycena!" |
| /schody-drewniane | ✅ | Dobra, zawiera emoji ☎ i "Bezpłatna wycena!" |
| /realizacje | ✅ | Dobra, wymienia miasta |
| /kontakt | ✅ | Dobra |

### Struktura nagłówków (H1 / H2)

| Strona | H1 | Ocena |
|--------|----|-------|
| / | "Cyklinowanie bezpyłowe podłóg drewnianych" | ✅ Doskonały |
| /cyklinowanie-bezpylowe | "Cyklinowanie bezpyłowe parkietów i podłóg drewnianych" | ✅ Dobry |
| /uslugi | "Nasze usługi" | ❌ Generyczny — brak słów kluczowych |
| /schody-drewniane | "Schody drewniane Siedlce i okolice" | ✅ Dobry |
| /realizacje | "Nasze realizacje" | ⚠️ Generyczny |
| /kontakt | "Skontaktuj się z nami" | ✅ OK dla kontaktu |

### Open Graph & Social

| Tag | Status |
|-----|--------|
| og:type | ✅ "website" |
| og:title | ✅ Dynamiczny |
| og:description | ✅ Dynamiczny |
| og:image | ❌ Plik nie istnieje (og-default.jpg) |
| og:locale | ✅ pl_PL |
| og:site_name | ✅ |
| twitter:card | ✅ summary_large_image |

### Linkowanie wewnętrzne
- Nawigacja: 6 linków (home, cyklinowanie, usługi, schody, realizacje, kontakt) ✅
- Stopka: duplikuje nawigację + Facebook ✅
- Treść stron: linki kontekstowe do powiązanych usług ✅
- Brak linku do Googl Business Profile z treści ❌

---

## 4. Schema / Structured Data

### Zaimplementowane schematy

| Schema | Typ | Strona | Status |
|--------|-----|--------|--------|
| LocalBusiness | JSON-LD | Wszystkie | ✅ Doskonały |
| HowTo | JSON-LD | / | ✅ |
| Service | JSON-LD | /cyklinowanie-bezpylowe, /schody-drewniane | ✅ |
| FAQPage | Microdata | / | ✅ (valid, ale nie JSON-LD) |
| BreadcrumbList | JSON-LD | Wszystkie wewnętrzne | ✅ |
| OfferCatalog | JSON-LD (w LocalBusiness) | Wszystkie | ✅ |

### LocalBusiness — kompletność

| Pole | Status |
|------|--------|
| name | ✅ |
| alternateName | ✅ (2 alternatywy) |
| description | ✅ |
| url | ✅ |
| telephone | ✅ |
| email | ✅ |
| address (pełny) | ✅ |
| geo | ✅ |
| areaServed (8 miast) | ✅ |
| priceRange | ✅ |
| currenciesAccepted | ✅ |
| paymentAccepted | ✅ |
| openingHoursSpecification | ✅ |
| hasOfferCatalog (5 usług) | ✅ |
| aggregateRating (5.0, 47) | ✅ |
| sameAs (FB, Google) | ✅ |
| @id | ✅ |

### Brakujące schematy

| Schema | Priorytet | Korzyść |
|--------|-----------|---------|
| FAQPage JSON-LD | Medium | Rich result FAQ snippety |
| Person (Krzysztof + Andrzej) | Medium | E-E-A-T, Knowledge Panel |
| ImageObject z lokalizacją | Low | Google Images SEO |
| Review (indywidualne recenzje) | Low | Rich stars w SERP |

---

## 5. Performance (Core Web Vitals)

*Uwaga: Brak dostępu do Google PSI API (rate limit). Ocena na podstawie analizy kodu i zasobów.*

### Znalezione problemy wydajnościowe

| Problem | Wpływ | Metryka |
|---------|-------|---------|
| `hero.jpg` 752KB, format JPG | Krytyczny | LCP ↑↑ |
| `public/images/` niezoptymalizowane JPG | Wysoki | LCP, FCP |
| Elfsight zewnętrzny skrypt | Wysoki | INP, TBT |
| Google Fonts (render-blocking) | Medium | FCP |
| Brak `width`/`height` na hero img | Medium | CLS |

### Pozytywne
- Astro SSG → brak JS frameworka per se ✅
- Vercel CDN edge delivery ✅
- Tailwind CSS inlined/purged ✅
- `compressHTML: true` ✅
- Gallery images w `src/assets/` → auto WebP przez Astro ✅
- `font-display: swap` (`display=swap` w URL) ✅

### Rekomendacja

Przenieść `hero.jpg` do `src/assets/` i użyć `<Image>` z Astro:
```astro
import { Image } from 'astro:assets';
import heroImg from '../assets/hero.jpg';
<Image src={heroImg} alt="..." width={1200} height={700} format="webp" quality={80} />
```
Lub skompresować `public/hero.jpg` do WebP <120KB narzędziem Squoosh.

---

## 6. AI Search Readiness (GEO)

| Sprawdzenie | Status | Szczegóły |
|-------------|--------|-----------|
| llms.txt | ❌ | Brak pliku |
| AI.txt | ❌ | Brak pliku |
| GPTBot w robots.txt | ✅ | `Allow: /` — dostępne |
| ClaudeBot w robots.txt | ✅ | `Allow: /` — dostępne |
| PerplexityBot | ✅ | `Allow: /` — dostępne |
| FAQPage (cytowalne Q&A) | ✅ | 8 FAQ na homepage |
| HowTo schema | ✅ | 3 kroki cyklinowania |
| Named entities | ✅ | Krzysztof, Andrzej Książczak |
| Konkretne dane (ceny, lata) | ✅ | 25–45 zł/m², 25 lat |
| Długie artykuły/poradniki | ❌ | Brak blogu |

### AI Citation Score: 52/100
Strona jest dostępna dla AI botów ale brak `llms.txt` i contentu poradnikowego ogranicza szansę na cytowanie w AI Overviews i ChatGPT.

---

## 7. Local SEO

| Czynnik | Status | Szczegóły |
|---------|--------|-----------|
| NAP w schemacie | ✅ | Spójny |
| NAP w stopce | ✅ | Spójny z schematem |
| Adres: Mordy 08-140 | ✅ | Spójny |
| areaServed (8 miast) | ✅ | Siedlce, Warszawa, i inne |
| Mapa na stronie | ⚠️ | Brak (placeholder w ServiceArea) |
| Opinie Google (Elfsight) | ✅ | Widget skonfigurowany |
| Facebook sameAs | ✅ | |
| Google Business sameAs | ✅ | `g.co/kgs/r7Xu2b` |
| Siedlce w title/H1 | ✅ | |
| Ceny w schemacie | ✅ | `"priceRange": "25–45 zł/m²"` |

### Uwaga o adresie
Adres jest w **Mordach** (nie w Siedlcach), co jest poprawne dla NAP consistency, ale w Google Business Profile ważne jest by adres był identyczny.

---

## 8. Images

| Obraz | Format | Rozmiar | Alt text | Status |
|-------|--------|---------|----------|--------|
| /hero.jpg | JPG | 752KB | ✅ | ❌ Niezoptymalizowany |
| /images/hero-parkiet.jpg | JPG | 252KB | - | ❌ Nieużywany! |
| /images/uslugi/*.jpg | JPG | nieznany | ✅ (zakładane) | ⚠️ Niezoptymalizowane |
| src/assets/galeria/przed-1.jpg | JPG→WebP | auto | ✅ | ✅ Astro Image |
| src/assets/galeria/po-1.jpg | JPG→WebP | auto | ✅ | ✅ Astro Image |
| /parkiety-logo-czarne.png | PNG | 43KB | ✅ | ⚠️ Mógłby być WebP |
| /parkiety-logo-bialy.png | PNG | 128KB | ✅ | ❌ 128KB logo to za dużo |

### Kluczowe problemy
1. `/images/hero-parkiet.jpg` — 252KB JPG nie jest używany (zastąpiony przez `hero.jpg`)
2. Logo białe 128KB — za duże dla pliku logo, powinno być <20KB
3. Tylko 2 zdjęcia realizacji (1 para przed/po) — bardzo mało

---

## 9. Technologia i architektura

| Aspekt | Szczegóły |
|--------|-----------|
| Framework | Astro 5 (SSG) |
| CSS | Tailwind CSS v3 |
| Hosting | Vercel |
| Adapter | @astrojs/vercel (static) |
| Email | Resend API |
| Opinie | Elfsight (Google Reviews) |
| Sitemap | @astrojs/sitemap ✅ |
| Kompresja HTML | ✅ (`compressHTML: true`) |
| `Astro.site` | `https://ksiazczak-parkiet.pl` ✅ |

---

## Podsumowanie stron

| Strona | Główne słowo kluczowe | Schema | Meta desc | Thin? |
|--------|----------------------|--------|-----------|-------|
| / | cyklinowanie bezpyłowe Siedlce | LocalBusiness, HowTo, FAQ | ✅ | ✅ |
| /cyklinowanie-bezpylowe | cyklinowanie bezpyłowe parkietu | LocalBusiness, Service, Breadcrumb | ✅ | ✅ |
| /uslugi | usługi parkieciarskie Siedlce | LocalBusiness, Breadcrumb | ✅ | ✅ |
| /schody-drewniane | schody drewniane Siedlce | LocalBusiness, Service, Breadcrumb | ✅ | ⚠️ |
| /realizacje | realizacje cyklinowanie przed i po | LocalBusiness, Breadcrumb | ✅ | ❌ |
| /kontakt | kontakt cyklinowanie Siedlce | LocalBusiness, Breadcrumb | ✅ | ✅ |
