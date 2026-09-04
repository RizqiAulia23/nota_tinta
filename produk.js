const catalogCards = [...document.querySelectorAll('.catalog-card')];
const filterButtons = [...document.querySelectorAll('.catalog-tab')];
const searchInput = document.querySelector('#product-search');
let selectedFilter = 'semua';

function refreshCatalog() {
  const query = (searchInput?.value || '').trim().toLowerCase();

  catalogCards.forEach((card) => {
    const category = card.dataset.category || 'lainnya';
    const searchableText = card.textContent.toLowerCase();
    const matchesFilter = selectedFilter === 'semua' || category === selectedFilter;
    const matchesSearch = !query || searchableText.includes(query);
    card.hidden = !(matchesFilter && matchesSearch);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    selectedFilter = button.dataset.filter || 'semua';
    filterButtons.forEach((item) => item.classList.toggle('active', item === button));
    refreshCatalog();
  });
});

searchInput?.addEventListener('input', refreshCatalog);

document.querySelectorAll('.catalog-card').forEach((card) => {
  const name = card.querySelector('h3')?.textContent.trim() || 'Produk Printer JUNA';
  const link = card.querySelector('.catalog-meta a');
  if (link) {
    link.href = `https://wa.me/6281277772047?text=${encodeURIComponent(`Halo JUNA, saya tertarik dengan ${name}. Apakah masih tersedia?`)}`;
    link.target = '_blank';
    link.rel = 'noopener';
  }
});

refreshCatalog();
