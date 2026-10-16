# Beach - ordini dall'ombrellone

Web app (PWA) per stabilimenti balneari: il cliente scansiona il QR sull'ombrellone, ordina cibo e bevande, paga in app e riceve la consegna al lettino. Piattaforma multi-tenant, personalizzabile per ogni lido.

## Struttura

- `docs/` - prototipo mobile pubblicato su GitHub Pages, per provare l'esperienza sul telefono. Solo frontend: ordini e pagamenti sono simulati.
- `design/` - handoff di design originale (prototipo, dati del menu, testi IT/EN, design tokens, riferimenti Stitch).

## Provare il prototipo

Apri il link di GitHub Pages dal telefono. La posizione si può passare nell'indirizzo, come farà il QR:

- `?u=23&r=C` - ombrellone 23, fila C
- `&s=levante` - settore (default ponente)

Da Chrome su Android: menu > "Aggiungi a schermata Home" per installarla come app.

## Prossimi passi

App vera con Next.js, Supabase e Stripe (vedi specifica MVP).
