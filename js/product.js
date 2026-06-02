import { sendMassageLogic,productLoopingLogic,productSelectionLogic,renderProductDetail,tabProductLogic, animasitionScroll,humbergerLogoMove,animasiLoadingPage } from "./function.js";
animasiLoadingPage()

productLoopingLogic()

productSelectionLogic();

renderProductDetail();


setTimeout(() => {
  
  tabProductLogic()
}, 300);

animasitionScroll();

humbergerLogoMove()