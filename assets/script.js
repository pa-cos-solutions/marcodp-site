// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.hamburger');
  var links = document.querySelector('.nav-links');
  if (burger && links) {
    burger.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // "Deschis acum / Închis" status based on weekly hours.
  // EDIT these to match the real program (24h format). null = closed.
  var hours = {
    1: ['09:00', '17:30'], // Luni
    2: ['09:00', '17:30'], // Marți
    3: ['09:00', '17:30'], // Miercuri
    4: ['09:00', '17:30'], // Joi
    5: ['09:00', '17:30'], // Vineri
    6: ['08:00', '14:00'], // Sâmbătă
    0: null                // Duminică
  };
  var badge = document.querySelector('[data-open-status]');
  if (badge) {
    var now = new Date();
    var today = hours[now.getDay()];
    var open = false;
    if (today) {
      var mins = now.getHours() * 60 + now.getMinutes();
      var s = parseInt(today[0].slice(0, 2)) * 60 + parseInt(today[0].slice(3));
      var e = parseInt(today[1].slice(0, 2)) * 60 + parseInt(today[1].slice(3));
      open = mins >= s && mins < e;
    }
    var isEn = (document.documentElement.lang || 'ro').slice(0, 2) === 'en';
    badge.textContent = open
      ? (isEn ? '● Open now' : '● Deschis acum')
      : (isEn ? '● Closed now' : '● Închis acum');
    badge.style.color = open ? '#2a9d8f' : '#e63946';
  }

  // Pre-select the service in the booking form from a ?svc= URL param,
  // so "Book ITP" / "Book service" buttons land with the right option chosen.
  // Keys map to the option position (same order in RO and EN dropdowns).
  var serviceSelect = document.querySelector('#serviciu');
  if (serviceSelect) {
    var svc = new URLSearchParams(window.location.search).get('svc');
    var svcMap = { itp: 1, alignment: 4, diagnostics: 5 };
    if (svc && svcMap[svc] != null && serviceSelect.options[svcMap[svc]]) {
      serviceSelect.selectedIndex = svcMap[svc];
    }
  }

  // Booking form -> emails the shop via FormSubmit (no backend needed).
  // Works the same on the static GitHub Pages site and later on WordPress.
  // Primary recipient is marius@marcodp.com; the rest are copied via _cc
  // (visible to each other — FormSubmit free has no true BCC).
  // First-time setup: marius@marcodp.com must click the one-time activation
  // link FormSubmit emails after the first submission.
  var form = document.querySelector('#booking-form');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      var en = (document.documentElement.lang || 'ro').slice(0, 2) === 'en';
      var L = en
        ? { subject: 'New appointment from the website', name: 'Name', phone: 'Phone', plate: 'Plate no.', svc: 'Service', date: 'Preferred date', msg: 'Message', err: 'Sorry, something went wrong. Please call us at 0744 773 698.' }
        : { subject: 'Programare nouă de pe site', name: 'Nume', phone: 'Telefon', plate: 'Nr. înmatriculare', svc: 'Serviciu', date: 'Data dorită', msg: 'Mesaj', err: 'Ne pare rău, ceva n-a mers. Sună-ne la 0744 773 698.' };
      var payload = {
        _subject: L.subject,
        _template: 'table',
        _cc: 'mariusmadmax@yahoo.com,truta_diana@yahoo.com,truta_georgiana@yahoo.com,truta_corina@yahoo.com'
      };
      payload[L.name] = data.get('nume') || '';
      payload[L.phone] = data.get('telefon') || '';
      payload[L.plate] = data.get('numar') || '';
      payload[L.svc] = data.get('serviciu') || '';
      payload[L.date] = data.get('data') || '';
      payload[L.msg] = data.get('mesaj') || '';

      var btn = form.querySelector('button[type="submit"]');
      if (btn) btn.disabled = true;

      fetch('https://formsubmit.co/ajax/marius@marcodp.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(function (r) { return r.json(); })
        .then(function () {
          var ok = form.querySelector('.form-ok');
          if (ok) ok.style.display = 'block';
          form.reset();
        })
        .catch(function () { alert(L.err); })
        .finally(function () { if (btn) btn.disabled = false; });
    });
  }
});
