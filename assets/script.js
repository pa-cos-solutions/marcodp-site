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
    1: ['08:00', '18:00'], // Luni
    2: ['08:00', '18:00'], // Marți
    3: ['08:00', '18:00'], // Miercuri
    4: ['08:00', '18:00'], // Joi
    5: ['08:00', '18:00'], // Vineri
    6: ['09:00', '13:00'], // Sâmbătă
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
    badge.textContent = open ? '● Deschis acum' : '● Închis acum';
    badge.style.color = open ? '#2a9d8f' : '#e63946';
  }

  // Simple front-end booking handler (no backend).
  // Replace the alert with a real endpoint (Formspree, EmailJS, WordPress form, etc.)
  var form = document.querySelector('#booking-form');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      var msg =
        'Programare ITP/Service%0A' +
        'Nume: ' + encodeURIComponent(data.get('nume') || '') + '%0A' +
        'Telefon: ' + encodeURIComponent(data.get('telefon') || '') + '%0A' +
        'Nr. înmatriculare: ' + encodeURIComponent(data.get('numar') || '') + '%0A' +
        'Serviciu: ' + encodeURIComponent(data.get('serviciu') || '') + '%0A' +
        'Data dorită: ' + encodeURIComponent(data.get('data') || '') + '%0A' +
        'Mesaj: ' + encodeURIComponent(data.get('mesaj') || '');
      // Opens WhatsApp with the prefilled request. Change the number if needed.
      window.open('https://wa.me/40744773698?text=' + msg, '_blank');
      var ok = form.querySelector('.form-ok');
      if (ok) ok.style.display = 'block';
    });
  }
});
