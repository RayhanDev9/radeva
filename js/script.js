import { faqLogic,sendMassageLogic,tabProductLogic,productLoopingLogic,movePageProducLogic } from "./function.js";
import { dataFAQ} from "./dataFAQ.js";

sendMassageLogic()

productLoopingLogic()

movePageProducLogic();


const faq = () => {
const accordion = document.querySelector('.accordion');
console.info(dataFAQ)
Object.keys(dataFAQ).forEach(category => {
 const items = dataFAQ[category]; 
 const dataCategory = category;
 console.info()
  
  items.forEach(faq => {
    console.log(`Q: ${faq.question}`);
    console.log(`A: ${faq.answer}`);
    console.info(faq)

    const html = `
       <article class="accordion-item" data-tab="${dataCategory}" style="${dataCategory === 'general' ? '' : 'display: none;'}">
            <h3>
              <button class="accordion-header" type="button" aria-expanded="false" aria-controls="faq-halal">
                <span>${faq.question}</span>
                <span class="accordion-icon">
                  <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </span>
              </button>
            </h3>
            <div class="accordion-body" id="faq-halal">
              <p>${faq.answer}</p>
            </div>
          </article>`;
      
        accordion.insertAdjacentHTML('beforeend', html);
  });


});


}

faq()



faqLogic()

// <article class="accordion-item" data-tab="general">
//             <h3>
//               <button class="accordion-header" type="button" aria-expanded="false" aria-controls="faq-halal">
//                 <span>Sertifikasi Halal</span>
//                 <span class="accordion-icon">
//                   <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
//                 </span>
//               </button>
//             </h3>
//             <div class="accordion-body" id="faq-halal">
//               <p>Produk kami telah tersertifikasi halal oleh MUI (Majelis Ulama Indonesia). Sertifikat halal dapat dilihat pada halaman produk masing-masing.</p>
//             </div>
//           </article>

