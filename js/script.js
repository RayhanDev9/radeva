const faqLogic = ()=> {
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

      console.info(tabLabels[target])

      sectionTitle.textContent = tabLabels[target];

      // ✅ FIX 3: Hapus attribute `hidden` dan pakai style.display saja
      allItems.forEach(item => {
        item.removeAttribute('hidden');
            // bersihkan hidden attr
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
}
faqLogic()


// const modalLogic = () => {
//   const modalOverlay = document.querySelector(".modal-overlay");
//   console.info(modalOverlay)
//   const btnOpenModal = [...document.querySelectorAll(".card")];
//   const modalClose = document.querySelector(".modal-close");
// // 
//   /* Open Modal */
//   function openModal() {
//     modalOverlay.classList.add("active");
//     document.body.style.overflow = "hidden";
//   }

//   /* Close Modal */
//   function closeModal() {
//     console.info("ok")
//     modalOverlay.classList.remove("active");
//     // document.body.style.overflow = "";
//   }

//   /* Close Button */
//   modalClose.addEventListener("click", closeModal);

//   /* Close Outside Modal */
//   btnOpenModal.forEach((button) => {

//   button.addEventListener("click", () => {
//     //  if (modalOverlay.target === modalOverlay) {
//       openModal();
//       // window.location.href = 'html/product.html';
//     // }
//   });

// });

//   /* ESC Keyboard */
//   document.addEventListener("keydown", (e) => {
//     if (e.key === "Escape") {
//       closeModal();
//     }
//   });
// }
// modalLogic()

const tabProductLogic = () => {
  const productTab = [...document.querySelectorAll('.product-tab button')];
  const productTabItem = [...document.querySelectorAll('.product-tab-item')];
  const allItems = [...document.querySelectorAll('.product-description')];
  console.info(productTabItem[0].dataset.tab)

  // Animasi perpindahan Tab 
  productTab.forEach(itemTab => {
    itemTab.addEventListener('click',  () => {
      const target = itemTab.dataset.tab;


      productTab.forEach(other => {
          if(other.classList.contains('active-tab-product')) !other.classList.remove('active-tab-product');
          if(!other.classList.contains('active-tab-product'))itemTab.classList.add('active-tab-product');
      })

      allItems.forEach(item => {
        if(item.dataset.tab === target) item.style.display = '';
        else item.style.display = 'none';

    
  });
    })
  });

 
}
tabProductLogic()

const moveHtmlLogic = () => {
     const btnCard = [...document.querySelectorAll(".card")];

     btnCard.forEach(btn => {
      btn.addEventListener('click', () =>{

        window.location.href = 'html/product.html';
      })
     });
}

moveHtmlLogic();