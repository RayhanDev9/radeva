export const dataProduct = [
  {
     varian : 'Powder',
    title: 'Bedak MBK Powder Sachetan 13,6 gram White',
    price : 6000,
    shippingTime : '< 2-3 hari',
    image : '../assets/img/products/powder/powder-7.png',
   city : 'Kab. Tangerang' ,
   countGoodsSold :'10+ terjual',
  },
  {
    varian : 'Powder',
    title: 'Box 200 gram - bedak deodoran legendaris Varian White',
    price : 36000,
    shippingTime : '< 2-3 hari',
    image : '../assets/img/products/powder/powder-1.png',
   city : 'Kab. Tangerang' ,
   countGoodsSold :'10+ terjual',
  },
  {
     varian : 'Powder',
    title: 'Bedak MBK Powder Sachetan 13,6 gram Varian Silver',
    price : 6000,
    image : '../assets/img/products/powder/powder-2.jpg',
    shippingTime : '< 2-3 hari',
   city : 'Kab. Tangerang' ,
   countGoodsSold :'10+ terjual',
  },
  {
    varian : 'Powder',
    title: 'Box 200 gram - bedak deodoran legendaris Varian Silver',
    price : 36000,
    shippingTime : '< 2-3 hari',
    image : '../assets/img/products/powder/powder-8.png',
   city : 'Kab. Tangerang' ,
   countGoodsSold :'10+ terjual',
  },

  {
    varian : 'Powder',
    title: 'Bedak Powder MBK Tin 60g - bedak deodoran legendaris Varian White',
    price : 20000,
    shippingTime : '< 2-3 hari',
    image : '../assets/img/products/powder/powder-6.webp',
   city : 'Kab. Tangerang' ,
   countGoodsSold :'10+ terjual',
  },
    {
    varian : 'Powder',
    title: 'Bedak Powder MBK Tin 60g - bedak deodoran legendaris Varian Silver',
    price : 20000,
    shippingTime : '< 2-3 hari',
    image : '../assets/img/products/powder/powder-9.png',
   city : 'Kab. Tangerang' ,
   countGoodsSold :'10+ terjual',
  },

  // Roll
    {
    varian : 'Roll',
    title: 'MBK Deodorant Roll On Pria dan Wanita 40ml Variant Purple',
    price : 15000,
    shippingTime : '< 2-3 hari',
    image : '../assets/img/products/roll/roll-1.png',
   city : 'Kab. Tangerang' ,
   countGoodsSold :'10+ terjual',
  },
    {
    varian : 'Roll',
    title: 'MBK Deodorant Roll On Pria dan Wanita 40ml Variant Grey',
    price : 15000,
    shippingTime : '< 2-3 hari',
    image : '../assets/img/products/roll/roll-2.png',
   city : 'Kab. Tangerang' ,
   countGoodsSold :'10+ terjual',
  },
    {
    varian : 'Roll',
    title: 'MBK Deodorant Roll On Pria dan Wanita 40ml Variant Blue',
    price : 15000,
    shippingTime : '< 2-3 hari',
    image : '../assets/img/products/roll/roll-3.png',
   city : 'Kab. Tangerang' ,
   countGoodsSold :'10+ terjual',
  },
    {
    varian : 'Roll',
    title: 'MBK Deodorant Roll On Pria dan Wanita 40ml Variant Pink',
    price : 15000,
    shippingTime : '< 2-3 hari',
    image : '../assets/img/products/roll/roll-5.png',
   city : 'Kab. Tangerang' ,
   countGoodsSold :'10+ terjual',
  },
]; 

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

const productLoopingLogic = () => {
  const containerCardVarianPowder = document.querySelector('.product-varian-powder-container .cards-container');
  const containerCardVarianRoll = document.querySelector('.product-varian-roll-container .cards-container');

 dataProduct.forEach(itemProduct => {
  const html = `
   <article class="card">
          <img
            src="${itemProduct.image}"
            alt="${itemProduct.image}"
            class="card-img"/>
            <div class="card__content">
            <h3 class="card__title">${itemProduct.title}</h3>
            <div class="card__info">
              <span class="card__price">Rp ${itemProduct.price}</span>
              <span class="card__sold">${itemProduct.countGoodsSold}</span>
            </div>
            <div class="card__meta">
                <span class="card__estimate__svg">
                  <svg xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke-width="1.5" 
                  stroke="currentColor" 
                  class="icon-truck">
                  <path stroke-linecap="round" 
                        stroke-linejoin="round" 
                        d="M8.25 18.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm10.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3 13.5V6.75A2.25 2.25 0 0 1 5.25 4.5h8.25A2.25 2.25 0 0 1 15.75 6.75v6.75m0 0h2.69a2.25 2.25 0 0 1 1.91 1.06l.9 1.44a2.25 2.25 0 0 1 .35 1.19v1.56h-1.5m-4.35-6.75H3m12.75 0v6.75m0 0H8.25m7.5 0h-7.5" />
                   </svg> 
                </span>
                <span class="card__estimate__text"> &lt; ${itemProduct.shippingTime} </span> 
                <span class="limit">|</span>   
              <span class="card__location">${itemProduct.city}</span>
            </div>
          </div>
        </article>
  `;

  if(itemProduct.varian == 'Powder') containerCardVarianPowder.insertAdjacentHTML("beforeend", html);
  else containerCardVarianRoll.insertAdjacentHTML('beforeend',html)
 });


}

productLoopingLogic()

const moveHtmlLogic = () => {
     const btnCard = [...document.querySelectorAll(".card")];

     btnCard.forEach(btn => {
      btn.addEventListener('click', () =>{

        window.location.href = 'product.html';
      })
     });
}

moveHtmlLogic();