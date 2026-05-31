import { sendMassageLogic,productLoopingLogic,productSelectionLogic,renderProductDetail,tabProductLogic, } from "./function.js";

productLoopingLogic()

productSelectionLogic();

renderProductDetail();


setTimeout(() => {
  
  tabProductLogic()
}, 300);