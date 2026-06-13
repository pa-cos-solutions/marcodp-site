# Marcodp — site redesign (ITP & Service Auto Zalău)

Site static, mobil-first, în limba română. 4 pagini:

- `index.html` — Acasă (hero, servicii, de ce noi, pași, recenzii, CTA)
- `itp.html` — Stație ITP (tarife, acte necesare, ce verificăm, FAQ)
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
- [x] **Adresă:** Str. Mihai Viteazu nr. 104B, Zalău, jud. Sălaj
- [x] **Email:** marius@marcodp.com
- [x] **Program:** L–V 09:00–17:30, Sâmbătă 08:00–14:00, Duminică închis (și în `assets/script.js`, obiectul `hours`)
- [x] **Hartă + coordonate GPS:** 47.225505, 23.010668 (iframe în `contact.html` + `geo` din schema)
- [x] **Recenzii Google:** buton „Vezi recenziile pe Google" în secțiunea de recenzii
- [x] **Foto reale** din site-ul marcodp.com (atelier + SUV pe stand) în `assets/img/`

## ⚠️ Rămâne de completat
- [ ] **Tarife ITP reale** — tabelul din `itp.html` / `en/itp.html` (singurele câmpuri `.fill` rămase, evidențiate galben)
- [ ] **Cod poștal exact** — momentan „450000" generic în schema JSON-LD din `index.html`
- [ ] **Linkuri Facebook & Instagram** — `href="#"` în footere + `sameAs` din schema
- [ ] **Recenzii afișate** — cele 3 carduri sunt exemple; pot fi înlocuite cu citate reale
- [ ] **Logo real** — înlocuiește pătratul „M" cu logo-ul firmei
- [ ] **Formular** — acum deschide WhatsApp pre-completat; pentru email folosește Formspree/EmailJS sau formularul din WordPress

## Telefon folosit peste tot
0744 773 698 → `tel:+40744773698` și `wa.me/40744773698`
