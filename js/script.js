import { faqLogic,sendMassageLogic,tabProductLogic,productLoopingLogic,movePageProducLogic } from "./function.js";
import { faqList } from "./dataFAQ.js";
faqLogic()

sendMassageLogic()

productLoopingLogic()

movePageProducLogic();


const faq = () => {
console.info(faqList)
}

faq()






