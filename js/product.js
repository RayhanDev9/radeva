import { sendMassageLogic,productLoopingLogic,productSelectionLogic,renderProductDetail,tabProductLogic, animasitionScroll } from "./function.js";


productLoopingLogic()

productSelectionLogic();

renderProductDetail();


setTimeout(() => {
  
  tabProductLogic()
}, 300);

animasitionScroll();