import { faqLogic,sendMassageLogic,tabProductLogic,productLoopingLogic,movePageProducLogic,animasitionScroll,humbergerLogoMove,animasiLoadingPage} from "./function.js";



// jalankan
animasiLoadingPage();

animasiLoadingPage();

sendMassageLogic()

productLoopingLogic()

faqLogic()

animasitionScroll()

movePageProducLogic();

document.querySelector('.nav-product').addEventListener('click',animasitionScroll);

humbergerLogoMove();

