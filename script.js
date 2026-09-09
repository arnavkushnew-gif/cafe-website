/* Bean & Brew — booking form validation (demo: no server, nothing is sent) */
(function () {
  var form = document.getElementById('booking-form');
  if (!form) return;
  var status = document.getElementById('form-status');

  function fieldOf(input) { return input.closest('.field'); }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = form.name;
    var email = form.email;
    var problems = [];

    [name, email].forEach(function (el) { fieldOf(el).classList.remove('invalid'); });

    if (!name.value.trim()) {
      fieldOf(name).classList.add('invalid');
      problems.push('your name');
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      fieldOf(email).classList.add('invalid');
      problems.push('a valid email');
    }

    if (problems.length) {
      status.textContent = 'Please add ' + problems.join(' and ') + '.';
      status.className = 'form-status err';
      return;
    }

    status.textContent = 'Thanks, ' + name.value.trim() +
      ' — this is a demo form, so nothing was actually sent.';
    status.className = 'form-status ok';
    form.reset();
  });

  // Close the mobile menu after a nav link is tapped
  var toggle = document.getElementById('nav-toggle');
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    a.addEventListener('click', function () { if (toggle) toggle.checked = false; });
  });
})();
