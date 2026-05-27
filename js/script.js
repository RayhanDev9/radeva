 const tabItems     = document.querySelectorAll('.tab-item');
  const sectionTitle = document.getElementById('section-title');
  const allItems     = document.querySelectorAll('.accordion-item');

  const tabLabels = {
    general:  'General',
    order:    'Order',
    shipping: 'Shipping',
    return:   'Return'
  };

  tabItems.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabItems.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      sectionTitle.textContent = tabLabels[target];

      // ✅ FIX 3: Hapus attribute `hidden` dan pakai style.display saja
      allItems.forEach(item => {
        item.removeAttribute('hidden');         // bersihkan hidden attr
        if (item.dataset.tab === target) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
          item.classList.remove('open');
          const header = item.querySelector('.accordion-header');
          if (header) header.setAttribute('aria-expanded', 'false');
        }
      });
    });
  });

  allItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Tutup semua accordion yang visible
      allItems.forEach(i => {
        if (i.style.display !== 'none') {
          i.classList.remove('open');
          i.querySelector('.accordion-header')
           .setAttribute('aria-expanded', 'false');
        }
      });
      if (!isOpen) {
        item.classList.add('open');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });