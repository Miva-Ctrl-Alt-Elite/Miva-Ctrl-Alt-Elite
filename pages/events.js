(function () {
  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modal-close');
  const modalBody = document.getElementById('modal-body');

  function openModal(contentHtml) {
    if (!modal || !modalBody) return;
    modalBody.innerHTML = contentHtml;
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.querySelectorAll('.view-more').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.event-card');
      const fallbackCard = document.querySelector('.event-card');
      const source = card || fallbackCard;

      const title = source?.dataset?.title || 'Event Details';
      const datetime = source?.dataset?.datetime || 'TBD';
      const location = source?.dataset?.location || 'TBD';
      const img = source?.querySelector('img')?.getAttribute('src') || '';

      const content = `
        ${img ? `<img src="${img}" alt="${title}" />` : ''}
        <h3>${title}</h3>
        <p><strong>Date & Time: </strong> ${datetime}</p>
        <p><strong>Location: </strong> ${location}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      `;

      openModal(content);
    });
  });

  document.querySelectorAll('.scroll-link').forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  function startCountdown() {
    const timerEl = document.getElementById('countdown-timer');
    if (!timerEl) return;

    const dateStr = timerEl.getAttribute('data-datetime');
    const targetDate = new Date(dateStr);

    if (isNaN(targetDate.getTime())) {
      timerEl.textContent = 'Invalid date';
      return;
    }

    let interval = null;

    function update() {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        timerEl.textContent = 'Event is live or has passed.';
        if (interval !== null) clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      timerEl.textContent = `${days}d ${hours}h ${mins}m ${secs}s`;
    }

    interval = setInterval(update, 1000);
    update();
  }

  startCountdown();

  const subForm = document.getElementById('subscribe-form');
  if (subForm) {
    subForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      alert('Thanks! Subscribed: ' + email);
      this.reset();
    });
  }
})();