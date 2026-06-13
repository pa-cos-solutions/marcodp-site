# Marcodp — site redesign (ITP & Service Auto Zalău)

Site static, mobil-first, în limba română. 4 pagini:

- `index.html` — Acasă (hero, servicii, de ce noi, pași, recenzii, CTA)
- `itp.html` — Stație ITP (acte necesare, ce verificăm, FAQ)
- `service.html` — Service Auto (geometrie 6D, listă servicii)
- `contact.html` — Contact (formular programare, program, hartă)
- `assets/styles.css`, `assets/script.js` — stil + interactivitate (partajate RO + EN)
- `en/` — versiunea în engleză (aceleași 4 pagini); comutatorul RO/EN din meniu leagă ambele versiuni

## Cum îl previzualizezi local
```
cd marcodp-site
python3 -m http.server 4321
# deschide http://localhost:4321
```

## Date reale completate (iunie 2026)
- [x] **Adresă:** Bd. Mihai Viteazu nr. 104B, Zalău, jud. Sălaj
- [x] **Email:** marius@marcodp.com
- [x] **Program:** L–V 09:00–17:30, Sâmbătă 08:00–14:00, Duminică închis (și în `assets/script.js`, obiectul `hours`)
- [x] **Hartă + coordonate GPS:** 47.225505, 23.010668 (iframe în `contact.html` + `geo` din schema)
- [x] **Recenzii Google:** buton „Vezi recenziile pe Google" în secțiunea de recenzii
- [x] **Foto reale** din site-ul marcodp.com (atelier, SUV pe stand, clădirea noaptea) în `assets/img/`
- [x] **Logo real** Marco DP (`logo-mark.png`) în header + footer; pătratul „M" a fost înlocuit
- [x] **Culori de brand** din logo: roșu `#d50003`, albastru `#160fdb` (în `assets/styles.css`)
- [x] **GDPR:** plăcuțele de înmatriculare vizibile au fost pixelate în toate pozele afișate (`building.jpg`, `suv-itp.jpg`, `repairs.jpg`)
- [x] **Tarife eliminate** — secțiunea de prețuri ITP a fost scoasă din `itp.html` / `en/itp.html` (firma nu afișează tarife)
- [x] **Social** — Facebook, Instagram și TikTok în footere + `sameAs` din schema (`index.html` / `en/index.html`)
- [x] **Formular → email** — la trimitere, programarea ajunge pe email prin FormSubmit (AJAX, fără backend). Destinatar principal `marius@marcodp.com`, restul prin `_cc`: mariusmadmax@, truta_diana@, truta_georgiana@, truta_corina@ (toate `@yahoo.com`). Vezi `assets/script.js`.
  - ⚠️ **Activare unică:** la prima programare, FormSubmit trimite un link de confirmare pe `marius@marcodp.com`; trebuie dat click o singură dată ca să înceapă livrarea emailurilor.

## ⚠️ Rămâne de completat
- [ ] **Cod poștal exact** — momentan „450000" generic în schema JSON-LD din `index.html`
- [x] **Recenzii reale** preluate de pe profilul Google (mirror citymaps.ro): F. L., M. C., P. T. — 5★ fiecare

## Telefon folosit peste tot
0744 773 698 → `tel:+40744773698` și `wa.me/40744773698`
