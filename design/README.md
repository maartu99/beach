# Handoff: Il Traghetto Blu — Ordini dall'ombrellone (PWA)

## Overview
Mobile web app (installable PWA) for a beach club in Pescara. Guests scan a QR on their umbrella, browse the menu, order food and drinks, pay in-app and get delivery to their sunbed. A runner (staff) view lets staff pick up and deliver orders. Platform is meant to be multi-tenant (one app, many beach clubs); this design shows the tenant "Il Traghetto Blu".

## About the Design Files
The files in `prototype/` are **design references built in HTML** — a working prototype showing intended look and behavior, **not production code**. Recreate them in a proper app stack. No codebase exists yet (`maartu99/beach` is empty), so pick one; recommended:
- **Next.js (App Router) + TypeScript + Tailwind**, PWA manifest + service worker
- **Supabase** (Postgres, Auth with Apple/Google/email magic link, Realtime for order status)
- **Stripe** (Payment Element with Apple Pay / Google Pay, saved cards via Customer + SetupIntent)
- i18n: `next-intl` with the strings in `i18n.json`

To view the prototype: open `prototype/Traghetto Blu.dc.html` in a browser served over http (e.g. `npx serve prototype`). It renders inside an iPhone frame (402×874) — the frame is presentation only, not part of the app.

## Fidelity
**High-fidelity.** Colors, type, spacing, radii and copy are final. Recreate pixel-accurately, mobile-first (design width 402px; fluid 360–480px). On wider screens center content at max-width 480px.

## Screens / Views

### 1. Menu (tab "Ordina")
- **Header** (sticky, bg `rgba(250,248,255,.95)`, bottom border `rgba(226,231,255,.6)`, shadow `0 1px 8px rgba(0,0,0,.04)`, padding 10px 16px + safe-area top):
  - Row 1: logo 36px circle (bg `#e2e7ff`, 2px padding) + title "Il Traghetto Blu" (20px/700, `#006194`, letter-spacing -0.01em). Right: cart button 36px circle bg `#eaedff` icon `shopping_bag` with 8px amber dot `#fea619` when cart non-empty; profile button 36px circle (logged out: icon `account_circle` on `#eaedff`; logged in: initials white on `#006194`).
  - Row 2: umbrella pill — bg `#131b2e`, white, 12px/700, padding 6px 12px, radius full, icon `beach_access` 16px, text "Ombrellone 23 • Fila C" (from saved spot).
- **Welcome banner**: bg `#006194`, radius 12px, padding 16px, shadow `0 4px 12px rgba(0,97,148,.2)`, decorative blurred circle bottom-right `rgba(0,123,185,.5)`. 40px icon circle `rgba(255,255,255,.15)` with filled `wb_sunny` in `#ffddb8`. Title "Buon pomeriggio sotto il sole!" 14px/700; green pill `#00855b` "Attivo fino alle 19:00" with pinging mint dot `#6ffbbe`; body 14px/20px `#cce5ff` "Ordina direttamente dal tuo lettino. Consegna media stimata: **12 min**."
- **Search + allergen button**: input 52px high, radius 12px, white, 2px transparent border → focus border `#006194` + ring `0 0 0 4px rgba(2,132,199,.15)`; search icon left 14px. Allergen button 52px, white, icon `tune` in `#855300`; shows amber count badge when filters active, else an 8px amber dot.
- **Category chips** (sticky under header, horizontal scroll, gap 6px): 40px pills, 12px/700 letter-spacing .04em, icon 18px. Active `#006194`/white; inactive white/`#3f4850`. Order: I più amati · Caffetteria · Cibo & Snack · Alcolici · Cucina pescarese · Dolci.
- **Active allergen notice** (when filters set): bg `#ffddb8`, text `#2a1700`, "N allergeni esclusi" + "Azzera" link.
- **Featured section** ("I più amati sulla spiaggia", only when category = top and no search): title 20px/700 with filled `local_fire_department` `#855300`; "Top Lido" pill. Large cards: white, radius 12px, shadow `0 4px 20px -2px rgba(15,23,42,.08), 0 2px 6px -1px rgba(245,158,11,.05)`; image 176px cover; badge top-left (Preferito amber `#fea619`/`#684000`, Pescato del Giorno green `#00855b`/`#f5fff6`, Tipico pescarese blue `#006194`/white); price pill bottom-right white 20px/700 `#006194`. Body: name 18px/700, desc 12px `#3f4850`, add button 48px circle `#006194`.
- **Category sections**: header icon + 20px/700 title + "N Prodotti" 12px/700 `#006194`. Row cards: white, radius 12px, padding 12px, gap 14px; 64px image radius 12px; name 14px/700 (ellipsis); tag pill 11px/700 (amber `#ffddb8`/`#653e00`, mint `#d4fbe7`/`#005236`, blue `#e2e7ff`/`#004b73`); price 18px/700 `#006194`.
  - Not in cart: 44px circle add button `#e2e7ff`/`#006194`, hover `#006194`/white.
  - **In cart: stepper** pill (1px border `#e2e7ff`): − button 40px white (becomes trash icon `delete` when qty = 1 → removes item), qty 15px/800 tabular, + button 40px `#006194`.
- **Empty search state**: `search_off` icon, "Nessun prodotto trovato".
- **Floating cart hub** (when cart non-empty, menu view only): absolute, left/right 16px, bottom 100px; bg `rgba(40,48,68,.96)`, radius full, shadow `0 20px 40px -6px rgba(15,23,42,.35)`, top rim `rgba(255,255,255,.15)`. Amber 40px bag icon, "N articoli nel carrello" 11px/700 `#ffddb8`, subtotal 18px/800; CTA "Vedi Carrello →" 48px pill `#fea619`, text `#131b2e` 14px/800.

### 2. Product detail sheet
Bottom sheet over scrim `rgba(19,27,46,.45)`; radius 24px top; slide-up 250ms ease-out. Hero image 240px with close button (40px white circle). Name 24px/700, price 22px/800 `#006194`, description 15px/22px `#3f4850`. "Allergeni" label + chips (`#f1f5f9`/`#0f172a`, 12px/700, padding 6px 14px) or green "Nessun allergene principale". Bottom: stepper (48px buttons, min qty 1) + primary pill "Aggiungi · €X" (52px, `#006194`).

### 3. Allergen filter sheet
Bottom sheet with grabber. Title "Filtro allergeni" 24px/700 + "Azzera". 2-column grid of 52px toggles (radius 12px; selected border `#006194` bg `#f2f3ff`, 24px checkbox filled `#006194` with white check). Allergens: Glutine, Crostacei, Molluschi, Latte, Frutta a guscio, Uova, Pesce, Solfiti. CTA "Mostra N prodotti". Products containing any excluded allergen are hidden from the menu.

### 4. Cart & checkout
Sub-header: back button 40px `#f2f3ff`, icon `beach_access`, title "Il tuo Carrello" 18px/700; right: "Aiuto" pill + profile button.
- Delivery card (white, radius 16px, border `rgba(191,199,210,.3)`): 48px icon tile `#cce5ff`; "CONSEGNA AL LETTINO" 12px/700 uppercase `#006194`; spot 18px/700; sector line with green dot; "Modifica" pill → opens Profile. Footer: timer "Tempo stimato: ~12 min" `#006947`.
- "Il Tuo Ordine (N)" 24px/700 + "Preparazione Rapida" pill.
- Line cards: 92px image, name 15px/700, line total 18px/700 `#006194`, note 12px, "€X cad.", stepper (40px; − becomes trash at qty 1).
- Notes textarea (bg `#f2f3ff`, 2px border `#e2e7ff`, focus `#006194`).
- Tip: 4-column grid of 44px buttons (No mancia, €1, €2, €3); selected `#006194`/white. Badge "100% al personale".
- Summary: subtotal, "Servizio al lettino" + "Promo Pilota" pill → "Gratuito (€0.00)" `#006947`, tip; total 38px/800 `#006194` + "IVA Inclusa" pill.
- Pay buttons (56px/52px pills): if logged in with saved card → primary `#006194` "Paga con VISA •••• 4242"; dark `#131b2e` "Paga con Apple Pay / Google Pay" + "1-Tap" chip; outlined "Paga con Carta di Credito / Debito". Footer trust lines; if logged out, link "Accedi per salvare ombrellone e carta".
- Empty cart state with "Torna al menu".
- Bottom nav hidden on cart/payment/success.

### 5. Payment processing → Confirmation
Processing: modal over scrim, spinner (44px, 4px ring `#e2e7ff`, top `#006194`, 0.8s linear), "Pagamento in corso…", amount. Success: 96px green check circle `#00855b` with 12px halo; "Ordine confermato!" 32px/800; summary card (order code dark pill, spot, ETA, paid total); CTAs "Segui l'ordine" (primary) and "Continua a ordinare" (outlined).

### 6. Orders (tab "Ordini")
Active order card: blue header `#006194` with "ARRIVO STIMATO" + "~N min" 32px/800 and order code. Vertical stepper: Ricevuto → In preparazione → In consegna → Consegnato (28px dots: done `#00855b` check, current `#006194` with ring `0 0 0 5px rgba(0,97,148,.15)`, todo `#eaedff`). Runner row (avatar, name, chat button). Line items + paid total. Empty state when none. "Ordini precedenti" list with "Riordina" (adds lines to cart, opens cart). Nav icon shows green dot while an order is live.

### 7. Info Lido (tab)
Dark spot card `#131b2e`: 56px amber tile with umbrella number, "IL TUO POSTO", spot, sector, **"Cambia" button** → expands inline editor (umbrella number stepper 1–120, row A–F 6-col grid, sector Ponente/Levante; selected amber `#fea619`), hint "Hai cambiato posto? Aggiornalo qui o scansiona il QR del nuovo ombrellone.", "Fatto" closes. Service hours list (Bar 08:00–19:00, Cucina 12:00–15:30, Consegna 09:00–19:00). Wi-Fi network/password.

### 8. Profile & Settings (header avatar)
- Logged out: card "Accedi o registrati" + Apple (dark), Google (outlined), email input + "Continua con email"; note that guest ordering is allowed.
- Logged in: avatar + name/email; "I miei dati" (name, phone inputs 52px); "Il mio ombrellone" (same editor as Info Lido, light variant `#006194`); "Metodi di pagamento" (saved cards, tap to set default, delete; add-card form with number auto-spaced, MM/AA, CVC; validation: ≥15 digits, 5-char expiry, ≥3 CVC → error "Controlla numero, scadenza e CVC."). 
- "Impostazioni": Lingua ITA/EN segmented; Modalità sole toggle; Modalità scura toggle (52×32 switches, on `#006194`).
- "Esci" outlined red `#ba1a1a`.

### 9. Runner mode (tab "Runner") — staff
"Da consegnare" + count, green "In servizio" pill. Order cards: 52px dark tile with umbrella number + row; code, status pill (Nuovo `#ffddb8`, In cucina `#e2e7ff`, In consegna `#cce5ff`, Consegnato `#d4fbe7`), items summary, time ago, optional amber note. Action 52px pill: "Prendi in carico" (`#006194`) → status In consegna; "Segna consegnato" (`#00855b`) → Consegnato. Guest's own order highlighted with 2px `#006194` border. In production this tab must be behind staff auth (role = runner), not visible to guests.

### Bottom nav
Absolute bottom, bg `rgba(250,248,255,.96)`, shadow `0 -4px 20px rgba(19,27,46,.06)`, safe-area padding. 4 items 72×56: Ordina (`restaurant_menu`), Ordini (`moped`), Info Lido (`beach_access`), Runner (`badge`). Active `#006194` filled icon; inactive `#3f4850`. Label 12px/700.

## Interactions & Behavior
- Add (+) anywhere: increments cart, toast "Aggiunto al carrello" (top, dark pill, 1.4s), `navigator.vibrate(30)`.
- − at qty 1 removes the item (icon switches to trash).
- Tapping a product card opens detail sheet; tapping scrim closes.
- Search filters by name + short description (case-insensitive) across all categories.
- Category chip "I più amati" = all sections + featured; other chips show only that section.
- Pay → processing (~1.7s in prototype; real: Stripe confirm) → success; cart and notes cleared.
- Order status: prototype auto-advances every 9s; production should push status via realtime from kitchen/runner actions.
- Sunlight mode: boost contrast (prototype uses `filter: contrast(1.35) saturate(1.15)`); production should swap to a high-contrast token set.
- Dark mode: prototype approximates with invert + hue-rotate (images re-inverted). **Production should implement a real dark palette** (derive from tokens below; surface ≈ `#131b2e`, container ≈ `#283044`, text `#eef0ff`, primary `#93ccff`).
- Language switch re-renders all copy (IT default, EN available). Product names stay Italian.
- Scroll resets to top on tab/view change.
- Minimum touch target 44px (48–52px for primary actions). Active press: `scale(0.98)`.

## State Management
- `lang: 'it'|'en'`, `sunlight: bool`, `dark: bool` (persist in localStorage / user profile)
- `user: {name, email, phone} | null`, `cards: [{id, brand, last4, exp}]`, `defaultCardId`
- `spot: {umbrella: number, row: 'A'..'F', sector: 'ponente'|'levante'}` — initialised from QR URL params (e.g. `/t/traghetto-blu?u=23&r=C`), editable, saved to profile when logged in
- `cart: Record<productId, qty>`, `tip: 0|1|2|3`, `notes: string`
- `excludedAllergens: string[]`, `category`, `search`
- `orders: [{id, code, spot, lines:[[productId, qty]], total, tip, note, status: 0..3, createdAt}]`
- Backend entities: Tenant (beach club), Spot/Umbrella (with QR token), Product, Category, Order, OrderLine, User, Staff (role runner/kitchen/admin), PaymentMethod (Stripe).

## Design Tokens
Font: **Plus Jakarta Sans** (400–800). Icons: **Material Symbols Outlined** (Google Fonts), FILL 1 for active/emphasis.

Colors:
- surface `#faf8ff` · surface-container-lowest `#ffffff` · -low `#f2f3ff` · container `#eaedff` · -high `#e2e7ff` · -highest `#dae2fd`
- on-surface `#131b2e` · on-surface-variant `#3f4850` · outline `#707881` · outline-variant `#bfc7d2` · border `#e2e8f0`
- primary `#006194` · primary-container `#007bb9` · primary-fixed `#cce5ff` · on-primary-fixed `#001d31` · inverse-primary `#93ccff`
- secondary `#855300` · secondary-container (amber CTA) `#fea619` · on-secondary-container `#684000` · secondary-fixed `#ffddb8` · on-secondary-fixed `#2a1700` · -variant `#653e00`
- tertiary `#006947` · tertiary-container `#00855b` · on-tertiary-container `#f5fff6` · tertiary-fixed `#6ffbbe` · -dim `#4edea3` · soft mint `#d4fbe7` / `#005236`
- inverse-surface `#283044` · inverse-on-surface `#eef0ff`
- error `#ba1a1a` · error-container `#ffdad6`
- Category tile tints: caffe `#f2e6da`, snack `#ffdad6`, alcol `#ffddb8`, cucina `#cce5ff`, dolci `#e2e7ff`

Type scale: display 40/48 800 · headline-xl 32/40 700–800 (-0.02em) · headline-lg 24/32 700 (-0.01em) · headline-md 20/28 700 · title 18/24 700 · body-lg 16/24 500 · body 14–15/20–22 400–500 · label-lg 14/20 700 (.02em) · label-md 12/16 700 (.04em) · caption 11/14 600–700.

Spacing: 4, 6, 8, 10, 12, 14, 16, 20, 24, 40. Screen margin 16px. Section gap 16px.

Radius: 6 (checkbox) · 8 · 12 (cards, inputs, tiles) · 16 (large cards) · 24 (sheets) · full (pills, buttons, chips).

Shadows:
- card-sm `0 1px 3px rgba(15,23,42,.06)`
- card `0 4px 20px -2px rgba(15,23,42,.05), 0 2px 6px -1px rgba(245,158,11,.04)`
- modal `0 12px 32px -4px rgba(15,23,42,.1), 0 4px 12px -2px rgba(2,132,199,.06)`
- floating `0 20px 40px -6px rgba(15,23,42,.14)` (hub uses .35)

Full original spec: `reference/DESIGN-riviera-direct.md`.

## Assets
- **Product photos**: Stitch exports (Aperol, Insalata di mare, Caffè shakerato, Granita, Birra, Panino caprese — Google-hosted URLs) and Wikimedia Commons (all other items; CC-licensed — check each file's license/attribution before production, or replace with the venue's own photos). URLs are in `menu-data.json` → `image`.
- **Logo**: placeholder from the Stitch export (Lido Azzurro). Replace with the Traghetto Blu logo.
- Icons: Material Symbols names are referenced inline in the prototype and in `menu-data.json` categories.

## Files
- `prototype/Traghetto Blu.dc.html` — full interactive prototype (all screens, logic in the `Component` class at the bottom; data constants `PRODUCTS`, `ALLERGENS`, `CATS`, `SECTION_TITLES`, `T`)
- `prototype/ios-frame.jsx`, `prototype/support.js` — prototype runtime/frame only (do not port)
- `menu-data.json` — 26 products, 5 categories, 8 allergens, IT/EN copy, prices, images (seed data for the DB)
- `i18n.json` — all UI strings IT/EN
- `reference/` — original Stitch screenshots and design-system spec
