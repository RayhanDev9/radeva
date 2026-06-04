import {
  faqLogic,
  sendMassageLogic,
  movePageProducLogic,
} from "./../utils/helpers.js";

sendMassageLogic();

faqLogic();

movePageProducLogic();

document
  .querySelector(".nav-product")
  ?.addEventListener("click", movePageProducLogic);
