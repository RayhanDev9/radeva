import { sendMassageLogic,productLoopingLogic,productSelectionLogic,renderProductDetail,tabProductLogic, animasitionScroll,humbergerLogoMove } from "./function.js";


productLoopingLogic()

productSelectionLogic();

renderProductDetail();


setTimeout(() => {
  
  tabProductLogic()
}, 300);

animasitionScroll();

humbergerLogoMove()