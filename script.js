document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  var forms = document.querySelectorAll('form[data-noop]');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var get = function (name) {
        var field = form.querySelector('[name="' + name + '"]');
        return field ? field.value.trim() : '';
      };

      var name = get('name');
      var email = get('email');
      var phone = get('phone');
      var reason = get('reason');
      var branch = get('branch');
      var message = get('message');

      var lines = [
        'Hello Tee Technology, I sent this from your website:',
        '',
        'Name: ' + name,
        'Email: ' + email,
        'Phone: ' + phone,
        'What I need: ' + reason,
        'Nearest branch: ' + branch,
        'Details: ' + message
      ];

      var text = encodeURIComponent(lines.join('\n'));
      var whatsappUrl = 'https://wa.me/2348165963653?text=' + text;

      var btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.textContent = 'Opening WhatsApp…';
      }

      window.open(whatsappUrl, '_blank');

      if (btn) {
        setTimeout(function () {
          btn.textContent = 'Send message';
        }, 2500);
      }
    });
  });
});
