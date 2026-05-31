import { dataProduct } from "./dataProduct.js";

// Function Untuk Section FAQ
export const faqLogic = ()=> {
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

// Function Untuk Mengirim pesan
export const sendMassageLogic = () => {
  const sendMessage = document.querySelector('.send-message');
  console.info(sendMessage)

   sendMessage.addEventListener('click', (e) => {
    e.preventDefault();
    console.info('ok')

    const name = document.getElementById('name').value;
    const noWa = document.getElementById('no-wa').value;
    const message = document.getElementById('message').value;

      const text =
      `Halo, saya ${name}
      No. WA: ${noWa}

       Pesan:
       ${message}`;

    window.open(
      `https://wa.me/62895384390007?text=${encodeURIComponent(text)}`,
      '_blank'
    );
      });
}

// Function Untuk perpindahan tab dalam product pilihan
export const tabProductLogic = () => {
  const productTab = [...document.querySelectorAll('.product-tab button')];
  const productTabItem = [...document.querySelectorAll('.product-tab-item')];
  const allItems = [...document.querySelectorAll('.product-description')];

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


// Function untuk Looping product
export const productLoopingLogic = () => {
  const containerCardVarianPowder = document.querySelector('.product-varian-powder-container .cards-container');
  const containerCardVarianRoll = document.querySelector('.product-varian-roll-container .cards-container');
  // const containerBestSeller = document.querySelector('.product-best-seller-container .cards-container');
  const containerCardBestSeller = document.querySelector('.product-best-seller-container .cards-container');
  const containerH2BestSeller = document.querySelector('.product-best-seller-container h2');



 dataProduct.forEach(itemProduct => {
  const html = `
   <article class="card" data-id="${itemProduct.id}">
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
  if (itemProduct.bestSeller)   containerCardBestSeller.insertAdjacentHTML("beforeend", html);

 });


  containerCardBestSeller.classList.add('best-seler');
  console.info(containerH2BestSeller)
  // containerH2BestSeller.style.justifyContent = 'center';
  // containerH2BestSeller.style.width = '100%';


}

// Function untuk perpindahan ke page product.html, sesuai product
export const movePageProducLogic = () => {
     const cards = [...document.querySelectorAll(".card")];

     cards.forEach(card => {
         card.addEventListener('click', () => {
          const productId = card.getAttribute('data-id');
          window.location.href = `product.html?id=${productId}`;
          
  document.body.classList.add('fade-out');

  setTimeout(() => {
    window.location.href = 'product.html';
  }, 300);
});
     });
}

// Untuk bagian product logic saja. Untuk memilih bagian mana yang di selesc user. dan di tampilkan productnya di paling atas
export const productSelectionLogic =() => {
const containerProductSelectionBody = document.querySelector('.product-selection-body');
const cardAll = [...document.querySelectorAll('.card')];
 const scrollToTopOnProductClick = () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
 }
//  console.info(cardAll)

  cardAll.forEach(card => {
  card.addEventListener('click', () => {
    containerProductSelectionBody.innerHTML = '';
    const titleCard = card.querySelector('.card__title').textContent.trim();

    const product = dataProduct.find(
      item => item.title === titleCard
    );

     const html = `
    <!-- Product Image -->
              <figure class="product-selection-product-image">
                <img 
                  src="${product.image}" 
                  alt="Product Image"
                >
              </figure>

              <!-- Product Content -->
              <div class="product-selection-product-content">

                <span class="product-category">
                 ${product.varian}
                </span>

                <h3 class="product-title">
                 ${product.title}
                </h3>

                <p class="product-price">
                  Rp ${product.price}
                </p>

              <article class="product-tab">
               <button class="product-tab-item active-tab-product " data-tab="umum">Umum</button>
                <button class="product-tab-item" data-tab="cara-pakai">Cara Pakai</button>

              </article>
               <div class="container-buy-and-description">
                 <p class="product-description" data-tab="umum">
                 ${product.productDescriptionGeneral}
                </p>
                
                 <p class="product-description" data-tab="cara-pakai" style="display: none;">
                 ${product.productDescriptionhowToUse}
                </p>

               
                <!-- Product Actions -->
                <div class="product-selection-actions">


                  <a href="${product.productLink}" target="_blank">
                    Buy Now ➜</a>

                  <a  class="btn-shoppe" href="${product.productLink}" target="_blank">
                    <img src="../assets/svg/shoppe.svg" alt="">
                  </a>

                </div>
               </div>

              </div>
  `
   containerProductSelectionBody.insertAdjacentHTML("beforeend", html);

   scrollToTopOnProductClick()

    tabProductLogic()
 

 

    console.log(product);
  });
});
}


// Selection product ketika user memilih di halaman utama
export const renderProductDetail = () => {
const nilaiRanomProduct = Math.floor(Math.random() * dataProduct.length)
document.addEventListener('DOMContentLoaded', () => {
  const containerProductSelectionBody = document.querySelector('.product-selection-body');
  const params = new URLSearchParams(window.location.search);
  const productId= Number(params.get('id')) !== 0 ? Number(params.get('id')) : nilaiRanomProduct ;

  console.info(Math.floor(Math.random() * dataProduct.length))
   containerProductSelectionBody.innerHTML = '';


  const product = dataProduct.find(item => item.id === productId);
  const html = `
    <!-- Product Image -->
              <figure class="product-selection-product-image">
                <img 
                  src="${product.image}" 
                  alt="Product Image"
                >
              </figure>

              <!-- Product Content -->
              <div class="product-selection-product-content">

                <span class="product-category">
                 ${product.varian}
                </span>

                <h3 class="product-title">
                 ${product.title}
                </h3>

                <p class="product-price">
                  Rp ${product.price}
                </p>

              <article class="product-tab">
               <button class="product-tab-item active-tab-product " data-tab="umum">Umum</button>
                <button class="product-tab-item" data-tab="cara-pakai">Cara Pakai</button>

              </article>
               <div class="container-buy-and-description">
                 <p class="product-description" data-tab="umum">
                 ${product.productDescriptionGeneral}
                </p>
                
                 <p class="product-description" data-tab="cara-pakai" style="display: none;">
                 ${product.productDescriptionhowToUse}
                </p>

               
                <!-- Product Actions -->
                <div class="product-selection-actions">


                  <a  href="${product.productLink}" target="_blank">
                    Buy Now ➜</a>

                  <a  class="btn-shoppe" href="${product.productLink}" target="_blank">
                    <img src="../assets/svg/shoppe.svg" alt="">
                  </a>

                </div>
               </div>

              </div>
  `
   containerProductSelectionBody.insertAdjacentHTML("beforeend", html);



});
}






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