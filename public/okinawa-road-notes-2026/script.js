const tabs = document.querySelectorAll('.day-tab');
const panels = document.querySelectorAll('.day-panel');

function showDay(id, scroll = false) {
  tabs.forEach((tab) => {
    const selected = tab.dataset.target === id;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', String(selected));
  });
  panels.forEach((panel) => panel.classList.toggle('active', panel.id === id));
  if (scroll) document.querySelector('.controls').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

tabs.forEach((tab) => tab.addEventListener('click', () => showDay(tab.dataset.target)));
document.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', (event) => {
  event.preventDefault();
  showDay(link.getAttribute('href').slice(1), true);
}));

showDay(location.hash.slice(1) || 'day1');
