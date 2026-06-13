# Marcodp — site redesign (ITP & Service Auto Zalău)

Site static, mobil-first, în limba română. 4 pagini:

- `index.html` — Acasă (hero, servicii, de ce noi, pași, recenzii, CTA)
- `itp.html` — Stație ITP (tarife, acte necesare, ce verificăm, FAQ)
- `service.html` — Service Auto (geometrie 6D, listă servicii)
- `contact.html` — Contact (formular programare, program, hartă)
- `assets/styles.css`, `assets/script.js` — stil + interactivitate

## Cum îl previzualizezi local
```
cd marcodp-site
python3 -m http.server 4321
# deschide http://localhost:4321
```

## ⚠️ De completat (marcat în pagini cu fundal galben — clasa `.fill`)
- [ ] **Adresa exactă** (stradă, număr, cod poștal) — în footer, `contact.html` și schema JSON-LD din `index.html`
- [ ] **Program de lucru real** — în `contact.html` ȘI în `assets/script.js` (obiectul `hours`, pentru statusul „Deschis/Închis acum")
- [ ] **Email** — footer + `contact.html`
- [ ] **Tarife ITP reale** — tabelul din `itp.html`
- [ ] **Recenzii reale** (Google/Facebook) — `index.html`
- [ ] **Linkuri Facebook & Instagram** — în toate footerele și în schema
- [ ] **Coordonate GPS + embed Google Maps** — `src` din iframe-ul din `contact.html` și `geo` din schema
- [ ] **Logo real** — înlocuiește pătratul „M" cu logo-ul firmei
- [ ] **Formular** — acum deschide WhatsApp pre-completat; pentru email folosește Formspree/EmailJS sau formularul din WordPress

## Telefon folosit peste tot
0744 773 698 → `tel:+40744773698` și `wa.me/40744773698`
