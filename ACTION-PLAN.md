# Plan Działania SEO — Książczak Parkiety i Schody
**Data:** 2026-04-09 | **Wynik:** 76/100

---

## 🔴 CRITICAL — Napraw natychmiast

### 1. Dodaj title + meta description na /realizacje
**Plik:** `src/pages/realizacje.astro`

```astro
<Layout
  title="Realizacje – Cyklinowanie Parkietu i Schody Drewniane | Książczak Siedlce"
  description="Galeria realizacji – ponad 37 zdjęć parkietów po cyklinowaniu i schodów drewnianych. Cyklinowanie bezpyłowe Siedlce, Warszawa, Mińsk Mazowiecki."
  ...
>
```

---

## 🟠 HIGH — W ciągu 1 tygodnia

### 2. Popraw meta descriptions na 4 stronach
**Plik:** odpowiednie `src/pages/`

| Strona | Nowy meta description |
|--------|----------------------|
| /kontakt | `Skontaktuj się z Książczak Parkiety – bezpłatna wycena cyklinowania w Siedlcach, Warszawie i Mińsku Mazowieckim. Tel: +48 501 652 697` |
| /schody-drewniane | `Schody drewniane na wymiar Siedlce – produkcja, montaż i renowacja. Dąb, jesion, sosna. Ponad 25 lat doświadczenia. ☎ Bezpłatna wycena!` |
| /uslugi | `Cyklinowanie bezpyłowe, lakierowanie, olejowanie podłóg i schody drewniane – Siedlce, Warszawa. Kompleksowe usługi parkieciarskie od 1999 roku.` |
| /o-nas | `Poznaj Książczak Parkiety i Schody – rodzinna firma z Mordów od 1999 roku. Krzysztof Książczak, specjalista Bona DCS. Ponad 1000 realizacji.` |

### 3. Dodaj `<link rel="preload">` dla hero image
**Plik:** `src/components/Hero.astro` lub `src/layouts/Layout.astro`

```html
<link rel="preload" as="image" href="{optimizedBg.src}" fetchpriority="high" />
```
**Efekt:** Skróci LCP o ~0.5–1s

### 4. Lazy-load Elfsight widget (Google Reviews)
**Plik:** `src/components/Reviews.astro`

Załaduj skrypt Elfsight przez IntersectionObserver – tak samo jak Google Maps:
```js
// Wstaw script tag tylko gdy sekcja wejdzie w viewport
new IntersectionObserver(function(entries, obs) {
  if (entries[0].isIntersecting) {
    var s = document.createElement('script');
    s.src = 'https://static.elfsight.com/platform/platform.js';
    s.async = true;
    document.body.appendChild(s);
    obs.disconnect();
  }
}, { rootMargin: '200px' }).observe(reviewsSection);
```

### 5. Popraw priorytety w sitemapie
**Plik:** `astro.config.mjs` (konfiguracja @astrojs/sitemap)

```js
sitemap({
  customPages: [],
  serialize(item) {
    if (item.url === 'https://ksiazczak-parkiet.pl/') item.priority = 1.0;
    else if (item.url.includes('cyklinowanie-')) item.priority = 0.9;
    else if (['uslugi', 'schody-drewniane', 'cyklinowanie-bezpylowe'].some(p => item.url.includes(p))) item.priority = 0.8;
    else item.priority = 0.6;
    return item;
  }
})
```

---

## 🟡 MEDIUM — W ciągu miesiąca

### 6. Stwórz /llms.txt
**Plik:** `public/llms.txt`

```
# Książczak Parkiety i Schody
> Rodzinna firma parkieciarska z Mordów (Mazowsze), obsługująca Siedlce, Warszawę i Mińsk Mazowiecki.

## Kim jesteśmy
Działamy od 1999 roku. Właściciel: Krzysztof Książczak – specjalista cyklinowania bezpyłowego (system Bona DCS).
Ponad 1000 zrealizowanych zleceń w promieniu 150 km od Siedlec.

## Usługi
- Cyklinowanie bezpyłowe (Bona DCS – HEPA, >99% pyłu przy źródle)
- Lakierowanie podłóg drewnianych (lakier wodny, poliuretanowy, UV)
- Olejowanie podłóg (oleje naturalne, efekt matowy)
- Układanie parkietu i desek drewnianych (jodełka, cegiełka, karo)
- Listwowanie (drewno, MDF, lakierowane)
- Schody drewniane na wymiar (dąb, jesion, sosna – montaż i renowacja)

## Obsługiwane miasta
Siedlce (siedziba), Warszawa (~100 km), Mińsk Mazowiecki (~60 km), Łuków, Biała Podlaska, cały obszar Mazowsza

## Kontakt
Tel: +48 501 652 697 | Email: ksiazczak.krzysztof@gmail.com
Adres: ul. 11-go Listopada 61, 08-140 Mordy, Polska

## Strony
- https://ksiazczak-parkiet.pl/cyklinowanie-bezpylowe
- https://ksiazczak-parkiet.pl/uslugi
- https://ksiazczak-parkiet.pl/schody-drewniane
- https://ksiazczak-parkiet.pl/realizacje
- https://ksiazczak-parkiet.pl/cyklinowanie-siedlce
- https://ksiazczak-parkiet.pl/cyklinowanie-warszawa
- https://ksiazczak-parkiet.pl/cyklinowanie-minsk-mazowiecki
```

### 7. Dodaj linki wewnętrzne z city pages
W każdej stronie `/cyklinowanie-[miasto]` dodaj na dole sekcję:
```
Sprawdź pełną ofertę → /uslugi
Schody drewniane → /schody-drewniane
```

### 8. Popraw alt teksty w galerii
Zmień schematyczne "realizacja nr X" na opisowe:
- Galeria parkietów: `Cyklinowanie bezpyłowe parkietu dębowego – realizacja Siedlce`
- Galeria schodów: `Schody drewniane dębowe na wymiar – dom jednorodzinny Siedlce`

### 9. ImageGallery schema na /realizacje
Dodaj JSON-LD `ImageGallery` z `ImageObject` dla każdego zdjęcia z alt, contentUrl, lokalizacją.

### 10. Rozszerz city pages o dodatkowe miasta
Dodaj do `src/data/miasta.ts`: Łuków, Biała Podlaska, Garwolin – wszystkie w obszarze obsługi widocznym w ServiceArea.

---

## 🟢 LOW — Backlog

### 11. Blog / Artykuły poradnikowe
Tematy o najwyższym potencjale:

| Temat artykułu | Est. wolumen/mies |
|----------------|------------------|
| "Ile kosztuje cyklinowanie parkietu m2 2026" | 880 |
| "Jak często cyklinować parkiet" | 590 |
| "Lakier czy olej do podłogi drewnianej" | 480 |
| "Cyklinowanie bezpyłowe – jak się przygotować" | 320 |
| "Renowacja schodów drewnianych krok po kroku" | 260 |

### 12. Więcej recenzji Google
- Aktualnie: 47 opinii (5.0★)
- Cel: 100+ opinii
- Metoda: SMS/email z prośbą o opinię po zakończeniu zlecenia

### 13. Video content
- Nagraj 60-sekundowy film z realizacji (cyklinowanie + efekt końcowy)
- Wstaw na stronę + YouTube
- Dodaj `VideoObject` schema

### 14. GBP uzupełnienie
- Zdjęcia before/after w Google Business Profile
- Q&A: odpowiedz na najczęstsze pytania
- Dodaj usługi z orientacyjnymi cenami

### 15. PR / Wzmianki zewnętrzne
- Portal Fixly.pl (profil firmy)
- Oferia.pl
- Houzz PL
- Lokalne portale Siedlce (np. siedlce.com)

---

## Prognoza po wdrożeniu

| Etap | Wynik SEO Health |
|------|-----------------|
| Obecny (2026-04-09) | **76/100** |
| + Critical wdrożone | ~79/100 |
| + High wdrożone | ~84/100 |
| + Medium wdrożone | ~89/100 |
| + Low wdrożone | ~93/100 |

---

*Wygenerowany: 2026-04-09 | Claude Code SEO Audit | ksiazczak-parkiet.pl*
