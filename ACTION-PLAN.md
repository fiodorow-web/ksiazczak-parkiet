# Plan działania SEO — Książczak Parkiety i Schody
**Wygenerowany:** 2026-03-28 | **Wynik startowy:** 70/100

---

## 🔴 CRITICAL — Napraw natychmiast

### 1. Zoptymalizuj hero image (752KB → <120KB WebP)
**Problem:** `public/hero.jpg` ma 752KB. To główna przyczyna słabego LCP.

**Rozwiązanie A (zalecane) — przenieś do `src/assets/`:**
```
mv public/hero.jpg src/assets/hero.jpg
```
Następnie w `Hero.astro`:
```astro
---
import { Image } from 'astro:assets';
import heroImg from '../assets/hero.jpg';
---
<Image
  src={heroImg}
  alt="Piękna drewniana podłoga po cyklinowaniu bezpyłowym – Książczak Parkiety Siedlce"
  width={1200}
  height={700}
  format="webp"
  quality={80}
  fetchpriority="high"
  class="h-full w-full object-cover object-center"
/>
```

**Rozwiązanie B (szybsze):** Skompresuj na https://squoosh.app do WebP, max 120KB, zastąp plik.

**Oczekiwany efekt:** LCP poprawa o ~1-2s, Lighthouse Performance +15 pkt

---

### 2. Dodaj brakujące zasoby publiczne
**Problem:** Layout referencjonuje 3 pliki które nie istnieją → błędy 404, zepsute OG previews.

**Do zrobienia:**
```
public/favicon.ico        ← wygeneruj z favicon.svg (np. favicon.io)
public/apple-touch-icon.png  ← 180×180px PNG z logo
public/images/og-default.jpg ← 1200×630px JPEG, obraz dla social share
```

Dla OG image użyj zdjęcia podłogi z teksem "Cyklinowanie Bezpyłowe | Siedlce i Warszawa" nałożonym.

---

### 3. Skompresuj logo białe (128KB → <20KB)
**Problem:** `parkiety-logo-bialy.png` ma 128KB — nieakceptowalne dla pliku logo.
Skompresuj przez TinyPNG lub konwertuj do WebP i zaktualizuj referencje w `Footer.astro`.

---

## 🟠 HIGH — Napraw w ciągu 1 tygodnia

### 4. Dodaj llms.txt (GEO — AI Search)
Utwórz `public/llms.txt`:
```
# Książczak Parkiety i Schody
> Firma parkieciarsko-schodowa z 25+ latami doświadczenia. Siedlce i Warszawa.

## Usługi
- Cyklinowanie bezpyłowe podłóg drewnianych
- Lakierowanie i olejowanie parkietów
- Układanie parkietu i desek drewnianych
- Schody drewniane: montaż, produkcja, renowacja

## Kontakt
- Krzysztof Książczak (parkiety): +48 501 652 697
- Andrzej Książczak (schody): +48 604 820 769
- Obszar: Siedlce, Warszawa i okolice (100 km)

## Strony
- [Cyklinowanie bezpyłowe](https://ksiazczak-parkiet.pl/cyklinowanie-bezpylowe)
- [Usługi parkieciarskie](https://ksiazczak-parkiet.pl/uslugi)
- [Schody drewniane](https://ksiazczak-parkiet.pl/schody-drewniane)
- [Realizacje](https://ksiazczak-parkiet.pl/realizacje)
```

---

### 5. Popraw H1 na /uslugi (słowa kluczowe)
**Problem:** H1 "Nasze usługi" — generyczny, brak słów kluczowych.

**Zmień na:** "Usługi parkieciarskie – Siedlce i Warszawa" lub
"Cyklinowanie, lakierowanie i olejowanie podłóg – Siedlce"

Plik: [src/pages/uslugi.astro](src/pages/uslugi.astro)

---

### 6. Skróć title /uslugi (77 → maks. 65 znaków)
**Obecny:** "Usługi Parkieciarskie – Lakierowanie, Olejowanie, Układanie | Książczak Siedlce" (77 zn.)
**Proponowany:** "Usługi Parkieciarskie Siedlce – Parkiet, Schody | Książczak" (58 zn.)

---

### 7. Rozbuduj /schody-drewniane (650 → 1000+ słów)
Brakuje:
- FAQ specyficzne dla schodów (5-6 pytań)
- Opis typów schodów (proste, kręte, z balustradą)
- Cennik orientacyjny schodów
- Opis procesu realizacji schodów
- Zachęta do kontaktu z Andrzejem

---

### 8. Rozbuduj /realizacje (450 → 800+ słów)
Brakuje:
- Opis każdej realizacji (lokalizacja, typ podłogi, zakres prac)
- Więcej zdjęć przed/po (dodaj do `src/assets/galeria/`)
- Sekcja schodów realizacje
- Zachęta do zostawienia opinii w Google

---

### 9. Dodaj FAQPage JSON-LD
**Problem:** FAQ jest w microdata — prawidłowe, ale Google preferuje JSON-LD dla rich snippetów.

W `FAQ.astro` dodaj JSON-LD obok istniejącego microdata:
```astro
<script type="application/ld+json" set:html={JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": items.map(item => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": { "@type": "Answer", "text": item.a }
  }))
})} />
```

---

### 10. Usuń nieużywany plik hero-parkiet.jpg
`public/images/hero-parkiet.jpg` (252KB) nie jest nigdzie używany po zastąpieniu przez `hero.jpg`. Usuń.

---

## 🟡 MEDIUM — W ciągu 1 miesiąca

### 11. Dodaj lastmod do sitemapa
W `astro.config.mjs`:
```js
sitemap({
  lastmod: new Date(),
  changefreq: 'monthly',
  priority: 0.8,
})
```
Lub skonfiguruj per-page lastmod w frontmatter każdej strony.

---

### 12. Dodaj Person schema dla Krzysztofa i Andrzeja
W `SchemaOrg.astro` dodaj:
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Krzysztof Książczak",
  "jobTitle": "Mistrz parkieciarz",
  "worksFor": { "@id": "https://ksiazczak-parkiet.pl/#business" },
  "telephone": "+48501652697"
}
```

---

### 13. Dodaj FAQ na /cyklinowanie-bezpylowe i /schody-drewniane
Komponent `<FAQ>` już istnieje — wystarczy dodać jako prop `items` z pytaniami specyficznymi dla strony.

---

### 14. Zoptymalizuj obrazy usług (public/images/uslugi/)
Obrazy JPG w `public/images/uslugi/` i `public/images/schody/` nie przechodzą przez Astro Image.

Opcja 1: Przenieś do `src/assets/uslugi/` i użyj `<Image>` z Astro.
Opcja 2: Skompresuj ręcznie do WebP przez Squoosh, zastąp pliki.

---

### 15. Dodaj mapę Google na stronie /kontakt lub /service-area
W `ServiceArea.astro` jest placeholder. Dodaj Google Maps embed:
```html
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%" height="400" loading="lazy"
  title="Obszar usług Książczak Parkiety – Siedlce i okolice"
></iframe>
```

---

### 16. Preload Google Fonts lub zastąp system fontem
Obecne podejście (`<link rel="stylesheet">`) jest render-blocking.

**Opcja A** — Dodaj preload:
```html
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" />
```

**Opcja B** — Użyj systemowych fontów (bezpłatna wydajność):
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

---

### 17. Zaktualizuj robots.txt — wyjaśnienie AI botów
Obecny robots.txt jest generyczny. Dodaj jawne zezwolenie dla AI botów:
```
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: *
Allow: /

Sitemap: https://ksiazczak-parkiet.pl/sitemap-index.xml
```

---

## 🟢 LOW — Backlog

### 18. Blog / Poradniki SEO
Tematy o najwyższym potencjale dla rankingów długiego ogona:
- "Cyklinowanie czy wymiana parkietu – co się bardziej opłaca?"
- "Ile kosztuje cyklinowanie podłogi w Siedlcach w 2026?"
- "Lakierowanie vs olejowanie podłogi drewnianej"
- "Jak przygotować się do cyklinowania – poradnik krok po kroku"

Każdy artykuł: min. 1000 słów, FAQ, schema Article.

---

### 19. Indywidualne Review schema
Gdy zbudujesz bazę opinii, dodaj do schematu LocalBusiness pole `review` z indywidualnymi recenzjami (max 5).

---

### 20. ImageObject schema dla galerii
Dla każdego zdjęcia realizacji dodaj JSON-LD:
```json
{
  "@type": "ImageObject",
  "url": "...",
  "description": "Cyklinowanie parkietu – efekt przed i po – Siedlce",
  "contentLocation": { "@type": "Place", "name": "Siedlce" }
}
```

---

## Prognoza po wdrożeniu

| Priorytet | Punkty SEO Health | Wpływ |
|-----------|------------------|-------|
| Critical (1-3) wdrożone | +8 pkt | 78/100 |
| + High (4-10) wdrożone | +7 pkt | 85/100 |
| + Medium (11-17) wdrożone | +5 pkt | 90/100 |
| + Low (18-20) wdrożone | +3 pkt | 93/100 |

---

*Raport wygenerowany przez Claude Code z użyciem narzędzi seo-audit*
