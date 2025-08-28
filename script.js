// Filtri portfolio
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
    btn.classList.add('active'); btn.setAttribute('aria-selected','true');
    const filter = btn.getAttribute('data-filter');
    projects.forEach(card => {
      const tags = card.getAttribute('data-tags').split(',');
      if (filter === 'all' || tags.includes(filter)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Anno footer
document.getElementById('year').textContent = new Date().getFullYear();
