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

  // Simple front-end booking handler (no backend).
  // Replace the alert with a real endpoint (Formspree, EmailJS, WordPress form, etc.)
  var form = document.querySelector('#booking-form');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      var en = (document.documentElement.lang || 'ro').slice(0, 2) === 'en';
      var L = en
        ? { t: 'ITP/Service appointment', name: 'Name', phone: 'Phone', plate: 'Plate no.', svc: 'Service', date: 'Preferred date', msg: 'Message' }
        : { t: 'Programare ITP/Service', name: 'Nume', phone: 'Telefon', plate: 'Nr. înmatriculare', svc: 'Serviciu', date: 'Data dorită', msg: 'Mesaj' };
      var msg =
        L.t + '%0A' +
        L.name + ': ' + encodeURIComponent(data.get('nume') || '') + '%0A' +
        L.phone + ': ' + encodeURIComponent(data.get('telefon') || '') + '%0A' +
        L.plate + ': ' + encodeURIComponent(data.get('numar') || '') + '%0A' +
        L.svc + ': ' + encodeURIComponent(data.get('serviciu') || '') + '%0A' +
        L.date + ': ' + encodeURIComponent(data.get('data') || '') + '%0A' +
        L.msg + ': ' + encodeURIComponent(data.get('mesaj') || '');
      // Opens WhatsApp with the prefilled request. Change the number if needed.
      window.open('https://wa.me/40744773698?text=' + msg, '_blank');
      var ok = form.querySelector('.form-ok');
      if (ok) ok.style.display = 'block';
    });
  }
});
