import { faqLogic,sendMassageLogic,tabProductLogic,productLoopingLogic,movePageProducLogic,animasitionScroll } from "./function.js";

sendMassageLogic()

productLoopingLogic()

faqLogic()

animasitionScroll()

movePageProducLogic();

document.querySelector('.nav-product').addEventListener('click',animasitionScroll)

